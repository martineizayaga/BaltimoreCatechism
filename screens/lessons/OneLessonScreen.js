import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem, Text } from 'react-native-elements';



export default class OneLessonScreen extends React.Component {
    

    render() {
        const { navigation } = this.props;
        const first_lesson = navigation.getParam('first_lesson')
        return (
            <ScrollView style={styles.container}>
                {
                  first_lesson.map((item, i) => (
                    <View key={item.number}>
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
    question: {

    },
    answer: {
        marginBottom: 20
    }
});
