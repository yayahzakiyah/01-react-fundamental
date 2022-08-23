import { Component } from "react";

class Geo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lt: null,
            lg: null,
            errorMessage: ""
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lt: position.coords.latitude,
                    lg: position.coords.longitude
                },
                (err) => {
                    this.setState({errorMessage: err})
                })
            }
        )
    }

    render(){
        if(this.state.errorMessage){
            return(
                <div>
                    <div>Error: {this.state.errorMessage}</div> 
                </div>
            )
        }
        if(!this.state.errorMessage&& this.state.lt) {
            return (
                <div>
                    Posisi Anda:
                    <div>latitude: {this.state.lt}</div>
                    <div>longitude: {this.state.lg}</div>
                </div>
            )
        }
    }
}

export default Geo