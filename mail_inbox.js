var MailListener = require("mail-listener2");

var mailListener = new MailListener({
  username: "moi.pierre.raby@gmail.com",
  password: "starwarsCw6uTNt",
  host: "imap.gmail.com",
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
  mailbox: "INBOX",
  searchFilter: "UNSEEN", 
  markSeen: true,
  fetchUnreadOnStart: true, 
  mailParserOptions: {streamAttachments: true} 
});

mailListener.start(); 

mailListener.on("server:connected", function(){
  console.log("imapConnected");
});

mailListener.on("server:disconnected", function(){
  console.log("imapDisconnected");
});

mailListener.on("error", function(err){
  console.log(err);
});

mailListener.on("mail", function(mail){

   console.log("Text body:", mail.text);
   console.log("From:", mail.from); 
   console.log("Subject:", mail.subject);
   console.log("Date : ", mail.date);

});
