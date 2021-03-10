const INITAL_STATE = {
    text: "",
    array:[{
        name: "1",
    },
    {
        name:"2"
    },
    {
        name:"3"
    }],
    arrayPush:[]
};

const app = (state, { type, payload }) => {
    if (typeof state === "undefined") {
      return { ...INITAL_STATE };
    }
    switch (type) {
        case "SET_TEXT":
            return {
                ...state,
                text: payload
            };
        case "SET_ARRAY":
            return {
                ...state,
                array: payload
            };
         case "SET_ARRAY_PUSH":
            return {
                ...state,
                arrayPush : [...state.arrayPush, payload]
            };
       
        default:
            return state;
    }
};

export default app;
