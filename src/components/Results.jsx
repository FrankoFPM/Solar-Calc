import { Input, Tooltip } from "@nextui-org/react";
import PropTypes from 'prop-types';
import { useState } from "react";

function Results({et, hps, pp, n}) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  return (
    <div>
      <div className="text-2xl font-semibold border-b-2 pb-2 flex mb-3 items-center justify-between">
        <p>Resultados del Cálculo</p>
        <Tooltip 
          content="Los datos proporcionados son aproximados y pueden variar dependiendo de las condiciones climáticas y de la instalación."
          color="success"
          isOpen={tooltipVisible}
        >
          <div onClick={()=>setTooltipVisible(!tooltipVisible) } className="inline-block bg-orange-700 mx-3 rounded-full text-base h-6 w-6 text-center text-white">?</div>
        </Tooltip>
      </div>
      <div className="flex w-full flex-col md:flex-row gap-3">
        <Input
          label="Energía total demandada"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">Et</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <div
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                Wh/día
              </div>
            </div>
          }
          type="number"
          description="Energía total demandada (Obligatorio)"
          readOnly
          value={et}
        />
        <Input
          label="Horas pico solares"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">HPS</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <div
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
              </div>
            </div>
          }
          type="number"
          description="Horas pico solares (Obligatorio)"
          readOnly
          value={hps}
        />
        <Input
          label="Potencia pico del generador FV"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">Pp</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <div
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                W
              </div>
            </div>
          }
          type="number"
          description="Potencia pico del generador FV (Obligatorio)"
          readOnly
          value={pp}
        />
        <Input
          label="Número de paneles solares"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">N</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <div
                className="outline-none border-0 bg-transparent text-default-400 text-small"
              >
                {n}
              </div>
            </div>
          }
          type="number"
          description="Número de paneles solares (Obligatorio)"
          readOnly
          value={Math.ceil(n)}
        />
      </div>
    </div>
  );
}
Results.propTypes = {
  et: PropTypes.number.isRequired,
  hps: PropTypes.number.isRequired,
  pp: PropTypes.number.isRequired,
  n: PropTypes.number.isRequired,
};
export default Results;