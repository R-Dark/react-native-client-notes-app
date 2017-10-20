import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { CardSection } from './common'
import { Actions } from 'react-native-router-flux'

class ListItem extends Component {
  onRowPress() {
    Actions.noteEdit({ client: this.props.client });
  }

  render() {
    const { name } = this.props.client
    const { notes } = this.props.client

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
            <Text style={styles.titleStyle}>
              {notes}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}


export default ListItem
