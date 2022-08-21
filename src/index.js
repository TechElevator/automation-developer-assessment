import axios from 'axios';
import Application from './Application.js';

axios.defaults.baseURL = 'http://localhost:3000';

(async () => {
  await Application.run();
})();
