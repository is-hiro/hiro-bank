import {hiroQuery} from '@/core/hiro-query/hiro-query.lib'

export class UserService {
	#BASE_URL = '/users'

	getAll(searchTerm, onSuccess) {
		return hiroQuery({
			path: `${this.#BASE_URL}${
				searchTerm
					? `?${new URLSearchParams({
							searchTerm
					  })}`
					: ''
			}`,
			onSuccess
		})
	}
}
