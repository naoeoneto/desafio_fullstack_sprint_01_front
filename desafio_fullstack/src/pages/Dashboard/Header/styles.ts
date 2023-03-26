import styled from "styled-components";

const Header = styled.header`
    display: flex,
    justify-content: space-between,
    align-item: center
    width: 100%,
    min-width: 150px,
    max-width: 350px,
    padding: 1rem 0,
    border-bottom: 1px solid var(--gray-scale-3),

    h1{
        font-size: var(--font-size-0),
        color: var(--color-primary),
        font-weight: 700,
    }

    a {
        background-color: var(--gray-scale-3),
        color: var(--gray-scale-0),
        width: 78px,
        padding: 0.5rem 0,
        border-radius: 4px,
        border: 1px solid var(--gray-scale-3),
        font-size: var(--font-size-4),
        font-weight: 600,
        line-height: 26px,
        text-align: center,
        text-decoration: none,

        &:hover {
            transition: 0.75s
            background-color: var(--gray-scale-2),
            border: 1px solid var(--gray-scale-2)
        }
    }

    @media(min-width: 426px){
        max-width: 700px
    }
`;

export default Header;
