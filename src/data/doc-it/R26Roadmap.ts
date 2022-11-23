export type FrameworkFilter = 'all' | 'angular' | 'react' | 'ionic' | 'react-native';
export type ItemTypeFilter = 'all' | 'design' | 'development';
export type Status = 'backlog' | 'in-progress' | 'pre-release' | 'deferred' | 'finished';
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

const CURRENT_YEAR = 2022;
const CURRENT_QUARTER: Quarter = 'Q4';

export type RoadmapItem = {
    name: string;
    description: string;
    year: string | number;
    quarter: Quarter;
    status: Status;
    author?: string;
    type?: ItemTypeFilter;
    framework?: FrameworkFilter[];
};
type RoadmapBucket = {
    name: string;
    description: string;
    type: ItemTypeFilter;
    framework?: FrameworkFilter[];
    items: RoadmapItem[];
};

export const roadmap: RoadmapBucket[] = [
    {
        name: 'Angular Component Library',
        description: 'Reusable UI elements from @brightlayer-ui/angular-components',
        type: 'development',
        framework: ['angular'],
        items: [
            {
                name: 'Angular 14 Support',
                description: 'Update component library to build using Angular version 14',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Design Guidelines',
        description: 'Adding new design guidelines',
        type: 'design',
        framework: ['all'],
        items: [
            {
                name: 'Button Guidelines',
                description: 'New design pattern for button usage',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                framework: ['all'],
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
            {
                name: 'Design Audit Guidelines',
                description: 'A how-to guide for requesting and conducting design audits',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                framework: ['all'],
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
        ],
    },

    {
        name: 'Miscellaneous',
        description: 'Miscellaneous platform updates',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Bug Fixes',
                description: 'High priority bug fixes',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
                framework: ['all'],
            },
        ],
    },
];
