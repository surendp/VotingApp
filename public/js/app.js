
//import createReactClass from 'create-react-class';

// ProductList component using ES6 syntax
class ProductList extends React.Component{
  render(){
    return(
      <div className= 'ui unstackable items'>
        Hello, friend! I am a basic React component.
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
