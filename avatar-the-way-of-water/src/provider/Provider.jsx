import { v4 as uuidv4 } from 'uuid'
import { createContext } from "react"

const bbdd = {
    header : {

        menu : [
            { id : uuidv4() , title : "Home"         , href :"#"},
            { id : uuidv4() , title : "Movies "      , href :"#"},
            { id : uuidv4() , title : "Games"        , href :"#"},
            { id : uuidv4() , title : "Experiences " , href :"#"},
           
            { id : uuidv4() , title : "Community"    , href :"#"},
            { id : uuidv4() , title : "Publishing"   , href :"#"},
            { id : uuidv4() , title : "Partnerships" , href :"#"},
            { id : uuidv4() , title : "Our Team"     , href :"#"},
        ] ,
        rrss : [
            { id : uuidv4() , title : 'Facebook'  , href : '#' , icono : 'facebook'},
            { id : uuidv4() , title : 'Twitter'   , href : '#' , icono : 'twitter'},
            { id : uuidv4() , title : 'Instagram' , href : '#' , icono : 'instagram'},
            { id : uuidv4() , title : 'Youtube'   , href : '#' , icono : 'youtube'},
        ]
    },
    hero : {
        h2 : 'Avatar the way of water',
        claim : 'Experience the Academy Award-winning phenomenon now streaming on Disney+.'
        ,
        buttons : [
            { id : uuidv4() , title : 'Stream on Disney+'   , href : '#'},
            { id : uuidv4() , title : 'Buy it now' , href : '#'},
        ]
    }
}

export const GlobalContext = createContext()

export const Provider = ({ children }) => {
   return(
    <GlobalContext.Provider value={ bbdd }>
        { children }
    </GlobalContext.Provider>
   )
}