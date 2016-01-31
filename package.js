Package.describe({
  summary: "Autoform Quill",
  version: '0.0.1',
  name: "buishi:autoform-quill",
  git: 'https://github.com/DesignmanIO/meteor-autoform-quill',
  documentation: 'README.md'
});

Package.onUse(function (api) {

  api.use(['templating@1.1.5'], ['client']);

  api.use(['aldeed:autoform@5.8.1'], ['client', 'server']);

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
