# 第二周第一节
## 合约地址 : 0xda462De41319EcB16d690B88ee3FeEbc34B6b16b
### 存入hash : https://mumbai.polygonscan.com/tx/0xe6e9343fa7e5e1f98a6d6fd62f681afe8d0471dcf74c02f72671748e91a21954c02f72671748e91a21954
### 取出hash : https://mumbai.polygonscan.com/tx/0x12cf4c77cde3c29aef7604901ffcb4aa9b719fd62c3c4da082e16a2dfc5b0c3e

```
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Bank {
  mapping (address  => uint) private balances ;
   function getbalances() public view returns (uint){
    return balances[msg.sender];
   }

   function withdraw() public {
    uint256 count= balances[msg.sender];
    balances[msg.sender]=0;
    saveTransferEth(count);
   }

   function input()public payable{
    require(msg.value>=0,"Value error");
    balances[msg.sender]+=msg.value;
   }

  function saveTransferEth(uint256 count) public payable{
    (bool success, ) = msg.sender.call{value: count}(new bytes(0));
    require(success, 'safeTransferETH: ETH transfer failed');
  }

  receive() external payable{}
}
```
