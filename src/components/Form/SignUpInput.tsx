import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { forwardRef } from 'react';

type SignUpInputProps = {
    name: string,
    value: string,
    onChangeText: (text: string) => void,
  } & React.ComponentPropsWithoutRef<typeof View>;

const SignUpInput = forwardRef<View | null, SignUpInputProps>(
    ({ name, value, onChangeText, ...viewProps }, ref) => {
      return (
        <View ref={ref} {...viewProps} style={styles.container}>
          <Text style={styles.text}>{name}</Text>
          <TextInput
             value={value}
             onChangeText={onChangeText}
             style={styles.input}
          />
        </View>
      );
    }
  );

  const styles = StyleSheet.create({
    container: {
      marginBottom: 10,
      width: '90%'
    },
    text: {
      marginBottom: 5,
      fontSize: 13,
      color: '#FFFFFF',
    },
    input: {
      backgroundColor: '#D9D9D9',
      padding: 10,
      fontSize: 16,
      borderRadius: 10
    },
  });

export default SignUpInput;