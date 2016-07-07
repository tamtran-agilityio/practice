function FancyCheckbox(props) {
  //var {checked, ...other}: props;
  var fancyClass = props.checked? 'FancyChecked':'FancyUnchecked';
  return (
    //<div {...other} className={fancyClass} />
    <div className={fancyClass} onClick={props.onClick}>
      {props.children}
    </div> 
  );
}

// function FancyCheckbox(props) {
//   var checked = props.checked;
//   var other = _.omit(props, 'checked');
//   var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
//   return (
//     React.DOM.div(_.extend({}, other, { className: fancyClass }))
//   );
// }

ReactDOM.render(
  <FancyCheckbox checked = {true} onClick={console.log.bind(console)}>
    Hello world!
  </FancyCheckbox>,
  document.getElementById('fancycheckbox')
);
