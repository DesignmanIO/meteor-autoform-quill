Package.describe({
  summary: "Autoform Quill",
  version: '0.0.1',
  name: "autoform-quill"
});

Package.onUse(function (api) {

  api.use(['templating'], ['client']);

  api.use(['aldeed:autoform'], ['client', 'server']);

  api.addFiles([
    //quill autoform
    'lib/client/quill.base.css',
    'lib/client/quill.snow.css',
    'lib/client/quill.min.js',
    'lib/client/quill_form.html',
    'lib/client/quill_form.js',
    'lib/client/quillAutoform.js'
  ], ['client']);

});
