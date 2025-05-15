import * as CryptoJS from 'crypto-js';

class AESUtil {
  private static defaultKey = 'QUANZHIKEJI12345'; // 默认密钥

  /**
   * 加密
   * @param plaintext - 要加密的字符串
   * @param key - 可选的加密密钥（默认为 defaultKey）
   * @returns 加密后的字符串
   */
  static encrypt(plaintext: string, key: string = AESUtil.defaultKey): string {
    const parsedKey = CryptoJS.enc.Utf8.parse(key);
    const word = CryptoJS.enc.Utf8.parse(plaintext);
    const encrypted = CryptoJS.AES.encrypt(word, parsedKey, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }

  /**
   * 解密
   * @param encryptedText - 要解密的字符串
   * @param key - 可选的解密密钥（默认为 defaultKey）
   * @returns 解密后的字符串
   */
  static decrypt(
    encryptedText: string,
    key: string = AESUtil.defaultKey
  ): string {
    const parsedKey = CryptoJS.enc.Utf8.parse(key);
    const decrypted = CryptoJS.AES.decrypt(encryptedText, parsedKey, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypted).toString();
  }

  /**
   * 设置默认密钥
   * @param key - 新的默认密钥
   */
  static setDefaultKey(key: string): void {
    AESUtil.defaultKey = key;
  }
}

export { AESUtil };
