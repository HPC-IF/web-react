import { Col } from "react-bootstrap"

export const ArticleItem = ({article}) => {
    return (
        <Col>
            <h4><a href={article.linkTo} rel='noreferrer' target='_blank'>{article.name}</a></h4>
            <img src={require('../../../assets/images/' + article.image)} alt={article.name} />
            <p>{article.description}</p>
        </Col>
    )
}