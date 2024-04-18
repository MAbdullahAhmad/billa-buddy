import { Link } from 'react-router-dom';

/**
 * Creates <Link> element if 'to' is in props
 * Otherwise creates <a> element
 * 
 * @param {Object} props
 */
function AutoLink(props){
  let {to, ...rest} = props;

  return to ? (
    <Link to={to}>
      <span {...rest}/>
    </Link>
  ) : <a {...props}/>;
}

export default AutoLink;