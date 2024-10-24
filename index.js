const mysql = require('mysql2');
const express = require("express")
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const port = 3000;


app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'dip_notes',
    password:'coderdip07'
  });
  app.get("/home",(req,res)=>{
    res.render("home");
})
app.get("/login",(req,res)=>{
  let message ="";
  res.render("login");
}
)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ?";
  connection.query(query, [username], (err, results) => {
      if (err) {
          console.error('Database error:', err);
          return res.render("login", { message: 'Internal server error.' });
      }

      if (results.length === 0) {
          return res.render("login", { message: 'User not found.' });
      }

      const user = results[0];

      // Direct password comparison (not secure)
      if (user.password !== password) {
          return res.render("login", { message: 'Invalid password.' });
      }

      // Successful login
      res.redirect("mainhome");
  });
});


app.get("/signup",(req,res)=>{
    res.render("sign_up");
})
app.post("/signup", (req, res) => {
  let { username, email, password, pass } = req.body;

  // Check if the email or passwords are missing/invalid
  if (!email) {
      return res.render("sign_up", { message: 'Email is required' });
  }

  if (password !== pass) {
      return res.render("sign_up", { message: 'Passwords do not match' });
  }

  // SQL query to insert user data into the database
  const q = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
  connection.query(q, [username, email, password], (err, result) => {
      if (err) {
          console.error('Error inserting data:', err);
          return res.status(500).render("sign_up", { message: 'Server error' });
      }

      // If successful, redirect to the login page
      res.redirect("/login");
  });
});

  app.get("/upload",(req,res)=>{
   res.render("upload");
  })
  app.post("/upload",(req,res)=>{
    let{ username,email,link,subject,sem}= req.body;
    let q = `INSERT INTO notes (username, email, drive_link, subject,same) VALUES (?, ?,?,?,?)`;
        try{
          connection.query(q,[username,email,link,subject,sem],(err,result)=>{
            if(err) throw err;
            res.render("mainhome")
            })
        }catch(err){
          res.send("there is  in db");
        }
   })
   app.get("/academics",(req,res)=>{
    res.render("academics")
   })
   app.get("/gyaan",(req,res)=>{
    res.render("gyaan");
   })
   app.get("/samesters",(req,res)=>{
    res.render("samesters");
   })
   app.get("/cal",(req,res)=>{
    res.render("cal")
   })
   app.get("/calsamesters",(req,res)=>{
    res.render("calsamesters");
   })
  app.get("/cal3",(req,res)=>{
    res.render("cal3");
  })
  app.get("/cal4",(req,res)=>{
    res.render("cal4");
  })
  app.get("/cal5",(req,res)=>{
    res.render("cal5");
  })
  app.get("/cal6",(req,res)=>{
    res.render("cal6");
  })
  app.get("/cal7",(req,res)=>{
    res.render("cal7");
  })
  app.get("/cal8",(req,res)=>{
    res.render("cal8");
  })
  app.get("/cal1",(req,res)=>{
    res.render("cal1")
  })

app.get("/feedback",(req,res)=>{
  res.render("feedback");
})
app.get("/mailoption", (req, res) => {
  res.render("feed", { message: "" }); // Pass an empty message initially
});

app.post("/mailoptions", (req, res) => {
  let { fullName, email, subject, message } = req.body;
  let q = "INSERT INTO feeback (fullName, email, subject, msg) VALUES (?, ?, ?, ?)";

  try {
    connection.query(q, [fullName, email, subject, message], (err, result) => {
      if (err) throw err;
      console.log("Data inserted:", result);
      // Pass a success message to the feed.ejs page
      res.render("mainhome", { message: "Message sent successfully!" });
    });
  } catch (err) {
    console.log("Error:", err);
    // Pass an error message to the feed.ejs page
    res.render("feed", { message: "There was an error sending the message." });
  }
});
app.get ("/rate", (req,res)=>{
  res.render("rate");
})
app.post('/rates', (req, res) => {
  const { username, rating } = req.body;

  // Check if both username and rating are provided
  if (!username || !rating) {
      return res.status(400).send('Username and rating are required.');
  }

  // SQL query to insert the rating
  const sql = 'INSERT INTO ratings (username, rating) VALUES (?, ?)';
connection.query(sql, [username , rating], (err, result) => {
      if (err) {
          console.error('Error inserting data: ', err);
          res.status(500).send('Server error');
          return;
      }
      res.redirect('rate'); // Redirect back to the rate us page
  });
});
app.get ("/about",(req,res)=>{
  res.render("about_us")
})
app.get("/extras",(req,res)=>{
  res.render("extras")
})
app.get("/mentalhealth",(req,res)=>{
  res.render("mentalhealth")
})
app.get("/blogs",(req,res)=>{
  res.render("blogs")
})
app.get("/mainhome",(req,res)=>{
  res.render("mainhome");
})



  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



