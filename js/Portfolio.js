document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll(".effect").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// var typed = new Typed(".animate", {
//   strings: ["Le Vo Huu Thai", "A Frontend Developer"],
//   typeSpeed: 50,
//   backSpeed: 50,
//   loop: true,
// });

$(document).ready(function () {
  $(document).scroll(function () {
    const currentPos = $(document).scrollTop();
    if (currentPos > 145) {
      $(".gotop").fadeIn().css("display", "flex"); //fadeIn kết hợp giữa display block và opacity
    } else {
      $(".gotop").fadeOut(); //fadeout kết hợp giữa display none và opacity
    }
  });
  //click totop
  $(".gotop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

//Click nav bar
const menu = document.querySelector(".hamburger");
const nav = document.querySelector(".aside");

let navbarboolean = true;

menu.addEventListener("click", function (e) {
  if (navbarboolean) {
    nav.classList.add("active");
    navbarboolean = false;
  } else {
    nav.classList.remove("active");
    navbarboolean = true;
  }
});

// document.addEventListener("click", function (e) {
//   if (!e.target.classList.contains("hamburger")) {
//     nav.classList.remove("active");
//   }
// });

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });
});