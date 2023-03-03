var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("bgimg-1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 9000);
}
// Modal Image Gallery
function onClick(element) {
  
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

function copyFunction() {
  var name = document.getElementById('name');
  sub = name.value;
  var msg = document.getElementById('message');
  body_text = msg.value;
  window.location.href = "mailto:rijul.saini@mail.mcgill.ca" + "?subject=Message from " + sub + "&body=" + body_text;


}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function p_openTab(evt, category) {
  var i, pv_tabcontent, tablinks;
  pv_tabcontent = document.getElementsByClassName("p_tabcontent");
  for (i = 0; i < pv_tabcontent.length; i++) {
    
    pv_tabcontent[i].style.display = "none";
    pv_tabcontent[i].style.className = "";

  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById("p_defaultOpen").className = ""
  document.getElementById(category).style.display = "block";
  evt.currentTarget.className += " active";
}

function t_openTab(evt, category) {

  var i, tv_tabcontent, tablinks;
  tv_tabcontent = document.getElementsByClassName("t_tabcontent");
  for (i = 0; i < tv_tabcontent.length; i++) {
    tv_tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(category).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("p_defaultOpen").click();
document.getElementById("p_defaultOpen").className = "active"
document.getElementById("p_defaultOpen").style = "color:white"
document.getElementById("t_defaultOpen").click();


// Go to specific slide
function goToSlide(slideIndex) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
}


// Navigate to previous slide
function prevSlide() {
  var x = document.getElementsByClassName("bgimg-1");
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex--;
  if (myIndex < 0) { myIndex = x.length-1 }
  x[myIndex].style.display = "block";

}


function nextSlide() {
  var x = document.getElementsByClassName("bgimg-1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  myIndex++;
  if (myIndex >= x.length) { myIndex = 0 }
  x[myIndex].style.display = "block";

}

function currentSlide(myIndex) {
  var x = document.getElementsByClassName("bgimg-1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  

  x[myIndex].style.display = "block";

}