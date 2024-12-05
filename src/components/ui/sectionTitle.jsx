import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const sectionTitle = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default sectionTitle;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
