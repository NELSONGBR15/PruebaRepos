import React from 'react';
import '../src/App.css';

/*
function Helloworld(props){
  console.log(props);
  return(
    <div id='hello'>
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
}*/

class Helloworld extends React.Component{

  state = {
    show: true
  }

toggleShow = () =>{
  this.setState({show: !this.state.show})
}

render(){
  if(this.state.show){
    return(
      <div id='hello'>
      <h3>{this.props.subtitle}</h3>
      {this.props.mytext}     
      <button onClick={this.toggleShow} >Cambiar estado</button>
    </div>
      )    
    }else{
      return <h1>
        No hay elementos
        <button onClick={this.toggleShow}>
          toggleShow
          </button>
        </h1> 
    }
  }
}

//Llamar componentes
function App() {
  return (
  <div>
    Estos son mis componentes: 
    <Helloworld mytext="Hello Fazt" subtitle = "lorem ispum"/>  
    <Helloworld mytext="Hola mundo" subtitle="Component 2"/> 
    <Helloworld mytext="Hola nelson" subtitle = "componente 3"/>  
    </div>
  );
}

export default App;
