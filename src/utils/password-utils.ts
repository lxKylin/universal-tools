/*
 * @Fileoverview: 密码强度校验
 * @Description: 提供密码强度校验和验证器生成工具
 */

// 密码强度常量
const HIGH_STRENGTH = 3;
const MIDDLE_STRENGTH = 2;
const LOW_STRENGTH = 1;

// 校验规则
const RULES = {
  hasNumber: /\d/,
  hasUpperLetter: /[A-Z]/,
  hasLowerLetter: /[a-z]/,
  hasUnderline: /_/
};

/**
 * 检查密码是否符合指定的规则数量
 * @param {String} pwd 密码
 * @param {Array<RegExp>} rules 校验规则数组
 * @param {Number} requiredCount 需要满足的规则数量
 * @returns {Boolean} 是否符合规则
 */
function meetsRuleCount(
  pwd: string,
  rules: RegExp[],
  requiredCount: number
): boolean {
  const matchedCount = rules.reduce(
    (count, rule) => count + Number(rule.test(pwd)),
    0
  );
  return matchedCount >= requiredCount;
}

/**
 * 弱密码校验：长度大于6
 * @param {String} pwd 密码
 * @returns {Boolean} 是否为弱密码
 */
function isLowIntensity(pwd: string = ''): boolean {
  return pwd.length > 6;
}

/**
 * 中等密码校验：长度大于等于8，包含数字和字母
 * @param {String} pwd 密码
 * @returns {Boolean} 是否为中等密码
 */
function isMiddleIntensity(pwd: string = ''): boolean {
  return (
    pwd.length >= 8 &&
    meetsRuleCount(
      pwd,
      [RULES.hasNumber, RULES.hasLowerLetter, RULES.hasUpperLetter],
      2
    )
  );
}

/**
 * 高强度密码校验：长度大于8，包含数字、大写字母、小写字母、下划线中的三类
 * @param {String} pwd 密码
 * @returns {Boolean} 是否为高强度密码
 */
function isHighIntensity(pwd: string = ''): boolean {
  return pwd.length > 8 && meetsRuleCount(pwd, Object.values(RULES), 3);
}

/**
 * 生成密码验证器
 * @param {Function} checkFunc 校验函数
 * @param {String} errMsg 错误提示信息
 * @returns {Function} 验证器函数
 */
function genValidator(checkFunc: (pwd: string) => boolean, errMsg: string) {
  return function (pwd: string) {
    const valid = checkFunc(pwd);
    return { valid, err: valid ? '' : errMsg };
  };
}

/**
 * 获取密码强度
 * @param {String} pwd 密码
 * @returns {Number} 密码强度（1: 弱, 2: 中, 3: 高）
 */
export function getPwdIntensity(pwd: string = ''): number {
  if (isHighIntensity(pwd)) return HIGH_STRENGTH;
  if (isMiddleIntensity(pwd)) return MIDDLE_STRENGTH;
  if (isLowIntensity(pwd)) return LOW_STRENGTH;
  return 0; // 不符合任何强度
}

// 导出密码验证器
export const pwdValidators = {
  [HIGH_STRENGTH]: genValidator(
    isHighIntensity,
    '密码长度必须大于8，且包含大写字母、小写字母、数字、下划线中的三类'
  ),
  [MIDDLE_STRENGTH]: genValidator(
    isMiddleIntensity,
    '密码长度必须大于等于8，且包含数字和字母中的两类'
  ),
  [LOW_STRENGTH]: genValidator(isLowIntensity, '密码长度必须大于6')
};
