
import styled from "styled-components";

export const Container = styled.section`


    
`

export const Content = styled.div`

background-color: var(--color-main-dark);
    
    width: 100%;
    height: 100%;
    max-width: 80%;

    margin: 2rem auto 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    .task {
        border: 3px solid var(--color-secondary);
        background-color: var(--color-secondary);
        padding: 2rem;
        border-radius: 0.25rem;

        transition: border 0.3s;

        header {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
        }

        & > h2 {
            margin-bottom: 5px;
        }

        &:hover{
            border: 3px solid var(--color-primary);
        }
    }
`