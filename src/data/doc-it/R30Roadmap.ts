import { Quarter, RoadmapBucket } from './_types';

const CURRENT_YEAR = 2023;
const CURRENT_QUARTER: Quarter = 'Q4';

export const roadmap: RoadmapBucket[] = [
    {
        name: 'Innersource 2.0',
        description: 'Resources to help Eaton teams share reusable assets',
        type: 'all',
        framework: ['all'],
        items: [
            {
                name: 'MVP Release of Innersource Portal',
                description: 'Initial release of an innersource marketplace with resources shared across all Eaton',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'React Native Paper V5 with Material Design 3',
        description: 'Update React Native Component Library and Themes to support Paper V5 with Material Design 3',
        type: 'development',
        framework: ['react-native'],
        items: [
            {
                name: 'React Native Component Library',
                description:
                    'Update Component Library to support React Native Paper V5 with Material Design 3',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
            {
                name: 'React Native Themes',
                description: 'Update Themes to support React Native Paper V5 with Material Design 3',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
        ],
    },
];
