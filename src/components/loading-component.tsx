import React from 'react';
import styled from 'styled-components';
import LoadingYoda from '../assets/yoda-loading.gif';

const LoadingMessage: React.FunctionComponent = () => {
    return (
      <MessageContainer>
        <Message>Retrieving Planetary Data</Message>  
        <Yoda src={LoadingYoda} alt='Yoda Retrieving Data'/>
      </MessageContainer>
    )
};

const Message = styled.h1`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: ".";
    width: 1em;
    text-align: left;
  }

  @keyframes ellipsis {
    0% {
      content: '.';
    }

    33% {
      content: '..';
    }

    66% {
      content: '...';
    }
  }
`;

const Yoda = styled.img`
  width: 30rem;
  height: auto;
`;

const MessageContainer = styled.div`
  text-align: center;
  margin: 5rem auto;
`;

export default LoadingMessage;