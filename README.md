# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

#Setup envornment


------------------------------------
C:\Blockchain\Erc20token>npm install --save-dev ethers
------------------------------------
added 45 packages, and audited 46 packages in 17s

31 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

------------------------------------

C:\Blockchain\Erc20token>npm install --save-dev hardhat
------------------------------------

added 269 packages, and audited 315 packages in 1m

74 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

------------------------------------

C:\Blockchain\Erc20token>npx install --save-dev hardhat
npm ERR! could not determine executable to run

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\91779\AppData\Local\npm-cache\_logs\2022-12-17T10_07_57_154Z-debug-0.log

------------------------------------
C:\Blockchain\Erc20token>npx hardhat
------------------------------------

888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

Welcome to Hardhat v2.12.4

√ What do you want to do? · Create a JavaScript project
√ Hardhat project root: · C:\Blockchain\Erc20token
√ Do you want to add a .gitignore? (Y/n) · y

You need to install these dependencies to run the sample project:
  npm install --save-dev "hardhat@^2.12.4" "@nomicfoundation/hardhat-toolbox@^2.0.0"

Project created

See the README.md file for some example tasks you can run

Give Hardhat a star on Github if you're enjoying it!

     https://github.com/NomicFoundation/hardhat

Please take a moment to complete the 2022 Solidity Survey: https://hardhat.org/solidity-survey-2022


------------------------------------
npm install chai mocha
------------------------------------

added 8 packages, and audited 323 packages in 3s

74 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

------------------------------------
npm install chai
------------------------------------

up to date, audited 323 packages in 1s

74 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

------------------------------------
npm install mocha
------------------------------------

up to date, audited 323 packages in 1s

74 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

------------------------------------
npm install @openzeppeli/contracts
------------------------------------

npm ERR! code E404
npm ERR! 404 Not Found - GET https://registry.npmjs.org/@openzeppeli%2fcontracts - Not found
npm ERR! 404
npm ERR! 404  '@openzeppeli/contracts@*' is not in this registry.
npm ERR! 404 You should bug the author to publish it (or use the name yourself!)
npm ERR! 404
npm ERR! 404 Note that you can also install from a
npm ERR! 404 tarball, folder, http url, or git url.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\91779\AppData\Local\npm-cache\_logs\2022-12-17T10_13_09_016Z-debug-0.log

///
//package.json

{
  "name": "hardhat-project",
  "dependencies": {
    "@openzeppelin/contracts": "^4.8.0",
    "chai": "^4.3.7",
    "mocha": "^10.2.0"
  },
  "devDependencies": {
    "ethers": "^5.7.2",
    "hardhat": "^2.12.4"
  }
}

////
npm i

up to date, audited 324 packages in 1s

74 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


------------------------------------
npm install --save-dev @nomicfoundation/hardhat-toolbox
------------------------------------

npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extendsnpm WARN deprecated debug@3.2.6: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)npm WARN deprecated debug@3.2.6: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)npm WARN deprecated uuid@2.0.1: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.   
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.   
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142

added 370 packages, and audited 694 packages in 1m

114 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues, run:
  npm audit fix

Run `npm audit` for details.

------------------------------------
// compile
------------------------------------
// change version in hardhat.config.js

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.6",
};


(base) PS C:\Blockchain\Erc20token>npx hardhat compile
Downloading compiler 0.8.6
Compiled 6 Solidity files successfully

------------------------------------
npm install hardhat-gas-reporter --save-dev 
------------------------------------

up to date, audited 694 packages in 3s

114 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
