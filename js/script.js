



var clock = setInterval(function clock() {

  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;

  document.getElementById("clock").innerHTML = strTime;

}, 100);


function showIntro() {
  var x = document.getElementById('intro');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } 
}

function showCS() {
  document.getElementById('csContent').style.display = "block";
  document.getElementById('csContent2').style.display = "block";
}
function closeOutCS() {
  document.getElementById('csContent').style.display = 'none';
  document.getElementById('csContent2').style.display = 'none';
}

function showParot() {
  document.getElementById('parot').style.display = "block";
  document.getElementById('parot2').style.display = "block";
}
function closeOutParot() {
  document.getElementById('parot').style.display = 'none';
  document.getElementById('parot2').style.display = 'none';
}

function showB() {
  document.getElementById('bus').style.display = "block";
  document.getElementById('bus2').style.display = "block";
}
function closeOutB() {
  document.getElementById('bus').style.display = 'none';
  document.getElementById('bus2').style.display = 'none';
}

function showAboutMe() {
  document.getElementById('aboutme-content').style.display = "block";
  document.getElementById('aboutme-content2').style.display = "block";
}

function showContact() {
  document.getElementById('contact-content').style.display = "block";
}

function closeOut() {
  document.getElementById('intro').style.display = 'none';
}

function closeOutAboutMe() {
  document.getElementById('aboutme-content').style.display = 'none';
  document.getElementById('aboutme-content2').style.display = 'none';
}

function closeOutContact() {
  document.getElementById('contact-content').style.display = 'none';
}

function openResume() { 
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  //window.open('src/alexisdanzresume.pdf', '_blank'); 
  
  return false;
}

