"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["src_page_KycProject_AssetTransfer_js"],{71458:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var n=r(15861),a=r(70885),s=r(64687),c=r.n(s),o=r(67294),l=r(64478),i=r(69016),u=r(68735),m=r(11825),f=r(72461),d=r(74288);function p(){var e=(0,l.$)().t,t=(0,u.Z)().user,r=(0,o.useState)(""),s=(0,a.Z)(r,2),p=s[0],g=s[1],v=(0,o.useState)(""),h=(0,a.Z)(v,2),w=h[0],b=h[1],k=function(){var e=(0,n.Z)(c().mark((function e(){var r,n,a,s,l,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=3;break}return(0,i.FN)("请选择产品"),e.abrupt("return");case 3:if(w){e.next=6;break}return(0,i.FN)("请输入需要转移到的地址"),e.abrupt("return");case 6:if(window.web3.utils.isAddress(w)){e.next=9;break}return(0,i.FN)("请输入有效的钱包地址"),e.abrupt("return");case 9:if(t.address.toLowerCase()!=w.toLowerCase()){e.next=12;break}return(0,i.FN)("请输入不同于当前钱包的地址"),e.abrupt("return");case 12:return r=t.address.toLowerCase(),n=w.toLowerCase(),a=r.concat(p.value1,n).replace(/0x/g,""),s=new d.Q(window.ethereum),l=s.getSigner(),e.next=19,l.signMessage(a);case 19:(u=e.sent)&&i.Vq.alert({title:"申请成功",closeable:!0,theme:"round-button",message:o.createElement("div",{className:"flex-column"},o.createElement("div",{style:{textAlign:"center"}},"我的识别码"),o.createElement("div",{style:{textAlign:"center"}},u),o.createElement("div",{style:{textAlign:"center"},className:"mt-5"},o.createElement(m.B4z,{style:{fontSize:"2.4rem"},onClick:function(){return(0,f.tJ)(u)}})))});case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.createElement("div",{style:{padding:"2rem"}},o.createElement("div",{className:"font-weight-500 font-color-white",style:{fontSize:"2.4rem"}},e("page.kycProject.mine_transfer_asset_apply")),o.createElement("div",{className:"font-weight-400 font-color-describe font-size-12 mt-5"},e("page.kycProject.transfer_asset_tip")),o.createElement("div",{className:"font-color-describe font-weight-400 font-size-12 mt-20"},e("page.kycProject.select_production")),o.createElement(i.h_,{value:p,onChange:function(e){return g(e)},className:"mt-10"},o.createElement(i.h_.Item,{name:"value1",options:[{text:"低风险/高收益/VIP",value:"MasterChef"},{text:"聚合池/Lp挖矿",value:"SousChef"}]})),o.createElement("div",{className:"font-color-describe font-weight-400 font-size-12 mt-20"},e("page.kycProject.new_address")),o.createElement("input",{value:w,onChange:function(e){return b(e.target.value)},className:"asset-transfer-input mt-10",placeholder:e("page.kycProject.input_new_address")}),o.createElement("div",{className:"button-common button-click height-44",style:{marginTop:"8rem"},onClick:k},e("page.StructuredFund.submintMy")))}}}]);