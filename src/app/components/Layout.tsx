'use client'
import React from "react";
import styled from "styled-components";



const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>
        <h1>생활툴 모음 📦</h1>
        {children}        
      </Container>
      <StyledFooter>© 2025 MyToolLog</StyledFooter>
    </>
  );
};

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  height: 100%;
`;

const StyledFooter = styled.footer`
  position: absolute;
  padding: 20px;
  background-color: #eee;
  width: 100%;
  bottom: 0;
  display; flex;
  align-items: center;
  text-align: center;
`

export default Layout;
