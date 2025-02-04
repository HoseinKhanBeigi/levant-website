import React from "react";

function PolygonLogo({color}) {
    return (
        <svg style={{marginRight: "5px", marginTop: "3px"}} xmlns="http://www.w3.org/2000/svg" width="10" height="16"
             viewBox="0 0 10 16"
             fill="none">
            <path d="M9 15L1 8L9 1" stroke={color} stroke-linecap="round"/>
        </svg>
    );
}

export default PolygonLogo;
