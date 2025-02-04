
const Header = () => {
 
    const isUserLogger = true
     


  return (
    <div className="space-between">
      <div>
        <img src="../assets/images/Frame 121.png" alt="" />
      </div>
      <div>
        {!isUserLogger? (<a href="#">Home</a> ) : (
            <ul className="flex">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Poducts</a>
                </li>
                <li>
                    <a href="#">About me</a>
                </li>
            </ul>
        )}
      </div>
      <div></div>
    </div>
  )
}

export default Header
