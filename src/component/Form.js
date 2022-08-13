import { Component } from "react";

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            brand: '',
            tahun: 0 //kalau mau nilai awal bisa
        }
    }

    handleChange = (event) => {
        this.setState({
            brand : event.target.value
        })
        // console.log(event.targe.value);
    }

    handleChangeTahun = (event) => {
        this.setState({
            tahun : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.brand, this.state.tahun);
        const hasil = this.state.brand;
        if (hasil==='') {
            alert(`silahkan pilih dulu`)
        } else {
            alert(`name: ${this.state.brand} ${this.state.tahun}`)
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        
                        {/* <input type='text' placeholder='username' onChange={this.handleChange} value={this.state.value}/> */}
                        {/* <textarea value={this.state.value} onChange={this.handleChange}/> */}
                        Brand :    
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option disabled placeholder=""></option>
                            <option>BMW</option>
                            <option>Ferari</option>
                            <option>Honda</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Tahun:
                        <input onChange={this.handleChangeTahun} value={this.state.tahun}/>
                    </label>
                    <button type="submit" value='submit'>Add</button>
                </form>
            </div>
        )
    }
}

export default Form