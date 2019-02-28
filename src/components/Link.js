import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
  // console.log('active in Link:',active),
  // console.log('children in Link:',children),
  // console.log(filter),
    <button className="waves-effect waves-light btn"
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '0.3em',
           marginRight: '0.3em'
       }}
    >
      {children}
    </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link