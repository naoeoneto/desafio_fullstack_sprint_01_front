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
  padding: 2rem 0;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 1rem 1.25rem;
    width: 100%;
    background-color: var(--color-secondary);
    border: 4px solid var(--color-primary);
    box-shadow: 0 3.21px 32.09px -8.02px rgba(0, 0, 0, 0.25);
    color: var(--gray-scale-0);

    h3 {
      font-size: var(--font-size-1);
      font-weight: 700;
      margin-bottom: 1rem;
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
          padding: 0.25rem 0.75rem;
          line-height: 26px;
          border: 1px solid var(--gray-scale-0);
          border-radius: 4px;
          background-color: var(--gray-scale-0);

          &::placeholder {
            color: var(--color-secondary);
            font-size: var(--font-size-2);
            font-weight: 400;
          }

          &:focus {
            color: var(--gray-scale-0);
            background-color: var(--gray-scale-1);
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

    button,
    a {
      background-color: var(--color-primary);
      color: var(--gray-scale-0);
      font-size: var(--font-size-2);
      text-align: center;
      font-weight: 500;
      line-height: 26px;
      margin-top: 1rem;
      width: 100%;
      border-radius: 4px;
      border: var(--color-primary);

      &:hover {
        border: var(--color-primary-focus);
        background-color: var(--color-primary-focus);
        color: var(--color-primary);
        transition: 0.25s;
      }
    }
  }

  @media (min-width: 426px) {
    width: 300px;
    max-width: 350px;
  }
`;

export default Register;
