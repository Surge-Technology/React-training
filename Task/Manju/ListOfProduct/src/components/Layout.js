import React, { components } from 'react' 

import Header from './Header'
import OrderHistory from '../pages/Orderhistory'

/**
* @author
* @class Layout
**/

class Layout extends components {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="bgColor" style={{width:'100%'}}>
                    <Header></Header>
                    {this.props.children}
                    {/* <Footer></Footer> */}
                    <OrderHistory/>
                </div>
                <div className="d-none">
                    A
                </div>

            </React.Fragment>
        )
    }
}


Layout.propTypes = {}
export default Layout