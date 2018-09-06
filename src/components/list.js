import React from 'react';


export default props => {

    const listElements = props.data.map((item,index)=>{
        return <li className="list-group-item" key={index}>{item.title}</li>
    });

    return (
        <ul className="list-group mt-3">
            {listElements}
        </ul>
    )
}