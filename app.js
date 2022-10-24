const express = require("express");
const ejs = require("ejs");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');



// Top Coins Price
var priceofbitcoin = ""


app.get("/",function(req,res) {
    
    
// Calling CRYPTO API
var ids = ["bitcoin","dogecoin","ethereum"]
const url = "https://api.coingecko.com/api/v3/simple/price?ids="+ids+"&vs_currencies=inr"



https.get(url,function(responce) {
    responce.on("data",function(data) {
        var price = JSON.parse(data);
        var priceofbitcoin = price.bitcoin.inr
        var priceofdogecoin = price.dogecoin.inr
        var priceofethereum = price.ethereum.inr
        console.log(priceofbitcoin,priceofdogecoin,priceofethereum)
        res.render("index",{
            bitcoin : priceofbitcoin,
            dogecoin : priceofdogecoin,
            ethereum : priceofethereum
        })
        
    })
})
    
    
    
    
    
    
   
})

app.listen(process.env.PORT || 3000);