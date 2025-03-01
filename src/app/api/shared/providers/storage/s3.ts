import { S3 } from 'aws-sdk';
import { randomBytes } from 'crypto';

import { ISaveFileProps, IStorageProvider } from './@types';

class S3StorageProvider implements IStorageProvider {
	private client: S3;

	constructor() {
		this.client = new S3({
			region: process.env.AWS_REGION as string,
			credentials: {
				accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
				secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
			},
		});
	}

	async save({
		file,
		folder,
	}: ISaveFileProps): Promise<string | { error: any }> {
		try {
			const fileKey = `${file.name}_${randomBytes(16).toString('hex')}`;

			const { Location } = await this.client
				.upload({
					Bucket: `${process.env.AWS_BUCKET_NAME}/${folder}`,
					Key: fileKey,
					Body: file.content,
					ContentType: file.type,
				})
				.promise();

			return Location;
		} catch (err) {
			return { error: err };
		}
	}

	async delete(file: string, folder: string): Promise<void> {
		await this.client
			.deleteObject({
				Bucket: `${process.env.AWS_BUCKET_NAME}/${folder}`,
				Key: file,
			})
			.promise();
	}
}

export { S3StorageProvider };
