export interface UserData {
  intervals: Interval[];
}

export interface Interval {
  id: string;
  ts: string;
  stages: Stage[];
  score: number;
  timeseries: Timeseries;
}

export interface Stage {
  stage: string;
  duration: number;
}

export interface Timeseries {
  tnt: [string, number][];
  tempRoomC: [string, number][];
  tempBedC: [string, number][];
  respiratoryRate: [string, number][];
  heartRate: [string, number][];
}
