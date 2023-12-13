// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Auth.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract DonationNFT is ERC721, Ownable {
    constructor() ERC721("DonationNFT", "DNFT") Ownable(msg.sender) {}

    function mintDonationNFT(address to, uint256 tokenId) external onlyOwner {
        _mint(to, tokenId);
    }
}

contract Crowdfunding {
    enum Status {
        Waiting,
        Invalid,
        Valid,
        Done
    }

    struct Campaign {
        uint256 id;
        address creator;
        string name;
        //string field;
        string title;
        string description;
        uint256 endDate;
        uint256 period;
        uint256 amount;
        uint256 raisedAmount;
        address[] donors;
        string imageUrl;
        string dataUrl;
        Status status;
    }

    struct Donation {
        uint256 id;
        address donor;
        uint256 amount;
        uint256 campaign;
    }

    uint256 public campaignIdCounter = 0;
    uint256 public donationIdCounter = 0;

    Campaign[] public campaigns;
    Donation[] public donations;

    DonationNFT public nftContract;
    Auth public authContract;

    event DonationMade(uint256 campaignId, address donor, uint256 amount);

    constructor(address _authContractAddress) {
        authContract = Auth(_authContractAddress);
        nftContract = new DonationNFT();
    }

    function createCampaign(
        string memory _name,
        //string memory _field,
        string memory _title,
        string memory _description,
        uint256 _period,
        uint256 _amount,
        string memory _imageUrl,
        string memory _dataUrl
    ) public {
        expiredCampaigns();

        // Create an empty array of donors
        address[] memory emptyDonors = new address[](0);

        // Increment the campaignIdCounter
        uint256 newCampaignId = campaignIdCounter;

        // Create the campaign with basic details
        Campaign memory newCampaign = Campaign({
            id: newCampaignId,
            creator: msg.sender,
            name: _name,
           // field: _field,
            title: _title,
            description: _description,
            endDate: 0,
            period: _period,
            amount: _amount,
            raisedAmount: 0,
            donors: emptyDonors,
            imageUrl: _imageUrl,
            dataUrl: _dataUrl,
            status: Status.Waiting
        });

        // Push the new campaign to the array
        campaigns.push(newCampaign);

        // Increment the campaignIdCounter
        campaignIdCounter++;
    }

    function evaluateCampaign(uint256 _id, Status _status) public {
        expiredCampaigns();
        require(_id <= campaignIdCounter, "Invalid campaign ID");
        Campaign storage campaign = campaigns[_id];
        require(
            campaign.status == Status.Waiting,
            "Campaign status is not Waiting"
        );

        // Update the campaign's endDate and status
        campaign.endDate = block.timestamp + campaign.period;
        campaign.status = _status;
    }

    function donate(uint256 _id) public payable {
        Campaign storage campaign = campaigns[_id];
        require(_id <= campaignIdCounter, "Invalid campaign ID");
        require(
            campaign.status == Status.Valid,
            "Campaign status is not Valid"
        );
        require(
            campaign.status != Status.Done,
            "Campaign status is Done"
        );
        require(
            campaign.raisedAmount < campaign.amount,
            "Campaign is already fully funded"
        );

        // Update the campaign's raisedAmount and donors
        campaign.raisedAmount += msg.value;
        campaign.donors.push(msg.sender);

        // Mint a new Donation NFT for the donor
        nftContract.mintDonationNFT(msg.sender, donationIdCounter);
        // Create a new Donation and associate it with the NFT
        Donation memory newDonation = Donation({
            id: donationIdCounter,
            donor: msg.sender,
            amount: msg.value,
            campaign: _id
        });
        donations.push(newDonation);
        donationIdCounter++;

        // Emit an event to indicate that a donation has been made
        emit DonationMade(_id, msg.sender, msg.value);

        // Transfer the donated ether to the campaign's creator
        payable(campaign.creator).transfer(msg.value);
    }

    function getAllCampaigns() public view returns (Campaign[] memory) {
        return campaigns;
    }

    function getAllDonations() public view returns (Donation[] memory) {
        return donations;
    }
    
    function expiredCampaigns() internal {
        for (uint256 i = 0; i < campaigns.length; i++) {
            if (
                campaigns[i].endDate >= block.timestamp ||
                campaigns[i].raisedAmount >= campaigns[i].amount
            ) {
                campaigns[i].status = Status.Done;
            }
        }
    }
    function expired() public {
        for (uint256 i = 0; i < campaigns.length; i++) {
            if (
                campaigns[i].endDate >= block.timestamp ||
                campaigns[i].raisedAmount >= campaigns[i].amount
            ) {
                campaigns[i].status = Status.Done;
            }
        }
    }
}
