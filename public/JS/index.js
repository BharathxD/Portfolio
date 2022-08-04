
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
  color: "#eeda00a8",
  zIndex: 10000,
  opacity: 0.5,
  magnetic: true,
  dotColor: "#FF2E63",
  dotSize: 15,
  font: "Montserrat",
  fontWeight: 400,
  tooltipPadding: 4,
  radius: 10,
  focusableElementsOffsetX: 4,
  focusableElementsOffsetY: 4,
});

async function reveal() {
  var reveals = $(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

$(window).load(() => {
  $(window).scroll(() => {
    var wintop = $(window).scrollTop(),
      docheight = $("body").height(),
      winheight = $(window).height();
    var totalScroll = (wintop / (docheight - winheight)) * 100;
    $(".progressBar").css("width", totalScroll + "%");
  });
});

$(document).ready(function () {
  parallax = $(".section-1");
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    $(parallax).css({ "background-position-y": scrollTop / 75 + "%" });
  });
});

const contactForm = $(".contact-form form");
const name = $("#Name");
const email = $("#Email");
const message = $("#Message");

(function(){
  emailjs.init("VK4TXnDVYsZsA0iSQ");
})();

function sendMail(){
  var params =  {
    from_name: name.val(),
    email_id: email.val(),
    message: message.val(),
  };
  emailjs.send('service_zkfvor7', 'template_9bjsywc', params)
    .then(function(response) {
       success();
       contactForm.trigger('reset');
    }, function(error) {
       failure();
    });
  }
    


const button = $(".toastBtn"),
      toast = $(".toast")
      closeIcon = $(".close"),
      progress = $(".progress");

      let timer1, timer2;

      function success() {
        toast.addClass("btnOn");
        progress.addClass("btnOn");
        timer1 = setTimeout(() => {
            toast.removeClass("btnOn");
        }, 5000); //1s = 1000 milliseconds
        timer2 = setTimeout(() => {
          progress.removeClass("btnOn");
        }, 5300);
      closeIcon.click(() => {
        toast.removeClass("btnOn");
        setTimeout(() => {
          progress.removeClass("btnOn");
        }, 300);
        clearTimeout(timer1);
        clearTimeout(timer2);
      });
    }

    

    function failure() {
      $('.text-1').html("Error");
    $('.text-2').html('Uh-oh - Something went wrong :(');
    $('.check').css({'color':'white', 'background-color':'red'});
      toast.addClass("btnOn");
      progress.addClass("btnOn");
      timer1 = setTimeout(() => {
          toast.removeClass("btnOn");
      }, 5000); //1s = 1000 milliseconds
      timer2 = setTimeout(() => {
        progress.removeClass("btnOn");
      }, 5300);
    closeIcon.click(() => {
      toast.removeClass("btnOn");
      setTimeout(() => {
        progress.removeClass("btnOn");
      }, 300);
      clearTimeout(timer1);
      clearTimeout(timer2);
    });
  }

  $(document).ready( function() {
    $.ajax({
        type: 'get',
        url: 'http://pageToLoad.from',
        success: function(response) {
            // response = data which has been received and passed on to the 'success' function.
            $('body').html(response);
        }
    });
});