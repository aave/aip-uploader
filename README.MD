# AIP uploader

## Prerequisites
1. Sign up for an account at https://pinata.cloud/signup.
2. Get your Pinata API key and Pinata Secret API Key at https://pinata.cloud/account
3. Do not forget to verify your email
4. Get a **raw** copy of the AIP file from Github. E.g. https://raw.githubusercontent.com/aave/aip/Pending-AIPs/content/aips/AIP-3.md 
5. Save the raw AIP file in the same directory as this uploader (e.g. `aipRawExample.md`)
6. Upload using the below commmand

## How to use

In this directory: 
- Fill the .env environment file with the title, short description and your Pinata keys.
- Run the following command
```
npm i && npm run upload
```


When the operation completes, three files will be created: 
- `ipfsHash` containing the IPFS hash of the document.
- `encodedIpfsHash` containing the encoded IPFS hash of the document, to be used to create the proposal transaction.
- `ipfsAipDoc.json` containing the IPFS document uploaded


