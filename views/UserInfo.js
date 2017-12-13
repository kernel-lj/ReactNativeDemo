let instance = null;
const name = '';
const isLogin = false;

export default class UserInfo {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  /**
   * 类方法
   */
  static ShareInstance() {
    const singleton = new UserInfo();
    return singleton;
  }

  /**
   * 实例方法
   */
  setName() {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setIsLogin() {
    this.isLogin = isLogin;
  }

  getIsLogin() {
    return this.isLogin;
  }
}

