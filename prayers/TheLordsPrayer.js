import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem, Text } from 'react-native-elements';

export default class TheLordsPrayer extends React.Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Text h1>The Lord's Prayer</Text>
                    <Text style={styles.prayer_text}>{`Our Father, who art in heaven, hallowed be Thy name: Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us: and lead us not into temptation, but deliver us from evil. Amen.`}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    prayer_text: {
        margin: '0 auto'
    },
    prayer_container: {

    },
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
