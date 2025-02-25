import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const Payment = ()=>{
    const navigation = useNavigation();
    return(
        <View  style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Profile')}
                 style= {styles.btnBack}>
                    <Ionicons name="arrow-back" size={24} color='gray'/>
                </TouchableOpacity>
                <Text style={styles.title}>Payment</Text>
            </View>

            <View style= {styles.creadit}>
                <Text style= {styles.titltCard}>Creadit Card</Text>
                
                <LinearGradient
      colors={['#262B33', '#0C0F14']} // Màu gradient từ cam đến nâu
      start={{ x: 0, y: 0 }} // Bắt đầu từ góc trên trái
      end={{ x: 1, y: 1 }} // Kết thúc ở góc dưới phải
      style= {styles.card}
    >

        <View style ={styles.cardHeader}>
            <Image source={require('../assets/images/sim.png')}/>
            <Image source={require('../assets/images/visa.png')}/>
        </View>

        <View style={styles.cardContent}>
            <Text style={styles.numberCard}>0 1 2 3   4 5 6 7   8 9 1 2   5 6 7 8</Text>
        </View>

        <View style= {styles.cardFooter}>
            <View style={{marginLeft: 10}}>
                <Text style= {styles.text1}>Card Holder Name</Text>
                <Text style= {styles.text2}>Dinh Gia Bao</Text>
            </View>

            <View style={{marginRight: 10}}>
                <Text style= {styles.text1}>Expiry Date</Text>
                <Text style= {styles.text2}>16/08</Text>
            </View>
        </View>
     
    </LinearGradient>

            </View>
{/* hết phần thẻ visa */}

            <View style={{marginTop: 20, alignItems: 'center'}}>
                <TouchableOpacity style={styles.btn}>
                <LinearGradient
      colors={['#262B33', '#0C0F14']} // Màu gradient từ cam đến nâu
      start={{ x: 0, y: 0 }} // Bắt đầu từ góc trên trái
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
      >
      <Ionicons name="card" size={30} color='#D17842' style={{marginLeft: 10}}/>
      <Text style={styles.text3}>Wallet</Text>
      </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 15, alignItems: 'center'}}>
                <TouchableOpacity style={styles.btn}>
                <LinearGradient
      colors={['#262B33', '#0C0F14']} // Màu gradient từ cam đến nâu
      start={{ x: 0, y: 0 }} // Bắt đầu từ góc trên trái
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
      >
      <Image source={require('../assets/images/ggpay.png')} style={{marginLeft: 10}}/>
      <Text style={styles.text3}>Google Pay</Text>
      </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 15, alignItems: 'center'}}>
                <TouchableOpacity style={styles.btn}>
                <LinearGradient
      colors={['#262B33', '#0C0F14']} // Màu gradient từ cam đến nâu
      start={{ x: 0, y: 0 }} // Bắt đầu từ góc trên trái
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
      >
       <Image source={require('../assets/images/apple.png')} style={{marginLeft: 10}}/>
      <Text style={styles.text3}>Apple Pay</Text>
      </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 15, alignItems: 'center'}}>
                <TouchableOpacity style={styles.btn}>
                <LinearGradient
      colors={['#262B33', '#0C0F14']} // Màu gradient từ cam đến nâu
      start={{ x: 0, y: 0 }} // Bắt đầu từ góc trên trái
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
      >
       <Image source={require('../assets/images/amazon.png')} style={{marginLeft: 10}}/>
      <Text style={styles.text3}>Amazon Pay</Text>
      </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <View>
                    <Text style={styles.text4}>Price</Text>
                    <Text style={{color: '#D17842', fontSize: 19, fontWeight: '600'}}>$
                        <Text style={styles.text6}> 5.5</Text>
                    </Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.btnPay}>
                        <Text style={styles.text5}>Pay from Credit Card</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'black'
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
        marginRight: 120,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        color: 'white'
    },
    creadit:{
        height: 300,
        borderWidth: 1,
        borderColor: '#D17842',
        marginHorizontal: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    titltCard: {
        fontSize: 17,
        color: 'white',
        top: 10,
        left: 20,
        position: 'absolute'
    },
    card: {
        width: '90%',
        height: '80%',
        borderRadius:  20,
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    cardHeader: {
        flexDirection: 'row',
       
        justifyContent: 'space-between',
        padding: 10
    },
    cardContent:  {
        padding: 20
    },
    numberCard: {
        fontSize: 20,
        color: 'white'
    }, 
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text1:{
        fontSize: 10,
        color: 'gray'
    },
    text2: {
        fontSize: 16,
        color: 'white'
    },
    btn:{
        width: '90%',
        height: 50,
        borderRadius:20
    },
    gradient: {
        width: '100%',
        height: '100%',
        borderRadius:20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text3:{
        marginLeft: 15,
        fontSize: 15,
        color:'white',
    },
    footer:{
        marginTop: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center'
    },
    btnPay:{
        width: 200,
        height: 50,
        backgroundColor: '#D17842',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text5:{
        color: 'white', 
        fontSize: 16,
        fontWeight: '600'
    },
    text4: {
        color: 'gray',
        fontSize: 15,
    },
    text6: {
        color: 'white',
        fontSize: 19,
        marginLeft: 5
    }
})
export default Payment;