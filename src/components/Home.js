import React, { Component } from 'react';
import { connect } from 'react-redux'
import { search, addQuantity, subtractQuantity } from './actions/cartActions'

class Home extends Component {
    handleSearch = (e) => {
        this.props.search(e.target.value);
        this.forceUpdate();
    }

    handleClick = (id, add) => {
        if (add) {
            this.props.addQuantity(id);
        }
        else {
            this.props.subtractQuantity(id);
        }
        this.forceUpdate();
    }

    render() {
        const bgColor = { backgroundColor: '#ebebeb', marginBottom: "0" };
        const fontSize25px = { fontSize: '25px' }
        const cardStyle = { padding: "20px", borderRadius: "5px" }

        let itemList = this.props.items.map(item => {
            return (
                item.isShowing ? (
                    <div className="col s4" key={item.id}>
                        <div className="card-horizontal white" key={item.id} style={cardStyle}>
                            <div className="card-content">
                                <p>
                                    <span className="card-title left" style={fontSize25px}>{item.title}</span>
                                    <span className="card-title right" style={fontSize25px}>{item.price} Czk</span>
                                </p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p></p>
                                <p style={{ marginTop: 20 + 'px' }} className="center-align">
                                    <span to="/" className="btn waves-effect waves-light blue" onClick={() => { this.handleClick(item.id, false) }}><i className="material-icons">remove</i></span>
                                    <b> {item.quantity} </b>
                                    <span to="/" className="btn waves-effect waves-light blue" onClick={() => { this.handleClick(item.id, true) }}><i className="material-icons">add</i></span>
                                </p>
                            </div>
                        </div >
                    </div>) : ""
            )
        })

        return (
            <div className="container" style={bgColor}>
                <div className="row">
                    <div className='col s8'>
                    </div>
                    <div className='col s4'>
                        <form>
                            <div className="input-field">
                                <input id="search" onChange={this.handleSearch} type="search" required className='white' />

                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    {itemList}
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (id) => { dispatch(search(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)