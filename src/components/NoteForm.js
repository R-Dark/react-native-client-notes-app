import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { CardSection2, Input, Input2, CardSection } from './common'
import { clientUpdate } from '../actions'
import { connect } from 'react-redux'


class NoteForm extends Component {
  render() {
    return (
    <View>
        <CardSection>
          <Text style={styles.labelStyle}>
            Client:
          </Text>
          <Text style={styles.textStyle}>
            {this.props.name}
          </Text>
        </CardSection>

      <CardSection2>
        <Text style={styles.noteLabelStyle}>
          Notes:
        </Text>
        <Input2
          value={this.props.notes}
          onChangeText={value => this.props.clientUpdate({ prop: 'notes', value })}
        />
    </CardSection2>
    </View>
  )}
}

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 7,
    paddingBottom: 7
  },
  textStyle: {
    color: '#000',
    fontSize: 18,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
    lineHeight: 23
  },
  noteLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 7,
  }
};


const mapStateToProps = (state) => {
  const { name, notes } = state.noteForm

  return { name, notes }
}

export default connect(mapStateToProps, {clientUpdate} )(NoteForm)
