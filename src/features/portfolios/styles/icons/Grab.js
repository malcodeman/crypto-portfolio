import React from "react";
import PropTypes from "prop-types";

const Grab = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      {...otherProps}
    >
      <path
        fill-rule="evenodd"
        fill="currentColor"
        d="M5 3.505C5 3.226 5.214 3 5.505 3h.99c.279 0 .505.214.505.505v.99A.497.497 0 0 1 6.495 5h-.99A.497.497 0 0 1 5 4.495v-.99zm4 0C9 3.226 9.214 3 9.505 3h.99c.279 0 .505.214.505.505v.99a.497.497 0 0 1-.505.505h-.99A.497.497 0 0 1 9 4.495v-.99zm-4 4C5 7.226 5.214 7 5.505 7h.99c.279 0 .505.214.505.505v.99A.497.497 0 0 1 6.495 9h-.99A.497.497 0 0 1 5 8.495v-.99zm4 0C9 7.226 9.214 7 9.505 7h.99c.279 0 .505.214.505.505v.99a.497.497 0 0 1-.505.505h-.99A.497.497 0 0 1 9 8.495v-.99zm-4 4c0-.279.214-.505.505-.505h.99c.279 0 .505.214.505.505v.99a.497.497 0 0 1-.505.505h-.99A.497.497 0 0 1 5 12.495v-.99zm4 0c0-.279.214-.505.505-.505h.99c.279 0 .505.214.505.505v.99a.497.497 0 0 1-.505.505h-.99A.497.497 0 0 1 9 12.495v-.99z"
      />
    </svg>
  );
};

Grab.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Grab.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default Grab;
