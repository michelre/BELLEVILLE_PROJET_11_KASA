import {Component} from 'react';
import logo from '../public/logo_kasa_white.png'

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className ="logoFooter">
                    <img src={logo} alt="logo de kasa" />
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        )
    }
}

export default Footer;
