const asteroidsBoom = () => {
  const asteroids = [5, 10, -5]
  const stack = []

  for (const asteroid of asteroids) {
    let alive = true
    while (
      asteroid < 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0 &&
      alive // <-- the most important, if left move star never die, it will go on boom other star
    ) {
      alive = stack[stack.length - 1] < -asteroid
      if (stack[stack.length - 1] <= -asteroid) {
        stack.pop()
      }
    }

    if (alive) {
      stack.push(asteroid)
    }
  }

  return stack
}

console.log(asteroidsBoom())
