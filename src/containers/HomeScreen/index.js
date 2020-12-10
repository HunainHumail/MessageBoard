import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { HomeActions } from "../../store/actions";
import { CardComponent } from "../../components";
import { FlatList } from "react-native-gesture-handler";
import { Colors } from "../../config/";

const HomeScreen = ({ params }) => {
  const isLoading = useSelector((state) => state.Home.isLoading);
  const isLoadingUser = useSelector((state) => state.Home.isLoadingUser);

  const posts = useSelector((state) => state.Home.posts);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HomeActions.getPosts());
    dispatch(HomeActions.getUsers());

  }, []);

  const data = [{ name: "Hunian" }];
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      {isLoading && isLoadingUser? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 400,
          }}
        >
          <ActivityIndicator size={"large"} color={Colors.White} />
        </View>
      ) : (
        <FlatList
          data={posts}
          keyExtractor = {(item) => `key-${item.id}`}
          renderItem={({ item, index }) => {
            return <CardComponent item={item} />;
          }}
        />
      )}
    </ScrollView>
  );
};

export default HomeScreen;
