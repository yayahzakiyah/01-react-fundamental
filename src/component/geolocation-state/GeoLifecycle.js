import { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import './Geo.css'
import { Spinner } from "react-bootstrap";

class GeoLifecycle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lt: null,
            lg: null,
            errorMessage: ""
        };
    }

    componentDidMount(){
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

    renderContent(){
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
                    <div className="text-title">Posisi Anda:</div>
                    <div>latitude: {this.state.lt}</div>
                    <div className="text-info space-bottom">longitude: {this.state.lg}</div>
                    <SeasonDisplay/>
                </div>
            )
        }

        return (
        <div>
            <Spinner/>
        </div>
        )
    }

    render(){
        return(
            <div className="container">
                {this.renderContent()}
            </div>
        )
    }
}

export default GeoLifecycle