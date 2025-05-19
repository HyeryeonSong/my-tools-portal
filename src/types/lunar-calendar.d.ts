declare module 'lunar-calendar' {
  class LunarCalendar {
    solarToLunar(date: Date): {
      year: number;
      month: number;
      day: number;
    };
  }
  export default LunarCalendar;
} 