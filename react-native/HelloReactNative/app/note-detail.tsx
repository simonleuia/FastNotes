import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { useNotes } from '@/components/NotesContext';

export default function NoteDetailScreen() {
  const { id } = useLocalSearchParams();
  const { getNoteById } = useNotes();

  const noteId = Array.isArray(id) ? id[0] : id;
  const note = noteId ? getNoteById(noteId) : undefined;

  if (!note) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Note not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content || 'No content'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#000000',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },
});