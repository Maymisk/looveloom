import formData from 'form-data';
import Mailgun from 'mailgun.js';

import { IMailProvider, SendMailProps } from './@types';
import { IMailgunClient } from 'mailgun.js/Interfaces';

class MailgunMailProvider implements IMailProvider {
	private client: IMailgunClient;

	constructor() {
		const mailgun = new Mailgun(formData);
		this.client = mailgun.client({
			username: 'api',
			key: process.env.MAILGUN_API_KEY as string,
		});
	}

	async sendMail({
		to,
		subject,
		templateGetter,
		variables,
	}: SendMailProps): Promise<void> {
		const templateHTML = templateGetter(variables);

		try {
			const message = await this.client.messages.create(
				process.env.MAILGUN_DOMAIN as string,
				{
					from: process.env.NO_REPLY_EMAIL as string,
					to: [to],
					subject,
					html: templateHTML,
				}
			);

			console.log(message, 'message sent to the user here');
		} catch (err) {
			console.log(err, 'There was an error sending the email');
		}
	}
}

export { MailgunMailProvider };
