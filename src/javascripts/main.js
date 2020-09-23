import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
// import projectcards from './components/projectcards';
import build from './components/projectCardsFirebase';

import '../styles/main.scss';

const init = () => {
  build.buildProjectCards();
  firebase.initializeApp(apiKeys.firebaseKeys);
  // projectcards.createProjectCard();
};

init();
