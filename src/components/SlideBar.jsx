import{ReactComponent as Homeicon} from '../assets/Homeicon.svg'
import{ReactComponent as Searchicon} from '../assets/Searchicon.svg'
import{ReactComponent as Libraryicon} from '../assets/Libraryicon.svg'

import './SlideBar.css'
const SlideBar=()=>{
    const myplaylist=[
        {
          id:1,
          name: 'Rohit',  
        },
        {
            id:2,
            name: 'Ravi',
        },
        {
            id:3,
            name: 'Gautam',  
          },
          {
              id:4,
              name: 'Mohit',
          },
          {
            id:5,
            name: 'Vg',  
          },
          {
              id:6,
              name: 'Amisha',
          },
          {
            id:7,
            name: 'Deepu',  
          },
          {
              id:8,
              name: 'Ajit',
          },
    ]
    return(
        <div className='slide-bar-container'>
            <div className='slide-bar-items'>
               <Homeicon width={'24px'} strokeWidth={'3px'}/> Home
            </div>
            <div className='slide-bar-items'>
               <Searchicon width={'24px'} strokeWidth={'3px'}/> Search
            </div>
            <div className='slide-bar-items'>
               <Libraryicon width={'24px'} strokeWidth={'3px'}/> Library
            </div>

            <div className='slide-options'>
               {
                myplaylist.map((item)=>{
                    return(
                        <div className='slide-bar-items' key={item.id}>
                           {item.name}
                        </div>
                    )
                })
               }
            </div>

        </div>
    )
}
export default SlideBar;