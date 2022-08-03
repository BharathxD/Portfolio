const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const blobity = new Blobity({
  color: "#eeda00a6",
  zIndex: 1000,
  opacity: 0.5,
  magnetic: true,
  dotColor: "#FF2E63",
  dotSize: 12.5,
  font: "Montserrat",
  fontWeight: 400,
  tooltipPadding: 10,
  radius: 10,
  focusableElementsOffsetX: 4,
  focusableElementsOffsetY: 4,
});

async function reveal() {
  var reveals = $('.reveal');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      reveals[i].classList.add("active");
    } 
    else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener('scroll', reveal);


$(window).load(()=>{
  $(window).scroll(() => {
    var wintop = $(window).scrollTop(), docheight = $('body').height(), winheight = $(window).height();
    var totalScroll = (wintop/(docheight-winheight))*100;
    $(".progressBar").css("width",totalScroll+"%");
  });
});

$(document).ready(function() {
  var initScrollTop = $(window).scrollTop();
  parallax = $('.section-1');
  $(parallax).css({'background-position-y' : (initScrollTop/75)+'%'});
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    $(parallax).css({'background-position-y' : (scrollTop/75)+'%'});
    
  });
  
});

