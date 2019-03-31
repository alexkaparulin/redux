import React, { Component } from 'react'
import { connect } from 'react-redux'

import Counter from './components/counter/Counter.view'

import { increment, decrement, onReset } from '../src/components/counter/Counter.action'
import Colorpicker from './components/colorPicker/Colorpicker.view';
import Colordisplay from './components/colorDisplay/Colordisplay.view';
import { selectColor } from './components/colorPicker/Colorpicker.action';
import Datacruncher from './components/dataCruncher/Datacruncher.view';
import { fetchingUserData} from './components/dataCruncher/Datacruncher.action'

class App extends Component {

	render() {
		const { 
			counter,
			doIncrement, 
			doDecrement,
			doReset,
			doChangeColor,colorPick,
			doFetchData,dataCruncher
		  } = this.props;
		  
		return (
			<div>
				<h1>React Redux Counter</h1>
				<Counter
					value={counter}
					onIncrement={doIncrement}
					onDecrement={doDecrement}
					onReset={doReset}
				/>
				<Colorpicker onchange={doChangeColor}/>
				<Colordisplay chosenColor={colorPick}/>
				<Datacruncher fetchData={doFetchData} user={dataCruncher.user}/>
			</div>
		)
	}

}

function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps:',state);
	const { counter,colorPick,dataCruncher } = state;

	return {
		counter:counter,
		colorPick:colorPick,
		dataCruncher:dataCruncher
	}
}
function mapDispatchToProps(dispatch) {

	return {
		doIncrement: ()=> dispatch( increment() ),
		doDecrement: ()=> dispatch( decrement() ),
		doReset: ()=> dispatch( onReset() ),
		doChangeColor: (color)=> dispatch(selectColor(color)),
		doFetchData:()=> dispatch(fetchingUserData())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

