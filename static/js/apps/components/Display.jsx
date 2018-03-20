import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Products'
import data from '../../../../data/mock.json'

class Display extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageURL:'',
      name:'',
      currency:'',
      price:'',
      button:''
    }
  }

  // productClick = () => {
  //   this.setState({
  //     imageURL:'',
  //     name:'hola',
  //     currency:'',
  //     price:'',
  //     button:''
  //   })
  // }
  render(){
    return (
      <div>
        <button className="botonTotal">TOTAL: 567</button>
        <div className="product">
          <img className="imagen" src={this.state.imageURL} />
          <h2 className="name">{this.state.name}</h2>
          <p className="unit">{this.state.currency}</p>
          <p className="price">{this.state.price}</p>
          <button className="boton">remove from cart</button>
        </div>
      </div>
    )
  }
};

export default Display;
