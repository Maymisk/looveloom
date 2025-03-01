export function flattenObject(data: Object) {
	const result: Record<string, any> = {};

	function processValue(key: string, value: any) {
		if (Array.isArray(value)) {
			value.forEach((item, index) =>
				processValue(`${key}_${index}`, item)
			);
			return;
		}

		if (typeof value === 'object' && value !== null) {
			Object.entries(value).forEach(([subKey, subValue]) =>
				processValue(`${key}_${subKey}`, subValue)
			);
			return;
		}

		result[key] = value;
	}

	Object.entries(data).forEach(([key, value]) => processValue(key, value));

	return result;
}

export function deflattenObject(data: Object) {
	const result: Record<string, any> = {};

	Object.entries(data).forEach(([key, value]) => {
		const keys = key.split('_');
		let current = result;

		while (keys.length > 1) {
			const part = keys.shift() as string;
			const nextPart = keys[0];

			if (!isNaN(Number(nextPart))) current[part] = current[part] || [];
			else current[part] = current[part] || {};

			current = current[part];
		}

		current[keys[0]] = value;
	});

	return result;
}
