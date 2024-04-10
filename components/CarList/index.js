import React, { useEffect, useState } from "react";
import { View, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem";
import styles from "./styles";

function CarList(props) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://192.168.26.1:8081/data");
      const data = await response.json();
      console.log(data);
      setCars(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default CarList;
