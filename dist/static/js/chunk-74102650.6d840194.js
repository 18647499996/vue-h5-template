(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74102650"],{"5f87":function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return p}));var i=n("a78e"),a=n.n(i);function o(t){return a.a.set("USER_TOKEN",t)}function r(){return a.a.get("USER_TOKEN")}function s(){return a.a.remove("USER_TOKEN")}function c(){return a.a.set("SKIP_SHOP",1)}function u(){return a.a.set("SKIP_ACTIVE",1)}function l(t){return a.a.set("LOCATION_INFO",t)}function p(){return a.a.get("LOCATION_INFO")}},"7b31":function(t,e,n){"use strict";n.d(e,"h",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"k",(function(){return r})),n.d(e,"f",(function(){return s})),n.d(e,"g",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"m",(function(){return l})),n.d(e,"a",(function(){return p})),n.d(e,"j",(function(){return d})),n.d(e,"i",(function(){return h})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return f})),n.d(e,"l",(function(){return g}));var i=n("b775");function a(t){return Object(i["a"])({url:"/api/Item/GetRangeItem?",method:"get",params:t,hideloading:!0})}function o(t){return Object(i["a"])({url:"/api/Item/GetAllItemByName?",method:"get",params:t,hideloading:!0})}function r(t){return Object(i["a"])({url:"/api/Item/GetSubArea?",method:"get",params:t,hideloading:!0})}function s(t){return Object(i["a"])({url:"/api/Item/GetOwnerByRoom?",method:"get",params:t,hideloading:!1})}function c(t){return Object(i["a"])({url:"/api/Sms/OwnerCode?",method:"get",params:t,hideloading:!1})}function u(t){return Object(i["a"])({url:"/api/Item/BindUserOwner?",method:"get",params:t,hideloading:!1})}function l(t){return Object(i["a"])({url:"/api/Item/GetUserRoom?",method:"get",params:t,hideloading:!1})}function p(t){return Object(i["a"])({url:"/api/Repair/Add",method:"post",data:t,hideloading:!1})}function d(t){return Object(i["a"])({url:"/api/Repair/getRepair",method:"get",params:t,hideloading:!1})}function h(t){return Object(i["a"])({url:"/api/Repair/GetRepairDetail",method:"get",params:t,hideloading:!1})}function m(t){return Object(i["a"])({url:"/api/Repair/Cancel",method:"post",data:t,hideloading:!1})}function f(t){return Object(i["a"])({url:"/api/Repair/AddEvaluation?",method:"post",data:t,hideloading:!1})}function g(t){return Object(i["a"])({url:"/api/Item/GetUserItem?",method:"get",params:t,hideloading:!1})}},b775:function(t,e,n){"use strict";n("e7e5");var i=n("d399"),a=(n("d3b7"),n("25f0"),n("bc3a")),o=n.n(a),r=n("4360"),s=n("a18c"),c=n("5c96"),u=n("5f87"),l=n("f121"),p=o.a.create({baseURL:l["baseApi"],withCredentials:!0,timeout:3e4});p.interceptors.request.use((function(t){return t.hideloading||i["a"].loading({message:"加载中..",forbidClick:!0,duration:0}),r["a"].getters.token&&(t.headers["X-Token"]=""),""!==Object(u["b"])()&&(t.headers["Authorization"]="Bearer "+Object(u["b"])()),t}),(function(t){return Promise.reject(t)})),p.interceptors.response.use((function(t){i["a"].clear();var e=t.data,n=t.request;if(200===n.status)return 0===e.code?Promise.resolve(e):Promise.reject(e.msg);c["Message"].error({message:"服务器连接异常，请稍后连接！",duration:1e3})}),(function(t){i["a"].clear();var e=0;try{e=t.response.data.code}catch(a){if(-1!==t.toString().indexOf("Error: timeout"))return c["Message"].error({message:"网络请求超时",duration:2e3}),Promise.reject(t)}if(e)if(401===e)c["Message"].error({message:"登录状态已过期，重新登录！",duration:1500}),"/api/Mall/GetMall?"===t.response.config.url&&Object(u["f"])(),"api/Activity/GetActivity?"===t.response.config.url&&Object(u["d"])(),Object(u["c"])(),s["a"].push("/verify_login");else{var n=t.response.data.message;void 0!==n&&c["Message"].error({message:n,duration:2e3})}else c["Message"].error({message:"接口请求失败",duration:2e3});return Promise.reject(t)})),e["a"]=p},c719:function(t,e,n){"use strict";n("dfc9")},ca7c:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-row",[n("van-tabs",{attrs:{sticky:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{attrs:{name:"1"},scopedSlots:t._u([{key:"title",fn:function(){return[n("van-row",[n("el-image",{staticClass:"icon-title",attrs:{src:"https://image.lawxp.com/webimg.aspx?ImgId=104224"}}),n("span",{staticClass:"span-title"},[t._v("我要报修")])],1)]},proxy:!0}])},[n("van-row",[n("van-row",{staticClass:"app-shadow"},[n("van-cell",{attrs:{title:"报修类型",icon:"https://image.lawxp.com/webimg.aspx?ImgId=104204","is-link":"",value:void 0===t.repairsTypeObject.text?"":t.repairsTypeObject.text},on:{click:function(e){return t.onClickRepairsType()}}})],1),n("van-row",{staticClass:"app-shadow"},[n("van-row",{staticClass:"row-reason-hint"},[t._v("报修事由")]),n("van-field",{staticStyle:{background:"#f8f8f8"},attrs:{rows:"5",autosize:"",type:"textarea",maxlength:"200",placeholder:"请简单描述您的报修内容","show-word-limit":""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),n("van-row",{staticClass:"row-reason-hint"},[t._v("添加图片")]),n("van-uploader",{attrs:{multiple:"","max-count":6},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1),n("van-row",{staticClass:"app-shadow"},[n("van-field",{attrs:{label:"联系人",placeholder:"请输入联系人","input-align":"right",clearable:""},model:{value:t.inputContact,callback:function(e){t.inputContact=e},expression:"inputContact"}}),n("van-field",{attrs:{label:"电话号码",placeholder:"请输入电话号码",type:"tel","input-align":"right",clearable:""},model:{value:t.inputPhone,callback:function(e){t.inputPhone=e},expression:"inputPhone"}}),n("van-field",{attrs:{label:"楼房号",placeholder:t.selectHouse.roomName,"input-align":"right",readonly:"","is-link":""},on:{click:t.onClickSelectHouse}})],1),n("van-row",{staticClass:"row-submit"},[n("van-button",{staticClass:"btn-submit",attrs:{color:"#e71120",round:""},on:{click:t.onClickSubmitRepairs}},[t._v("提交报修")])],1),n("van-popup",{style:{height:"35%"},attrs:{round:"",position:"bottom"},model:{value:t.isPopupShow,callback:function(e){t.isPopupShow=e},expression:"isPopupShow"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:t.repairsTypeArray},on:{confirm:t.onConfirm,cancel:t.onCancel}})],1),n("van-action-sheet",{attrs:{actions:t.houseList,"cancel-text":"取消","close-on-click-action":""},on:{cancel:t.onActionSheetCancel,select:t.onSelect},model:{value:t.showActionSheet,callback:function(e){t.showActionSheet=e},expression:"showActionSheet"}})],1)],1),n("van-tab",{attrs:{name:"2"},scopedSlots:t._u([{key:"title",fn:function(){return[n("van-row",[n("el-image",{staticClass:"icon-title",attrs:{src:"https://image.lawxp.com/webimg.aspx?ImgId=104225"}}),n("span",{staticClass:"span-title"},[t._v("报修记录")])],1)]},proxy:!0}])},t._l(t.repairList,(function(e,i){return n("van-row",{key:i,staticClass:"app-shadow"},[n("van-cell",{attrs:{title:0===e.type?"其他":1===e.type?"房屋维修":2===e.type?"水电燃气":"公共设备",icon:0===e.type||1===e.type?"https://image.lawxp.com/webimg.aspx?ImgId=104217":2===e.type?"https://image.lawxp.com/webimg.aspx?ImgId=104218":"https://image.lawxp.com/webimg.aspx?ImgId=104219","is-link":""},on:{click:function(n){return t.onClickItem(e)}}}),n("van-row",{staticClass:"row-content"},[null!==e.img?n("van-col",{attrs:{span:6}},[n("el-image",{staticClass:"image-cover",attrs:{fit:"cover",src:e.img}})],1):t._e(),n("van-col",{attrs:{span:null===e.img?"24":"18"}},[n("van-row",{staticClass:"row-description"},[t._v(t._s(e.describe))]),n("van-row",{staticClass:"row-date"},[n("van-icon",{staticStyle:{float:"left"},attrs:{name:"underway-o",size:"20"}}),n("span",{staticClass:"span-date"},[t._v(t._s(e.date))])],1)],1)],1),n("van-divider"),n("van-row",{staticStyle:{"margin-top":"20px","text-align":"right"}},[n("van-button",{staticClass:"row-cancel",attrs:{size:"small"},on:{click:function(n){return t.onClickCancel(e)}}},[t._v("取消报修")]),n("van-button",{staticClass:"row-complete",attrs:{size:"small"},on:{click:function(n){return t.onClickSubmit(e)}}},[t._v("完成报修")])],1)],1)})),1)],1)],1)},a=[],o=(n("9a83"),n("f564")),r=(n("e17f"),n("2241")),s=(n("a4d3"),n("e01a"),n("d81d"),n("7b31")),c={name:"PropertyRepairsActivity",data:function(){return{active:"1",houseId:"",description:"",fileList:[],isPopupShow:!1,repairsTypeArray:[{id:0,text:"其他"},{id:1,text:"房屋维修"},{id:2,text:"水电燃气"},{id:3,text:"公共设施"}],repairsTypeObject:{},inputContact:"",inputPhone:"",selectHouse:{},houseList:[],showActionSheet:!1,repairList:[]}},mounted:function(){this.routeParam=this.$route.query,this.getUserRoom(),this.getRepairList()},methods:{getUserRoom:function(){var t=this;Object(s["m"])({itemId:this.routeParam.houseId,type:1}).then((function(e){t.houseList=e.data,t.selectHouse=e.data[0],t.inputContact=t.selectHouse.ownerName,t.inputPhone=t.selectHouse.ownerPhone})).catch((function(t){}))},getRepairList:function(){var t=this;Object(s["j"])({index:1,size:10,itemId:this.routeParam.houseId}).then((function(e){t.repairList=e.data.list})).catch((function(t){}))},onClickSelectHouse:function(){this.showActionSheet=!0},onActionSheetCancel:function(){this.showActionSheet=!1},onClickCancel:function(t){var e=this;r["a"].confirm({title:"是否取消报修？"}).then((function(){Object(s["c"])({id:t.id}).then((function(t){Object(o["a"])({type:"success",message:"取消报修成功"}),e.getRepairList()})).catch((function(t){Object(o["a"])({type:"danger",message:t})}))})).catch((function(){}))},onClickSubmit:function(t){var e=this;Object(s["d"])({id:t.id,star:0,evaluation:""}).then((function(t){Object(o["a"])({type:"success",message:"完成报修"}),e.getRepairList()})).catch((function(t){Object(o["a"])({type:"danger",message:t})}))},onSelect:function(t){this.selectHouse=t,this.inputContact=this.selectHouse.ownerName,this.inputPhone=this.selectHouse.ownerPhone},onClickItem:function(t){this.$router.push({path:"/property_repairs_details_activity",query:{id:t.id}})},onClickRepairsType:function(){this.isPopupShow=!0},onConfirm:function(t){this.onCancel(),this.repairsTypeObject=t},onCancel:function(){this.isPopupShow=!1},onClickSubmitRepairs:function(){var t=this,e=new FormData;e.append("describe",this.description),e.append("ownerId",this.selectHouse.ownerId),e.append("name",this.inputContact),e.append("phone",this.inputPhone),e.append("type",this.repairsTypeObject.id),this.fileList.map((function(t){e.append("file",t.file)})),Object(s["a"])(e).then((function(e){t.description="",t.selectHouse={},t.inputContact="",t.inputPhone="",t.repairsTypeObject={},t.fileList=[],t.active="2",t.getRepairList(),Object(o["a"])({type:"success",message:"提交报修成功"})})).catch((function(t){}))}}},u=c,l=(n("c719"),n("2877")),p=Object(l["a"])(u,i,a,!1,null,"d361d97e",null);e["default"]=p.exports},dfc9:function(t,e,n){}}]);