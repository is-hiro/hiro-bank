import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'
import { Store } from '@/core/store/store'

import { UserItem } from '@/components/ui/user-item/user-item.component'

import styles from './header.module.scss'
import template from './header.template.html'

import { Logo } from './logo/logo.component'
import { LogoutButton } from './logout-button/logout-button.component'
import { Search } from './search/search.component'
import {$H} from '@/core/hquery/hquery.lib'

export class Header extends ChildComponent {
	constructor({ router }) {
		super()

		this.store = Store.getInstance()
		this.store.addObserver(this)

		this.router = router

		this.userItem = new UserItem({
			avatarPath: '/',
			name: 'Hiro'
		})
	}

	update() {
		this.user = this.store.state.user

		const authSideElement = $H(this.element).find('#auth-side')

		if (this.user) {
			authSideElement.show()
			this.userItem.update(this.user)
			this.router.navigate('/')
		} else {
			authSideElement.hide()
		}
	}

	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				Logo,
				new LogoutButton({
					router: this.router
				}),
				Search,
				this.userItem
			],
			styles
		)

		this.update()

		return this.element
	}
}
