const identity = function (value) {
  return value;
};

const indexOf = function (array, target) {
  //array = [1], target = 1
  var result = -1;

  each(array, function (item, index) {
    //item = 1
    if (item === target && result === -1) {
      result = index;
      //result = 1
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const map = function (collection, iterator) {
  var result = [];

  each(collection, function (element) {
    result.push(iterator(element));
  });

  return result;
};

// const filter = (collection, callback) => {
//   for (let i = 0; i < collection.length; i++) {
//     return collection.filter(callback)
//   }
// }

const filter = function (collection, callback) {
  let result = [];

  each(collection, function (value) {
    if (callback(value)) {
      result.push(value);
    }
  });
  return result;
};

// const reject = function (collection, callbackTest) {
//   let result = [];

//   each(collection, function (value) {
//     if (callbackTest(value) === !true) {
//       result.push(value);
//     }
//   });
//   return result;
// };

// const reject = (collection, callbackTest) => {  
//   let result = [];
//   each (collection, (value) => {if(!callbackTest(value)){ result.push(value)}}); return result
// }

// const reject = function (collection, callbackTest) {
//   return filter(collection, function (value) {
//     return !callbackTest(value);
//   })
// }

const reject = (collection, callbackTest) => {return filter(collection, (value) => {return !callbackTest(value)})}


const uniq = function (array) {
  let result = [];
  each(array, function(value) {
    if (indexOf(result, value) === -1) {
      result.push(value)
    }
  })
  return result;
};

// const reduce = function (collection, iterator, accumulator) {
//   for (let i = 0; i < collection.length; i++) {
//     return collection.reduce(iterator);
//   }
// };

const reduce = function (collection, iterator, accumulator) {
  let initalizing = arguments.length === 2;

  each(collection, function (value) {
    if (initalizing) {
      accumulator = value;
      initalizing = false;
    } else {
      accumulator = iterator(accumulator, value)
    }
  }) 
  return accumulator
}


module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
