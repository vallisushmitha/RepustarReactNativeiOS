import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Investigate extends React.Component {
    static navigationOptions = {
        title: 'Investigate',
        header: null
    };

    FunctionToOpenSignIn = () => {
        this.props.navigation.push('SignIn');

    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={styles.container}>
                    <View style={styles.image}>
                        <Image
                            source={require('./assets/applogo.png')} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.TextStyles}>Investigate</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.investigatedesc}>See something on the internet or social</Text>
                        <Text style={styles.investigatedesc}>media that you find questionable?</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image style={styles.investigateimage}
                            source={require('./assets/Repustar_illustrations.png')} />
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Next" onPress={this.FunctionToOpenSignIn} color="#FFFFFF" />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#313131',
        alignItems: 'center'
    },
    TextStyles: {
        flexDirection: "column",
        textAlign: 'center',
        marginTop: 30,
        color: 'white'
    },
    investigatedesc: {
        flexDirection: "column",
        textAlign: 'center',
        color: 'white'
    },
    image: {
        flexDirection: "column",
        width: 40,
        height: 60,
        marginTop: 60
    },
    investigateimage: {
        justifyContent: 'flex-start',
        flexDirection: "column",
        width: 300,
        height: 250
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        width: 220,
        height: 40,
        marginBottom: 40,
        backgroundColor: '#157EFA',
        borderRadius: 5
    }
});
