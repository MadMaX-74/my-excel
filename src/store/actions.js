import {
    CHANGE_TEXT,
    CHANGE_STYLES,
    TABLE_RESIZE,
    APPLY_STYLE,
    CHANGE_TITLE, TABLE_DATE
} from '@/store/types';

export function tableResize(data) {
    return {
        type: TABLE_RESIZE,
        data
    }
}
export function changeText(data) {
    return {
        type: CHANGE_TEXT,
        data
    }
}
export function changeStyles(data) {
    return {
        type: CHANGE_STYLES,
        data
    }
}
export function applyChanges(data) {
    return {
        type: APPLY_STYLE,
        data
    }
}
export function changeTitle(data) {
    return {
        type: CHANGE_TITLE,
        data
    }
}
export function tableDate() {
    return {
        type: TABLE_DATE
    }
}
