const mysql = require('mysql2');
const express = require("express")
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const crypto = require('crypto');
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
  let verificationCodes = {};
// nodmailer thinks
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure:'true',
    port:'465',
    auth: {
      user: 'diprdx2598@gmail.com', // Your Gmail address
      pass: 'xysl ouyd know ejfd'
    },
    tls: {
      rejectUnauthorized: false, // This allows self-signed certificates
    },
  });



  app.get("/home",(req,res)=>{
    res.render("index");
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
  
  // Generate a random verification code
  const verificationCode = crypto.randomInt(100000, 999999);

  // Store the code temporarily (should be stored in DB for better security)
  verificationCodes[email] = verificationCode;
  const mailOptions = {
    from: 'diprdx2598@gmail.com',
    to: email,
    subject: 'Verification Code for Dip Notes',
    text: `Your verification code is: ${verificationCode}`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
        return res.render("sign_up", { message: 'Error sending verification email' });
    }
    console.log('Verification email sent:', info.response);
    // Redirect to a page where user can enter the verification code
    console.log( verificationCode);

    res.render("verify", { email, username, password });
});
});



  // SQL query to insert user data into the database
//   const q = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
//   connection.query(q, [username, email, password], (err, result) => {
//       if (err) {
//           console.error('Error inserting data:', err);
//           return res.status(500).render("sign_up", { message: 'Server error' });
//       }

//       // If successful, redirect to the login page
//       res.redirect("/login");
//   });
// });

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
app.get('/rate', (req, res) => {
  const q = 'SELECT username, rating FROM ratings';
  connection.query(q, (err, results) => {
      if (err) throw err;
      res.render('rate', { ratings: results }); // Pass ratings to the view
  });
});
app.post('/rate', (req, res) => {
  const { username, rating } = req.body;

  // Check if both username and rating are provided
  if (!username || !rating) {
      return res.status(400).send('Username and rating are required.');
  }

  // SQL query to insert the rating
  const sql = 'INSERT INTO ratings (username, rating) VALUES (?, ?)';
  connection.query(sql, [username, rating], (err, result) => {
      if (err) {
          console.error('Error inserting data: ', err);
          res.status(500).send('Server error');
          return;
      }

      // After inserting the new rating, fetch all the ratings
      const fetchQuery = 'SELECT username, rating FROM ratings';
      connection.query(fetchQuery, (fetchErr, ratings) => {
          if (fetchErr) {
              console.error('Error fetching data: ', fetchErr);
              res.status(500).send('Server error');
              return;
          }

          // Render the rate page with the updated ratings
          res.render('rate', { ratings: ratings });
      });
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

app.get("/verify", (req, res) => {
  res.render("verify", { email: req.query.email });
});

app.post("/verify", (req, res) => {
  const { email, code, username, password } = req.body;

  // Verify the entered code
  if (verificationCodes[email] == code) {
      // If code matches, save the user in the database
      const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
      connection.query(query, [username, email, password], (err, result) => {
          if (err) {
              console.error('Error inserting data:', err);
              return res.status(500).render("sign_up", { message: 'Server error' });
          }

          // Clean up the stored verification code
          delete verificationCodes[email];

          // If successful, redirect to the login page
          res.redirect("/login");
      });
  } else {
      res.render("verify", { email, username, password, message: 'Invalid verification code' });
  }
});

app.get("/semester/7",(req,res)=>{
  res.render("sem7");
})

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



