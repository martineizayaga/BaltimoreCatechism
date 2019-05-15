import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const list = [
  {
    title: "Lesson First",
    subtitle: "On the End of Man",
    art: {
      file_name: "LessonFirst.jpg",
      title: "The Creation of Adam",
      artist: "Michelangelo",
      styleName: "large-ultra-wide"
    }
  },
  {
    title: "Lesson Second",
    subtitle: "On God and His Perfections"
  },
  {
    title: "Lesson Third",
    subtitle: "On the Unity and Trinity of God"
  },
  {
    title: "Lesson Fourth",
    subtitle: "On the Angels and Our First Parents"
  }
]

const lessons = [
  {
    number: 1,
    question: "Who made the world?",
    answer: "God made the world."
  },
  {
    number: 2,
    question: "Who is God?",
    answer: "God is the creator of heaven and earth, and of all things"
  },
  {
    number: 3,
    question: "What is man?",
    answer: "Man is a creature composed of body and soul, and made to the image and likeness of God."
  },
  {
    number: 4,
    question: "Why did God make you?",
    answer: "God made me to know Him, to love Him, and to serve Him in this world, and to be happy with Him forever in the next."
  },
  {
    number: 5,
    question: "What must we do to save our souls?",
    answer: "To save our souls, we must worship God by faith, hope, and charity; that is, we must believe in Him, hope in Him, and love Him with all our heart."
  },
  {
    number: 6,
    question: "How shall we know the things which we are to believe?",
    answer: "We shall know the things which we are to believe from the Catholic Church, through which God speaks to us."
  },
  {
    number: 7,
    question: "Where shall we find the chief truths which the Church teaches?",
    answer: "We shall find the chief truths which the Church teaches in the Apostles' Creed."
  },
  {
    number: 8,
    question: "Say the Apostles' Creed",
    answer: "I believe in God, the Father Almighty, Creator of heaven and earth; and in Jesus Christ, His only Son, our Lord; who was conceived by the Holy Ghost, born of the Virgin Mary, suffered under Pontius Pilate, was crucified; died, and was buried. He descended into hell: the third day He arose again from the dead: He ascended into heaven, and sitteth at the right hand of God, the Father Almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Ghost, the Holy Catholic Church, the communion of Saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen."
  }
]

export default class ListOfLessonsScreen extends React.Component {
  static navigationOptions = {
    title: 'Lessons',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              bottomDivider={true}
              chevron={true}
              onPress={() => this.props.navigation.navigate('OneLessonScreen', {
                  lessons: lessons,
                  title: item.title,
                  subtitle: item.subtitle,
                  art: item.art
                })}
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
