require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static("public"));

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


app.post("/sendSms", (req, res) => {
  let me = req.body.msg;
  if (me !== "") {
    client.messages
      .create({ body: me, from: "+15139163558", to: "+213672829127" })
      .then((message) => {
        let msg = message.body;
        res.json({ msg });
      })
      .done();
  }
});
app.listen(port, () => {
  console.log("startd");
});
