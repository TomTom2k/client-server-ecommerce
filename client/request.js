import axios from 'axios';

const URL = 'http://localhost:5000';

const request = axios.create({
	baseURL: URL,
});

export default request;
