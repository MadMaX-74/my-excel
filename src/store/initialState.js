import {defaultStyles, defaultTitle} from '@/constants';
import {clone} from '@core/utils';

const defaultState = {
    rowState: {},
    colState: {},
    dataState: {},
    styleState: {},
    currentText: '',
    currentStyles: defaultStyles,
    title: defaultTitle,
    openDate: new Date().toJSON()
}
const normalize = state => ({
    ...state,
    currentStyles: defaultStyles,
    currentText: ''
})
export function normalizeInitialState(state) {
    return state ? normalize(state) : clone(defaultState)
}
