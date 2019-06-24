var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
if(mySrc === 'images/coachella guy.jpg') 
    {
      myImage.setAttribute ('src','images/Coachella_Ferris.jpeg');
    } else 
    {
      myImage.setAttribute ('src','images/coachella guy.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myName = null;
function setUserName() {
    myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Drugs are cool right, ' + myName + ' ?';
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Drugs are cool right, ' + storedName + ' ?';
  }
  myButton.onclick = function() {
    setUserName();
  }