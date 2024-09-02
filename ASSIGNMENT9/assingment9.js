
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBLn2u2Alhov48QYSNt-BhO_WHTvGLzg5s",
    authDomain: "creativetutorial-15772.firebaseapp.com",
    projectId: "creativetutorial-15772",
    storageBucket: "creativetutorial-15772.appspot.com",
    messagingSenderId: "812826130660",
    appId: "1:812826130660:web:1022779184cb1e402ed4f1",
    measurementId: "G-XVZGH002FW"
  };


  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);
document.getElementById("submit").addEventListener('click',function(e){
set(ref(db,'user/'+ document.getElementById("username").value),
{
  username: document.getElementById("username").value,
  email:document.getElementById("email").value,
  phoneNumber:document.getElementById("phone").value
});
   alert("Login Successfull !");

})
