import { View, Text, ScrollView } from 'react-native';
import { otherServices } from '../../__sampleData__/OtherServices';
import { useState } from 'react';

// a type of a service from otherServices
type OfferType = {
  id: string;
  title: string;
  description: string;
};

export const OffersAndServices = () => {
  const [data, setData] = useState(otherServices);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((otherService, index) => {
        return (
          <View key={otherService.id}>
            <Offer {...otherService} />
          </View>
        );
      })}
    </ScrollView>
  );
};

const Offer = ({ id, title, description }: OfferType) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 10,
        width: 250,
        height: 150,
        margin: 8,
        padding: 8,
      }}>
      <Text style={{ fontWeight: 'bold', width: '80%' }}>{title}</Text>
      <Text style={{ width: '80%' }}>{description}</Text>
    </View>
  );
};
