const inputs=document.querySelectorAll(".input");function focusFunc(){this.parentNode.classList.add("focus")}function blurFunc(){let a=this.parentNode;""==this.value&&a.classList.remove("focus")}inputs.forEach(a=>{a.addEventListener("focus",focusFunc),a.addEventListener("blur",blurFunc)});const blobity=new Blobity({color:"#ffffff",zIndex:1e4,opacity:.5,magnetic:!0,dotColor:"#FF2E63",dotSize:14,font:"Montserrat",fontWeight:400,tooltipPadding:4,radius:10,focusableElementsOffsetX:4,focusableElementsOffsetY:4});async function reveal(){for(var b=$(".reveal"),a=0;a<b.length;a++){var c=window.innerHeight;b[a].getBoundingClientRect().top<c?b[a].classList.add("active"):b[a].classList.remove("active")}}window.addEventListener("scroll",reveal),$(window).load(()=>{$(window).scroll(()=>{var a=$(window).scrollTop(),b=$("body").height(),c=$(window).height(),d=a/(b-c)*100;$(".progressBar").css("width",d+"%")})}),$(document).ready(function(){parallax=$(".section-1"),$(window).scroll(function(){var a=$(window).scrollTop();$(parallax).css({"background-position-y":a/75+"%"})})});const contactForm=$(".contact-form form"),name=$("#Name"),email=$("#Email"),message=$("#Message");function sendMail(){var a={from_name:name.val(),email_id:email.val(),message:message.val()};emailjs.send("service_zkfvor7","template_9bjsywc",a).then(function(a){success(),contactForm.trigger("reset")},function(a){failure()})}emailjs.init("VK4TXnDVYsZsA0iSQ");const button=$(".toastBtn"),toast=$(".toast");closeIcon=$(".close"),progress=$(".progress");let timer1,timer2;function success(){toast.addClass("btnOn"),progress.addClass("btnOn"),timer1=setTimeout(()=>{toast.removeClass("btnOn")},5e3),timer2=setTimeout(()=>{progress.removeClass("btnOn")},5300),closeIcon.click(()=>{toast.removeClass("btnOn"),setTimeout(()=>{progress.removeClass("btnOn")},300),clearTimeout(timer1),clearTimeout(timer2)})}function failure(){$(".text-1").html("Error"),$(".text-2").html("Uh-oh - Something went wrong :("),$(".check").css({color:"white","background-color":"red"}),toast.addClass("btnOn"),progress.addClass("btnOn"),timer1=setTimeout(()=>{toast.removeClass("btnOn")},5e3),timer2=setTimeout(()=>{progress.removeClass("btnOn")},5300),closeIcon.click(()=>{toast.removeClass("btnOn"),setTimeout(()=>{progress.removeClass("btnOn")},300),clearTimeout(timer1),clearTimeout(timer2)})}var loader=$("#preloader");$(window).on("load",function(){loader.css({display:"none"})}),$(document).ready(function(){$(".section-1").css("animation"," AnimOne 3s ease")})