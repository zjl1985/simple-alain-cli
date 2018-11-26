/**
 * Created by zhang on 2017/7/5.
 */
var importOtherCss;
(function (importOtherCss) {
  var initStyleSheet = function (path) {
    // 第三方类库样式（开始）
    document.write('<link href="' + path + '/assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/global/plugins/simple-line-icons/css/simple-line-icons.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>');
    // 第三方类库样式（结束）
    //自定义高信图标字体start
    document.write('<link href="' + path + '/assets/global/plugins/gx-iconfont/css/gx-iconfont.css" rel="stylesheet" type="text/css"/>');    
    //自定义高信图标字体end
    // 页面级样式
    document.write('<link href="' + path + '/assets/global/plugins/datatables/datatables.min.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/global/plugins/icheck/skins/all.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/global/plugins/select2/css/select2.min.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/global/plugins/select2/css/select2-bootstrap.min.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/global/plugins/messenger/css/messenger.css" rel="stylesheet"/>');
    document.write('<link href="' + path + '/assets/global/plugins/messenger/css/messenger-theme-block.css" rel="stylesheet"/>');
    document.write('<link href="' + path + '/assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet"/>');
    document.write('<link href="' + path + '/assets/global/plugins/jstree/themes/default/style.min.css" rel="stylesheet"/>');
    document.write('<link href="' + path + '/assets/global/plugins/mCustomScrollbar/jquery.mCustomScrollbar.min.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/global/plugins/bootstrap-switch/css/bootstrap3/bootstrap-switch.min.css" rel="stylesheet">');
    document.write('<link href="' + path + '/assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/global/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/global/plugins/bootstrap-select/css/bootstrap-select.min.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/global/plugins/jquery-layout/layout-default-latest.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/global/plugins/bootstrap-multiselect/css/bootstrap-multiselect.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/global/plugins/jeDate/css/jedate.css" rel="stylesheet" type="text/css"/>');
    document.write('<link type="text/css" rel="stylesheet" href="' + path + '/assets/global/plugins/rcswitcher/css/rcswitcher.css">');
    // 页面级样式

    // 全局样式类（开始）
    document.write('<link href="' + path + '/assets/global/css/components-rounded.css" rel="stylesheet" type="text/css" id="style_components"/>');
    document.write('<link href="' + path + '/assets/global/css/plugins.css" rel="stylesheet" type="text/css" id="style_plugins"/>');
    // 全局样式类（结束）
    document.write('<link href="' + path + '/assets/layouts/layout/css/layout.min.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/global/css/bootstrap-custom.css" rel="stylesheet" type="text/css"/>');
    document.write('<link href="' + path + '/assets/layouts/layout/css/custom.css" rel="stylesheet" type="text/css"/>');
  };

  function init(path) {
    path=globalSetting.path;
    initStyleSheet(path);
  }

  importOtherCss.init = init;
})(importOtherCss || (importOtherCss = {}));
//# sourceURL=import_other_css.js