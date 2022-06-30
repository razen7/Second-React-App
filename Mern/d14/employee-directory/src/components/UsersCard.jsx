function UsersCard(props) {
    let user = props.user;
    return (
        <div className="card">
            <div className="card-img">
                <img src={user.picture.thumbnail} alt="" />
            </div>
            <div className="card-info">
                <div className="person-name">
                    {user.name.title} {user.name.first} {user.name.last}
                </div>
                <div className="person-email">
                    {user.email}
                </div>
            </div>

        </div>
    )
}

export default UsersCard;