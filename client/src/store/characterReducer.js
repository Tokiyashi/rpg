const character = {
    name: "Безымянный персонаж",
    stats: {
        strength: 0,
        agility: 0,
        intelligence: 0,
        charisma: 0,
    },
    skills: {
        attack:0,
        stealth:0,
        archery: 0,
        learnability: 0,
        survival: 0,
        medicine: 0,
        intimidation: 0,
        insight:0,
        appearance: 0,
        manipulation: 0
    }
}

export const characterReducer = (state = character, action) => {
    switch (action.type){
        case "RENAME":
            return {...state, name: action.payload}
        case "CHANGE_STAT":
            return {...state, stats: {...state.stats, [action.payload.stat]: action.payload.value}}
        case "CHANGE_STATS":
            return {...state, stats: action.payload}
        case "CHANGE_SKILL":
            return {...state, skills: {...state.skills, [action.payload.skill]: action.payload.value}}
        case "LOAD_CHARACTER":
            return { ...action.payload }
        default:
            return state
    }
}