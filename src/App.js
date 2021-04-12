import styled from 'styled-components';
import React, { useState } from 'react';

import NavBar from './components/navbar'; 
import Header from './components/header';
import AboutSection from './components/aboutSection'; 
import StatisticCard from './components/statisticCard';
import Card from './components/card';
import Modal from './components/modal';


import BACKMOBILE from './shared/images/image-hero-mobile.jpg';
import BACKDESKTOP from './shared/images/image-hero-desktop.jpg'
import devices from './shared/breakpoints';
import CARDDATA from './shared/cardData';

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Commissioner', sans-serif;
  background-color: rgba(250,250,250,1);
  background-image: url(${BACKMOBILE});
  background-repeat: no-repeat;
  background-size: 100% 300px;
  @media ${devices.pc} {
    background-image: url(${BACKDESKTOP});
    background-size: 100% 400px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: min(90vw, 327px);
  margin-bottom: 76px;
  @media ${devices.pc} {
    width: min(730px, 80%);
    margin-bottom: 124px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  background-color: #FFFFFF;
  padding: 40px 24px;
  @media ${devices.pc} {
    padding: 48px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

function App(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEdition, setSelectedEdition] = useState("Pledge with no reward");
  const [rewards, setRewards] = useState({1:161, 2:64, 3:0});
  const [total, setTotal] = useState(89914);
  const [backers, setBackers] = useState(5007)

  return (
    <AppStyled className="App">
      <NavBar />
      <Container>
        <Header showModal={setIsModalOpen} selectEdition={setSelectedEdition}/>
        <StatisticCard total={total} backers={backers}/>
        <Main>
          <AboutSection />
          <Cards>
            {CARDDATA.slice(1).map((card) => (
              <Card {...card} showModal={setIsModalOpen} selectEdition={setSelectedEdition} rewards={rewards} key={card.id}/>
              ))}
          </Cards>
        </Main>
      </Container>
      <Modal isOpen={isModalOpen} showModal={setIsModalOpen} selectedEdition={selectedEdition} selectEdition={setSelectedEdition} 
        rewards={rewards} setRewards={setRewards} setTotal={setTotal} total={total} backers={backers} setBackers={setBackers}/>
    </AppStyled>
  );
}

export default App;