import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import { DonutChart } from '@/components/ui/donut-chart/donut-chart.component'

import styles from './circle-chart.module.scss'
import template from './circle-chart.template.html'

export class CircleChart extends ChildComponent {
	constructor(incomePercent, expensePercent) {
		super()
		this.incomePercent = incomePercent
		this.expensePercent = expensePercent
	}

	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				new DonutChart([
					{ value: this.incomePercent, color: '#f73881' },
					{ value: this.expensePercent, color: '#7c85ff' }
				])
			],
			styles
		)

		return this.element
	}
}
