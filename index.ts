const isAValidTriangle = (
  firstVertex: number,
  secondVertex: number,
  thirsdVertex: number
): boolean => {
  return (
    firstVertex + secondVertex > thirsdVertex &&
    firstVertex + thirsdVertex > secondVertex &&
    secondVertex + thirsdVertex > firstVertex
  )
}

const getTriangleType = (
  firstVertex: number,
  secondVertex: number,
  thirsdVertex: number
): string => {
  if (firstVertex === secondVertex && secondVertex === thirsdVertex) {
    return "Triângulo equilátero"
  }
  if (
    firstVertex === secondVertex ||
    firstVertex === thirsdVertex ||
    secondVertex === thirsdVertex
  ) {
    return "Triângulo isósceles"
  }
  return "Triângulo escaleno"
}

const getTriangleAngle = (
  firstVertex: number,
  secondVertex: number,
  thirdVertex: number
): [number, number, number] => {
  const firstAngle = Math.floor(
    Math.acos(
      (secondVertex ** 2 + thirdVertex ** 2 - firstVertex ** 2) /
        (2 * secondVertex * thirdVertex)
    ) *
      (180 / Math.PI)
  )
  const secondAngle = Math.floor(
    Math.acos(
      (firstVertex ** 2 + thirdVertex ** 2 - secondVertex ** 2) /
        (2 * firstVertex * thirdVertex)
    ) *
      (180 / Math.PI)
  )
  const thirdAngle = Math.floor(
    Math.acos(
      (firstVertex ** 2 + secondVertex ** 2 - thirdVertex ** 2) /
        (2 * firstVertex * secondVertex)
    ) *
      (180 / Math.PI)
  )
  return [firstAngle, secondAngle, thirdAngle]
}

const getTriangleInfo = (
  firstVertex: number,
  secondVertex: number,
  thirdVertex: number
) => {
  if (!isAValidTriangle(firstVertex, secondVertex, thirdVertex)) {
    return "Triângulo inválido"
  }
  return {
    triangleType: getTriangleType(firstVertex, secondVertex, thirdVertex),
    vertexes: [firstVertex, secondVertex, thirdVertex],
    angles: getTriangleAngle(firstVertex, secondVertex, thirdVertex),
  }
}

console.log(getTriangleInfo(5, 3, 4))
