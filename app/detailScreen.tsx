import { useRoute } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  subtitle: string;
  image: string;
  detailImage: string;
  rating: number;
  reviews: number;
  sizes: { size: string; price: number }[]; // Danh sách kích cỡ sản phẩm
  tags: string[]; // Các tag liên quan đến sản phẩm
  roastType: string; // Kiểu rang (đối với cà phê)
}


const CoffeeDetails = () => {
 
  const route = useRoute();
  const navigation = useNavigation();
  console.log("Route Params:", route.params);

  const { products } = route.params as { products: Product };
  const [selectedSize, setSelectedSize] = useState(products.sizes[0]);

  return (
    <ScrollView style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={{uri: products.detailImage}} // Thay bằng URL ảnh của bạn
        style={styles.imageBackground}>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={{width: 25, height: 25, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', borderRadius:8}}
           onPress={()=>{navigation.navigate('Main')}}>
            <Image
              source={require('../assets/images/back.png')} // Icon quay lại
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{width: 25, height: 25, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', borderRadius:8}}>
            <Image
              source={require('../assets/images/love.png')}// Icon trái tim
              style={styles.icon1}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.opacity}>
          <View>
          <Text style={styles.title}>{products.name}</Text>
        <Text style={styles.subtitle}>{products.subtitle}</Text>
        <Text style={styles.rating}>
          ⭐ {products.rating} ({products.reviews})
        </Text>
          </View>
          

        <View style={styles.row}>
          <View style={{flexDirection: 'row'}}>
          <View style={styles.tag}>
            <Image
              source={require('../assets/images/coffee.png')} // Biểu tượng hạt cà phê
              style={styles.tagIcon}
            />
            <Text style={styles.tagText}>{products.tags[0]}</Text>
          </View>
          <View style={styles.tag}>
            <Image
              source={require('../assets/images/location.png')} // Biểu tượng châu Phi
              style={styles.tagIcon}
            />
            <Text style={styles.tagText}>{products.tags[1]}</Text>
          </View>
          </View>
          
          <View style={styles.tagTitle}>
            <Text style={styles.tagText}>{products.roastType}</Text>
          </View>

          
        </View>
      

        </View>
        
        
      </ImageBackground>

      {/* Details Section */}
      <View style={styles.detailsContainer}>

        
        

        {/* Description */}

        <View >
             <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>
          {products.description}
        </Text>

        {/* Sizes */}
        <Text style={styles.sizeTitle}>Size</Text>
        <View style={styles.sizeOptions}>
      {products.sizes.map((size, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.sizeButton,
            selectedSize.size === size.size && styles.selectedSizeButton, // Áp dụng style khi chọn
          ]}
          onPress={() => setSelectedSize(size)} // Cập nhật size
        >
          <Text
            style={[
              styles.sizeText,
              selectedSize.size === size.size && styles.selectedSizeText, // Thay đổi màu chữ khi chọn
            ]}
          >
            {size.size}
          </Text>
        </TouchableOpacity>
      ))}
    </View>

        {/* Price & Add to Cart */}
        <View style={styles.footer}>
      <Text style={styles.price}>${selectedSize.price.toFixed(2)}</Text> 
      <TouchableOpacity style={styles.cartButton}>
        <Text style={styles.cartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
        </View>
       
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageBackground: {
    height: 500,
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  icon: {
    width: 15,
    height: 15,
    tintColor: '#52555A', // Áp dụng nếu hình ảnh cần đổi màu
  },
  icon1:{
    width: 15,
    height: 15,
    tintColor: '#EE0000', 
  },
  detailsContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -25,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginVertical: 5,
  },
  row: {
   
  },
  tag: {
    width: 70,
    height: 70,
    alignItems: 'center',
    backgroundColor: '#141921',
    borderRadius: 15,
   justifyContent: 'center',

    
    
    marginRight: 10,
  },
  tagIcon: {
    width: 20,
    height: 20,
    
  },
  selectedSizeButton: {
    backgroundColor: "#ff6600", // Đổi màu khi chọn
  },
  
  selectedSizeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5
  },
  tagTitle:{
    width: 150,
    height:60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141921',
    marginTop: 10
  },
  rating: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 10,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    color: '#aaa',
    marginVertical: 10,
    lineHeight: 20,
  },
  sizeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  sizeOptions: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
  },
  sizeText: {
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  cartButton: {
    backgroundColor: '#D17842',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  opacity:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(12, 15, 20, 0.5)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -25,
    padding: 20,
    width: '100%',
  
  }
});

export default CoffeeDetails;
