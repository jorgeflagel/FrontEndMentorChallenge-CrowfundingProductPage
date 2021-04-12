import styled, {css} from 'styled-components';
import React, {useState, useRef, useEffect} from 'react';

import LOGO from '../shared/images/logo.svg';
import NAVICONOPEN from '../shared/images/icon-hamburger.svg';
import NAVICONCLOSE from '../shared/images/icon-close-menu.svg';

import devices from '../shared/breakpoints';

const NavContainer = styled.nav`
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  @media ${devices.pc} {
    padding: 0 11.5%;
  }
`;

const NavIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  @media ${devices.pc} {
    display: none;
  }
  :focus:not(:focus-visible) {
    outline: none;
  }
`;

const Nav = styled.ul`
    ${(props) => {return (
      props.modalOpen 
      ? css`display:flex;` 
      : css`display:none;`
    )}}
    border-radius: 8px;
    list-style: none;
    position: absolute;
    flex-direction: column;
    margin-top: 180px;
    width: calc(100% - 48px);
    left: 24px;
    z-index: 2;
    & > li {
      width: 100%;
      font-size: 13px;
      line-height: 16px;
      color: rgba(0,0,0,1);
      font-weight: 500;
      height: 40px;
      background-color: rgba(255,255,255,100%);
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: solid 1px rgba(122,122,122, 0.2);
      &:hover {
        opacity: 80%;
        cursor: pointer;
        color: rgba(0,0,0,80%);
      }
    }
    @media ${devices.pc} {
      width: auto;
      margin: 0;
      position: relative;
      display: flex;
      gap: 33px;
      flex-direction: row;
      & > li {
        width: 70px;
        height: auto;
        background: transparent;
        border-bottom: none;
        color: rgba(255, 255, 255, 1);
          &:hover {
          background: transparent;
          color: rgba(255,255,255,1);
          opacity: 100%;
        }
       }
    }
`;

function NavBar(){
    const [modalOpen, setModalOpen] = useState(false);

    // Taken from https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-with-react-hook-ba77c37c7e82
    const node = useRef();
    const navIcon = useRef();
    const handleClick = e => {
      if (node.current.contains(e.target) || navIcon.current.contains(e.target) ) {
        // inside click
        return;
      }  // outside click 
      setModalOpen(false);
    };
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, []);
    // ----------------------------------------------------------------------------------------------------------------

    return(
      <NavContainer>
        <img src={LOGO} width={"128px"} height={"20px"} alt="crowdfund logo"/>
        <Nav modalOpen={modalOpen} ref={node}>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </Nav>
        <NavIcon ref={navIcon} onClick={modalOpen ? ()=>setModalOpen(false) : ()=>setModalOpen(true)}>
          <img src={modalOpen ?  NAVICONCLOSE :  NAVICONOPEN} alt="toggle navigation bar"/>
        </NavIcon>
      </NavContainer>
    );
}

export default NavBar;