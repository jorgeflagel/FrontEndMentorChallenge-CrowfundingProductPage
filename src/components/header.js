import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import LOGOM from '../shared/images/logo-mastercraft.svg';
import BOOKMARK from '../shared/images/icon-bookmark.svg';
import devices from '../shared/breakpoints';
import Button from './shared/button';

const HeaderStyled = styled.header`
  box-sizing: border-box;
  width: 100%;
  margin-top: 116px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.0497193);
  gap: 16px;
  padding: 24px;
  padding-top: 56px;
  background-color: #FFFFFF;
  @media ${devices.pc} {
    padding: 48px;
    margin-top: 180px;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin: 0 30px;
  @media ${devices.pc} {
    font-size: 28px;
    line-height: 24px;
  }
`;

const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: rgba(122,122,122,1);
  @media ${devices.pc} {
    font-size: 16px;
    line-height: 20px;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: -28px;
  left: calc(50% - 28px);
`;

const Buttons = styled.div`
  display: flex;
  gap: 9px;
  padding-top: 24px;
  width: 100%;
  justify-content: space-between;
  @media ${devices.pc} {
    padding-top: 40px;
  }
`;

const Bookmark = styled.button`
    border: none;
    width: 56px;
    background-color: rgba(47,47,47,0.05);
    border-radius: 33.5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 16px;
    color: rgba(122,122,122,1);
    font-weight: 700;
    :focus:not(:focus-visible) {
      outline: none;
    }
    &::after {
        content: ""
      }
    &:hover {
        img{
            opacity: 70%;
        }
    }
    & > svg {
      flex-shrink: 0;
    }
    @media ${devices.pc} {
      width: 174px;
      &::after {
        content: "Bookmark"
      }
    }
    ${props => (
      props.selected && css`
        color: rgba(20,122, 114, 1);
        background-color: rgba(20,122, 114, 0.05);
      `
    )}
`;

function Header({showModal, selectEdition}) {

    const [isBookmarked, setIsBookmarked] = useState(false);
    return(
        <HeaderStyled>
            <Logo src={LOGOM} alt="Logo Mastercraft"/>
            <Title>Mastercraft Bamboo Monitor Riser</Title>
            <Subtitle>A beautifully & handcrafted monitor 
            stand to reduce neck and eye strain.</Subtitle>
            <Buttons>
              <Button size={"l"} onClick={() => {selectEdition("Pledge with no reward"); showModal(true)}} data-target="#modal">Back this project</Button>
              <Bookmark onClick={() => setIsBookmarked(isBookmarked => !isBookmarked) } selected={isBookmarked} ariaLabel="Bookmark Product">
                {!isBookmarked ? <img src={BOOKMARK} alt=""/> :
                  <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="rgb(20,122, 114)" cx="28" cy="28" r="28"/><path fill="#FFF" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                }
              </Bookmark>
            </Buttons>
        </HeaderStyled>
    );
}

export default Header;