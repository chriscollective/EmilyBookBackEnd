function UpdateBookPublishData() {
  if (confirm("Are you sure you want to Publish?")) {
    $.post(
      "/Books/BooksLib.aspx",
      { Proc: "UpdateBookPublishData", UID: UID },
      function (data) {
        var obj = $.parseJSON(data);
        alert(obj.Message);
        if (obj.Success) {
          if (UID == "0") {
            UID = obj.UID.toString();
          } else {
          }
          window.location = "/BehindTheScene/BookCreate/PublishBookSearch.aspx";
        } else {
        }
      }
    );
  }
}

function UpdateBookUnPublishData() {
  if (confirm("Are you sure you want to UnPublish?")) {
    $.post(
      "/Books/BooksLib.aspx",
      { Proc: "UpdateBookUnPublishData", UID: UID },
      function (data) {
        var obj = $.parseJSON(data);
        alert(obj.Message);
        if (obj.Success) {
          if (UID == "0") {
            UID = obj.UID.toString();
          } else {
          }
          window.location = "/BehindTheScene/BookCreate/PublishBookSearch.aspx";
        } else {
        }
      }
    );
  }
}
