// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    var foodArr, foodObj, i, item, logFood, myArr, myVar, _i, _j, _k, _len, _len1, _ref;
    console.log('ready');
    myVar = 'hello';
    $('ul li').each(function(e) {
      var myGlobalVar;
      myGlobalVar = true;
      console.log($(this).text());
      return console.log(myGlobalVar);
    });
    $('#header').on('click', function(e) {
      return $(this).css({
        color: 'peachpuff'
      });
    });
    if (myVar !== 'hello') {
      console.log('your var isn\'t hello');
    }
    if (myVar === 'hello') {
      console.log('your var is hello');
    }
    if (myVar) {
      console.log('I cant find your variable');
    }
    myArr = ['test', 'test2', 'test3', 'test4', 'test5'];
    for (i = _i = 0, _ref = myArr.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      console.log(myArr[i]);
    }
    foodObj = {
      'Broccoli': 'delicious',
      'Porkchops': 'declicious',
      'Candy': 'delicious',
      'Spinach': 'gross'
    };
    foodArr = ['Broccoli', 'Porkchops', 'Candy', 'Spinach'];
    logFood = function(foodItem) {
      foodItem = foodItem || false;
      if (!foodItem) {
        return false;
      }
    };
    for (_j = 0, _len = foodArr.length; _j < _len; _j++) {
      item = foodArr[_j];
      logFood(item);
    }
    for (_k = 0, _len1 = foodArr.length; _k < _len1; _k++) {
      item = foodArr[_k];
      console.log(item);
    }
    for (item in foodObj) {
      return "this food is " + item;
    }
  });

}).call(this);
