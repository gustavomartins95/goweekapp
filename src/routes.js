import { createStackNavigator } from 'react-navigation';

import Login from './pages/login';
import Timeline from './pages/timeline';
import New from './pages/new';

const Routes = createStackNavigator({
    Login,
    Timeline,
    New,
});

export default Routes;
