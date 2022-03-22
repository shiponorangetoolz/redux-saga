import {all, call,put,takeEvery} from 'redux-saga/effects';
import {getContactsListSuccess} from '../reducers/contactSlice';

function* getContactListFetch() {
    const contacts = yield call( ()=> fetch('https://jsonplaceholder.typicode.com/users') );
    const formattedContacts = yield contacts.json();
    const formattedContactsQuery = formattedContacts.slice(0,10);
    yield put(getContactsListSuccess(formattedContactsQuery));
}

function* contactWatcher() {
    yield takeEvery('contacts/getContactListFetch',getContactListFetch)
}

export default function* contactSaga() {
    yield all([
        contactWatcher()
    ])
}


