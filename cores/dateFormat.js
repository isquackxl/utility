class DateFormat {
  constructor(dateTime = new Date(), template = 'yyyy-MM-dd HH:mm:ss') {
    this.date = new Date(dateTime);
    this.template = template;
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth() + 1;
    this.day = this.date.getDate();
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();
    this.millisecond = this.date.getMilliseconds();
    this.weekday = this.date.getDay();
    this.format();
  }
  /**
   * 根据传入的字符串生成一个正则，用于匹配该字符串
   * @param {String} str 需要匹配的字符串
   * @returns 匹配该字符串的正则对象
   */
  reg(str) {
    return new RegExp(`(^|[^${str[0]}])${str}([^${str[0]}]|$)`, 'g');
  }
  /**
   * 根据 template 格式化时间
   */
  format() {
    this._yyyy();
    this._M();
    this._MM();
    this._d();
    this._dd();
    this._h();
    this._hh();
    this._H();
    this._HH();
    this._m();
    this._mm();
    this._s();
    this._ss();
    this._S();
    this._SS();
    this._SSS();
    this._t();
    this._tt();
    this._ttt();
    this._w();
    this._W();
    this._c();
    this._C();
  }
  timeString() {
    return this.template;
  }
  _yyyy() {
    if (this.reg('yyyy').test(this.template)) {
      this.template = this.template.replace('yyyy', this.year.toString());
    }
  }
  _M() {
    if (this.reg('M').test(this.template)) {
      this.template = this.template.replace('M', this.month.toString()); 
    }
  }
  _MM() {
    if (this.reg('MM').test(this.template)) {
      this.template = this.template.replace('MM', this.month.toString().padStart(2, '0')); 
    }
  }
  _d() {
    if (this.reg('d').test(this.template)) {
      this.template = this.template.replace('d', this.day.toString()); 
    }
  }
  _dd() {
    if (this.reg('dd').test(this.template)) {
      this.template = this.template.replace('dd', this.day.toString().padStart(2, '0'));  
    }
  }
  _h() {
    if (this.reg('h').test(this.template)) {
      this.template = this.template.replace('h', (this.hour % 12).toString); 
    }
  }
  _hh() {
    if (this.reg('hh').test(this.template)) {
      this.template = this.template.replace('hh', (this.hour % 12).toString().padStart(2, '0')); 
    }
  }
  _H() {
    if (this.reg('H').test(this.template)) {
      this.template = this.template.replace('H', this.hour.toString()); 
    }
  }
  _HH() {
    if (this.reg('HH').test(this.template)) {
      this.template = this.template.replace('HH', this.hour.toString().padStart(2, '0'));  
    }
  }
  _m() {
    if (this.reg('m').test(this.template)) {
      this.template = this.template.replace('m', this.minute.toString()); 
    }
  }
  _mm() {
    if (this.reg('mm').test(this.template)) {
      this.template = this.template.replace('mm', this.minute.toString().padStart(2, '0')); 
    }
  }
  _s() {
    if (this.reg('s').test(this.template)) {
      this.template = this.template.replace('s', this.second.toString()); 
    }
  }
  _ss() {
    if (this.reg('ss').test(this.template)) {
      this.template = this.template.replace('ss', this.second.toString().padStart(2, '0')); 
    }
  }
  _S() {
    if (this.reg('S').test(this.template)) {
      this.template = this.template.replace('S', this.millisecond.toString()); 
    }
  }
  _SS() {
    if (this.reg('SS').test(this.template)) {
      this.template = this.template.replace('SS', this.millisecond.toString().padStart(2, '0')); 
    }
  }
  _SSS() {
    if (this.reg('SSS').test(this.template)) {
      this.template = this.template.replace('SSS', this.millisecond.toString().padStart(3, '0')); 
    }
  }
  _t() {
    if (this.reg('t').test(this.template)) {
      this.template = this.template.replace('t', parseInt(this.millisecond / 100).toString());
    }
  }
  _tt() {
    if (this.reg('tt').test(this.template)) {
      this.template = this.template.replace('tt', parseInt(this.millisecond / 10).toString().padStart(2, '0'));
    }
  }
  _ttt() {
    if (this.reg('ttt').test(this.template)) {
      this.template = this.template.replace('ttt', this.millisecond.toString().padStart(3, '0'));
    }
  }
  _w() {
    if (this.reg('w').test(this.template)) {
      this.template = this.template.replace('w', this.weekday.toString());
    }
  }
  _W() {
    if (this.reg('W').test(this.template)) {
      let weekdayStr = '';
      switch(this.weekday) {
        case 1:
          weekdayStr = '一';
          break;
        case 2:
          weekdayStr = '二';
          break;
        case 3:
          weekdayStr = '三';
          break;
        case 4:
          weekdayStr = '四';
          break;
        case 5:
          weekdayStr = '五';
          break;
        case 6:
          weekdayStr = '六';
          break;
        case 7:
          weekdayStr = '日';
          break;
        default:
      }
      console.log('121212', this.weekday)
      this.template = this.template.replace('W', weekdayStr);
    }
  }
  _c() {
    if (this.reg('c').test(this.template)) {
      let weekdayStr = '';
      switch(this.weekday) {
        case 1:
          weekdayStr = 'Mon.';
          break;
        case 2:
          weekdayStr = 'Tue.';
          break;
        case 3:
          weekdayStr = 'Wed.';
          break;
        case 4:
          weekdayStr = 'Thu.';
          break;
        case 5:
          weekdayStr = 'Fri.';
          break;
        case 6:
          weekdayStr = 'Sat.';
          break;
        case 0:
          weekdayStr = 'Sun.';
          break;
        default:
          weekdayStr = '获取失败';
      }
      this.template = this.template.replace('c', weekdayStr);
    }
  }
  _C() {
    if (this.reg('C').test(this.template)) {
      let weekdayStr = '';
      switch(this.weekday) {
        case 1:
          weekdayStr = 'Monday';
          break;
        case 2:
          weekdayStr = 'Tuesday';
          break;
        case 3:
          weekdayStr = 'Wednesday';
          break;
        case 4:
          weekdayStr = 'Thursday';
          break;
        case 5:
          weekdayStr = 'Friday';
          break;
        case 6:
          weekdayStr = 'Saturday';
          break;
        case 0:
          weekdayStr = 'Sunday';
          break;
        default:
          weekdayStr = '获取失败';
      }
      this.template = this.template.replace('C', weekdayStr);
    }
  }
}

/**
 * 根据 template 格式化时间
 * @param {Date | String} dateTime 需要格式化的时间（String: 时间戳）
 * @param {*} template 格式化模板
 * @returns 根据 template 格式化 dateTime 之后的时间字符串
 */
const dateFormat = (dateTime, template) => {
  return new DateFormat(dateTime, template).timeString();
}

export default dateFormat;