import { Text, View } from 'react-native';
import { AccountGroup } from './AccountGroup';
import { Accounts } from '../__sampleData__/Accounts';
import { useState } from 'react';

export const HomeScreen = () => {
  const [data, setData] = useState(Accounts);
  return (
    <View style={{ paddingVertical: 32, paddingHorizontal: 16 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Accounts</Text>
      {data.map((accountWrapper, index) => {
        return <AccountGroup key={index} accountWrapper={accountWrapper} />;
      })}
    </View>
  );
};
