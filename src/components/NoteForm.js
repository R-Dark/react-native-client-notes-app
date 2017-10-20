import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { CardSection, Input } from './common'
import { clientUpdate } from '../actions'
import { connect } from 'react-redux'


class NoteForm extends Component {
  render() {
    return (
    <View>
      <CardSection>
        <Input
          label="Name:"
          placeholder="Jane"
          value={this.props.name}
          onChangeText={value => this.props.clientUpdate({ prop: 'name', value })}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Note:"
          value={this.props.notes}
          onChangeText={value => this.props.clientUpdate({ prop: 'notes', value })}
        />
      </CardSection>
    </View>
  )}
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  }
}

const mapStateToProps = (state) => {
  const { name, notes } = state.noteForm

  return { name, notes }
}

export default connect(mapStateToProps, {clientUpdate} )(NoteForm)
