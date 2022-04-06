// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.10;

contract StorageDemo
{
uint256 private store; 
address owner;
constructor()  {
owner=msg.sender;
store=0;
}
function setStore(uint256 a) onlyOwner public 
{
store=a;
}
modifier onlyOwner()
{
    require(msg.sender==owner,"NOT AN OWNER");
    _;
}
function getStore() public view returns(uint256)
{
    return store;
}


}