

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


var url;
var qr_token;
var myVar


$(document).ready(function(){
    qr_token = randomStr(20, '123456789abcdefghijklmnopqrstuvwxyz')
    console.log(qr_token);
     url = "https://qr-code-c7394.web.app/login.html?token="+ qr_token;
    console.log("https://qr-code-c7394.web.app/login.html?token="+ qr_token);
    generateQRCode()
    getDocument()
  });



  function getDocument(){
   console.log("i am running");
     firebase.firestore().collection("user").doc(""+qr_token).get().then((result) => {
      if (result.exists) {
        
        console.log("Document data:", result.data());
        location.replace("https://qr-code-c7394.web.app/welcome.html");
        clearTimeout(myVar);
    } else {
      console.log("No such document!");
      myVar = setTimeout(getDocument, 5000);
        // doc.data() will be undefined in this case
        
    }
      
    }).catch((err) => {
      console.log(err)
    });
  }


function randomStr(len, arr) {
    var ans = '';
    for (var i = len; i > 0; i--) {
        ans += 
          arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
}

function generateQRCode() {
  let website = url;
  if (website) {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, website);
    
    document.getElementById("qrcode-container").style.display = "block";
  } else {
    alert("Refresh the token ! something went wrong");
  }
}

