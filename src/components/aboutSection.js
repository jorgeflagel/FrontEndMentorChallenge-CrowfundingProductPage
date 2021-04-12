import styled from 'styled-components';
import devices from '../shared/breakpoints';


const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const Title = styled.h1`
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  @media ${devices.pc} {
    font-size: 20px;
    line-height: 24px;
  }
`;

const Text = styled.p`
    font-size: 14px;
    line-height: 24px;
    color: rgba(122,122,122,1);
    @media ${devices.ps} {
      font-size: 16px;
      line-height: 30px;
    }
`;

function AboutSection(props) {
    return(
        <AboutContainer>
            <Title>About this project</Title>
            <Text>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish 
            platform that elevates your screen to a more comfortable viewing 
            height. Placing your monitor at eye level has the potential to 
            improve your posture and make you more comfortable while at work, 
            helping you stay focused on the task at hand.</Text>
            <Text>Featuring artisan craftsmanship, the simplicity of design creates 
            extra desk space below your computer to allow notepads, pens, and 
            USB sticks to be stored under the stand.</Text>
        </AboutContainer>
    );
}

export default AboutSection;