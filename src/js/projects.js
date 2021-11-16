import template from '../partials/templates/projects.hbs';
import { teamProjects, ownProjects } from './projects-db';

const refs = {
  team: document.querySelector('.js-team'),
  own: document.querySelector('.js-own'),
};

refs.team.innerHTML = template(teamProjects);
refs.own.innerHTML = template(ownProjects);
