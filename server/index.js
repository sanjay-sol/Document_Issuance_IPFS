const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const adduser = require("./addmodel");

const cors = require('cors');
const app = express()
const PORT = 3004;
app.use(express.json());

app.use(cors({ origin: "*" }));

/*****************  MONGOOSE CONNECTION  ********************************************  */

mongoose.connect(process.env.MONGO_URL).then(() => console.log("db connected"));


/*****************  ADD 2 DB  ********************************************  */

app.post("/add", async (req, res) => {
    try {
      const {
        filename,
        hash
      } = req.body;
      if (
       !filename || !hash
      ) {
        return res.status(400).send("Fill all Fields");
      }
     
      let newUser = new adduser({
      filename,
      hash
      });
      newUser.save();
      return res.status(200).send("Hash saved into Database");
    } catch (error) {
      console.log("error in adding", error);
      return res.status(400).send("Unable to connect database");
    }
  });


  /*****************  ALL URL'S ********************************************  */

app.get("/allurls", async (req, res) => {
    try {
      let allurls = await adduser.find();
      return res.json(allurls);
    } catch (error) {
      console.log("error in allimages..", error);
      return res.status(400).send("Unable to get all url's");
    }
  });
app.listen( PORT || 8080, ()=>{
    console.log(`Listening on Port ${PORT}...`)

})