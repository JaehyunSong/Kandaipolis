/*
マクロ定義：第6.5参照
https://qiita.com/nozma/items/21c56c7319e4fefceb79
*/


remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};

remark.macros.height = function (px) {
  var url = this;
  return '<img src="' + url + '" height = "' + px + '" />';
};

remark.macros.width = function (px) {
  var url = this;
  return '<img src="' + url + '" width = "' + px + '" />';
};