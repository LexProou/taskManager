import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todoSlice'


const store = configureStore({
    reducer: {
        todo: todosSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export const AppDispatch = typeof store.dispatch

export default store