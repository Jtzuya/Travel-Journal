import React from 'react'

const Footer = () => {
  return (
    // HTML Entities docs (i.e ⓒ) https://www.w3schools.com/html/html_entities.asp
    <footer>
      <div className="px-6 py-5 bg-react-blue-dark text-xs font-body text-react-blue-light-2 rounded-b-md">
        &copy; 2022 Jtzuya Development. All rights reserved
        <p className="pt-2 font-body font-medium tracking-wide uppercase text-[11.5px]">Check Figma design ~ <a className="decoration-none text-blue" target="blank" href="https://www.figma.com/file/9lNvnDWoo0EEk9IgsRqlcX/Travel-Journal-(Copy)?node-id=2%3A2">here</a></p>
      </div>
    </footer>
  )
}

export default Footer