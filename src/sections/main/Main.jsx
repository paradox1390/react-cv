import './Main.css'
import { Aside } from '../aside/Aside'
import { WorkComp } from '../../components/workComp'

import { WORK } from '../../storage/storage'

export function Main (){
    return <div className='container'>
        <Aside/>
        <main className='main-container'>
            <h2 className='header-exp'>Work experience</h2>
            {WORK.map((item, index)=>{
               return (<WorkComp key={index} role={item.role} nameCompany={item.nameCompany} time={item.workTime} link={item.linkCompany} desc={item.descRole}/>)
            })}
        </main>
    </div>
}