// Import stylesheets
import './style.css';



// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

  fetch('https://hrlink.bubbleapps.io/version-test/api/1.1/obj/link_event')
  .then(res => res.json())
  .then(json => console.log(json));

