import React from 'react';

const SubmitButton = ({buttonType,buttonTitle}) => {
    return (
        <>
          <button type={buttonType}>{buttonTitle}</button>  
        </>
    );
};

export default SubmitButton;