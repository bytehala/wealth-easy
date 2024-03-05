import { Text, View } from 'react-native';
import { AccountGroup } from './AccountGroup';
import { Accounts } from '../__sampleData__/Accounts';
import { useState } from 'react';

export const HomeScreen = () => {
  const [data, setData] = useState(Accounts);
  return (
    <View>
      <Text>Accounts</Text>
      {data.map((accountWrapper, index) => {
        return <AccountGroup key={index} accountWrapper={accountWrapper} />;
      })}
    </View>
  );
};
