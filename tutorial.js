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

React.render(
  <CommentBox />,
  document.getElementById("content")
);
