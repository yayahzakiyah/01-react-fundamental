// import { UserDetail } from "./component/card-photo/UserDetail"
import { ReactDOM } from "react";
import React from "react";
import Geo from "./component/geolocation-state/GeoState";
import GeoLifecycle from "./component/geolocation-state/GeoLifecycle";
import FormValid from "./component/form-validation/form-valid";
import UseFormik from "./component/form-validation/use-formik";
// import { UserCard } from "./component/card-photo/UserCard";
// import faker from "faker"

const App = () => {
    // return(
    //   <div className="container">
    //     <UserCard>
    //       <UserDetail nama='Roy'
    //       tanggalGabung = "7 Apr 2010"
    //       alamat="Jl. Abc"
    //       avatar={faker.image.avatar()}/>
    //     </UserCard>
    //     <UserCard>
    //       <UserDetail nama='Aron'
    //       tanggalGabung = "7 Jan 2010"
    //       alamat="Jl. Def"
    //       avatar={faker.image.avatar()}/>
    //     </UserCard>
    //   </div>
    // )
    
    return(
      // <Geo/>
      // <GeoLifecycle/>
      // <FormValid/>
      <UseFormik/>
    )
}

export default App;

// const enigma = 'Enigma Camp'
//   const name = <h1>Hello {enigma}</h1>
//   function sayHello(name) {
//     return `hello ${name}`
//   }

  // const buttontext = {
  //   text: 'Send'
  // }

  // const mysStyle = {
  //   color: 'red',
  //   fontSize: '100px'
  // }
  // return (
  //   <> 
  //     <BodyComponent/>
  //     {name}
  //     <h1 style={{color: 'blueviolet', fontSize: '100px'}}>{sayHello(enigma)}</h1>
  //     <h1 style={mysStyle}>{sayHello(enigma)}</h1>
  //     <button className="my-button">{buttontext.text}</button>
  //     <label htmlFor='name'>Enter Name</label>
  //   </>

  
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );