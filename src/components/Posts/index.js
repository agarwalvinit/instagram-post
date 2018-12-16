import React, { Component } from 'react';
import { getAgo } from 'utils';
import './style.scss';
import LikeButton from 'components/LikeButton';
import CommentButton from 'components/CommentButton';

class Posts extends Component {
  textInput = React.createRef();

  list = () => {
    return (
      this.props.post.comments.map((o) => (
        <li className={'CommentList'} key={`comment_${o.id}`}>
          <div className={'Comment'}><span className={'CommentUser'}>
            {o.userId} </span>{o.comment}
            <LikeButton handleClick={this.likeCommentClicked} id={o.id} liked={o.liked} />
          </div>
        </li>
      ))
    )
  };

  likePostClicked = (e) => {
    e.preventDefault();
    this.props.handleClick(this.props.post.id);
  }

  likeCommentClicked = (e, id) => {
    e.preventDefault();
    this.props.likeCommentClicked(this.props.post.id, id)
  }

  commentClick = () => {
    this.textInput.current.focus();
  }

  render() {
    const { post } = this.props;
    return (
      <section className={'PostSection'}>
        <div className={'PostHeadBlock'}>
          <img className={'ProfileImage'} alt={'profile'} src={post.profileImg} />
          <span className={'UserName'}>{post.userId}</span>
        </div>
        <div className={'PostMiddleBlock'}>
          <img className={'PostImage'} src={post.img} alt={'post'} />
        </div>
        <section className={'PostBelowBlock'}>
          <div className={'LikeCommentSection'}>
            <LikeButton handleClick={this.likePostClicked} showPost liked={post.liked} />
            <CommentButton handleClick={this.commentClick} />
          </div>
          <div className={'TotalLike'}>{post.likes} likes</div>
          <div className={'CommentBox'}>
            <ul className={'CommentListBlock'}>
              {this.list()}
            </ul>
          </div>
          <div className={'TimeStamp'}>
            {getAgo(post.timestamp)}
          </div>
          <div className={'AddCommentBlock'}>
            <textarea
              onKeyDown={(e) => this.props.handleKeyPress(e, post.id)}
              placeholder={'Add a comment...'} 
              ref={this.textInput} 
              className={'CommentArea'}>
            </textarea>
          </div>
        </section>
      </section>
    );
  }
}

export default Posts;
