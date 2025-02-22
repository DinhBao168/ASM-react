import { useState } from "react";
import { Image, ImageBackground, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Setting = () => {
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRetypePassword, setShowRetypePassword] = useState(false);

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.content}
                source={require('../assets/images/black.png')}
                resizeMode="cover" >
                
                <View style={styles.header}>
                    <TouchableOpacity style={styles.btnBack}>
                        <Ionicons name="return-down-back" size={24} color='white'/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Setting</Text>
                </View>

                <View style={styles.image}>
                    <Image
                        source={require('../assets/images/Intersect.png')}
                    />
                </View>

                <View>
                    <TextInput
                        placeholder="Your name"
                        style={styles.input}
                        placeholderTextColor="gray" 
                    />
                    <TextInput
                        placeholder="Your Email"
                        style={styles.input}
                        placeholderTextColor="gray" 
                    />
                    <View style={styles.passwordContainer}>
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={!showPassword}
                            value={password}
                            placeholderTextColor="gray" 
                            onChangeText={setPassword}
                            style={styles.input}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                            <Ionicons name={showPassword ? "eye-off" : "eye"} size={20} color="gray" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            placeholder="Re-type password"
                            placeholderTextColor="gray" 
                            secureTextEntry={!showRetypePassword}
                            value={retypePassword}
                            onChangeText={setRetypePassword}
                            style={styles.input}
                        />
                        <TouchableOpacity onPress={() => setShowRetypePassword(!showRetypePassword)} style={styles.eyeIcon}>
                            <Ionicons name={showRetypePassword ? "eye-off" : "eye"} size={20} color="gray" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style = {styles.btnSave}>
                        <Text style = {styles.save}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    content: {
        flex: 1,
        paddingTop: Platform.OS === "ios" ? -44 : 0,
    },
    header: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnBack: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#21262E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 27,
        color: 'white',
        marginLeft: 120,
        fontWeight: 'bold'
    },
    image: {
        alignItems: 'center',
        marginTop: 50,
    },
    input: {
        marginHorizontal: 30,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        paddingLeft: 10,
        borderRadius: 5,
        color: 'white'
    },
    passwordContainer: {
        position: 'relative',
    },
    eyeIcon: {
        position: 'absolute',
        right: 40,
        top: 35,
    }, 
    btnSave: {
       backgroundColor: '#D17842',
       height: 50,
       marginHorizontal: 30,
       marginTop: 40,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 15,  
    },
    save: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Setting;
