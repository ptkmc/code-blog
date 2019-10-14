import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import "./layout.css"
import useDarkMode from 'use-dark-mode'
import Switch from "react-switch"
import sunIcon from "../../content/assets/sun-icon.svg"
import moonIcon from "../../content/assets/moon-icon.svg"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <Switch
      onChange={darkMode.toggle}
      checked={darkMode.value}
      onColor="#222"
      offColor="#333"
      checkedIcon={<img src={moonIcon} alt="moon icon" />}
      uncheckedIcon={<img src={sunIcon} alt="sun icon" />}
      boxShadow="0 0 2px 3px #B38CD9"
      activeBoxShadow="0 0 2px 3px #dfb3e6"
    />
  )
}

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(.9),
            margin: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            margin: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header
          style={{
            height: 42, // keeps Toggle centered at same height
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: rhythm(1.5),
          }}
        >
          {header}
          <DarkModeToggle />
        </header>
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
