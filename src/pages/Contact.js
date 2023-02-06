import styled from "styled-components";

const Contact = () => {
    return <Wrapper>Contact</Wrapper>;
};
const Wrapper = styled.section`
    min-height: calc(100vh - 100px);
    .container {
        margin-top: 6rem;

        .contact-form {
            max-width: 50rem;
            margin: auto;

            .contact-inputs {
                display: flex;
                flex-direction: column;
                gap: 3rem;

                input[type="submit"] {
                    cursor: pointer;
                    transition: all 0.2s;

                    &:hover {
                        background-color: ${({ theme }) => theme.colors.white};
                        border: 1px solid ${({ theme }) => theme.colors.btn};
                        color: ${({ theme }) => theme.colors.btn};
                        transform: scale(0.9);
                    }
                }
            }
        }
    }
`;

export default Contact;
