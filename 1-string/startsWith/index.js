export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  const result = collection.filter(item => item.startsWith('粤A'));
  return result.length;
}
