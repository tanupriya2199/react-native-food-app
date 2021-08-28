import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableOpacityBase,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

const renderIngredientItem = ({item}) => {
  return (
    <View style={styles.ingredientItemWrapper}>
      <Image source={item.image} style={styles.ingredientImage} />
    </View>
  );
};

const Details = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={true}>
      {/* header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              navigation.goBack();
            }}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={16} color={colors.textDark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name="star"
              size={16}
              color={colors.white}
            />
          </View>
        </View>
      </SafeAreaView>

      {/* titles */}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      {/* price */}
      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>${item.price}</Text>
      </View>

      {/* pizza info  */}
      <View style={styles.infoWrapper}>
        <View style={styles.leftInfoWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumber}
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{item.crust}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery in</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime}</Text>
          </View>
        </View>
        <View style={styles.rightInfoWrapper}>
          <Image style={styles.itemImage} source={item.image} />
        </View>
      </View>

      {/* ingredients */}
      <View style={styles.ingredientsWrapper}>
        <Text style={styles.ingredientTitle}>Ingredients</Text>
        <View style={styles.ingredientsListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredientItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/* Add button */}
      <TouchableOpacity onPress={() => alert('Your alert has been placed!!!!')}>
        <View style={styles.orderWrapper}>
          <Text style={styles.orderText}>Place an order</Text>
          <Feather name="chevron-right" size={18} color={colors.textDark} />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
  },
  titleWrapper: {
    marginHorizontal: 20,
    marginTop: 23,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
    fontSize: 32,
    width: '70%',
  },
  priceWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  priceText: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.price,
    fontSize: 32,
  },
  infoWrapper: {
    marginTop: 60,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  leftInfoWrapper: {},
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: 'Montserrat-Medium',
    color: colors.textLight,
    fontSize: 14,
  },
  infoItemText: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textDark,
    fontSize: 18,
  },
  rightInfoWrapper: {},
  itemImage: {
    resizeMode: 'contain',
    marginLeft: 50,
  },
  ingredientsWrapper: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  ingredientTitle: {
    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
    fontSize: 16,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
  ingredientItemWrapper: {
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 25,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ingredientImage: {},
  orderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    margin: 20,
    paddingVertical: 23,
    borderRadius: 50,
  },
  orderText: {
    color: colors.textDark,
    fontFamily: 'Montserrat-Bold',
  },
});

export default Details;
