// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCL0vhSPqcbQlUwPRAsaLMlFy_vxiVEgl4",
  authDomain: "mental-health-hacks.firebaseapp.com",
  databaseURL: "https://mental-health-hacks-default-rtdb.firebaseio.com",
  projectId: "mental-health-hacks",
  storageBucket: "mental-health-hacks.appspot.com",
  messagingSenderId: "134361721075",
  appId: "1:134361721075:web:4f473bad6b16bbf1e92f86",
  measurementId: "G-1GDDVKKX7L",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//reference messages collection
var notesRef = firebase.database().ref("notes");

//Listen for form submit
document.getElementById("moodForm").addEventListener("submit", submitMood);

//submit mood form
function submitMood(e) {
  e.preventDefault();
  //get values
  var emotionNote = getInputVal("emotionNote");
  //save message
  saveNotes(emotionNote);
}

//function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

//save notes to firebase
function saveNotes(emotionNote) {
  var newNoteRef = notesRef.push();
  newNoteRef.set({
    emotionNote: emotionNote,
  });
}
