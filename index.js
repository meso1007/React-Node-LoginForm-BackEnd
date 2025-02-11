const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// CORS設定
app.use(express.json());
app.use(cors());

// サーバー起動
app.listen(3002, () => {
    console.log("Server is Running on Port 3002");
});

// データベース接続
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "mysql",
    database: "nodepracdb",
});

// データベース接続確認
db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to the database");
});

app.post("/register", (req, res) => {
    console.log(req.body);  // ここでリクエストボディを確認

    const sentEmail = req.body.Email;
    const sentUserName = req.body.UserName;
    const sentPassword = req.body.Password;

    if (!sentEmail || !sentUserName || !sentPassword) {
        return res.status(400).send("Missing required fields");
    }

    // SQLクエリの作成
    const SQL = "INSERT INTO user_tb (email, username, password) VALUES (?,?,?)";
    const Values = [sentEmail, sentUserName, sentPassword];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            console.error(err);  // エラー内容をログに出力
            res.status(500).send({ message: "Database error", error: err });
        } else {
            console.log("User inserted successfully!!");
            res.status(200).send({ message: "User Added!" });
        }
    });
});

