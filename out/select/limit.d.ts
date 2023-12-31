import { SQL_Value } from '../sql-parser';
import firebase from 'firebase/app';
export declare function applyLimit(queries: firebase.firestore.Query[], astLimit: SQL_Value): firebase.firestore.Query[];
export declare function applyLimitLocally(docs: firebase.firestore.DocumentData[], astLimit: SQL_Value): firebase.firestore.DocumentData[];
