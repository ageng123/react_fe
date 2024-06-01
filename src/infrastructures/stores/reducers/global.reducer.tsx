import { Action } from "redux"
import { IGlobalAction } from "../interfaces/global.type"

const initialState = {
    reload: 0,
    chatIndex: "0"
}
const globalReducer = (state: any, action: IGlobalAction) => {
    switch(action.type){
        case "RELOAD_CHAT":
            return {
                ...state,
                reload: action?.reload ?? state.reload + 1
            }
        case "CHAT_INDEX":
            return {
                ...state,
                chatIndex: action?.chatIndex ?? state.chatIndex
            }
        default:
            return state
    }
}
export default globalReducer