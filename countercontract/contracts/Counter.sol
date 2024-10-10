// contracts/Counter.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract Counter {
    int private count;

    function addNumber(int _num) public {
        count += _num;
    }

    function subtractNumber(int _num) public {
        count -= _num;
    }

    function getCount() public view returns (int) {
        return count;
    }
}
