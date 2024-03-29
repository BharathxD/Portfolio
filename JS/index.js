const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".toastBtn");
const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");
const contactForm = document.querySelector(".contact-form form");
const name = document.querySelector("#Name");
const email = document.querySelector("#Email");
const message = document.querySelector("#Message");
var loader = document.querySelector("#preloader");

/* ------------------- /
/ Pre-Loader Function */

window.addEventListener("load", () => {
  loader.style.display = "none";
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
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  reveals.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;
    if (elementTop < windowHeight) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
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

emailjs.init("VK4TXnDVYsZsA0iSQ");

function sendMail(event) {
  event.preventDefault();
  const params = {
    from_name: name.value,
    email_id: email.value,
    message: message.value,
  };
  emailjs.send("service_zkfvor7", "template_9bjsywc", params).then(
    (response) => {
      success();
      contactForm.reset(); // resets the form
    },
    (error) => {
      failure();
    }
  );
}

/* Success Toast */

let timer1, timer2;

function success() {
  const toast = document.querySelector(".toast");
  const progress = document.querySelector(".progress");
  const closeIcon = document.querySelector(".close");
  toast.classList.add("btnOn");
  progress.classList.add("btnOn");
  let timer1 = setTimeout(() => {
    toast.classList.remove("btnOn");
  }, 5000); //1s = 1000 milliseconds
  let timer2 = setTimeout(() => {
    progress.classList.remove("btnOn");
  }, 5300);
  closeIcon.addEventListener("click", () => {
    toast.classList.remove("btnOn");
    setTimeout(() => {
      progress.classList.remove("btnOn");
    }, 300);
    clearTimeout(timer1);
    clearTimeout(timer2);
  });
}

/* Failure Toast */

function failure() {
  var text1 = document.querySelector(".text-1");
  var text2 = document.querySelector(".text-2");
  var check = document.querySelector(".check");
  var toast = document.querySelector(".toast");
  var progress = document.querySelector(".progress");
  const closeIcon = document.querySelector(".close");

  text1.innerHTML = "Error";
  text2.innerHTML = "Uh-oh - Something went wrong :(";
  check.style.color = "white";
  check.style.backgroundColor = "red";
  toast.classList.add("btnOn");
  progress.classList.add("btnOn");
  var timer1 = setTimeout(() => {
    toast.classList.remove("btnOn");
  }, 5000); //1s = 1000 milliseconds
  var timer2 = setTimeout(() => {
    progress.classList.remove("btnOn");
  }, 5300);

  closeIcon.addEventListener("click", function () {
    toast.classList.remove("btnOn");
    setTimeout(() => {
      progress.classList.remove("btnOn");
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
