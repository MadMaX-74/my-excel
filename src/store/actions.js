import {TABLE_RESIZE} from '@/store/types';

export function tableResize(data) {
    return {
        type: TABLE_RESIZE,
        data
    }
}
