import logo from './images/superleague.png'
import vip2 from './images/i.m.vijayan.png'
import logowhite from './images/logo(white).png'
import kannursquadfc from './images/kannur-squad-fc.jpg';
import thiruvandrumkombans from './images/thiruvandrumkombans.png'
import thrissurroar from './images/thrissurroar.jpg'
import { PiCalendarDotsFill } from "react-icons/pi";

//Navitems
//First navitems
const firstnavItems=[
    {
        id:1,
        title:"Home"
    },
    {
        id:2,
        title:"About us"
    },
    {
        id:3,
        title:"League"
    }
]
//Second navitems
const secondNavItems=[
    {
        id:1,
        title:"Project game changer"
    },
    {
        id:2,
        title:"Contact"
    }
]

// Football Teams 
const footBallTeams=[
    {
        id:1,
        imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/c7/Calicut_FC.png",
        teamName:"calicut",
        teamNameSuffix:"football club"
    },
    {
        id:2,
        imageUrl:kannursquadfc,
        teamName:"kannur",
        teamNameSuffix:"squad fc"
    },
    {
        id:3,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbF99bsGRlu5_oiMsLztuQTiIhJSVJoEm0V1tAduHOydFXJDMXKFwTrbkTLQCGEP0_dg&usqp=CAU",
        teamName:"kochi",
        teamNameSuffix:"football club"
    },
    {
        id:4,
        imageUrl:"https://fcmalappuram.com/wp-content/uploads/2024/07/Untitled-design-31.png",
        teamName:"malappuram",
        teamNameSuffix:"football club"
    },
    {
        id:5,
        imageUrl:thiruvandrumkombans,
        teamName:"thiruvananthapuram",
        teamNameSuffix:"kombans fc"
    },
    {
        id:6,
        imageUrl:thrissurroar,
        teamName:"thrissur",
        teamNameSuffix:"roar fc"
    }
]
//Kerala cities
const keralaCities=[
    {
        id:1,
        icon:PiCalendarDotsFill,
        cityName:'alappuzha'
    },
    {
        id:2,
        icon:PiCalendarDotsFill,
        cityName:'kozhikode'
    },
    {
        id:3,
        icon:PiCalendarDotsFill,
        cityName:'malappuram'
    },
    {
        id:4,
        icon:PiCalendarDotsFill,
        cityName:'alappuzha'
    },
    {
        id:5,
        icon:PiCalendarDotsFill,
        cityName:'thrissur'
    },
    {
        id:6,
        icon:PiCalendarDotsFill,
        cityName:'ernakulam'
    },
    {
        id:7,
        icon:PiCalendarDotsFill,
        cityName:'trivandrum'
    },
    {
        id:8,
        icon:PiCalendarDotsFill,
        cityName:'kannur'
    },
    {
        id:9,
        icon:PiCalendarDotsFill,
        cityName:'palakkad'
    }
]

export {logo,vip2,logowhite,firstnavItems,secondNavItems,footBallTeams,keralaCities}