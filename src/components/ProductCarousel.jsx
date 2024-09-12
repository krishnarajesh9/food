import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
const screenWidth = Dimensions.get('window').width;

const ProductCarousel = ({images}) => {
  const [activeSlide, setActiveSlide] = useState();
  const onViewRef = useRef((viewableItems) => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveSlide(viewableItems.viewableItems[0].index);
    }
  });
  return (
    <>
      <FlatList
        data={images}
        renderItem={({item}) => {
          return (
            <View style={styles.productImageWrapper}>
              <Image source={{uri: item}} style={styles.productImage} />
            </View>
          );
        }}
        horizontal
        onViewableItemsChanged={onViewRef.current}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={screenWidth}
        decelerationRate={'fast'}
        keyExtractor={(item, index) => index}
      />
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            style={[
              styles.dot,
              index === activeSlide && {width: 20, borderRadius: 32},
              {
                backgroundColor:
                  index === activeSlide ? colors.purple : colors.gray,
              },
            ]}
          />
          ))}
      </View>
    </>
  );
};

export default ProductCarousel;

const styles = StyleSheet.create({
  productImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
    paddingTop: spacing.sm,
  },
  productImage: {
    height: 350,
    width: 350,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: spacing.md,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: spacing.xs,
    backgroundColor: colors.gray,
  },
});
