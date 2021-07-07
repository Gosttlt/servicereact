import { productAPI } from "api";

const SET_MODEL = 'productReducer/SET_MODEL'
const SET_DEVICE = 'productReducer/SET_DEVICE'
const SET_COMPANY = 'productReducer/SET_COMPANY'
const SET_LOAD_COMPANY = 'productReducer/SET_LOAD_COMPANY'
const SET_LOAD_DEVICE = 'productReducer/SET_LOAD_DEVICE'
const SET_IS_LOADING = 'productReducer/SET_IS_LOADING'
const SET_IS_LOADING_SERVICE = 'productReducer/SET_IS_LOADING_SERVICE'
const SET_LOAD_MODEL = 'productReducer/SET_LOAD_MODEL'
const SET_CURRENT_SERVICE = 'productReducer/SET_CURRENT_SERVICE'

let initialState = {
    isLoading: false,
    isLoadingService: false,
    rowsDevice: [
        { key: 'iphone', name: 'iPhone', img: 'apple/iphone.jpg', keyCompany: 'apple' },
    ],
    rowsModels: [
        { key: 'mackbookpro', name: 'MackBook Pro', deviceKey: 'mackbook', typeDevice: 'book' },
    ],
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
    company: [
        { key: 'apple', name: 'Apple', img: 'apple/apple.jpeg' },
    ],
    device: [
        { key: 'iphone', name: 'iPhone', img: 'apple/iphone.jpg', keyCompany: 'apple' }
    ],
    models: [
        { key: 'iphone5s', name: 'iPhone 5s', deviceKey: 'iphone', typeDevice: 'mob' },
    ],
    activityWatcher: {
        model: 'iphone5s',
        device: 'iphone',
        company: 'apple'
    }
}

const productPeducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_MODEL:
            return {
                ...state,
                activityWatcher: {
                    ...state.activityWatcher,
                    model: action.model
                },
            }
        case SET_DEVICE:
            return {
                ...state,
                activityWatcher: {
                    ...state.activityWatcher,
                    device: action.device
                },
                rowsModels: state.models.filter(r => r.deviceKey === action.device),
            }
        case SET_COMPANY:
            return {
                ...state,
                activityWatcher: {
                    ...state.activityWatcher,
                    company: action.company,
                },
                rowsDevice: state.device.filter(r => r.keyCompany === action.company),
            }
        case SET_LOAD_COMPANY:
            return {
                ...state,
                company: [...action.data]
            }
        case SET_LOAD_DEVICE:
            return {
                ...state,
                device: [...action.data]
            }
        case SET_LOAD_MODEL:
            return {
                ...state,
                models: [...action.data]
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
export const setActiveModel = (model) => ({ type: SET_MODEL, model });
export const setActiveDevice = (device) => ({ type: SET_DEVICE, device });
export const setActiveCompany = (company) => ({ type: SET_COMPANY, company });
export const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, isLoading });
export const setIsLoadingService = (isLoading) => ({ type: SET_IS_LOADING_SERVICE, isLoading });
export const setCurrentService = (services) => ({ type: SET_CURRENT_SERVICE, services })

export const setLoadCompanyAndDevice = () => async (dispatch) => {
    dispatch(setIsLoading(true))
    let dataCompany = await productAPI.getCompany()
    let dataDevice = await productAPI.getDevice()
    let dataModel = await productAPI.getModel()
    let dataService = await productAPI.getCurrentModel({ model: 'iphone5s' })
    dispatch(setIsLoading(false))
    dispatch({ type: SET_LOAD_COMPANY, data: dataCompany.data })
    dispatch({ type: SET_LOAD_DEVICE, data: dataDevice.data })
    dispatch({ type: SET_LOAD_MODEL, data: dataModel.data })
    dispatch(setActiveCompany('apple'))
    dispatch(setActiveDevice('iphone'))
    dispatch(setActiveModel('iphone5s'))
    dispatch(setCurrentService(dataService))
}
export const setLoadServices = model => async (dispatch) => {
    dispatch(setIsLoadingService(true))
    let data = await productAPI.getCurrentModel({ model })
    dispatch(setIsLoadingService(false))
    dispatch(setCurrentService(data))
    dispatch(setActiveModel(model))
}





export default productPeducer