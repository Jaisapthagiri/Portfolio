import { Typewriter } from 'react-simple-typewriter';
import Bio from '../util/Bio';

const Typing = () => {
    return (
        <Typewriter
            words={Bio.roles}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={100}
            delaySpeed={1000}
        />
    )
}

export default Typing;