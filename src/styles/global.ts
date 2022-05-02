import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {

    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    } 

    html,
    body,
    #root {
        min-height: 100vh;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        font-size: 1.6rem;
        line-height: 1.5;
        font-family: var(--font-family);
        color: var(--color-fg-default);
    }

    button {
        background-color: transparent;
    }

    button,
    a {
        cursor: pointer;
        transition: all 0.2s linear;

        &:hover {
            opacity: 0.8;
        }
    }

    button,
    input,
    select {
        border: 0.1rem solid transparent;
        outline: none;

        &:focus {
            border: 0.1rem solid var(--color-fg-default);
        }
    }

    input,
    select {
        -webkit-appearance: none;
        appearance: none;
        font-size: 100%;
        font-family: inherit;
    }

    input,
    select {
        padding: 0.5rem 2rem 0.6rem 0.9rem;
        font-size: 1.4rem;
        line-height: 2rem;
        color: var(--color-fg-default);
        vertical-align: middle;
        background-color: var(--color-canvas-default);
        background-repeat: no-repeat;
        background-position: right 0.8rem center;
        border: 0.1rem solid var(--color-border-default);
        border-radius: 0.6rem;
        box-shadow: var(--color-primer-shadow-inset);
        transition: all 0.2s linear;

        &::placeholder {
            font-size: 95%;
        }

        &:focus {
            border-color: transparent;
            border-color: var(--color-accent-fg);
            outline: none;
            box-shadow: inset 0 0 0 0.1rem transparent;
        }
    }

    a {
        text-decoration: none;
        color: var(--color-fg-default);

        &:hover {
            color: var(--color-accent-fg);
            text-decoration: underline;
        }
    }

    img,
    svg {
        max-width: 100%;
    }

    ul {
        list-style: none;
    }

    .flex {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
