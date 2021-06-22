import React from 'react';
import {
    View,
    Text,
    TextInput,
    Dimensions,
    StyleSheet
} from 'react-native'
import { Icon } from 'react-native-elements';

const TextEntry = ({ icnName, icnType, value, onchangeText, placeholder, password, autoCompleteType }) => {
    return(
        <View style={styles.container}>
            <View style={styles.icnWrap}>
                <Icon 
                name = {icnName}
                size = {18}
                color = {"#FFFFFF"}
                type = {icnType}
                style = {{
                    opacity : 0.6
                }}
                />
            </View>
            <View style={styles.txtInp}>
                <TextInput 
                style={{
                    flex : 1,
                    fontSize : 13,
                    color : "#FFFFFF",
                    opacity : 0.6
                }}
                placeholderTextColor = "#FFFFFF"
                placeholder = {placeholder}
                value = {value}
                onChangeText = {(txt)=>onchangeText(txt)}
                secureTextEntry = {password}
                autoCompleteType = {autoCompleteType}
                autoCorrect = {false}
                autoCapitalize = "none"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height : 50,
        width : Dimensions.get('window').width - 60,
        paddingHorizontal : 20,
        borderWidth : 1.4,
        borderRadius : 10,
        backgroundColor : "#292A43",
        borderColor : '#292A43',
        flexDirection: 'row',
        marginVertical : 10,
    },
    icnWrap : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    txtInp : {
        flex : 1,
        paddingHorizontal : 10,
    },
})

export default TextEntry;