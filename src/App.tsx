import './App.css'
import { START_DATE } from './constants.ts';
import { useElapsedTime } from './hooks/useElapsedTime.ts';
import { TimeUnit } from './components/TimeUnitProps.tsx';

const App = () => {
  const elapsed = useElapsedTime(START_DATE);
    const singularOrPlural = elapsed.years === 1 ? 'ano' : 'anos'
    const units: [number, string][] = [
    [elapsed.years, singularOrPlural],
    [elapsed.months, 'meses'],
    [elapsed.days, 'dias'],
    [elapsed.hours, 'horas'],
    [elapsed.minutes, 'minutos'],
    [elapsed.seconds, 'segundos'],
  ];
  
  return (
    <>
      <p className='rodape'>Made for Luana</p>
      <h1 className="title">Namorando (oficialmente) há:</h1>

      <div className='counter'>
        {units.map(([value, label]) => (
          <TimeUnit key={label} value={value} label={label} />
        ))}
      </div>

    </>
  )
}

export default App
