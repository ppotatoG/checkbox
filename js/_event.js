$(document).ready(function(){
    $('.js-input-box input').on('change', function() {
      var _this     = $(this);
      var _parent   = _this.closest('.js-input-box');
      var _children = _parent.find('input[type=checkbox]').not('.all');
      var _first    = _parent.find('input[type=checkbox]').not('.all').eq(0);
      var _all      = _parent.find('input[type=checkbox].all');

      // not all
      if(!(_this.hasClass('all'))) {
        // _children 중복문
        _children.each(function () {
          // this checked
          if(_this.prop('checked')) {
            _children.prop('checked', false);
            _this.prop('checked', true);
            _all.prop('checked', true);
          }

          // this not checked
          else {
            _all.prop('checked', false);
          }
        })
      }

      // all
      else {
        // this checked
        if(_this.prop('checked')) {
          _children.prop('checked', false);
          _this.prop('checked', true);
          _first.prop('checked', true);
        } 

        // this not checked
        else {
          _first.prop('checked', false);
        }
      }
  });
});