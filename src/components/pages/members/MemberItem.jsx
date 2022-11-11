import { Col } from "react-bootstrap"

export const MemberItem = ({ member }) => {
    return (
        <Col lg={6} xxl={4}>
            <div className='d-flex align-items-center gap-3'>
                <img
                    src={require('../../../assets/images/' + member.image)}
                    alt={member.name}
                    style={{ height: 180, width: 180, objectFit: 'cover', borderRadius: '100%' }}
                />
                <div>
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                </div>
            </div>
        </Col>
    )
}