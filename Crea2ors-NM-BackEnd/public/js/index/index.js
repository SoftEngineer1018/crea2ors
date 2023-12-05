// var ethers = require('ethers');  
// var crypto = require('crypto');

// for (let i = 0; i < 10; i++) {
//     var id = crypto.randomBytes(32).toString('hex');
//     var privateKey = "0x"+id;
    
//     var wallet = new ethers.Wallet(privateKey);
//     console.log(privateKey, "Address: " + wallet.address);
//     console.log("--------------------------------------")
// }



function func() {
 
    // Original string
    let str = 'BTCUSDT';
 
    // Finding index of occurrence of 'Train'
    let index = str.indexOf('BTCR');
    console.log(index);
}
func();