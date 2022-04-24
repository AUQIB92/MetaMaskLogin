

// contract address on Ropsten:

const storageAddress='0x028B8A8f97cb9e74ec077b393fBb5290D065AAbA'
// add contract ABI from Remix:

var abiStorage = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "a",
        "type": "uint256"
      }
    ],
    "name": "setStore",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getStore",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];



// Using the 'load' event listener for Javascript to
// check if window.ethereum is available

window.addEventListener('load', async function() {
  
  if (typeof window.ethereum !== 'undefined') {
    console.log('window.ethereum is enabled')
    if (window.ethereum.isMetaMask === true) {
      console.log('MetaMask is active')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += 'MetaMask Is Available!'

      // add in web3 here
      var web3 = new Web3(window.ethereum)
      const str = new web3.eth.Contract(abiStorage, storageAddress);
        var value = await str.methods.getStore().call()
          console.log(value)
     const ssDisplayValue1 = document.getElementById('store-val')
        ssDisplayValue1.innerHTML = 'Value inside Store is : ' + value
        //window.location.reload();



    } else {
      console.log('MetaMask is not available')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += 'MetaMask Not Available!'
      // let node = document.createTextNode('<p>MetaMask Not Available!<p>')
      // mmDetected.appendChild(node)
    }
  } else {
    console.log('window.ethereum is not found')
    let mmDetected = document.getElementById('mm-detected')
    mmDetected.innerHTML += '<p>MetaMask Not Available!<p>'
  }
})


var web3 = new Web3(window.ethereum)

// Grabbing the button object,  

const mmEnable = document.getElementById('mm-connect');

// since MetaMask has been detected, we know
// `ethereum` is an object, so we'll do the canonical
// MM request to connect the account. 
// 
// typically we only request access to MetaMask when we
// need the user to do something, but this is just for
// an example
 
mmEnable.onclick = async () => {
  
  var web3 = new Web3(window.ethereum)
  await ethereum.request({ method: 'eth_requestAccounts'})
  // grab mm-current-account
  // and populate it with the current address
  var mmCurrentAccount = document.getElementById('mm-current-account');
  mmCurrentAccount.innerHTML = 'Current Account: ' + ethereum.selectedAddress
  var mmCurrentAccountBal = document.getElementById('mm-current-account-bal');

  mmCurrentAccountBal.innerHTML = 'Current Balance : ' +   web3.utils.fromWei( await web3.eth.getBalance(ethereum.selectedAddress),'ether') + 'ETH'
  const str = new web3.eth.Contract(abiStorage, storageAddress);
  var value = await str.methods.getStore().call()
  console.log(value)
   const ssDisplayValue1 = document.getElementById('store-val')
   ssDisplayValue1.innerHTML = 'Value inside Store is : ' + value
}
const setStr = document.getElementById('set-str');
setStr.onclick = async () => {
  // grab value from input
  console.log("Hello")
  var web3 = new Web3(window.ethereum)

  // instantiate smart contract instance
  const str = new web3.eth.Contract(abiStorage, storageAddress);
  
  str.setProvider(window.ethereum)
  const ssInputValue = document.getElementById('ss-input-box').value;
  console.log(ssInputValue)
  await str.methods.setStore(ssInputValue).send({from: ethereum.selectedAddress})
  window.location.reload();
}



 window.ethereum.on('accountsChanged', async function (accounts) {
  console.log('accountsChanges',accounts);
 
  await ethereum.request({ method: 'eth_requestAccounts'});
  // grab mm-current-account
  // and populate it with the current address
  var mmCurrentAccount = document.getElementById('mm-current-account');
  mmCurrentAccount.innerHTML = 'Current Account: ' + ethereum.selectedAddress
  var mmCurrentAccountBal = document.getElementById('mm-current-account-bal');

  mmCurrentAccountBal.innerHTML = 'Current Balance : ' +   web3.utils.fromWei( await web3.eth.getBalance(ethereum.selectedAddress),'ether') + 'ETH'
  const str = new web3.eth.Contract(abiStorage, storageAddress);
  var value = await str.methods.getStore().call()
  console.log(value)
   const ssDisplayValue1 = document.getElementById('store-val')
   ssDisplayValue1.innerHTML = 'Value inside Store is : ' + value
  // window.location.reload();


});
// grab the button for input to a contract:


// const ssSubmit = document.getElementById('ss-input-button1');

// ssSubmit.onclick = async () => {
//   // grab value from input
  
//   const ssInputValue = document.getElementById('ss-input-box').value;
//   console.log(ssInputValue)

//   var web3 = new Web3(window.ethereum)

//   // instantiate smart contract instance
//   const pty = new web3.eth.Contract(abiPTY, ptyAddress)
//   const ppty = new web3.eth.Contract(abipPTY, pptyAddress)
//   pty.setProvider(window.ethereum)
//   ppty.setProvider(window.ethereum)
//   await ppty.methods.deposit(BigInt(ssInputValue*1e18)).send({from: ethereum.selectedAddress})
//   window.location.reload()
// }
// const ssSubmit1 = document.getElementById('ss-input-button2');
// ssSubmit1.onclick = async () => {
//   // grab value from input
  
//   const ssInputValue = document.getElementById('ss-input-box').value;
//   console.log(ssInputValue)

//   var web3 = new Web3(window.ethereum)

//   // instantiate smart contract instance
//   const pty = new web3.eth.Contract(abiPTY, ptyAddress)
//   const ppty = new web3.eth.Contract(abipPTY, pptyAddress)
//   pty.setProvider(window.ethereum)
//   ppty.setProvider(window.ethereum)
//   await pty.methods.transfer('0xdb634749715fB7b5B9aD6dF27A2060FE3fF7bd3e',BigInt(ssInputValue*1e18)).send({from: ethereum.selectedAddress})
//   await ppty.methods.deposit(BigInt(ssInputValue*1e18)).send({from: ethereum.selectedAddress})
//   window.location.reload()
// }

// window.addEventListener('load', async function() {
  

//   var web3 = new Web3(window.ethereum)

//   const pty = new web3.eth.Contract(abiPTY, ptyAddress)
//   pty.setProvider(window.ethereum)

//   var value = await pty.methods.balanceOf( ethereum.selectedAddress).call()
  
//   console.log(value)

//   const ssDisplayValue1 = document.getElementById('ss-display-value1')

//   ssDisplayValue1.innerHTML = 'PTY Balance : ' + value * 1e-18  + ' '+'PTY'
//   const ppty = new web3.eth.Contract(abipPTY, pptyAddress)
//   ppty.setProvider(window.ethereum)

//   var value2 = await ppty.methods.balanceOf( ethereum.selectedAddress).call()


//   const ssDisplayValue2 = document.getElementById('ss-display-value2')

//   ssDisplayValue2.innerHTML = 'pPTY Balance : ' + value2 * 1e-18  + ' '+'pPTY'
// })

