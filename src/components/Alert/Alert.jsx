import './alert.sass'
import React, { useState } from 'react';

const Alert = (props) => {
    const [width, setWidth] = useState(100);
    
    const handleWidth = () => {
        if(width > 0) {
            setWidth(prevWidth => prevWidth - 1);
        }
    }


    return(
        <div className="alert">
            <div className="alert__title">Invalid input</div>
            <div className="alert__msg">{props.msg}</div>
            <progress className="alert__timer" value={width} max="100"></progress>
        </div>
    );
}

export default Alert;