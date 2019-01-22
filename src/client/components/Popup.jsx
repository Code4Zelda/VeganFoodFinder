import React from 'react'



class Popup extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    console.log(this.props.location)
    let arr = [];
    if (this.props.location) {
      this.props.location.forEach((location, i) => {
        console.log(location)
        for (let key in location) {
          let value = location[key]
          let keys = key
          arr.push(<p> {keys} : {value} </p>)
        }
        return arr
      })

    }

    // let venice;
    // if (this.props.location) {
    //   venice = this.props.location[0].name
    // }
    return (
      <div>
        <div className='place'>{arr}</div>

      </div >
    )
  }
};




export default Popup;