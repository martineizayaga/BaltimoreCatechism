import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem, Text } from 'react-native-elements';



export default class OnePrayerScreen extends React.Component {
    

    render() {
        const { navigation } = this.props
        const title = navigation.getParam('title')
        const body = navigation.getParam('body')
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Text h1>{title}</Text>
                    <Text>{body}</Text>
                </View>
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
