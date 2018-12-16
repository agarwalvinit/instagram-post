import React, { Component } from 'react';
import Posts from '../Posts';
import './style.scss';

class Main extends Component {
  handleClick = (e, id) => {
    e.preventDefault();
    let newObj = {...this.props.posts};
    newObj[id].liked = !newObj[id].liked;
    if (newObj[id].liked) {
      newObj[id].likes += 1;
    } else {
      newObj[id].likes -= 1;
    }
    this.props.postData(newObj);
  }
  handleKeyPress = (e, id) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      if (e.target.value) {
        debugger;
        let newObj = {...this.props.posts};
        newObj[id].comments.push({
          id: `${id}c${newObj[id].comments.length+1}`,
          userId: 'vinit',
          comment: e.target.value,
          liked: false
        });
        e.target.value = '';
        this.props.postData(newObj);
      }
    }
  }
  renderPosts = () => {
    const { posts } = this.props;
    const postList = Object.values(posts);
    return postList.map((post) => {
      return(
        <Posts post={post} key={post.id} handleKeyPress={this.handleKeyPress} handleClick={this.handleClick}/>
      )
    });
  }
  render() {
    return (
      <section className={'MainSection'}>
        <main className={'MainPost'}>
          {this.renderPosts()}
        </main>
      </section>
    );
  }
}

export default Main;
