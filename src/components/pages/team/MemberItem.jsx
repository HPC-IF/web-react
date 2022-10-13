export const MemberItem = ({member}) => {
    return (
        <div>
            <h4>{member.name}</h4>
            <img src={require('../../../assets/images/' + member.image)} />
            <p>{member.role}</p>
        </div>
    )
}