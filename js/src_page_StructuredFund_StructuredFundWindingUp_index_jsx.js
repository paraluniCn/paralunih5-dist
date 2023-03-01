"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["src_page_StructuredFund_StructuredFundWindingUp_index_jsx"],{49513:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(42982),a=r(15861),s=r(70885),c=r(64687),u=r.n(c),d=r(67294),i=(r(30381),r(67959)),o=r(2089),l=r(63474),m=r(34234),f=r(38104),p=r(68735),v=r(28477),E=r(72461),g=r(79954),S=(r(81818),r(64478));function b(e){var t=e.userinfo,r=(0,S.$)().t,c=(0,d.useState)([]),o=(0,s.Z)(c,2),p=o[0],b=o[1],h=(0,d.useState)(0),w=(0,s.Z)(h,2),F=w[0],Z=w[1],N=(0,d.useState)(1),k=(0,s.Z)(N,2),x=k[0],y=k[1],C=function(){var e=(0,a.Z)(u().mark((function e(){var r,a,s,c,d,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.address){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,(0,m.Z)({abi:"StructureFundView",address:f.Z.StructureFundView,method:"getDepositList",params:[t.address,10*(x-1),10],type:"call"});case 4:return r=e.sent,e.next=7,(0,m.Z)({abi:"StructureFundView",address:f.Z.StructureFundView,method:"getInfo",params:[t.address],type:"call"});case 7:a=e.sent,s=a[0][2].padStart(76,"0").substring(47),c=a[0][5].padStart(76,"0").substring(0,35),d=a[0][7].padStart(76,"0").substring(16,46),s=(0,E.JR)((0,E.eK)(s)),c=(0,E.JR)((0,E.eK)(c)),d=(0,E.JR)((0,E.eK)(d)),i=r.times.map((function(e,t){return{fraction:(0,E.JR)((0,E.eK)(r.values[t])/v.Z.portionCost),cfCount:(0,E.eK)(r.values[t])/s*d,id:r.depositIds[t],isWithdraw:r.isWithdraws[t]}})),Z(r.count),b((0,n.Z)(i));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=(0,a.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Z)({abi:"StructureFund",address:f.Z.StructureFund,method:"withdrawEnd",params:[t.id],type:"send"});case 2:e.sent&&(i.Z.show(r("page.StructuredFund.cangetSuccess")),1==x?C():y(1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){t.address&&C()}),[t.address,x]),d.createElement(d.Fragment,null,p.length?d.createElement(d.Fragment,null,p.map((function(e,t){return d.createElement(l.Z,{key:t,blockClass:"itembar"},d.createElement("div",{className:"flex-row font-size-12 fl-jc-between mb-10"},d.createElement("div",{className:"font-color-describe"},r("page.StructuredFund.myShareNum")),d.createElement("div",{className:"font-color-white"},e.fraction,r("page.StructuredFund.portion"))),d.createElement("div",{className:"flex-row font-size-12 fl-jc-between mb-20"},d.createElement("div",{className:"font-color-describe"},r("page.StructuredFund.unclaimed")),d.createElement("div",{className:"font-color-white"},(0,E.JR)(e.cfCount)," ",v.Z.symbol)),e.isWithdraw?d.createElement("div",{className:"canGet font-color-white dark"},r("page.StructuredFund.completed")):d.createElement("div",{className:"canGet font-color-white",onClick:function(){R(e)}},r("page.StructuredFund.getback")))})),d.createElement("div",{className:"mt-10 ml-15 mr-15"},d.createElement(g.tl,{forceEllipses:!0,value:x,onChange:function(e){y(e)},totalItems:F,itemsPerPage:10,mode:"simple"}))):d.createElement(l.Z,{blockClass:"itembar"},d.createElement("div",{className:"nodetail"},r("page.StructuredFund.nosharename"))))}function h(e){var t=(0,S.$)().t,r=e.userinfo,c=(0,d.useState)([]),o=(0,s.Z)(c,2),p=o[0],v=o[1],b=(0,d.useState)(0),h=(0,s.Z)(b,2),w=h[0],F=h[1],Z=(0,d.useState)(1),N=(0,s.Z)(Z,2),k=N[0],x=N[1],y=function(){var e=(0,a.Z)(u().mark((function e(){var t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Z)({abi:"StructureFundView",address:f.Z.StructureFundView,method:"getPlanList",params:[r.address,10*(k-1),10],type:"call"});case 2:t=e.sent,console.log(t),a=t.amounts.map((function(e,r){return{numMargin:(0,E.JR)((0,E.eK)(e)),isRedeem:t.isRedeems[r],isForfeited:t.isForfeiteds[r],id:t.planIds[r],canGet:!t.isRedeems[r]&&!t.isForfeiteds[r]}})),F(t.count),v((0,n.Z)(a));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,a.Z)(u().mark((function e(r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Z)({abi:"StructureFund",address:f.Z.StructureFund,method:"planRedeem",params:[r.id],type:"send"});case 2:e.sent&&(i.Z.show(t("page.StructuredFund.cangetSuccess")),1==k?y():x(1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){r.address&&y()}),[r.address,k]),d.createElement(d.Fragment,null,p.length?d.createElement(d.Fragment,null,p.map((function(e,r){return d.createElement(l.Z,{key:r,blockClass:"itembar"},d.createElement("div",{className:"flex-row font-size-12 fl-jc-between mb-10"},d.createElement("div",{className:"font-color-describe"},t("编号")),d.createElement("div",{className:"font-color-white"},e.id)),d.createElement("div",{className:"flex-row font-size-12 fl-jc-between mb-10"},d.createElement("div",{className:"font-color-describe"},t("page.StructuredFund.bondnum")),d.createElement("div",{className:"font-color-white"},e.numMargin," USDT")),e.canGet?d.createElement("div",{className:"canGet font-color-white",onClick:function(){C(e)}},t("page.StructuredFund.getback")):d.createElement("div",{className:"canGet font-color-white dark"},t("page.StructuredFund.completed")))})),d.createElement("div",{className:"mt-10 ml-15 mr-15"},d.createElement(g.tl,{forceEllipses:!0,value:k,onChange:function(e){x(e)},totalItems:w,itemsPerPage:10,mode:"simple"}))):d.createElement(l.Z,{blockClass:"itembar"},d.createElement("div",{className:"nodetail"},t("common.no_record"))))}function w(){var e=(0,p.Z)(),t=e.setAddress,r=e.user,n=(0,S.$)().t;(0,d.useEffect)((function(){r.address||t()}),[]);var a=[{title:n("page.StructuredFund.shareNum"),node:d.createElement(b,{userinfo:r})},{title:n("page.StructuredFund.bond"),node:d.createElement(h,{userinfo:r})}];return d.createElement("div",{className:"StructuredFundWindingUp"},d.createElement("div",{className:"mb-15 headertitle"},n("page.StructuredFund.fundOffshelf")),d.createElement(o.Z,{tabs:a}))}}}]);