import { IoChevronForwardOutline } from "react-icons/io5";
import './AnimatedDetails.sass';

export default function AnimatedDetails({title, children, ...props}) {

  const handleToggle = event => {
    const element = event.target;

    const openHeight = element.scrollHeight + 'px';

    element.style.height = element.open ? openHeight : null;
  }

  return (
    <>
     <details onToggle={handleToggle} className='animated-details' {...props}>
        <summary className='animated-details__summary'>
            {title}
            <IoChevronForwardOutline className='animated-details__arrow' /></summary>
        {children}
      </details>    
    </>

  )

}