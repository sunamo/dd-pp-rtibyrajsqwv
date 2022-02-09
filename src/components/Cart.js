import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Cart extends Component {
    render() {
        const styleButtonBack = { fontSize: "30px", margin: "40px" };
        const styleTHead = { fontSize: "30px", fontWeight: "400" };
        const styleTBody = { fontSize: "25px" };
        const styleMessageEmptyCart = { fontSize: "25px" };
        const styleTd = { width: "33%", textAlign: "center" };
        const cartStyle = { backgroundColor: "white", borderRadius: "5px", paddingBottom: "35px" };
        const cartHeaderStyle = { fontSize: "35px", paddingTop: "35px", fontWeight: "500" };

        const foundedItems = this.props.items.filter(s => s.quantity > 0);

        let addedItems = foundedItems.length ?
            (
                foundedItems.map(item => {
                    return (
                        <tr>
                            <td style={styleTd}>{item.title}</td>
                            <td style={styleTd}>{item.quantity}</td>
                            <td style={styleTd}>{item.price * item.quantity} Czk</td>
                        </tr>
                    )
                })
            ) :
            (
                <p className='center' style={styleMessageEmptyCart}>Shopping cart is empty.</p>
            );

        if (foundedItems.length) {
            return (
                <div className="container">
                    <div className="cart" style={cartStyle}>
                        <h1 className="center-align" style={cartHeaderStyle}>CART</h1>
                        <hr />
                        <table className='striped'>
                            <thead style={styleTHead}>
                                <td style={styleTd}>Name</td>
                                <td style={styleTd}>Amount</td>
                                <td style={styleTd}>Price</td>
                            </thead>
                            <tbody style={styleTBody}>
                                {addedItems}
                            </tbody>
                        </table>
                        <hr />
                        <table className='striped'>
                            <tbody style={styleTBody}>
                                <tr>
                                    <td style={styleTd}></td>
                                    <td style={styleTd}></td>
                                    <td style={styleTd}>{this.props.total} Czk</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className='center-align'>
                            <p></p>
                            <Link className="btn-large blue center" to="/"><span style={styleButtonBack}>Back</span></Link>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="container">
                    <div className="cart" style={cartStyle}>
                        <h1 className="center-align" style={cartHeaderStyle}>CART</h1>
                        {addedItems}
                    </div>
                </div>);
        }
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items,
        total: state.total
        //addedItems: state.addedItems
    }
}
export default connect(mapStateToProps)(Cart)