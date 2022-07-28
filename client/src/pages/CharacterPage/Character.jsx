import Stats from "../../components/features/CharacterStats/Stats";
import Skills from "../../components/features/CharacterSkills/Skills";
import CharacterName from "../../components/features/CharacterName/CharacterName";
import './Character.css'
import CharacterSelector from "../../components/features/SaveAndLoad/CharacterSelector";
import {Link} from "react-router-dom";
import React from "react";

const Character = () => {

    return (
        <div className="character">
            <CharacterName/>
            <Stats/>
            <Skills/>
            <CharacterSelector/>
            <Link to="/"> Создать нового персонажа </Link>
        </div>
    );
};

export default Character;