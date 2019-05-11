import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const list = [
  {
    title: "The Lord's Prayer",
    body: "Our Father, who art in heaven, hallowed be Thy name: Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us: and lead us not into temptation, but deliver us from evil. Amen."
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

export default class ListOfPrayersScreen extends React.Component {
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
              chevron={true}
              onPress={() => this.props.navigation.navigate('OnePrayerScreen', list[i])}
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
