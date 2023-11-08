import './BaseInfo.css'

export function  BaseInfo ({title, content, listStyle = false}){

    const classUl = listStyle ? `list-container`:`list-container list-style`;
    return <div className='base-container'>
         <h3 className='base-header'>{title}</h3>
         <ul className={classUl}>
         {content.map((item, index)=>{
            return <li key={index} className="list-item">{item}</li>
         })}
         </ul> 
    </div>

}