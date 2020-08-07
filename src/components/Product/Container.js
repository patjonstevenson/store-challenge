import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withLowestPriceVariant } from "./utils";

export default View => data => {
    // const [product, setProduct] = useState({});
    // useEffect(() => {
    //     console.log("Product at start of useEffect: ", product);
    //     if (product.variant) {
    //         setProduct(withLowestPriceVariant(data));
    //         console.log("PRODUCT in CONTAINER: ", product);
    //     }
    // }, [])
    // const [ViewSelection, setViewSelection] = useState(View);
    // console.log("Inside Product Container. View selected: ", ViewSelection);


    return () => <View data={withLowestPriceVariant(data)} /> //viewSelector={setViewSelection}
    // viewSelector: setViewSelection
    // };
}