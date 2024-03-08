import { ScrollView, Text, View } from 'react-native';
import { StockTicker } from './HomeScreen';
import { useState } from 'react';
import React from 'react';

export const WatchListScreen = (watchlist: StockTicker[]) => {
  const [data, setData] = useState(watchlist);
  return (
    <ScrollView>
      {data.map((stockTicker, index) => {
        return <WatchListRowItem key={index} {...stockTicker} />;
      })}
    </ScrollView>
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
