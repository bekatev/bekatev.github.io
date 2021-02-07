function noScroll() {
    window.scrollTo(0, 0);
  }
  var x = 0;
$(document).ready(function () {
  //Displays toggle menu over main page and prevents from scrolling
    $('.toggle-button').on('click', function () {  
      $('.animated-icon').toggleClass('open');      
      if (x === 0){
        window.addEventListener('scroll', noScroll);
        document.getElementById("background-click").style.visibility="visible";
        x = 1;
      } else {
        window.removeEventListener('scroll', noScroll);
        document.getElementById("background-click").style.visibility="hidden";
        x = 0;
      }
    });
  });

  
 

  
 