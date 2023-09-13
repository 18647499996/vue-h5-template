import liudonghan from '@/utils/AxiosManagerUtils'
import { addBlobInterceptors } from '../utils/AxiosManagerUtils'

export function getShopApi() {
  return liudonghan
    .createAxiosServer()
    .baseApi('https://csapi1.xinfushenghuo.cn')
    .addLogcatInterceptors()
    .addParamsInterceptors(params => {
      return params
    })
    .addCodeInterceptors(code => {
      return code
    })
}

export function getLiveApi() {
  return liudonghan
    .createAxiosServer()
    .baseApi('https://zhibo.youdekan.me')
    .addHeaders({
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyRENCNzE2RTE3NzAzMjQxQjM5QzU4NTlCQjNDNDI5IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTA2MTE1NDIsImV4cCI6MTY5MTQ3NTU0MiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5sYXd4cC5jb20iLCJjbGllbnRfaWQiOiJhcHAiLCJzdWIiOiI3MThfaXN3ZWJvYTpUcnVlX2lzd2VzYWxlOkZhbHNlX2lzYWdlbnQ6RmFsc2UiLCJhdXRoX3RpbWUiOjE2OTA2MTE1NDIsImlkcCI6ImxvY2FsIiwiVXNlcklkIjoiMjEwMjk2MTExMCIsIm5hbWUiOiIxODY0NzQ5OTk5NiIsImdpdmVuX25hbWUiOiLliJjlhqzmtrUiLCJlbWFpbCI6ImxpdWRvbmdoYW5AbGF3eHAuY29tIiwianRpIjoiODUzRUM3QjEwOUQyRDhBNzNDQUI3RDZBNENDQ0ZBN0QiLCJpYXQiOjE2OTA2MTE1NDIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsiY3VzdG9tIl19.VmeXtYBt_MkA-7O1E0tQ5EU6crAJJFJ4iYeZjJqgzUyr4hZp96_J9lmms8AhehlD8XP6QxVvOS2Do2ol0Lq_v3-Zo8rAK_ebJHIU5SxOtqG4TdUZaRnzSHHvyBiu3CZV8n5fBO9Iwp_vKyOZTyqExsVIlR2vcmGy9Ydbr9a5aHCVVGiaOlD_6o9uOWsInq_bTGMUIXvYtbXNVf3alX8mUTJahI6zJq4qMrWu-ZCttU2v9eYDk6ajfpWYOJxHwCZogt3q7VeH1PoB1ekthOzz5DzA3uPd_8_UENv0_gRmpjdt5uqVPERKESOOeWv8qMxmR_jeTG3FNTGESW-2TgoYHg'
    })
    .addLogcatInterceptors()
    .addParamsInterceptors(params => {
      return params
    })
    .addCodeInterceptors(code => {
      return code
    })
}

export function getFileApi(){
  return liudonghan
    .createBlobAxiosServer()
    .addHeaders({
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyRENCNzE2RTE3NzAzMjQxQjM5QzU4NTlCQjNDNDI5IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTQ1Njc3MDQsImV4cCI6MTY5NTQzMTcwNCwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5sYXd4cC5jb20iLCJjbGllbnRfaWQiOiJjcm0iLCJzdWIiOiI1NzdfaXN3ZWJvYTpUcnVlX2lzd2VzYWxlOlRydWVfaXNhZ2VudDpGYWxzZSIsImF1dGhfdGltZSI6MTY5NDU2NzcwNCwiaWRwIjoibG9jYWwiLCJVc2VySWQiOiIyMTAyNzIxMzY2IiwibmFtZSI6Iua1i-ivlWxhdzMiLCJnaXZlbl9uYW1lIjoi5rWL6K-VbGF3Myjli7_liKApIiwiZW1haWwiOiI_RD8_Zz8_w6w_P2phP8OqYT_vv6UiLCJqdGkiOiIyQjVEMEU3QUUzQjdGOTkxNDk4RTQ1NDZFNEQ1NzM0NCIsImlhdCI6MTY5NDU2NzcwNCwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsiY3VzdG9tIl19.Nb82JAbTZqQpThiqu3YoSenS_qA8Vz3JvyrZj5yGbCnsy2UDaUX7eLAwsqHJywShc245gxccSEdy7mu3S9ErZT0SHpL4QgW1nco2Z7N5uiF2P2VXOomxiQrrOi6Dsw8jjTWoaesvjOxzamtG7vTdf-avBgOSEAh61_iWi-G0x2ALs2Y51a9AVHGVjgv59pPW7rNivdnpEDa2P05Qibd_-wYMh1A-pzqjBD8TDAI6K2qyyK64Ca7x6VVKP29yOJbV8zNpbZY1V55S1_jZJJ0Km14zMjbgtuxXfno_0lFvkKL72uQNPSDPWSF3ydxM07OfyBAompLP3isN2XJ0Xa9Drw'
    })
    .baseApi('https://api1.likewon.cn')
    .addLogcatInterceptors()
    .addBlobInterceptors()
}

export function getAxiosManger(){
  return liudonghan.createAxiosServer()
}

export default {
  getAxiosManger,
  getShopApi,
  getLiveApi,
  getFileApi
}

