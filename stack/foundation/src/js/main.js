/* file javscript */
$(document).foundation();

// alert close
$(document).on('close.fndtn.alert', function(event) {
  console.info('An alert box has been closed!');
});

$(document).foundation('alert', 'reflow');
