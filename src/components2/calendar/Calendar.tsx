import { FC, useEffect, useState } from 'react';
import { DAY_NAMES, makeMonthInDays } from './../../logic/calendar';
import { WEDDING_DATE } from './../../data/wedding-date';

const Calendar: FC = () => {
  const [daysInWeeks, setDaysInWeeks] = useState<DayItem[][]>([]);

  useEffect(() => {
    setDaysInWeeks(makeMonthInDays(WEDDING_DATE));
  }, []);

  return (
    <>
      <div className="max-w-[250px] text-center font-GowunBatang text-base font-semibold text-contentPrimary" style={{ margin: '24px auto' }}>
        2025.06.07
      </div>
      <div className="max-w-[250px] text-center font-GowunBatang text-sm" style={{ margin: '0 auto 20px auto' }}>
        토요일 오전 11시 30분
      </div>
      <div className="max-w-[250px] font-GowunBatang text-contentPrimary" style={{ margin: '0 auto' }}>
        <table className="table-auto w-full text-center">
          <thead>
            <tr>
              {DAY_NAMES.map((day, index) => (
                <th
                  key={index}
                  className={`font-medium px-2 py-2 ${index === 0 ? 'text-red' : ''}`}
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          {daysInWeeks.map((week, index) => {
            return (
              <tr key={index}>
                {week.map((day, subIndex) => {
                  return (
                    <td className="px-2 py-2 relative" key={subIndex}>
                      {!day.isToday ? (
                        <span className={`${index === 0 ? 'text-red' : ''}`}>
                          {day.day}
                        </span>
                      ) : (
                        <span className="text-[#ffffff] font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]">
                          {day.day}
                        </span>
                      )}
                      {day.isToday ? (
                        <span className="w-[28px] h-[28px] bg-primary2 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]"></span>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Calendar;
