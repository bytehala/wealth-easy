import { FlatList, ScrollView, Text, View } from 'react-native';
import { StockTicker } from './HomeScreen';
import { useEffect, useState } from 'react';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { stockTickers } from '../__sampleData__/WatchList';

export const WatchListScreen = () => {
  const [data, setData] = useState<StockTicker[]>([]);

  const routeParams = useRoute().params;
  console.log('WatchListScreen.tsx: data: ', routeParams?.watchlist);

  useEffect(() => {
    if (routeParams?.watchlist) {
      setData(routeParams.watchlist);
    }
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <WatchListRowItem {...item} />}
    />
  );
};

// Displays the StockTicker data in a vertically scrolling list as a row item with
// ticker and description on the left, and price and performance on the right.
export const WatchListRowItem = ({
  ticker,
  description,
  price,
  currencyCode,
  currencySymbol,
  performance,
}: StockTicker) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
          {/* Just the first 3 letters of the ticker */}
          {ticker.substring(0, 3)}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          padding: 8,
          flexGrow: 1,
        }}>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>{ticker}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'gray',
                borderRadius: 50,
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginLeft: 8,
              }}>
              <Text style={{ color: 'white', fontSize: 12 }}>Unavailable</Text>
            </View>
          </View>
          <Text>{description}</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
          <Text>{price}</Text>
          <Text>{performance}</Text>
        </View>
      </View>
    </View>
  );
};
