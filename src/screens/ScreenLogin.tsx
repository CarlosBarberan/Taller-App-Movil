import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps <any, any>{};

export const ScreenLogin = ({navigation}: Props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    Alert.alert('Inicio de sesión exitoso');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput placeholder="Usuario" value={username} onChangeText={setUsername} style={styles.input} />
      <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
      <Text onPress={() => navigation.navigate('Register')} style={styles.link}>¿No tienes una cuenta? Regístrate ahora</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderBottomWidth: 1, marginBottom: 10, padding: 8 },
  link: { color: 'blue', marginTop: 10, textAlign: 'center' }
});

export default ScreenLogin;
