import React, {Component} from 'react';


export default (props) => {
  
        const listElements = props.data.map((item,index)=>{
            return (
            <li className="input-group input-group-sm mb-2" key={index}>
                <div className="form-control">{item.title} - <small className="text-right">{item.details}</small></div>
                
                <div className="input-group-append">
                    <button type="button" className="btn btn-danger btn-sm" onClick={()=>{props.delete(index)}}>Delete</button>
                </div>
            </li>
            )
        });
    
    
        return (
            <ul className="pl-0 mt-3">
                {listElements}
            </ul>
        )
    
}