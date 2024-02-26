import { Stage, UserData } from "@services/api/user/types";
import dayjs from "dayjs";

export const getRateFromArray = (arr: [string, number][]) =>
  Math.round(arr.reduce((acc, rate) => acc + rate[1], 0) / arr.length);

export const formatDate = (date: Date | string) => {
  const newDate = dayjs(date);
  return newDate.format("MMMM D, YYYY");
};

export const formatHour = (date: Date | string) => {
  const newDate = dayjs(date);
  return newDate.format("hh A");
};

export const secondsToHour = (seconds: number) => {
  const hour = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return `${hour}:${minutes.toString()} h `;
};

export const groupByExactHourAndSumValues = (items?: [string, number][]) => {
  if (!items || items.length <= 0) {
    return [];
  }

  const result = {} as { [key: string]: number };

  items?.forEach(([timestamp, value]) => {
    const date = new Date(timestamp);
    const key =
      new Date(
        Date.UTC(
          date.getUTCFullYear(),
          date.getUTCMonth(),
          date.getUTCDate(),
          date.getUTCHours()
        )
      ).toISOString() ?? "";

    if (!result[key]) {
      result[key] = 0;
    }
    result[key] += value;
  });

  const groupedItems = Object.keys(result).map((key) => {
    const adjustedKey = key.substring(0, 13) + ":00:00.000Z";
    return [adjustedKey, result[key]];
  });

  return groupedItems;
};

export const convertToAxiosArray = (
  arr?: [string, number][] | { [key: string]: number }[]
) => {
  if (!arr || arr?.length <= 0) {
    return [];
  }

  return arr.map((item) => ({
    x: item[0],
    y: item[1],
  }));
};

export const groupStageByName = (stages?: Stage[], stageName?: string) => {
  if (!stages || stages?.length <= 0) {
    return;
  }

  return stages?.reduce(
    (acc, stage) => (stage.stage === stageName ? acc + stage.duration : acc),
    0
  );
};

export const getIntervalById = (data?: UserData, id?: string) => {
  return data?.intervals.find((interval) => interval.id === id);
};
