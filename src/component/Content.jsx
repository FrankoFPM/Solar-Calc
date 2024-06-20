import EnergyCalc from "./EnergyCalc";
import SystemData from "./SystemData";
import Results from "./Results";
import { useEffect, useState } from "react";

function Content() {
  const [Energy, setEnergy] = useState(null);
  const [efficiency, setEfficiency] = useState(null);
  const [irradiation, setIrradiation] = useState(null);
  const [power, setPower] = useState(null);

  const [et, setEt] = useState(0);
  const [hps, setHps] = useState(0);
  const [pp, setPp] = useState(0);
  const [n, setN] = useState(0);

  const handleEnergyCalc = (value) => {
    setEnergy(value);
  };
  const handleData = (eff, irr, pow) => {
    setEfficiency(eff);
    setIrradiation(irr);
    setPower(pow);
  };
  useEffect(() => {
    if (Energy && efficiency && irradiation && power) {
      let et = Energy * efficiency/100;
      let hps = Number(irradiation);
      let pp = et/hps;
      let n = pp / power;

      
      et = parseFloat(et.toFixed(2));
      hps = parseFloat(hps.toFixed(2));
      pp = parseFloat(pp.toFixed(2));
      n = parseFloat(n.toFixed(2));

      setEt(et);
      setHps(hps);
      setPp(pp);
      setN(n);
    }
  }, [Energy, efficiency, irradiation, power]);
  return (
    <div className="h-full bg-white rounded-xl w-11/12 xl:w-2/3 mt-8 mb-3 p-5">
      {console.log(Energy)}
      <EnergyCalc onValueChange={handleEnergyCalc} />
      <SystemData onValueChange={handleData} />
      <Results et={et} hps={hps} pp={pp} n={n} />
    </div>
  );
}

export default Content;