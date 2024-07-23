import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user'

// TODO Заменить тип any на правильный. Либо решить ошибку!
export const store: any = configureStore({
  reducer: {
    user: userReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch