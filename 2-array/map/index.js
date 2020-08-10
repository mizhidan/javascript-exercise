export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const result = collection.map(item => {
    return String.fromCharCode(96 + parseInt(item, 0x10));
  });
  return result;
}
