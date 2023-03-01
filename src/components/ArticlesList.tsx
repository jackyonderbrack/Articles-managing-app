
import Article from './Article';

type ArticleData = {
    id: number;
    title: string;
    content: string;
    image: string;
    author: string;
}

interface ArticlesListProps {
    articlesList: ArticleData[];
};

const ArticlesList: React.FC<ArticlesListProps> = ({ articlesList }) => {
     
    

  return (
    <div className='articles'>
        {articlesList.map((article) => (
            <Article
                key={article.id} 
                id={article.id}
                image={article.image}
                title={article.title}
                content={article.content}
                author={article.author}
                />
        ))}
    
    </div>
  )
}

export default ArticlesList