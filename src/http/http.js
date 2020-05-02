import axios from 'axios'

const urlDomain = 'localhost:4001'

const http = axios.create({
	baseURL: `http://${urlDomain}/api`
})

export { http }