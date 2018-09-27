import React from 'react';

export default (props) => {

    console.log('props', props);

    return (
        <li className="input-group input-group-sm mb-2 to-do-item">
        <div className={`form-control ${props.complete ? 'complete' : ''}`}>{props.title}</div>
        
        <div className="input-group-append">
            <button type="button" className="btn btn-danger btn-sm" onClick={props.delete}>Delete</button>
        </div>
    </li>
    )
}

