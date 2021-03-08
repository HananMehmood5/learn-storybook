import styled from "styled-components";

export const ListShow = styled.div`
    min-height: 100vh;
    background: white;
`;

export const ListShowNav = styled.nav`
    background: #d3edf4;
    padding: 1.5rem 1.25rem;
    text-align: center;

    @media screen and (min-width: 40em) {
        text-align: left;
    }
`;

export const PageTitle = styled.h1`
    font-size: 20px;
    line-height: 24px;
    line-height: 2rem;
    cursor: pointer;
    white-space: nowrap;
`;

export const TitleWrapper = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: 'Nunito Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 800;
    color: #1c3f53;
    display: inline-block;
    vertical-align: top;
    max-width: 100%;
`;