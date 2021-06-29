const express = require("express");
const db = require("./models");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const passportConfig = require("./passport");
const morgan = require("morgan");

const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const userRouter = require("./routes/user");

const app = express();

dotenv.config();

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);
// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   if (req.method === "GET") {
//     if (req.url === "/api/posts") {
//     }
//   } else if (req.method === "POST") {
//     if (req.url === "/api/post") {
//     }
//   } else if (req.method === "DELETE") {
//     if (req.url === "api/post") {
//     }
//   }
//   res.write("first response");
//   res.write("second response");
//   res.end("Hello node");
// });

passportConfig();

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use("/posts", postsRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);

app.use((err, req, res, next) => {});

app.listen(3065, () => {
  console.log("서버 실행 중");
});
