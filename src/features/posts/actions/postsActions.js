import { SCRAP_REQUEST } from "./postsActionTypes";

export const scrap = (payload, meta) => {
  return {
    payload,
    meta,
    type: SCRAP_REQUEST
  };
};
