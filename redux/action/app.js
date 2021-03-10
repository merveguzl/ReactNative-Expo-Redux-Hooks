
export const setTextAction = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "SET_TEXT",
            payload
        });
    };
};

export const setArrayAction = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "SET_ARRAY",
            payload
        });
    };
};

export const setArrayPushAction = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "SET_ARRAY_PUSH",
            payload
        });
    };
};
