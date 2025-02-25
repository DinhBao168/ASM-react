import { Alert, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

import { useEffect, useState } from "react";

interface Favourite {
    id: string,
    name: string,
    subtitle: string,
    rating: number,
    image: string,
    tags: string[],
    roastType: string,
    description: string,
}

const App = ()=>{
    const [favourites, setFavourites] = useState<Favourite[]>([]);
    const navigation = useNavigation();

    const fetchYT = ()=>{
        fetch(`http://172.20.10.2:3000/favorites`)
        .then(res=> res.json())
        .then(data =>setFavourites(data))
        .catch(error => console.log('Lỗi khi tải dữ liệu: ' ,error))
    }

    useEffect(()=>{
        const now = navigation.addListener('focus', ()=>{
            fetchYT()
        });
        return now;
    },[navigation])

    const deleteYT = async(id: string) =>{
        try {
            const res = await fetch(`http://172.20.10.2:3000/favorites/${id}`, {
                method: 'DELETE',
            });
            if(res.ok){
                Alert.alert("Đã xóa khỏi danh sách yêu thích!");
                setFavourites(favourites.filter(item=>item.id !== id));
            }else{
                Alert.alert('Lỗi khi xóa sản phẩm')
            }
        } catch (error) {
            console.log('Lỗi server ', error)
        }
    }

   

    const renderItem = ({item} : {item: Favourite}) =>(
<TouchableOpacity
  onLongPress={()=>
    Alert.alert("Xóa sản phẩm",
        "Bạn có chắc muốn xóa khỏi sản phẩm yêu thích không",
        [
            {text: "Hủy", style: 'cancel'},
            {text: "Có", onPress: ()=>deleteYT(item.id)}
        ]
    )
  }
style = {styles.containerList} >
        <Image style={styles.imageContent}
        source={{uri: item.image}}/>
  
    
    <View style={styles.content}>
        <View style={styles.contentText}>
    <Text style= {styles.name}>{item.name}</Text>
    <Text style = {styles.namePhu}>{item.subtitle}</Text>
    <View style= {{flexDirection: 'row', alignItems: 'center'}}>
        <Ionicons name="star" color='#D17842' size={24}/>
        <Text style= {styles.star}>{item.rating}</Text>
    </View>
        </View>

        <View style = {styles.content2}>
            <View style = {styles.rowContent}>
                <TouchableOpacity style= {styles.btnCoffee}>
                    <Image style={{width: 25, height: 25}}  source={require('../assets/images/Group 19.png')}/>
                    <Text style = {styles.textCoffee}>{item.tags[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btnMilk}>
                    <Ionicons name="water" size={25} color='#D17842' />
                    <Text style = {styles.textCoffee}>{item.tags[1]}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {styles.btnText}>
                    <Text style = {styles.textCoffee}>{item.roastType}</Text>
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
</TouchableOpacity>
    )

    return(
        
        <View style = {styles.container}>
            <StatusBar barStyle='dark-content'  backgroundColor='transparent' translucent/>
            <View style = {styles.header}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Main')}
                 style={styles.app}>
                    <Image style={styles.imageApp} source={require('../assets/images/app.png')}/>
                </TouchableOpacity>
                 
                 <Text style={styles.title}>Favourite</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Setting')}>
                <Image style={styles.person} source={require('../assets/images/Intersect.png')}/>
                </TouchableOpacity>
               
            </View>

            <View >
                <FlatList
                data={favourites}
                keyExtractor={(item)=>item.id.toString()}
                
                renderItem={renderItem}/>

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