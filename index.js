// Import stylesheets
import './style.css';



// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//returns response.results with data
var linkEvents = null;
  fetch('https://hrlink.bubbleapps.io/version-test/api/1.1/obj/link_event')
  .then(res => res.json())
  .then(json => console.log(json))  
  .catch((err)=>console.log(err));


  console.log('linkEvents = '+linkEvents)


//from zing

/* // window.onload event for Javascript to run after HTML
// because this Javascript is injected into the document head
window.addEventListener('load', () => {
  // Javascript code to execute after DOM content
  const zgRef = document.querySelector('zing-grid');
  zgRef.executeOnLoad(() => {
  	// Add event listener to button
    reloadBtn.addEventListener('click', () => {
      zgRef.refresh();
    });
  });
});
  
 */
