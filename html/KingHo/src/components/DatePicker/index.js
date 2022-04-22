import cn from "classnames";
import { Fragment } from "react";
import { DoubleLeft, DoubleRight, Left, Right } from "../../utils/icons";
import { DAYS, MONTHS } from "./stubs";
import useDatePicker from "./useDatePicker";

export default function DatePicker({
  label = "Date",
  date = null,
  onChange = () => {},
  placeholder = "Select a date",
}) {
  const {
    month = "",
    year = "",
    dates = [],
    selectedDate = "",
    showPicker = false,
    gotoNextYear = () => {},
    gotoPrevYear = () => {},
    gotoNextMonth = () => {},
    gotoPrevMonth = () => {},
    setShowPicker = () => {},
  } = useDatePicker(date);

  return (
    <Fragment>
      <Fragment>
        <input
          value={selectedDate}
          type="text"
          onFocus={() => setShowPicker(true)}
          placeholder={placeholder}
          className="datepicker hasDatepicker"
        />
        <i className="far fa-calendar-alt"></i>
      </Fragment>
      {showPicker && (
        <div className="date-picker">
          <div className="date-picker__header">
            <div className="date-picker__header--col">
              <DoubleLeft onClick={gotoPrevYear} />
              <Left onClick={gotoPrevMonth} />
            </div>
            <div className="date-picker__header--col">
              <span className="date-picker__month">
                {Number.isInteger(month) && MONTHS[month].abbr}
              </span>
              <span className="date-picker__year">{year}</span>
            </div>
            <div className="date-picker__header--col">
              <Right onClick={gotoNextMonth} />
              <DoubleRight onClick={gotoNextYear} />
            </div>
          </div>
          <div className="date-picker__content">
            <ul className="date-picker__days">
              {DAYS.map(({ abbr }) => (
                <li key={abbr} className="date-picker__day">
                  {abbr}
                </li>
              ))}
            </ul>
            <ul className="date-picker__dates">
              {dates.map((week, index) => (
                <li key={index} className="date-picker__week">
                  <ul className="date-picker__week--list">
                    {week.map(({ label, value, isOfCurrentMonth, isToday }) => {
                      const isSelected =
                        date &&
                        date instanceof Date &&
                        date.getDate() === value.getDate() &&
                        date.getMonth() === value.getMonth() &&
                        date.getFullYear() === value.getFullYear();
                      return (
                        <li
                          key={value.toString()}
                          className={cn("date-picker__date", {
                            muted: !isOfCurrentMonth,
                            today: isToday,
                            selected: isSelected,
                          })}
                        >
                          <span onClick={() => onChange(value)}>{label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="date-picker__footer">
            <span
              className="date-picker__footer--today"
              onClick={() => onChange(new Date())}
            >
              Today
            </span>
          </div>
        </div>
      )}
    </Fragment>
  );
}
