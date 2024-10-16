/*==================== React Projects render ====================*/
const reactProjects = [
  {
    image: "images/pizza.PNG",
    title: "Fast React Pizza Co.",
    tools:
      "React.js - Tailwind- React Router - React Router actions and loaders-  Redux toolkit - Geolocation",
    github:
      "https://github.com/YoussefSalama4/Fast-React-Pizza-Co",
    demo: "https://fast-react-pizza-co-ten.vercel.app/",
  },
  {
    image: "images/worldwise.PNG",
    title: "World wise",
    tools:
      "React.js - CSS Modules - React Router - Context API - Geolocation - Local Storage",
    github: "https://github.com/YoussefSalama4/Worldwise",
    demo: "https://worldwise-flax-three.vercel.app",
  },
  {
    image: "images/react.PNG",
    title: "The React Quiz",
    tools: "React.js - CSS - Context API",
    github:
      "https://github.com/YoussefSalama4/The-React-Quiz",
  },
  {
    image: "images/movies.PNG",
    title: "Movies website",
    tools: "React.js - CSS - OMDB API - Local storage",
    github:
      "https://github.com/YoussefSalama4/movies-app-React.js",
    demo: "https://movies-app-react-js-rosy.vercel.app",
  },
  {
    image: "images/travel.PNG",
    title: "Travel packing list",
    tools: "React.js - CSS - Local storage",
    github:
      "https://github.com/YoussefSalama4/far-away-travel-list-react.js",
    demo: "https://far-away-travel-list-react-js.vercel.app",
  },
  {
    image: "images/cart.PNG",
    title: "Cart page",
    tools: "React.js - CSS",
    github:
      "https://github.com/YoussefSalama4/front-end-mentor-cart-task-React.js",
    demo: "https://front-end-mentor-cart-task-react-js.vercel.app",
  },
  {
    image: "images/eat-n-split.PNG",
    title: "Eat-N-Split",
    tools: "React.js - CSS",
    github: "https://github.com/YoussefSalama4/Eat-N-Split",
    demo: "https://eat-n-split-coral-one.vercel.app",
  },
  {
    image: "images/weather.PNG",
    title: "Classy-Weather",
    tools: "React.js - CSS",
    github:
      "https://github.com/YoussefSalama4/Classy-Weather-React.js",
    demo: "https://classy-weather-react-js.vercel.app",
  },
];
const reactProjectsContainer = document.getElementById(
  "react-container"
);

reactProjects.forEach((project) => {
  const reactProject = document.createElement("div");
  reactProject.classList.add("portfolio-box");
  reactProject.innerHTML = `
  <img src=${project.image} alt="" />
            <div class="portfolio-layer">
              <h4>${project.title}</h4>
              <p>${project.tools}</p>
              <div class="links">
                <a
                  target="_blank"
                  href=${project.github}
                  ><i class="bx bxl-github"></i
                ></a>
                ${
                  project.demo
                    ? `<a
                  target="_blank"
                  href=${project.demo}
                  ><i class="bx bx-link"></i
                ></a>`
                    : ""
                }
              </div>
            </div>
  `;
  reactProjectsContainer.appendChild(reactProject);
});

/*==================== React Projects render ====================*/
const javascriptProjects = [
  {
    image: "images/CRUDS.PNG",
    title: "Product management system",
    tools: "HTML - CSS - JS - LocalStorage",
    github:
      "https://github.com/YoussefSalama4/Cruds-js-with-local-storage",
    demo: "https://cruds-js-with-local-storage.vercel.app",
  },
  {
    image: "images/encryption.PNG",
    title: "Text Encryption/Decryption website",
    tools: "HTML - CSS - JS",
    github:
      "https://github.com/YoussefSalama4/Encryption-Decryption-algorithms",
    demo: "https://encryption-decryption-algorithms.vercel.app",
  },
  {
    image: "images/image.PNG",
    title: "Image editor",
    tools: "HTML - CSS - JS",
    github:
      "https://github.com/YoussefSalama4/Image-editor",
    demo: "https://image-editor-seven-gules.vercel.app",
  },
  {
    image: "images/anime.PNG",
    title: "Guess anime name game",
    tools: "HTML - CSS - JS",
    github:
      "https://github.com/YoussefSalama4/Anime-Guess-game",
    demo: "https://anime-guess-game.vercel.app",
  },
];
const javascriptProjectsContainer = document.getElementById(
  "javascript-container"
);

javascriptProjects.forEach((project) => {
  const javascriptProject = document.createElement("div");
  javascriptProject.classList.add("portfolio-box");
  javascriptProject.innerHTML = `
  <img src=${project.image} alt="" />
            <div class="portfolio-layer">
              <h4>${project.title}</h4>
              <p>${project.tools}</p>
              <div class="links">
                <a
                  target="_blank"
                  href=${project.github}
                  ><i class="bx bxl-github"></i
                ></a>
                ${
                  project.demo
                    ? `<a
                  target="_blank"
                  href=${project.demo}
                  ><i class="bx bx-link"></i
                ></a>`
                    : ""
                }
              </div>
            </div>
  `;
  javascriptProjectsContainer.appendChild(
    javascriptProject
  );
});
/*==================== Nodejs Projects render ====================*/
const nodejsProjects = [
  {
    image: "images/portfolio1.jpg",
    title: "Final project APIS",
    tools:
      "Express.js - MongoDB - Mongoose - MongoDB Atlas - Appwrite",
    github:
      "https://github.com/YoussefSalama4/final-project-apis",
    demo: "https://www.linkedin.com/posts/alaa-younes-aa0728234_وآخر-دعواهم-أن-الحمد-لله-activity-7217298728221634560-Ujqz/?utm_source=share&utm_medium=member_desktop",
  },
  {
    image: "images/portfolio2.jpg",
    title: "Tourguide APIS",
    tools:
      "Express.js - MongoDB - Mongoose - MongoDB Atlas",
    github:
      "https://github.com/YoussefSalama4/natours-APIS",
  },
];
const nodejsProjectsContainer = document.getElementById(
  "nodejs-container"
);

nodejsProjects.forEach((project) => {
  const nodejsProject = document.createElement("div");
  nodejsProject.classList.add("portfolio-box");
  nodejsProject.innerHTML = `
  <img src=${project.image} alt="" />
            <div class="portfolio-layer">
              <h4>${project.title}</h4>
              <p>${project.tools}</p>
              <div class="links">
                <a
                  target="_blank"
                  href=${project.github}
                  ><i class="bx bxl-github"></i
                ></a>
                ${
                  project.demo
                    ? `<a
                  target="_blank"
                  href=${project.demo}
                  ><i class="bx bx-link"></i
                ></a>`
                    : ""
                }
              </div>
            </div>
  `;
  nodejsProjectsContainer.appendChild(nodejsProject);
});
/*==================== Slider ====================*/
const productContainer =
  document.querySelectorAll(".slider");
const leftBtn = document.querySelectorAll(".left-arrow");
const rightBtn = document.querySelectorAll(".right-arrow");
let projectWidth = document.querySelector(
  ".portfolio-box"
).offsetWidth;
window.addEventListener("resize", () => {
  projectWidth = document.querySelector(
    ".portfolio-box"
  ).offsetWidth;
});

const productContainers = Array.from(productContainer);
productContainers.forEach((el, idx) => {
  rightBtn[idx].addEventListener("click", () => {
    console.log(projectWidth);
    let containerDimensions = el.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    const scrollWidth =
      containerWidth > projectWidth + 20
        ? containerWidth -
          (containerWidth % (projectWidth + 20))
        : containerWidth;
    el.scrollLeft += scrollWidth;
  });

  leftBtn[idx].addEventListener("click", () => {
    let containerDimensions = el.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    const scrollWidth =
      containerWidth > projectWidth + 20
        ? containerWidth -
          (containerWidth % (projectWidth + 20))
        : containerWidth;
    el.scrollLeft -= scrollWidth;
  });
});

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
  reset: false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", {
  origin: "top",
});
ScrollReveal().reveal(
  ".home-img, .services-container, .contact form ",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(
  ".home-content h1, .about-img, .portfolio-header",
  {
    origin: "left",
  }
);
ScrollReveal().reveal(
  ".home-content p, .about-content, .slider",

  {
    origin: "right",
  }
);

/*==================== typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "problem solver",
    "backend developer",
  ],
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
let formErrorContainer =
  document.querySelector("div.error");
let formError = document.querySelector("div.error p");
let formErrorButton = document.querySelector(
  "div.error button"
);

formErrorButton.onclick = () => {
  formErrorContainer.style.display = "none";
};

document.addEventListener("click", (e) => {
  console.log(e.target);
  if (
    e.target !== formErrorContainer &&
    e.target.tagName !== "P"
  ) {
    formErrorContainer.style.display = "none";
  }
});
form.onsubmit = function (event) {
  event.preventDefault();
  if (formName.value.length < 3) {
    formError.innerText =
      "name should be at least 3 characters";

    formErrorContainer.style.display = "flex";
  } else if (
    !/^[a-z0-9A-Z]+@(outlook|gmail)+.(com|org)$/g.test(
      formEmail.value
    )
  ) {
    formError.innerText =
      "Email should include only letters and numbers and be @gmail or outlook";
    formErrorContainer.style.display = "flex";
  } else if (formNumber.value.length < 10) {
    formError.innerText =
      "number should be at least 10 digits";
    formErrorContainer.style.display = "flex";
  } else if (formSubject.value.length < 3) {
    formError.innerText =
      "subject should be at least 3 characters";
    formErrorContainer.style.display = "flex";
  } else if (formMessage.value.length < 10) {
    formError.innerText =
      "message should be at least 10 characters";
    formErrorContainer.style.display = "flex";
  } else {
    form.submit();
    formError.innerText = "";
  }
};

/*==================== Scroll Progress ====================*/
let el = document.querySelector(".scroller");

let height =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});
