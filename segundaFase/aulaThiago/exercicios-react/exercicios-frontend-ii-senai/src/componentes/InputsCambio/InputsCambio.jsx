// import { useState } from "react";
// import "./InputsCambio.css";

// function InputsCambio({ currency, taxa }) {
//   const [real, setReal] = useState("");
//   const [cambio, setCambio] = useState("");

//   setReal(() => {
//     if (real === "") {
//       setCambio("");
//     } else {
//       setCambio(Number(real) / taxa);
//     }
//   });

//   setCambio(() => {
//     if (cambio === "") {
//       setReal("");
//     } else {
//       setReal(Number(cambio) * taxa);
//     }
//   });

//   return (
//     <div className="inputs-cambio__root">
//       <input
//         type="number"
//         placeholder="Reais"
//         value={real}
//         onChange={(event) => {
//           setReal(event.target.value);
//         }}
//       />
//       <span>reais é igual a </span>
//       <input
//         type="number"
//         placeholder={currency}
//         value={cambio}
//         onChange={(event) => {
//           setCambio(event.target.value);
//         }}
//       />
//       <span>{currency}</span>
//     </div>
//   );
// }

// export default InputsCambio;
import { useState } from "react";
import "./InputsCambio.css";

function InputsCambio({ currency, taxa, place}) {
  const [real, setReal] = useState("");
  const [cambio, setCambio] = useState("");

  function cambioReal(event) {
    const real = event.target.value;
    setReal(real);

    if (real === "") {
      setCambio("");
    } else {
      setCambio((Number(real) / taxa).toFixed(2));
    }
  }

  function cambioCurrency(event) {
    const cambio = event.target.value;
    setCambio(cambio);

    if (cambio === "") {
      setReal("");
    } else {
      setReal((Number(cambio) * taxa).toFixed(2));
    }
  }

  return (
    <div className="inputs-cambio__root">
      <input
        type="number"
        placeholder="Real"
        value={real}
        onChange={cambioReal}
      />

      <span>reais é igual a </span>

      <input
        type="number"
        placeholder={place}
        value={cambio}
        onChange={cambioCurrency}
      />

      <span>{currency}</span>
    </div>
  );
}

export default InputsCambio;