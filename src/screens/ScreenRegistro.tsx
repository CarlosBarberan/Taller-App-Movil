import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps <any, any>{};

export const ScreenRegistro = ({navigation}: Props) => {
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
    const validatePassword = (password: string) => /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);

    const handleRegister = () => {
        if (!validateEmail(email)) {
            Alert.alert('Error', 'Correo electrónico inválido');
            return;
        }
        if (!validatePassword(password)) {
            Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres, una mayúscula y una minúscula');
            return;
        }
        Alert.alert('Registro exitoso');
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput placeholder="Correo Electrónico" value={email} onChangeText={setEmail} style={styles.input} />
            <TextInput placeholder="Usuario" value={username} onChangeText={setUsername} style={styles.input} />
            <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
            <Button title="Registrarse" onPress={handleRegister} />
            <Text onPress={() => navigation.navigate('Login')} style={styles.link}>¿Ya tienes una cuenta? Inicia sesión ahora</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    input: { borderBottomWidth: 1, marginBottom: 10, padding: 8 },
    link: { color: 'blue', marginTop: 10, textAlign: 'center' }
});

export default ScreenRegistro;
