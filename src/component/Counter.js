import { Component } from "react";
import CounterButtonMin from "./CounterButtonMin";
import CounterButtonPlus from "./CounterButtonPlus";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            number: this.props.default,
            product:[],
            count: 0
        }
        console.log('Construtor Dipanggil'); //dipanggil dua kali karena strictmode
        //strict mode antisipasi error
        //karena bukan arrow function 1 file
        this.increment = this.increment.bind(this)
    }

    componentWillMount(){
        console.log("componentWillMount dipanggil");
    }

    componentDidUpdate(){
        console.log('componentDidUpdate dipanggil');
    }

    componentDidMount(){
        this.setState({
            product : ['nasi goreng', 'teh manis']
        })
        console.log("component DidMount dipanggil");
    }

   
    // increment = (val) => {
    //     this.setState({
    //         number  : val
    //     })
    // }
    // decrement = (val) => {
    //     this.setState({
    //         number: val
    //     })
    // }

    componentWillUnmount(){
        console.log('componentWillUnmount dipanggil');
    }

    // 1 file
    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    //this udah merujuk ke count jadi tidak perlu bind
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    componentWillUnmount(){
        console.log('componentWillUnmount dipanggil');
    }

    render() {
        console.log('dari render', this.state.product);
        console.log('Render dipanggil');
        return(
            <div>
                {/* <h1 className="text-dark mx-2">{this.state.number}</h1>
                <CounterButtonPlus callback={this.increment} number={this.state.number}/>
                <CounterButtonMin callback={this.decrement} number={this.state.number}/> */}
                {/* 1 file */}
                <h1 className="text-dark mx-2">{this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.props.onNavigate}>Pindah</button>
            </div>
        )
    }
}

export default Counter