import { Stage, UserData } from "@services/api/user/types";
import { ArrKeyValue, ObjKeyValue } from "@types";
import dayjs from "dayjs";

export const getRateFromArray = (arr: ArrKeyValue) =>
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

export const groupByExactHourAndSumValues = (items?: ArrKeyValue) => {
  if (!items || items.length <= 0) {
    return [];
  }

  const groupedItemsByDateObject = {} as ObjKeyValue;

  items?.forEach(([timestamp, value]) => {
    const key = timestamp.substring(0, 13) + ":00:00.000Z";
    if (!groupedItemsByDateObject[key]) {
      groupedItemsByDateObject[key] = 0;
    }
    groupedItemsByDateObject[key] += value;
  });

  const groupedItemsByDateArray = Object.entries(groupedItemsByDateObject);

  return groupedItemsByDateArray;
};

export const convertToAxiosArray = (arr?: ArrKeyValue | ObjKeyValue[]) => {
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
