const mapper = (
  num: number,
  in_min: number = 0,
  in_max: number = 10000,
  out_min: number = 0,
  out_max: number = 1000
) => {
  return Math.round(
    ((num * num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  )
  //   return i == 0 ? 1 : i
}

export { mapper }
