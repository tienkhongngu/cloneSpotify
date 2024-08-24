import {useRef} from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

const DispalyHome = () => {

  return (
    <div>
     <Navbar />
     <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>Phổ biến với người nghe</h1>
      <div className='flex overflow-auto' >
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
      </div>
     </div>
     <div className='mb-4'>
     <h1 className='my-5 font-bold text-2xl'>Đề xuất cho hôm nay</h1>
     <div className='flex overflow-auto' >
      {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
     </div>
    </div>
    </div>
  )
}

export default DispalyHome
