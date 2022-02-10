import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import styles from "./styles";

import axios from "axios";
import Spinner from "../components/Spinner";
import { Feather } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const baseUrl = "http://api.giphy.com/v1/gifs";

const GiphyApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      console.log("useeffect");
      console.log("useEffect currentPage:", currentPage);
      setIsError(false);
      setIsLoading(true);

      try {
        const configurationObject = await axios(`${baseUrl}/trending`, {
          params: {
            api_key: "ua5KsDBAH5LNnQyvQWJrGNB0dK44mJf7",
          },
        });

        setData(data.concat(configurationObject.data.data));
        //setData([...data, ...configurationObject.data.data]);
      } catch (error) {
        setIsError(true);
        console.log(error);
        setTimeout(() => setIsError(false), 5000);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [currentPage]);

  const loadMoreGifs = () => {
    console.log("load more gifs");
    setCurrentPage(currentPage + 1);
    setIsLoading(true);
  };

  const renderItems = () => {
    if (isLoading) {
      return <Spinner />;
    }

    return (
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={loadMoreGifs}
        renderItem={({ item }) => (
          <View style={styles.gifContainer}>
            <Image
              style={styles.gif}
              source={{
                uri: item.images.fixed_height.url,
              }}
            />
          </View>
        )}
      />
    );
  };

  const renderError = () => {
    if (isError) {
      return (
        <View style={{ alignItems: "center" }}>
          <Feather name="alert-triangle" size={60} color="red" />
          <Text style={{ color: "white", fontWeight: "300" }}>
            Unable to retrieve Gifs at this moment. Please try again later.
          </Text>
        </View>
      );
    }
  };

  const handleInput = (text) => {
    setSearch(text);
  };

  const handlePress = async (event) => {
    event.preventDefault();
    setIsError(false);
    setIsLoading(true);

    try {
      const configurationObject = await axios(`${baseUrl}/search`, {
        params: {
          api_key: "ua5KsDBAH5LNnQyvQWJrGNB0dK44mJf7",
          q: search,
        },
      });

      setData(configurationObject.data.data);
    } catch (error) {
      setIsError(true);
      console.log(error);
      setTimeout(() => setIsError(false), 10000);
    }

    setIsLoading(false);
  };

  const onPress = () => {
    setCurrentPage(currentPage);
  };

  const previousPage = () => {
    if (currentPage <= 1) {
      setCurrentPage(currentPage);
      Alert.alert("First Page", "Try going to the Next Page");
      console.log("first page");
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // const renderRandomGif = async (event) => {
  //   setIsError(false);
  //   setIsLoading(true);
  //   try {
  //     const configurationObject = await axios(`${baseUrl}/random`, {
  //       params: {
  //         api_key: "",
  //         tag: "",
  //       },
  //     });
  //     setData(configurationObject.data.data);
  //   } catch (error) {
  //     setIsError(true);
  //     setTimeout(() => setIsError(false), 5000);
  //   }
  //   setIsLoading(false);
  // };

  return (
    <View style={styles.container}>
      {renderError()}
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.searchbox}
          value={search}
          onChangeText={handleInput}
          placeholder="Search all the GIFs and Stickers"
          keyboardType="default"
        />
        <TouchableOpacity style={styles.searchbutton} onPress={handlePress}>
          <Foundation name="magnifying-glass" size={36} color="purple" />
        </TouchableOpacity>
      </View>
      <View style={styles.category}>
        <View style={styles.iconandtitle}>
          <Feather name="trending-up" size={24} color="skyblue" />
          <Text style={styles.title}>Trending</Text>
        </View>

        {renderItems()}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.currentcontainer}>
            <AntDesign
              onPress={previousPage}
              name="caretleft"
              size={26}
              color="white"
            />
            <Text style={styles.pagenumber}>{currentPage}</Text>
            <AntDesign
              onPress={nextPage}
              name="caretright"
              size={26}
              color="white"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GiphyApi;
