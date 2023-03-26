import styled from "styled-components";

const InfoStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

    h3 {
        font-size: var(--font-size-2);
        font-weight: 700;
        line-height: 22px;
        color: var(--gray-scale-0);
    }
    
    span {
        font-size: var(--font-size-4);
        font-weight: 400;
        line-height: 17.5px;
        color: var(--gray-scale-1);
    }
`

export default InfoStyle