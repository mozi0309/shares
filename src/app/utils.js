import { info } from '../api/api'
import { message } from 'antd'
import { JSEncrypt } from 'jsencrypt'

// 全局提示
export function SuccessMe (text) {
  message.success(text)
}

export function ErrorMe (text) {
  message.error(text)
}




// 获取问号后参数
function GetRequest () {
  const url = window.location.hash // 获取#符后的字串
  const theRequest = {}
  if (url.indexOf('?') !== -1) {
    const str = url.substr(url.indexOf('?') + 1)
    const strs = str.split('&')
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = (strs[i].split('=')[1])
    }
  }
  return theRequest
}

export {
  GetRequest
}



// 获取当前日期
export function getNowFormatDate () {
  let date = new Date()
  const seperator1 = '-'
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  const currentdate = year + seperator1 + month + seperator1 + strDate
  return currentdate
}



// 添加千分号
export function formatNumberRgx (num) {
  var parts = num.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

