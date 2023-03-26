import styled from "styled-components";

const Login = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 90%;
    min-width: 200px;
    max-width: 350px;
    
    h1 {
        font-size: var(--font-size-0);
        color: var(--color-primary);
        
        font-weight: 700;
        margin-bottom: 1.25rem;
    }
    
    form {
        background-color: var(--gray-scale-3);
        box-shadow: 0 3.21px 32.09px -8.02px rgba(0, 0, 0, 0.25);
        color: var(--gray-scale-0);
        
        border-radius: 4px;
        padding: 2rem 1rem;
        width: 100%;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        h3 {
            font-size: var(--font-size-2);
            font-weight: 700;
            margin-bottom: 1.25rem;
        }

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

                input {
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

            padding: 0.5rem 0;
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

        p {
            font-size: var(--font-size-3);
            font-weight: 600;
            color: var(--gray-scale-1);
            padding: 1.5rem 0 1rem;
        }

        a {
            background-color: var(--gray-scale-1);
            color: var(--gray-scale-0);

            font-size: var(--font-size-2);
            font-weight: 500;
            line-height: 26px;
            text-align: center;

            width: 100%;
            padding: 0.5rem 0;

            border-radius: 4px;
            border: 1px solid var(--gray-scale-1);
            
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
    }
`

export default Login