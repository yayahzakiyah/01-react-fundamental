import logo from './logo.svg';
import './App.css';
import BodyComponent from './component/BodyComponent';
import Navbar from './component/Navbar';
import Content from './component/Content';
import Footer from './component/Footer';
import Parent from './component/Parent';
import Greet from './component/Greet';
import 'bootstrap/dist/css/bootstrap.min.css'
import BodyComponentFunc from './component/BodyComponentFunction';
import Counter from './component/Counter';
import Form from './component/Form';
import { Component } from 'react';
import { render } from '@testing-library/react';
import List from './component/List';
import FormList from './component/FormList';
import FLGab from './component/From List/FLGab';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      page: ' '
    }
  }

  navigation = () => {
    this.setState({
      page : "1"
    })
  }

  render() {
    return (
      <>
      {/* <Navbar/>
      <div style={{minHeight:'100vh'}}>
        <Content/>
      </div>
      <Footer/> */}
      {/* <BodyComponent lastName = 'Zakiyah'></BodyComponent>
      <BodyComponentFunc firstName="Yayah"></BodyComponentFunc>
       */}
      {/* <Parent name='Yayah' age={2}/> */}
      {/* <Greet/> */}
      {/* <Counter default={2}/> */}
      {/* {this.state.page === '' ? <Counter onNavigate = {this.navigation} default={2}/>
      : <h1>Pindah</h1>} */}
      {/* <Form/> */}
      {/* <List/> */}
      {/* <FormList/> */}
      <FLGab/>
      </>
    );
  }  
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