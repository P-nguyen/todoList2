import React, {Component} from 'react';
import Item from './item';


export default (props) => {

        const listElements = props.data.map((item,index)=>{
            //you can pass in param into function so when it is called, you already have it preset.
            return <Item key={item._id} title={item.title} delete={props.delete.bind(this, item._id)} />

        });
    
        //babel can unwrape array's.
        return (
            <ul className="pl-0 mt-3">
                {listElements}
            </ul>
        )
    
}