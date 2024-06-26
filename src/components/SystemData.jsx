import { Input, Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

function SystemData({onValueChange}) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const [efficiency, setEfficiency] = useState(80);
  const [irradiation, setIrradiation] = useState(5.5);
  const [power, setPower] = useState(240);

  useEffect(() => {
    onValueChange(efficiency, irradiation, power);
  }, [efficiency, irradiation, power, onValueChange]);

  return (
    <div>
      <div className="text-2xl font-semibold border-b-2 pb-2 flex mb-3 items-center justify-between">
        <p>Datos del Sistema Fotovoltaico </p>
        <Tooltip 
          content="Puede obtener datos de la irradiacion con programas meteorologicos o con la pagina de la PVsyst"
          color="success"
          isOpen={tooltipVisible}
        >
          <div onClick={()=>setTooltipVisible(!tooltipVisible) } className="inline-block bg-orange-700 mx-3 rounded-full text-base h-6 w-6 text-center text-white">?</div>
        </Tooltip>
      </div>
      <div className="flex w-full flex-col md:flex-row gap-3">
        <Input
          label="Rendimiento de la instalación"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">R</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <div
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                %
              </div>
            </div>
          }
          type="number"
          description="Rendimiento de la instalación (Obligatorio)"
          value={efficiency}
          onValueChange={setEfficiency}
        />
        <Input
          label="Irradiación horizontal global mínima"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">G</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <div
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                kWh/m²/día
              </div>
            </div>
          }
          type="number"
          description="Irradiación horizontal global mínima (Obligatorio)"
          value={irradiation}
          onValueChange={setIrradiation}
        />
        <Input
          label="Potencia nominal del panel solar"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">Pn</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <div
                className="outline-none border-0 bg-transparent text-default-400 text-small"
              >
                W
              </div>
            </div>
          }
          type="number"
          description="Potencia nominal del panel solar (Obligatorio)"
          value={power}
          onValueChange={setPower}
        />
      </div>
    </div>
  )
}
SystemData.propTypes = {
  onValueChange: PropTypes.func.isRequired
};
export default SystemData;