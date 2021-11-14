import React from 'react'
import { Animated, Dimensions } from 'react-native'
import { FadeInAnimationProps, FadeInAnimationState } from './ScrollElement'

/**
 * @class FadeInAnimation
 * @description this class is used to add a FadeInAnimation 
 * @since 13/11/2021
 * @author Gilles Cedric
 */
export default class FadeInAnimation extends React.Component<FadeInAnimationProps, FadeInAnimationState> {

	/**
	 * @constructor
	 * @param {FadeInAnimationProps} props the default props of th application
	 */
	constructor(props: FadeInAnimationProps) {
		super(props)
		let dimensions = Dimensions.get('window')
		this.state = {
			pan: new Animated.ValueXY({ x: 0, y: dimensions.height })
		}
	}

	/**
	 * @method componentDidMount
	 * @override
	 * @description this is the componentDidMount method of the Component class
	 */
	componentDidMount() {
		Animated.sequence([
			Animated.delay(this.props.delay ? this.props.delay : 0),
			Animated.spring(
				this.state.pan,
				{
					toValue: { x: 0, y: 0 },
					useNativeDriver: true
				}
			)
		]).start()
	}

	/**
	 * @method render
	 * @override
	 * @description this is the render method of the Component class
	 */
	render() {
		return (
			<Animated.View style={{ transform: this.state.pan.getTranslateTransform() }}>
				{this.props.children}
			</Animated.View>
		)
	}
}