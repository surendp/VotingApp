
//import createReactClass from 'create-react-class';

// ProductList component using ES6 syntax
class ProductList extends React.Component{
  render(){
    return(
      <div className= 'ui unstackable items'>
        <Product/>
      </div>
    )
  }
}

// Product component -> A child component for the ProductList Component
class Product extends React.Component{
  render(){
    return(
      <div className='item'>
        <div className='image'>
          <img src='images/products/image-aqua.png'/>
        </div>
        <div className='middle aligned content'>
          <div className='description'>
            <a>Fort Knight</a>
            <p>Authentic renaissance actors, delivered in just two weeks.</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className = 'ui avatar image'
              src='images/avatars/daniel.jpg'
            />
          </div>
        </div>
      </div>
    )
  }
}

// render the product list component in the dom tree
ReactDOM.render(
  <ProductList/>,
  document.getElementById('content')
);

/*
// ProductList component using JavaScript
const ProductList1 = createReactClass({
  render(){
    return(
      <div className= 'ui unstackable items'>
        Hello, friend! I am a basic React component.
      </div>
    )
  }
})
*/
