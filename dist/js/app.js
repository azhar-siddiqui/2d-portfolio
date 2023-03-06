// navbar/sidebar
const header = document.querySelector("header");
const navbar = document.querySelector(".navbar");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const menuButton = document.querySelector(".menu-button");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.add("bg-glassmorphic");
    navbar.classList.add("py-2");
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("bg-glassmorphic");
    navbar.classList.remove("py-2");
    navbar.classList.remove("shadow");
  }
});

menuButton.addEventListener("click", function () {
  toggleSideBar(true);
});

overlay.addEventListener("click", function () {
  toggleSideBar(false);
});

// form clear fields
inputFields = document.querySelectorAll("input");
clearButton = document.querySelector("#clearFields");

clearButton.addEventListener("click", () => {
  inputFields.forEach((field) => {
    field.value = "";
    console.log(field);
  });
});

// auxilary functions
function toggleSideBar(status) {
  if (status) {
    menuButton.firstElementChild.firstElementChild.classList.replace(
      "fa-bars",
      "fa-times"
    );
    sidebar.classList.add("sidebar-toggle");
    overlay.classList.add("overlay-toggle");
  } else {
    menuButton.firstElementChild.firstElementChild.classList.replace(
      "fa-times",
      "fa-bars"
    );
    sidebar.classList.remove("sidebar-toggle");
    overlay.classList.remove("overlay-toggle");
  }
}

// load content
document.addEventListener("DOMContentLoaded", () => {
  // Display projects
  easyhttp = new EasyHTTP();

  const projectContainer = document.querySelector(".projectContainer");
  easyhttp
    .get("dist/js/content/projects.json")
    .then((projects) => {
      projects.forEach((project) => {
        projectContainer.innerHTML += `
                <div class="col-md-6 d-flex justify-content-end mt-4">
                    <div class="project-card">
                        <div class="project-image d-flex align-items-center">
                            <img src="${project.projectImage}" alt="" class="w-100">
                        </div>
                        <div class="project-text">
                            <h3>${project.projectName}</h3>
                            <p>
                                ${project.projectInfo}
                            </p>
                            <a href="${project.projectLink}" target="_blank" class="nav-link"><i class="fas fa-external-link"></i> Visit Website</a>
                        </div>
                    </div>
                </div>
                `;
      });
    })
    .catch((err) => console.log(err));

  const skillContainer = document.querySelector(".skillContainer");
  easyhttp
    .get("dist/js/content/skills.json")
    .then((skills) => {
      skills.forEach((skill) => {
        skillContainer.innerHTML += `
                <div class="col-md-4 col-lg-3 col-sm-12 mt-5 d-flex align-items-center justify-content-center">
                    <div class="skill-card">
                        <div class="skill-icon">
                            <i class="${skill.skillIcon} gradient-text"></i>
                        </div>
                        <h4 class="skill-name">${skill.skillName}</h4>
                    </div>
                </div>
                `;
      });
    })
    .catch((err) => console.log(err));

  const servicesContainer = document.querySelector(".servicesContainer");
  easyhttp
    .get("dist/js/content/services.json")
    .then((services) => {
      services.forEach((service) => {
        servicesContainer.innerHTML += `
                <div class="col-lg-6 col-xl-4 mt-5 d-flex justify-content-center">
                    <div class="service-card">
                        <div class="service-icon d-flex flex-column align-items-center">
                            <i class="${service.serviceIcon} fa-4x gradient-text"></i>
                            <h5 class="gradient-text mt-4 fw-bold">${service.serviceHeading}</h5>
                        </div>
                        <div class="service-text px-2">
                            ${service.serviceText}
                        </div>
                    </div>
                </div>            
                `;
      });
    })
    .catch((err) => console.log(err));
});
