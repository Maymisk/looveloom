interface IStorageProvider {
	save(file: File, folder: string): Promise<string | { error: any }>;
	delete(file: string, folder: string): Promise<void>;
}

export type { IStorageProvider };
