import { http } from './http'

export default {
	async register(request) {
		return http.post('/auth/register', request)
	},
	async login(request) {
		return http.post('/auth/login', request)
	},
}