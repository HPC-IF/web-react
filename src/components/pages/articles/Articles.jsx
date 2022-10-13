import articles from '../../../models/articles.json'
import { Container } from 'react-bootstrap'
import { ArticleItem } from './ArticleItem'

export const Articles = () => {
    return (
        <Container>
            <h2>Artículos</h2>

            {articles.map((articlesByYear, i) =>
                <div key={i}>
                    {!!i && <hr />}
                    <h3>{articlesByYear.year}</h3>
                    {articlesByYear.articles.map(article =>
                        <ArticleItem key={article.name} article={article} />
                    )}
                </div>
            )}
        </Container>
    )
}