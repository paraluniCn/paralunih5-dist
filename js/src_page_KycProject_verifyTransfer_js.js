"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["src_page_KycProject_verifyTransfer_js"],{33144:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(15861),a=n(70885),s=n(64687),u=n.n(s),c=n(67294),i=n(64478),o=n(79954),l=n(68735),f=n(93286),m=n(38197),d=n(44242);var h=n(6094),p=n(80711);new p.Yd("wallet/5.7.0");function v(e,t){return(0,h.recoverAddress)(function(e){return"string"==typeof e&&(e=(0,d.Y0)(e)),(0,m.w)((0,f.zo)([(0,d.Y0)("Ethereum Signed Message:\n"),(0,d.Y0)(String(e.length)),e]))}(e),t)}n(34234),n(38104);function w(){(0,i.$)().t;var e=(0,l.Z)().user,t=(0,c.useState)(""),n=(0,a.Z)(t,2),s=n[0],f=n[1],m=(0,c.useState)(""),d=(0,a.Z)(m,2),h=d[0],p=d[1],w=(0,c.useState)(""),b=(0,a.Z)(w,2),g=b[0],N=b[1],E=(0,c.useState)(""),k=(0,a.Z)(E,2),x=k[0],C=k[1],S=function(){var t=(0,r.Z)(u().mark((function t(){var n,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.address){t.next=2;break}return t.abrupt("return");case 2:if(s){t.next=5;break}return(0,o.FN)("请选择产品"),t.abrupt("return");case 5:if(g){t.next=8;break}return(0,o.FN)("请输入需要转移到的地址"),t.abrupt("return");case 8:if(window.web3.utils.isAddress(g)){t.next=11;break}return(0,o.FN)("请输入有效的钱包地址"),t.abrupt("return");case 11:n="0x"+window.web3.utils.toHex(h).substr(2,42),r="0x"+window.web3.utils.toHex(g).substr(2,42),a=window.web3.utils.sha3(n.concat(s.value1,r)),v(a,x)?(0,o.FN)("验证成功"):(0,o.FN)("验证失败");case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c.createElement("div",{style:{padding:"2rem"}},c.createElement("div",{className:"font-weight-500 font-color-white",style:{fontSize:"2.4rem"}},"客服验证"),c.createElement("div",{className:"font-color-describe font-weight-400 font-size-12 mt-20"},"用户地址"),c.createElement("input",{value:h,onChange:function(e){return p(e.target.value)},className:"asset-transfer-input mt-10",placeholder:"请输入或粘贴用户的地址"}),c.createElement("div",{className:"font-color-describe font-weight-400 font-size-12 mt-20"},"选择用户的产品"),c.createElement(o.h_,{value:s,onChange:function(e){return f(e)},className:"mt-10"},c.createElement(o.h_.Item,{name:"value1",options:[{text:"低风险/高收益/VIP",value:"MasterChef"},{text:"聚合池/Lp挖矿/联合挖矿",value:"SousChef"}]})),c.createElement("div",{className:"font-color-describe font-weight-400 font-size-12 mt-20"},"用户新地址"),c.createElement("input",{value:g,onChange:function(e){return N(e.target.value)},className:"asset-transfer-input mt-10",placeholder:"请输入或粘贴客户的新地址"}),c.createElement("div",{className:"font-color-describe font-weight-400 font-size-12 mt-20"},"用户识别码"),c.createElement("input",{value:x,onChange:function(e){return C(e.target.value)},className:"asset-transfer-input mt-10",placeholder:"请输入或粘贴客户的识别码"}),c.createElement("div",{className:"button-common button-click height-44",style:{marginTop:"8rem"},onClick:S},"发起验证"))}}}]);