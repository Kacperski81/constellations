
export const initialState = {
    isMenuOpen: false,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'toggleMenu':
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen,
            }
        default:
            return state;
    }
}