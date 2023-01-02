

import styled from "styled-components";

export const Container = styled.footer`
    margin-top: 5rem;

    position: relative;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 75px;
    background-color: var(--color-primary);

    & > div {
        width: 100%;
        max-width: 80%;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    

    a {
        color: var(--color-main-light);
    }

    
`