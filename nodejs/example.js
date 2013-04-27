// Generated by CoffeeScript 1.6.2
(function() {
  var Attendee, addAttendee, name, _i, _len, _ref;

  Attendee = (function() {
    function Attendee(name) {
      this.name = name;
    }

    return Attendee;

  })();

  addAttendee = function(name) {
    var attendee;

    attendee = new Attendee(name);
    return document.getElementById('attendee-list').innerHTML += "<li>" + attende.name + "</li>";
  };

  document.getElementById('add-attendee-form').addEventListener('submit', function(evt) {
    evt.preventDefault();
    addAttendee(evt.target.name.value);
    return evt.target.reset();
  });

  _ref = ['Mike', 'Clint', 'Wil'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    name = _ref[_i];
    addAttendee(name);
  }

}).call(this);

/*
//@ sourceMappingURL=example.map
*/