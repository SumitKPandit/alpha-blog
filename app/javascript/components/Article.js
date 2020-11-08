import React from "react";
import PropTypes from "prop-types";
import Timeago from "react-timeago";

class Article extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="article-title">
          <a href={this.props.path}>{this.props.title}</a>
        </div>
        <div className="article-body">
          {this.props.description}
          <div className="article-meta-details">
            <small>Created by: {this.props.author}, <Timeago date={this.props.createdAt} live />, last updated: <Timeago date={this.props.updatedAt} live /></small>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};
export default Article
