import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("root"));

// class MyApp extends React.Component {
//   state = {
//     loading: false,
//     data: [],
//   };

//   async componentDidMount() {
//     let dataFound = await fetch(
//       "https://hplussport.com/api/products/order/price/sort/asc/qty/5"
//     );
//     let data = await dataFound.json();
//     console.log(`Yay data ${data}`);
//     this.setState({ data: data, loading: false });
//   }
//   render() {
//     console.log(this.state.data);
//     return (
//       <div>
//         {this.state.loading ? (
//           "Loading..."
//         ) : (
//           <div>
//             {this.state.data.map((product, i) => {
//               return (
//                 <div key={i}>
//                   <h3>Products of the week</h3>
//                   <h4>{product.name}</h4>
//                   <img alt={product.name} src={product.image} height={100} />
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }
