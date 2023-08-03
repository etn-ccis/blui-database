import { Quarter, RoadmapBucket } from './_types';

const CURRENT_YEAR = 2023;
const CURRENT_QUARTER: Quarter = 'Q3';

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
        name: 'Reusable Workflows',
        description: 'Components for implementing common workflows across applications',
        type: 'development',
        framework: ['react'],
        items: [
            {
                name: 'React Auth Workflow Screen Componentization',
                description:
                    'Componentize and export screens individually to allow for better custom screen ordering and injection',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
            {
                name: 'React Auth Workflow Router Support',
                description: 'React Router v6 updates and router customizability',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
            {
                name: 'React Auth Workflow Internationalization',
                description: 'Support for the latest versions of i18n and react-i18n',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'React Native Paper V5 with Material You',
        description: 'Update React Native Component and Theme Library to support Paper V5 with Material You',
        type: 'development',
        framework: ['react-native'],
        items: [
            {
                name: 'React Native Component Library',
                description:
                    'Update Component Library to support React Native Paper V5 with Material You',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
            {
                name: 'React Native Theme Library',
                description: 'Update Theme Library to support React Native Paper V5 with Material You',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
        ],
    },
];
