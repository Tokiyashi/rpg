import Character from "./pages/CharacterPage/Character";
import {Route, Routes} from "react-router-dom";
import CreateCharacter from "./pages/CreateCharacterPage/CreateCharacter";

function App() {

    return (
        <div className="wrapper">
            <Routes>
                <Route path='/' element={<CreateCharacter/>}/>
                <Route path='/character' element={<Character/>}/>
            </Routes>
        </div>
    );
}

export default App;
