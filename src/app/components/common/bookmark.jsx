import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    return (
        <button>
            <i
                className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}
                {...rest}
            ></i>
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool
};

export default BookMark;
