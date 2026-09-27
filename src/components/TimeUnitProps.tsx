interface TimeUnitProps {
    value: number;
    label: string;
}

export const TimeUnit = ({ value, label }: TimeUnitProps) => (
    <div className="time-unit">
      <span className="time-unit__value">{value} </span>
      <span className="time-unit__label">{label}</span>
    </div>
  );