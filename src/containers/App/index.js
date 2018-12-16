import React, { Component } from 'react';
import Header from 'components/Header';
import { connect } from 'react-redux';
import { fetchData, postData } from 'actions'
import Main from 'components/Main';
import './style.scss';

class App extends Component {

  componentDidMount = () => {
    this.props.fetchData();
  }

  render() {
    const { posts } = this.props;
    if (Object.keys(posts).length === 0) return null;
    return (
      <div className="App">
        <Header />
        <Main posts={posts} postData={this.props.postData} />
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts
  };
}

export default connect(mapStateToProps, { fetchData, postData })(App);
