import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const LoadingOne = keyframes`
0% {
      color: #ff6868;
      -webkit-transform: scale(0.0, 0.0);
      opacity: 0.0;
    }
    50% {
      color: #d36868;
      -webkit-transform: scale(1, 1);
      opacity: 1.0;
    }
    100% {
      color: #ff6868;
      -webkit-transform: scale(0.0, 0.0);
      opacity: 0.0;
    }
`;

const LoadingTwo = keyframes`
    0% {
      color: #800000;
      -webkit-transform: scale(1, 1);       
      opacity: 1.0;
    }
    50% {
      color: #711f1f;
      -webkit-transform: scale(0.0, 0.0);
      opacity: 0;
    }
    100% {
      color: #800000;
      -webkit-transform: scale(1, 1);       
      opacity: 1.0;
    }
`;

const SpinnerLoader = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  margin-top: -50px;
`;

const Loader = styled.span`
  position: relative;
  svg {
    position: absolute;
    font-size: 100px;
    &:first-of-type {
      color: #ff6868;
      transform: scale(0, 0);
      opacity: 0;
      animation: ${LoadingOne} 2s ease-in-out;
      animation-iteration-count: infinite;
    }
    &:last-of-type {
      color: #800000;
      transform: scale(1, 1);
      opacity: 1;
      animation: ${LoadingTwo} 2s ease-out;
      animation-iteration-count: infinite;
    }
  }
`;

const Spinner = () => {
  return (
    <SpinnerLoader>
      <Loader>
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faHeart} />
      </Loader>
    </SpinnerLoader>
  );
};

export default Spinner;
