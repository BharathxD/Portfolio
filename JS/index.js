const inputs = document.querySelectorAll(".input");
const button = $(".toastBtn");
const toast = $(".toast");
const closeIcon = $(".close");
const progress = $(".progress");
const contactForm = $(".contact-form form");
const name = $("#Name");
const email = $("#Email");
const message = $("#Message");

/* ------------------- */
/* Pre-Loader Function */

var loader = $("#preloader");
$(window).on("load", () => {
  loader.css({
    display: "none",
  });
});

/* -------------- */
/* Form Animation */

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

function reveal() {
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

/* ------------ */
/* Progress Bar */

window.addEventListener("load", () => {
  window.addEventListener("scroll", () => {
    const wintop = window.pageYOffset;
    const docheight = document.body.clientHeight;
    const winheight = window.innerHeight;
    const totalScroll = (wintop / (docheight - winheight)) * 100;
    document.querySelector(".progressBar").style.width = totalScroll + "%";
  });
});

/* ------------------- */
/* Homescreen Parallax */

const parallax = document.querySelector("#hero");
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  if (scrollTop < 1000) {
    parallax.style.backgroundPositionY = scrollTop / 75 + "%";
  }
});

/* -------- */
/* Email JS */

(() => {
  emailjs.init("VK4TXnDVYsZsA0iSQ");
})();

function sendMail() {
  var params = {
    from_name: name.val(),
    email_id: email.val(),
    message: message.val(),
  };
  emailjs.send("service_zkfvor7", "template_9bjsywc", params).then(
    (response) => {
      success();
      contactForm.trigger("reset");
    },
    (error) => {
      failure();
    }
  );
}

let timer1, timer2;

/* Success Toast */

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

/* Failure Toast */

function failure() {
  $(".text-1").html("Error");
  $(".text-2").html("Uh-oh - Something went wrong :(");
  $(".check").css({ color: "white", "background-color": "red" });
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

/* ---------------- */
/* Blobity - Cursor */

const blobity = new Blobity({
  color: "#ffffff",
  zIndex: 10000,
  opacity: 0.5,
  magnetic: true,
  dotColor: "#FF2E63",
  dotSize: 12,
  font: "Montserrat",
  fontWeight: 400,
  tooltipPadding: 4,
  radius: 10,
  focusableElementsOffsetX: 4,
  focusableElementsOffsetY: 4,
});

/* ---------------- */

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-XJT6MVNY6H");

/* ---------------- */

const element = document.querySelector("#resume");
vanillaTilt.init(element);

function initTilt() {
  vanillaTilt.init(element);
}

function destroyTilt() {
  element.vanillaTilt.destroy();
}

function handleScreenSizeChange() {
  if (window.innerWidth <= 1068) {
    // screen size is less than or equal to 1068px
    destroyTilt();
  } else {
    // screen size is greater than 1068px
    initTilt();
  }
}

initTilt();
window.addEventListener("resize", handleScreenSizeChange);
