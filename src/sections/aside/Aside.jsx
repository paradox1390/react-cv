import './Aside.css'
import { BaseInfo } from '../../components/baseInfo'
import { ABOUT } from '../../storage/storage'

export function Aside (){
const {contacts, education, languages, skills} = ABOUT
    return <aside className='aside-container'>
        <BaseInfo title={contacts.title} content={contacts.content}/>
        <BaseInfo title={education.title} content={education.content}/>
        <BaseInfo title={languages.title} content={languages.content} listStyle={true}/>
        <BaseInfo title={skills.title} content={skills.content}/>
    </aside>
}