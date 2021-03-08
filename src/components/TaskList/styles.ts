import styled from "styled-components";

export const LoadingItem = styled.div`
    height: 3rem;
    width: 100%;
    background: white;
    display: flex;
    align-items: center;
    line-height: 1rem;
    padding-left: 16px;
    border-bottom: 1px solid #f0f9fb;
`;

export const GlowCheckBox = styled.span`
    margin-right: 16px;
    width: 12px;
    height: 12px;
    animation: glow 1.5s ease-in-out infinite;
    background: #eee;
    color: transparent;
    cursor: progress;
    display: inline-block;
`;

export const GlowTextSpan = styled.span`
    animation: glow 1.5s ease-in-out infinite;
    background: #eee;
    color: transparent;
    cursor: progress;
    display: inline-block;
`;

export const ListItems = styled.div`
    position: relative;
    background: white;
    min-height: 288px;
`;

export const WrapperMessage = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30vh;
    width: auto;
    height: auto;
    text-align: center;
    align-items: center;

    svg {
        font-size: 48px;
        line-height: 56px;
        color: #2cc5d2;
        margin-bottom: 1rem;
    }
`;

export const WrapperTitle = styled.div`
    font-size: 16px;
    line-height: 24px;
    font-family: 'Nunito Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 800;
    color: #555;
`;

export const WrapperSubTitle = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: #666;
`;