import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView, View, Text } from 'react-native'
import { clientsFetch } from '../actions'
import ListItem from './ListItem'


class ClientList extends Component {

  componentWillMount() {
    this.props.clientsFetch()

    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps){
    this.createDataSource(nextProps)
  }

  createDataSource({ clients }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(clients)
  }

  renderRow(client) {
    return <ListItem client={client} />
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}


const mapStateToProps = state => {
  const clients = _.map(state.clients, (val, uid) => {
    return { ...val, uid }
  })

  return { clients }
}

export default connect(mapStateToProps, { clientsFetch } )(ClientList)
