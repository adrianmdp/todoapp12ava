import { useState } from "react"
import { usersApi } from "../../api"
import { Layout } from "../../components"
import { User } from "../../types"

const Users = () => {

    const [users, setUsers] = useState<User[]>([])

    const getUsers = async () => {

        const rsp = await usersApi.getAll()

        if(users.length === 0)
            setUsers(rsp)

    }

    getUsers()

    return (
        <Layout page="users">
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr>
                               <td>{user.id}</td>
                               <td>{user.name}</td>
                               <td>{user.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Layout>
    )

}

export { Users }