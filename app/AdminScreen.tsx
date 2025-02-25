import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert, Button, TextInput, Modal } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Login from './login';

const Drawer = createDrawerNavigator();


interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  subtitle: string;
  image: string;
  detailImage?: string; // Ảnh chi tiết sản phẩm (tùy chọn)
  rating?: number; // Đánh giá sản phẩm
  reviews?: number; // Số lượt đánh giá
  sizes: { size: "S" | "M" | "L"; price: number }[]; // Danh sách size với giá
  tags?: string[]; // Danh sách tag liên quan
  roastType?: string; // Loại rang của cà phê
}


  

const Dashboard = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [subTitle, setSubTitle] = useState('');
  const [priceS, setPriceS] = useState("");
  const [priceM, setPriceM] = useState("");
  const [priceL, setPriceL] = useState("");
  const [image, setImage] = useState("");
  const [imgDetail, setImgDetail] = useState('');
  const [tags, setTags] = useState("");
  const [roastType, setRoastType] = useState("");
  const [mota, setMota] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  //useState
  
  

  const handleAdd = async()=>{
    if (!name || !priceS || !priceM || !priceL || !image || !tags || !roastType) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const newProduct = {
      id: Date.now().toString(),
      name,
      subTitle,
      price: parseFloat(priceS),
      image,
      detailImage: imgDetail, 
      rating: 4.5,
      reviews: 100,
      description: mota,
      sizes: [
        { size: "S", price: parseFloat(priceS) },
        { size: "M", price: parseFloat(priceM) },
        { size: "L", price: parseFloat(priceL) },
      ],
      tags: tags.split(",").map(tag => tag.trim()), // Chuyển chuỗi thành mảng
      roastType,
    }
   
    try {
      await fetch(`http://172.20.10.2:3000/products`, {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(newProduct)
      });
      Alert.alert('Thêm sản phẩm thành công')
      setModalVisible(false);
      setName("");
      setSubTitle("");
      setPriceS("");
      setPriceM("");
      setPriceL("");
      setImage("");
      setImgDetail("");
      setTags("");
      setRoastType("");
      setMota("");

    } catch (error) {
      console.error(error);
      Alert.alert("Lỗi", "Không thể thêm sản phẩm.");
      
    }
  }

  const handleEdit = (product: Product) => {
    setIsEditing(true);  // Chuyển modal sang chế độ sửa
    setEditingProductId(product.id);  // Lưu ID sản phẩm đang sửa

    // Đưa dữ liệu sản phẩm vào input
    setName(product.name);
    setSubTitle(product.subtitle || "");
    setPriceS(product.sizes?.find(size => size.size === "S")?.price.toString() || "");
    setPriceM(product.sizes?.find(size => size.size === "M")?.price.toString() || "");
    setPriceL(product.sizes?.find(size => size.size === "L")?.price.toString() || "");
    setImage(product.image);
    setImgDetail(product.detailImage || "");
    setMota(product.description || "");
    setTags(product.tags?.join(", ") || "");
    setRoastType(product.roastType || "");

    setModalVisible(true); // Hiển thị modal
};

const handleSave = async () => {
  if (!name || !priceS || !priceM || !priceL || !image || !tags || !roastType) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin!");
      return;
  }

  const updatedProduct = {
      id: isEditing ? editingProductId : Date.now().toString(),
      name,
      subtitle: subTitle,
      price: parseFloat(priceS),
      image,
      detailImage: imgDetail,
      rating: 4.5,
      reviews: 100,
      description: mota,
      sizes: [
          { size: "S", price: parseFloat(priceS) },
          { size: "M", price: parseFloat(priceM) },
          { size: "L", price: parseFloat(priceL) },
      ],
      tags: tags.split(",").map(tag => tag.trim()),
      roastType,
  };

  try {
      if (isEditing) {
          // Nếu đang sửa, gọi API cập nhật
          await fetch(`http://172.20.10.2:3000/products/${editingProductId}`, {
              method: 'PUT',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(updatedProduct),
          });
          Alert.alert('Sửa sản phẩm thành công');
      } else {
          // Nếu đang thêm mới
          await fetch(`http://172.20.10.2:3000/products`, {
              method: 'POST',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(updatedProduct),
          });
          Alert.alert('Thêm sản phẩm thành công');
      }

      setModalVisible(false);
      setIsEditing(false);
      setEditingProductId(null);
      resetForm(); // Reset form sau khi lưu

  } catch (error) {
      console.error(error);
      Alert.alert("Lỗi", isEditing ? "Không thể sửa sản phẩm." : "Không thể thêm sản phẩm.");
  }
};

const resetForm = () => {
  setName("");
  setSubTitle("");
  setPriceS("");
  setPriceM("");
  setPriceL("");
  setImage("");
  setImgDetail("");
  setTags("");
  setRoastType("");
  setMota("");
};



  
  //add product
  
  const renderItem = ({ item }: { item: Product }) =>(
    <TouchableOpacity
   
     style={styles.productCard}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <Text>{item.name}</Text>
          <Text>{item.price}$</Text>

          <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=>handleEdit(item)}  style={[styles.button, styles.editButton]}>
                                    <Ionicons name="create-outline" size={20} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>conFirmDelete(item.id)} style={[styles.button, styles.deleteButton]}>
                                    <Ionicons name="trash-outline" size={20} color="white" />
                                </TouchableOpacity>
                            </View>
        </TouchableOpacity>
  )
  //list danh sach sp

      const [products, setProducts] = useState<Product[]>([]);
      useEffect(()=>{
          fetch(`http://172.20.10.2:3000/products`)
          .then(response=> response.json())
          .then(data =>setProducts(data))
          
          .catch(error => console.log("Lỗi data ", error))
        }, []);
        // call api hiển thị danh sách

        const conFirmDelete = (id: string)=>{
            Alert.alert("Xác nhận xóa",
              "Bạn có chắc muốn xóa không ?",
              [
                {text: "Hủy",
                 style: 'cancel'
                },
                {
                  text: "Xóa",
                  onPress: ()=> deleleProduct(id),
                  style: 'destructive'
                }
              ]
            )
        }

        const deleleProduct = async (id: string)=>{
          try {
            await fetch(`http://172.20.10.2:3000/products/${id}`, {
              method: 'DELETE'
            });
            setProducts(products.filter(products=>products.id !== id));
            console.log('Đã xóa thành công')
          } catch (error) {
            console.error("Lỗi khi xóa sản phẩm:", error);
          }
        }
// xóa sản phẩm
       
   
    return(
        <View style={styles.container}>
    <Text style={styles.title}>Admin Dashboard</Text>
    <View style={styles.statsContainer}>
      <View style={styles.statBox}><Text style={styles.statText}>$10,000</Text><Text>Doanh thu</Text></View>
      <View style={styles.statBox}><Text style={styles.statText}>150</Text><Text>Đơn hàng</Text></View>
      <View style={styles.statBox}><Text style={styles.statText}>200</Text><Text>Khách hàng</Text></View>
    </View>
    <Text style={styles.sectionTitle}>Danh sách sản phẩm</Text>
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={renderItem} 
    />
  
<TouchableOpacity
onPress={()=>setModalVisible(true)}
style={styles.addButton}>
                <Ionicons name="add-circle-outline" size={24} color="white" />
                <Text style={styles.addButtonText}>Thêm sản phẩm</Text>
            </TouchableOpacity>
            <Modal visible={modalVisible} animationType="slide" transparent>
  <View style={styles.modalContainer}>
    <Text>{isEditing ? "Sửa sản phẩm" : "Thêm sản phẩm"}</Text>
    <TextInput placeholder="Tên sản phẩm" value={name} onChangeText={setName} style={styles.input} />
    <TextInput placeholder="Tên phụ" value={subTitle} onChangeText={setSubTitle} style={styles.input} />
    <TextInput placeholder="Giá Size S" value={priceS} onChangeText={setPriceS} keyboardType="numeric" style={styles.input} />
    <TextInput placeholder="Giá Size M" value={priceM} onChangeText={setPriceM} keyboardType="numeric" style={styles.input} />
    <TextInput placeholder="Giá Size L" value={priceL} onChangeText={setPriceL} keyboardType="numeric" style={styles.input} />
    <TextInput placeholder="Link Ảnh Sản Phẩm" value={image} onChangeText={setImage} style={styles.input} />
    <TextInput placeholder="Link ảnh chi tiết" value={imgDetail} onChangeText={setImgDetail} style={styles.input} />
    <TextInput placeholder="Mô tả sản phẩm" value={mota} onChangeText={setMota} style={styles.input} />
    <TextInput placeholder="Tags (cách nhau bằng dấu phẩy)" value={tags} onChangeText={setTags} style={styles.input} />
    <TextInput placeholder="Roast Type" value={roastType} onChangeText={setRoastType} style={styles.input} />

    <View style={styles.buttonContainer}>
      <Button title="Hủy" onPress={() => { setModalVisible(false); setIsEditing(false); }} color="red" />
      <Button title={isEditing ? "Cập nhật" : "Thêm"} onPress={handleSave} />
    </View>
  </View>
</Modal>
  </View>


    )
  {/* layout */}

}
  
;

const AdminScreen = () => (
  
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Dashboard} options={{ drawerIcon: () => <Ionicons name="stats-chart" size={24} /> }} />
      <Drawer.Screen name="Quản lý sản phẩm" component={Dashboard} options={{ drawerIcon: () => <Ionicons name="cafe" size={24} /> }} />
      <Drawer.Screen name="Quản lý người dùng" component={Dashboard} options={{ drawerIcon: () => <Ionicons name="people" size={24} /> }} />
      <Drawer.Screen name='Đăng xuất' component={Login} options={{ drawerIcon: () => <Ionicons name="log-out" size={24} /> }} />
    </Drawer.Navigator>
 // drawer navigation
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statBox: { backgroundColor: '#ddd', padding: 15, borderRadius: 10, alignItems: 'center', width: 100 },
  statText: { fontSize: 18, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  productCard: { backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      marginRight: 10,
      alignItems: 'center', 
      width: 150,
      height: 200
    },
  productImage: { width: 80, height: 80, marginBottom: 10, borderRadius: 10 },
  buttonContainer: { flexDirection: 'row', marginTop: 10 },
  button: { padding: 8, borderRadius: 5, marginHorizontal: 5 },
  editButton: { backgroundColor: "#3498db" },
  deleteButton: { backgroundColor: "#e74c3c" },
  addButton: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "center"
},
addButtonText: { color: "white", fontSize: 18, fontWeight: "bold", marginLeft: 5 },
modalContainer: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#fff" },
modalTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginBottom: 10, borderRadius: 5 },
modalActions: { flexDirection: "row", justifyContent: "space-around", marginTop: 20 },
modalContent: {
  backgroundColor: "white",
  padding: 20,
  borderRadius: 10,
  width: 300,
  alignItems: "center",
},
});

export default AdminScreen;
