export const groupAndMerge = (arr, groupBy, mergeInto) =>
  Array.from(
    arr
      .reduce((m, o) => {
        const curr = m.get(o[groupBy]);

        return m.set(o[groupBy], {
          ...o,
          [mergeInto]: [...((curr && curr[mergeInto]) || []), o[mergeInto]],
        });
      }, new Map())
      .values()
  );
