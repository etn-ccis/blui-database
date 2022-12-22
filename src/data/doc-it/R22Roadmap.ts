import { Quarter, RoadmapBucket } from './_types';

const CURRENT_YEAR = 2021;
const CURRENT_QUARTER: Quarter = 'Q4';

export const roadmap: RoadmapBucket[] = [
    {
        name: 'brightlayer-ui.github.io',
        description: 'The Brightlayer UI documentation site',
        type: 'development',
        items: [
            {
                name: 'Brightlayer UI Re-brand',
                description: 'Updating all of our documentation and resources to use the new platform name',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Code Examples',
        description: 'Basic code snippets showing how to implement various design patterns',
        type: 'development',
        framework: ['react', 'angular'],
        items: [
            {
                name: 'Updated Design Pattern Examples',
                description: 'More comprehensive examples for List patterns',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Utilities',
        description: 'Assorted tools for helping you work faster',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Training Material Research',
                description: 'Research and planning initiative for more comprehensive training materials',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
        ],
    },
];
