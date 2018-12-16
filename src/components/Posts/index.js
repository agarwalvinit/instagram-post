import React from 'react';
import { getAgo } from 'utils';
import './style.scss';


const Posts = (props) => {
  let textInput = React.createRef();
  const list = props.post.comments.map((o) => (
    <li className={'CommentList'} key={`comment_${o.id}`}>
      <div className={'Comment'}><span className={'CommentUser'}>
      {o.userId} </span>{o.comment}
      </div>
    </li>
  ))
  return (
    <section className={'PostSection'}>
      <div className={'PostHeadBlock'}>
        <img className={'ProfileImage'} alt={''} src={'https://instagram.fblr8-1.fna.fbcdn.net/vp/7d88de201c4e14ce5c61983d34adb3e2/5C8BE1C3/t51.2885-19/s150x150/42464338_1937585179670215_2491567612819931136_n.jpg'} />
        <span className={'UserName'}>{props.post.userId}</span>
      </div>
      <div className={'PostMiddleBlock'}>
        <img className={'PostImage'} src={'https://instagram.fblr8-1.fna.fbcdn.net/vp/0e67ed368c9705b706c67a3ddc969bff/5C96EF30/t51.2885-15/sh0.08/e35/p750x750/47584291_209254326622664_6575218339328717972_n.jpg?_nc_ht=instagram.fblr8-1.fna.fbcdn.net'} alt={''} />
      </div>
      <section className={'PostBelowBlock'}>
        <div className={'LikeCommentSection'}>
          <button className={'SmallButton LikeButton'} onClick={(e) => props.handleClick(e, props.post.id)}>
            <span className={`SpriteImage ${props.post.liked ? 'LikedImg' : 'UnlikedImg'}`}></span>
          </button>
          <button className={'SmallButton CommentButton'} onClick={() => {textInput.current.focus()}}>
            <span className={'SpriteImage CommentImg'}></span>
          </button>
        </div>
        <div className={'TotalLike'}>{props.post.likes} likes</div>
        <div className={'CommentBox'}>
          <ul className={'CommentListBlock'}>
            {list}
          </ul>
        </div>
        <div className={'TimeStamp'}>
          {getAgo(props.post.timestamp)}
        </div>
        <div className={'AddCommentBlock'}>
          <textarea
            onKeyDown={(e) => props.handleKeyPress(e, props.post.id)}
            placeholder={'Add a comment...'} 
            ref={textInput} 
            className={'CommentArea'}>
          </textarea>
        </div>
      </section>
    </section>
  );
}

export default Posts;
