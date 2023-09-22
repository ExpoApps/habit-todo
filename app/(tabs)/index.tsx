import { StyleSheet, FlatList } from 'react-native';

import Button from '../../components/Button';
import { Text, View } from '../../components/Themed';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  const data = [
    { key: 'item1', text: 'Item 1' },
    { key: 'item2', text: 'Item 2' },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Link href="/modal" style={styles.item}>
            <Text>{item.text}</Text>
          </Link>
        )}
        keyExtractor={(item) => item.key}
        style={styles.itemsList}
      />
      <View style={styles.bottomRightButtonContainer}>
        <Link href="/modal" >
          <Button title="+" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsList: {
    flex: 1,
    paddingHorizontal: 16, 
  },
  item: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  bottomRightButtonContainer: {
    position: 'absolute',
    bottom: 16, 
    right: 16, 
  },
});
