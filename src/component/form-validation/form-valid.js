import { Component } from "react";

class FormValid extends Component{
    state={
        fields:{
            name: "",
            email: "",
            gender: "M"
        },
        errors:{}
    };

    handleValidationn = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (typeof fields['name'] !== "undefined"){
            if (!fields["name"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors['name'] = "Only letters";
            }
        }

        if (typeof fields['email'] !== "undefined"){
            let lastAtPos = fields['email'].lastIndexOf('@');
            let lastDotPos = fields['email'].lastIndexOf('.');
            if (!(lastAtPos<lastDotPos && lastAtPos > 0 && fields['email'].indexOf('@@') === -1 && lastDotPos>2 && (fields['email'].length-lastDotPos)>2)){
                formIsValid=false;
                errors['email'] = 'Email is not valid'
            }
        }
        this.setState({errors:errors});
        return formIsValid
    }

    handleChange = (ev, field) => {
        let {fields} = this.state;
        fields[field] = ev.target.value;
        console.log(fields);
        this.setState({fields});
    };

    contctSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.state);
        if (this.handleValidationn()){
            alert('Form submitted')
        } else {
            alert('Form has error')
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.contctSubmit}>
                <div className="col-md-6">
                    <fieldset>
                        <input type="text" size="30" placeholder="Name"
                            onChange={(ev) => {
                                this.handleChange(ev, 'name')
                            }} value={this.state.fields['name']}/>
                        <div style={{color:'red'}}>{this.state.errors['name']}</div>
                        <br/>
                        <input type="text" size="30" placeholder="Email"
                            onChange={(ev) => {
                                this.handleChange(ev, 'email')
                            }} value={this.state.fields['email']}/>
                            <div style={{color:'red'}}>{this.state.errors['email']}</div>
                        <br/>
                        <label>
                        <input type='radio' name='gender' value='M'
                            onChange={(ev) => {
                                this.handleChange(ev, 'gender')
                            }} checked={this.state.fields['gender'] === 'M'}/>
                        Male
                        </label>
                        <label>
                            <input type='radio' name='gender' value='F'
                                onChange={(ev) => {
                                    this.handleChange(ev, 'gender')
                                }} checked={this.state.fields['gender'] === 'F'}/>
                        Female
                        </label>
                        <br/>
                        <input type='submit'/>
                    </fieldset>
                </div>
                </form>
            </div>
        )
    }
}

export default FormValid 