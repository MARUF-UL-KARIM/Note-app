import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [note, setNote] = useState('');
  const [notesList, setNotesList] = useState([]);

  const addNote = () => {
    if (note.length > 0) {
      setNotesList([...notesList, { id: Math.random().toString(), value: note }]);
      setNote('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>আমার নোটস</Text>
      <TextInput 
        placeholder="কিছু লিখুন..." 
        style={styles.input} 
        onChangeText={setNote} 
        value={note}
      />
      <TouchableOpacity style={styles.button} onPress={addNote}>
        <Text style={styles.buttonText}>সেভ করুন</Text>
      </TouchableOpacity>
      <FlatList 
        data={notesList}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 10, padding: 8 },
  button: { backgroundColor: '#2196F3', padding: 10, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
  listItem: { padding: 10, marginVertical: 10, backgroundColor: '#eee', borderColor: 'black', borderWidth: 1 }
});
