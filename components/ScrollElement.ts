import { Animated } from 'react-native';

/**
 * @file this file contains all the types of the application
 * @since 12/11/2021
 * @author Gilles Cedric
 */
export interface SearchInputProps {
	text: string,
	onButtonPress: () => void,
	onChangeText: (text: string) => void,
	onSubmitEditing?: () => void
}

export interface ImageViewProps {
	text: string,
	img: string,
	number: number
}

export interface SearchInputState {
	value: string
}

export interface AppState extends SearchInputState {
	search: string,
	images: Array<ScrollElement>,
}

export type ScrollElement = {
	key: string,
	value: string
}

export interface FadeInAnimationProps {
	delay?: number
}

export interface FadeInAnimationState {
	pan: Animated.ValueXY
}