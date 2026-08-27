// AUTO_CORE.js

import { AUTO_POOL } from "./AUTO_POOL 2.0.js";
import { PIPELINE } from "./Pipeline.js";

export function AUTO_START(room = "GA"){

  let current = { room };

  // Endlos-AUTO-Schleife
  setInterval(() => {
    current = AUTO_POOL.auto(current);
    PIPELINE(current);
  }, 200);

}
