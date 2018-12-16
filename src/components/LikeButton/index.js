import React, { PureComponent } from 'react';
import './style.scss';

class Main extends PureComponent {
  handleClick = (e) => {
    this.props.handleClick(e, this.props.id);
  }

  render() {
    return (
        <button className={`SmallButton LikeButton ${this.props.showPost ? '' : 'CommentLikeButton'}`} onClick={this.handleClick}>
            <span className={`SpriteImage ${this.props.liked ? 'LikedImg' : 'UnlikedImg'}`}></span>
        </button>
    );
  }
}

export default Main;
