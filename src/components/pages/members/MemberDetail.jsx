import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { getArticlesByUserId, getUserById } from "../../../utils/api"
import articles from "../../../models/articles.json"

export const MemberDetail = () => {
    const { id } = useParams()
    const [member, setMember] = useState({})
    const [showBody, setShowBody] = useState(false)
    const [height, setHeight] = useState(0)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        setMember(getUserById(id))
        setArticles(getArticlesByUserId(id))
    }, [id])

    useEffect(() => {
        setHeight(document.getElementsByClassName('member-body-p')?.[0]?.clientHeight)
    }, [member])



    return (
        <Container>
            <Row>
                <Col xs={12} md={4} lg={3}>
                    <img
                        src={require('../../../assets/images/members/' + (member.image ? member.image : 'no-image.png'))}
                        alt={member.name}
                        style={{ width: 200, height: 200, objectFit: 'cover' }}
                    />
                    {member?.contact && <ul className="list-unstyled">
                        {member?.contact?.map((social, i) => <li key={i}>
                            <a href={social.url} target="_blank">{social.name}</a>
                        </li>
                        )}
                    </ul>}
                </Col>
                <Col xs={12} md={8} lg={9}>
                    <h2>{member?.name}</h2>
                    <strong>{member?.description}</strong>

                    {member.body && <section className="mt-4">
                        <div style={{
                            height: showBody ? 'auto' : height,
                            overflow: 'hidden'
                        }}>
                            {member.body.map((item, i) => <p key={i} className="member-body-p">{item}</p>)}
                        </div>
                        <Button onClick={() => setShowBody(!showBody)} className="mt-2" >
                            {showBody ? 'Ver menos' : 'Ver más'}
                        </Button>
                    </section>}

                    {articles.length > 0 && <section className="mt-4">
                        <h2>Artículos</h2>
                        <ul>
                            {articles.map(art => <li key={art.id}>
                                <h3>{art.name}</h3>
                                <p>{art.description}</p>
                            </li>)}
                        </ul>
                    </section>}
                </Col>
            </Row>
        </Container>
    )
}
