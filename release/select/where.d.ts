import firebase from 'firebase/app';
export declare function applyWhere(queries: firebase.firestore.Query[], astWhere: {
    [k: string]: any;
}): firebase.firestore.Query[];
