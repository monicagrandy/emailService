var express = require('express');
var bodyParser = require('body-parser'); //middleware
var app = express(); // initializing the express app
var config = require('./config');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var sgTransport = require('nodemailer-sendgrid-transport');
var mg = require('nodemailer-mailgun-transport');


app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true })); //using the qs library, JSON-like experience, nested arrays possible
app.use(express.static(__dirname + '/client')); //serves up a static page with what you give it (replaces servassests function)


app.post("/email", function(req, res){
  console.log(req.body.msgBody)
  var userEmail = req.body.to;
  var recipientEmail = req.body.from;
  var userName = req.body.name;
  var subject = req.body.subject;
  var messageBody = req.body.msgBody;

  var mailOptions = {
      from: userEmail, // sender address
      to: recipientEmail, // list of receivers
      subject: subject,
      text: messageBody,
      html: '<p>' +messageBody+ '</p>'
  }

  var auth = {
    auth: {
      api_key: config.mg_api_key, //mailgun
      domain: config.mg_domain
    }
  }

  var transporter = nodemailer.createTransport(mg(auth));

    transporter.sendMail(mailOptions, function(error, response){
     if(error){
        console.log("mailgun error ", error)
        console.log("switching to sendgrid");
        var fallbackAuth = {
          auth: {
            api_user: config.sendgrid_api_user, //mailgun
            api_key: config.sendgrid_api_key
          }
        }

        var client = nodemailer.createTransport(sgTransport(fallbackAuth));
        client.sendMail(mailOptions, function(err, info){
            if (err ){
              console.log(error);
            }
            else {
              console.log('Message sent from sendgrid: ' + info);
              return;
            }
        })
      }
      else {
        console.log("Message sent from mailgun: ", response);
        return;
      }
  });
});

console.log('EmailService is listening on 4568');
app.listen(4568);
