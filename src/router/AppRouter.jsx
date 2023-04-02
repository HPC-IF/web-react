import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'
import { Articles } from '../components/pages/articles/Articles'
import { Home } from '../components/pages/Home'
import { Projects } from '../components/pages/projects/Projects'
import { Members } from '../components/pages/members/Members'
import { ProjectDetail } from '../components/pages/projects/ProjectDetail'
import { MemberDetail } from '../components/pages/members/MemberDetail'

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
                    path='/members/:id'
                    element={<MemberDetail />}
                />
                <Route
                    path='/articles'
                    element={<Articles />}
                />
                <Route
                    path='/projects'
                    element={<Projects />}
                />
                <Route
                    path='/projects/:id'
                    element={<ProjectDetail />}
                />
            </Routes>
        </Router>
    )
}