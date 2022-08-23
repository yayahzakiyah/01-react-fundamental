import { Component } from "react";
import FLInput from "./FLInput";
import FLList from "./FLList";

class FLGab extends Component{
    constructor(props){
        super(props)
        this.state = {
            newItem:'',
            list:[]
        }
    }
    handleChange = (key,value) => {
        this.setState({
            [key]: value
        })
    }
    handleSubmit = () => {
        const newItems = {
            id: 1 + Math.random(),
            value : this.state.newItem.slice()
        }
        this.setState({
            list: [...this.state.list,newItems],
            newItem: ''
        })
    }
    render(){
        return(
            <div>
                <FLInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} newItem={this.state.newItem}/>
                <FLList list={this.state.list}/>
            </div>
        )
    }
}

export default FLGab;