"use strict";

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I'm a CommentBox.
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I'm a CommentList.
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I'm a CommentForm.
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById("content")
);
