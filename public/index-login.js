

const firebaseConfig = {
    apiKey: "AIzaSyConhnVJqa24MG8qiIHn74mvviS0xBmYig",
    authDomain: "qr-code-c7394.firebaseapp.com",
    databaseURL: "https://qr-code-c7394-default-rtdb.asia-southeast1.firebaseio.app",
    projectId: "qr-code-c7394",
    storageBucket: "qr-code-c7394.appspot.com",
    messagingSenderId: "1033831458144",
    appId: "1:1033831458144:web:8caf1d87df2ab8adc0ea05",
    measurementId: "G-FNNX2GGRJ1"
  };

  firebase.initializeApp(firebaseConfig);

  var loginForm ;
  var ref; 
  var token;
$(document).ready(function(){
   
    token = getUrlVars()["token"]
    console.log(token);

    loginForm = firebase.firestore();
    ref =  loginForm.collection("user").doc(token);

     
  });

  function submitData(){
     var  email  = document.getElementById("email").value;
     var  pass  = document.getElementById("pass").value;
     
     saveData(email , pass , token ) ;
  }

  function saveData(
    email, pass, tokens 
  ) {
   
    ref.set({
      email :email,
      password : pass,
      token : tokens,
      isVerified: true,
    }).then((result) => {
      console.log("data is added");
      location.replace("https://qr-code-c7394.web.app/welcome.html");
    }).catch((err) => {
      console.log(err);
    });;

   
  };

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
