import React from "react";
import FilterLink from "../container/FilterLink";

const Footer = () => (
    <div>
        Show: 
        <FilterLink filter="SHOW_ALL">All</FilterLink>
        ，
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
        ，
        <FilterLink filter="SHOW_COMPLETED">SHOW_COMPLETED</FilterLink>
    </div>
)

export default Footer;