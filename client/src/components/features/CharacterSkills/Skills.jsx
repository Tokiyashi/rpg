import React from 'react';
import Skill from "./Skill";
import cl from "./Skills.module.css"

const Skills = () => {
    return (
        <div className={cl.skills}>
            <h3> Навыки Персонажа: </h3>
            <div className={cl.skills__lists}>
                <ul>
                    Сила:
                    <li>
                        <Skill baseStat={"strength"}  name={"attack"} title="Атака"/>
                    </li>
                </ul>
                <ul>
                    Ловкость:
                    <li>
                        <Skill baseStat={"agility"} title={"Стелс"} name={"stealth"} />
                    </li>
                    <li>
                        <Skill baseStat={"agility"} title={"Стрельба из лука"} name={"archery"} />
                    </li>
                </ul>
                <ul>
                    Интеллект:
                    <li>
                        <Skill baseStat={"intelligence"} title={"Обучаемость"} name={"learnability"} />
                    </li>
                    <li>
                        <Skill baseStat={"intelligence"} title={"Выживание"} name={"survival"} />
                    </li>
                    <li>
                        <Skill baseStat={"intelligence"} title={"Медицина"} name={"medicine"} />
                    </li>
                </ul>
                <ul>
                    Харизма:
                    <li>
                        <Skill baseStat={"charisma"} title={"Запугивание"} name={"intimidation"} />
                    </li>
                    <li>
                        <Skill baseStat={"charisma"} title={"Проницательность"} name={"insight"} />
                    </li>
                    <li>
                        <Skill baseStat={"charisma"} title={"Внешний вид"} name={"appearance"} />
                    </li>
                    <li>
                        <Skill baseStat={"charisma"} title={"Манипулирование"} name={"manipulation"} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;