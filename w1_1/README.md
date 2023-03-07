##钱包地址:0x5390046ecB5eECee7F1510f7B9cA60fA3a4499BB

##交易hash:0x695834855a0c575563d3b449493352f4492fe50d36851e1a2495d7dac6b7f648

交易截图
![交易截图](https://github.com/Long778899/homework/blob/main/w1_1/eb406fa6c2c45fb25ac271a73115024.png)

```
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Counter {
    uint public counter;

    constructor() {
        counter = 0;
    }

    function count() public {
        counter = counter + 1;
    }
    function add(uint256 a) public{
        counter=counter+a;
    }

}
```