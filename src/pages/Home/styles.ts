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
            flex: 1 1 35rem;

            & > * {
                margin-bottom: 0.8rem;
            }

            &--header {
                justify-content: flex-start;
            }
        }

        &__img {
            max-width: 15rem;
            max-height: 15rem;
            border-radius: 50%;
            margin-right: 1.5rem;

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

    @media screen and (min-width: 691px) {
        .profile {
            &__info {
                max-width: max-content;

                &--header {
                    display: block;
                }
            }

            &__img {
                max-width: 29rem;
                max-height: 29rem;
            }
        }
    }
`;
