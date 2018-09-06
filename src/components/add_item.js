import React, {Component} from 'react';

class AddItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            details:''
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e){
        const {name,value} = e.target

        this.setState({[name]:value});

    }

    handleSubmit(e){
        e.preventDefault();
        console.log("new items!", this.state);
        this.props.add(this.state);
    }

    render(){
        const {title, details} = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                        <label className="col-6">Title</label>
                        <label className="col-6">Details</label>
                    <div className="input-group input-group-sm col-6">
                        <input className="form-control border-bottom" type="text" name="title" value={title} onChange={this.handleInputChange} />
                    </div>
                    <div className="input-group input-group-sm col-6">
                        <input className="form-control" type="text" name="details" value={details} onChange={this.handleInputChange} />
                    </div>
                    <div className="col-2 offset-10 text-right mt-1">
                        <button type="submit" className="btn btn-primary btn-sm" >Submit</button>
                    </div>
                </div>
            </form>

        )
    }
}

export default AddItem;