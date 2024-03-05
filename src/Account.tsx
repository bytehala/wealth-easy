import { Text, View } from 'react-native';

export type Account = {
  id: string;
  name: string;
  balance: number;
  simplePerformance?: number;
  subType?: string;
  status?: 'In Progress' | 'Open' | 'Closed';
};

export const Account = () => {
  // A react-native component that displays account information
  return (
    <View>
      <Text>Account</Text>
    </View>
  );
};
