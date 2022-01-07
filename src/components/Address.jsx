// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Button } from "bootstrap";

// const Address = () => {
//     const [data, setdata] = useState([]);
//     const [cntType, setCntType] = useState([]);
//     const getData = () => {
//         const myAdd = axios.post("http://localhost:1010/addnum",
//             data[
//             {
//                 "HNo": "654645",
//                 "StreetNo": "79864",
//                 "LandMark": "Near Golden GYm",
//                 "city": "pune",
//                 "state": "maharashtra",
//                 "country": "india"
//             },
//             {
//                 "HNo": "6565464",
//                 "StreetNo": "654654",
//                 "LandMark": "Near Golden GYm",
//                 "city": "aurangabad",
//                 "state": "maharashtra",
//                 "country": "india"
//             },
//             {
//                 "HNo": "1232",
//                 "StreetNo": "231",
//                 "LandMark": "Near Golden GYm",
//                 "city": "nanded",
//                 "state": "maharashtra",
//                 "country": "india"
//             }],
//             type: setCntType;
//             Language: "MAR"
//         )
//         setdata(...myAdd.data)
//     }
//     useEffect(() => {
//         getData()
//     },[cntType])
//     return (
//         <React.Fragment> 
//             <Button onCick={()=>setCntType("IND")}>India</Button>
//             {(data.map((item) => (<h1>{item}</h1>)))}
//             <Button onCick={() => setCntType("USA")}>USA</Button>
//         </React.Fragment>

//     )
// };

// export default Address;
