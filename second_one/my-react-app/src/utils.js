import logo from './logo.svg'
function Navbar(){
    return(
        <nav className="navbar">
             <div className='sub1-navbar'>
                <img src={logo} width="70px"></img>
                <div className='nav-heading'>REACT FACTS</div>
             </div>
             <div className='sub2-navbar'>
                React Course Project-1
             </div>
        </nav>
    )
}

function BodyPart(props){
    return(
        <div className='bodydiv'>
            <div className='body-main-heading'>Fun Facts About React</div>
            {props.children}
        </div>
    )
}

function ListSection(){
    return(
        <div className='fun_spec_list'>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jorden Walke</li>
                <li>Has well over 100K plus stars in github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers 1000 of enterprice apps , including mobile apps</li>

            </ul>
        </div>
    )
}

export {Navbar , BodyPart , ListSection};