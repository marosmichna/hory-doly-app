import { View, Text, StyleSheet, Image, TextInput, Pressable, Platform, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import ImageSignUp from "@/assets/images/SignUp/SignUpImageNoTransparent.png"
import SignUpInput from '@/src/components/Form/SignUpInput';
import Button from '@/src/components/Button/Button';
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { formatDateOfBirth } from '@/src/utils/FormateDateOfBirth';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const SignUp = () => {

  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const { type } = event;
    if (type === 'set' && selectedDate) {
        const currentDate = selectedDate;
        setDate(currentDate);
        if (Platform.OS === "android") {
            toggleDatepicker();
            setDateOfBirth(formatDateOfBirth(currentDate));
        }
    } else {
        toggleDatepicker();
    }
};

const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); 
  };

// const onChange = ({ type }: OnChangeParams, selectedDate: Date | null) => {
//     if (type === 'set' && selectedDate) {
//       const currentDate = selectedDate;
//       setDate(currentDate);
  
//       if (Platform.OS === "android") {
//         toggleDatepicker();
//         // setDateOfBirth(currentDate.toDateString());
//         setDateOfBirth(formatDateOfBirth(currentDate));
//       }
//     } else {
//       toggleDatepicker();
//     }
//   };

  const confirmIosDate = () => {
    setDateOfBirth(formatDateOfBirth(date));
    toggleDatepicker();
  }

  const onSubmit = () => {
    if (password === confirmPassword) {
        router.push('/(user)')
    } else {
      Alert.alert('Chyba', 'Heslá sa nezhodujú');
    }
  };

  return (
    <View style={styles.container}>
        <Image 
            source={ImageSignUp}
            style={styles.image}
        />
        <SignUpInput 
            name='Meno'
            value={firstName}
            onChangeText={setFirstName}
        />
        <SignUpInput 
            name='Priezvisko'
            value={lastName}
            onChangeText={setLastName}
        />
        <SignUpInput 
            name='Email'
            value={email}
            onChangeText={setEmail}
        />
        <View style={styles.dateContainer}>
            <Text style={styles.label}>Dátum narodenia</Text>
            {
                showPicker && (
                        <DateTimePicker 
                        mode='date'
                        display='spinner'
                        value={date}
                        onChange={onChange}
                        style={styles.datePicker}
                    />
                )
            }
            {
                showPicker && Platform.OS === "ios" && (
                    <View 
                        style={{ 
                            flexDirection: "row",
                            justifyContent: "space-around"
                         }}
                    >
                        <TouchableOpacity 
                            style={[
                                styles.iosPickerButton,
                                { backgroundColor: '#2F7F26' }
                            ]}
                            onPress={toggleDatepicker}
                        >
                            <Text>ZRUŠIŤ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[
                                styles.iosPickerButton,
                                { backgroundColor: '#2F7F26' }
                            ]}
                            onPress={confirmIosDate}
                        >
                            <Text>OK</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            {
                !showPicker && (
                    <Pressable onPress={toggleDatepicker}>
                        <TextInput
                            style={styles.dateInput} 
                            editable={false}
                            value={dateOfBirth}
                            onChangeText={setDateOfBirth}
                            onPressIn={toggleDatepicker}
                        />
                    </Pressable>
                )
            }
        </View>
        <SignUpInput 
            name='Nick'
            value={nickName}
            onChangeText={setNickName}
        />
        <View>
            <Text style={styles.label}>Heslo</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    value={password}
                    onChangeText={setPassword}
                    key="passwordInput"
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
        </View>
        <View>
            <Text style={styles.label}>Zopakovať heslo</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    key="passwordInput"
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
        </View>
        <Button 
            text='REGISTRUJ MA'
            styleContainer={styles.onSubmitButton}
            styleText={styles.onSubmitButtonText}
            onPress={onSubmit}
        />
        <Text style={styles.businessConditions}>Stlačením Registruj Ma súhlasíte s obchodnými podmienkami</Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2F7F26',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 123,
        height: 123,
        borderRadius: 123 / 2
    },
    dateContainer : {
        marginBottom: 10,
        width: '90%'
    },
    datePicker: {
        height: 120,
        marginTop: -10
    },
    iosPickerButton: {
        paddingHorizontal: 20,
    },
    label: {
        color: '#FFFFFF',
        marginBottom: 5
    },
    dateInput: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        fontSize: 16,
        borderRadius: 10
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
      },
    textInput: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        marginBottom: 10,
        width: '100%',
        marginRight: 'auto',
        
        borderRadius: 10,
    },
    eyeIcon: {
        right: 40,
        padding: 10,
        marginBottom: 10,
        position: 'relative',
    },
    onSubmitButton: {
        backgroundColor: '#D9D9D9',
        padding: 15,
        borderRadius: 10,
        marginTop: 30
    },
    onSubmitButtonText: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,  
    },
    businessConditions: {
        textAlign: 'center',
        fontSize: 11, 
        color: '#FFFFFF',
        marginTop: 5
    }
})