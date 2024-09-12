import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {fontSize, iconSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {fontFamily} from '../constants/fonts';

const CartButton = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#8743FF', '#4136F1', '#192f6a']}
        start={{
          x: 0,
          y: 0.5,
        }}
        end={{
          x: 1,
          y: 0,
        }}
        style={styles.addToCartButton}>
      <Feather
        name="shopping-cart"
        size={iconSize.md}
        colors={colors.background}
      />
      <Text style={styles.addToCartText}>Add to Cart | $349.99</Text>
      </LinearGradient>
    </View>
    
  );
};

export default CartButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  addToCartButton: {
    width: '90%',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: spacing.md,
    gap: spacing.sm,
  },
  addToCartText: {
    color: colors.background,
    fontFamily: fontFamily.Bold,
    fontSize: fontSize.md,
  },
});
