const Aside = () => {
    return (
        <div>
            <ul className="menu bg-white h-[400px] rounded-box">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul>
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                  <li>
                    <a>Parent</a>
                    <ul>
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
        </div>
    );
};

export default Aside;