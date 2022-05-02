import styled from "styled-components";

export const StyledHeader = styled.header`
    grid-area: header;
`;

export const StyledForm = styled.form`
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding-bottom: 1.2rem;
    flex-wrap: wrap;

    .form {
        &__filter {
            &--main {
                flex: 1;
                & > * {
                    margin-bottom: 1rem;
                }
            }

            &--cont {
                justify-content: flex-start;
                flex-wrap: wrap;

                & > * {
                    margin-right: 1rem;
                }
            }

            &--search {
                width: 100%;
                /* width: max-content; */
                /* max-width: 30rem; */
                flex: 1 1 20rem;

                input {
                    width: 100%;
                    display: block;
                }
            }
        }

        &__repo {
            &--new {
                flex: 1;
                max-width: max-content;
                margin-bottom: 1rem;

                button {
                    padding: 0.5rem 1.3rem;
                    border-radius: 0.6rem;
                    color: var(--color-btn-primary-text);
                    background-color: var(--color-btn-primary-bg);
                    border-color: var(--color-btn-primary-border);
                    box-shadow: var(--color-btn-primary-shadow),
                        var(--color-btn-primary-inset-shadow);

                    span {
                        margin-right: 0.5rem;
                    }
                }
            }
        }
    }
`;

export const StyledRepo = styled.li`
    border-color: var(--color-border-muted);
    border-bottom: 0.1rem solid var(--color-border-default);
    justify-content: space-between !important;
    color: var(--color-fg-muted) !important;

    &:first-child {
        border-top: 0.1rem solid var(--color-border-default);
    }

    padding-top: 2.4rem;
    padding-bottom: 2.4rem;

    .repo {
        &__side {
            &--1 {
            }
        }

        &__head {
            text-align: left;
            justify-content: flex-start;

            & > * {
                margin-right: 0.4rem;
            }
        }

        &__link {
            color: var(--color-accent-fg);
            font-size: 2rem;
            display: inline-block;
            margin-right: 0.5rem;
        }

        &__visibility {
            display: inline-block;
            padding: 0 0.7rem 0.1rem;
            font-size: 1.2rem;
            font-weight: 500;
            line-height: 1.8rem;
            white-space: nowrap;
            border: 0.1rem solid transparent;
            border-radius: 2rem;
            border-color: var(--color-border-default);
            color: var(--color-fg-muted);
        }

        &__description {
            max-width: 40rem;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-align: left;
        }

        &__info {
            justify-content: flex-start;
            font-size: 1.2rem;
            margin-top: 0.8rem;
            flex-wrap: wrap;

            & > * {
                &:not(:last-child) {
                    margin-right: 1.3rem;
                }
            }
        }

        &__star {
            &--cont {
                align-items: stretch;
                /* background-color: orange; */

                button,
                select {
                    color: var(--color-btn-text);
                    background-color: var(--color-btn-bg);
                    border-color: var(--color-btn-border);
                    box-shadow: var(--color-btn-shadow),
                        var(--color-btn-inset-shadow);
                    transition: all 0.1s linear;
                    border: 0.1rem solid;
                    border-radius: 0;
                    border-color: var(--color-border-default);
                    font-size: 1.3rem;
                    line-height: 2rem;
                }

                button {
                    padding: 0.3rem 1.2rem;
                    border-left-width: 0.1rem;
                    border-top-left-radius: 0.6rem;
                    border-bottom-left-radius: 0.6rem;
                }

                .select-wrapper {
                    &::after {
                        right: 0.6rem;
                        transform: translate(-50%, 50%);
                    }
                }

                select {
                    border-right-width: 0.1rem;
                    border-top-right-radius: 0.6rem;
                    border-bottom-right-radius: 0.6rem;
                    border-left: 0;
                    padding: 0.5rem 0rem 0.5rem 0;
                    width: max-content;
                }
            }
        }
    }
`;
