webpackJsonp([1],{"50q1":function(t,a){},KQmh:function(t,a,e){t.exports=e.p+"static/img/player2.94c7a9c.jpeg"},LRft:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=e("xd7I"),s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var r=e("C7Lr")({name:"App"},s,!1,function(t){e("LRft")},null,null).exports,n=e("7LQH"),i=e("IHPB"),o=e.n(i);var c={curDate:null,dialogVisible:!1,rules:{rank1:[{required:!0,message:"请选择玩家名次",trigger:"blur"}],rank2:[{required:!0,message:"请选择玩家名次",trigger:"blur"}]},formData:{rank1:null,rank2:null},rankOptions:[{label:"第1名",value:1},{label:"第2名",value:2},{label:"第3名",value:3},{label:"第4名",value:4},{label:"第5名",value:5},{label:"第6名",value:6},{label:"第7名",value:7},{label:"第8名",value:8}],tableData:[]},u={data:function(){return c},computed:{playARes:function(){if(c.tableData.length){var t=0;return c.tableData.forEach(function(a){t+=a.free1}),t}return 0},playBRes:function(){if(c.tableData.length){var t=0;return c.tableData.forEach(function(a){t+=a.free2}),t}return 0}},mounted:function(){this.curDate=function(t,a){if("string"==typeof t)return t;if(t instanceof Date==0)return null;var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var l in/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+l+")").test(a)&&(a=a.replace(RegExp.$1,1==RegExp.$1.length?e[l]:("00"+e[l]).substr((""+e[l]).length)));return a}(new Date,"yyyy-MM-dd")},methods:{addToTable:function(){var t=this;this.$refs.myForm.validate(function(a){if(a)if(c.formData.rank1===c.formData.rank2)t.$message({message:"俩人怎么可能是同一名次，4不4傻",type:"warning"});else{var e=c.formData,l=e.rank1,s=e.rank2,r=0,n=0;1===l?r=10:-1!==[2,3,4].indexOf(l)?r=3:8===l&&(r=-3),1===s?n=3:-1!==[5,6,7].indexOf(s)?n=-3:8===s&&(n=-10);var i={rank1:"第"+l+"名",free1:r,rank2:"第"+s+"名",free2:n};c.tableData=[].concat(o()(c.tableData),[i]),t.$message({message:"添加记录成功",type:"success"}),c.formData={rank1:null,rank2:null}}})}}},f={render:function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("div",{staticClass:"count-point"},[l("div",{staticClass:"content clearfix"},[l("div",{staticClass:"content-l fl"},[l("el-form",{ref:"myForm",attrs:{model:t.formData,rules:t.rules}},[l("el-form-item",{staticClass:"clearfix",attrs:{prop:"rank1"}},[l("img",{staticClass:"content-l-img fl",attrs:{src:e("v7mx"),alt:""}}),t._v(" "),l("el-select",{staticClass:"fl",attrs:{placeholder:"请选择玩家名次"},model:{value:t.formData.rank1,callback:function(a){t.$set(t.formData,"rank1",a)},expression:"formData.rank1"}},t._l(t.rankOptions,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),l("el-form-item",{staticClass:"clearfix",attrs:{prop:"rank2"}},[l("img",{staticClass:"content-l-img fl",attrs:{src:e("KQmh"),alt:""}}),t._v(" "),l("el-select",{staticClass:"fl",attrs:{placeholder:"请选择玩家名次"},model:{value:t.formData.rank2,callback:function(a){t.$set(t.formData,"rank2",a)},expression:"formData.rank2"}},t._l(t.rankOptions,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1)],1),t._v(" "),l("div",{staticClass:"content-r clearfix"},[l("el-button",{staticClass:"fl",attrs:{type:"primary"},on:{click:t.addToTable}},[t._v("添加记录")]),t._v(" "),l("p",{staticClass:"content-r-rule fr",on:{click:function(a){t.dialogVisible=!0}}},[t._v("显示规则")])],1)]),t._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[l("el-table-column",{attrs:{align:"center",label:t.curDate}},[l("el-table-column",{attrs:{align:"center",label:"gina"}},[l("el-table-column",{attrs:{prop:"rank1",label:"名次",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[l("img",{staticClass:"tr-img fl",attrs:{src:e("v7mx"),alt:""}}),t._v(" "),l("p",{staticClass:"tr-word fl"},[t._v(t._s(a.row.rank1))])]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"free1",label:"金额",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.free1>0?l("span",[t._v("+")]):t._e(),t._v(t._s(a.row.free1)+"\n          ")]}}])})],1),t._v(" "),l("el-table-column",{attrs:{align:"center",label:"wj"}},[l("el-table-column",{attrs:{prop:"rank2",label:"名次",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[l("img",{staticClass:"tr-img fl",attrs:{src:e("KQmh"),alt:""}}),t._v(" "),l("p",{staticClass:"tr-word fl"},[t._v(t._s(a.row.rank2))])]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"free2",label:"金额",align:"center"}})],1)],1)],1),t._v(" "),l("div",{staticClass:"result clearfix"},[l("p",{staticClass:"fl"},[t._v("合计：")]),t._v(" "),l("p",{staticClass:"fl clearfix"},[l("img",{staticClass:"result-img fl",attrs:{src:e("v7mx"),alt:""}}),l("span",{staticClass:"result-word ml10 fl"},[t._v(t._s(t.playARes))])]),t._v(" "),l("p",{staticClass:"fl clearfix ml20"},[l("img",{staticClass:"result-img fl",attrs:{src:e("KQmh"),alt:""}}),l("span",{staticClass:"result-word ml10 fl"},[t._v(t._s(t.playBRes))])])]),t._v(" "),t.tableData.length>0?l("div",{staticClass:"clearfix"},[l("div",{staticClass:"fl"},[t._v("综上所述： ")]),t._v(" "),t.playARes>t.playBRes?l("div",{staticClass:"explain fl"},[t._v("wj 需支付 gina "+t._s(t.playARes-t.playBRes)+" 元")]):t._e(),t._v(" "),t.playARes===t.playBRes?l("div",{staticClass:"explain fl"},[t._v("双方一个字儿都不用付~")]):t._e(),t._v(" "),t.playARes<t.playBRes?l("div",{staticClass:"explain fl"},[t._v("gina 需支付 wj "+t._s(t.playBRes-t.playARes)+" 元")]):t._e()]):t._e(),t._v(" "),l("p",{staticClass:"mt10"},[t._v("*ps: 谁菜已经很明显了吧?!")]),t._v(" "),l("el-dialog",{attrs:{title:"pp龙虎榜规则",visible:t.dialogVisible,width:"80%",center:""},on:{"update:visible":function(a){t.dialogVisible=a}}},[l("h4",{staticClass:"mt0"},[t._v("gina规则如下：")]),t._v(" "),l("p",[t._v("1.第1名 +10")]),t._v(" "),l("p",[t._v("2.第2、3、4名 +3")]),t._v(" "),l("p",[t._v("3.第8名 -3")]),t._v(" "),l("el-divider"),t._v(" "),l("h4",[t._v("wj规则如下：")]),t._v(" "),l("p",[t._v("1.第1名 +3")]),t._v(" "),l("p",[t._v("2.第5、6、7名 -3")]),t._v(" "),l("p",[t._v("3.第8名 -10")]),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(a){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var p=e("C7Lr")(u,f,!1,function(t){e("50q1")},"data-v-7dacbc96",null).exports;l.default.use(n.a);var v=new n.a({routes:[{path:"/",name:"CountPoint",component:p}]}),m=e("NxjZ"),_=e.n(m);e("zlkP");l.default.config.productionTip=!1,l.default.use(_.a),new l.default({el:"#app",router:v,components:{App:r},template:"<App/>"})},v7mx:function(t,a,e){t.exports=e.p+"static/img/player1.5472a76.jpeg"},zlkP:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.ea51947599066d8484b2.js.map