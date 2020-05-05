import axios from 'axios'

const urlDomain = 'localhost:4001'

const http = axios.create({
	baseURL: `http://${urlDomain}/api`
})

// http.interceptors.response.use((response) => {
//     return response;
// }, function (error) {
//     // Do something with response error
//     if (error.response.status === 401) {
//         console.log('unauthorized, logging out ...');
//         auth.logout();
//         router.replace('/auth/login');
//     }
//     return Promise.reject(error.response);
// });

export { http }