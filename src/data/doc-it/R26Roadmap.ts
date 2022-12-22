import { Quarter, RoadmapBucket } from './_types';

const CURRENT_YEAR = 2022;
const CURRENT_QUARTER: Quarter = 'Q4';

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
                status: 'finished',
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
                status: 'finished',
                author: 'Brightlayer UI',
            },
            {
                name: 'Design Audit Guidelines',
                description: 'A how-to guide for requesting and conducting design audits',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                framework: ['all'],
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
                status: 'in-progress',
                author: 'Brightlayer UI',
                framework: ['all'],
            },
        ],
    },
];
