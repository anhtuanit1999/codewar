function distanceBetweenPoints(a, b) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    // return Math.hypot(a.x - b.x, a.y - b.y);
}

// https://www.codewars.com/kata/58dced7b702b805b200000be/train/javascript