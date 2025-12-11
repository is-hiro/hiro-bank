import {hiroQuery} from '@/core/hiro-query/hiro-query.lib'

export class TransactionService {
	#BASE_URL = '/transactions'

	getAll(onSuccess) {
		return hiroQuery({
			path:
				this.#BASE_URL +
				`?${new URLSearchParams({
					orderBy: 'desc'
				})}`,
			onSuccess
		})
	}
}
