# AIP uploader

## Prerequisites
1. Sign up for an account at https://pinata.cloud/signup
2. Get your Pinata API key and Pinata Secret API Key at https://pinata.cloud/account
3. Get a **raw** copy of the AIP file from Github. E.g. https://raw.githubusercontent.com/aave/aip/master/content/aips/aip-3.md
4. Save the raw AIP file in the same directory as this uploader (e.g. `aipRawExample.md`)
5. In your terminal: `npm run install`
6. Upload using the below commmands

## How to use
Open this directory in terminal and use the command:
```
./cli.js INPUT_FILE.md TITLE SHORT_DESCRIPTION PINATA_KEY PINATA_SECRET
```
where:
 - `INPUT_FILE.md` is the raw AIP file from Github
 - `TITLE` is the title of the AIP, e.g. "V1 upgrades for seamless transition to AAVE v2"
 - `SHORT_DESCRIPTION` is the short description of the AIP, e.g. "This AIP proposes small modifications to the repay() method to enable seamless transition to Aave v2."
 - `PINATA_KEY` is your API key from Pinata
 - `PINATA_SECRET` is your API secret from Pinata

When the operation completes, the IPFS hash will be returned in the terminal.


