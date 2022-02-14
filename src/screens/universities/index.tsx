import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { ITInput, ITSortButton, ITUniversityCard } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { fetchUniversitiesByCountry, changeListOrder, fetchUniversitiesByName } from '../../actions';
import { RootState } from '../../store';

interface Props {
  route: any
}

interface ItemProps {
  item: any
}

const UniversitiesScreen: FC<Props> = ({route}) => {
  const {country} = route.params;
  const [order, setOrder] = useState(false);
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch();
  const { universities, loading } = useSelector((state: RootState) => state.universities);

  useEffect(() => {
    dispatch(fetchUniversitiesByCountry(country))
  }, [dispatch])

  const toggleSort = () => {
    setOrder(!order);
    dispatch(changeListOrder(order, universities))
  }

  const toggleSearch = (text: string) => {
    setSearchValue(text);
    dispatch(fetchUniversitiesByName(country, text))
  } 

  const renderItem: FC<ItemProps> = ({item}) => {
    return (
    <ITUniversityCard title={item.name} web_page={item.web_pages[0]} />
  )}

  const renderListEmptyComponent = () => (
    <View style={{alignItems: 'center'}}><Text>No Data Found</Text></View>
  )

  return (
    <View>
      <View style={styles.topContainer}>
        <ITInput
          value={searchValue}
          placeholder='University Name'
          onChangeText={(text: string) => toggleSearch(text)}
        />
        <ITSortButton value={order} onPress={toggleSort}/>
      </View>
      { loading ? <ActivityIndicator color={'#393bb8'} size={50} style={styles.activityIndicator}/> :
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={universities}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.name}_${index}`}
          ListEmptyComponent={renderListEmptyComponent}
        />
      }
    </View>
  )
}

export default UniversitiesScreen;
