// AUTO_POOL 2.0.js

import { POOL } from "./POOL.js";

export const AUTO_POOL = {

  auto(state){
    const loaded = POOL.load(state.room);
    const respo  = POOL.respo(loaded);
    const next   = POOL.select(respo);
    POOL.save(state.room, respo);

    return { room: next, respo };
  }
};
