import HTML from '../../assets/html-5.svg'
import CSS from '../../assets/css-3.svg'
import REACT from '../../assets/react.svg'
import REDUX from '../../assets/redux.svg'
import SASS from '../../assets/sass.svg'
import TS from '../../assets/typescript-icon.svg'
import STYLED_COMPONENTS from '../../assets/styled-components.svg'
import REACT_SPRING from '../../assets/react-spring.svg'
import FRAMER_MOTION from '../../assets/framer.svg'
import MATERIAL_UI from '../../assets/material-ui.svg'
import NODE from '../../assets/nodejs.svg'
import EXPRESS from '../../assets/express.svg'
import MONGO from '../../assets/mongodb.svg'
import PHP from '../../assets/php.svg'
import MYSQL from '../../assets/mysql.svg'
import JWT from '../../assets/jsonwebtokens.svg'
import APOLLO from '../../assets/apollostack.svg'
import GRAPHQL from '../../assets/graphql.svg'
import NEXTJS from '../../assets/nextjs-icon.svg'
import CYPRESS from '../../assets/cypress.svg'
import SUCCESS from '../../assets/success.svg'
import GIT from '../../assets/git-icon.svg'
import ProjectInterface from '../../interfaces/projectInterface'

const iconsSize = '50px', successSize = '25px'

const projectsData : Array<ProjectInterface> = [
    {
        imageSrc: '/e-commerce.jpg',
        heading: 'Games shop',
        desc: "Online shop which allows customers to purchase some games. The shop contains most features as other online shops. The website's layout was partially inspired and derived from gog.com.",
        technologies: [
            {
                name: 'HTML 5',
                icon: <HTML />,
                size: iconsSize
            },
            {
                name: 'CSS 3',
                icon: <CSS />,
                size: iconsSize
            },
            {
                name: 'SASS/SCSS',
                icon: <SASS />,
                size: iconsSize
            },
            {
                name: 'React',
                icon: <REACT />,
                size: iconsSize
            },
            {
                name: 'Redux',
                icon: <REDUX />,
                size: iconsSize
            },
            {
                name: 'MySQL',
                icon: <MYSQL />,
                size: iconsSize
            },
            {
                name: 'PHP',
                icon: <PHP />,
                size: iconsSize
            },
            {
                name: 'Json Web Tokens',
                icon: <JWT />,
                size: iconsSize
            },
            {
                name: 'React Spring',
                icon: <REACT_SPRING />,
                size: iconsSize
            },
            {
                name: 'Material UI',
                icon: <MATERIAL_UI />,
                size: iconsSize
            },
            {
                name: 'Git',
                icon: <GIT />,
                size: iconsSize
            },
            {
                name: 'SCSS Modules',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'BEM',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'Redux Persist',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'Redux Thunk',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'Axios',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'Recaptcha',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'React Hook Form',
                icon: <SUCCESS />,
                size: successSize
            }
        ],
        previewUrl: 'https://teo-games-shop.herokuapp.com/',
        codeUrl: 'https://github.com/teo0098/E-commerce-Games-Shop'
    },
    {
        imageSrc: '/planterium.jpg',
        heading: 'Planterium',
        desc: "App helping keen gardeners tracking their plants' irrigation. Apart from tracking plants' irrigation's rate, gardener can also see what was the time of the last irrigation of the plant and is capable to create his own custom plant and do more interesting things.",
        technologies: [
            {
                name: 'HTML 5',
                icon: <HTML />,
                size: iconsSize
            },
            {
                name: 'CSS 3',
                icon: <CSS />,
                size: iconsSize
            },
            {
                name: 'SASS/SCSS',
                icon: <SASS />,
                size: iconsSize
            },
            {
                name: 'React',
                icon: <REACT />,
                size: iconsSize
            },
            {
                name: 'Json Web Tokens',
                icon: <JWT />,
                size: iconsSize
            },
            {
                name: 'Framer Motion',
                icon: <FRAMER_MOTION />,
                size: iconsSize
            },
            {
                name: 'Material UI',
                icon: <MATERIAL_UI />,
                size: iconsSize
            },
            {
                name: 'Node.js',
                icon: <NODE />,
                size: iconsSize
            },
            {
                name: 'Express.js',
                icon: <EXPRESS />,
                size: iconsSize
            },
            {
                name: 'MongoDB',
                icon: <MONGO />,
                size: iconsSize
            },
            {
                name: 'TypeScript',
                icon: <TS />,
                size: iconsSize
            },
            {
                name: 'Apollo Client',
                icon: <APOLLO />,
                size: iconsSize
            },
            {
                name: 'GraphQL',
                icon: <GRAPHQL />,
                size: iconsSize
            },
            {
                name: 'Git',
                icon: <GIT />,
                size: iconsSize
            },
            {
                name: 'SCSS Modules',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'BEM',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'Mobile First Design',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'Final Form',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'Mongoose',
                icon: <SUCCESS />,
                size: successSize
            }
        ],
        previewUrl: 'https://teo-planterium.herokuapp.com/',
        codeUrl: 'https://github.com/teo0098/Planterium'
    },
    {
        imageSrc: '/jobs.jpg',
        heading: 'Jobs.find',
        desc: "Website focused on helping users to find their dreamed-of job. One of the many features is that user is able to browse many jobs on the page and also browse jobs determined by filter criteria or by searching specific jobs. Website's layout was inspired from No Fluff Jobs' website.",
        technologies: [
            {
                name: 'HTML 5',
                icon: <HTML />,
                size: iconsSize
            },
            {
                name: 'CSS 3',
                icon: <CSS />,
                size: iconsSize
            },
            {
                name: 'Styled Components',
                icon: <STYLED_COMPONENTS />,
                size: iconsSize
            },
            {
                name: 'Next.js',
                icon: <NEXTJS />,
                size: iconsSize
            },
            {
                name: 'Redux',
                icon: <REDUX />,
                size: iconsSize
            },
            {
                name: 'Json Web Tokens',
                icon: <JWT />,
                size: iconsSize
            },
            {
                name: 'Framer Motion',
                icon: <FRAMER_MOTION />,
                size: iconsSize
            },
            {
                name: 'Material UI',
                icon: <MATERIAL_UI />,
                size: iconsSize
            },
            {
                name: 'Node.js',
                icon: <NODE />,
                size: iconsSize
            },
            {
                name: 'MongoDB',
                icon: <MONGO />,
                size: iconsSize
            },
            {
                name: 'TypeScript',
                icon: <TS />,
                size: iconsSize
            },
            {
                name: 'Cypress',
                icon: <CYPRESS />,
                size: iconsSize
            },
            {
                name: 'Git',
                icon: <GIT />,
                size: iconsSize
            },
            {
                name: 'SCSS Modules',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'BEM',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'Mobile First Design',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'Final Form',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'Redux Persist',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'Axios',
                icon: <SUCCESS />,
                size: successSize
            },
            {
                name: 'REST API',
                icon: <SUCCESS />,
                size: successSize
            }
        ],
        previewUrl: 'https://jobs-find.vercel.app/',
        codeUrl: 'https://github.com/teo0098/Jobs.find'
    }
]

export default projectsData