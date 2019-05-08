import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class TheLordsPrayer extends React.Component {
  static navigationOptions = {
    title: "The Lord's Prayer",
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
