import React from "react"
import {
  Link,
} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">E bicycerent</Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Mượn Xe</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/traxe">Trả Xe</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/baixe">Bãi xe</Link>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}
export default Header