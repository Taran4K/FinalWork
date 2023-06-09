var headerText = `<div class="menu" name="nav" id="nav" onmouseout="HideNavigation(nav)" onmouseover="ShowNavigation(nav)">
        <img class="imgformenu" src="../images/main-menu.png" align="right">
        <nav class="menu-list">
            <div class="menu-div">
                <a href="../pages/index.html" style="--clr:#39FF14" class="menu-a"><span>Главная</span><i></i></a>
                    <img class="menu-img" src="../images/home.png" align="right">
            </div>
            <div class="menu-div">
                <a href="../pages/finances.html" style="--clr:#39FF14" class="menu-a"><span>Финансы</span><i></i></a>
                <img class="menu-img" src="../images/stats.png" align="right">
            </div>
            <div class="menu-div">
                <a href="../pages/department.html" style="--clr:#39FF14" class="menu-a"><span>Отделы</span><i></i></a>
                <img class="menu-img" src="../images/it-department.png" align="right">
            </div>
            <div class="menu-div">
                <a href="../pages/employee.html" style="--clr:#39FF14" class="menu-a"><span>Сотрудники</span><i></i></a>
                <img class="menu-img" src="../images/employees.png" align="right">
            </a>
            </div>
            <div class="menu-div">
                <a href="../pages/organization.html" style="--clr:#39FF14" class="menu-a"><span>Организация</span><i></i></a>
                <img class="menu-img" src="../images/strategy.png" align="right"/>
            </div>
             <div class="menu-div" style="position: absolute;
  bottom: 5px;">
                <a href="../pages/settings.html" style="--clr:#39FF14" class="menu-a"><span>Настройки</span><i></i></a>
                <img class="menu-img" src="../images/settings.png" align="right"/>
            </div>
        </nav>
    </div>`;

function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

var fragment = create(headerText);
document.body.insertBefore(fragment, document.body.childNodes[0]);