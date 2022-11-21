import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { ComicsPage, SepareteComic} from './components/pages';
import AppHeader from './components/appHeader/AppHeader';
import Characters from './components/characters/Characters';

const App = () => {
    
    return (
            <div>
                <Router>
                <AppHeader/>
                <main>
                  <Routes>
                    <Route path='/' element={<ComicsPage/>} />
                    <Route path='/:ComicId' element={<SepareteComic/>} />
                    <Route path='/characters' element={<Characters/>} />
                  </Routes>  
                </main>
                </Router>
            </div>
    )
}

export default App;