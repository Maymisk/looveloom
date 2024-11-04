import { S3 } from 'aws-sdk';
import mime from 'mime';
import fs from 'fs';
import { resolve } from 'path';
import { randomBytes } from 'crypto';

import { IStorageProvider } from './@types';

class S3StorageProvider implements IStorageProvider {
	private client: S3;

	constructor() {
		this.client = new S3({
			region: process.env.AWS_REGION as string,
			credentials: {
				accessKeyId: process.env.AWS_ACCESS_KEY as string,
				secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
			},
		});
	}

	async save(file: File, folder: string): Promise<string | { error: any }> {
		try {
			const fileKey = `${file.name}_${randomBytes(16).toString('hex')}`;

			const { Location } = await this.client
				.upload({
					Bucket: `${process.env.AWS_BUCKET}/${folder}`,
					Key: fileKey,
					Body: file,
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
				Bucket: `${process.env.AWS_BUCKET}/${folder}`,
				Key: file,
			})
			.promise();
	}
}

export { S3StorageProvider };
