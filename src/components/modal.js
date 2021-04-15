import styled from 'styled-components';
import {useState, useRef, useEffect} from 'react';
import CARDDATA from '../shared/cardData';
import Card from './card';
import devices from '../shared/breakpoints';
import CLOSEMODAL from '../shared/images/icon-close-modal.svg';
import ICONSUCCESS from '../shared/images/icon-check.svg';
import Button from './shared/button';

const ModalOpacity = styled.div`
  width:100%;
  height:100%;
  position: absolute;
  background-color: rgba(0,0,0,30%);
  display: flex;
  flex-direction: column;
  align-items: center;
  &.hidden{
    display:none;
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  margin-top: 121px;
  padding: 32px 24px;
  background-color: #FFFFFF;
  width: min(90vw, 327px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  @media ${devices.pc} {
    width: min(90vw, 730px);
    margin-top: 185px;
    padding: 48px;
    gap: 32px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media ${devices.pc} {
    gap: 16px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
`;

const Subtitle = styled.h3`
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(122,122,122,1);
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

const CloseModal = styled.img`
  position: absolute;
  right: 32px;
  top: 20px;
  &:hover {
    opacity: 60%;
    cursor: pointer;
  }
`;

const Success = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
`;

const IconSuccess = styled.img`
  width: 64px;
  height: 64px;
`;

const Modal = (props) => {

    const [pledge, setPledge] = useState(" ");
    const [success, setSuccess] = useState(false);
    
    const node = useRef();
    
    const handleClick = e => {
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }  // outside click 
        props.showModal(false);
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClick);
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    });

    return(
      <ModalOpacity className={props.isOpen ? "" : "hidden"} id="modal">
        <ModalContainer ref={node}>
          {success 
          ? <Success>
              <IconSuccess src={ICONSUCCESS}/>
              <Title>Thanks for your support!</Title>
              <Subtitle>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. 
              You will get an email once our campaign is completed.</Subtitle>
              <Button size="m" onClick={() => {
                  setSuccess(false);
                  props.showModal(false);
              }}>Got it!</Button>
            </Success>
          : <>
              <ModalHeader>
                <CloseModal src={CLOSEMODAL} onClick={() => props.showModal(false)} alt="Close Modal"/>
                <Title>Back this project</Title>
                <Subtitle>Want to support us in bringing Mastercraft 
                  Bamboo Monitor Riser out in the world?</Subtitle>
              </ModalHeader>
              <Cards>
                {CARDDATA.map((card) => (
                  <Card {...card} modal {...props} setPledge={setPledge} pledge={pledge} key={card.id} setSuccess={setSuccess} />
                  ))}
              </Cards>
            </>
          }
      </ModalContainer>
    </ModalOpacity>
    );
    
};

export default Modal;