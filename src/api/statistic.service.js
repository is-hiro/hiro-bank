import {hiroQuery} from '@/core/hiro-query/hiro-query.lib'

export class StatisticService {
	#BASE_URL = '/statistics'

	main(onSuccess) {
		return hiroQuery({
			path: this.#BASE_URL,
			onSuccess
		})
	}
}
