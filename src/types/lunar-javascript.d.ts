declare module 'lunar-javascript' {
  export class Solar {
    static fromDate(date: Date): Solar;
    static fromYmdHms(year: number, month: number, day: number, hour: number, minute: number, second: number): Solar;
    getYear(): number;
    toDate(): Date;
    getLunar(): Lunar;
  }

  export class Lunar {
    static fromDate(date: Date): Lunar;
    static fromYmd(year: number, month: number, day: number): Lunar;
    getZodiac(): string;
    getYearShengXiao(): string;
  }
} 