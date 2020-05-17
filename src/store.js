import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import dataReducer from './reducers/dataReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
	data: dataReducer,
	filter: filterReducer,
})

const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

export default store