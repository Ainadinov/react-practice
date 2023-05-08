import React, { useEffect, useState } from 'react';
import './index.css';
import { Collection } from './collection';

const  cats = [
  { "name": "Все" },
  { "name": "Море" },
  { "name": "Горы" },
  { "name": "Архитектура" },
  { "name": "Города" }
];

function Photos() {
  const [collections, setCollections] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  useEffect(()=>{
    setIsLoading(true);

    const category = categoryId ? `category=${categoryId}`: '';

    fetch(`https://645540a8a74f994b33564a43.mockapi.io/photo_collections?page=${page}&limit=3&${category}`)
    .then((res) => res.json())
    .then((json) => {
      setCollections(json);
    })
    .catch((err) => {
      console.warn(err);
      alert('Error')
    })
    .finally(()=> setIsLoading(false))
  }, [categoryId, page]);


  return (
    <div className="photos">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((obj, i) => (
            <li 
              key={obj.name} 
              onClick={()=> setCategoryId(i)}
              className= { categoryId == i ? "active": ''} >
              {obj.name}
              </li>
          ))}
        </ul>
        <input 
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input" 
          placeholder="Поиск по названию" />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Loading...</h2>
        ):(
          collections.filter((obj)=> obj.name.toLowerCase().includes(searchValue.toLowerCase())).map((obj, index) => (
            <Collection key={index} name={obj.name} images={obj.photos}/>
          ))
        )}
      </div>
      <ul className="pagination">
        {
          [...Array(5)].map((_, i)=>(
            <li onClick={()=> setPage(i + 1)} className={page == i + 1 ? "active" : ''}>{i+1}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Photos;
