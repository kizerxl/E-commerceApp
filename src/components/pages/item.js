import React from 'react';
import {Row, Col, Well, Button} from 'react-bootstrap';
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';
import {addToCart} from '../../actions/cartActions';

class Item extends React.Component {
    handleCart() {
        const item = [...this.props.cart, {
            _id: this.props._id,
            title: this.props.title, 
            description: this.props.description, 
            price: this.props.price,
            quantity: 1
        }]

        if(this.props.cart.length > 0) {
            let _id = this.props._id;

            let cartIndex = this.props.cart.findIndex(function(cart) {
                return cart._id === _id;
            })

            if(cartIndex === -1) {
                this.props.addToCart(item);
            } else {
                
            }
        } else {
            this.props.addToCart(item);
        }
    }

    render() {
        return(
            <Well>
                <Row>
                    <Col xs = {12}>
                        <h6>{this.props.title}</h6>
                        <p>{this.props.description}</p>
                        <h6>{this.props.price}</h6>
                        <Button onClick={this.handleCart.bind(this)}  bsStyle = 'primary'>Buy</Button>
                    </Col>
                </Row>
            </Well>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart 
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addToCart: addToCart}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Item); 