import ProjectInterface from '../../../interfaces/projectInterface'
import * as SC from '../../../styled-components/styledProject'

const Project : React.FC<ProjectInterface> = ({ imageSrc, heading, desc, technologies, previewUrl, codeUrl }) => (
    <SC.StyledProject>
        <SC.StyledImg src={imageSrc} alt={heading} />
        <SC.StyledH3> {heading} </SC.StyledH3>
        <SC.StyledDesc> {desc} </SC.StyledDesc>
        <SC.StyledTechnologies>
            {technologies.map(({ icon, name }) => (
                <SC.StyledTechnology>
                    {icon}
                    <SC.StyledSpan> {name} </SC.StyledSpan>
                </SC.StyledTechnology>
            ))}
        </SC.StyledTechnologies>
        <SC.StyledButtons>
            <SC.StyledButton as='a' href={previewUrl} target='_blank' rel="noopener"> Project's preview </SC.StyledButton>
            <SC.StyledButton as='a' href={codeUrl} target='_blank' rel="noopener"> Project's code </SC.StyledButton>
        </SC.StyledButtons>
    </SC.StyledProject>
)

export default Project