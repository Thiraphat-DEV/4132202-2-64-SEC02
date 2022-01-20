import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyALbIwctGunWhgwt0TaK42vpDrCsWa9yzM",
  authDomain: "sec02-7e61c.firebaseapp.com",
  projectId: "sec02-7e61c",
  storageBucket: "sec02-7e61c.appspot.com",
  messagingSenderId: "225760985718",
  appId: "1:225760985718:web:961b019d790028a14a5557",
  measurementId: "G-7XRZPJSESV"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BHp0AIIiT1TWrozq-MzuBL0QbamBawvKHxPkmOmpncuM7q82QyvoJLStsUnTEIyMkQQcvI2Gh5JDJ9Ss0W6CXPE"
);

export { messaging };
