import Card from "../UI/Card";
import classes from './UserList.module.css'

const UserList = props => {
    return <Card className={classes.users}>
        <ul>
            {props.users.map((user, index) => <li key={index}>{user.name} ({user.age} Years old)</li>)}
        </ul>
    </Card>
}

export default UserList;