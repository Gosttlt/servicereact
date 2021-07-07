/** @format */

import { useDispatch, useSelector } from 'react-redux'
import Home from '.'
import {
  setActiveModel,
  setLoadCompanyAndDevice,
} from 'store/productReducer/productReducer'
import advantagesItems from 'utils/advantagesItems'
import { getIsLoading } from 'store/productReducer/selectors'
import { useCallback } from 'react'

export default function HomePageContainer() {
  const dispatch = useDispatch()

  const onSetActiveModel = () => dispatch(setActiveModel())
  const onSetLoadCompanyAndDevice = useCallback(
    () => dispatch(setLoadCompanyAndDevice()),
    [dispatch]
  )

  const onIsLoading = useSelector(getIsLoading)

  return (
    <Home
      advantagesItems={advantagesItems}
      setActiveModel={onSetActiveModel}
      setLoadCompanyAndDevice={onSetLoadCompanyAndDevice}
      isLoading={onIsLoading}
    />
  )
}
