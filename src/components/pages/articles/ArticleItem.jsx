import { Col } from "react-bootstrap"
import { getUsersByArticle } from "../../../utils/api"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export const ArticleItem = ({ article }) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        setUsers(getUsersByArticle(article.id))
    }, [article])

    return (
        <Col>
            <h4><a href={article.linkTo} rel='noreferrer' target='_blank'>{article.name}</a></h4>
            <img src={require('../../../assets/images/' + article.image)} alt={article.name} />
            <br />
            {users.authors?.map((user, i) => <Link key={i} to={`../members/${user.id}`}>{i > 0 && " | "}{user.name}</Link>)}
            {users.otherAuthors?.map((user, i) => <span key={i}> | {user}</span>)}
            <p className="mt-3">{article.description}</p>
        </Col>
    )
}