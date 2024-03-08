import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { AccountGroup } from './AccountGroup';
import { Accounts } from '../__sampleData__/Accounts';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { OffersAndServices } from './more/OffersAndServices';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Define a type for your navigation structure
type RootStackParamList = {
  Home: undefined;
  Watchlist: { watchlist: StockTicker[] }; // replace StockTicker[] with the correct type for your watchlist
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen = () => {
  const [data, setData] = useState(Accounts);
  const [stockTickersData, _] = useState(stockTickers);

  const navigation = useNavigation<NavigationProp>();

  console.log('HomeScreen.tsx: navigation: ', navigation);

  return (
    <ScrollView style={{ paddingVertical: 32, paddingHorizontal: 16 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Accounts</Text>
      {data.map((accountWrapper, index) => {
        return <AccountGroup key={index} accountWrapper={accountWrapper} />;
      })}
      <TouchableOpacity
        style={{
          marginVertical: 16,
          borderWidth: 1,
          height: 48,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          flexDirection: 'row',
        }}>
        <Icon name="plus" size={24} color="black" />
        <Text style={{ fontWeight: 'bold' }}>Add an account</Text>
      </TouchableOpacity>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stockTickersData.map((stockTicker, index) => {
          return <StockTickerCard key={index} {...stockTicker} />;
        })}
      </ScrollView>
      <TouchableOpacity
        style={{
          marginVertical: 16,
          borderWidth: 1,
          height: 48,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          flexDirection: 'row',
        }}
        onPress={() => {
          console.log('Open watchlist');
          console.log(stockTickersData);
          navigation.navigate('Watchlist', { watchlist: stockTickersData });
        }}>
        <Text style={{ fontWeight: 'bold' }}>Open Watchlist</Text>
      </TouchableOpacity>
      <OffersAndServices />
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const StockTickerCard = ({
  ticker,
  currencySymbol, // TODO: currencySymbol is not rendering
  price,
  currencyCode,
  performance,
  description,
}: StockTicker) => {
  return (
    <View
      style={{
        padding: 16,
        margin: 8,
        borderWidth: 1,
        borderRadius: 10,
        width: 160,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name="rocket"
          size={24}
          color="black"
          style={{
            borderWidth: 1,
            padding: 8,
            borderRadius: 20,
            marginRight: 8,
          }}
        />
        <Text style={{ fontWeight: 'bold' }}>{ticker}</Text>
      </View>
      <Text style={{ fontWeight: 'bold' }}>
        ${price} {currencyCode}
      </Text>
      <Text>
        {performance > 0 ? '+' : ''}
        {performance}%
      </Text>
      <Text numberOfLines={1}>{description}</Text>
    </View>
  );
};

export type StockTicker = {
  ticker: string;
  price: number;
  currencySymbol: string;
  currencyCode: string;
  performance: number;
  description: string; // e.g. Vanguard S&P 500 Index ETF
};

const stockTickers: StockTicker[] = [
  {
    ticker: 'VFV',
    currencySymbol: '$',
    price: 222.45,
    currencyCode: 'CAD',
    performance: 0.05,
    description: 'Vanguard S&P 500 Index ETF',
  },
  {
    ticker: 'AAPL',
    currencySymbol: '$',
    price: 123.45,
    currencyCode: 'USD',
    performance: -0.05,
    description: 'Apple Inc.',
  },
  {
    ticker: 'GOOGL',
    currencySymbol: '$',
    price: 2345.67,
    currencyCode: 'USD',
    performance: 0.03,
    description: 'Alphabet Inc.',
  },
  {
    ticker: 'AMZN',
    currencySymbol: '$',
    price: 3456.78,
    currencyCode: 'USD',
    performance: 0.07,
    description: 'Amazon.com Inc.',
  },
  {
    ticker: 'MSFT',
    currencySymbol: '$',
    price: 456.78,
    currencyCode: 'USD',
    performance: 2.97,
    description: 'Microsoft Corporation',
  },
];
function createStackNavigator() {
  throw new Error('Function not implemented.');
}
