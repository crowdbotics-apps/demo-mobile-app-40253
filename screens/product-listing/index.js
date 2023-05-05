import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";

const ProductListingScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts([{
      id: 1,
      name: "Pepsi 24 pack",
      status: true,
      isFavorite: false,
      image: require("./assets/productImage.png")
    }, {
      id: 2,
      name: "Pepsi 15 pack",
      status: false,
      isFavorite: true,
      image: require("./assets/productImage2.png")
    }, {
      id: 3,
      name: "Pepsi 20oz",
      status: true,
      isFavorite: false,
      image: "https://target.scene7.com/is/image/Target/GUEST_1361a461-e2b2-4de2-98aa-4007e6d8b5c2?wid=725&hei=725&qlt=80&fmt=webp"
    }, {
      id: 4,
      name: "Wild Cherry 20oz",
      status: false,
      isFavorite: true,
      image: require("./assets/productImage2.png")
    }, {
      id: 5,
      name: "Product name",
      status: true,
      isFavorite: false,
      image: require("./assets/productImage.png")
    }, {
      id: 6,
      name: "Product name",
      status: false,
      isFavorite: true,
      image: require("./assets/productImage2.png")
    }]);
  }, []);
  return <View style={styles.container}>
      <TabView tabTitles={["All", "Best Products"]} selected={0} />
      <View style={styles.productsContainer}>
        <FlatList data={products} numColumns={2} keyExtractor={item => item.id.toString()} renderItem={({
        item
      }) => <Product product={item} />} columnWrapperStyle={{
        justifyContent: "space-around"
      }} showsVerticalScrollIndicator={false} style={styles.QLFbVZQY} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  productsContainer: {
    paddingHorizontal: 20
  },
  QLFbVZQY: {
    width: 324,
    height: 780
  }
});
export default ProductListingScreen;

const TabView = ({
  tabTitles,
  selected
}) => {
  return <View style={tabViewStyles.paletteContainer}>
      {tabTitles.map((title, index) => <View style={index === selected ? tabViewStyles.selected : tabViewStyles.unSelected} key={index}>
          <Text>{title}</Text>
        </View>)}
    </View>;
};

const tabViewStyles = StyleSheet.create({
  paletteContainer: {
    width: "70%",
    height: 48,
    backgroundColor: "#F1F1F1",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 6,
    marginVertical: 10,
    marginHorizontal: 20
  },
  selected: {
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "gray",
    elevation: 10
  },
  unSelected: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    borderRadius: 10
  }
});

const Product = ({
  product
}) => {
  const navigation = useNavigation();
  const availability = {
    color: product.status ? "#12D790" : "#EA4335",
    fontSize: 12,
    fontWeight: "bold"
  };
  return <Pressable onPress={() => {
    navigation.navigate("productDetails1");
  }}><View style={productStyles.container}>
      <View style={productStyles.imageContainer}>
        <Image source={require("./can-pepsi.png")} style={productStyles.productImage} />

        <Image source={product.isFavorite ? require("./assets/isFavouriteIcon.png") : require("./assets/favIcon.png")} style={productStyles.favIcon} />
      </View>
      <View style={productStyles.descriptionContainer}>
        <Text style={productStyles.bold}>{product.name}</Text>
        <View style={productStyles.availabilityTextContainer}>
          <Text style={productStyles.availabilityText}>Purchase: </Text>
          <Text style={availability}>
            {product.status ? "Available" : "Not available"}
          </Text>
        </View>
      </View>
    </View></Pressable>;
};

const productStyles = StyleSheet.create({
  container: {
    height: 240,
    width: 160,
    margin: 10
  },
  imageContainer: {
    height: 180,
    width: 160,
    borderRadius: 10
  },
  productImage: {
    height: "100%",
    width: "100%",
    borderRadius: 10
  },
  descriptionContainer: {
    justifyContent: "center",
    padding: 10
  },
  availabilityTextContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  availabilityText: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "bold"
  },
  bold: {
    fontWeight: "bold",
    color: "#000000"
  },
  favIcon: {
    position: "absolute",
    right: 10,
    top: 10
  }
});