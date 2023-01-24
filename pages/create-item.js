import { useState } from 'react'
import { ethers } from 'ethers'
// import { create as ipfsClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
// import { Buffer } from 'buffer';
import { NFTStorage, File } from "nft.storage"
const axios = require('axios')


const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGJDNjUzZURhN0YwQmJjMjIyZmYyRTEwNTY1QTA5RTQyMjczMDE0NEIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NjE3ODM0OTc5NCwibmFtZSI6Ik5GVCJ9.nn53kieznyHzFAbZssAAkIiMhxe5-ohGdqxMv70Az_4"

// const projectId = '2FTPeYpUlU9cdl8cIbpBu4ZwKPV';
// const projectSecret = 'de29cb16de6c4cf9c9e51ba7ecff0fe3';
// const auth =
// 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

// const client = ipfsClient({
//   host: 'ipfs.infura.io',
//   port: 5001,
//   protocol: 'https',
//   headers: {
//     authorization: auth,
//   },
// });

const client = new NFTStorage({ token: API_KEY })

import {
    nftaddress, nftmarketaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import { data } from 'autoprefixer'

export default function CreateItem() {
    const [fileUrl, setFileUrl] = useState(null)
    const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
    const router = useRouter()

    async function getURL(imgURL) {
        console.log("axios")
        try {
            const response = await axios.get(imgURL)
            console.log("url", response.data)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    async function onChange(e) {
        console.log("hello1")
        const file = e.target.files[0]
        try {
            const added = await client.storeBlob(
                file,
                {
                    progress: (prog) => console.log(`received: ${prog}`)
                }
            )
            console.log(added)
            let hashV = added
            console.log("sss", hashV)
            const url = `https://${added}.ipfs.nftstorage.link`
            setFileUrl(url)
            console.log("hello2")
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }

    async function createItem() {
        const { name, description, price } = formInput
        if (!name || !description || !price || !fileUrl) return
        const data = JSON.stringify({
            name, description, image: fileUrl
        })
        try {
            const f = new File([fileUrl], name, { type: 'image/gif' })
            console.log("hello")
            const added = await client.store({
                name: name,
                description: description,
                image: f,
            })
            console.log(JSON.stringify(added.data))
            // console.log(added.data.image.href)
            // console.log(added.url)
            // const myArr = added.data.image.href.split("//")
            // console.log(myArr[1])
            // console.log('https://ipfs.io/ipfs/' + myArr[1])
            // const url = await getURL('https://ipfs.io/ipfs/' + myArr[1])
            const url = added.url
            // console.log("url")
            // console.log(url)
            createSale(url)
            // console.log("done")
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }

    async function createSale(url) {
        try {
            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const provider = new ethers.providers.Web3Provider(connection)
            const signer = provider.getSigner()

            let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
            let transaction = await contract.createToken(url)
            let tx = await transaction.wait()

            let event = tx.events[0]
            let value = event.args[2]
            let tokenId = value.toNumber()

            const price = ethers.utils.parseUnits(formInput.price, 'ether')

            contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
            let listingPrice = await contract.getListingPrice()
            listingPrice = listingPrice.toString()


            transaction = await contract.createMarketItem(
                nftaddress, tokenId, price, { value: listingPrice }
            )

            console.log(tokenId)

            await transaction.wait()
            router.push('/marketplace')
        } catch (error) {
            alert("Transaction Failed \nPlease try again.")
        }
    }



    return (
        <div className="flex justify-center" style={{ backgroundColor: '#1a1a1a', minHeight: '530px' }}>
            <div className="w-1/2 flex flex-col pb-12">
                <input
                    placeholder="Asset Name"
                    className="mt-8 border rounded p-4"
                    onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
                />
                <textarea
                    placeholder="Asset Description"
                    className="mt-2 border rounded p-4"
                    onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
                />
                <input
                    placeholder="Asset Price in Matic"
                    className="mt-2 border rounded p-4"
                    onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
                />
                <input
                    type="file"
                    name="Asset"
                    className="my-4"
                    onChange={onChange}
                />
                {
                    fileUrl && (
                        <img className="rounded mt-4" width="350" src={fileUrl} />
                    )
                }
                <button onClick={createItem} className="font-bold mt-4 bg-blue-500 text-white rounded p-4 shadow-lg">
                    Create Digital Asset
                </button>
            </div>
        </div>
    )
}