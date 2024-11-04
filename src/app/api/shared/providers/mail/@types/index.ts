type SendMailProps = {
	to: string;
	subject: string;
	variables: any;
	path: string;
};

interface IMailProvider {
	sendMail({ to, subject, variables, path }: SendMailProps): Promise<void>;
}

export type { IMailProvider, SendMailProps };
