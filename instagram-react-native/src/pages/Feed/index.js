import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList } from 'react-native';

import { Post, Header, Avatar, Name, PostImage, Description } from './style';

import LazyImage from '../../components/LazyImage'

import dataArr from './data'

export default function Feed() {

  const [refreshing, setRefreshing] = useState(false);

  async function refreshList() {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }

  return (
    <View>
      <FlatList
        data={dataArr}
        keyExtractor={post => String(post.id)}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refreshing}
        renderItem={({ item }) => (
          <Post>
            <Header>
              <Avatar source={{ uri: item.authorAvatar }} />
              <Name>{item.authorName}</Name>
            </Header>

            <LazyImage 
              aspectRatio={item.aspectRatio} 
              source={{ uri: item.image }} 
              smallSource={{ uri: item.small }} 
            />

            <Description>
              <Name>{item.authorName}</Name> {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  );
}
