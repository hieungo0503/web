const firebaseConfig = {
  apiKey: "AIzaSyDFyDLLnlmh6xzUQ9G9i6rxQPbVr4E2K3s",
  authDomain: "tt-iot-7555c.firebaseapp.com",
  databaseURL: "https://tt-iot-7555c-default-rtdb.firebaseio.com",
  projectId: "tt-iot-7555c",
  storageBucket: "tt-iot-7555c.appspot.com",
  messagingSenderId: "229210672687",
  appId: "1:229210672687:web:73bd096168b96a8e1740da",
  measurementId: "G-2P1FJDX7XP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase
  .database()
  .ref("/LR/humi")
  .on("value", function (snapshot) {
    var humi = snapshot.val();
    document.getElementById("humi").innerHTML = " "+ humi + "%RH";
    console.log(humi);
  });
firebase
  .database()
  .ref("/LR/temp")
  .on("value", function (snapshot) {
    var temp = snapshot.val();
    document.getElementById("temp").innerHTML = " "+ temp + "℃";
    console.log(temp);
  });


  // var id_switch = document.getElementById('sw');

  // id_switch.addEventListener('change',function(){
  //   if(this.checked == true){
  //     console.log('CHECKED');
  //   }else{
  //     console.log('NOT CHECKED');
  //   }
  // });