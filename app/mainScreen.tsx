import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  subtitle: string;
  image: string;

}


const HomeScreen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(()=>{
    
    fetch(`http://172.20.10.2:3000/products`)
    .then(response=> response.json())
    .then(data =>setProducts(data))
    
    .catch(error => console.log("Lỗi data ", error))
  }, []);

  const renderItem = ({ item }: { item: Product }) =>(
<TouchableOpacity
  onPress={()=>navigation.navigate('Detail', {products: item})}
 style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.subtitle}</Text>
            <View style={styles.row}>
            <Text style={styles.productPrice}>{item.price}$</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            </View>
           
          </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle='dark-content'/>
      <View style={styles.header1}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Profile')}
        >
          <Image style={styles.icon} source={require('../assets/images/app.png')} />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Setting')}>
           <Image style={styles.icon1} source={require('../assets/images/Intersect.png')} />
        </TouchableOpacity>
       
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Find the best</Text>
        <Text style={styles.title}>Coffee for you</Text>
        <TextInput style={styles.searchBar} placeholder="Find Your Coffee..." placeholderTextColor="#999" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {['All', 'Cappuccino', 'Espresso', 'Americano', 'Macchiato'].map((category, index) => (
          <Text
            key={index}
            style={[styles.categoryText, index === 0 && styles.activeCategory]}>
            {category}
          </Text>
        ))}
      </ScrollView>
      </View>

      <ScrollView >
      <FlatList
        data={products}
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      <Text style= {styles.coffeebean}>Coffee bean</Text>

      <FlatList
      data={products}
      horizontal={true} 
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}  
    />
      </ScrollView>
      <View style ={styles.navigation}>
        <TouchableOpacity>
          <Ionicons name='home' size={24} color='#D17842'/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name='cart' size={24} color='#D17842'/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>navigation.navigate('Favourite')}>
          <Ionicons name='heart' size={24} color='#D17842'/>
        </TouchableOpacity>
 
        <TouchableOpacity>
          <Ionicons name='notifications' size={24} color='#D17842'/>
        </TouchableOpacity>

      </View>

     
    </View>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
    
  },
  header1: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  icon: {
    width: 20,
    height: 20,
  },
  icon1: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBar: {
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#1f1f1f',
    color: '#fff',
  },
  productCard: {
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 10,
    marginRight: 16,
    width: 160,
    height: 250,
    marginBottom: 50
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productDescription: {
    color: '#888',
    fontSize: 12,
  },
  productPrice: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#ff7f50',
    width: 25,
    height: 25,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }, 
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5
  },
  categoryText: {
    color: '#888',
    marginRight: 16,
    fontSize: 16,
  },
  categories:{
    flexDirection: 'row',
    marginVertical: 20,
  },
  activeCategory:{
    color: '#fff',
    fontWeight: 'bold',
  },
  coffeebean:{
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    bottom: 315,
    left: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    alignItems: 'center'
    
  }

});

export default HomeScreen;
