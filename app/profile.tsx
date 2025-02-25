import { StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native"
import { View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Profile = () =>{
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>

            <View style= {styles.header}>
                <TouchableOpacity
                onPress={()=>navigation.navigate("Main")}
                style={styles.btnBack}>
                    <Ionicons name="return-down-back" size={20} color='gray'/>
                </TouchableOpacity>

                <Text style={styles.title}>Setting</Text>
            </View>

            <View style={styles.content}>
                <TouchableOpacity style= {styles.item}> 
                    <Ionicons name="time-outline" color='#D17842' size={24}/>
                    <Text style={styles.text}>History</Text>
                    <Ionicons name="arrow-forward" color='gray' size={24}/>
                </TouchableOpacity>

                <TouchableOpacity style= {styles.item}> 
                    <Ionicons name="person" color='#D17842' size={24}/>
                    <Text style={styles.text}>Personal Detail</Text>
                    <Ionicons name="arrow-forward" color='gray' size={24}/>
                </TouchableOpacity>

                <TouchableOpacity style= {styles.item}> 
                    <Ionicons name="location" color='#D17842' size={24}/>
                    <Text style={styles.text}>Addreee</Text>
                    <Ionicons name="arrow-forward" color='gray' size={24}/>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>navigation.navigate('Payment')}
                style= {styles.item}> 
                    <Ionicons name="card-outline" color='#D17842' size={24}/>
                    <Text style={styles.text}>Payment Method</Text>
                    <Ionicons name="arrow-forward" color='gray' size={24}/>
                </TouchableOpacity>

                <TouchableOpacity style= {styles.item}> 
                    <Ionicons name="alert-circle" color='#D17842' size={24}/>
                    <Text style={styles.text}>About</Text>
                    <Ionicons name="arrow-forward" color='gray' size={24}/>
                </TouchableOpacity>

                <TouchableOpacity style= {styles.item}> 
                    <Ionicons name="help-circle" color='#D17842' size={24}/>
                    <Text style={styles.text}>Help</Text>
                    <Ionicons name="arrow-forward" color='gray' size={24}/>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>navigation.navigate('Login')}
                 style= {styles.item}> 
                    <Ionicons name="log-out" color='#D17842' size={24}/>
                    <Text style={styles.text}>Log out</Text>
                    <Ionicons name="arrow-forward" color='gray' size={24}/>
                </TouchableOpacity>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
    },
    btnBack:{
        width: 30,
        height: 30,
        backgroundColor: '#21262E',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 130,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        color: 'white'
    },
    text: {
        color:'white', 
        fontSize: 18,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    }, content: {
        padding: 10,
    }
})

export default Profile;