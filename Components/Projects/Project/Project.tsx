import Fade from 'react-reveal/Fade';
import Lazyload from 'react-lazyload';

import ProjectInterface from '../../../interfaces/projectInterface';
import * as SC from '../../../styled-components/styledProject';
import Technologies from './Technologies/Technologies';

const Project: React.FC<ProjectInterface> = ({
  imageSrc,
  heading,
  desc,
  technologies,
  codeUrl,
  index,
  smallImageSrc,
}) => (
  <SC.StyledProject index={index}>
    <Fade friction={0.8}>
      <Lazyload once offset={100}>
        <picture>
          <source srcSet={smallImageSrc} media='(min-width: 1024px)' />
          <source srcSet={smallImageSrc} media='(max-width: 500px)' />
          <source srcSet={imageSrc} />
          <SC.StyledImg index={index} src={imageSrc} alt={heading} />
        </picture>
      </Lazyload>
    </Fade>
    <SC.StyledInfoWrapper>
      <SC.StyledSection>
        <Fade friction={0.8}>
          <SC.StyledH3> {heading} </SC.StyledH3>
        </Fade>
        <Fade friction={0.8}>
          <SC.StyledDesc> {desc} </SC.StyledDesc>
        </Fade>
      </SC.StyledSection>
      <Technologies technologies={technologies} />
      <SC.StyledButtons>
        <SC.StyledButton as='a' href={codeUrl} target='_blank' rel='noopener'>
          {' '}
          Project's code{' '}
        </SC.StyledButton>
      </SC.StyledButtons>
    </SC.StyledInfoWrapper>
  </SC.StyledProject>
);

export default Project;
