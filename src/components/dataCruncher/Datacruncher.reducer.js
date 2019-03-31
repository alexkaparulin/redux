import {FETCHING_USER_DATA,
        USER_DATA_FETCHED,
        FETCH_USER_ERROR}
         from './Datacruncher.action'


export default function dataCruncher(state={user:''},action){
    switch (action.type) {
        case FETCHING_USER_DATA:
            return { user :'fetching user data'}
        case USER_DATA_FETCHED:
            return {
                user:JSON.stringify(action.payload)
            }
        case FETCH_USER_ERROR:
            return {
                user:action.payload.message
            }
        default:
            return state;
    }
}