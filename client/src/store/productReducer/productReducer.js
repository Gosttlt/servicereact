import { productAPI } from "api";

const SET_WATCHER = 'productReducer/SET_WATCHER'
const SET_DATA_CATEGORY = 'productReducer/SET_DATA_CATEGORY'
const SET_IS_LOADING = 'productReducer/SET_IS_LOADING'
const SET_IS_LOADING_SERVICE = 'productReducer/SET_IS_LOADING_SERVICE'
const SET_CURRENT_SERVICE = 'productReducer/SET_CURRENT_SERVICE'

let initialState = {
    isLoading: false,
    isLoadingService: false,
    rows: [
        {
            _id: 3,
            model: 'iphone5s',
            service: 'Замена аккумулятора (Original)',
            present: 'glass',
            timeRepair: '15 мин',
            price: '2 090 р.',
            oldPrice: '4 090 р.',
            discountContent: 'акция до 3 мая'
        }
    ],
    company: [{ key: 'apple', name: 'Apple', img: 'apple/apple.jpeg' }],
    device: [{ key: 'iphone', name: 'iPhone', img: 'apple/iphone.jpg', keyCompany: 'apple' }],
    models: [{ key: 'iphone5s', name: 'iPhone 5s', deviceKey: 'iphone', typeDevice: 'mob' }],
    activityWatcher: {
        model: 'iphone5s',
        device: 'iphone',
        company: 'apple'
    }
}

const productPeducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_WATCHER:
            return {
                ...state,
                activityWatcher: {
                    ...state.activityWatcher,
                    [action.cat]: action.active
                },
            }
        case SET_DATA_CATEGORY:
            return {
                ...state,
                [action.name]: [...action.dataCategory]
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_IS_LOADING_SERVICE:
            return {
                ...state,
                isLoadingService: action.isLoading
            }
        case SET_CURRENT_SERVICE:
            return {
                ...state,
                rows: action.services,
            }
        default:
            return state;
    }
}
export const setActiveWatcher = (active, cat) => ({ type: SET_WATCHER, active, cat });
const setDataCategory = (name, dataCategory) => ({ type: SET_DATA_CATEGORY, name, dataCategory });
export const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, isLoading });
export const setIsLoadingService = (isLoading) => ({ type: SET_IS_LOADING_SERVICE, isLoading });
export const setCurrentService = (services) => ({ type: SET_CURRENT_SERVICE, services })

export const setLoadCompanyAndDevice = () => async (dispatch) => {
    dispatch(setIsLoading(true))
    let dataCompany = await productAPI.getCategory('company')
    let dataDevice = await productAPI.getCategory('device')
    let dataModel = await productAPI.getCategory('models')
    let dataService = await productAPI.getCurrentModel({ model: 'iphone5s' })
    dispatch(setIsLoading(false))
    dispatch(setDataCategory('company', dataCompany))
    dispatch(setDataCategory('device', dataDevice))
    dispatch(setDataCategory('models', dataModel))
    dispatch(setActiveWatcher('apple', 'company'))
    dispatch(setActiveWatcher('iphone', 'device'))
    dispatch(setActiveWatcher('iphone5s', 'model'))
    dispatch(setCurrentService(dataService))
}
export const setLoadServices = model => async (dispatch) => {
    dispatch(setIsLoadingService(true))
    let data = await productAPI.getCurrentModel({ model })
    dispatch(setIsLoadingService(false))
    dispatch(setCurrentService(data))
    dispatch(setActiveWatcher(model, 'model'))
}





export default productPeducer