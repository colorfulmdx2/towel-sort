// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (!matrix || matrix.length === 0) return []
    let sortedMatrix = []
    matrix.map((e, i) => {
        console.log(e)
        if (i === 0) {
            sortedMatrix.push(e)
        }
        else if (i % 2) {
            return sortedMatrix.push(e.reverse())
        }
        else return  sortedMatrix.push(e)
    })
    let answer = []
    sortedMatrix.map(e => {
        for (let i = 0; i < e.length; i++) {
            answer.push(e[i])
        }
    })
    return answer

}
