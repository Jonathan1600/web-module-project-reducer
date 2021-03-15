export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const M_PLUS = "M_PLUS";
export const M_RESULT = "M_RESULT";
export const M_CLEAR = "M_CLEAR";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const mPlus = () => {
  return { type: M_PLUS };
};

export const mResult = () => {
  return { type: M_RESULT };
};

export const mClear = () => {
  return { type: M_CLEAR };
};
