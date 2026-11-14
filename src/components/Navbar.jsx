import React, { useState, useEffect, useRef } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme, keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Bio } from "../data/constants";
import { MenuRounded, CloseRounded } from "@mui/icons-material";
import "./Navbar.css";

const NavPlaceholder = styled.div`
  height: 76px;
  width: 100%;
  pointer-events: none;
  visibility: hidden;

  @media screen and (max-width: 768px) {
    height: 66px;
  }
`;

const ColorText = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: 26px;
  font-weight: 600;
  line-height: 1;
`;

const blink = keyframes`
  0%, 50% { opacity: 1; }
  25% { opacity: 0.3; }
`;

const HexagonSVG = styled.svg`
  width: 8px;
  height: 8px;
  fill: ${({ theme }) => theme.primary};
  margin-right: 6px;
  animation: ${blink} 0.6s ease-in-out;
  filter: drop-shadow(0 0 5px rgba(132, 59, 206, 0.9));
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 4px;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  white-space: nowrap;
  user-select: none;
  transition: opacity 0.2s ease;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.7);

  &:hover {
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 4px;
    border-radius: 6px;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 16px;
  list-style: none;
  margin: 0;

  @media screen and (max-width: 960px) {
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme, active }) =>
    active ? theme.primary : theme.text_primary};
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.7);

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 4px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  background: rgba(133, 76, 230, 0.12);
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 7px 18px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
    box-shadow: 0 0 16px rgba(133, 76, 230, 0.6);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 4px;
  }
`;

const MobileIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  padding: 6px;
  border-radius: 8px;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: rgba(255, 255, 255, 0.08);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.ul)`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  list-style: none;
  padding: 20px 24px 24px 24px;
  background: rgba(10, 10, 20, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.7);
  z-index: 1000;
  box-sizing: border-box;
`;

const MobileNavLink = styled(NavLink)`
  font-size: 16px;
  width: 100%;
  padding: 6px 0;
`;

const MobileGithubButton = styled(GithubButton)`
  width: 100%;
  margin-top: 8px;
  padding: 10px 0;
  text-align: center;
`;

const sections = [
  { id: "hero", name: "About", href: "#hero" },
  { id: "Skills", name: "Skills", href: "#Skills" },
  { id: "Projects", name: "Projects", href: "#Projects" },
  { id: "Education", name: "Education", href: "#Education" },
  { id: "contact", name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(() => {
    if (typeof window !== "undefined") {
      return window.scrollY > 50;
    }
    return false;
  });
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const theme = useTheme();
  const navRef = useRef(null);

  // Exact React Bits scroll listener (window.scrollY > 50) + active section detection
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const HexagonIcon = () => (
    <HexagonSVG viewBox="0 0 16 16" theme={theme}>
      <path d="M7.007,0.63c0.614-0.355,1.371-0.355,1.986,0l4.893,2.825c0.614,0.355,0.993,1.01,0.993,1.72v5.65 c0,0.709-0.378,1.365-0.993,1.72L8.993,15.37c-0.614,0.355-1.371,0.355-1.986,0l-4.893-2.825c-0.614-0.355-0.993-1.01-0.993-1.72 v-5.65c0-0.709,0.378-1.365,0.993-1.72L7.007,0.63z" />
    </HexagonSVG>
  );

  return (
    <>
      <NavPlaceholder aria-hidden="true" />
      <header
        className={`portfolio-navbar${scrolled ? " navbar-scrolled" : ""}`}
        role="banner"
      >
        <div
          className="portfolio-navbar-inner"
          ref={navRef}
          role="navigation"
          aria-label="Main Navigation"
        >
          <NavLogo to="/" aria-label="Sushil Kumar Homepage">
            <ColorText>&lt;</ColorText>Sushil
            <div style={{ color: theme.primary }}>/</div>Kumar
            <ColorText>&gt;</ColorText>
          </NavLogo>

          <MobileIcon
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
          >
            {isOpen ? (
              <CloseRounded style={{ color: "inherit", fontSize: 26 }} />
            ) : (
              <MenuRounded style={{ color: "inherit", fontSize: 26 }} />
            )}
          </MobileIcon>

          <NavItems>
            {sections.map((section) => (
              <li key={section.id}>
                <NavLink
                  href={section.href}
                  active={activeSection === section.id ? 1 : 0}
                  onClick={() => handleNavClick(section.id)}
                  theme={theme}
                >
                  {activeSection === section.id && <HexagonIcon />}
                  {section.name}
                </NavLink>
              </li>
            ))}
          </NavItems>

          <ButtonContainer>
            <GithubButton
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              theme={theme}
            >
              Github Profile
            </GithubButton>
          </ButtonContainer>

          <AnimatePresence>
            {isOpen && (
              <MobileMenu
                id="mobile-navigation-menu"
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {sections.map((section) => (
                  <li key={`mobile-${section.id}`} style={{ width: "100%" }}>
                    <MobileNavLink
                      href={section.href}
                      active={activeSection === section.id ? 1 : 0}
                      onClick={() => handleNavClick(section.id)}
                      theme={theme}
                    >
                      {activeSection === section.id && <HexagonIcon />}
                      {section.name}
                    </MobileNavLink>
                  </li>
                ))}
                <li style={{ width: "100%" }}>
                  <MobileGithubButton
                    href={Bio.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    theme={theme}
                    style={{
                      background: theme.primary,
                      color: theme.text_primary,
                    }}
                  >
                    Github Profile
                  </MobileGithubButton>
                </li>
              </MobileMenu>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Navbar;