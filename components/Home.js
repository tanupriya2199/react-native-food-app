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
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';

const categoriesItem = ({item}) => {
  return (
    <View
      style={[
        styles.categoriesItemWrapper,
        {
          backgroundColor: item.selected ? colors.primary : colors.white,
        },
      ]}>
      <Image style={styles.categoriesItemImage} source={item.image} />
      <Text style={styles.categoriesItemTitle}>{item.title}</Text>
      <View
        style={[
          styles.categoriesSelectWrapper,
          {
            backgroundColor: item.selected ? colors.white : colors.secondary,
          },
        ]}>
        <Feather
          style={styles.categoriesSelectItem}
          name="chevron-right"
          size={8}
          color={item.selected ? colors.black : colors.white}
        />
      </View>
    </View>
  );
};

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWraper}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Feather name="menu" size={24}></Feather>
        </View>
      </SafeAreaView>
      {/* titles */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesSubtitle}>Food</Text>
        <Text style={styles.titlesTitle}>Delivery</Text>
      </View>

      {/* search */}
      <View style={styles.searchWrapper}>
        <Feather name="search" size={16} color={colors.textDark} />
        <View style={styles.search}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>

      {/* categories */}
      <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View style={styles.categoriesListWrapper}>
          <FlatList
            data={categoriesData}
            renderItem={categoriesItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>

      {/* popular  */}

      <View style={styles.popularWrapper}>
        <Text style={styles.popularTitle}>Popular</Text>
        {popularData.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              navigation.navigate('Details', {item});
            }}>
            <View
              style={[
                styles.populatCardWrapper,
                {
                  marginTop: item.id == 1 ? 10 : 20,
                },
              ]}>
              <View>
                <View>
                  <View style={styles.popularTopWrapper}>
                    <MaterialCommunityIcons
                      name="crown"
                      size={12}
                      color={colors.primary}
                    />
                    <Text style={styles.popularTopText}>Top of the week</Text>
                  </View>
                  <View style={styles.popularTitlesWrapper}>
                    <Text style={styles.polpularTitlesTitle}>{item.title}</Text>
                    <Text style={styles.polpularTitlesSubtitle}>
                      Weight {item.weight}
                    </Text>
                  </View>
                </View>
                <View style={styles.popularCardBottom}>
                  <View style={styles.addPizzaButton}>
                    <Feather
                      name="plus"
                      style={styles.plusbutton}
                      size={16}
                      color={colors.textDark}
                    />
                  </View>
                  <View style={styles.ratingWrapper}>
                    <MaterialCommunityIcons
                      name="star"
                      size={10}
                      color={colors.textDark}
                    />
                    <Text style={styles.rating}>{item.rating}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.popularCardRight}>
                <Image source={item.image} style={styles.popularCardImage} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWraper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  titlesWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    marginTop: 5,
    fontSize: 32,
    color: colors.textDark,
  },
  searchWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  search: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: colors.textLight,
    marginLeft: 10,
  },
  searchText: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textLight,
    marginBottom: 5,
    fontSize: 14,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    marginHorizontal: 20,
  },
  categoriesListWrapper: {
    marginHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoriesItemWrapper: {
    backgroundColor: colors.primary,
    marginRight: 20,
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoriesItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoriesItemTitle: {
    fontSize: 14,
    marginTop: 10,
    fontFamily: 'Montserrat-SemiBold',
  },
  categoriesSelectWrapper: {
    marginTop: 20,
    width: 26,
    height: 26,
    backgroundColor: 'white',
    marginBottom: 26,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesSelectItem: {
    fontSize: 18,
  },
  popularWrapper: {
    marginHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  populatCardWrapper: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 25,
    paddingLeft: 25,
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  polpularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  polpularTitlesSubtitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    marginLeft: -25,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  plusbutton: {
    fontFamily: 'Montserrat-SemiBold',
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  rating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    marginLeft: 5,
    color: colors.textDark,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});

export default Home;
