import axios from 'axios';

export default axios.create({
    baseURL: 'https://crystalmathlabs.com/tracker/api.php'
});