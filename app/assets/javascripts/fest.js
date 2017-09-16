$(function(){
  var _days = $('.page_section_days .days');
  var _days_items = $('.days_item', _days);

  var _days_sc = $('.page_section_schedule .days');
  var _days_sc_items = $('.days_item', _days_sc);



  _days_items.on('click', function() {
    var _this = $(this);
    _days_items.not(this).removeClass('active');
    _this.addClass('active');

    // _this.data('data');

    _days_sc_items.each(function(i, e) {
      var _d = $(this);

      if(_d.data('date') == _this.data('date')) {
        _d.show();
      } else {
        _d.hide();
      }
    });
  });

  $('.next_day .btn_sub').on('click', function(){
    var _nd = $(this);
    _days_items.each(function(i, e) {
      var _i = $(e);
      console.log(_i.data('date'));
      if(_i.data('date') == _nd.data('date')) {
        _i.trigger('click');
      }
    });
  });

  if(_days.has('.active').length) {
    $('.active', _days_items).trigger('click');
  } else {
    _days_items.first().trigger('click');
  }

  $('.events_item').on('click', function(e) {
    var _target = $(e.target);

    if(!_target.is('.btn') && !_target.is('.btn_link')) {
      if($(this).is('.active')) {

      } else {
        $('.events_item.active .speakers_item_desc').slideUp(200);
        $('.events_item.active').toggleClass('active').find('.desc').slideToggle(300);
      }

      $(this).toggleClass('active').find('.desc').slideToggle(300);
      $(this).find('.speakers_item_desc').slideUp(200);
    }

    if(_target.is('.btn_link')) {
      _target.parent().next().slideToggle(200);
    }

  });


  $('.header_menu_burger').on('click', function() {
    $(this).closest('.header').toggleClass('with_nav').parent().toggleClass('with_nav');
  });

});