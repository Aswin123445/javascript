function FirstComponent(){
    return(
        <div className="parent">
        <h1 className="fot-font">MY INTEREST IN REACT</h1>
        <ol className="side-bar">
            <li>about us</li>
            <li>info</li>
            <li>not today</li>
        </ol>
        </div>
    )
}

function SecondComponent(){
    return (
        <ol className="List">
          <li>i always love to learn new things</li>
          <li>love to learn react</li>
        </ol>
    )
}

function FooterCompent(){
    return (
        <footer>
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </footer>
    )
}

export {SecondComponent , FooterCompent};
export default FirstComponent;