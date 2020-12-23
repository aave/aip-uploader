#!/usr/bin/env node
require('dotenv').config()
const bs58 = require('bs58');
const fs = require('fs')
const fetch = require('node-fetch')

const { FILE_PATH, TITLE, SHORT_DESCRIPTION, PINATA_KEY, PINATA_SECRET} = process.env;

const pinataEndpoint = 'https://api.pinata.cloud/pinning/pinJSONToIPFS'

const aipFile = fs.readFileSync(FILE_PATH).toString()

const dict = {
  title: TITLE,
  shortDescription: SHORT_DESCRIPTION,
  description: aipFile,
}
console.log('👷‍♀️ Uploading AIP info info to IPFS')

fetch(pinataEndpoint, {
  method: 'POST',
  body: JSON.stringify({
    pinataOptions: { cidVersion: 0 },
    pinataContent: dict,
  }),
  headers: {
    'Content-Type': 'application/json',
    pinata_api_key: PINATA_KEY,
    pinata_secret_api_key: PINATA_SECRET,
  },
})
  .then(res => {
    return res.json()
  }).then(result => {
    if (result.error) throw new Error(result.error)
    const hash = result.IpfsHash
    const encodedHash = `0x${
      bs58
      .decode(hash)
      .slice(2)
      .toString('hex')
    }`
    console.log('✅ Success!')
    console.log(` IPFS hash: ${hash}`)
    console.log(` Encoded IPFS hash (for proposal creation): ${encodedHash}`)
    fs.writeFileSync('./ipfsHash', hash)
    fs.writeFileSync('./encodedIpfsHash', encodedHash)
    console.log(` See the file here: https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`)
    console.log('👷‍♀️ Uploading AIP info info to IPFS node of theGraph')
  })
  .catch((error) => {
    console.log('❌ Error!')
    console.log(' ', error.message)
  })

