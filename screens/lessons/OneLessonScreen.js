import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem, Text } from 'react-native-elements';



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
                {
                  lessons.map((item, i) => (
                    <View key={item.number} style={styles.question_container}>
                        <Text style={styles.question} h4>{ item.question }</Text>
                        <Text style={styles.answer}>{ item.answer }</Text>
                    </View>
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
