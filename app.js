const express = require("express");
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const app = express();
const port = process.env.PORT || 5000 ; 
const client = require("twilio")(accountSid, authToken);
app.use(express.json());
app.use(express.static("public"));

app.post("/sendSms", (req, res) => {
  let me = req.body.msg;
  if (me !== "") {
    client.messages
      .create({
        body: me,
        messagingServiceSid: "MG89595688150e4e7d3296cc2ca7b5frokc",
        to: "+6020304193",
      })
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

