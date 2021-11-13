import React from 'react'
import PropTypes from 'prop-types'
import "../components/Form.css";

import { FaSistrix } from "react-icons/fa";

const Form = ({handleSubmit}) => {
    return (
        <>
            <form onSubmit={handleSubmit} className="formSearch">
                <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" name="inputText"></input>
                <button className="btn btn-outline-primary" type="submit"><FaSistrix /></button>
            </form>
        </>
    )
}

    Form.propTypes = {
        handleSubmit: PropTypes.func,
};

export default Form
