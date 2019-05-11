import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem, Text } from 'react-native-elements';



export default class OneLessonScreen extends React.Component {
    

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
    }
});
