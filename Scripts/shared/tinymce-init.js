// ✅ 全域可呼叫版本
window.initTiny = function (selector = ".htmlfields") {
  tinymce.init({
    selector,
    height: 300,
    menubar: true,
    branding: false,
    elementpath: false,
    statusbar: true,
    plugins:
      "advlist autolink lists link image preview code forecolor backcolor",
    toolbar:
      "undo redo | formatselect | bold italic underline | " +
      "forecolor backcolor | alignleft aligncenter alignright | " +
      "bullist numlist outdent indent | link image | code",

    content_style: "body { font-family: 'Noto Serif TC'; font-size: 16px; }",
  });
};
