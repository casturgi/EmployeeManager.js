import React, { Component } from 'react';
import { Text,TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSeciton } from './common';

class ListItem extends Component {
	onRowPress() {
		Actions.employeeEdit({ employee: this.props.employee }); 
	}

	render() {
		const { name } = this.props.employee;

		return (
			<TouchableWithoutFeedback onPress={ this.onRowPress.bind(this) }>
				<View style={ styles.containerStyle }>
					<Text>{ name }</Text>
				</ View>
			</ TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	},
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};

export default ListItem;