import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const list = [
  {
    title: "The Lord's Prayer",
    nav: "TheLordsPrayer"
  },
  {
    title: "The Angelical Salutation",
    nav: "TheAngelicalSalutation"
  },
  {
    title: "The Apostle's Creed",
    nav: "TheApostlesCreed"
  },
  {
    title: "The Confiteor",
    nav: "TheConfiteor"
  },
  {
    title: "An Act of Faith",
    nav: "AnActOfFaith"
  },
  {
    title: "An Act of Hope",
    nav: "AnActOfHope"
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
              chevron={true}
              onPress={() => this.props.navigation.navigate(item.nav)}
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
