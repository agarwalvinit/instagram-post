import React, { PureComponent } from 'react';
import './style.scss';

class Main extends PureComponent {
  handleClick = () => {
    this.props.handleClick()
  }

  render() {
    return (
        <button className={'SmallButton CommentButton'} onClick={this.handleClick}>
            <span className={'SpriteImage CommentImg'}></span>
        </button>
    );
  }
}

export default Main;
