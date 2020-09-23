import data from '../helpers/dataCalls';

const cardsOnDom = (obj) => {
  $('#projectsPage').html('');
  Object.keys(obj).forEach((item) => {
    $('#projectsPage').append(`<div class="project-card">
    <img src="${obj[item].screenshot}" alt="${obj[item].title}" class="project-image">
    <div class="project-details">
    <h1 class="project-details-title">${obj[item].title}</h1>
           <p class="project-details-description">${obj[item].description}</p>
           <p class="project-details-technologies">Technologies used: ${obj[item].technologiesUsed}</p>
           <p>Link: <a class="project-details-link" href="${obj[item].url}">${obj[item].url}</a></p>
           <p>GitHub: <a class="project-details-git" href="${obj[item].githubUrl}">${obj[item].githubUrl}</a></p>
          </div>
        </div>`);
  });
};

const buildProjectCards = () => {
  data.getProjects()
    .then((resp) => cardsOnDom(resp.data))
    .catch((error) => console.error('Not working right dude', error));
};

export default { buildProjectCards };
