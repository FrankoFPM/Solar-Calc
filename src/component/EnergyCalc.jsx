import { Input, Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

function EnergyCalc({onValueChange}) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [dailyEnergy, setDailyEnergy] = useState(0);
  const [monthlyEnergy, setMonthlyEnergy] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [multiplierMonthly, setMultiplierMonthly] = useState(1000);

  useEffect(() => {
    onValueChange(dailyEnergy * multiplier);
  }, [dailyEnergy, multiplier, onValueChange]);

  return (
    <div>
      <div className="text-2xl font-semibold border-b-2 pb-2 flex mb-3 items-center justify-between">
        <p>Datos de Consumo de Energía </p>
        <Tooltip
          content="El campo energia mensual llenara automaticamente la energia diaria"
          color="success"
          isOpen={tooltipVisible}
        >
          <div onClick={()=>setTooltipVisible(!tooltipVisible) } className="inline-block bg-orange-700 mx-3 rounded-full text-base h-6 w-6 text-center text-white">?</div>
        </Tooltip>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-3">
        <Input
          label="Energía diaria"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">Ed</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="dailyEnergy"
                name="dailyEnergy"
                onChange={(e) => {setMultiplier(Number(e.target.value))}}
                value={multiplier}
              >
                <option value={1}>Wh/Día</option>
                <option value={1000}>KWh/Día</option>
              </select>
            </div>
          }
          type="number"
          description="Energía consumida en un día (Obligatorio)"
          onValueChange={setDailyEnergy}
          value={dailyEnergy}
        />
        <Input
          label="Energía mensual"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">Em</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <label className="sr-only" htmlFor="currency">
                Currency
              </label>
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
                onChange={(e) => setMultiplierMonthly(Number(e.target.value))}
              >
                <option value={1000}>kWh/Mes</option>
                <option value={1}>Wh/Mes</option>
              </select>
            </div>
          }
          type="number"
          description="Energía consumida en un mes (Opcional)"
          onValueChange={(value) => {
            setMonthlyEnergy(value * multiplierMonthly);
            setDailyEnergy(value * multiplierMonthly / 30);
            setMultiplier(1)
          }}
        />
      </div>

    </div>
  )
}
EnergyCalc.propTypes = {
  onValueChange: PropTypes.func.isRequired
};
export default EnergyCalc;