import 'bootstrap/dist/css/bootstrap.min.css'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import '../src/styles/styles.scss'
import { AppRouter } from './router/AppRouter'

export const App = () => {
    return (
        <AppRouter />
    )
}
