import React from 'react';
import { LoaderContainer, LoaderImage} from './styles';
import loading from '../../../assets/loanding.jpg';

function Loading() {
    return (
      <LoaderContainer>
        <LoaderImage src={loading} alt="Loading..." />
      </LoaderContainer>
    );
  }
  
  export default Loading;