import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

import Table from '../../components/table/table.component'
const Category = () =>  {
  const params = useParams()
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/categories')
    .then(response => response.json())
    .then(
      (data) => {
        setCategories(data);
      }
    );
  }, [])

  return (
    <div>
      < Link to='/categories/new'>New Category</Link>
      < Table items={categories} />
    </div>
   
  );
};

export default Category;