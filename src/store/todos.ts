import { GetterTree} from 'vuex'
import { State } from '../types'

export const state: State = {
    todos: [
        { text: 'Buy milk1', checked: false },
        { text: 'Buy milk2', checked: true },
        { text: 'Buy milk3', checked: true }
    ]
}

export const getters:GetterTree<State, any> = {
    todos: (state) => state.todos.filter(todo => !todo.checked),
    dones: (state) => state.todos.filter(todo => todo.checked)
}