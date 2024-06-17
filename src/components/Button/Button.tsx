import { forwardRef } from "react";
import { Pressable, Text, View, StyleSheet, ViewStyle, TextStyle } from "react-native";

type ButtonProps = {
    text: string,
    styleContainer: ViewStyle,
    styleText: TextStyle
} & React.ComponentPropsWithoutRef<typeof Pressable>

const Button = forwardRef<View | null, ButtonProps>(
    ({ text, styleContainer, styleText, ...pressableProps }, ref) => {
        return (
            <Pressable ref={ref} {...pressableProps} style={styleContainer}>
                <Text style={styleText}>{text}</Text>
            </Pressable>
        );
    }
);

export default Button;