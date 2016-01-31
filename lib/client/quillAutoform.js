AutoForm.addInputType('quill', {
  template: 'quill_form',
  valueOut: function() {
    return this.find('.quill-editor').html();
  }
});
