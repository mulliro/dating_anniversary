import { useState, useEffect } from 'react';

export interface TimeDiff {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const useElapsedTime = (startDate: Date): TimeDiff => {
  const [diff, setDiff] = useState<TimeDiff>(() => calculateDiff(startDate, new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setDiff(calculateDiff(startDate, new Date()));
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  return diff;
}

const calculateDiff = (start: Date, end: Date): TimeDiff => {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();
  let hours = end.getHours() - start.getHours();
  let minutes = end.getMinutes() - start.getMinutes();
  let seconds = end.getSeconds() - start.getSeconds();

  if (seconds < 0) { seconds += 60; minutes--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) {
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) { months += 12; years--; }

  return { years, months, days, hours, minutes, seconds };
}