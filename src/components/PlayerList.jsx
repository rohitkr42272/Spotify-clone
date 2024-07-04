import './PlayerList.css'
const PlayerList=()=>{
    const playlist=[
        {
            id:1,
            title:'Babuji jara',
            artist:'Rohit',
            album:'rodi',
            duration:'4:55',
        },
        {
            id:2,
            title:'dilbar',
            artist:'jubin',
            album:'mp3',
            duration:'4:35',
        },
        {
            id:3,
            title:'siya ram',
            artist:'Ravi',
            album:'abcd',
            duration:'3:55',
        },
        {
            id:4,
            title:'chandni',
            artist:'kavi rodi',
            album:'kuch v',
            duration:'10:55',
        },
        {
            id:5,
            title:'badan pe sitare',
            artist:'koi nhi',
            album:'X',
            duration:'5:30',
        },
        {
            id:6,
            title:'gana',
            artist:'X',
            album:'nhi pata',
            duration:'2:33',
        },
        {
            id:7,
            title:'judaii',
            artist:'Gautam',
            album:'usi ka hai',
            duration:'6:10',
        },
        {
            id:8,
            title:'murga',
            artist:'pawan',
            album:'bhojpuri',
            duration:'7:35',
        },
        {
            id:9,
            title:'dil lagana',
            artist:'gunjan',
            album:'bekar',
            duration:'4:25',
        },
        {
            id:10,
            title:'jag ghumiya',
            artist:'Aditya',
            album:'sharan',
            duration:'3:10',
        },

    ]
    return(
        <div className='playerlist-container'>
           <div className='playerlist-header'>
              <div className='playerlist-image-card'></div>
                <div className='playerlist-body'>
                    <p>PLAYLIST</p>
                    <h1>Best of Mine</h1>
                </div>
           </div>
           <div className='playerlist-list'>
            <div className='playerlist-list-id'>#</div>
            <div className='playerlist-list-title'>TITLE</div>
            <div className='playerlist-list-album'>ALBUM</div>
            <div className='playerlist-list-duration'>DURATION</div>
           </div>
           <div className='playerlist-list-container'>
                {
                    playlist.map(item=>{
                        return(
                            <div className='playerlist-list'>
                                 <div className='playerlist-list-id'>
                                    {item.id}
                                 </div>
                                 <div className='playerlist-list-title'>
                                    {item.title}
                                 </div>
                                 <div className='playerlist-list-album'>
                                    {item.album}
                                 </div>
                                 <div className='playerlist-list-duration'>
                                    {item.duration}
                                 </div>
                            </div>
                        )
                    })
                }
           </div>
        </div>
    )
}
export default PlayerList;