// components/Hello.tsx
import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SearchInputProps } from './ScrollElement';
import { searchInputStyles } from './Style';

/**
 * @class SearchInput
 * @description this class is the SearchInput component of the application
 * @since 12/11/2021
 * @author Gilles Cedric
 */
export default class SearchInput extends React.Component<SearchInputProps> {

	/**
		* @constructor
		* @param {ImageViewProps} props the default props of th application
		*/
	constructor(props: SearchInputProps) {
		super(props)
	}

	/**
	 * @method render
	 * @override
	 * @description this is the render method of the Component class
	 */
	render() {
		return (
			<View>
				<TextInput
					style={searchInputStyles.input}
					placeholder={"Quoi de neuf ?"}
					onChangeText={this.props.onChangeText}
				/>
				<TouchableOpacity style={searchInputStyles.button} onPress={this.props.onButtonPress}>
					<Text style={searchInputStyles.text}>{this.props.text}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}