import React from 'react';
import '../index.scss';

import Card from './Card.component';

const ACCESS_KEY = 'KTuXy_cPslsLWiVYBNEBO506e2zq5torYfoHljX0vCI';
// const SECRET_KEY = 'BhyEfaWUVdqtPMDttIg-K2SJoopNbmg6AgDTyfrfOnM';
const ENDPOINT = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`;

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      pictures: []
    }
  }

  componentDidMount() {
    fetch(ENDPOINT)
    .then(res => res.json())
    .then(data => {
      let pictures = data.map(img => {
        return (
          {
            name: img.user.last_name,
            src: img.urls.small,
            alt: img.alt_description
          }
        )
      })
      this.setState({ pictures })
    })
    .catch(res => console.warn('There was a problem:', res))
  }

  render() {
    return (
    <div className="board-component">
      {       <span className="card-container">
        { this.state.pictures.map(img => {
          return (
            <Card
            name={img.name || 'banana'}
            img={img.src}
            alt={img.alt}
            key={img.alt}
            ></Card>
          )
        }) }
      </span> }
    </div>
    );
  }
}
