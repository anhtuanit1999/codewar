function handle(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}

function trianglePerimeter(triangle) {
    return handle(triangle.a, triangle.b) + handle(triangle.b, triangle.c) + handle(triangle.c, triangle.a);
}

// https://www.codewars.com/kata/58e3e62f20617b6d7700120a/train/javascript