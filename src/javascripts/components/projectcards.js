import project from '../helpers/data';

const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCard = () => {
  let domString = '';
  const projects = project.myProjects();
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].available) {
      domString += `<div class="project-card">
                      <img src="${projects[i].screenshot}" alt="${projects[i].title}" class="project-image">
                      <div class="project-details">
                      <h1 class="project-details-title">${projects[i].title}</h1>
                             <p class="project-details-description">${projects[i].description}</p>
                             <p class="project-details-technologies">Technologies used: ${projects[i].technologiesUsed}</p>
                             <p>Link: <a class="project-details-link" href="${projects[i].url}">${projects[i].url}</a></p>
                             <p>GitHub: <a class="project-details-git" href="${projects[i].githubUrl}">${projects[i].githubUrl}</a></p>
                            </div>
                          </div>`;
    }
  }
  renderToDom('projectsPage', domString);
};

export default { createProjectCard };
