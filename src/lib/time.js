const getTimeDiff = (time) => (new Date() - new Date(time * 1000)) / 1000 / 60

export default (time) => {
  const timeDiff = getTimeDiff(time)

  return {
    time: timeDiff > 60 ? Math.floor(timeDiff / 60) : Math.floor(timeDiff),
    timeMeasure: `${timeDiff > 60 ? 'hour' : 'minutes'}${time === 1 ? '' : 's'}`,
  }
}
