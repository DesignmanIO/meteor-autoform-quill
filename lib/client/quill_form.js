var random = Random.id();

Template.quill_form.onCreated(function () {
  //this.value = new ReactiveVar(this.data.value);
});

Template.quill_form.onRendered(function () {
  var options = this.data.atts.options || {theme: 'snow'};
  var editor = '#quill-editor-' + random;
  var toolbar = '#quill-toolbar-' + random;
  console.log('toolbar/editor: ',toolbar, editor);
  var quill = new Quill(editor, options);
  quill.addModule('toolbar', {container: toolbar});
});

Template.quill_form.helpers({
  random: function(){return random;},
  //value: function(){return this.value();}
});

Template.quill_form.events({});
