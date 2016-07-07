var CheckLink = React.createClass({
  render: function() {
    return <a {...this.props}>{'√ '}{this.props.children}</a>;
  }
});

ReactDOM.render(
  <CheckLink href="/checked.html">Click here</CheckLink>,
  document.getElementById('transfer')
);
