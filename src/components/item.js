import React from 'react';

export default (props) => {
    return (
        <li className="input-group input-group-sm mb-2">
        <div className="form-control">{props.title}</div>
        
        <div className="input-group-append">
            <button type="button" className="btn btn-danger btn-sm" onClick={()=>{}}>Delete</button>
        </div>
    </li>
    )
}

