// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Score {
    address public owner=0x9D426ace3Ebc2cc20d0c51c907379fA193133022;
    mapping (address  => uint8) public scores ; 
    mapping (address  => bool) public userAuthority; 
    error NotOwner();
    error NotTeacher();
    error NumUnusual();

    function setScore(uint8 score) external onlyTeacher{
        if(score>100)revert NumUnusual();
        scores[msg.sender]=score;
    }
    function setTeacher(address user) external onlyOwner{
        userAuthority[user]=true;
    }

    modifier onlyOwner() {
        if(msg.sender != owner) revert NotOwner();
        _;
    }
     modifier onlyTeacher() {
        if(!userAuthority[msg.sender]) revert NotTeacher();
        _;
    }

}

interface IScore {
     function setScore(uint8 score) external;
}

contract Teacher{
    function setScore(uint8 score,address _targetContract) external {
        IScore(_targetContract).setScore(score);
    }
}

