import { Component } from "react";

class Clock extends Component{
    constructor(props){
        super(props)
        this.state={
            date : new Date
        }
    }

    componentDidMount(){
        console.log('componentDidMount dipanggil');
        this.timeID = setInterval(
            () => this.tick(), 2000
        )
    }

    ticks(){
        this.setState({
            date: new Date
        })
    }
}

export default Clocks;