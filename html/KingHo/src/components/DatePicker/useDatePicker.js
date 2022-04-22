import { useEffect, useState } from "react";
import { MONTHS } from "./stubs";

export default function useDatePicker(date = null) {
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [dates, setDates] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const today = date ? new Date(date) : new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    setYear(year);
    setMonth(month);
    setupDates(year, month);
  }, [date]);

  useEffect(() => {
    if (date) {
      setShowPicker(false);
      const selectedDate = new Date(date);
      const day = selectedDate.getDate();
      const month = MONTHS[selectedDate.getMonth()].month;
      const year = selectedDate.getFullYear();
      setSelectedDate(`${day} ${month}, ${year}`);
    }
  }, [date]);

  const setupDates = (year, month) => {
    const today = new Date();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const selectableDates = [];
    const startFrom = 1 - firstDayOfMonth;

    for (let i = startFrom; i <= 42; i++) {
      const DATE = new Date(year, month, i);
      const isOfCurrentMonth = DATE.getMonth() === month;
      const isToday =
        i === today.getDate() &&
        DATE.getMonth() === today.getMonth() &&
        DATE.getFullYear() === today.getFullYear();
      selectableDates.push({
        value: DATE,
        label: DATE.getDate(),
        isOfCurrentMonth,
        isToday: isToday,
      });
    }

    const dates = [];
    while (selectableDates.length >= 7) {
      dates.push(selectableDates.splice(0, 7));
    }

    setDates(dates);
  };

  const gotoNextYear = () => {
    const nextYear = year + 1;
    setYear(nextYear);
    setupDates(nextYear, month);
  };

  const gotoPrevYear = () => {
    const prevYear = year - 1;
    setYear(prevYear);
    setupDates(prevYear, month);
  };

  const gotoNextMonth = () => {
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    setMonth(nextMonth);
    setYear(nextYear);
    setupDates(nextYear, nextMonth);
  };

  const gotoPrevMonth = () => {
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    setMonth(prevMonth);
    setYear(prevYear);
    setupDates(prevYear, prevMonth);
  };

  return {
    month,
    year,
    dates,
    selectedDate,
    showPicker,
    gotoNextYear,
    gotoPrevYear,
    gotoNextMonth,
    gotoPrevMonth,
    setShowPicker,
  };
}
