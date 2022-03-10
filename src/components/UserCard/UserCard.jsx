import './usercard.sass'


const UserCard  = (props) => {
    return(
        <div className="user-card">
            <div className="user-card__name">{props.name}</div>
            <div className="user-card__age">{props.age}</div>
        </div>
    );
}



export default UserCard;