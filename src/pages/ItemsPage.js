import React from 'react';

import { useParams } from 'react-router-dom';
import Categories from '../Components/Categories';
import ItemList from '../ItemList';


const ItemsPage = ({match}) => {

    const params = useParams();

    const category = params.category || 'food';
    return (
     <>
        <Categories/>
        <ItemList category={category}/>
     </>
    );
};

export default ItemsPage;