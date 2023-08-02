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
        name: 'React Native Paper V5',
        description: 'Update React Native Component and Theme Library to support Paper V5 (MD3)',
        type: 'development',
        framework: ['react-native'],
        items: [
            {
                name: 'React Native Component Library',
                description:
                    'Update Component Library to support Paper V5 (MD3)',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
            {
                name: 'React Native Theme Library',
                description: 'Update Theme Library to support Paper V5 (MD3)',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Design Guidelines',
        description: 'User Testing and Design Support',
        type: 'design',
        framework: ['all'],
        items: [
            {
                name: 'DLM User Testing and design support',
                description: 'Conduct User Testing and provide support to DLM workflow screens',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
            {
                name: 'MD3 design guidelines',
                description: 'New design guidelines to support MD3 for React Native Resources',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
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
                name: 'Brightlayer Documentation site improvements',
                description: 'Accessibility Support to Brightlayer Documentation site',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
                framework: ['react'],
            },
            {
                name: 'Templates & Examples Upgrades to latest',
                description: 'Support for the latest versions',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
                framework: ['react'],
            },
            {
                name: 'React Dev Docs Phase 2',
                description: 'Add new features in React Dev Docs',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
                framework: ['react'],
            },
        ],
    },
];
