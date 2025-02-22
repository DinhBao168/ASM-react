import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';


const products = [
    {
      id: '1',
      name: 'Cappuccino',
      subname: 'With Steamed Milk',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, repellat! Quo, quam dicta quisquam vero magni, adipisci pariatur eaque assumenda expedita unde ipsum autem eius veniam possimus placeat sed perferendis',
      price: '$4.20',
      rating: 4.5,
      image: require('../assets/images/cafe1.png')
    },
    {
      id: '2',
      name: 'Cappuccino',
      subname: 'With Foam',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, repellat! Quo, quam dicta quisquam vero magni, adipisci pariatur eaque assumenda expedita unde ipsum autem eius veniam possimus placeat sed perferendis',
      price: '$4.20',
      rating: 4.2,
      image: require('../assets/images/cafe1.png')
    },
    {
      id: '3',
      name: 'Robusta Beans',
      subname: 'With Foam',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, repellat! Quo, quam dicta quisquam vero magni, adipisci pariatur eaque assumenda expedita unde ipsum autem eius veniam possimus placeat sed perferendis',
      price: '$4.20',
      rating: 4.8,
      image: require('../assets/images/cafe1.png')
    }
  ];
const App = ()=>{
    return(
        
        <View style = {styles.container}>
            <StatusBar barStyle='light-content'  backgroundColor='transparent' translucent/>
            <View style = {styles.header}>
                <TouchableOpacity style={styles.app}>
                    <Image style={styles.imageApp} source={require('../assets/images/app.png')}/>
                </TouchableOpacity>
                 
                 <Text style={styles.title}>Favourite</Text>

                <Image style={styles.person} source={require('../assets/images/Intersect.png')}/>
            </View>

            <View >
                <FlatList
                data={products}
                keyExtractor={(item)=>item.id}
                
                renderItem={({item})=>(
                    <View style = {styles.containerList} >
                       
                            <Image style={styles.imageContent} source={item.image}/>
                      
                        
                        <View style={styles.content}>
                            <View style={styles.contentText}>
                        <Text style= {styles.name}>{item.name}</Text>
                        <Text style = {styles.namePhu}>{item.subname}</Text>
                        <View style= {{flexDirection: 'row', alignItems: 'center'}}>
                            <Ionicons name="star" color='#D17842' size={24}/>
                            <Text style= {styles.star}>{item.rating}</Text>
                        </View>
                            </View>

                            <View style = {styles.content2}>
                                <View style = {styles.rowContent}>
                                    <TouchableOpacity style= {styles.btnCoffee}>
                                        <Image style={{width: 25, height: 25}}  source={require('../assets/images/Group 19.png')}/>
                                        <Text style = {styles.textCoffee}>Coffee</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style = {styles.btnMilk}>
                                        <Ionicons name="water" size={25} color='#D17842' />
                                        <Text style = {styles.textCoffee}>Milk</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity style = {styles.btnText}>
                                        <Text style = {styles.textCoffee}>Medium Roast</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                        <View style={styles.mota}>
    <LinearGradient
        colors={['#111111', '#333333']} // Màu nền gradient
        style={styles.mt}
    >
        <Text style={{color: 'white', fontWeight: 'bold'}}>Description</Text>
        <Text style={{color: 'white'}}>{item.description}</Text>
    </LinearGradient>
</View>
                    </View>

                   
                )}/>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
       
    },
    
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        marginBottom: 20,
        
    },
    app: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'

    },
    imageApp: {
        width: 20,
        height: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }, 
    person: {
        width: 30,
        height: 30,
        borderRadius: 5
    }, 
    content: {
         backgroundColor: 'rgba(0, 0, 0, 0.5)',
         position: 'absolute',
         flexDirection: 'row',
         justifyContent: 'space-between',
         width: '90%',
         bottom: 0,
         borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    imageContent:{
        width: '90%',
        height: 500,
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        
    }, 
    contentText: {
       marginLeft: 15,
       padding: 20
    },
     containerList:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 140
     },
     name: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
     },
     namePhu: {
        color: 'white',
        fontSize: 13,
        marginBottom: 20
     }, 
     star: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 5
     }, 
     content2: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
     }, 
     rowContent: {
        flexDirection: 'row',
        marginBottom: 10
     }, 
     btnCoffee: {
        width: 50,
        height: 50,
        backgroundColor: '#141921',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 7,
     }, 
     textCoffee: {
        fontSize: 11,
        color:'white',
     },
     btnMilk: {
        width: 50,
        height: 50,
        backgroundColor: '#141921',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 7,
     }, 
     btnText: {
        width: 114,
        height: 50,
        backgroundColor: '#141921',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 7,
        marginBottom: 10
     }, 
     mota:{
        width: '90%',
        height: 120,
        backgroundColor: 'white',
        position: 'absolute', 
        bottom: -100, 
        
       
     }, 
     mt: {
        padding: 17,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        
     }

})
export default App;