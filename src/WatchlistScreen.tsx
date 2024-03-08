import { ScrollView, Text, View } from 'react-native';
import { StockTicker } from './HomeScreen';
import { useEffect, useState } from 'react';
import React from 'react';
import { useRoute } from '@react-navigation/native';

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
    <View>
      {data.map((stockTicker, index) => {
        return <WatchListRowItem key={index} {...stockTicker} />;
      })}
    </View>
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
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'column' }}>
        <Text>{ticker}</Text>
        <Text>{description}</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Text>{price}</Text>
        <Text>{performance}</Text>
      </View>
    </View>
  );
};
