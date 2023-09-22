import head from './image/head.jpg'

export default function Header(){
    return(
        <>
        <div className="header">
        {/* <h1>&#127874;</h1> */}
           <img src={head} alt="head" className="head-img"></img>
      
        </div>
        </>
    )
}