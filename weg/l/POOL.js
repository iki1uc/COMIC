// POOL.js

export const POOL = {

  load: (key) => JSON.parse(localStorage.getItem(key)) || {},

  save: (key, data) => localStorage.setItem(key, JSON.stringify(data)),

  respo: (state) => ({
    axis: (state.axis || 0) % 756,
    orbit: (state.tick || 0) % 3,
    pulse: Math.random() > 0.5 ? "good" : "neutral"
  }),

  select: (respo) => ["GA","meKI","MIE"][respo.orbit]
};
