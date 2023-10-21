// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Auth {
    enum Role {
        Admin,
        Association,
        Donor,
        Evaluator
    }

    struct Actor {
        uint256 id;
        address wallet;
        string imageUrl;
        Role role;
    }

    uint256 public actorIdCounter;
    Actor[] public actors;

    constructor() {
        actors.push(
            Actor(
                actorIdCounter,
                msg.sender,
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
        require(
            !addressExists(_address),
            "Address is already associated with an actor"
        );
        actors.push(Actor(actorIdCounter, _address, _imageUrl, _role));
        actorIdCounter++;
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

    function getAllActors() public view onlyRole(Role.Admin) returns (Actor[] memory) {
        return actors;
    }
}
