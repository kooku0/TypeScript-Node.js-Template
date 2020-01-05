import * as express from "express";

function runServer() {
  const app = express();
  app.listen(5000, () => {
    console.log("start server");
    console.log(process.env.NODE_ENV);
  });
}
runServer();
