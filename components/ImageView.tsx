import React, { Component } from "react";
import { Text, Image, View } from "react-native";
import { ImageViewProps } from "./ScrollElement";
import { imageViewStyles } from "./Style";

/**
 * @class ImageView
 * @description this class is the ImageView component of the application
 * @since 12/11/2021
 * @author Gilles Cedric
 */
export default class ImageView extends Component<ImageViewProps> {

	/**
	 * @constructor
	 * @param {ImageViewProps} props the default props of th application
	 */
	constructor(props: ImageViewProps) {
		super(props);
	}

	/**
	 * @method render
	 * @override
	 * @description this is the render method of the Component class
	 */
	render() {
		return (
			<View style={this.props.number > 0 ? imageViewStyles.container : imageViewStyles.containerFirst}>
				<Text
					style={imageViewStyles.titleText}
				>
					{this.props.text}
					{"\n"}
				</Text>
				<Image
					source={{
						uri: this.props.img,
					}}
					style={imageViewStyles.img}
				/>
			</View>
		);
	}
}