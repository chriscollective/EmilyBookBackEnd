tinyMCE.init({
  // General options
  mode: "exact",
  elements:
    "BookDescription,BookMarketingRightsInformation,BookReviews,EmilyNotes ",
  theme: "advanced",
  height: "300",
  language: "zh-tw",
  plugins:
    "safari,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,netImageBrowser,netFileBrowser,autolink",

  // Theme options
  theme_advanced_buttons1:
    "fontsizeselect,|,bold,italic,underline,|,justifyleft,justifycenter,justifyright,justifyfull,|,forecolor,backcolor,|,undo,redo,|,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,|,link,unlink,cleanup,code,|,preview,|,myPasteImages",
  theme_advanced_buttons2: "",
  plugin_preview_width: "700", //preview 視窗大小
  plugin_preview_height: "300",
  theme_advanced_source_editor_width: "700", //html語法編輯器視窗大小
  theme_advanced_source_editor_height: "300",
  theme_advanced_toolbar_location: "top",
  theme_advanced_toolbar_align: "left",
  theme_advanced_statusbar_location: "bottom",
  theme_advanced_resizing: false,
  force_br_newlines: true, //啟用BR換行;use <br> to break;
  force_p_newlines: false, //停用P換行, disable <P> to break;
  forced_root_block: false, //移除開頭的<P>和<span>; romove the frist <P> and disable <span> tag
  //content_css: "Css/style.css",
  // Drop lists for link/image/media/template dialogs
  template_external_list_url: "lists/template_list.js",
  external_link_list_url: "lists/link_list.js",
  external_image_list_url: "lists/image_list.js",
  media_external_list_url: "lists/media_list.js",

  oninit: "InitPage",
});
