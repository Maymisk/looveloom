import { SES } from 'aws-sdk';
import nodemailer from 'nodemailer';
import fs from 'fs';
import Handlebars from 'handlebars';

import { IMailProvider, SendMailProps } from './@types';

class SESMailProvider implements IMailProvider {
	private client: nodemailer.Transporter;

	constructor() {
		this.client = nodemailer.createTransport({
			SES: new SES({
				region: process.env.AWS_REGION,
				credentials: {
					accessKeyId: process.env.AWS_ACCESS_KEY as string,
					secretAccessKey: process.env
						.AWS_SECRET_ACCESS_KEY as string,
				},
			}),
		});
	}

	async sendMail({
		to,
		subject,
		variables,
		path,
	}: SendMailProps): Promise<void> {
		const templateFileContent = fs.readFileSync(path).toString('utf-8');

		const templateParse = Handlebars.compile(templateFileContent);

		const templateHTML = templateParse(variables);

		const message = await this.client.sendMail({
			to,
			from: process.env.NO_REPLY_EMAIL as string,
			subject,
			html: templateHTML,
		});

		return message;
	}
}

export { SESMailProvider };
