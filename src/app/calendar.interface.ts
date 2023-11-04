export interface iView {
  currMonth: number;
  view: days[];
}

export interface days {
  day: string;
  event: string;
  caption: string;
  names: string;
}
