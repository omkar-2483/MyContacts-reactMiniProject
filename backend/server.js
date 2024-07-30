const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
// const methodOverride = require("method-override");

const app = express();

app.use(cors());
app.use(express.json());

// app.use(methodOverride("_method"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mycontacts",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM contacts";
  db.query(sql, (err, data) => {
    if (err) return res.json("error");
    return res.json(data);
  });
});

app.post("/add", (req, res) => {
  const { fullname, email, contact } = req.body;
  // Insert data into the database
  const sql =
    "INSERT INTO contacts (fullname, email, contact) VALUES (?, ?, ?)";
  db.query(sql, [fullname, email, contact], (err, result) => {
    if (err) {
      return res.send("some error occured");
    }
     return res.send("Contact Added Sucessfully");
  });
});

//delete data
app.delete("/contact/:id", (req, res) => {
  try {
    let { id } = req.params;
    // console.log(id);
    let q = `DELETE FROM contacts WHERE id=${id}`;
    db.query(q, (err, result) => {
      if (err) throw err;
      res.send("Contact Deleted Successfully");
    });
  } catch {
     res.send("some roor occured");
  }
});

app.patch("/contact/:id", (req, res) => {
  try {
    let { id } = req.params;
    let { fullname, email, contact } = req.body;
    const q = `UPDATE contacts SET fullname=?, email=?, contact=? WHERE id=?`;
    db.query(q, [fullname, email, contact, id], (err, result) => {
      if (err) {
        throw err;
      }
      res.send("Contact Updated Suceesfully");
    });
  } catch {
    res.send("some error occured");
  }
});

app.listen(8080, () => {
  console.log(`server runnung on http://localhost:8080`);
});
