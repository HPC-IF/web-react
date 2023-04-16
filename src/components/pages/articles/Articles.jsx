import articles from '../../../models/articles.json'
import { Container, Row } from 'react-bootstrap'
import { ArticleItem } from './ArticleItem'

export const Articles = () => {
    return (
        <Container>
            <h2>Artículos</h2>

            {articles.map((article, i) =>
                <div key={i}>
                    {!!i && <hr />}
                    <h3>{article.year}</h3>
                    <Row>
                        <ArticleItem key={article.name} article={article} />
                    </Row>
                </div>
            )}
        </Container>
    )
}