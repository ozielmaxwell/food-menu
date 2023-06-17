import { useState } from 'react';
import Title from './Title';
import menu from './data'
import Menu from './Menu';
import Categories from './Categories';

const allCategories =['All',  ...new Set(menu.map((item)=>item.category))];

const App = () => {
   const [menuItem, setMenuItem] = useState(menu)
   const [categories, setCategories] = useState(allCategories);
  
   const filterItems = (category) =>{
    if(category === 'All'){
      setMenuItem(menu);
      return;
    }
    const newItems = menu.filter((item)=> item.category === category)
    setMenuItem(newItems);
   }
  return <main>
    <section className="menu">
      <Title text='our menu'/>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItem} />
    </section>
  </main>;
};
export default App;
