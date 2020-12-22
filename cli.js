#!/usr/bin/env node

const fs = require('fs')
const fetch = require('node-fetch')

const pinataEndpoint = 'https://api.pinata.cloud/pinning/pinJSONToIPFS'
const [,, ...args] = process.argv

const aipInput = args[0]
const title = args[1]
const shortDescription = args[2]
const pinataKey = args[3]
const pinataSecret = args[4]

const aipFile = fs.readFileSync(aipInput).toString()


const dict = {
  title,
  shortDescription,
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
    pinata_api_key: pinataKey,
    pinata_secret_api_key: pinataSecret,
  },
})
  .then(res => {
    return res.json()
  }).then(result => {
    if (result.error) throw new Error(result.error)
    console.log('✅ Success!')
    console.log(` IPFS hash: ${result.IpfsHash}`)
    console.log(` See the file here: https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`)
  })
  .catch((error) => {
    console.log('❌ Error!')
    console.log(' ', error.message)
  })

