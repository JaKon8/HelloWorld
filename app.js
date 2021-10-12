const express = require("express");
const figlet = require("figlet");
const weirdFonts = require("weird-fonts");

const app = express();

app.get('/',(req,res) => {
    res.send(`<h1>${weirdFonts.circle("Hello World!")}</h1>`)
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000....")
})

