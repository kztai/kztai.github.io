<template>
  <div class="mcbManageDeparmentDia_container">
    <div class="mcbManageDeparmentDia_row mcbManageDeparmentDia_row_mcbManageDeparmentDiaRow">
      <div :class="{mcbManageDeparmentDia_col:true,mcbManageDeparmentDia_col_mcbManageDeparmentDiaWindow:true,mcbManageDeparmentDia_col_mcbManageDeparmentDiaWindow_size_large:attr.size==='large',mcbManageDeparmentDia_col_mcbManageDeparmentDiaWindow_size_medium:attr.size==='medium',mcbManageDeparmentDia_col_mcbManageDeparmentDiaWindow_size_small:attr.size==='small',mcbManageDeparmentDia_col_mcbManageDeparmentDiaWindow_size_min:attr.size==='min',mcbManageDeparmentDia_col_mcbManageDeparmentDiaWindow_checked:attr.checked,mcbManageDeparmentDia_col_mcbManageDeparmentDiaWindow_disable:attr.disabled}">

        <div class="mcbManageDeparmentDia_row mcbManageDeparmentDia_row_row1">
          <div :class="{mcbManageDeparmentDia_col:true,mcbManageDeparmentDia_col_r1c1:true,mcbManageDeparmentDia_col_r1c1_size_large:attr.size==='large',mcbManageDeparmentDia_col_r1c1_size_medium:attr.size==='medium',mcbManageDeparmentDia_col_r1c1_size_small:attr.size==='small',mcbManageDeparmentDia_col_r1c1_size_min:attr.size==='min',mcbManageDeparmentDia_col_r1c1_checked:attr.checked,mcbManageDeparmentDia_col_r1c1_disable:attr.disabled}">

            <div class="mcbManageDeparmentDia_row mcbManageDeparmentDia_row_row2">
              <div :class="{mcbManageDeparmentDia_col:true,mcbManageDeparmentDia_col_r1_1c1:true,mcbManageDeparmentDia_col_r1_1c1_size_large:attr.size==='large',mcbManageDeparmentDia_col_r1_1c1_size_medium:attr.size==='medium',mcbManageDeparmentDia_col_r1_1c1_size_small:attr.size==='small',mcbManageDeparmentDia_col_r1_1c1_size_min:attr.size==='min',mcbManageDeparmentDia_col_r1_1c1_checked:attr.checked,mcbManageDeparmentDia_col_r1_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="backText"
                        refId="backText"
                        v-show="pvt_isShow.r1_1c1 === 'backText'"
                        :paraVarPair="pvt_r1_1c1.backText.paraVarPair"
                        :para="pvt_r1_1c1.backText.para"
                        :attr="pvt_r1_1c1.backText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbManageDeparmentDia_col:true,mcbManageDeparmentDia_col_r1_1c2:true,mcbManageDeparmentDia_col_r1_1c2_size_large:attr.size==='large',mcbManageDeparmentDia_col_r1_1c2_size_medium:attr.size==='medium',mcbManageDeparmentDia_col_r1_1c2_size_small:attr.size==='small',mcbManageDeparmentDia_col_r1_1c2_size_min:attr.size==='min',mcbManageDeparmentDia_col_r1_1c2_checked:attr.checked,mcbManageDeparmentDia_col_r1_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="titleText"
                        refId="titleText"
                        v-show="pvt_isShow.r1_1c2 === 'titleText'"
                        :paraVarPair="pvt_r1_1c2.titleText.paraVarPair"
                        :para="pvt_r1_1c2.titleText.para"
                        :attr="pvt_r1_1c2.titleText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbManageDeparmentDia_col:true,mcbManageDeparmentDia_col_r1_1c3:true,mcbManageDeparmentDia_col_r1_1c3_size_large:attr.size==='large',mcbManageDeparmentDia_col_r1_1c3_size_medium:attr.size==='medium',mcbManageDeparmentDia_col_r1_1c3_size_small:attr.size==='small',mcbManageDeparmentDia_col_r1_1c3_size_min:attr.size==='min',mcbManageDeparmentDia_col_r1_1c3_checked:attr.checked,mcbManageDeparmentDia_col_r1_1c3_disable:attr.disabled}">

                <lm2b-button
                        ref="finishButton"
                        refId="finishButton"
                        v-show="pvt_isShow.r1_1c3 === 'finishButton'"
                        :paraVarPair="pvt_r1_1c3.finishButton.paraVarPair"
                        :para="pvt_r1_1c3.finishButton.para"
                        :attr="pvt_r1_1c3.finishButton.attr">
                </lm2b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="mcbManageDeparmentDia_row mcbManageDeparmentDia_row_row3">
          <div :class="{mcbManageDeparmentDia_col:true,mcbManageDeparmentDia_col_r2c1:true,mcbManageDeparmentDia_col_r2c1_size_large:attr.size==='large',mcbManageDeparmentDia_col_r2c1_size_medium:attr.size==='medium',mcbManageDeparmentDia_col_r2c1_size_small:attr.size==='small',mcbManageDeparmentDia_col_r2c1_size_min:attr.size==='min',mcbManageDeparmentDia_col_r2c1_checked:attr.checked,mcbManageDeparmentDia_col_r2c1_disable:attr.disabled}">
            <mcb-manage-depart-staff
                    ref="deparentRow"
                    refId="deparentRow"
                    v-show="pvt_isShow.r2c1 === 'deparentRow'"
                    :paraVarPair="pvt_r2c1.deparentRow.paraVarPair"
                    v-for="(item, index) in pvt_r2c1.deparentRow.forData"
                    :number="index"
                    :para="item.para"
                    :attr="item.attr">
            </mcb-manage-depart-staff>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  import mcbManageDepartStaff from './departmentRow.vue';
  export default {
    components: {mcbManageDepartStaff},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_1c2','r1_1c3','r2c1'],
          subModule:['backText','titleText','finishButton','deparentRow'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_1c3:null,
          r2c1:null,
        },
        pvt_eventPortInput: ['confirmEvent'],

        userIdArrs:[],
        staffArrs:[],
        nameArr:[],
        sizeArr:[],
        userIdArr:[],
      };
    },
    watch: {
    },
    computed:{
      pvt_r1_1c1:function(){
        return {
          backText:{
            paraVarPair:{
            },
            para:{
              textData:'返回',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'left',
              height:'42px',
              color:'#12B0FF',
              fontSize:'16px',
              background:'transparent',
              icon:'van-icon-arrow-left',
              iconIsRight:false,
            },
          },
        };
      },
      pvt_r1_1c2:function(){
        return {
          titleText:{
            paraVarPair:{
            },
            para:{
              textData:'选择部门成员',
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:true,
              height:'42px',
              color:'#000000',
              fontSize:'18px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1_1c3:function(){
        return {
          finishButton:{
            paraVarPair:{
            },
            para:{
              name:['完成'],
            },
            attr:{
              type:'primary',
              width:'60px',
              height:'35px',
            },
          },
        };
      },
      pvt_r2c1:function(){
        let loopModule={
          deparentRow:{
            para:{
              userIdArr:this.userIdArrs,
              staffArr:this.staffArrs,
              departmentName:this.nameArr,
            },
            attr:{
              size:this.sizeArr,
            },
          },
        };
        let forData = this.pvt_createForData(loopModule);
        return {
          deparentRow:{
            paraVarPair:{
              userIdArr:'userIdArrs',
              staffArr:'staffArrs',
              departmentName:'nameArr',
            },
            forData: forData.deparentRow,
          },
        };
      },
    },
    created: function () {
      Object.assign(this, libSys,libUpload);
    },
    mounted: function () {
      this.pvt_initSysData();
    },
    methods: {
      startModule(groupId,index,userIdArr,successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack: successCallBack,
          errorCallBack: errorCallBack,
          nStep: 0
        }
        let tableName;
        let parentRecord;
        let condition;
        let dbData;
        let dbFlag;

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              $this.userIdArrs = [];
              $this.staffArrs = [];
              $this.nameArr = [];
              $this.sizeArr = [];
              $this.userIdArr = [];
              $this.index = index;
              if(groupId){
                if(userIdArr){
                  $this.userIdArr = JSON.parse(JSON.stringify(userIdArr));
                }
                para.nStep = 'downloadGroup';
              }else{
                para.nStep = 'showModules';
              }
              ++dbFlag;
              break;
            case 'downloadGroup':
              //下载组织数据
              let portName = mac.mac.tb.group;
              let record = [groupId];
              // 授权状态暂定为粒子状态
              let destGeneSite = '';
              $this.sys.api.dataInput(portName,record,destGeneSite,function(result){
                para.groupId = result[0];
                para.nStep = 'searchGroup';
                if(++dbFlag === 2){
                  $this.startModule(groupId,index,userIdArr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'searchGroup':
              //查找组织数据
              tableName = mac.mac.tb.department;
              parentRecord = [para.groupId];
              condition = [];
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              dbData[mac.mac.fd.department.name] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                para.deparementId = dbData[mac.mac.fd.id];
                for(let i = 0;i < para.deparementId.length;i++){
                  $this.nameArr.push(dbData[mac.mac.fd.department.name][i]);
                  $this.sizeArr.push('medium');
                }
                para.nStep = 'searchClerk';
                para.num = 0;
                if(++dbFlag === 2){
                  $this.startModule(groupId,index,userIdArr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'searchClerk':
              //查找组织数据
              tableName = mac.mac.tb.clerkSet;
              parentRecord = [para.deparementId[para.num]];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.clerkSet.clerkName] = [];
              dbData[mac.mac.fd.clerkSet.user] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                let staffArr = [];
                let idArr = [];
                for(let i = 0;i < dbData[mac.mac.fd.clerkSet.user].length;i++){
                  staffArr.push({
                    label:dbData[mac.mac.fd.clerkSet.user][i],
                    text:dbData[mac.mac.fd.clerkSet.clerkName][i]
                  });
                  //获取每个部门选中的人
                  if(userIdArr && userIdArr.includes(dbData[mac.mac.fd.clerkSet.user][i])){
                    idArr.push(dbData[mac.mac.fd.clerkSet.user][i]);
                  }
                }
                $this.staffArrs.push(staffArr);
                $this.userIdArrs.push(idArr);
                para.num++;
                if(para.num >= para.deparementId.length){
                  para.num = 0;
                  para.nStep = 'showModules';
                }else{
                  para.nStep = 'searchClerk';
                }
                if(++dbFlag === 2){
                  $this.startModule(groupId,index,userIdArr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'backText','titleText','finishButton','deparentRow'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'startSubModules';
                if(++dbFlag === 2){
                  $this.startModule(groupId,index,userIdArr,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startSubModules':
              //调用子组件startModule方法
              $this.startSubModules(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(groupId,index,userIdArr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'end':
              para.successCallBack();
              return
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      hideModule:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      finishButtonClick:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
          $this.ep.confirmEvent($this.index,$this.userIdArr);
        },function(error){console.log(error)});
      },
      memberChange:function(index){
        //改变其中一个部门选中刷新其他部门选中
        let $this = this;
        let changeArr = $this.userIdArrs[index];
        let checkboxArr = $this.staffArrs[index];
        let unselectedArr = [];
        for(let i = 0;i < checkboxArr.length;i++){
          if(!changeArr.includes(checkboxArr[i].label)){
            unselectedArr.push(checkboxArr[i].label);
          }
        }
        //获取当前选中员工数据
        for(let i = 0;i < changeArr.length;i++){
          if(!$this.userIdArr.includes(changeArr[i])){
            $this.userIdArr.push(changeArr[i]);
          }
        }
        for(let i = 0;i < unselectedArr.length;i++){
          let idIndex = $this.userIdArr.indexOf(unselectedArr[i]);
          if(idIndex > -1){
            $this.userIdArr.splice(idIndex,1);
          }
        }
        //刷新其他部门选中
        for(let i = 0;i < $this.staffArrs.length;i++){
          if(i === index){
            continue;
          }
          let staffArr = $this.staffArrs[i];
          let idArr = [];
          for(let m = 0;m < staffArr.length;m++){
            if($this.userIdArr.includes(staffArr[m].label)){
              idArr.push(staffArr[m].label);
            }
          }
          $this.userIdArrs.splice(i,1,idArr);
        }
        $this.forceUpdateData(function(){
          //循环组件
          let arr = [];
          for(let i = 0;i < $this.nameArr.length;i++){
            arr.push([function(){},function(error){console.log(error)}]);
          }
          $this.callLoopModuleMethod('deparentRow','startModule',arr,function(){
          },function(error){console.log(error)});
        });
      },
      startSubModules(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack: successCallBack,
          errorCallBack: errorCallBack,
          nStep: 0
        }
        let dbFlag;
        let ref = {
          sm1:'backText',
          sm2:'titleText',
          sm3:'finishButton',
          sm4:'deparentRow'
        };

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              para.nStep = 'forceUpdateData';
              ++dbFlag;
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_text1';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_text1':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_title';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_title':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_button';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_button':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_row';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_row':
              //循环组件
              let arr = [];
              for(let i = 0;i < $this.nameArr.length;i++){
                arr.push([function(){},function(error){console.log(error)}]);
              }
              $this.callLoopModuleMethod(ref.sm4,'startModule',arr,function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'end':
              para.successCallBack();
              return
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      backText_textClickEvent:function(){
        this.hideModule();
      },
      finishButton_buttonClickEvent:function(){
        this.finishButtonClick();
      },
      deparentRow_memberChangeEvent:function(index){
        this.memberChange(index);
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbManageDeparmentDia_container {
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
  }
  .mcbManageDeparmentDia_row_mcbManageDeparmentDiaRow{
    height:100%;
  }
  .mcbManageDeparmentDia_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbManageDeparmentDia_col {
    display:flex;
    flex-direction:column;
  }
  .mcbManageDeparmentDia_col_mcbManageDeparmentDiaWindow_size_medium {
    width:@mcbManageDeparmentDia-mcbManageDeparmentDiaWindow-medium-width;
  }
  .mcbManageDeparmentDia_col_mcbManageDeparmentDiaWindow {
    background-color:mix(@mcbManageDeparmentDia-mcbManageDeparmentDiaWindow-background-color,#fff,@mcbManageDeparmentDia-mcbManageDeparmentDiaWindow-background-color-opacity);
  }
  .mcbManageDeparmentDia_col_r1c1_size_medium {
    width:@mcbManageDeparmentDia-r1c1-medium-width;
    height:@mcbManageDeparmentDia-r1c1-medium-height;
    padding:@mcbManageDeparmentDia-r1c1-medium-padding;
  }
  .mcbManageDeparmentDia_col_r1c1 {
    background-color:mix(@mcbManageDeparmentDia-r1c1-background-color,#fff,@mcbManageDeparmentDia-r1c1-background-color-opacity);
    position:fixed;
    top:0;
    left:0;
    width:100%;
    box-sizing:border-box;
  }
  .mcbManageDeparmentDia_col_r1_1c1_size_medium {
    width:@mcbManageDeparmentDia-r1_1c1-medium-width;
    height:@mcbManageDeparmentDia-r1_1c1-medium-height;
  }
  .mcbManageDeparmentDia_col_r1_1c2_size_medium {
    width:@mcbManageDeparmentDia-r1_1c2-medium-width;
    height:@mcbManageDeparmentDia-r1_1c2-medium-height;
  }
  .mcbManageDeparmentDia_col_r1_1c3_size_medium {
    width:@mcbManageDeparmentDia-r1_1c3-medium-width;
    height:@mcbManageDeparmentDia-r1_1c3-medium-height;
    align-items:@mcbManageDeparmentDia-r1_1c3-medium-horizontal-position;
    justify-content:@mcbManageDeparmentDia-r1_1c3-medium-vertical-position;
  }
  .mcbManageDeparmentDia_col_r2c1_size_medium {
    width:@mcbManageDeparmentDia-r2c1-medium-width;
    margin:@mcbManageDeparmentDia-r2c1-medium-margin;
    padding:@mcbManageDeparmentDia-r2c1-medium-padding;
    height:@mcbManageDeparmentDia-r2c1-medium-height;
  }
</style>
