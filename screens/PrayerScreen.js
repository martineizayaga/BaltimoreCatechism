import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const list = [
  {
    title: "The Lord's Prayer"
  },
  {
    title: "The Angelical Salutation"
  },
  {
    title: "The Apostle's Creed"
  },
  {
    title: "The Confiteor"
  },
  {
    title: "An Act of Faith"
  },
  {
    title: "An Act of Hope"
  }
]

export default class PrayerScreen extends React.Component {
  static navigationOptions = {
    title: 'Prayers',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
            />
          ))
        }
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
