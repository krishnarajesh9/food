import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constants/colors';
import {fontSize, iconSize, spacing} from '../constants/dimensions';
import {fontFamily} from '../constants/fonts';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import {smartWatch} from '../data/smartwatch';
import {headphones} from '../data/headphones';

const HomeScreen = () => {
  const [data, setData] = useState(smartWatch);
  const [selectedCategory, setSelectedCategory] = useState('Smart Watch');
  const handleUpdateCategory = newCategory => {
    console.log(newCategory);
    if (newCategory === 'Smart Watch') {
      setSelectedCategory('Smart Watch');
      setData(smartWatch);
    } else if (newCategory === 'Headphones') {
      setSelectedCategory('Headphones');
      setData(headphones);
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.headline}>Find your suitable watch now.</Text>
            {/* search input */}
            <View style={styles.mainInputContainer}>
              {/* input container */}
              <View style={styles.inputWrapper}>
                {/* icon */}
                <Image
                  source={require('../assets/search.png')}
                  style={styles.logo}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Search Product"
                  placeholderTextColor={colors.placeholderText}
                />
              </View>
              {/* category container */}
              <View style={styles.categoryContainer}>
                <Image
                  source={require('../assets/category.png')}
                  style={styles.logo}
                />
              </View>
            </View>
            <Category
              selectedCategory={selectedCategory}
              handleUpdateCategory={handleUpdateCategory}
            />
          </>
        }
        data={data}
        renderItem={({item, index}) => <ProductCard item={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{paddingBottom: 500, padding: spacing.md}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  headline: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontFamily: fontFamily.Bold,
  },
  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  inputWrapper: {
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.placeholderText,
    borderRadius: 44,
    paddingHorizontal: spacing.md,
  },
  logo: {
    height: iconSize.md,
    width: iconSize.md,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: spacing.md,
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
  },
  categoryContainer: {
    paddingHorizontal: spacing.sm,
  },
});
