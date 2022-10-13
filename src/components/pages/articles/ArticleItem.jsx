export const ArticleItem = ({article}) => {
    return (
        <div>
            <h4>{article.name}</h4>
            <img src={require('../../../assets/images/' + article.image)} />
            <p>{article.description}</p>
        </div>
    )
}