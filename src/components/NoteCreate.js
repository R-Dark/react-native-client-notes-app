import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clientUpdate, noteCreate } from '../actions'
import { Card, CardSection, Input, Button } from './common'
import NoteForm from './NoteForm'

class NoteCreate extends Component {

  onButtonPress() {
    const {name, notes} = this.props;

    this.props.noteCreate({ name, notes })
  }

  render() {
    return (
      <Card>
        <NoteForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Add Note
          </Button>
        </CardSection>

      </Card>
    )
  }
}


const mapStateToProps = (state) => {
  const { name, notes } = state.noteForm

  return { name, notes }
}

export default connect(mapStateToProps, { clientUpdate, noteCreate })(NoteCreate)

// <CardSection>
//   <Picker
//     style={{ flex: 1 }}
//     selectedValue={this.props.shift}
//     onValueChange={value => this.props.clientUpdate({ prop: 'shift', value }) }
//   >
//     <Picker.Item label='Public' value='Public' />
//     <Picker.Item label='Private' value='Private' />
//   </Picker>
// </CardSection>
