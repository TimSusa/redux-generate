const {
  createActionTypes,
  generateActions,
  generateReducers
} = require("../src");
const assert = require("assert");

describe("Test for redux-generate", () => {
  it("will create an object of action names", () => {
    const arr = ["FIRST_ACTION", "SECOND_ACTION", "THIRD_ACTION"];
    const actionTypes = createActionTypes(arr);
    const expected = {
      FIRST_ACTION: "FIRST_ACTION",
      SECOND_ACTION: "SECOND_ACTION",
      THIRD_ACTION: "THIRD_ACTION"
    };
    const isEqual = Object.values(actionTypes).some((item) =>
      Object.values(expected).some((exp) => item === exp)
    );

    assert.equal(isEqual, true);
  });

  it("will create actions", () => {
    const arr = ["FIRST_ACTION", "SECOND_ACTION", "THIRD_ACTION"];
    const actionTypes = createActionTypes(arr);
    const actions = generateActions(actionTypes);
    const expected = {
      ["firstAction"]() {},
      ["secondAction"]() {},
      ["thirdAction"]() {}
    };
    const isEqual = Object.values(expected).some((item) =>
      Object.values(actions).some((exp) => "function" === typeof exp)
    );
    assert.equal(isEqual, true);
  });

  it("will create reducers", () => {
    const arr = ["FIRST_ACTION", "SECOND_ACTION", "THIRD_ACTION"];
    const actionTypes = createActionTypes(arr);
    const actions = generateActions(actionTypes);
    const reducers = {
      ["FIRST_ACTION"](state, action) {
        return state;
      },
      ["SECOND_ACTION"](state, action) {
        return state;
      },
      ["THIRD_ACTION"](state, action) {
        return state;
      }
    };
    const expected = generateReducers([], reducers);
    const expState = expected(
      { initState: "initstate" },
      { action: { type: "FIRST_ACTION" } }
    );
    const expStateReducers = reducers.FIRST_ACTION(
      { initState: "initstate" },
      { action: { type: "FIRST_ACTION" } }
    );
    const isEqual = Object.values(expState).some((item) =>
      Object.values(expStateReducers).some((exp) => item === exp)
    );
    assert.equal(isEqual, true);
  });
});
