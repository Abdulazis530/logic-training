




function formatDuration(seconds) {
    const timeUnitInSecond = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 }
    const result = []

    for (const key in timeUnitInSecond) {
        if (seconds >= timeUnitInSecond[key]) {
            let valueOfTime = Math.floor(seconds / timeUnitInSecond[key])
            result.push(`${valueOfTime} ${key}${valueOfTime > 1 ? "s" : ""}`)
            seconds = seconds % timeUnitInSecond[key]
        }
    }

    if (result.length > 1) {
        result.splice(result.length - 2, 2, `${result[result.length - 2]} and ${result[result.length - 1]}`)
    }
    return result.join(", ")

}


console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(36222622));