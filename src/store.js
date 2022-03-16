import profileReducer from "./Redux/profileReducer";
import dialogReducer from "./Redux/dialogReducer";


/*const store = {

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

    dispatch(action) {
        this._state.profileItems = profileReducer(this._state.profileItems, action)
        this._state.dialogItems  = dialogReducer(this._state.dialogItems, action)
        this._rerenderReactApp(this._state)
    }
}*/


//export default store
//window.store = store

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