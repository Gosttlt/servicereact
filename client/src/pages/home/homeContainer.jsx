/** @format */

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Home from '.'
import {
  setActiveWatcher,
  setLoadCompanyAndDevice,
} from 'store/productReducer/productReducer'
import advantagesItems from 'utils/advantagesItems'
import {
  getActivityWatcher,
  getCompany,
  getDevices,
  getIsLoading,
} from 'store/productReducer/selectors'

export default function HomePageContainer() {
  const dispatch = useDispatch()

  const onSetActiveWatcher = (active, cat) => {
    dispatch(setActiveWatcher(active, cat))
  }

  const activityWatcher = useSelector(getActivityWatcher)
  const cotegoryCompany = useSelector(getCompany)
  const onIsLoading = useSelector(getIsLoading)
  const cotegoryDevices = useSelector(getDevices)

  useEffect(() => {
    dispatch(setLoadCompanyAndDevice())
  }, [dispatch])

  return (
    <Home
      advantagesItems={advantagesItems}
      cotegoryCompany={cotegoryCompany}
      cotegoryDevices={cotegoryDevices}
      isLoading={onIsLoading}
      activityWatcher={activityWatcher}
      setActiveWatcher={onSetActiveWatcher}
      city='Тольятти'
    />
  )
}
