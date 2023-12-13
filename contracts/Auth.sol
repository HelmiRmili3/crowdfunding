// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Auth {
    enum Role {
        Admin,
        Association,
        Donor,
        Evaluator,
        NotFound
    }

    struct Actor {
        string name;
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

    // Event for actor creation
    event ActorCreated(
        uint256 indexed actorId,
        address indexed actorAddress,
        Role role
    );

    // Event for function execution
    event FunctionExecuted(
        string functionName,
        address indexed caller,
        bool success
    );

    constructor() {
        addAdmin(msg.sender);
    }

    function createActor(
        string memory _name,
        address _address,
        string memory _imageUrl,
        Role _role,
        string memory _cin,
        string memory _description,
        string memory _password
    ) public {
        require(
            !addressExists(_address),
            "Address is already associated with an actor"
        );

        actors.push(
            Actor(
                _name,
                actorIdCounter,
                _address,
                _imageUrl,
                _role,
                _cin,
                _description,
                _password
            )
        );

        // Emit an event to log actor creation
        emit ActorCreated(actorIdCounter, _address, _role);

        // Emit a generic event to log the execution of this function
        emit FunctionExecuted("createActor", msg.sender, true);

        actorIdCounter++;
    }

    modifier onlyAdmin() {
        require(getActorRole(msg.sender) == Role.Admin, "Permission denied");
        _;
    }

    function addAdmin(address _address) public {
        actors.push(
            Actor(
                "admin",
                actorIdCounter,
                _address,
                "https://cdn-icons-png.flaticon.com/128/6024/6024190.png",
                Role.Admin,
                "12695849",
                "I'm the admin and the owner of this smart contract",
                "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"
            )
        );

        // Emit an event to log actor creation
        emit ActorCreated(actorIdCounter, _address, Role.Admin);

        // Emit a generic event to log the execution of this function
        emit FunctionExecuted("addAdmin", msg.sender, true);

        actorIdCounter++;
    }

    function getActorData(
        address _address
    )
        public
        view
        returns (
            string memory name,
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
                    actors[i].name,
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
        return ("",0, "", Role.NotFound, "", "", address(0), "");
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

    function getAllActors() public view returns (Actor[] memory) {
        Actor[] memory data = new Actor[](actors.length);

        for (uint256 i = 0; i < actors.length; i++) {
            data[i] = Actor(
                actors[i].name,
                actors[i].id,
                actors[i].wallet,
                actors[i].imageUrl,
                actors[i].role,
                actors[i].cin,
                actors[i].description,
                actors[i].password
            );
        }

        // Emit a generic event to log the execution of this function
        return data;
    }
}
