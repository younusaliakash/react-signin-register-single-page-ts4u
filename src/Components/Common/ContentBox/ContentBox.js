import React from 'react';

const ContentBox = ({children}) => {
    return (
        <div className="content_box">
            {children}
        </div>
    );
};

export default ContentBox;