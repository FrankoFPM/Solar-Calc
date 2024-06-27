import { Input, Tooltip } from "@nextui-org/react";
import { useState } from "react";

export default function Environmental({powert, year}) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [factorCO2, setFactorCO2] = useState(0.5);
  return (
    <>
      <div className="text-2xl font-semibold border-b-2 pb-2 flex mb-3 items-center justify-between">
        <p>Impacto Ambiental</p>
        <Tooltip
          content="Los datos proporcionados son aproximados y pueden variar"
          color="success"
          isOpen={tooltipVisible}
        >
          <div onClick={()=>setTooltipVisible(!tooltipVisible) } className="inline-block bg-orange-700 mx-3 rounded-full text-base h-6 w-6 text-center text-white">?</div>
        </Tooltip>
      </div>
      <div className="flex w-full flex-col md:flex-row gap-3">
        <Input
          label="Energía nominal del sistema"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">Pt</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <div
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                Wh
              </div>
            </div>
          }
          type="number"
          description="Pt=Potencia del panel * Número de paneles"
          readOnly
          value={powert}
        />
        <Input
          label="Energía generada anualmente"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">EGA</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <div
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                kWh/año
              </div>
            </div>
          }
          type="number"
          description="EGA=Pt * HPS * 365"
          readOnly
          value={(year/1000).toFixed(2)}
        />
        <Input
          label="Factor de emisión de CO2"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">FE</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <div
                className="outline-none border-0 bg-transparent text-default-400 text-small w-20"
                id="currency"
                name="currency"
              >
                Kg CO2/kWh
              </div>
            </div>
          }
          type="number"
          description="Valor promedio de CO2 por kWh"
          value={factorCO2}
          onValueChange={(value) => setFactorCO2(value)}
          step={0.1}
          min={0}
        />
        <Input
          label="Reducción de emisión de CO2"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">CO2</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <div
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                Kg
              </div>
            </div>
          }
          type="number"
          description="Reducción de CO2 por año"
          readOnly
          value={parseFloat((year/1000 * factorCO2).toFixed(2))}
        />
      </div>
    </>
  );
}