import styled from "styled-components";

export const StyledHome = styled.main`
    width: 100%;
    max-width: 125rem;
    margin-right: auto;
    margin-left: auto;
    padding: 2rem;

    & > div {
        align-items: flex-start;
        justify-content: flex-start;
        gap: 3rem;
        flex-wrap: wrap;
    }

    .profile {
        &__info {
            flex: 1;
            max-width: max-content;
            /* position: sticky; */
            /* top: 2rem; */

            & > * {
                margin-bottom: 0.8rem;
            }
        }

        &__img {
            max-width: 29rem;
            max-height: 29rem;
            border-radius: 50%;

            img {
                border-radius: 50%;
                box-shadow: 0 0 0 1px var(--color-avatar-border);
            }
        }

        &__name {
            span {
                display: block;

                &:first-child {
                    font-size: 2rem;
                    margin-bottom: -0.3rem;
                }

                &:last-child {
                    font-weight: 300;
                    font-size: 1.5rem;
                }
            }
        }

        &__follow {
            display: block;
            width: 100%;
            max-width: 20rem;
            padding: 0.5rem 1.6rem 0.6rem;
            text-align: center;
            border-radius: 0.6rem;
            color: var(--color-btn-text);
            background-color: var(--color-btn-bg);
            border-color: var(--color-btn-border);
            box-shadow: var(--color-btn-shadow), var(--color-btn-inset-shadow);
            transition: all 0.2s linear;
        }

        &__following {
            &--cont {
                justify-content: flex-start;

                & > * {
                    margin-right: 0.5rem;
                    font-size: 1.35rem;
                }

                figure,
                span {
                    font-size: 1.6rem;
                }

                span {
                    font-weight: 600;
                }
            }
        }

        &__location,
        &__links {
            width: max-content;
            justify-content: flex-start;

            span {
                margin-right: 0.5rem;
            }
        }

        &__links {
        }

        &__repos {
            width: 100%;
            flex: 1;

            &--empty {
                font-size: 2.4rem;
                text-align: center;
                font-weight: 600;
                padding: 3.2rem;
            }

            &--result {
                padding-bottom: 1.5rem;
                padding-top: 1.5rem;
                border-top: 0.1rem solid var(--color-border-default);

                p {
                    padding-right: 1rem;
                    flex: 1;
                }

                span {
                    font-weight: 600;
                }

                button {
                    max-width: max-content;
                    width: 100%;
                    flex: 1;

                    span {
                        margin-right: 0.4rem;
                    }

                    &:hover {
                        color: var(--color-accent-fg);
                    }
                }
            }
        }
    }
`;
