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
        padding: 16,
        borderRadius: 10,
      }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text>{accountType}</Text>
          <Text>{accounts?.length} accounts</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text>{total}</Text>
          <Icon name="chevron-down" size={24} color="black" />
          {/** TODO: Add accordion below that will animate */}
        </View>
      </View>
    </View>
  );
};
