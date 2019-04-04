import React, {Component} from 'react'


export default class WhiteBox extends Component {

render(){
  return (<div className='whiteBox'>

    <div className='person'>
    <h1 className='name'>{`${this.props.data.name.first} ${this.props.data.name.last}`}</h1>
    <div className='from'>{`From: ${this.props.data.city}, ${this.props.data.country}`}</div>
    <div className='employer'>{`Employer: ${this.props.data.employer}`}</div>
    <div className='favoriteMovies'>FavoriteMovies:</div>
    <ol className='ol'>
      <li>{`${this.props.data.favoriteMovies[0]}`}</li>
      <li>{`${this.props.data.favoriteMovies[1]}`}</li>
      <li>{`${this.props.data.favoriteMovies[2]}`}</li>
    </ol>
    </div>

    <div className='numDiv'>{`${this.props.data.id}/25`}</div>
  </div>)
}
}