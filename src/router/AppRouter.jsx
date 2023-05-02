import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'
import { Articles } from '../components/pages/articles/Articles'
import { Home } from '../components/pages/Home'
import { Projects } from '../components/pages/projects/Projects'
import { Members } from '../components/pages/members/Members'
import { MemberDetail } from '../components/pages/members/MemberDetail'
import { SimuladorIncendiosPatagonia } from '../components/pages/projects/static/SimuladorIncendiosPatagonia'
import { FireWeatherIndex } from '../components/pages/projects/static/FireWeatherIndex'
import { AutomataCelularParalelo } from '../components/pages/projects/static/AutomataCelularParalelo'

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
                    path='/projects/23dd07f1-e194-49b5-929e-c594d6414393'
                    element={<SimuladorIncendiosPatagonia />}
                />
                <Route
                    path='/projects/af65b3ce-6ec4-4043-a293-5ac3dc1e1877'
                    element={<FireWeatherIndex />}
                />
                <Route
                    path='/projects/204d017c-3b6b-4a45-bced-315a9f024440'
                    element={<AutomataCelularParalelo />}
                />
            </Routes>
        </Router>
    )
}