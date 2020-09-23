import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => axios.get(`${baseUrl}/Projects.json`);

export default { getProjects };
