/**
 * todo 格式化Chat消息数据
 * todo 根据platform消息来源终端类型（ android、ios、web、api ）
 * todo 根据消息类型elemType（ 1.文本 2.自定义 3.图片 4.语音 7.位置）
 * @param data 消息数据
 * @returns {*}
 */
export function transformMessageList(data) {
  try {
    let transformList = []
    for (let i = 0; i < data.length; i++) {
      // todo 新数据结构体
      const transformModel = {
        messageContent: {}
      }
      const messageModel = data[i]['_source']
      const bodyModel = JSON.parse(messageModel['body'])
      switch (messageModel['platform']) {
        case 'IOS':
          transformModel['messageStatus'] = bodyModel['status']
          transformModel['senderUserID'] = bodyModel['sender']
          transformModel['faceUrl'] = bodyModel['faceURL']
          transformModel['nickName'] = bodyModel['nickName']
          transformModel['senderTimeMillis'] = bodyModel['timestamp']
          transformModel['messageContent'] = getMessageContent(messageModel['platform'], messageModel['contentType'], messageModel['filePath'], bodyModel)
          break
        case 'Android':
          transformModel['messageStatus'] = bodyModel['message']['messageStatus']
          transformModel['senderUserID'] = bodyModel['message']['senderUserID']
          transformModel['faceUrl'] = bodyModel['message']['faceUrl']
          transformModel['nickName'] = bodyModel['message']['nickName']
          transformModel['senderTimeMillis'] = bodyModel['message']['serverTime']
          transformModel['messageContent'] = getMessageContent(messageModel['platform'], messageModel['contentType'], messageModel['filePath'], bodyModel)
          break
        case 'web':
        case 'h5':
          transformModel['messageStatus'] = getMessageSendStatus(bodyModel['status'])
          transformModel['senderUserID'] = bodyModel['from']
          transformModel['faceUrl'] = bodyModel['avatar']
          transformModel['nickName'] = bodyModel['nick']
          transformModel['senderTimeMillis'] = bodyModel['time']
          transformModel['messageContent'] = getMessageContent(messageModel['platform'], messageModel['contentType'], messageModel['filePath'], bodyModel)
          break
        case 'api':
          transformModel['messageStatus'] = 2
          transformModel['senderUserID'] = messageModel['fromID']
          transformModel['faceUrl'] = ''
          transformModel['nickName'] = '系统通知'
          transformModel['senderTimeMillis'] = 0
          transformModel['messageContent'] = getMessageContent(messageModel['platform'], messageModel['contentType'], messageModel['filePath'], bodyModel)
          break

      }
      transformModel['platform'] = messageModel['platform']
      transformModel['contentType'] = messageModel['contentType']
      transformModel['id'] = messageModel['id']
      transformModel['messageCreateTime'] = messageModel['createTimeInMillis']
      transformModel['conversationType'] = messageModel['targetType']
      transformModel['isRead'] = messageModel['isPeerRead']
      transformList.push(transformModel)
    }
    return transformList
  } catch (e) {
    console.log('转换异常信息：', e)
  }
}

/**
 * todo 推送聊天消息
 * @param message 消息体
 * @param platform 终端平台
 * @param filePath 文件路径
 * @param targetId 接受者ID
 * @param targetName 接受者昵称
 * @returns {*}
 */
export function pushChatMessageData(message, platform, filePath, targetId, targetName) {
  return {
    'serverMessageId': message['ID'],
    'platform': platform,
    'contentType': transformElemType(message['type']),
    'targetType': 'C2C' === message['conversationType'] ? 'single' : 'group',
    'filePath': filePath,
    'fromID': message['from'],
    'fromName': message['nick'],
    'targetID': targetId,
    'targetName': targetName,
    'createTimeInMillis': message['time'],
    'fromAppkey': message['conversationID'],
    'targetAppkey': targetId,
    'body': JSON.stringify(message),
    'cloudCustomData': '',
    'isRevoked': ''
  }
}

export function getConversationList(data) {
  try {
    let conversationList = []
    for (let i = 0; i < data.length; i++) {
      // todo 新数据结构体
      const conversationModel = {
        messageContent: {}
      }
      const messageModel = data[i]['wheat_news_rocerd']
      const bodyModel = JSON.parse(messageModel['body'])
      conversationModel['messageContent'] = getMessageContent(messageModel['platform'], messageModel['contentType'], messageModel['filePath'], bodyModel)
      conversationModel['messageContent']['nickname'] = bodyModel['nick']
      conversationModel['messageContent']['faceUrl'] = bodyModel['avatar']
      conversationModel['conversationType'] = 1 === data[i]['conversation_type'] ? 'single' : 'group'
      conversationModel['showName'] = 2 === data[i]['conversation_type'] ? data[i]['wheat_group']['name'] : data[i]['wheat_user']['nickname']
      conversationModel['faceUrl'] = 2 === data[i]['conversation_type'] ? data[i]['wheat_group']['avatar'] : data[i]['wheat_user']['head_portrait']
      conversationModel['cid'] = 2 === data[i]['conversation_type'] ? data[i]['wheat_group']['im_biaoshi'] : data[i]['wheat_user']['username']
      conversationModel['conversationId'] = bodyModel['conversationID']
      conversationModel['id'] = data[i]['id']
      conversationModel['unreadCount'] = data[i]['unread']
      conversationList.push(conversationModel)
    }
    return conversationList
  } catch (e) {
    console.log('获取会话列表异常：', e)
  }

}

/**
 * todo 获取接收消息数据
 * @param data 消息数据
 * @returns {Array} 聊天数组
 */
export function getReceiveMessage(data) {
  return data
}

/**
 * todo 获取消息体
 * @param platform 终端平台 ios、android、web、h5、api
 * @param contentType 消息类型 1.文本 2.自定义 3.图片 4.语音 7.位置
 * @param filePath 文件路径
 * @param bodyModel body数据
 * @returns {{}}
 */
function getMessageContent(platform, contentType, filePath, bodyModel) {
  const messageContent = {}
  switch (platform) {
    case 'IOS':
      switch (contentType) {
        case 1:
          messageContent['elemType'] = 'text'
          messageContent['elemValue'] = bodyModel['textElem']['text']
          break
        case 2:
          messageContent['elemType'] = 'custom'
          messageContent['elemValue'] = ''
          messageContent['customInfo'] = getCustomMessageContent(JSON.parse(bodyModel['customElem']['data']))
          messageContent['customType'] = bodyModel['customElem']['data']['type']
          break
        case 3:
          messageContent['elemType'] = 'image'
          messageContent['elemValue'] = filePath
          messageContent['imageList'] = bodyModel['imageElem']['imageList']
          break
        case 4:
          messageContent['elemType'] = 'voice'
          messageContent['elemValue'] = filePath
          messageContent['duration'] = bodyModel['soundElem']['duration']
          break
        case 7:
          messageContent['elemType'] = 'location'
          messageContent['elemValue'] = ''
          messageContent['locationInfo'] = JSON.parse(bodyModel['locationElem']['desc'])
          messageContent['longitude'] = bodyModel['locationElem']['longitude']
          messageContent['latitude'] = bodyModel['locationElem']['latitude']
          break
      }
      break
    case 'Android':
      switch (contentType) {
        case '1':
          messageContent['elemType'] = 'text'
          messageContent['elemValue'] = commonUtils.byteToString(bodyModel['message']['messageBaseElements'][0]['textContentBytes'])
          break
        case '2':
          messageContent['elemType'] = 'custom'
          messageContent['elemValue'] = ''
          messageContent['customInfo'] = getCustomMessageContent(JSON.parse(commonUtils.byteToString(bodyModel['message']['messageBaseElements'][0]['data'])))
          messageContent['customType'] = JSON.parse(commonUtils.byteToString(bodyModel['message']['messageBaseElements'][0]['data']))['type']
          break
        case '3':
          messageContent['elemType'] = 'image'
          messageContent['elemValue'] = filePath
          messageContent['imageList'] = bodyModel['message']['messageBaseElements'][0]
          break
        case '4':
          messageContent['elemType'] = 'voice'
          messageContent['elemValue'] = filePath
          messageContent['duration'] = bodyModel['message']['messageBaseElements'][0]['soundDuration']
          break
        case '7':
          messageContent['elemType'] = 'location'
          messageContent['elemValue'] = ''
          messageContent['locationInfo'] = JSON.parse(bodyModel['message']['messageBaseElements'][0]['description'])
          messageContent['longitude'] = bodyModel['message']['messageBaseElements'][0]['longitude']
          messageContent['latitude'] = bodyModel['message']['messageBaseElements'][0]['latitude']
          break
      }
      break
    case 'web':
    case 'h5':
      switch (contentType) {
        case '1':
          messageContent['elemType'] = 'text'
          messageContent['elemValue'] = bodyModel['payload']['text']
          break
        case '2':
          messageContent['elemType'] = 'custom'
          messageContent['elemValue'] = ''
          messageContent['customInfo'] = getCustomMessageContent(JSON.parse(bodyModel['payload']['data']))
          messageContent['customType'] = JSON.parse(bodyModel['payload']['data'])['type']
          break
        case '3':
          messageContent['elemType'] = 'image'
          messageContent['elemValue'] = filePath
          messageContent['imageList'] = bodyModel['payload']['imageInfoArray']
          break
      }
      break
    case 'api':
      messageContent['elemType'] = 'custom'
      messageContent['elemValue'] = ''
      messageContent['customInfo'] = getCustomMessageContent(bodyModel)
      messageContent['customType'] = bodyModel['type']
      break
  }
  return messageContent
}

/**
 * 获取自定义消息结构
 * 01.站内邀请 （ 发送群组名片信息 ）
 * 02.订单消息 （ 发送用户订单信息 ）
 * 03.商品消息 （ 发送商家商品信息 ）
 * 04.订单推送 （ 用户下单 服务器通过极光 REST API 分别发送一条订单推送至商家和用户 ）
 * 05.退款推送 （ 服务器通过极光 REST API 接口 发送退款消息通知商家端 ）
 * 06.拉黑消息 （ 当对方将你拉黑之后，发送消息时创建一条本地拉黑消息提示"消息已发出，但被对方拒收"）
 * 07.透传消息 （ 透传类型"cmd_type"：1.拉黑通知 ）
 * 08.限制消息 （ 当双方未进行相互关注"非好友关系" 24小时内（ 如果对方未回复情况下 ）只能发送一条消息
 * 09.群组限制 （ 当用户被踢出群聊、退出群聊 发送群组异常消息提示 ）
 * 10.问诊消息 （ 医护端创建一条问诊消息发送给患者端 ）
 * 11.文章消息 （ 用户发送文章类型消息 ）
 * 12.名片消息 （ 用户发送名片类型消息 ）
 * 13.存证消息 （ 汇存证链接消息 ）
 * @param messageModelElementElementElement 自定义消息体
 * @returns {*}
 */
function getCustomMessageContent(messageModelElementElementElement) {
  switch (messageModelElementElementElement['type']) {
    case 1:
      return messageModelElementElementElement['groupInfo']
    case 2:
      return messageModelElementElementElement['orderInfo']
    case 3:
      return messageModelElementElementElement['goodsInfo']
    case 4:
      return messageModelElementElementElement['orderInfo']
    case 5:
      return messageModelElementElementElement['refundInfo']
    case 10:
      return messageModelElementElementElement['patientCardInfo']
    case 11:
      return messageModelElementElementElement['articleInfo']
    case 12:
      return messageModelElementElementElement['businessCardInfo']
  }
}

/**
 * Web端消息发送状态
 * @param status
 * todo unSend(未发送)
 * todo success(发送成功)
 * todo fail(发送失败)
 * @returns {number}
 */
function getMessageSendStatus(status) {
  switch (status) {
    case 'unSend':
      return 1
    case 'success':
      return 2
    case 'fail':
      return 3
  }
}

/**
 * 格式化消息类型（ 将消息类型String 转换 int ）
 * @param elemType
 * @returns {string}
 */
function transformElemType(elemType) {
  switch (elemType) {
    case 'TIMTextElem':
      return '1'
    case 'TIMCustomElem':
      return '2'
    case 'TIMImageElem':
      return '3'
    default:
      return '0'
  }
}

import commonUtils from '../utils/CommonUtils'

export default {
  transformMessageList,
  pushChatMessageData,
  getConversationList,
  getReceiveMessage,
  getCustomMessageContent,
  getMessageContent
}
