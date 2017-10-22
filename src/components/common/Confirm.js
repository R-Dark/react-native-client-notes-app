import React from 'react'
import { Text, View, Modal } from 'react-native'
import { CardSection } from './CardSection'
import { Button } from './Button'

const Confirm = ( { children, visible, onAccept, onDecline }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >

      <View style={styles.containerStyle}>

        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>

      </View>

    </Modal>
  )
}

styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}

export { Confirm }


// <Confirm
//   visible={this.state.showModal}
//   onAccept={this.onAccept.bind(this)}
//   onDecline={this.onDecline.bind(this)}
// >
//   Are you sure?
// </Confirm>
//
// onAccept() {
//   const { notes } = this.props;
//   this.props.noteDelete({ notes, uid: this.props.client.uid })
// }
//
// onDecline() {
//   this.setState({ showModal: false })
// }
