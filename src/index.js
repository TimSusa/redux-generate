module.exports = {
  generateActions,
  createActionTypes,
  generateReducers
};

function generateActions(actionObject) {
  return Object.keys(actionObject).reduce((acc, type) => ({
    ...acc,
    [camelize(type)](payload) {
      return {
        type,
        payload
      };
    }
  }), {})
}

function camelize(str = "") {
  return str
    .toLowerCase()
    .split("_")
    .join(" ")
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

function createActionTypes(typeArray = []) {
  return typeArray.reduce(
    (acc, item) => ({
      ...acc,
      [item]: item
    }),
    {}
  );
}

function generateReducers(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
