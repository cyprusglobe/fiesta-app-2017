function combineStyles(conditions, styles) {
  var results = [];

  Object.keys(conditions).map(function(key) {
    if (conditions[key]) results.push(styles[key]);
  });

  return results;
}

export default combineStyles;
