import React from 'react';
import { AxiosError } from 'axios';
import styled from 'styled-components';
import AngryYoda from '../assets/yoda-404.jpeg';

interface ErrorProps {
    error: AxiosError;
}


const ErrorMessage: React.FunctionComponent<ErrorProps> = ({ error }: ErrorProps) => {
    return (
      <MessageContainer>
        <Yoda src={AngryYoda} alt='Angry Baby Yoda'/>
        <h1>{error.response!.status}</h1>
        <h2>{error.message}</h2>
      </MessageContainer>
    )
};

const Yoda = styled.img`
  width: 30rem;
  height: auto;
`;

const MessageContainer = styled.div`
  text-align: center;
  margin: 5rem auto;
`;

export default ErrorMessage;