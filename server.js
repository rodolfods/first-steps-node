const express = require("express");
const server = express();
const path = require("path");
const router = express.Router();

const app = require("./app");
/*
server.get('/', function (req, res) {
    res.send(index);
});
*/
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index2.html"));
  //__dirname : It will resolve to your project folder.
});

server.get("/download", function(req, res) {
  app.execute(res).then(fileNameZip => {
    // res.send(`todas imagens baixadas ${fileNameZip}`);
    const file = `${__dirname}/${fileNameZip}`;
    console.log("downloading file", file);
    res.download(file);
  });
});

server.use("/", router);

server.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
