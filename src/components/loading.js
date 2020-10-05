import React, { memo } from "react";
import Spinner from "react-spinner-material";

const Loading = ({ loading }) =>
  loading && (
    <div className="overlay-content">
      <div className="wrapper">
        <Spinner radius={120} color={"#007bff"} visible={true} />
      </div>
    </div>
  );

export default memo(Loading);
