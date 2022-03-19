const ADD_POST_DIALOG = "ADD-POST-DIALOG"
const UPDATE_POST_TEXT_DIALOG = "UPDATE-POST-TEXT-DIALOG"

export const addPostDialogActionCreator = () => ({type: "ADD-POST-DIALOG"})
export const updatePostTextDialogActionCreator = (text) => ({type: "UPDATE-POST-TEXT-DIALOG", text})


let initialization = {
    name: [
        {id:1, name:'Светлана'},
        {id:2, name:'Валентин'},
        {id:3, name:'Иваныч'},
    ],
    message: [
        {id:1, message: 'Хей всем прива'},
        {id:2, message: 'Как дела брос'},
        {id:3, message: 'Еее я прогромерс'},
    ],
    textArea: 'text Dialog'
}

const dialogReducer = (state = initialization, action) => {
    if (action.type === ADD_POST_DIALOG) {
        let text = state.textArea
        return {
            ...state,
            name: [...state.name, {id: 4, name: text}],
            ...state.textArea = ''
        }
    } else if (action.type === UPDATE_POST_TEXT_DIALOG) {
        return {
            ...state,
            textArea: action.text
        }
    }
    return state
}

export default dialogReducer