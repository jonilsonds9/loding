import React from "react";

// import Spinner from "react-spinkit";
import Spinner from "react-spinner-material";

const Loading = ({ loading }) => {
  return loading ? (
    <div className="overlay-content">
      <div className="wrapper">
        <Spinner
          size={120}
          spinnerColor={"#007bff"}
          spinnerWidth={5}
          visible={true}
        />
      </div>
    </div>
  ) : null;
};

export default Loading;
