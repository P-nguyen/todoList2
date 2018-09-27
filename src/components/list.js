import React, {Component} from 'react';
import Item from './item';


export default (props) => {
        const listElements = props.data.map((item,index)=>{
            console.log('Item:', item);
            return <Item key={item._id} title={item.title} />
        });
    
        //babel can unwrape array's.
        return (
            <ul className="pl-0 mt-3">
                {listElements}
            </ul>
        )
    
}