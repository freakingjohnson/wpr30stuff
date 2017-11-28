// state
const initialState = {
    username: '',
    password: '',
    listingName: '',
    listingDesc: '',
    listingAddress: '',
    city: '',
    state: '',
    zip: '',
    imgUrl: '',
    loanAmount: '',
    monthlyMortgage: '',
    desiredRent: '',
    displayListing: {}
}
// action types
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const UPDATE_LISTING_NAME = 'UPDATE_LISTING_NAME';
const UPDATE_LISTING_DESC = 'UPDATE_LISTING_DESC';
const UPDATE_LISTING_ADDRESS = 'UPDATE_LISTING_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMG_URL = 'UPDATE_IMG_URL';
const UPDATE_LOANAMOUNT = 'UPDATE_LOAN_AMOUNT';
const UPDATE_MONTHLY_MORTGAGE = 'UPDATE_MONTHLY_MORTGAGE';
const UPDATE_DESIRED_RENT = 'UPDATE_DESIRED_RENT';
// action creators
export function updateUsername(user) {
    return {
        type: UPDATE_USERNAME,
        payload: user
    }
}
export function updatePassword(pass) {
    return {
        type: UPDATE_PASSWORD,
        payload: pass
    }
}
export function updateListingName(name) {
    return {
        type: UPDATE_LISTING_NAME,
        payload: name
    }
}
export function updateListingDesc(desc) {
    return {
        type: UPDATE_LISTING_DESC,
        payload: desc
    }
}
export function updateListingAddress(address) {
    return {
        type: UPDATE_LISTING_ADDRESS,
        payload: address
    }
}
export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateState(listingState) {
    return {
        type: UPDATE_STATE,
        payload: listingState
    }
}
export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}
export function updateImgUrl(url) {
    return {
        type: UPDATE_IMG_URL,
        payload: url
    }
}
export function updateLoanAmount(loan) {
    return {
        type: UPDATE_LOANAMOUNT,
        payload: loan
    }
}
export function updateMonthlyMortgage(mortgage) {
    return {
        type: UPDATE_MONTHLY_MORTGAGE,
        payload: mortgage
    }
}
export function updateDesiredRent(rent) {
    return {
        type: UPDATE_DESIRED_RENT,
        payload: rent
    }
}
// reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USERNAME:
        return Object.assign({}, state, { user: action.payload });        
        case UPDATE_PASSWORD:
        return Object.assign({}, state, { pass: action.payload });
        case UPDATE_LISTING_NAME:
        return Object.assign({}, state, { name: action.payload });
        case UPDATE_LISTING_DESC:
        return Object.assign({}, state, { desc: action.payload });
        case UPDATE_LISTING_ADDRESS:
        return Object.assign({}, state, { address: action.payload });
        case UPDATE_CITY:
        return Object.assign({}, state, { city: action.payload });
        case UPDATE_STATE:
        return Object.assign({}, state, { listingState: action.payload });
        case UPDATE_ZIP:
        return Object.assign({}, state, { zip: action.payload });
        case UPDATE_IMG_URL:
        return Object.assign({}, state, { url: action.payload });
        case UPDATE_LOANAMOUNT:
        return Object.assign({}, state, { loan: action.payload });
        case UPDATE_MONTHLY_MORTGAGE:
        return Object.assign({}, state, { mortgage: action.payload });
        case UPDATE_DESIRED_RENT:
        return Object.assign({}, state, { rent: action.payload });
        default:
            return state;
    }
}
export default reducer