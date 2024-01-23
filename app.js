// *
/* lets start 8 hours node.js and express.js tutorial by freecodecamp.org
*/

// const amount = 12;

// if(amount < 10) {
//     console.log('smaller number');
// } 
// else {
//     console.log('larger number');
// }

// console.log('hey! its my first node app');

// -------------- globals --------------------

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJs)
// module - info about env where the program is being executed

// console.log(__dirname);  // to get the current directory

// setInterval(() => {
//     console.log("Hello world");
// }, 1000); // this will call the function every second


// ----------- modules -------------------------

// const john = 'john';
// const peter = 'peter';

// const sayHi = (name) => {
//     console.log(`Hello ${name}`);
// }

// sayHi('Arshad');
// sayHi(john);
// sayHi(peter);

// -------------- Module exports

// -- we usully follow below method to import code from another file. 

// module.exports.items = ['item1', 'item2','item3']; // either we use line

// // or we can follow below approch also
// const person = {
//     name: 'arshad',
// }

// module.exports.singlePerson = person;

// by using below we import file before we use it.

// const names = require('./abc');  // we don't give .js extension



// // ----------------  NodeJs Modules ------------------------

// const os = require('os');

// // infor about current user
// const user = os.userInfo();

// console.log(user);

// // method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`);

// const currentOs = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }

// console.log(currentOs);



// // --------- Path Module

// const path = require('path');
// console.log(path.sep);

// const filePath =  path.join('/content','subfolder','test.txt');

// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base); 


// //--------------------- Methods 

// // const {readFileSync,writeFileSync} = require('fs');

// // Async file
// const {readFile, writeFile} = require('fs');

// readFile('./path-to-content/abc.txt', 'utf-8', (err, result ) => {
//     if (err){
//         console.log(err);
//         return
//     }
//     console.log(result);
//     readFile('./content/second.txt','utf-8',(err, result) => {
//         if (err){
//             console.log(err);
//             return
//         }
//         console.log(result);
//     });
// });



// // --------------- HTTP ------------------------
// // we use this to start server

// const http = require('http');

// const server = http.createServer((req, res) => {

//     // for homepage
//     if(req.url === '/'){
//     res.write('Welcome to our homepage');
//     res.end();
//     }
//    if(req.url === '/about'){
//         res.write('This is a short history!!');
//         res.end();
//     }
//     else {
//         res.write('Something went wrong!');
//         res.end();
//     }
// });
// 
// server.listen(5000); // this will start server on localhost:5000


