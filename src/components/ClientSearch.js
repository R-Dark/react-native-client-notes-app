import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { CardSection, Card, Button, Input } from './common'

class ClientSearch extends Component {
  render() {
    return(
      <View style={{ paddingTop: '28%' }}>
        <Card>
          <CardSection>
            <Input
              placeholder='Jane Doe'
            >

            </Input>
          </CardSection>
          <CardSection>
            <Button>
              Search
            </Button>
          </CardSection>
        </Card>
      </View>
    )
  }
}

export default ClientSearch
