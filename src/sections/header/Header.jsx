import './Header.css'
import foto from './../../../public/foto.jpg'
export function Header (){
    return <>
    <header>
        <div className='header-info-container'>
        <h1>Sherstyuk Oleksandr</h1>
        <p>React Developer (Junior/Trainee)</p>
        </div>
        <div className='header-img-container'>
            <img src={foto} alt=""/>
        </div>
    </header>
    </>
}