import { Readable } from 'stream';

interface ISaveFileProps {
	file: {
		name: string;
		type: string;
		content: Buffer | string | Uint8Array | Readable;
	};
	folder: string;
}

interface IStorageProvider {
	save(props: ISaveFileProps): Promise<string | { error: any }>;
	delete(file: string, folder: string): Promise<void>;
}

export type { IStorageProvider, ISaveFileProps };
