 //Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { 
    getDatabase,
    ref,
    child,
    get,
    onValue,
   } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAmVwifRX-YDoRmhGn2HCt-BbQkxu0KCts",
    authDomain: "humber-sandbox-b895c.firebaseapp.com",
    projectId: "humber-sandbox-b895c",
    storageBucket: "humber-sandbox-b895c.appspot.com",
    messagingSenderId: "506831525401",
    appId: "1:506831525401:web:20a3e601bb47118c23bc88"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase();

  const messages = ref(database,"messages");

  onValue(messages, (snapshot) => {
        //console.log(snapshot);
        const ul = document.getElementById("messages");

        ul.replaceChildren();

        snapshot.forEach((childSnapShot) => {
            console.log(childSnapShot.key);
            console.log(childSnapShot.val());

            const childData = childSnapShot.val();
            const text = document.createTextNode(childData.message + " ~ " + childData.name);
            const li = document.createElement("li");
            
            li.appendChild(text);
            ul.appendChild(li);
        });
    });