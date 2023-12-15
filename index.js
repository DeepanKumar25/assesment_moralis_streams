const Morails = require('moralis').default;
const {EvmChain }= require('@moralisweb3/common-evm-utils');
const { default: Moralis } = require('moralis');
require("dotenv").config();

Moralis.start({
    apiKey:process.env.MORALIS_KEY,

});

async function streams(){

    const options ={
        chains:[EvmChain.MUMBAI],
        description :"Listen to Event",
        tag: "User_Events",
        includeContractLogs: true,
        includeNativeTxs: false,
        webhookUrl :" https://1187-2405-201-e020-907f-acb4-9959-646f-ba0a.ngrok.io/users/create"

    }

    const newStream = await Moralis.Streams.add(options)

    const {id} = newStream.toJSON();

    const address = "0x3EDA13eaA199F04439067eebFbeB854454aC33cE";

    await Moralis.Streams.addAddress({address,id})

    console.log("Done")

}
streams()