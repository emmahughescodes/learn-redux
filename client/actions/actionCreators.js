// increment
// index tells us which post has like or comment incremented
// action is inside the return
// action creator is like the entire function
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// add comment 
export function addComment(postId, author, comment){
    return {
        type: 'ADD_COMMENT',
        postId, 
        author, 
        comment
    }
}

// remove comment 
//what post are we removing the comment i from 
export function removeComment(postId, i){
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}

