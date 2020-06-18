pragma solidity ^0.6.9;
pragma experimental ABIEncoderV2;

contract Cars {
    string[] public cars;

    function get() public view returns (string[] memory) {
        return cars;
    }

    function set(string memory car) public {
        cars.push(car);
    }
}
