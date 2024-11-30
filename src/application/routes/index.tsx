import { Route, Routes } from 'react-router-dom'
import { routes } from '../constants/constants.routers'

const AppRoute: React.FC = () => {
    return (
        <Routes>
            {Object.entries(routes).map(([key, route]) => (
                <Route key={key} path={route.path} element={route.element} />
            ))}
        </Routes>
    )
}

export default AppRoute