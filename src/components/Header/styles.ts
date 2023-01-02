

import styled from "styled-components";

export const Container = styled.header`

    

    width: 100%;
    background-color: var(--color-primary);
    height: 75px;

    &>div {

        height: 75px;
        width: 100%;
        max-width: 80%;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        margin: 0 auto;
        
        .logo {
            font-size: 1.6rem;
        
            span {
                color: var(--color-text-hover-light);
                font-family: cursive;
                font-size: 1.6rem;
                font-weight: 800;
            }
        }
    }

`

export const Content = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;

    & > h2 {
        color: var(--color-main-light);
    }

    & > .form-group {
        width: 100%;
        border-radius: 0.25rem;

        & > input {
            width: 100%;
            height: 45px;
            padding: 1.5rem;
            border-radius: 0.25rem;
            border: 2px solid var(--color-primary);
        }

        & > textarea {
            width: 100%;
            padding: 1.5rem;
            border-radius: 0.25rem;
            border: 2px solid var(--color-primary);
        }
    }

    & > .form-group-buttons {
        display: flex;
        gap: 1rem;

        & > button {
            transition: all 0.2s;
        }

        & > button:nth-child(1):hover {
            background-color: var(--color-primary);
            color: var(--color-main-light);
            border: 1px solid var(--color-main-light);
        }

        & > button:nth-child(2) {
            background-color: var(--color-danger);
            color: var(--color-main-light);
        }

        & > button:nth-child(2):hover {
            background-color: transparent;
            color: var(--color-danger);
            border: 1px solid var(--color-danger);
        }
    }

    

`