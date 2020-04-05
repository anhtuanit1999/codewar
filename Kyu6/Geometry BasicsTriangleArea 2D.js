function handle(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}

function triangleArea(triangle) {
    let a = handle(triangle.a, triangle.b),
        b = handle(triangle.b, triangle.c),
        c = handle(triangle.c, triangle.a),
        p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

// https://www.codewars.com/kata/58e4377c46e371aee7001262/train/javascript