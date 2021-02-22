import * as SC from '../../styled-components/styledProjects'
import Desc from '../Desc/Desc'
import projectsData from './projectsData'
import Project from './Project/Project'

const Projects : React.FC = () => (
    <SC.StyledProjects id='Projects'>
        <Desc heading='Projects'>
            Here is the list of the best projects (at least in my opinion) that I have built. The rest of the projects is placed on <SC.StyledA href='https://github.com/teo0098?tab=repositories' target='_blank' rel="noopener">github</SC.StyledA>.
        </Desc>
        <SC.StyledProjectsWrapper>
            {projectsData.map(({ imageSrc, heading, desc, previewUrl, codeUrl, technologies, smallImageSrc }, index : number) => (
                <Project key={heading} smallImageSrc={smallImageSrc} index={index} imageSrc={imageSrc} heading={heading} desc={desc} previewUrl={previewUrl} codeUrl={codeUrl} technologies={technologies} />             
            ))}
        </SC.StyledProjectsWrapper>
    </SC.StyledProjects>
)

export default Projects