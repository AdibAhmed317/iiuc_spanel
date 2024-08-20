import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      style={tw`rounded-md min-h-[50px] justify-center items-center ${containerStyles} ${
        isLoading ? 'opacity-0' : ''
      }`}
    >
      <Text style={tw`${textStyles} font-bold text-sm`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
