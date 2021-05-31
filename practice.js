
//ADD YOUR FIREBASE LINKS
/*var firebaseConfig = {
    apiKey: "AIzaSyDnvYkpduK9owEMbvQrxVQW3YhKqYvEURE",
    authDomain: "arko-thku.firebaseapp.com",
    databaseURL: "https://arko-thku-default-rtdb.firebaseio.com",
    projectId: "arko-thku",
    storageBucket: "arko-thku.appspot.com",
    messagingSenderId: "172764299538",
    appId: "1:172764299538:web:8359911a5491c15d4833cb",
   };
  firebase.initializeApp(firebaseConfig);*/

  var firebaseConfig = 
  { 
      apiKey: "AIzaSyAAxaKbqgdEtduU17HQXI1dAen6LdjL-nI",
     authDomain: "kwitter-faaee.firebaseapp.com", 
     projectId: "kwitter-faaee",
    storageBucket: "kwitter-faaee.appspot.com", 
    messagingSenderId: "615809477390", 
    appId: "1:615809477390:web:a8c2684b73647c27d8455f"
 };

    firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    });
}