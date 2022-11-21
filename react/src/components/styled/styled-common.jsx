import styled from 'styled-components';

export const ButtonPrimary = styled.button`
    width: ${props => props.width? props.width: null};
    border: none;
    border-radius: 30px;

    color: white;
    font-size: 1.125rem;
    font-weight: bold;

    background-color: #36f;

    margin-top: 15px;
    padding: 15px;
`;