import { Link, useLocation } from 'react-router-dom';

/**
 * Creates <Link> element if 'to' is in props
 * Otherwise creates <a> element
 * 
 * @param {Object} props
 */
function AutoLink(props){

  const {to, children, ...rest} = props;

  // If Link is 'Active'
  const location = useLocation();
  const is_active = to && (location.pathname === to);

  // Render Conditionally
  return to ? (
    <Link to={to} {...rest} className={`${rest.className} ${is_active ? 'active' : ''}`}>
      {children}
    </Link>
  ) : <a {...props}/>;
  
}

export default AutoLink;