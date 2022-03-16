const ADD_POST_DIALOG = "ADD-POST-DIALOG"
const UPDATE_POST_TEXT_DIALOG = "UPDATE-POST-TEXT-DIALOG"

export const addPostDialogActionCreator = () => ({type: "ADD-POST-DIALOG"})
export const updatePostTextDialogActionCreator = (text) => ({type: "UPDATE-POST-TEXT-DIALOG", text})


const dialogReducer = (state, action) => {

    if (action.type === ADD_POST_DIALOG) {
        let text = {
            id: 4,
            name: state.textArea
        }
        state.name.push(text)
        state.textArea = ''
    } else if (action.type === UPDATE_POST_TEXT_DIALOG) {
        state.textArea = action.text
    }

    return state
}

export default dialogReducer