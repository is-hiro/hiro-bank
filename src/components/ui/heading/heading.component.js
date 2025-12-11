import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './heading.module.scss'
import template from './heading.template.html'
import {$H} from '@/core/hquery/hquery.lib'

export class Heading extends ChildComponent {
	constructor(title = '') {
		super()
		this.title = title
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		$H(this.element).text(this.title)

		return this.element
	}
}
