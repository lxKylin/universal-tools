/**
 * 格式化存储大小，将字节转换为合适的单位
 * @param size - 存储大小（字节数），必须为非负数
 * @returns 格式化后的存储大小字符串
 */
export const formatUnitSize = (size: number): string => {
  if (typeof size !== 'number' || size < 0) {
    throw new Error('输入的存储大小必须是非负数');
  }

  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  if (size === 0) return '0B';

  const i = Math.floor(Math.log(size) / Math.log(1024));
  const value = size / Math.pow(1024, i);

  return `${value.toFixed(2)} ${units[i]}`;
};
