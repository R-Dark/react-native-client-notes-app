import React, { Component } from 'react'
import _ from 'lodash'
import NoteForm from "./NoteForm"
import { connect } from 'react-redux'
import { Card, CardSection, Button } from './common'
import { clientUpdate, noteSave } from '../actions'

class NoteEdit extends Component {
  componentWillMount() {
    _.each(this.props.client, (value, prop) => {
      this.props.clientUpdate({ prop, value })
    })
  }

  onButtonPress() {
    const { name, notes } = this.props;

    this.props.noteSave({ name, notes, uid: this.props.client.uid})
  }


  render() {
    return(
      <Card>
        <NoteForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Edit Note
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


export default connect(mapStateToProps, { clientUpdate, noteSave } )(NoteEdit)
