import React from 'react'
import Popup from './Popup.jsx'

const venicePic = require('../../images/venice.jpg');
const culverPic = require('../../images/Culvercity.jpg');
const dtlaPic = require('../../images/dtla.jpg');
const hollyPic = require('../../images/hollywood.jpg');
const malibuPic = require('../../images/malibu.jpg');
const melrosePic = require('../../images/melrose.jpg');
const silverPic = require('../../images/silverlake.jpg');
const santaPic = require('../../images/santamonica.jpg');

class Image extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="pics">
                    <div className='up'>
                        <div><img className="pics" src={venicePic} onClick={this.props.handleGetlocation} />Venice</div>

                        <div><img className="pics" src={culverPic} />Culver City</div>
                        <div><img className="pics" src={dtlaPic} onClick={this.props.handleDtla} />DTLA</div>
                        <div><img className="pics" src={hollyPic} />Hollywood</div>
                    </div>
                    <div className='down'>
                        <div ><img className="pics" src={malibuPic} />Malibu</div>
                        <div><img className="pics" src={melrosePic} />Melrose</div>
                        <div ><img className="pics" src={silverPic} />Silvelake</div>
                        <div ><img className="pics" src={santaPic} />Santa Monica</div>
                    </div>

                </div>

            </div>

        )
    }
}
// const { handleClick, letter, row, square } = props;

// return (
//     <div>
//         {/* <div className="pics">
//                 <div><img className="pics" src={venicePic} /></div>
//                 <div><img className="pics" src={culverPic} /></div>
//                 <div><img className="pics" src={dtlaPic} /></div>
//                 <div><img className="pics" src={hollyPic} /></div>

//             </div>
//             <div className='down'>
//                 <div className='down'><img className="pics" src={malibuPic} /></div>
//                 <div className='down'><img className="pics" src={melrosePic} /></div>
//                 <div className='down'><img className="pics" src={silverPic} /></div>
//                 <div className='down'><img className="pics" src={santaPic} /></div>
//             </div> */}


//         );
//     };

export default Image;