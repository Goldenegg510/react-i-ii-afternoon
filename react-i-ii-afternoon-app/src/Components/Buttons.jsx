import React, {Component} from 'react'

export default class Buttons extends Component{

render(){

return(<div className='buttons'>
<div className="button" onClick={this.props.decreaseCount}>Prev</div>
<div className="button" onClick={this.props.increaseCount} >Next</div>
</div>)
}
}