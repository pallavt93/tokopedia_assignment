import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/products/productsActions';
import ProductItem from './ProductItem';
import { Row, Col, Button } from 'react-bootstrap';

class ProductsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productPage: 1
        }
        this.handleLoadMore = this.handleLoadMore.bind(this);
    }
    componentDidMount(){
        if(this.props.products.length === 0 ){
            this.props.fetchProducts(this.state.productPage);
            this.setState((prevState)=>({ productPage: prevState.productPage + 1 }));
        }else{
            this.setState((prevState)=>({ productPage: prevState.productPage + 1 }));
        }
        
    }
    renderProducts(){
        let counter = 0;

        return this.props.products.map( product => {
            return (
                <Col  key={product.id} >
                    <ProductItem 
                        product={product} 
                        history = {this.props.history}
                    />
                </Col>
            );
        });
    }
    handleLoadMore() {
        this.props.fetchProducts(this.state.productPage);
        this.setState((prevState)=>({ productPage: prevState.productPage + 1 }));
    }
    render(){
        return (
            <>
                <Row className="justify-content-md-center" md={{cols:5, noGutters:false}} xs={{cols:1, noGutters:false}}>
                    {this.renderProducts()}
                </Row>
                <Row className="loadContent">
                    <Col  md={{span:6, offset:3}}>
                        <Button variant="dark" onClick = {this.handleLoadMore} size="lg" block>Load More</Button>
                    </Col>
                </Row>
            </>
        );
    }
}

function mapStateToProps(state){
    return { products: state.products }
}

export default connect(mapStateToProps, { fetchProducts })(ProductsList);