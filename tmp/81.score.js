export function UPDATE_81(matrix, station, value) {

    const item = matrix[station];
    if (!item) return;

    const oldScore = item.score;
    const newScore = oldScore + value;

    item.delta = newScore - oldScore;
    item.score = newScore;

    item.rew = (item.delta > 0) ? +1 : (item.delta < 0) ? -1 : 0;
    item.yes = (item.score > 0);

    return item;
}
