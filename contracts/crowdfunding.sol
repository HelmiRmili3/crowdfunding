// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

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
        string field;
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

    constructor(address _authContractAddress) {
        authContract = Auth(_authContractAddress);
        nftContract = new DonationNFT();
    }

    modifier onlyRole(Auth.Role role) {
        require(
            authContract.getActorRole(msg.sender) == role,
            "Owner permission required"
        );
        _;
    }

    function createCampaign(
        string memory _field,
        string memory _title,
        string memory _description,
        uint256 _period,
        uint256 _amount,
        string memory _imageUrl,
        string memory _dataUrl
    ) public {
        campaigns.push(
            Campaign(
                campaignIdCounter,
                msg.sender,
                _field,
                _title,
                _description,
                0,
                _period,
                _amount,
                0,
                new address[](0),
                _imageUrl,
                _dataUrl,
                Status.Waiting
            )
        );
        campaignIdCounter++;
    }

    function evaluateCampaign(uint256 _id, Status _status) public {
        require(_id <= campaignIdCounter, "Invalid campaign ID");
        Campaign storage campaign = campaigns[_id];
        require(
            campaign.status == Status.Waiting,
            "Campaign status is not Waiting"
        );
        campaign.endDate = block.timestamp + campaign.period;
        campaign.status = _status;
    }

    function donateToCampaign(uint256 _campaignId) public payable {
        Campaign storage campaign = campaigns[_campaignId];

        require(_campaignId <= campaignIdCounter, "Invalid campaign ID");
        require(
            campaign.status == Status.Valid,
            "Campaign status is not Valid"
        );
        // Update the campaign's raisedAmount and donors
        campaign.raisedAmount += msg.value;
        campaign.donors.push(msg.sender);

        // Mint a new Donation NFT for the donor
        nftContract.mintDonationNFT(msg.sender, donationIdCounter);
        // Create a new Donation and associate it with the NFT
        donations.push(
            Donation(donationIdCounter, msg.sender, msg.value, _campaignId)
        );
        donationIdCounter++;
        // Transfer the donated ether to the campaign's creator
        payable(campaign.creator).transfer(msg.value);
    }

    function getAllCampaigns() public view returns (Campaign[] memory) {
        return campaigns;
    }

    function getAllDonations() public view returns (Donation[] memory) {
        return donations;
    }
}
