import './App.css';
import TopNavbar from './components/TopNavbar';
import ArticlesList from './components/ArticlesList';
import { useState, useEffect } from 'react'
import axios from 'axios';



function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3001/articles').then(res => {
        setArticles(res.data);
      });
    }, []);     

  
  return (
<div>
  <TopNavbar user="Admin" newTitle=''/>
  <ArticlesList articlesList={articles}/>
    
</div>
   
  );
}

export default App;
