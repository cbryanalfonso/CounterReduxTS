import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Dispatch, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../business/store';
import {useAppDispatch, useAppSelector} from '../../business/hooks';
import {increment} from '../../business/counterSlice';
import Dropdown from '../../components/DropDown/DropDown';

interface StoreItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
interface FilterStore {
  category: string;
}

const options = ['Option 1', 'Option 2', 'Option 3'];

const HomeProducts = () => {
  const [dataStore, setDataStore] = useState<StoreItem[]>([]);
  const [dataFilter, setDataFilter] = useState([]);
  const products = useAppSelector(state => state.counter.products);
  useEffect(() => {
    console.log('Valor', products);
    
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setDataStore(json));
  }, []);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        let arrayFilter: any = [];
        json.filter((item: FilterStore) =>
          !arrayFilter.includes(item.category)
            ? arrayFilter.push(item.category)
            : null,
        );
        // console.log(arrayFilter);
        setDataFilter(arrayFilter);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>HomeProducts</Text>
      <Dropdown options={dataFilter} />
      <TouchableOpacity
        onPress={()=>{
            console.log(products);
            
        }}
      >
          <Text>Hola</Text>
      </TouchableOpacity>
      <FlatList
        numColumns={2}
        data={dataStore}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.containerProduct}>
              <Image
                source={{uri: item.image}}
                style={{width: 100, height: 100}}
                resizeMode={'contain'}
              />
              <Text
                style={{fontSize: 14, fontWeight: 'bold', textAlign: 'center'}}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: 'red',
                }}>
                {item.price}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '300',
                  textAlign: 'right',
                  width: '100%',
                }}>
                {item.category}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerProduct: {
    width: '45%',
    marginHorizontal: '2.5%',
    alignItems: 'center',
    marginBottom: '5%',
  },
});

export default HomeProducts;
//connect<StateProps, DispatchProps, OwnProps, RootState>(
// mapStateToProps,
// mapDispatchToProps,
//   )
