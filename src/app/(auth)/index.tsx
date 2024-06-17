
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SignUpImage from "@/assets/images/SignUp/SignUpImage.png";
import Button from '@/src/components/Button/Button';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function MenuScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); 
  };

  const onSubmit = () => {
    console.log(name, password);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={SignUpImage}
        style={styles.image}
      />
      <View style={styles.buttonAuthContainer}>
        <View style={styles.buttonContainer}>
          <Button 
            text='Prihlasenie'
            styleContainer={styles.buttonSignInContainer}
            styleText={styles.buttonSignInText}
          />
          {/* <View style={styles.registerOffset}>
            <Button 
              text='Registracia'
              styleContainer={styles.buttonSignUpContainer}
              styleText={styles.buttonSignUpText}
            />       
          </View> */}
          <View style={styles.registerOffset}>
            <Link href="/sign-up" style={styles.buttonSignUpContainer}>
              <Text style={styles.buttonSignUpText}>Registrácia</Text>
            </Link>
          </View>
        </View>
        <View style={styles.authContainer}>
          <TextInput 
            value={name}
            onChangeText={setName}
            placeholder='Prihlasovacie meno'
            placeholderTextColor='#000000'
            style={styles.textInput}
          />
          <View style={styles.inputContainer}>
            <TextInput 
              value={password}
              onChangeText={setPassword}
              key="passwordInput"
              placeholder='Heslo'
              placeholderTextColor='#000000'
              style={styles.textInput}
              secureTextEntry={!showPassword} 
            />
            <TouchableOpacity onPress={togglePasswordVisibility}> 
              <FontAwesome 
                name={showPassword ? 'eye' : 'eye-slash'} 
                size={24} 
                color='#000000' 
                onPress={togglePasswordVisibility} 
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
          <Button 
            text='PRIHLÁSENIE'
            onPress={onSubmit}
            styleContainer={styles.buttonSubmitContainer}
            styleText={styles.buttonSubmitText}
          />
          <Text style={styles.forgottenPassword}>
            Zabudnuté heslo
          </Text>
        </View>
      </View>
      <View style={styles.signUpIconContainer}>
        <View style={styles.signUpIcon}>
          <FontAwesome 
            name='google'
            size={40}
            color='#FFFFFF'
          />
          <FontAwesome 
            name='facebook-official'
            size={40}
            color='#FFFFFF'
          />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F7F26',
  },
  image: {
    width: 138,
    height: 138
  },
  buttonAuthContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSignInContainer:{
    backgroundColor: '#9F9F9F',
    paddingHorizontal: 47,
    paddingVertical: 17,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  buttonSignInText : {
    color: '#FFFFFF'
  },
  registerOffset: {
    backgroundColor: '#2F7F26',
    paddingHorizontal: 20,
    paddingBottom: 25,
    borderRadius: 12
  },
  buttonSignUpContainer:{
    backgroundColor: 'rgba(0, 0, 0, .3)',
    paddingHorizontal: 47,
    paddingVertical: 17,
    borderRadius: 12,
  },
  buttonSignUpText : {
    color: '#FFFFFF',
  },
  authContainer: {
    backgroundColor: '#9F9F9F',
    paddingTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#D9D9D9',
    padding: 15,
    marginVertical: 10,
    width: '80%',
    marginHorizontal: 35,
    borderRadius: 10,
  },
  eyeIcon: {
    right: 90,
    padding: 10,
    position: 'relative',
  },
  buttonSubmitContainer: {
    backgroundColor: '#2EB91E',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 10,
    width: '50%',
    marginHorizontal: 'auto',
    marginTop: 20,
    borderRadius: 12
  },
  buttonSubmitText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 22,
  },
  forgottenPassword: {
    textAlign: 'center',
    marginBottom: 30,
  },
  signUpIconContainer: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    marginTop: 10,
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 12
  },
  signUpIcon: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-around',
  }
});



