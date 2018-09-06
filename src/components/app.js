import 'bootstrap/dist/css/bootstrap.min.css'; // with out ./ it automatically looks at node_module
import React, {Component} from 'react';
import List from './list';
import AddItem from './add_item';
import listData from '../data/list';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            list:[]
        };
    }

    componentDidMount(){
        this.getListData();
    }

    addItem(item){
        this.setState({
            list: [item,...this.state.list]
        });
    }

    deleteItem(index){
        const {list} = this.state;
        list.splice(index,1);

        this.setState({
            list:[...list]
        });

    }

    getListData(){
        //make axios call to server to get data.

        this.setState({
            list: listData
        });
    
    }

    render(){

        return(
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="col text-center">ToDoList</h1>
                </div>
                <AddItem add={this.addItem.bind(this)}/>
                <List data={this.state.list} delete={this.deleteItem.bind(this)}/>
            </div>
        </div>
        )
    }

}


export default App;
