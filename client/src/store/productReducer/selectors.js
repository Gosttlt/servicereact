import { createSelector } from "reselect"

export const getIsLoading = state => state.productPeducer.isLoading
export const getCompany = state => state.productPeducer.company
export const getActivityWatcher = state => state.productPeducer.activityWatcher

const getModel = state => state.productPeducer.models
const getActivDevice = state => state.productPeducer.activityWatcher.device
export const getModels = createSelector(getModel, getActivDevice, (models, active) => {
    return models.filter(d => d.deviceKey === active)
})

const getActivCompany = state => state.productPeducer.activityWatcher.company
const getDevice = state => state.productPeducer.device
export const getDevices = createSelector(getDevice, getActivCompany, (devices, active) => {
    return devices.filter(d => d.keyCompany === active)
})
