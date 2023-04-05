import { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import YodlrApi from '../Api';


const Admin = () => {

    const [users, setUsers] = useState([]);

    useEffect(function getAllUsersOnMount() {
        getAllUsers();
    }, []);

    async function getAllUsers() {
        let users = await YodlrApi.getUsers();
        setUsers(users);
    }

    return (
        <div>
            <Typography variant="h2">
                Users
            </Typography>
            <List>
                {users.map(u => (
                    <ListItem key={u.id}>
                        <ListItemText primary={`${u.email} ${u.firstName} ${u.lastName}`} secondary={`Status: ${u.state}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Admin;