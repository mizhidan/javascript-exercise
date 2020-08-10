export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const values = Object.values(source);
  return values.reduce((prev, acc) => parseInt(prev, 0x10) + parseInt(acc, 0x10));
}
