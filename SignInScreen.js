import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

export default class SignInScreen extends React.Component {

    static navigationOptions = {
        title: 'SignIn',
        header: null
    };

    FunctionToClickSignIn = () => {
        this.props.navigation.push('Search');

    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={styles.container}>
                    <View style={styles.logo}>
                        <Image
                            source={require('./assets/applogo.png')} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.TextStyles}>Sign In</Text>
                    </View>
                    <View style={{ flex: 1, width: '93%' }}>
                        <TextInput
                            placeholder="Email"
                            style={styles.textInput_Style}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={styles.signinbutton}>
                        <Button title="SignIn" onPress={this.FunctionToClickSignIn} color="#FFFFFF" />
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: "column"
    },
    logo: {
        flex: 1,
        flexDirection: "column",
        width: 40,
        height: 60,
        marginTop: 60
    },
    TextStyles: {
        flexDirection: "column",
        textAlign: 'center',
        marginTop: 30,
        color: 'black'
    },
    textInput_Style:
    {
        paddingLeft: 15,
        height: 40,
        borderColor: '#6197ED',
        borderWidth: 0.5,
        marginTop: 20,
        backgroundColor: '#fff',
        textAlign: 'left',
        borderRadius: 5
    },
    signinbutton: {
        flex: 0.5,
        flexDirection: "column",
        justifyContent: 'center',
        width: '90%',
        height: 40,
        alignItems: 'center',
        backgroundColor: '#157EFA',
        borderRadius: 5
    }
});