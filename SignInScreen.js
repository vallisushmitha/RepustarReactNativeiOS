import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import awsConfig from './src/aws-exports';

Amplify.configure(awsConfig);

export default class SignInScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: 'Kvana123!',
            errorMessage: ''
        };
        this.signInUser = this.signInUser.bind(this);
    }

    signInUser = () => {
        Auth.signIn(this.state.email, this.state.password)
            .then(user => { this.props.navigation.navigate('Search', user) })
            .catch(err => { this.setState({ errorMessage: err.message }) });
    };

    static navigationOptions = {
        title: 'SignIn',
        header: null
    };

    // FunctionToClickSignIn = () => {
    //     this.signInUser
    //     this.props.navigation.push('Search');
        
    // }

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
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email })}
                            
                            
                            // onFocus = { () => this.setState({email: ""}) }
                            style={styles.textInput_Style}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={styles.signinbutton}>
                        <Button title="SignIn" onPress={this.signInUser} color="#FFFFFF" />
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