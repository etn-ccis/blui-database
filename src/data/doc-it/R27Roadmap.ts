import { Quarter, RoadmapBucket } from './_types';

const CURRENT_YEAR = 2023;
const CURRENT_QUARTER: Quarter = 'Q1';

export const roadmap: RoadmapBucket[] = [
    {
        name: 'Reuseable Workflows',
        description: 'Components for implementing common workflows across applications',
        type: 'all',
        framework: ['all'],
        items: [
            {
                name: 'Device Lifecycle Management',
                description:
                    'Collaboration with Brightlayer Cloud to build connected workflows for device lifecycle management leveraging IoT83',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
                framework: ['all'],
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
