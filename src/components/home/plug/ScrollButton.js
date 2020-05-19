import React from "react";
import "./Scroll.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp} from '@fortawesome/free-solid-svg-icons';

class ScrollButton extends React.Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    render () {
        return <button title='Back to top' className='scroll'
                       onClick={ () => { this.scrollToTop(); }}>
            <span className='arrow-up glyphicon glyphicon-chevron-up'>
                 <FontAwesomeIcon icon={faSortUp} style={{ color: "white" }} size="1x"/>
            </span>
        </button>;
    }
}
export default ScrollButton;