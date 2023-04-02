import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export const MemberItem = ({ member }) => {
    return (
        <Col lg={6} xl={4}>
            <Link to={member.id} className='d-flex align-items-center gap-3'>
                <div className="user-image-container">
                    <img
                        src={require('../../../assets/images/members/' + member.image)}
                        alt={member.name}
                        style={{ height: 150, width: 150, objectFit: 'cover', borderRadius: '100%' }}
                    />
                </div>
                <div>
                    <h4 className="color-secondary">{member.name}</h4>
                    <p>{member.role}</p>
                </div>
            </Link>
        </Col>
    )
}