import React from 'react';

const Footer = () => {
  let footerstyle = {
    position: "relative",
    top: "100vh",
    width: "100%"
  }
  return (
    <footer style={footerstyle} className="bg-dark text-light py-3">
      <p className="text-center">
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer;