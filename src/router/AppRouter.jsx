import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'
import { Articles } from '../components/pages/articles/Articles'
import { Home } from '../components/pages/Home'
import { Projects } from '../components/pages/projects/Projects'
import { Members } from '../components/pages/members/Members'

export const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/members'
                    element={<Members />}
                />
                <Route
                    path='/articles'
                    element={<Articles />}
                />
                <Route
                    path='/projects'
                    element={<Projects />}
                />
            </Routes>
        </Router>
    )
}