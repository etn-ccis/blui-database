import { Quarter, RoadmapBucket } from './_types';

const CURRENT_YEAR = 2023;
const CURRENT_QUARTER: Quarter = 'Q1';

export const roadmap: RoadmapBucket[] = [
    {
        name: 'Reuseable Workflows',
        description: 'Components for implementing common workflows across applications',
        type: 'design',
        framework: ['all'],
        items: [
            {
                name: 'Device Lifecycle Management',
                description: 'Help design connected workflows for device lifecycle management',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
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
                status: 'finished',
                author: 'Brightlayer UI',
                framework: ['all'],
            },
        ],
    },
];
