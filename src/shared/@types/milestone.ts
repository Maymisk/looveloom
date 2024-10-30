type MilestoneNameType =
	| 'first-sight'
	| 'first-kiss'
	| 'first-date'
	| 'dating'
	| 'engagement'
	| 'married';

type Milestone = {
	name: MilestoneNameType;
	description: string;
	date: string | Date;
};

export type { Milestone };
