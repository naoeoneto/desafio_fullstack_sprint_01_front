import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 1rem;
    padding-bottom: 2rem;
    width: 100%;
    min-width: 250px;
    max-width: 350px;

    h1 {
        font-size: var(--font-size-0);
        color: var(--color-primary);
        font-weight: 700;
    }

    a {
        background-color: var(--gray-scale-3);
        color: var(--gray-scale-0);

        font-size: var(--font-size-4);
        font-weight: 600;
        line-height: 26px;
        text-align: center;

        width: 78px;
        padding: 0.5rem 0;

        border-radius: 4px;
        border: 1px solid var(--gray-scale-3);
        
        &:hover {
            background-color: var(--gray-scale-2);
            border: 1px solid var(--gray-scale-2);
            transition: 0.5s;
        }

    }
    
    @media (min-width: 426px) {
            width: 450px;
            max-width: 500px;
        }

`

export default Header