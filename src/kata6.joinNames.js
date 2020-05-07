const joinNames = namesObj => {
    let finalArr=[]
    namesObj.forEach(item => {
        finalArr.push(item.name)
    })
    let lastName=finalArr.pop();
    finalString=finalArr.join(', ')
    return `${finalString} & ${lastName}`}

module.exports = joinNames;