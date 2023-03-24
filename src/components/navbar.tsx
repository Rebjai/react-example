import menuLogo from "./../assets/logo.webp"
export default function NavBar() {
    
    return (
        <nav className="w-full grid grid-cols-3 py-5 sticky top-0 bg-white drop-shadow-md"> 
            <div className="menu-image ">
                <img src={menuLogo} className='max-w-[50%] w-full ml-10' alt="" />
            </div>
            <ul id="menu-options" className="flex items-center gap-4 font-light">
                <li>Conócenos</li>
                <li>Perfilamiento</li>
                <li>Eventos</li>
            </ul>
        </nav>
    )
}