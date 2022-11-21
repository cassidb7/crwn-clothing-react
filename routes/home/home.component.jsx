import { useState, useEffect } from 'react';

import Directory from '../../components/directory/directory.component'
const Home = () =>  {

  const [searchField, setSearchField] = useState('');
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState(categories)


  useEffect(() => {
    fetch('http://localhost:3001/api/v1/categories')
    .then(response => response.json())
    .then((items) => setCategories(items)
    );
  }, [])

  useEffect(() => {
    const newFilteredCategories = categories.filter(
      categories => categories.title.toLowerCase().includes(searchField)
    );

    setFilteredCategories(newFilteredCategories)
  }, [categories, searchField])


  const onSearchChange  = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);  
  }


  return (
    < Directory categories={filteredCategories} />
  );
};

export default Home;