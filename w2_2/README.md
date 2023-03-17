# Sample Hardhat Project

## 合约地址 : https://mumbai.polygonscan.com/address/0xe526b6a9cd8345ff66ee1d97987624bd871baef7

### 查询hash : https://mumbai.polygonscan.com/tx/0xa73723388eea13eb599c2d8bcbfe0fca7853aa34f3be617543456a38326669a2

### 写入hash : https://mumbai.polygonscan.com/tx/0x0efdbfd3fb1be980b32a68e53cabe67331a79ee6bc61212ac26e4f21c2a04357


![查询权限](/w2_2/pic/查询权限.png)

![添加权限](/w2_2/pic/添加权限.png)

```
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


```
