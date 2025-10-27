function uploadImage(self) {
  var $this = $(self);
  if ($this.val() == "") {
    alert("請選擇要上傳的檔案!!");
    return;
  }
  var fileType = Array("jpg", "png", "gif", "PNG", "jpeg");
  var filename = $this.val().split(".");
  var extname = filename[filename.length - 1];

  if (fileType.indexOf(extname) >= 0) {
    MemberPhotoUpload();
  } else {
    alert("請上傳 jpg, png, gif 檔！");
  }
}

function GetMemberPhoto() {
  //  $.post("/Books/WBookLib.aspx",
  //  { Proc: 'GetMemberPhoto' },
  //  function (data) {
  //  $("#MyPhoto").attr("src", data + "?type=" + new Date().getTime().toString());
  //  });
}

//上傳檔案
function MemberPhotoUpload() {
  // Waiting();
  $.ajaxFileUpload({
    url: "/Books/BooksLib.aspx",
    type: "post",
    data: { Proc: "MemberPhotoUpload", UID: UID },
    secureuri: false,
    fileElementId: "BookCoverOnChange", //上傳控件ID
    dataType: "text", //返回值類型 一般設置 爲json
    success: function (data, status) {
      //$.unblockUI();
      var obj = $.parseJSON(data);
      alert(obj.Message);
      $("#output").attr("src", obj.imgPath);
      //GetMemberPhoto();
      //  var image = document.getElementById('output');
      //  image.src = URL.createObjectURL(event.target.files[0]);
    },
    error: function (data, status, e) {
      //  $.unblockUI();
      alert(e); //就是在這彈出“語法錯誤”
    },
  });
}
