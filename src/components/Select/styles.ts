import styled from "styled-components";

export const StyledSelect = styled.div`
    position: relative;
    width: max-content;

    &::after {
        content: "▼";
        position: absolute;
        top: 0.3rem;
        right: 0.7rem;
        transform: translateY(50%);
        font-size: 1rem;
    }

    select {
        cursor: pointer;
        padding: 0.5rem 2.2rem;
        padding-left: 1rem;
        background-color: var(--color-btn-bg);
        color: var(--color-fg-default);
        background-color: var(--color-btn-bg);
        border-color: var(--color-btn-border);
        box-shadow: var(--color-btn-shadow), var(--color-btn-inset-shadow);
        font-weight: 500;
    }
`;
