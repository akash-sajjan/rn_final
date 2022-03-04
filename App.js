import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [data, setData] = useState([]);

  const renderItem = item => {
    console.log(item);

    return (
      <View style={styles.item}>
        <View>
          <Text>
            <Text>Name : </Text>
            <Text>{item.name}</Text>
          </Text>
          <Text>
            <Text>Phone : </Text>
            <Text>{item.phone}</Text>
          </Text>
        </View>
        <View>
          <Button title="Delete" onPress={() => deleteItem(item.key)} />
        </View>
      </View>
    );
  };

  const submitHandler = (names, phones) => {
    if (names.length > 2 && phones.length === 10) {
      setData(prevTodo => {
        return [
          ...prevTodo,
          {
            name: names,
            phone: phones,
            key: Math.random().toString(),
          },
        ];
      });
      setName('');
      setPhone('');
    }
    // console.log(data);
  };

  const deleteItem = key => {
    setData(prevTodo => {
      return prevTodo.filter(todo => todo.key !== key);
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.statusBar}>
        <Text>Book Finder</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={val => setName(val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          value={phone}
          keyboardType="numeric"
          onChangeText={val => setPhone(val)}
          maxLength={10}
        />
        <Button
          title="Add"
          onPress={() => submitHandler(name, phone)}
          disabled={!(name.length > 2 && phone.length === 10)}
        />

        <FlatList
          data={data}
          keyExtractor={item => item.key}
          renderItem={item => renderItem(item.item)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {
    height: 40,
    width: '100%',
    backgroundColor: '#99f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: '90%',
    backgroundColor: 'white',
    margin: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    padding: 5,
    backgroundColor: 'white',
    marginVertical: 2,
    margin: 20,
  },
});
