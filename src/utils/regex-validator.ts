/**
 * 根据正则表达式生成字符串验证方法
 * @param reg - 正则表达式
 * @returns 验证函数，接收字符串并返回布尔值
 */
const genRegValidateFunc = (reg: RegExp): ((text: string) => boolean) => {
  return (text: string): boolean => {
    if (!text) {
      return false;
    }
    text = text.toString().trim();
    return reg.test(text);
  };
};

// IP 地址校验（支持逗号或短横线连接）
// IPv4 地址正则
const ipv4RegStr =
  '(?:25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]?\\d)){3}';

// IPv6 地址正则
const ipv6RegStr =
  '(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|' + // 完整形式
  '([0-9a-fA-F]{1,4}:){1,7}:|' + // 前缀形式
  '([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|' + // 单冒号形式
  '([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|' + // 双冒号形式
  '([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|' +
  '([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|' +
  '([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|' +
  '[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|' +
  ':((:[0-9a-fA-F]{1,4}){1,7}|:)|' +
  'fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|' + // 链路本地地址
  '::(ffff(:0{1,4}){0,1}:){0,1}' +
  ipv4RegStr +
  '|' + // IPv4 映射地址
  '([0-9a-fA-F]{1,4}:){1,4}:' +
  ipv4RegStr +
  ')';

// 子网掩码正则（IPv4: 0-32，IPv6: 0-128）
const maskRegStr =
  '(?:\\/(?:3[0-2]|[1-2]?\\d)|\\/(?:12[0-8]|1[01]\\d|\\d{1,2}))?';

// 综合正则：支持 IPv4 和 IPv6（可带子网掩码）
const ipWithMaskRegStr = `(?:${ipv4RegStr}|${ipv6RegStr})${maskRegStr}`;
const ipReg = new RegExp(`^${ipWithMaskRegStr}(?:(,|-)${ipWithMaskRegStr})*$`);

// 导出验证函数
export const validateIp = genRegValidateFunc(ipReg);

// 邮箱校验
const emailReg = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
export const validateEmail = genRegValidateFunc(emailReg);

// 端口号校验
const portsReg = new RegExp(
  /^([1-9](\d{0,3}))$|^([1-5]\d{4})$|^(6[0-4]\d{3})$|^(65[0-4]\d{2})$|^(655[0-2]\d)$|^(6553[0-5])$/
);
export const validatePorts = genRegValidateFunc(portsReg);

// 数字校验（1-100 的整数）
const numberReg = new RegExp(/^([1-9]|[1-9]\d|100)$/);
export const validateNumber = genRegValidateFunc(numberReg);
