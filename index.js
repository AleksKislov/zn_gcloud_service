const app = require("express")();
const axios = require("axios");
const auth = require("./middleware/auth");
require("dotenv").config();
const authGet = auth(true);

app.get("/reset", authGet, async (req, res) => {
  const { SPECIAL_TOKEN, URL_TO_KNOCK } = process.env;
  const config = {
    headers: { "special-token": SPECIAL_TOKEN, "Content-Type": "application/json" }
  };

  axios
    .post(URL_TO_KNOCK, {}, config)
    .then(result => {
      console.log("RESPONSE RECEIVED: ", result.data);
      res.status(200).send("Success");
    })
    .catch(err => {
      console.log("AXIOS ERROR: ", err);
      res.status(500).send("Server error");
    });
});

const PORT = process.env.PORT || 6060;
app.listen(PORT, () => console.log(`App is up on port ${PORT}`));
