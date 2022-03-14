

const state = {
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
    }}

//Добовление и обновление поста во вкладке Profile
export const addPost = () => {
    let newPost = {
        id:4,
        post: state.profileItems.textArea,
    }
    state.profileItems.post.push(newPost)
    state.profileItems.textArea = ''
    rerenderReactApp()
}
export const updatePostText = (text) => {
    state.profileItems.textArea = text
    rerenderReactApp()
}

//Добовление и обновление поста во вкладке Dialogs
export const addPostDialog = () => {
    let text = {
        id: 4,
        name: state.dialogItems.textArea
    }
    state.dialogItems.name.push(text)
    rerenderReactApp()
    state.dialogItems.textArea = ''
}
export const updatePostTextDialog = (text) => {
    state.dialogItems.textArea = text
    rerenderReactApp()
}

let rerenderReactApp = () => {
    console.log('rerenderReactApp')
}

export let subscribable = (observer) => {
    rerenderReactApp = observer
}


export default state
window.state = state