/**
 * Created by zhang on 2017/7/5.
 */
var importOtherJS;
(function (importOtherJS) {
  var regChangeStyle = function (path) {
    $('div.theme-option ul').off('click').on('click', 'li', function () {
      var style = $(this).data('style');
      if (customerStyleMap[style]) {
        var styleConfig = customerStyleMap[style];
        setStyle(styleConfig, path, style);
      }
    });
  }

  var setStyle = function (styleConfig, path, styleName) {
    _.forEach(styleConfig.otherStyle, function (item) {
      var linkTemp = document.getElementById(item.id);
      var href = path + item.path;
      linkTemp.href = href;
    });
    App.chartTheme=styleConfig.chartTheme;
    App.knob=styleConfig.knob;
    var link = document.getElementById("style_color");
    var href = path + '/assets/layouts/layout/css/themes/' + styleConfig.fileName;
    Cookies.set('gx_theme_config', styleName, {expires: 7});
    link.href = href;
  };

  var initStyle = function (path) {
    if (Cookies.get('gx_theme_config') === undefined) {
      // var themeConfig='lightblue';
      // setStyle(themeConfig, path, 'lightblue');      
      // return;
      Cookies.set('gx_theme_config','lightblue' , {expires: 7});
    }
    if (customerStyleMap[Cookies.get('gx_theme_config')]) {
      var themeConfig = customerStyleMap[Cookies.get('gx_theme_config')];

      setStyle(themeConfig, path,Cookies.get('gx_theme_config'));
    }
  }

  var initJavaScript = function (path) {
    document.write('<script src="' + path + '/assets/global/customerStyleMap.js"' +
      ' type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/metisMenu/metisMenu.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/lodash.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/js.cookie.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>');

    document.write('<script src="' + path + '/assets/global/plugins/jquery.pin.min.js"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/datatables/datatables.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/moment-with-locales.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js" type="text/javascript"></script>');

    document.write('<script src="' + path + '/assets/global/plugins/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/icheck/icheck.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/select2/js/i18n/zh-CN.js"  type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/jquery-validation/js/jquery.validate.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/jquery-validation/js/additional-methods.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/jquery-validation/js/localization/messages_zh.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/bootstrap-confirmation/bootstrap-confirmation.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/rcswitcher/js/rcswitcher.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/jeDate/jedate/jquery.jedate.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/bootbox/bootbox.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/messenger/js/messenger.min.js"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/bootstrap-tabdrop.js"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/jstree/jstree.min.js"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/jstree/jstree.plugins.js"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/mCustomScrollbar/jquery.mCustomScrollbar.concat.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/bootstrap-multiselect/js/bootstrap-multiselect.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/echarts/echarts.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/echarts/light-blue.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/echarts/dark-blue.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/echarts/black.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/echarts/red.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/FileSaver.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/jquery.printarea.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/papaparse.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/jquery.pulsate.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/jquery.bootstrap.min.js"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/typeahead/typeahead.bundle.min.js"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/bootstrap-select/js/bootstrap-select.min.js"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/bootstrap-select/js/i18n/defaults-zh_CN.min.js"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/jquery-ui/jquery-ui.min.js"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/jquery-layout/jquery.layout-latest.js"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/jquery-knob/js/jquery.knob.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/scripts/app.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/scripts/datatable.js"  type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/scripts/cdatatable.js"  type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/scripts/datatable-plugin.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/scripts/dataTables.colResize.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/scripts/datatable-excel-head.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/laydate/laydate.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/scripts/gxdate.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/layouts/layout/scripts/layout.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/layouts/global/scripts/bootstrap-addtabs.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/layouts/global/scripts/quick-sidebar.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/layouts/global/scripts/quick-nav.min.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/scripts/gxjstree.js" type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/scripts/jquary-plugins.js"' +
      ' type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/numeral/numeral.min.js"' +
      ' type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/numeral/chs.min.js"' +
      ' type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/counterup/jquery.waypoints.min.js"' +
      ' type="text/javascript"></script>');
    document.write('<script src="' + path + '/assets/global/plugins/counterup/jquery.counterup.min.js"' +
      ' type="text/javascript"></script>');      
  }

  function init(path) {
    path=globalSetting.path;
    initJavaScript(path);
    regChangeStyle(path);
  }

  importOtherJS.init = init;
  importOtherJS.initStyle = initStyle;
})(importOtherJS || (importOtherJS = {}));
//# sourceURL=import_other_js.js