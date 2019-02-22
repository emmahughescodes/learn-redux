// a reducer takes in two things: 
// 1. The Action - info about what happened
// 2. Copy of Current State

// the first time this fn is run, state is not going to be equal to anything so set it to be an empty array
function posts(state = [], action) {
    console.log(state, action);
    return state;
}