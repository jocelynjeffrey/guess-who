import React from 'react';

export default class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: true,
    }
  }

  toggleActiveState() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return(
      <button
        className={`card-component ${this.state.isActive ? "active" : "inactive"}`}
        onClick={() => this.toggleActiveState()}
      >
        <img src={this.props.img} alt={this.props.alt} key={this.props.alt} />
        <span className="name">{this.props.name}</span>
      </button>
    );
  }
}