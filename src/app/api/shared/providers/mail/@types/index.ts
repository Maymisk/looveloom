type SendMailProps = {
	to: string;
	subject: string;
	templateGetter(variables: { [key: string]: any }): string;
	variables: any;
};

interface IMailProvider {
	sendMail({
		to,
		subject,
		templateGetter,
		variables,
	}: SendMailProps): Promise<void>;
}

export type { IMailProvider, SendMailProps };
