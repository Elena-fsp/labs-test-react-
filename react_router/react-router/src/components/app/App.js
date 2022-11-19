import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { ComicsPage} from '../pages';
import AppHeader from '../appHeader/AppHeader';
import Characters from '../characters/Characters';

const App = () => {
    
    return (
            <div>
                <AppHeader/>
                <Router>
                <main>
                  <Routes>
                    <Route exact path='/' element={<ComicsPage/>} />
                    <Route path='/characters' element={<Characters/>} />
                  </Routes>  
                </main>
                </Router>
            </div>
    )
}

export default App;