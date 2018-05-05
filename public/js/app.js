
//import createReactClass from 'create-react-class';

// ProductList component using ES6 syntax
class ProductList extends React.Component{
  render(){
    const product = Seed.products[0];
    return(
      <div className= 'ui unstackable items'>
        <Product
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl= {product.productImageUrl}
          />
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
          <img src={this.props.productImageUrl}/>
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className = 'ui avatar image'
              src={this.props.submitterAvatarUrl}
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
