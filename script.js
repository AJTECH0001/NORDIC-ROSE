const navTogglerButton = document.querySelector('#navToggler')

const openNavIcon = document.querySelector('#openNav')

const closeNavIcon = document.querySelector('#closeNav')

const mainNavWidget = document.querySelector('#mainNav')


navTogglerButton.addEventListener('click' , function () {
    openNavIcon.classList.toggle("hidden")
    closeNavIcon.classList.toggle("hidden")
    mainNavWidget.classList.toggle("hidden")
})

const toggleDarkmodeButton = pin;

function pin() {
    var element = document.body; 
    element.classList.toggle("dark-mode");
 }

 let Button = document.querySelector('#settingsButton')

 // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


 function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        Button.style.display = "block";
    } else {
        Button.style.display = "none";
    }
  }


 




