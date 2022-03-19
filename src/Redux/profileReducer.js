const ADD_POST_PROFILE = "ADD-POST-PROFILE"
const UPDATE_POST_TEXT_PROFILE = "UPDATE-POST-TEXT-PROFILE"

export const AddPostProfileActionCreator = () => ({type: "ADD-POST-PROFILE"})
export const updatePostTextProfileActionCreator = (text) => ({type: "UPDATE-POST-TEXT-PROFILE", text})


let initialization = {
    post: [
        {id:1, post:'пост номер 1'},
        {id:2, post:'пост номер 2'},
        {id:3, post:'пост номер 3'},
    ],
    textArea: 'Hello boy',
}

const profileReducer = (state = initialization, action) => {
    let copyState = {...state, ...state.post, ...state.textArea}
    if (action.type === ADD_POST_PROFILE) {
        let newPost = {
            id: 4,
            post: copyState.textArea,
        }
        copyState.post.push(newPost)
        copyState.textArea = ''
    } else if (action.type === UPDATE_POST_TEXT_PROFILE) {
        copyState.textArea = action.text
    }

    return copyState
}

export default profileReducer