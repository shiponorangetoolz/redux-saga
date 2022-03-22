import {all, call,put,takeEvery} from 'redux-saga/effects';
import {getContactsListSuccess, getContactListError} from '../reducers/contactSlice';
import {fetchUserData} from '../../Api/contactApi'

function* getContactListFetch() {
    try {
        const contacts = yield call( fetchUserData );
        const formattedContactsQuery = contacts.slice(0,10);
        yield put(getContactsListSuccess(formattedContactsQuery));
    } catch (error) {
        yield put(getContactListError());
    }
    
}

function* contactWatcher() {
    yield takeEvery('contacts/getContactListFetch',getContactListFetch)
}

export default function* contactSaga() {
    yield all([
        contactWatcher()
    ])
}


