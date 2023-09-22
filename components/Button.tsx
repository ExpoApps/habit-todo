import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

export default function Button(props: {title: string }) {
  const { title = 'Save' } = props;
  return (
    <View style={styles.button} >
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
