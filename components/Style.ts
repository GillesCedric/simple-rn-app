import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	scrollView: {
		marginTop: 10,
		paddingRight: 15
	}
});

export const imageViewStyles = StyleSheet.create({
	containerFirst: {
		marginTop: 10
	},
	container: {
		marginTop: 30
	},
	titleText: {
		fontSize: 18,
		marginBottom: -10,
	},
	img: {
		width: 300,
		height: 200,
	}
});

export const searchInputStyles = StyleSheet.create({
	input: {
		width: 300,
		height: 70,
		paddingLeft: 15,
		fontSize: 20,
		backgroundColor: '#fafafa',
		borderColor: '#fafafa',
		borderRadius: 10,
		marginBottom: 10,
		marginTop: 60,
	},
	button: {
		paddingVertical: 12,
		paddingHorizontal: 42,
		borderRadius: 15,
		backgroundColor: '#ffed4e',
		marginLeft: "35%"
	},
	text: {
		fontSize: 22,
		fontWeight: 'bold',
		letterSpacing: 0.5,
		color: 'white',
	}
});