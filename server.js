require("dotenv").config();
const { Server } = require("socket.io");
const express = require("express");
const history = require("connect-history-api-fallback");
const path = require("path");
const logger = require("morgan");
const http = require("http");
const cookieParser = require("cookie-parser");
// const VueCookies = require("vue-cookies");
const { createProxyMiddleware } = require("http-proxy-middleware");
const request = require("request");
// const VSchema = require("./mdb.cjs");
// const Counter_Schema = require("./counter_db.cjs");
// const Board_Schema = require("./board_db.js");
const app = express();

const server = http.createServer(app);
const io = new Server(server);

app.use(history());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.all("/*", function (req, res, next) {
//   res.header("https://web-chat-32updzt2alpp3tqt2.sel4.cloudtype.app", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

const port = 8080;
const _path = path.join(__dirname, "./dist");

app.use("/", express.static(_path));
app.use(logger("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cookieParser());

/*id_pwd confirm*/
app.post("/id", async (req, res) => {
  try {
    console.log(req.body.id);
    console.log(req.body.password);
    const id = req.body.id;
    const pwd = req.body.password;
    if (id === "manito" && pwd === "manito1127") {
      res.send("1");
    } else {
      res.send("0");
    }
  } catch (error) {
    console.error("Error in /id route:", error);
    res.status(500).send("Internal Server Error");
  }
});
/*cookie*/
app.post("/cookie", (req, res) => {
  const id = req.body.id;
  console.log("manito" + id);
  res.cookie("MANITO", id);
  res.render("Cookie", { MANITO: id });
});

app.post("/cookie_confirm", (req, res) => {
  (async () => {
    const my_manito = req.cookies.MANITO;
    console.log(my_manito);
    res.send(my_manito);
  })();
});

/*send_message*/
app.post("/send_message", (req, res) => {
  console.log(req.body.message);
  const message = req.body.message;
  if (message.length >= 1) {
    res.send(message);
    console.log(message);
  } else {
    res.send("1");
  }
  // async () => {
  // };
});

app.listen(port, () => {
  console.log(port + "에서 서버동작 완료.");
});
