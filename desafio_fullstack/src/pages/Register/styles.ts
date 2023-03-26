import styled from "styled-components";

const Register = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    height: 100%;
    width: 90%;
    min-width: 200px;
    max-width: 350px;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    
        border-radius: 4px;
        padding: 2rem 1rem 1.25rem;
        width: 100%;
    
        background-color: var(--gray-scale-3);
        box-shadow: 0 3.21px 32.09px -8.02px rgba(0, 0, 0, 0.25);
        color: var(--gray-scale-0);

        div {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 0.5rem;

            label {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                font-size: var(--font-size-3);

                input, select {
                    padding: 0.5rem 0.75rem;
                    line-height: 26px;

                    border: 1px solid var(--gray-scale-2);
                    border-radius: 4px;

                    background-color: var(--gray-scale-2);

                    &::placeholder {
                        color: var(--gray-scale-1);
                        font-size: var(--font-size-1);
                        font-weight: 400;
                    }
                    
                    &:focus {
                        color: var(--gray-scale-0);
                        background-color: var(--gray-scale-2);
                        border: 1px solid var(--gray-scale-0);
                    }

                    option {
                        color: var(--gray-scale-0);
                        font-size: var(--font-size-2);
                        font-weight: 400; 

                        &:focus {
                            color: var(--gray-scale-0);
                            background-color: var(--gray-scale-2);
                            border: 1px solid var(--gray-scale-0);
                        }
                    }
                }

                span {
                    font-size: var(--font-size-4);
                    line-height: 10px;

                    color: var(--negative);
                }

            }
        }

        button {
            background-color: var(--color-primary);
            color: var(--gray-scale-0);

            font-size: var(--font-size-2);
            font-weight: 500;
            line-height: 26px;

            margin-top: 1rem;
            width: 100%;

            border-radius: 4px;
            border: var(--color-primary);
            
            &:hover {
                border: var(--color-primary-focus);
                background-color: var(--color-primary-focus);
                transition: 0.5s;
            }
        }
    }
    
    @media (min-width: 426px) {
            width: 450px;
            max-width: 500px;
        }
`

export default Register