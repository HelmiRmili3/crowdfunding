// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Auth {
    enum Role {
        Admin,
        Association,
        Donor,
        Evaluator,
        NotFound
    }

    struct Actor {
        uint256 id;
        address wallet;
        string imageUrl;
        Role role;
        string cin;
        string description;
        string password;
    }

    uint256 public actorIdCounter;
    Actor[] public actors;

    constructor() {
        actors.push(
            Actor(
                actorIdCounter,
                msg.sender,
                "https://cdn-icons-png.flaticon.com/128/6024/6024190.png",
                Role.Admin,
                "12695849",
                "I'am the admin and the owner of this smart contract",
                "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"
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
        Role _role,
        string memory _cin,
        string memory _description,
        string memory _password
    ) public onlyRole(Role.Admin) {
        require(
            !addressExists(_address),
            "Address is already associated with an actor"
        );
        actors.push(
            Actor(
                actorIdCounter,
                _address,
                _imageUrl,
                _role,
                _cin,
                _description,
                _password
            )
        );
        actorIdCounter++;
    }

    function getActorData(
        address _address
    )
        public
        view
        returns (
            uint256 id,
            string memory imageUrl,
            Role role,
            string memory cin,
            string memory description,
            address wallet,
            string memory password
        )
    {
        for (uint256 i = 0; i < actors.length; i++) {
            if (actors[i].wallet == _address) {
                return (
                    actors[i].id,
                    actors[i].imageUrl,
                    actors[i].role,
                    actors[i].cin,
                    actors[i].description,
                    actors[i].wallet,
                    actors[i].password
                );
            }
        }
        // Return default values if the address is not found
        return (0, "", Role.NotFound, "", "", address(0), "");
    }

    function getActorRole(address _address) public view returns (Role) {
        for (uint256 i = 0; i < actors.length; i++) {
            if (actors[i].wallet == _address) {
                return actors[i].role;
            }
        }
        return Role.NotFound; // Return NotFound if the address is not found
    }

    function addressExists(address _address) public view returns (bool) {
        for (uint256 i = 0; i < actors.length; i++) {
            if (actors[i].wallet == _address) {
                return true;
            }
        }
        return false;
    }

    function getAllActors()
        public
        view
        onlyRole(Role.Admin)
        returns (Actor[] memory)
    {
        return actors;
    }
}
