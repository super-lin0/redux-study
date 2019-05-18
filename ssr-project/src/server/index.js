import express from "express";
import React from "react";
import { renderToString } from "react-dom";

import App from "../shared";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const htmlMarkup = renderToString(<App />);

  res.send(`
  <!DOCTYPE html>
  <head>
    <title>Universal React</title>
    <link rel="stylesheet" href="/css/main.css">
    <script src="/bundle.js" defer></script>
  </head>
  <body>
  <div id="root">${htmlMarkup}</div>
  </body>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening!");
});
