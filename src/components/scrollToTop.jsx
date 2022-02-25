import React, { useEffect } from "react";
import { useLocation } from "react-router";
import * as PropTypes from "prop-types";

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
};

ScrollToTop.propTypes = {
    children: PropTypes.any
};

export default ScrollToTop;