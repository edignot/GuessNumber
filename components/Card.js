import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // IOS shadows
    shadowRadius: 10,
    shadowOpacity: 0.1,
    backgroundColor: 'white',
    // android shadow
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
})
