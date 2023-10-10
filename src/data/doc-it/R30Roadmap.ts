import { Quarter, RoadmapBucket } from './_types';

const CURRENT_YEAR = 2023;
const CURRENT_QUARTER: Quarter = 'Q4';

export const roadmap: RoadmapBucket[] = [
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
    {
        name: 'React Native Auth Workflow',
        description: 'Brightlayer UI React Native Workflow',
        type: 'development',
        framework: ['react-native'],
        items: [
            {
                name: 'React Native Auth Workflow patch release',
                description:
                    'Fix user-reported issues in the React Native Auth Workflow so that the adopters have robust and bug-free workflows',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'API Integration',
        description: 'Innersource Brightlayer Cloud integrations for React Auth Workflow',
        type: 'development',
        framework: ['react'],
        items: [
            {
                name: 'Brightlayer Cloud API login/auth integrations',
                description:
                    'Innersource the BLC API login/auth integrations from DERMS CoE so that new products using React can connect their BLUI Auth workflow screens to BLC with minimal configuration',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
        ],
    },
];
