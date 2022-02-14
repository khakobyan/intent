import React, { FC, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
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
  const { universities } = useSelector((state: RootState) => state.universities);

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
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={universities}
        renderItem={renderItem}
      />
    </View>
  )
}

export default UniversitiesScreen;
