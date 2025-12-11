import { BaseScreen } from '@/core/component/base-screen.component'
import formService from '@/core/services/form.service'
import renderService from '@/core/services/render.service'
import validationService from '@/core/services/validation.service'

import { Button } from '@/components/ui/button/button.component'
import { Field } from '@/components/ui/field/field.component'

import { AuthService } from '@/api/auth.service'

import styles from './auth.module.scss'
import template from './auth.template.html'
import {$H} from '@/core/hquery/hquery.lib'

export class Auth extends BaseScreen {
	#isTypeLogin = true

	constructor() {
		super({ title: 'Auth' })
		this.authService = new AuthService()
	}

	#validateFields(formValues) {
		const emailLabel = $H(this.element).find('label:first-child')
		const passwordLabel = $H(this.element).find('label:last-child')

		if (!formValues.email) {
			validationService.showError(emailLabel)
		}

		if (!formValues.password) {
			validationService.showError(passwordLabel)
		}

		return formValues.email && formValues.password
	}

	#handleSubmit = event => {
		const formValues = formService.getFormValues(event.target)
		if (!this.#validateFields(formValues)) return

		const type = this.#isTypeLogin ? 'login' : 'register'
		this.authService.main(type, formValues)
	}

	#changeFormType = event => {
		event.preventDefault()

		$H(this.element)
			.find('h1')
			.text(this.#isTypeLogin ? 'Register' : 'Sign In')

		$H(event.target).text(this.#isTypeLogin ? 'Sign In' : 'Register')

		this.#isTypeLogin = !this.#isTypeLogin
	}

	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				new Button({
					children: 'Submit'
				})
			],
			styles
		)

		$H(this.element)
			.find('#auth-inputs')
			.append(
				new Field({
					placeholder: 'Enter email',
					name: 'email',
					type: 'email'
				}).render()
			)
			.append(
				new Field({
					placeholder: 'Enter password',
					name: 'password',
					type: 'password'
				}).render()
			)

		$H(this.element).find('#change-form-type').click(this.#changeFormType)

		$H(this.element).find('form').submit(this.#handleSubmit)

		return this.element
	}
}
