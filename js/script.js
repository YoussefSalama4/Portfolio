/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*==================== sticky navbar ====================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1, .about-img", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*==================== typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "problem solver", "backend developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
/*==================== Form validation ====================*/
const form = document.querySelector(".contact-form");
let formName = document.querySelector(".form-name");
let formEmail = document.querySelector(".form-email");
let formNumber = document.querySelector(".form-number");
let formSubject = document.querySelector(".form-subject");
let formMessage = document.querySelector(".form-message");
let formError = document.querySelector("h1.error");

form.onsubmit = function (event) {
  event.preventDefault();
  if (formName.value.length < 3) {
    formError.innerText = "name should be at least 3 characters";
  } else if (
    !/^[a-z0-9A-Z]+@(outlook|gmail)+.(com|org)$/g.test(formEmail.value)
  ) {
    formError.innerText =
      "Email should include only letters and numbers and be @gmail or outlook";
  } else if (formNumber.value.length < 10) {
    formError.innerText = "number should be at least 10 digits";
  } else if (formSubject.value.length < 3) {
    formError.innerText = "subject should be at least 3 characters";
  } else if (formMessage.value.length < 10) {
    formError.innerText = "message should be at least 10 characters";
  } else {
    form.submit();
    formError.innerText = "";
  }
};

/*==================== Scroll Progress ====================*/
let el = document.querySelector(".scroller");

let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});
