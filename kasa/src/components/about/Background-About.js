import {Component} from 'react';
import bg from '../../public/media/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg'

class BackgroundAbout extends Component {
    render(){
        return(
            <div className="background-about">
                <div className ="img-window">
                    <img src={bg} alt="Background de la page a propos" />
                </div>
            </div>
        )
    }
}

export default BackgroundAbout;
