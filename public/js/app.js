
class ProductList extends React.Component{
    // initialize the state with empty array of products
    state = {
      products: [],
    };

  // lifecycle method
  componentDidMount(){
    this.setState({products: Seed.products});
  }

  handleProductUpVote = (productId) => {
      // change the state without mutating
      const nextProducts = this.state.products.map((product) => {
        if(product.id === productId){
          const nextProduct = Object.assign({}, product, {
            votes:product.votes + 1,
          });
          return nextProduct;
        }
        return product;
      });

      // update the state
      this.setState({products: nextProducts});
  }

  render(){
    // sort the data according to the number of votes
    const products = this.state.products.sort((a,b) => (
      b.votes - a.votes
    ));

    // create an array of Product component
    const productComponents = products.map((product) => (
      <Product
        key={'product-'+product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl= {product.productImageUrl}
        onVote={this.handleProductUpVote}
        />
    ));
    return(
      <div className= 'ui unstackable items'>
        {productComponents}
      </div>
    )
  }
}

// Product component -> A child component for the ProductList Component
class Product extends React.Component{

  // using arrow function auto-binds to Product component in is case
  handleUpVote = () => {
    this.props.onVote(this.props.id);
  }

  render(){
    return(
      <div className='item'>
        <div className='image'>
          <img src={this.props.productImageUrl}/>
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
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
