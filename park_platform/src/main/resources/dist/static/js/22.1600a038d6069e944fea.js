webpackJsonp([22],{"8rSn":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("bOdI"),i=a.n(l),s=a("mvHQ"),o=a.n(s),n=a("PJh5"),r=a.n(n),c=(a("mw3O"),a("YvBo")),d={methods:{handleBJ:function(e){console.log(e);var t=this,a=t.baseUrl+"feeRule/update";e.feeRuleConfigs=e.scArr,t.$axios.post(a,e).then(function(e){console.log(e.data),t.$message({message:e.data.message,type:"info"}),t.dialogVisible3=!1,t.getCarMsg()}).catch(function(e){return console.log(e)})},cancelBJ:function(){this.dialogVisible3=!1},getCycleType:function(){var e=this;c.c().then(function(t){e.cycleTypeIdShow=!0;for(var a=0;a<t.data.data.length;a++)e.cycleTypeIdOption[a]={id:t.data.data[a].cycleTypeId,value:t.data.data[a].cycleTypeId,label:t.data.data[a].cycleTypeName}}).catch(function(e){return console.log(e)})},saveEditMsg:function(e){var t=this,a=t.baseUrl+"feeRule/updateRuleForVehicleType",l={parkingId:t.changeMsgForm.parkingId,id:t.changeMsgForm.id,vehicleTypeId:t.changeMsgForm.vehicleTypeId,feeRuleId:t.changeMsgForm.feeRuleId};t.$axios.post(a,l).then(function(e){console.log(e.data),t.$message({message:e.data.message,type:"info"}),t.dialogVisible3=!1}).catch(function(e){console.log(e)})},cancel2:function(){this.dialogVisibleAddRule=!1},saveInsertMsg:function(){var e=this,t=e.baseUrl+"feeRule/addRuleForVehicleType",a={parkingId:e.addMsgForm.parkingId,vehicleTypeId:e.addMsgForm.vehicleType,feeRuleId:e.addMsgForm.feeRuleId};console.log(a),e.$axios.post(t,a).then(function(t){console.log(t.data),"0"==t.data.status?(e.$message({message:t.data.message,type:"success"}),e.dialogVisibleAddRule=!1,e.search()):e.$message({message:t.data.message,type:"info"})}).catch(function(e){console.log(e)})},addMsg:function(){this.dialogVisibleAddRule=!0},sendParkId:function(e){console.log(e),this.ruleType(e)},ruleType:function(e){var t=this;t.feeRuleIdOptionsShow=!1;var a=t.baseUrl+"feeRule/initRuleList/"+e;t.$axios.get(a).then(function(e){console.log("ruleType   res"),console.log(e.data.data),t.feeRuleIdOptionsShow=!0;for(var a=0;a<e.data.data.length;a++)t.feeRuleIdOptions[a]={id:e.data.data[a].id,label:e.data.data[a].feeRule,value:e.data.data[a].id};console.log(t.feeRuleIdOptions)}).catch(function(e){console.log(e)})},search:function(){var e={parkingId:this.getRuleForm.parkingId,vehicleTypeId:this.getRuleForm.vehicleTypeId,feeRuleId:this.getRuleForm.feeRuleId,currentPage:this.currentPage,pageSize:this.pageSize};this.axiosMsg(e)},cancel:function(){this.dialogVisible3=!1},getParkingId:function(){var e=this;c.g(localStorage.getItem("userId")).then(function(t){if("0"==t.data.status)for(var a=0;a<t.data.data.length;a++)e.parkingIdOptions[a]={id:t.data.data[a].id,label:t.data.data[a].parkingName,value:t.data.data[a].id};e.$forceUpdate()}).catch(function(e){console.log(e)})},saveMsg:function(e){console.log("this.detailForm2.plateColorNo"),console.log(this.detailForm2.vehicleType);var t={id:this.row.id,parkingId:this.detailForm2.parkingId,vehicleTypeId:String(this.detailForm2.vehicleType),plateNo:this.detailForm2.plateNo,plateColorNo:this.detailForm2.plateColorNo,plateColor:this.detailForm2.plateColor,vehicleModel:this.detailForm2.vehicleModel,vehicleOwner:this.detailForm2.vehicleOwner,ownerIdNo:this.detailForm2.ownerIdNo,ownerGender:this.detailForm2.ownerGender,ownerBirth:this.detailForm2.ownerBirth,ownerPhone:this.detailForm2.ownerPhone,ownerAddress:this.detailForm2.ownerAddress,rfidNo:this.detailForm2.rfidNo};this.axiosChangeCar(t)},axiosChangeCar:function(e){var t=this.baseUrl+"vehicleInfo/updateVehicle";this.$axios.post(t,e).then(function(e){console.log("res.data......."),console.log(e.data)}).catch(function(e){console.log(e)})},currentChange:function(e){this.getTime();this.currentPage=e;var t={parkingId:this.getRuleForm.parkingId,vehicleTypeId:this.getRuleForm.vehicleTypeId,feeRuleId:this.getRuleForm.feeRuleId,currentPage:this.currentPage,pageSize:this.pageSize},a=o()(t);this.axiosMsg(a)},handleSizeChange:function(e){this.pageSize=e;var t={parkingId:this.getRuleForm.parkingId,vehicleTypeId:this.getRuleForm.vehicleTypeId,feeRuleId:this.getRuleForm.feeRuleId,currentPage:this.currentPage,pageSize:this.pageSize},a=o()(t);this.axiosMsg(a),console.log("每页显示"+e+"条")},axiosMsg:function(e){console.log("参数。。"),console.log(e);var t=this;c.i(e).then(function(e){t.paginationShow=!0,t.total=e.data.data.total,t.tableCar=e.data.data.records;for(var a=0;a<t.tableCar.length;a++)t.tableCar[a].maxFee?t.tableCar[a].maxFee=Math.ceil(t.tableCar[a].maxFee/100):t.tableCar[a].maxFee="0","1"==t.tableCar[a].status?t.tableCar[a].status="正常":t.tableCar[a].status="停用"}).catch(function(e){console.log(e)})},momentTime:function(e){return r()(e).format("YYYY-MM-DD HH:mm:ss")},momentTime1:function(e){return r()(e).format("YYYY-MM-DD")},getCarMsg:function(){var e={parkingId:this.getRuleForm.parkingId,feeRuleName:this.getRuleForm.feeRuleName,status:this.getRuleForm.status,pageSize:this.getRuleForm.vehicleType},t=o()(e);this.axiosMsg(t)},handleDetailMsg:function(e,t,a){var l=this;this.dialogVisible3=!0,l.sfgzRow=t,console.log("row....."),console.log(t);var i=l.baseUrl+"feeRule/detail?id="+t.id;l.$axios.get(i).then(function(e){l.changeMsgForm=e.data.data,l.changeMsgForm.scArr=[];for(var t=0;t<e.data.data.feeRuleConfigs.length;t++)l.changeMsgForm.scArr[t]={startMin:e.data.data.feeRuleConfigs[t].startMin,endMin:e.data.data.feeRuleConfigs[t].endMin,cycleTypeId:e.data.data.feeRuleConfigs[t].cycleTypeId,cycleFee:e.data.data.feeRuleConfigs[t].cycleFee}})},handleChangeMsg:function(e,t,a){console.log("row===="),console.log(t);var l=this;l.dialogVisible2=!0;var i=l.baseUrl+"feeRule/detail?id="+t.id;l.$axios.get(i).then(function(e){l.detailMsgForm=e.data.data,l.detailMsgForm.scArr=[],console.log("detailMsgForm.status....."),"0"==l.detailMsgForm.status?(console.log(1111),l.detailMsgForm.status="停用"):(console.log(2222),l.detailMsgForm.status="正常");for(var t=0;t<e.data.data.feeRuleConfigs.length;t++)l.detailMsgForm.scArr[t]={startMin:e.data.data.feeRuleConfigs[t].startMin,endMin:e.data.data.feeRuleConfigs[t].endMin,cycleTypeId:e.data.data.feeRuleConfigs[t].cycleTypeId,cycleFee:e.data.data.feeRuleConfigs[t].cycleFee}})}},data:function(){var e;return e={statusOptions:[{id:0,value:0,label:"停用"},{id:1,value:1,label:"正常"}],sfgzRow:[],cycleTypeIdOption:[],scArrShow:!1},i()(e,"statusOptions",[{id:1,value:1,label:"正常"},{id:0,value:0,label:"停用"}]),i()(e,"getRuleForm",{}),i()(e,"parkingIdOptions",[]),i()(e,"parkingIdOptionsShow",!1),i()(e,"feeRuleIdOptionsShow",!1),i()(e,"feeRuleIdOptions",[]),i()(e,"vehicleTypeOptions",[]),i()(e,"vehicleTypeOptionsShow",!1),i()(e,"currentPage",1),i()(e,"total",0),i()(e,"tableCar",[]),i()(e,"paginationShow",!1),i()(e,"pageSize",10),i()(e,"dialogVisible2",!1),i()(e,"detailMsgForm",{scArr:[]}),i()(e,"changeMsgForm",{scArr:[]}),i()(e,"dialogVisible3",!1),i()(e,"addMsgForm",{}),i()(e,"dialogVisibleAddRule",!1),i()(e,"rowMsg",{}),e},mounted:function(){this.getParkingId(),this.getCycleType(),this.getCarMsg()}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{model:{value:e.getRuleForm,callback:function(t){e.getRuleForm=t},expression:"getRuleForm"}},[a("el-row",[a("el-col",{attrs:{span:7}},[a("el-form-item",{staticStyle:{width:"260px"},attrs:{label:"车场名称"}},[a("el-select",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticStyle:{width:"190px"},attrs:{clearable:""},model:{value:e.getRuleForm.parkingId,callback:function(t){e.$set(e.getRuleForm,"parkingId",t)},expression:"getRuleForm.parkingId"}},e._l(e.parkingIdOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"收费规则名称"}},[a("el-input",{staticStyle:{width:"180px"},model:{value:e.getRuleForm.feeRuleName,callback:function(t){e.$set(e.getRuleForm,"feeRuleName",t)},expression:"getRuleForm.feeRuleName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:1}},[e._v(" ")]),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{staticClass:"laeblStyle",attrs:{label:"状态"}},[a("el-select",{staticClass:"handle-input",attrs:{clearable:""},model:{value:e.getRuleForm.status,callback:function(t){e.$set(e.getRuleForm,"status",t)},expression:"getRuleForm.status"}},e._l(e.statusOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{staticClass:"el-button el-button--primary",attrs:{type:"button"},on:{click:function(t){e.getCarMsg()}}},[e._v("\r\n                查询\r\n              ")])],1)],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%",padding:"20px"},attrs:{data:e.tableCar}},[a("el-table-column",{attrs:{prop:"id",label:"id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"parkingName",label:"车场名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"feeRuleName",label:"收费规则名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"maxFee",label:"最高收费金额(元)"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.handleChangeMsg(t.$index,t.row)}}},[e._v("查看\r\n      ")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.handleDetailMsg(t.$index,t.row)}}},[e._v("编辑\r\n      ")])]}}])})],1),e._v(" "),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.paginationShow,expression:"paginationShow"}],staticStyle:{"margin-top":"10px"},attrs:{background:"",layout:"total,sizes,prev,pager,next,jumper",total:e.total,"page-size":e.pageSize,"page-sizes":[5,10,20,30],"current-page":e.currentPage},on:{"size-change":e.handleSizeChange,"current-change":e.currentChange}}),e._v(" "),a("el-dialog",{attrs:{title:"详情信息",visible:e.dialogVisible2,width:"1100px"},on:{"update:visible":function(t){e.dialogVisible2=t}}},[a("el-form",{model:{value:e.detailMsgForm,callback:function(t){e.detailMsgForm=t},expression:"detailMsgForm"}},[a("div",{staticClass:"form-item-box"},[a("div",{staticClass:"dynamicBox1"},[a("div",{staticClass:"form-box-horizon form-box-1"},[a("el-form-item",{attrs:{label:"车场名称"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{readonly:""},model:{value:e.detailMsgForm.parkingName,callback:function(t){e.$set(e.detailMsgForm,"parkingName",t)},expression:"detailMsgForm.parkingName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"收费规则名称"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{readonly:""},model:{value:e.detailMsgForm.feeRuleName,callback:function(t){e.$set(e.detailMsgForm,"feeRuleName",t)},expression:"detailMsgForm.feeRuleName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"最高金额 (元)"}},[a("el-input",{staticStyle:{width:"50%"},attrs:{readonly:""},model:{value:e.detailMsgForm.maxFee,callback:function(t){e.$set(e.detailMsgForm,"maxFee",t)},expression:"detailMsgForm.maxFee"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{readonly:""},model:{value:e.detailMsgForm.status,callback:function(t){e.$set(e.detailMsgForm,"status",t)},expression:"detailMsgForm.status"}})],1)],1),e._v(" "),e._l(e.detailMsgForm.scArr,function(t){return a("div",[a("el-row",[a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"时长开始 (分钟)"}},[a("el-input",{staticClass:"sjInput",model:{value:t.startMin,callback:function(a){e.$set(t,"startMin",a)},expression:"item.startMin"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:1}},[e._v("\r\n                   \r\n                ")]),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"时长结束 (分钟)"}},[a("el-input",{staticClass:"sjInput",model:{value:t.endMin,callback:function(a){e.$set(t,"endMin",a)},expression:"item.endMin"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:1}},[e._v("\r\n                     \r\n                  ")]),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"周期类型"}},[a("el-select",{staticStyle:{width:"120px"},model:{value:t.cycleTypeId,callback:function(a){e.$set(t,"cycleTypeId",a)},expression:"item.cycleTypeId"}},e._l(e.cycleTypeIdOption,function(e){return a("el-option",{key:e.id,attrs:{value:e.value,label:e.label}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:1}},[e._v("\r\n                     \r\n                  ")]),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"周期金额(元)"}},[a("el-input",{staticClass:"sjInput",model:{value:t.cycleFee,callback:function(a){e.$set(t,"cycleFee",a)},expression:"item.cycleFee"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:1}},[e._v("\r\n                     \r\n                  ")])],1)],1)})],2)])])],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑页面",visible:e.dialogVisible3,width:"1100px"},on:{"update:visible":function(t){e.dialogVisible3=t}}},[a("el-form",{model:{value:e.changeMsgForm,callback:function(t){e.changeMsgForm=t},expression:"changeMsgForm"}},[a("div",{staticClass:"form-item-box"},[a("div",{staticClass:"dynamicBox1"},[a("div",{staticClass:"form-box-horizon form-box-1"},[a("el-form-item",{attrs:{label:"车场名称"}},[a("el-select",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticStyle:{width:"60%"},attrs:{clearable:""},model:{value:e.changeMsgForm.parkingName,callback:function(t){e.$set(e.changeMsgForm,"parkingName",t)},expression:"changeMsgForm.parkingName"}},e._l(e.parkingIdOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"收费规则名称"}},[a("el-input",{staticStyle:{width:"60%"},model:{value:e.changeMsgForm.feeRuleName,callback:function(t){e.$set(e.changeMsgForm,"feeRuleName",t)},expression:"changeMsgForm.feeRuleName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"最高金额 (元)"}},[a("el-input",{staticStyle:{width:"50%"},model:{value:e.changeMsgForm.maxFee,callback:function(t){e.$set(e.changeMsgForm,"maxFee",t)},expression:"changeMsgForm.maxFee"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{staticStyle:{width:"50%"},attrs:{clearable:""},model:{value:e.changeMsgForm.status,callback:function(t){e.$set(e.changeMsgForm,"status",t)},expression:"changeMsgForm.status"}},e._l(e.statusOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),e._l(e.changeMsgForm.scArr,function(t){return a("div",[a("el-row",[a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"时长开始 (分钟)"}},[a("el-input",{staticClass:"sjInput",model:{value:t.startMin,callback:function(a){e.$set(t,"startMin",a)},expression:"item.startMin"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:1}},[e._v("\r\n                     \r\n                  ")]),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"时长结束 (分钟)"}},[a("el-input",{staticClass:"sjInput",model:{value:t.endMin,callback:function(a){e.$set(t,"endMin",a)},expression:"item.endMin"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:1}},[e._v("\r\n                       \r\n                    ")]),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"周期类型"}},[a("el-select",{staticStyle:{width:"120px"},model:{value:t.cycleTypeId,callback:function(a){e.$set(t,"cycleTypeId",a)},expression:"item.cycleTypeId"}},e._l(e.cycleTypeIdOption,function(e){return a("el-option",{key:e.id,attrs:{value:e.value,label:e.label}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:1}},[e._v("\r\n                       \r\n                    ")]),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"周期金额(元)"}},[a("el-input",{staticClass:"sjInput",model:{value:t.cycleFee,callback:function(a){e.$set(t,"cycleFee",a)},expression:"item.cycleFee"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:1}},[e._v("\r\n                       \r\n                    ")])],1)],1)})],2),e._v(" "),a("div",{staticStyle:{float:"right",margin:"20px 5% 0 0"}},[a("el-button",{staticClass:"el-button el-button--warning",staticStyle:{"margin-right":"30px",width:"80px"},on:{click:function(t){e.cancelBJ()}}},[e._v("取消")]),e._v(" "),a("el-button",{staticClass:"el-button el-button--primary",staticStyle:{width:"80px"},on:{click:function(t){e.handleBJ(e.changeMsgForm)}}},[e._v("保存")])],1),e._v(" "),a("div",{staticStyle:{clear:"both"}})])])],1),e._v(" "),a("el-dialog",{attrs:{title:"新增规则",visible:e.dialogVisibleAddRule},on:{"update:visible":function(t){e.dialogVisibleAddRule=t}}},[a("el-form",{model:{value:e.addMsgForm,callback:function(t){e.addMsgForm=t},expression:"addMsgForm"}},[a("div",{staticClass:"form-item-box"},[a("div",{staticClass:"dynamicBox1"},[a("div",{staticClass:"form-box-horizon form-box-1"},[a("el-form-item",{attrs:{label:"车场名称"}},[a("el-select",{staticClass:"handle-input",staticStyle:{width:"60%"},attrs:{clearable:""},on:{change:function(t){e.sendParkId(e.addMsgForm.parkingId)}},model:{value:e.addMsgForm.parkingId,callback:function(t){e.$set(e.addMsgForm,"parkingId",t)},expression:"addMsgForm.parkingId"}},e._l(e.parkingIdOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"车辆类型"}},[a("el-select",{staticStyle:{width:"60%"},attrs:{clearable:""},model:{value:e.addMsgForm.vehicleType,callback:function(t){e.$set(e.addMsgForm,"vehicleType",t)},expression:"addMsgForm.vehicleType"}},e._l(e.vehicleTypeOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"收费规则"}},[a("el-select",{staticStyle:{width:"60%"},attrs:{clearable:""},model:{value:e.addMsgForm.feeRuleId,callback:function(t){e.$set(e.addMsgForm,"feeRuleId",t)},expression:"addMsgForm.feeRuleId"}},e._l(e.feeRuleIdOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}))],1)],1)]),e._v(" "),a("div",{staticStyle:{float:"right",margin:"20px 5% 0 0"}},[a("el-button",{staticClass:"el-button el-button--warning",staticStyle:{"margin-right":"30px",width:"80px"},on:{click:function(t){e.cancel2()}}},[e._v("取消")]),e._v(" "),a("el-button",{staticClass:"el-button el-button--primary",staticStyle:{width:"80px"},on:{click:e.saveInsertMsg}},[e._v("保存")])],1),e._v(" "),a("div",{staticStyle:{clear:"both"}})])])],1)],1)},staticRenderFns:[]};var g=a("VU/8")(d,u,!1,function(e){a("flTH")},"data-v-06f6507c",null);t.default=g.exports},flTH:function(e,t){}});
//# sourceMappingURL=22.1600a038d6069e944fea.js.map