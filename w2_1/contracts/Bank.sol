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