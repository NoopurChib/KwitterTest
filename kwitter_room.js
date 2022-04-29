// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCHdmelbu6j4wu6TpVe2AJApr3fdMckaIA",
  authDomain: "kwwitter-59d93.firebaseapp.com",
  databaseURL: "https://kwwitter-59d93-default-rtdb.firebaseio.com",
  projectId: "kwwitter-59d93",
  storageBucket: "kwwitter-59d93.appspot.com",
  messagingSenderId: "778386526978",
  appId: "1:778386526978:web:bb8285cac0c02a1438e81b"
};

// Initialize Firebase
firebase.initializeApp(config);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
