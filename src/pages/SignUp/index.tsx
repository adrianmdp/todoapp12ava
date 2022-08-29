import { Button, Grid, TextField } from "@mui/material"
import { FC, useState } from "react"
import { usersApi } from "../../api"
import { Layout } from "../../components"
import { UserPayload } from "../../types"
import "./style.scss"


const SignUp: FC = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass ] = useState('')

    const handleSubmit = (e: {preventDefault: () => void}) => {
        e.preventDefault()

        const user: UserPayload = { name, email, pass }
        
        usersApi.add(user)
    }

    return(

        <Layout hideNav page="signup">

            <Grid container spacing={2}>

                <Grid item xs={12}>

                    <form className="form-add-user" onSubmit={handleSubmit}>
                        <TextField 
                            // error
                            id="name-field"
                            type="text"
                            label="Nombre" 
                            variant="outlined" 
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="form-control"
                            // helperText="Dato incorrecto"
                        />

                        <TextField 
                            // error
                            id="email-field" 
                            type="email"
                            label="Email" 
                            variant="outlined" 
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="form-control"
                            // helperText="Dato incorrecto"
                        />

                        <TextField 
                            // error
                            id="pass-field" 
                            type="password"
                            label="Contraseña" 
                            variant="outlined" 
                            name="pass"
                            value={pass}
                            onChange={e => setPass(e.target.value)}
                            className="form-control"
                            // helperText="Dato incorrecto"
                        />

                        {/* <TextField 
                            // error
                            id="pass2-field" 
                            type="password"
                            label="Repetir contraseña" 
                            variant="outlined" 
                            name="pass2"
                            // helperText="Dato incorrecto"
                        /> */}

                        <Button type="submit">Enviar</Button>
                    </form>
                </Grid>

            </Grid>
          
          
            
        </Layout>

    )

}

export { SignUp }