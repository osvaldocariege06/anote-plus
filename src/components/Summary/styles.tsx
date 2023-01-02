

import styled from "styled-components";

export const Container = styled.section`
    
    width: 100%;


    @media(max-width: 820px){
        
        .content-summary {
                grid-template-columns: 1fr;
                grid-template-areas: 2 2;
            }
    }

`

export const Content = styled.div`
    width: 100%;
    max-width: 80%;

    margin: 0 auto;
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    .card {
        padding: 2rem;
        border-radius: 0.25rem;
        background-color: var(--color-primary);
        color: var(--color-main-light);
    }
    
    .total {
        background-color: var(--color-main-light);
        color: var(--color-main-dark);

        span {
            display: block;
            margin-bottom: 10px;
            color: var(--color-primary);
        }

        h2 {
            font-size: 2.5rem;
            color: var(--color-primary);
        }
    }


    
`