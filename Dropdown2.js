import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from './Dropdown';

const App: FC = () => {
  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: 'January', value: '1' },
    { label: 'February', value: '2' },
    { label: 'March', value: '3' },
    { label: 'April', value: '4' }
  ];

  return (
    <View style={styles.container}>
      {!!selected && (
        <Text>
          Selected: label = {selected.label} and value = {selected.value}
        </Text>
      )}
      <Dropdown label="Select Month" data={data} onSelect={setSelected} />
      <Text>This is the rest of the form.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default App;