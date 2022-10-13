import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'
import { Articles } from '../components/pages/articles/Articles'
import { Home } from '../components/pages/Home'
import { Projects } from '../components/pages/projects/Projects'
import { Team } from '../components/pages/team/Team'

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
                    path='/team'
                    element={<Team />}
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