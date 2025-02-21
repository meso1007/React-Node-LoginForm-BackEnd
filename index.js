const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcryptjs");


// CORS設定
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
    console.log("Hi")
    console.log(req.body); 

    const sentEmail = req.body.Email;
    const sentUserName = req.body.UserName;
    const sentPassword = req.body.Password;

    if (!sentEmail || !sentUserName || !sentPassword) {
        return res.status(400).json({ message: "Missing required fields" }); // JSON形式でエラーメッセージを返す
    }

    // パスワードをハッシュ化
    bcrypt.hash(sentPassword, 10, (err, hashedPassword) => {
        if (err) {
            console.error("Error hashing password:", err);
            return res.status(500).json({ message: "Error hashing password" }); // エラーメッセージをJSONで返す
        }

        // SQLクエリの作成
        const SQL = "INSERT INTO user_tb (email, username, password) VALUES (?, ?, ?)";
        const Values = [sentEmail, sentUserName, hashedPassword];

        db.query(SQL, Values, (err, results) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ message: "Database error", error: err }); // エラーメッセージをJSONで返す
            } else {
                console.log("User inserted successfully!!");
                return res.status(200).json({ message: "User Added!" }); // 正常終了時もJSON形式で返す
            }
        });
    });
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Received email:", email);
        console.log("Type of email:", typeof email);  // emailの型を確認
        
        // MySQLクエリをPromise化する
        const sql = "SELECT * FROM user_tb WHERE email = ?";
        const results = await new Promise((resolve, reject) => {
            db.query(sql, [email], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        
        if (results.length === 0) {
            return res.status(401).json({ error: "Email not found. Please check your email or sign up." });
        }


        const user = results[0];

        console.log("Received Pass", password)
        console.log(user.password)
        // bcryptのエラーハンドリング
        try {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ error: "Password doesn't match" });
            }

            res.json({
                message: "Login successful",
                user: { id: user.id, email: user.email,  userName: user.username},
            });
        } catch (bcryptError) {
            console.error("bcrypt error:", bcryptError);
            return res.status(500).json({ error: "Password verification failed" });
        }

    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
