const initialData = [];

const weatherReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'SEARCH': {
            return [...state, action.data]
        }
        default: {
            return state;
        }
    }
}

export default weatherReducer;