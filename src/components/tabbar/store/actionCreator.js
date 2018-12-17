import {CHANGE_TYPE} from './actionTypes'

export const getChangeType = (selectKey) =>({
    type: CHANGE_TYPE,
    selectKey
})