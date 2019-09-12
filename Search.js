import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, search } from 'react-native';
import { SearchBar } from 'react-native-elements';
 
export default class HomeActivity extends Component {
    static navigationOptions = {
    title: 'Search',
    //To hide the NavigationBar from current Screen
    header: null
    };

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={styles.container}>
                    <View style={{ width: '100%', height: '40%', backgroundColor: '#313131' }}>
                        <Image style={styles.logo} source={require('./assets/applogo.png')} />
                        <Text style={styles.TextStyles}>Fact-Check</Text>
                        <View style={{ flex: 0.5 }}>
                </View>
                        <SearchBar style={styles.searchStyles}
                            placeholder="Type Here..."
                            onChangeText={this.updateSearch}
                            value={search}
                        />
                    </View>
                    <Text style={styles.textStyle}>
                        Hidden Navigation Bar in React Native.
                    </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center'
    },
    logo: {
        flexDirection: "column",
        width: 40,
        height: 60,
        marginTop: 30,
        marginLeft: '45%'
    },
    TextStyles: {
    flexDirection: "column",
    textAlign: 'center', 
    marginTop: 30,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
    },
    searchStyles: {
        flexDirection: "column",
        width: '93%',
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: 'white'
    }
});