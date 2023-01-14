

function getTimeInMinutesFormated(durationInSeconds = 0) {
    let minutes = parseInt(durationInSeconds / 60)
    let seconds = parseInt(durationInSeconds % 60)

    if (seconds < 10)
        seconds = `0${seconds}`

    console.log(durationInSeconds)
    console.log(seconds)

    return `${minutes}:${seconds}`
}

export default getTimeInMinutesFormated