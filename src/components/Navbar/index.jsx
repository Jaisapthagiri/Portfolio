import React from 'react';
import {Nav,NavLink,NavbarContainer,Span,NavLogo,NavItems,GitHubButton,ButtonContainer,MobileIcon,MobileMenu,MobileNavLogo,MobileLink,} from './NavbarStyledComponent';
import { HiChevronDoubleLeft } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: 20,
            cursor: 'pointer',
          }}
        >
          <HiChevronDoubleLeft size="3rem" />
          <Span style={{ fontSize: '30px', color: 'red' }}>Jai</Span>
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#certification">Certification</NavLink>
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(false)}>Education</MobileLink>
            <MobileLink href="#certification" onClick={() => setIsOpen(false)}>Certification</MobileLink>
            <GitHubButton
              style={{
                padding: '10px 16px',
                background: `${theme.primary}`,
                color: 'white',
                width: 'max-content',
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
