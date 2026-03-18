import { router } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { useNotes } from '@/components/NotesContext';

export default function HomeScreen() {
  const { notes } = useNotes();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FastNotes</Text>

      {notes.length === 0 ? (
        <Text style={styles.subtitle}>No notes yet</Text>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <Pressable
              style={styles.noteCard}
              onPress={() =>
                router.push({
                  pathname: '/note-detail',
                  params: { id: item.id },
                })
              }>
              <Text style={styles.noteTitle}>{item.title}</Text>
              <Text style={styles.notePreview}>
                {item.content ? item.content.slice(0, 50) : 'No content'}
              </Text>
            </Pressable>
          )}
        />
      )}

      <Pressable style={styles.addButton} onPress={() => router.push('/new-note')}>
        <Text style={styles.addButtonText}>+ New Note</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 12,
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
  },
  listContent: {
    paddingBottom: 100,
  },
  noteCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  notePreview: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});