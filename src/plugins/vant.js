// 按需全局引入 vant 组件
import 'vant/lib/index.css';
import Vue from 'vue'
import {Button} from 'vant'
import {Col} from "vant";
import {Row} from "vant";
import {Image as VanImage} from 'vant';
import {Swipe, SwipeItem} from 'vant';
import {Cell} from 'vant';
import {Uploader} from "vant";
import {Field} from "vant";
import {Popup} from "vant";
import {Picker} from "vant";


Vue.use(Button).use(Col).use(Row).use(VanImage).use(Swipe).use(SwipeItem).use(Cell).use(Uploader).use(Field).use(Popup).use(Picker)
