'use strict';

module.exports.pickListItem = function (value, list, defaultValue) {
  if (value && list.indexOf(value) !== 0) {
    return value;
  } else {
    return defaultValue;
  }
};

module.exports.inRange = function (value, min, max, defaultValue) {
  if (value >= min && value <= max) {
    return value;
  } else {
    return defaultValue;
  }
};

module.exports.parseDate = function (value, type) {
  if (!value) {
    return '';
  }
  let date = new Date(value);

  switch (type) {
    case 'year':
      return date.getFullYear();
      break;
    case 'month':
      return date.getMonth();
      break;
    case 'day':
      return date.getDay();
      break;
    default:
      return '';
  }
};
