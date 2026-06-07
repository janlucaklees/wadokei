# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Wadokei is an SVG clock that renders the traditional Japanese time system (和時計), where day and night are each divided into 6 unequal periods whose length varies with the seasons based on sunrise/sunset times at the user's location.

## Commands

```bash
yarn start        # dev server with HMR
yarn build        # production build → ./docs (deployed to GitHub Pages at /wadokei/)
yarn run check    # TypeScript + Svelte type checking
yarn preview      # preview the production build locally
```

There are no tests.

## Architecture

The core data flow: `App.svelte` holds the live clock tick and GPS coordinates → passes `time`, `latitude`, `longitude` to `Wadokei.svelte` → computes solar events via `suncalc` → calls `getTimedPeriods()` to convert the 6 day periods and 6 night periods into `TimedPeriod` objects with absolute start offsets and durations in seconds from midnight.

**Key coordinate system:** The SVG uses a polar layout centered at `(0,0)` with `viewBox="-1510 -1510 3020 3020"`. 12 o'clock is up (negative Y). All angles are in radians, computed from seconds-since-midnight via `secondsToRadians` (maps 86400 s → 2π). Period slices are rendered by `generateCircleSectionPath`, which produces SVG arc path fragments for a wedge of a given angular width.

**Period rendering:** Each `Period.svelte` receives a `TimedPeriod` and a `radius`. It rotates a `<g>` by `startAngle + (angle/2) + π` so the wedge is centered on its midpoint. Inside the group are: `Ticks`, `SolarTime`, `Zodiac`, and `Numeral` sub-components, all laying out text and marks along the arc.

**Hand:** `Hand.svelte` draws the clock hand and center ornament in SVG, rotated by `dateToRadians(time) + π`. It also renders the current time as a text element in _Pinyon Script_ cursive.

**Styling:** All colors are CSS custom properties defined in `app.scss`. Period background colors vary by solar phase (`--period-day-bg-color`, `--period-night-bg-color`, `--period-sunrise-bg-color`, `--period-sunset-bg-color`). The class applied to each period `<g>` is derived from `slugify(period.solarTime)`, which must match the SCSS selectors in `Period.svelte`.

**Build output:** `vite build` writes to `./docs/` (not the default `dist/`) so GitHub Pages can serve it directly from the `docs/` folder on `master`.
