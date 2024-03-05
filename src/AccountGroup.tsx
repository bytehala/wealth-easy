import { Text, View } from 'react-native';
import { Account } from './Account';
import Icon from 'react-native-vector-icons/FontAwesome';

export type AccountWrapper = {
  accountType?: string;
  total?: number;
  accounts?: Account[];
};

export const AccountGroup = ({
  accountWrapper,
}: {
  accountWrapper: AccountWrapper;
}) => {
  const { accountType, total, accounts } = accountWrapper;

  return (
    <View
      style={{
        borderWidth: 1,
        marginVertical: 2,
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 10,
      }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text>{accountType}</Text>
          <Text>{accounts?.length} accounts</Text>
        </View>
        <View>
          <Text>{total}</Text>
          <Icon name="rocket" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};
