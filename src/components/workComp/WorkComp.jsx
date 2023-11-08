import './WorkComp.css'

export  function WorkComp ({role, nameCompany, link, time, desc}){
    return <div className='company-container'>
        <h4 className='role'>{role}</h4>
        <p className='company'><b><i>Company: </i></b>{nameCompany} | <i>{time}</i></p>
        <a className='link' href={link}>Link to company site</a>
        <p className='description-role'>{desc}</p>
    </div>
}