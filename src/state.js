const ADD_POST_PROFILE = "ADD-POST-PROFILE"
const UPDATE_POST_TEXT_PROFILE = "UPDATE-POST-TEXT-PROFILE"
const ADD_POST_DIALOG = "ADD-POST-DIALOG"
const UPDATE_POST_TEXT_DIALOG = "UPDATE-POST-TEXT-DIALOG"

export const AddPostProfileActionCreator = () => ({type: "ADD-POST-PROFILE"})
export const updatePostTextProfileActionCreator = (text) => ({type: "UPDATE-POST-TEXT-PROFILE", text})
export const addPostDialogActionCreator = () => ({type: "ADD-POST-DIALOG"})
export const updatePostTextDialogActionCreator = (text) => ({type: "UPDATE-POST-TEXT-DIALOG", text})

const store = {

    _state: {
        profileItems: {
            post: [
                {id:1, post:'пост номер 1'},
                {id:2, post:'пост номер 2'},
                {id:3, post:'пост номер 3'},
            ],
            textArea: 'Hello boy',
        },
        dialogItems: {
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
        }},
    _rerenderReactApp() {
        console.log('rerenderReactApp')
    },

    getState() {
        return store._state
    },
    subscribable(observer) {
        this._rerenderReactApp = observer
    },
//dfsdfsdf
    dispatch(action) {
        if (action.type === ADD_POST_PROFILE) {
            let newPost = {
                id:4,
                post: this._state.profileItems.textArea,
            }
            this._state.profileItems.post.push(newPost)
            this._state.profileItems.textArea = ''
            this._rerenderReactApp()
        } else if (action.type === UPDATE_POST_TEXT_PROFILE) {
            this._state.profileItems.textArea = action.text
            this._rerenderReactApp()
        } else if (action.type === ADD_POST_DIALOG) {
            let text = {
                id: 4,
                name: this._state.dialogItems.textArea
            }
            this._state.dialogItems.name.push(text)
            this._rerenderReactApp()
            this._state.dialogItems.textArea = ''
        } else if (action.type === UPDATE_POST_TEXT_DIALOG) {
            this._state.dialogItems.textArea = action.text
            this._rerenderReactApp()
        }
    }
}


export default store
window.store = store

//Добовление и обновление поста во вкладке Profile
//     addPost() {
//         let newPost = {
//             id:4,
//             post: this._state.profileItems.textArea,
//         }
//         this._state.profileItems.post.push(newPost)
//         this._state.profileItems.textArea = ''
//         this._rerenderReactApp()
//     },
//     updatePostText(text) {
//         this._state.profileItems.textArea = text
//         this._rerenderReactApp()
//     },

//Добовление и обновление поста во вкладке Dialogs
//     addPostDialog() {
//         let text = {
//             id: 4,
//             name: this._state.dialogItems.textArea
//         }
//         this._state.dialogItems.name.push(text)
//         this._rerenderReactApp()
//         this._state.dialogItems.textArea = ''
//     },
//     updatePostTextDialog(text) {
//         this._state.dialogItems.textArea = text
//         this._rerenderReactApp()
//     },