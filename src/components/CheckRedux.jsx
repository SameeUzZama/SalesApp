import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row } from "react-bootstrap";

const CheckRedux = () => {
  const selectData = useSelector((state) => state.productReducer.product);
  console.log(selectData);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: "ADD_PRODUCT",
      data: ["some", "something"],
    });
  };
  return (
    <div>
      <Button onClick={handleClick}>Dispatch me</Button>
      <Row>
        {selectData.map((item) => {
          return <h1>{item}</h1>;
        })}
      </Row>
    </div>
  );
};
export default CheckRedux;
