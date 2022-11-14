import { useState } from 'react';
import styled from 'styled-components';

const Styled = () => {

    const [valid, setValid] = useState(false);

    const onChangeFunc = (e) => {
        e.preventDefault();

        const email = e.target.value;
        if(email.length>5) {
            setValid(true);
        } else {
            setValid(false);
        }
    }

    return (
        <div>
            styled
            <Title fontColor="yellow">
                component
                <div className='subtitle'>subtitle</div>
            </Title>
            <input onChange={onChangeFunc}></input>
            <LoginButton valid={valid}>Login</LoginButton>
        </div>

    )
}


const Title = styled.div`
    color: ${props => props.fontColor};
    font-weight: bold;
    font-size: 20px;
    text-decoration: underline;

    .subtitle {
        color: blue;
        font-size: 32px;
    }
`;

const LoginButton = styled.div`
    color: black;
    font-size: 20px;
    width: 100px;
    background-color: ${props => props.valid? "blue": "red"}
`;




export default Styled;