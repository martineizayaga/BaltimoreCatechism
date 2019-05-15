import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem, Text, Card } from 'react-native-elements';
import { ImageBackground, Title, Overlay, Caption, Tile } from '@shoutem/ui';



export default class OneLessonScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title'),
        }
    };

    render() {
        const { navigation } = this.props;
        const lessons = navigation.getParam('lessons')
        return (
            <ScrollView style={styles.container}>
                <ImageBackground
                    styleName="featured"
                    source={ require('../../assets/images/lessons/LessonFirst.jpg') }
                >
                    <Tile>
                        <Overlay>
                            <Text styleName="md-gutter-bottom">Lesson First</Text>
                            <Text>On the End Of Man</Text>
                        </Overlay>
                    </Tile>
                </ImageBackground>
                {
                  lessons.map((item, i) => (
                    <Card key={item.number}>
                        <View key={item.number} style={styles.question_container}>
                            <Text style={styles.question} h4>{ item.question }</Text>
                            <Text style={styles.answer}>{ item.answer }</Text>
                        </View>
                    </Card>
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
    question_container: {
        justifyContent: 'center',
        marginHorizontal: 10
    },
    question: {

    },
    answer: {
        marginBottom: 20
    }
});
