import {call,put,takeEvery} from 'redux-saga/effects';
import {getContactsListSuccess} from '../reducers/contactSlice';

function* workGetContactListFetch() {
    const contacts = yield call( ()=> fetch('http://localhost:8000/api/v1/contacts') );
    const formattedContacts = yield contacts.json();
    const formattedContactsQuery = formattedContacts.slice(0,10);
    yield put(getContactsListSuccess(formattedContactsQuery));
}

function* contactSaga() {
    yield takeEvery('contacts/getContactListFetch',workGetContactListFetch)
}

export default contactSaga;

