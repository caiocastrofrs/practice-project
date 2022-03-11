import './alert.sass'
import React from 'react';

const Alert = (props) => {

    return(
        <div className={`alert ${props.animation}`}>
            <div className="alert__title">Invalid input</div>
            <div className="alert__msg">{props.msg}</div>
        </div>
    );
}

export default Alert;