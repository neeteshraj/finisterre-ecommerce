import React from 'react';
import './MenuHeader.css';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getAllCategories} from '../../actions';

const MenuHeader = (props) => {


  const category = useSelector(state=> state.category);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllCategories());
  },[])

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {
            category.parentId ? <a href={category.slug}>{category.name}</a> :
            <span>{category.name}</span>
          }
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return myCategories;
  };

  return (
    <div className="menuHeader">
      <ul>
        {category.categories.length>0?renderCategories(category.categories):null}
      </ul>
    </div>
  );
}

export default MenuHeader;
