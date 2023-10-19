// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

contract Crowdfunding is Ownable {
    enum Status {
        Waiting,
        Invalid,
        Valid,
        Done
    }

    enum Role {
        Admin,
        Association,
        Donor,
        Evaluator
    }

    struct Compain {
        uint256 id;
        address creator;
        string field;
        string title;
        string description;
        uint256 endDate; // Changed from startDate to endDate
        uint256 period;
        uint256 amount;
        uint256 raisedAmount;
        address[] donors;
        uint256 donorsCount;
        string imageUrl;
        string dataUrl;
        Status status;
    }

    struct Actor {
        uint256 id;
        address wallet;
        string imageUrl;
        Role role;
    }

    struct Donation {
        uint256 id;
        address donor;
        uint256 amount;
        uint256 campaign;
    }

    uint256 public compainIdCounter;
    uint256 public actorIdCounter;
    uint256 public donationIdCounter;

    Compain[] public campaigns; // List of campaigns
    Actor[] public actors; // List of actors
    Donation[] public donations; // List of donations

    event CampaignCreated(uint256 campaignId, address creator);
    event CampaignEvaluated(uint256 campaignId, Status status);
    event DonationReceived(uint256 campaignId, address donor, uint256 amount);

    constructor() {
        address ownerAddress = owner();
        actors.push(
            Actor(
                actorIdCounter,
                ownerAddress,
                "https://cdn-icons-png.flaticon.com/128/6024/6024190.png",
                Role.Admin
            )
        );
        actorIdCounter++;
    }

    modifier onlyRole(Role role) {
        require(getActorRole(msg.sender) == role, "Permission denied");
        _;
    }

    function createActor(
        address _address,
        string memory _imageUrl,
        Role _role
    ) public onlyRole(Role.Admin) {
        updateAll();

        require(
            !addressExists(_address),
            "Address is already associated with an actor"
        );
        actors.push(Actor(actorIdCounter, _address, _imageUrl, _role));
        actorIdCounter++;
    }

    function createCampaign(
        string memory _field,
        string memory _title,
        string memory _description,
        uint256 _period,
        uint256 _amount,
        string memory _imageUrl,
        string memory _dataUrl
    ) public onlyRole(Role.Association) {
        updateAll();

        campaigns.push(
            Compain(
                compainIdCounter,
                msg.sender,
                _field,
                _title,
                _description,
                0,
                _period,
                _amount,
                0,
                new address[](0),
                0,
                _imageUrl,
                _dataUrl,
                Status.Waiting
            )
        );
        compainIdCounter++;
        emit CampaignCreated(compainIdCounter, msg.sender);
    }

    function evaluateCampaign(uint256 _id, Status _status)
        public
        onlyRole(Role.Evaluator)
    {
        updateAll();

        require(_id > 0 && _id <= compainIdCounter, "Invalid campaign ID");
        Compain storage campaign = campaigns[_id - 1];
        require(
            campaign.status == Status.Waiting,
            "Campaign status is not Waiting"
        );
        campaign.endDate = block.timestamp + campaign.period;
        campaign.status = _status;
        emit CampaignEvaluated(_id, _status);
    }

    function donationTo(uint256 _campaignId)
        public
        payable
        onlyRole(Role.Donor)
    {
        updateAll();

        require(
            _campaignId > 0 && _campaignId <= compainIdCounter,
            "Invalid campaign ID"
        );
        Compain storage campaign = campaigns[_campaignId - 1];
        require(
            campaign.status == Status.Valid,
            "Campaign status is not Valid"
        );
        campaign.raisedAmount += msg.value;
        campaign.donorsCount++;
        campaign.donors.push(msg.sender);
        donations.push(
            Donation(donationIdCounter, msg.sender, msg.value, _campaignId)
        );
        donationIdCounter++;
        emit DonationReceived(_campaignId, msg.sender, msg.value);
    }

    function getActorRole(address _address) public view returns (Role) {
        for (uint256 i = 0; i < actors.length; i++) {
            if (actors[i].wallet == _address) {
                return actors[i].role;
            }
        }
        return Role.Donor; // Return Donor role if the address is not found
    }

    function addressExists(address _address) public view returns (bool) {
        for (uint256 i = 0; i < actors.length; i++) {
            if (actors[i].wallet == _address) {
                return true;
            }
        }
        return false;
    }

    function getAllActors() public view onlyRole(Role.Admin)  returns (Actor[] memory) {
        return actors;
    }

    function getAllCampaigns() public view returns (Compain[] memory) {
        return campaigns;
    }

    function getAllDonations() public view returns (Donation[] memory) {
        return donations;
    }

    function updateAll() public {
        for (uint256 i = 0; i < campaigns.length; i++) {
            Compain storage campaign = campaigns[i];

            // Check if the campaign is valid and the period is done
            if (
                campaign.status == Status.Valid &&
                block.timestamp >= campaign.endDate
            ) {
                campaign.status = Status.Done;
            }
        }
    }
}
//"education","shcoolfund","description",90010,10,"",""
//0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB,"",2