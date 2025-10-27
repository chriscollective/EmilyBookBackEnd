function UpdateBookDelData() {
  if (confirm("Are you sure you want to delete?")) {
    $.post(
      "/Books/BooksLib.aspx",
      { Proc: "UpdateBookDeleteData", UID: UID },
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
