const redLine = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife']
const greenLine = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore']
const orangeLine = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']


const stringToLine = function (string) {
  if (string === 'Red') {
    return redLine
  } else if (string === 'Green') {
    return greenLine
  } else if (string === 'Orange') {
    return orangeLine
  }
}

const parkStFwdCount = function (line, value) {
  const currentLine = stringToLine(line)
  let count = 0

  if (currentLine === redLine || currentLine === greenLine || currentLine === orangeLine) {
    const parkIndex = currentLine.indexOf('Park Street')
    const endIndex = currentLine.indexOf(value)

    for (let i = parkIndex; i < endIndex - 1; i++) {
      count++
    }
  }

  return count
}

const parkStBackCount = function (line, value) {
  const currentLine = stringToLine(line)
  let count = 0

  if (currentLine === redLine || currentLine === greenLine || currentLine === orangeLine) {
    const parkIndex = currentLine.indexOf('Park Street')
    const endIndex = currentLine.indexOf(value)

    for (let i = parkIndex; i > endIndex + 1; i--) {
      count++
    }
  }

  return count
}

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  // Code here.
  let totalStops = 0
  const parkStopStart = stringToLine(startLine).indexOf('Park Street')
  const parkStopEnd = stringToLine(endLine).indexOf('Park Street')
  const startValue = stringToLine(startLine).indexOf(startStation)
  const endValue = stringToLine(endLine).indexOf(endStation)

  if (startLine === endLine) {
    if (startValue >= endValue) {
      const stopsUp = startValue - endValue
      totalStops += stopsUp
      console.log(startValue - endValue)
    } else if (endValue >= startValue) {
      const stopsDown = endValue - startValue
      totalStops += stopsDown
    }
  }

  if (startLine !== endLine) {
    if (startValue >= parkStopStart && endValue >= parkStopEnd) {
      const toPark = parkStFwdCount(startLine, startValue)
      const fromPark = endValue - parkStopEnd
      const sum = toPark + fromPark
      totalStops += sum
    } else if (startValue >= parkStopStart && endValue <= parkStopEnd) {
      const toPark = parkStFwdCount(startLine, startValue)
      const fromPark = parkStopEnd - endValue
      const sum = toPark + fromPark
      totalStops += sum
    }
    if (startValue <= parkStopStart && endValue >= parkStopEnd) {
      const toPark = parkStBackCount(startLine, startValue)
      const fromPark = endValue - parkStopEnd
      const sum = toPark + fromPark
      totalStops += sum
    } else if (startValue <= parkStopStart && endValue <= parkStopEnd) {
      const toPark = parkStBackCount(startLine, startValue)
      const fromPark = parkStopEnd - endValue
      const sum = toPark + fromPark
      totalStops += sum
    }
  }

  return totalStops
}

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
}

stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') 
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') 
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')