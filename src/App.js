import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTickers } from './reducers/tickersReducer'
import { fetchFlairs } from './reducers/dataReducer'
import Navigation from './components/Navigation'
import RedditSearchForm from './components/RedditSearchForm'
import QuoteSearchForm from './components/QuoteSearchForm'
import About from './components/About'
import DisplayResult from './components/DisplayResult'
import { WSB, REDDIT_TAB, STOCK_TAB, ABOUT_TAB } from './utils/constants'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchFlairs(WSB))
		dispatch(updateTickers())
	}, [dispatch])

	const curTab = useSelector(state => state.meta.navigation_tab)
	let component
	switch (curTab) {
	case REDDIT_TAB:
		component = <RedditSearchForm/>
		break
	case STOCK_TAB:
		component = <QuoteSearchForm/>
		break
	case ABOUT_TAB:
		component = <About/>
		break
	default:
	}

	return (
		<div className="App">
			<Navigation/>
			{component}
			{curTab !== ABOUT_TAB && <DisplayResult/>}
		</div>
	)
}

export default App
