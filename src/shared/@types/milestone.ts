type MilestoneNameType =
	| 'first-sight'
	| 'first-kiss'
	| 'first-date'
	| 'relationship'
	| 'engagement'
	| 'marriage';

type Milestone = {
	_id?: string;
	key: string;
	name: MilestoneNameType;
	description: string;
	date: string | Date;
};

export type { Milestone, MilestoneNameType };
