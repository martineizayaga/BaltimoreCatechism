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
    body: "Hail Mary, full of grace! the Lord is with thee: blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen."
  },
  {
    title: "The Apostle's Creed",
    body: "I believe in God, the Father Almighty, Creator of heaven and earth; and in Jesus Christ, His only Son, our Lord; who was conceived by the Holy Ghost, born of the Virgin Mary, suffered under Pontius Pilate, was crucified: died, and was buried. He descended into hell: the third day He arose again from the dead: He ascended into heaven, sitteth at the right hand of God, the Father Almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Ghost the Holy Catholic Church, the communion of Saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen."
  },
  {
    title: "The Confiteor",
    body: `I confess to Almighty God, to blessed Mary, ever Virgin, to blessed Michael the Archangel, to blessed John the Baptist, to the holy Apostles Peter and Paul, and to all the Saints, that I have sinned exceedingly in thought, word and deed, through my fault, through my fault, through my most grievous fault. Therefore, I beseech blessed Mary, ever Virgin, blessed Michael the Archangel, blessed John the Baptist, the holy Apostles Peter and Paul, and all the Saints, to pray to the Lord our God for me.

May the Almighty God have mercy on me, and forgive me my sins, and bring me to everlasting life. Amen.

May the Almighty and merciful Lord grant me pardon, absolution, and remission of all my sins. Amen.`
  },
  {
    title: "An Act of Faith",
    body: "O my God! I firmly believe that Thou art one God in three Divine Persons, Father, Son, and Holy Ghost; I believe that Thy Divine Son became man, and died for our sins, and that he will come to judge the living and the dead. I believe these and all the truths which the Holy Catholic Church teaches, because Thou hast revealed them, who canst neither deceive nor be deceived."
  },
  {
    title: "An Act of Hope",
    body: "O my God! relying on Thy infinite goodness and promises, I hope to obtain pardon of my sins, the help of Thy grace, and life everlasting, through the merits of Jesus Christ, my Lord and Redeemer."
  },
  {
    title: "An Act Of Love",
    body: "O my God! I love Thee above all things, with my whole heart and soul, because Thou art all-good and worthy of all love. I love my neighbor as myself for the love of Thee. I forgive all who have injured me, and ask pardon of all whom I have injured."
  },
  {
    title: "An Act Of Contrition",
    body: "O my God! I am heartily sorry for having offended Thee, and I detest all my sins, because I dread the loss of heaven and the pains of hell, but most of all because they offend Thee, my God, who art all-good and deserving of all my love. I firmly resolve, with the help of Thy grace, to confess my sins, to do penance, and to amend my life."
  },
  {
    title: "The Blessing Before Meals",
    body: "+ Bless us, O Lord! and these Thy gifts, which we are about to receive from Thy bounty, through Christ our Lord. Amen."
  },
  {
    title: "Grace After Meals",
    body: "+ We give Thee thanks for all Thy benefits, O Almighty God, who livest and reignest forever, and may the souls of the faithful departed through the mercy of God, rest in peace. Amen."
  },
  {
    title: "The Manner in Which a Lay Person Is to Baptize in Case of Necessity",
    body: `Pour common water on the head or face of the person to be baptized, and say while pouring it:

"I baptize thee in the name of the Father, and of the Son, and of the Holy Ghost."

N.B. Any person of either sex who has reached the use of reason can baptize in case of necessity, but the same person must say the words while pouring the water.`

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
              title={item.title}
              chevron={true}
              bottomDivider={true}
              onPress={() => this.props.navigation.navigate('OnePrayerScreen', item)}
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
