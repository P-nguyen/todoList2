import React from 'react';
import listData from '../data/list';

export default props => {

    const listElements = listData.map((item,index)=>{
        return <li className="list-group-item" key={item.id}>{item.title}</li>
    });

    return (
        <ul className="list-group">
            {listElements}
        </ul>
    )
}