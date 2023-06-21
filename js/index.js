const btnNavbar = document.getElementById("btnnavbar");
const navbarMenu = document.getElementById("navbarMenu");

btnNavbar.addEventListener("click", () => {
  navbarMenu.classList.toggle("navbar-menu-activo");
});

// VAMOS A OBTENER LOS CONTENEDOR DEL DOM
const projectsProject = document.querySelector(".projects__project");

projects.forEach((element) => {
  const project = document.createElement("article");
  project.style.backgroundImage = `url(${element.image})`;
  project.className = "project";

  project.innerHTML = `
    <div class="project__text">
      <p class="project__text-title">${element.name}</p>
      <p class="project__text-description">${element.description}</p>
    </div>
  `;

  projectsProject.appendChild(project);
});
