import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
// import '../../../css/main.css';

export default function Products(props) {
  return (
    <div>
      <h1>Product List</h1>
      {
        props.data.map(item =>(
          <div className="product zoom">
            <img className="imagen" src={item.imageURL} />
            <h2 className="name">{item.name}</h2>
            <p className="unit">{item.currency}</p>
            <p className="price">{item.price}</p>
            <button className="boton" type="submit" onClick={() => this.productClick()}>Add to cart</button>
          </div>
        ))
      }
    </div>
  )
};
