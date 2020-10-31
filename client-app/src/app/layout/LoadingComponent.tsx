import React from 'react';

const LoadingComponent: React.FC<{ content?: string }> = ({ content }) => {
  return (
    <div className='ui active dimmer inverted'>
      <div className='ui loader'>{content}</div>
    </div>
  );
};

export default LoadingComponent;
