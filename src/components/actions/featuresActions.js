export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export function addFeature(feature) {
    return { type: 'ADD_FEATURE', payload: feature };
}

export function removeItem(feature) {
    return { type: 'REMOVE_FEATURE', payload: feature }
}