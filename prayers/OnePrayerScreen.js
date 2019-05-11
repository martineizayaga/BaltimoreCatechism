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
                <View style={styles.prayer_container}>
                    <Text h3>{title}</Text>
                    <Text style={styles.body}>{body}</Text>
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
    prayer_container: {
        justifyContent: 'center',
        marginHorizontal: 10
    },
    body: {
        marginTop: "2%"
    }
});
