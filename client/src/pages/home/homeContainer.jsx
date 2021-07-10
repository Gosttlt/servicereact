/** @format */

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Home from '.'
import {
  setActiveCompany,
  setActiveDevice,
  setActiveModel,
  setLoadCompanyAndDevice,
} from 'store/productReducer/productReducer'
import advantagesItems from 'utils/advantagesItems'
import {
  getActivityWatcher,
  getCompony,
  getDevices,
  getIsLoading,
} from 'store/productReducer/selectors'

export default function HomePageContainer() {
  const dispatch = useDispatch()
  const onSetActiveModel = () => dispatch(setActiveModel())
  const onActiveCompany = company => dispatch(setActiveCompany(company))
  const onActiveDivece = device => dispatch(setActiveDevice(device))
  const activityWatcher = useSelector(getActivityWatcher)
  const cotegoryCompony = useSelector(getCompony)
  const onIsLoading = useSelector(getIsLoading)
  const cotegoryDevices = useSelector(getDevices)

  useEffect(() => {
    dispatch(setLoadCompanyAndDevice())
  }, [dispatch])

  return (
    <Home
      advantagesItems={advantagesItems}
      setActiveModel={onSetActiveModel}
      cotegoryCompony={cotegoryCompony}
      cotegoryDevices={cotegoryDevices}
      isLoading={onIsLoading}
      activityWatcher={activityWatcher}
      onActiveCompany={onActiveCompany}
      onActiveDivece={onActiveDivece}
      city='Тольятти'
    />
  )
}
