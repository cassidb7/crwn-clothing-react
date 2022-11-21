import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import SignIn from './routes/sign-in/sign-in.component'
import ProductList from './routes/product-list/product-list.component'
import ProductShow from './routes/product-show/product-show.component'
import Category from './routes/category/category.component'
import CategoryByProduct from './routes/category-by-product/category-by-product.component'
import CategoryNew from './routes/category-new/category-new.component'

const Shop =() => {
  return <h1>I am the shop</h1>;
}

const App = () =>  {
  return (
    <Routes>
      <Route  path='/' element={<Navigation />} >
        <Route  index element={<Home />} />
        <Route  path='/categories' element={<Category />} />
        <Route  path='/products-by-categories/:id' element={<CategoryByProduct />} />
        <Route  path='/categories/new' element={<CategoryNew />} />
        <Route  path='/products' element={<ProductList />} />
        <Route  path='/products/:id' element={<ProductShow />} />  
        <Route  path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>

    );
};

export default App;
