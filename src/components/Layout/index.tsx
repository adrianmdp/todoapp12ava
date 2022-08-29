import { FC, ReactNode } from "react"
import { Header } from '../Header'
import { Footer } from "../Footer";
import { Nav } from '../Nav'
import { Main } from '../Main'

type Props = {
    children: ReactNode
    hideNav?: boolean
    page?: string
}

const Layout: FC<Props> = ({children, hideNav, page}) => {

    return(
        <>
            <Header />
            { !hideNav && <Nav /> }
            <Main className={page && `page page-${page}`}>
                {children}
            </Main>
            <Footer />
        </>
    )

}

export { Layout }