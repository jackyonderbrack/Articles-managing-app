
interface ArticleProps {
    id: number;
    title: string;
    content: string;
    image: string;
    author: string;
};

const Article: React.FC<ArticleProps> = ({id, title, content, image, author}) => {

    return (
        
            <div className="article">
                <img src={image} alt="" />
                <h2 key={id}>{title}</h2>
                <p>{content}</p>
                <button>Czytaj dalej</button>
                <p>by: <b>{author}</b></p>
                
            </div>
    
      
    )
  }
  
export default Article