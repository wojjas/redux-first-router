import React from "react";
import Link from "redux-first-router-link";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const StyledLi = styled.li`
  float: left;
`;
const StyledLink = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const TopBar = () => {
  return (
    <StyledUl>
      <StyledLi>
        {" "}
        <StyledLink to="/">Home</StyledLink>
      </StyledLi>
      <StyledLi>
        {" "}
        <StyledLink to="/about">About</StyledLink>{" "}
      </StyledLi>
      <StyledLi>
        {" "}
        <StyledLink to="/users">Users</StyledLink>{" "}
      </StyledLi>
      <StyledLi>
        {" "}
        <StyledLink to="/user/1">User 1</StyledLink>{" "}
      </StyledLi>
      <StyledLi>
        {" "}
        <StyledLink to="/user/2">User 2</StyledLink>{" "}
      </StyledLi>
      <StyledLi>
        {" "}
        <StyledLink to="/counter">Counter</StyledLink>{" "}
      </StyledLi>
    </StyledUl>
  );
};

export default TopBar;
