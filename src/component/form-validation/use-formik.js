import * as yup from "yup";
import { Component } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

class UseFormik extends Component{
    state= {
        fields:{
            title:"",
            name: "",
            email:"",
            gender:"M"
        },
    }

    signUpSchemaValidation = yup.object().shape(
        {
            title: yup.string().required('Title is required'),
            name: yup.string().min(3, 'to min').max(30, 'max 30').required('Required'),
            email: yup.string().min(5, 'to min').max(30, 'max 30').email('Invalid').required('Required')
        }
    )

    onSubmit = (fields, {setSubmitting}) => {
        setTimeout(() => {
            console.log(JSON.stringify(fields, null, 4));
            setSubmitting(false)
        }, 2000)
    }

    render(){
        let {fields: {title, name, email, gender}} = this.state;
        return (
            <Formik initialValues={{
                title:title,
                name: name,
                email: email,
                gender: gender
            }}
            validationSchema= {this.signUpSchemaValidation}
            onSubmit={this.onSubmit}>
                {(formik)=>(
                    <Form>
                        <div>
                            <fieldset>
                                <label>Title</label>
                                <Field name='title' as select style={{marginRight:10}}>
                                    <option value=""></option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Ms">Ms</option>
                                </Field>
                                <ErrorMessage name="title" component="div" className="invalid-feedback"/>
                                <Field name='name' type='text' placeholder='your full name'/>
                                <ErrorMessage name='name' component='div'/>
                                <br/>
                                <Field name='email' type='text' placeholder='you@example.com'/>
                                <br/>
                                <label>
                                    <Field type='radio' name='gender' value='M' checked={formik.values.gender === 'M'}/>
                                    Male
                                </label>
                                <label>
                                    <Field type='radio' name='gender' value='F' checked={formik.values.gender === 'F'}/>
                                    Female
                                </label>
                                <br/>
                                <input type='submit' disabled={formik.isSubmitting || !formik.isValid}/>
                            </fieldset>
                        </div>
                    </Form>
                )}
            </Formik>
        )
    }
}

export default UseFormik