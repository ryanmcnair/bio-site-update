import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => axios.get(`${baseUrl}/Projects.json`);

console.warn();

export default { getProjects };
