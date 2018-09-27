import 'bootstrap/dist/css/bootstrap.min.css'; // with out ./ it automatically looks at node_module
import React, {Component} from 'react';
import List from './list';
import AddItem from './add_item';
// import listData from '../data/list';
import axios from 'axios';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            list:[]
        };

        this.base_url = 'http://api.reactprototypes.com';
        this.api_key = '?key=c418demopeter';
    }

    componentDidMount(){
        this.getListData();
    }

    async addItem(item){

        try{
            //we do not need resp since we do not use it later.
            const resp = await axios.post(`${this.base_url}/todos${this.api_key}`, item);
 
            //call the server again to get updated list. Never tell the server it got add, grab it again from the server to see if it updated correctly.
            this.getListData();

        }catch(err){
            console.log("error adding item:", err.response.data.error);
        }

    }

    async deleteItem(id){

        try{
            const resp = await axios.delete(`${this.base_url}/todos/${id}${this.api_key}`);

            this.getListData();
            
        }catch(err){
            console.log('error deleteing item:', err.message)
        }
        // console.log('delete resp:', resp);
    }

    async getListData(){

        // standard way of writing an axios call
        // axios.get(`${this.base_url}/todos${this.api_key}`).then( resp => {
        //     console.log('Get Todos Response: ', resp);
        //     this.setState({
        //         list: resp.data.todos
        //     });
        // }).catch( err => {
        //     console.log('Get Todos Error:', err.message);
        // });


        //new way to write axios with async. not useable in most browsers. babel reformates it to above.
        
        try{
            const resp = await axios.get(`${this.base_url}/todos${this.api_key}`);

            this.setState({
                list: resp.data.todos
            });

        } catch(err){
            console.log('Get Data Error: ', err.message);
        }

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
