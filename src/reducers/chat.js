let firstDedault=true;
const chat = (state =[], action) => {
    switch (action.type) {
        case 'SELECT_PEOPLE':
            let newstate={
                user:action.user,
                defaultuser:state.defaultuser
            }
            return newstate

        case 'SET_DEFAULT_PEOPLE':
            if(firstDedault===true)
            {
                newstate={
                    user:state.user,
                    defaultuser:action.user
                };
                firstDedault=false;
                return newstate
            }else
                return state;



        default:
            return state
    }
}

export default chat