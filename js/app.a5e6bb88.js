(function(){"use strict";var e={6051:function(e,t,o){var a=o(9963),n=o(2923),r=(o(4415),o(137)),l=o(6252),i=o(3577);const s=e=>((0,l.dD)("data-v-7fc0581d"),e=e(),(0,l.Cn)(),e),u=s((()=>(0,l._)("h3",null,"Node App",-1))),d=(0,l.Uk)("Execute Node Code"),c=(0,l.Uk)("Make Python Code"),p=(0,l.Uk)("Clear Editor"),h=(0,l.Uk)("Import Editor"),v=(0,l.Uk)("Export Editor"),m=["data-node"],g=s((()=>(0,l._)("span",null,"Python Code:",-1))),f={id:"pythonCode"},b={class:"dialog-footer"},w=(0,l.Uk)("Cancel"),y=(0,l.Uk)("Confirm"),N=s((()=>(0,l._)("span",null,"Data:",-1))),M={id:"importData"},E={class:"dialog-footer"},C=(0,l.Uk)("Cancel"),O=(0,l.Uk)("Confirm"),V=s((()=>(0,l._)("span",null,"Data:",-1))),I={id:"exportData"},_={class:"dialog-footer"},k=(0,l.Uk)("Cancel"),F=(0,l.Uk)("Confirm");function x(e,t,o,a,n,r){const s=(0,l.up)("el-container"),x=(0,l.up)("el-button"),L=(0,l.up)("el-header"),H=(0,l.up)("el-aside"),D=(0,l.up)("el-main"),W=(0,l.up)("el-dialog");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{class:"name"},{default:(0,l.w5)((()=>[u])),_:1}),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(L,{class:"header"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{type:"primary",onClick:a.executeNodeCode},{default:(0,l.w5)((()=>[d])),_:1},8,["onClick"]),(0,l.Wm)(x,{type:"primary",onClick:a.pythonCode},{default:(0,l.w5)((()=>[c])),_:1},8,["onClick"]),(0,l.Wm)(x,{type:"primary",onClick:a.clearEditor},{default:(0,l.w5)((()=>[p])),_:1},8,["onClick"]),(0,l.Wm)(x,{type:"primary",onClick:a.importEditor},{default:(0,l.w5)((()=>[h])),_:1},8,["onClick"]),(0,l.Wm)(x,{type:"primary",onClick:a.exportEditor},{default:(0,l.w5)((()=>[v])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{class:"container"},{default:(0,l.w5)((()=>[(0,l.Wm)(H,{width:"250px",class:"column"},{default:(0,l.w5)((()=>[(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.listNodes,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e,draggable:"true","data-node":e.item,onDragstart:t[0]||(t[0]=e=>a.drag(e)),class:"drag-drawflow"},[(0,l._)("div",{class:"node",style:(0,i.j5)(`background: ${e.color}`)},(0,i.zw)(e.name),5)],40,m)))),128))])])),_:1}),(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[(0,l._)("div",{id:"drawflow",onDrop:t[1]||(t[1]=e=>a.drop(e)),onDragover:t[2]||(t[2]=e=>a.allowDrop(e))},null,32)])),_:1})])),_:1})])),_:1}),(0,l.Wm)(W,{modelValue:a.dialogVisiblePythonCode,"onUpdate:modelValue":t[5]||(t[5]=e=>a.dialogVisiblePythonCode=e),title:"pythonCode",width:"50%"},{footer:(0,l.w5)((()=>[(0,l._)("span",b,[(0,l.Wm)(x,{onClick:t[3]||(t[3]=e=>a.dialogVisiblePythonCode=!1)},{default:(0,l.w5)((()=>[w])),_:1}),(0,l.Wm)(x,{type:"primary",onClick:t[4]||(t[4]=e=>a.dialogVisiblePythonCode=!1)},{default:(0,l.w5)((()=>[y])),_:1})])])),default:(0,l.w5)((()=>[g,(0,l._)("pre",null,[(0,l._)("code",f,(0,i.zw)(a.dialogPythonCode),1)])])),_:1},8,["modelValue"]),(0,l.Wm)(W,{modelValue:a.dialogVisibleImport,"onUpdate:modelValue":t[8]||(t[8]=e=>a.dialogVisibleImport=e),title:"Import",width:"50%"},{footer:(0,l.w5)((()=>[(0,l._)("span",E,[(0,l.Wm)(x,{onClick:t[6]||(t[6]=e=>a.dialogVisibleImport=!1)},{default:(0,l.w5)((()=>[C])),_:1}),(0,l.Wm)(x,{type:"primary",onClick:t[7]||(t[7]=e=>(a.dialogVisibleImport=!1,a.importDataConfirm()))},{default:(0,l.w5)((()=>[O])),_:1})])])),default:(0,l.w5)((()=>[N,(0,l._)("pre",null,[(0,l._)("code",M,(0,i.zw)(a.dialogDataImport),1)])])),_:1},8,["modelValue"]),(0,l.Wm)(W,{modelValue:a.dialogVisibleExport,"onUpdate:modelValue":t[11]||(t[11]=e=>a.dialogVisibleExport=e),title:"Export",width:"50%"},{footer:(0,l.w5)((()=>[(0,l._)("span",_,[(0,l.Wm)(x,{onClick:t[9]||(t[9]=e=>a.dialogVisibleExport=!1)},{default:(0,l.w5)((()=>[k])),_:1}),(0,l.Wm)(x,{type:"primary",onClick:t[10]||(t[10]=e=>(a.dialogVisibleExport=!1,a.exportDataConfirm()))},{default:(0,l.w5)((()=>[F])),_:1})])])),default:(0,l.w5)((()=>[V,(0,l._)("p",I,(0,i.zw)(a.dialogDataExport),1)])),_:1},8,["modelValue"]),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{class:"console"},{default:(0,l.w5)((()=>[(0,l.Uk)("Console: "+(0,i.zw)(a.consoleData),1)])),_:1}),(0,l.Wm)(s,{class:"requests"},{default:(0,l.w5)((()=>[(0,l.Uk)("Requests: "+(0,i.zw)(a.requestsData),1)])),_:1})])),_:1})],64)}var L=o(283),H=o.n(L),D=o(2262);const W={ref:"el"},P=(0,l._)("br",null,null,-1),S=(0,l._)("br",null,null,-1),j=(0,l.Uk)("Var");function R(e,t,o,a,n,r){const i=(0,l.up)("nodeHeader"),s=(0,l.up)("el-option"),u=(0,l.up)("el-select"),d=(0,l.up)("el-input");return(0,l.wg)(),(0,l.iD)("div",W,[(0,l.Wm)(i,{title:"Numeric"}),(0,l.Wm)(u,{modelValue:e.method,"onUpdate:modelValue":t[0]||(t[0]=t=>e.method=t),placeholder:"Select",onChange:e.updateSelect,size:"small","df-method":""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.options,(e=>((0,l.wg)(),(0,l.j4)(s,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"]),P,S,(0,l.Wm)(d,{modelValue:e.valueVar,"onUpdate:modelValue":t[1]||(t[1]=t=>e.valueVar=t),"df-valueVar":"",placeholder:"Please input",size:"small"},{prepend:(0,l.w5)((()=>[j])),_:1},8,["modelValue"])],512)}const U={class:"header"};function q(e,t,o,a,n,r){return(0,l.wg)(),(0,l.iD)("div",U,(0,i.zw)(e.title),1)}var z=(0,l.aZ)({props:["title"]}),T=o(3744);const Z=(0,T.Z)(z,[["render",q],["__scopeId","data-v-0bf9feb6"]]);var Y=Z,A=(0,l.aZ)({components:{nodeHeader:Y},setup(){const e=(0,D.iH)(null),t=(0,D.iH)(0);let o=null;const a=(0,D.iH)(""),n=(0,D.iH)(""),r=(0,D.iH)({}),i=(0,D.OT)([{value:"float",label:"float"},{value:"int",label:"int"}]);o=(0,l.FN)().appContext.config.globalProperties.$df.value;const s=e=>{r.value.data.method=e,o.updateNodeDataFromId(t.value,r.value)};return(0,l.bv)((async()=>{await(0,l.Y3)(),t.value=e.value.parentElement.parentElement.id.slice(5),r.value=o.getNodeFromId(t.value),a.value=r.value.data.valueVar,n.value=r.value.data.method})),{el:e,valueVar:a,method:n,options:i,updateSelect:s}}});const X=(0,T.Z)(A,[["render",R]]);var $=X;const B={ref:"el"};function K(e,t,o,a,n,r){const i=(0,l.up)("nodeHeader"),s=(0,l.up)("el-option"),u=(0,l.up)("el-select");return(0,l.wg)(),(0,l.iD)("div",B,[(0,l.Wm)(i,{title:"Logic"}),(0,l.Wm)(u,{modelValue:e.method,"onUpdate:modelValue":t[0]||(t[0]=t=>e.method=t),placeholder:"Select",onChange:e.updateSelect,size:"small","df-method":""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.options,(e=>((0,l.wg)(),(0,l.j4)(s,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])],512)}var J=(0,l.aZ)({components:{nodeHeader:Y},setup(){const e=(0,D.iH)(null),t=(0,D.iH)(0);let o=null;const a=(0,D.iH)(""),n=(0,D.iH)({}),r=(0,D.OT)([{value:"is equal to",label:"is equal to"},{value:"is less than",label:"is less than"},{value:"is greater than",label:"is greater than"},{value:"is less or equal than",label:"is less or equal than"},{value:"is greater or equal than",label:"is greater or equal than"}]);o=(0,l.FN)().appContext.config.globalProperties.$df.value;const i=e=>{n.value.data.method=e,o.updateNodeDataFromId(t.value,n.value)};return(0,l.bv)((async()=>{await(0,l.Y3)(),t.value=e.value.parentElement.parentElement.id.slice(5),n.value=o.getNodeFromId(t.value),a.value=n.value.data.method})),{el:e,method:a,options:r,updateSelect:i}}});const G=(0,T.Z)(J,[["render",K]]);var Q=G;const ee={ref:"el"};function te(e,t,o,a,n,r){const i=(0,l.up)("nodeHeader"),s=(0,l.up)("el-option"),u=(0,l.up)("el-select");return(0,l.wg)(),(0,l.iD)("div",ee,[(0,l.Wm)(i,{title:"Math"}),(0,l.Wm)(u,{modelValue:e.method,"onUpdate:modelValue":t[0]||(t[0]=t=>e.method=t),placeholder:"Select",onChange:e.updateSelect,size:"small","df-method":""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.options,(e=>((0,l.wg)(),(0,l.j4)(s,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])],512)}var oe=(0,l.aZ)({components:{nodeHeader:Y},setup(){const e=(0,D.iH)(null),t=(0,D.iH)(0);let o=null;const a=(0,D.iH)(""),n=(0,D.iH)({}),r=(0,D.OT)([{value:"sum",label:"sum"},{value:"rest",label:"rest"},{value:"multiplication",label:"multiplication"},{value:"divide",label:"divide"},{value:"pow",label:"pow"}]);o=(0,l.FN)().appContext.config.globalProperties.$df.value;const i=e=>{n.value.data.method=e,o.updateNodeDataFromId(t.value,n.value)};return(0,l.bv)((async()=>{await(0,l.Y3)(),t.value=e.value.parentElement.parentElement.id.slice(5),n.value=o.getNodeFromId(t.value),a.value=n.value.data.method})),{el:e,method:a,options:r,updateSelect:i}}});const ae=(0,T.Z)(oe,[["render",te]]);var ne=ae;const re={ref:"el"};function le(e,t,o,a,n,r){const i=(0,l.up)("nodeHeader");return(0,l.wg)(),(0,l.iD)("div",re,[(0,l.Wm)(i,{title:"IFELSE"})],512)}var ie=(0,l.aZ)({components:{nodeHeader:Y}});const se=(0,T.Z)(ie,[["render",le]]);var ue=se;const de={ref:"el"};function ce(e,t,o,a,n,r){const i=(0,l.up)("nodeHeader");return(0,l.wg)(),(0,l.iD)("div",de,[(0,l.Wm)(i,{title:"FOR"})],512)}var pe=(0,l.aZ)({components:{nodeHeader:Y}});const he=(0,T.Z)(pe,[["render",ce]]);var ve=he;o(6699);class me{constructor(){this.data={},this.nodesId=[],this.nodesIdNames=[],this.nodesNames=[],this.nodesMethod=[],this.nodesVariableType=[],this.nodesValueVar=[],this.nodesInputs=[],this.nodesOutputs=[],this.pythonCode="new code"}reset(){this.data={},this.nodesId=[],this.nodesIdNames=[],this.nodesNames=[],this.nodesMethod=[],this.nodesVariableType=[],this.nodesValueVar=[],this.nodesInputs=[],this.nodesOutputs=[],this.pythonCode="new code"}executeNodeCode(e){var{bool:t,Msg:o}=this.getNodes(e);if(0==t)return o;var{bool:a,Msg:n}=this.validateNodes();if(0==a)return n;var{bool:r,Msg:l}=this.validateInputsOutputs();if(0==r)return l;var{bool:i,Msg:s}=this.executionErrors();if(0==i)return s;var u=this.executeProgram();return u}makePythonCode(e){var{bool:t,Msg:o}=this.getNodes(e);if(0==t)return o;var{bool:a,Msg:n}=this.validateNodes();if(0==a)return n;var{bool:r,Msg:l}=this.validateInputsOutputs();if(0==r)return l;var{bool:i,Msg:s}=this.executionErrors();return 0==i?s:(this.getPythonCode(),this.pythonCode)}getNodes(e){this.data=e.drawflow.Home.data;for(let t in this.data)this.nodesId.push(t),this.nodesIdNames.push(this.data[t].id),this.nodesNames.push(""),this.nodesMethod.push(""),this.nodesVariableType.push(""),this.nodesValueVar.push(""),this.nodesInputs.push([]),this.nodesOutputs.push([]);return this.nodesId.length<=0?{bool:!1,Msg:"No nodes"}:{bool:!0,Msg:"No problems"}}validateNodes(){let e="",t="";var o="";for(let n in this.nodesId){e="",t="",o="";var a=this.data[this.nodesId[n]];switch(this.nodesNames[n]=a.name,a.name){case"Numeric":if(!Object.prototype.hasOwnProperty.call(a.data,"data"))return{bool:!1,Msg:"Select variable type of Numeric node"};if(1==Object.prototype.hasOwnProperty.call(a.data.data,"method")&&(this.nodesVariableType[n]=a.data.data.method),!Object.prototype.hasOwnProperty.call(a.data,"valuevar"))return{bool:!1,Msg:"Write a value in Numeric Node"};if(this.nodesValueVar[n]=a.data.valuevar,t=this.nodesValueVar[n],e=this.nodesVariableType[n],o=t.match(/^\d+(\.\d+)/g),null!=o){if(o[0].length!=t.length)return{bool:!1,Msg:"Variable float in Numeric Node is not correct"};if("int"==e)return{bool:!1,Msg:"Variable float in Numeric Node but requires int"};continue}if(o=t.match(/^\d+/g),null!=o){if(1==t.includes("."))return{bool:!1,Msg:"Variable float not complete"};if(o[0].length!=t.length)return{bool:!1,Msg:"Variable int in Numeric Node is not correct"};if("float"==e)return{bool:!1,Msg:"Variable int in Numeric Node but requires float"};continue}return{bool:!1,Msg:"Variable in Numeric Node is not a number"};case"Logic":if(1!=Object.prototype.hasOwnProperty.call(a.data,"data"))return{bool:!1,Msg:"Select operation in Logic node"};1==Object.prototype.hasOwnProperty.call(a.data.data,"method")&&(this.nodesMethod[n]=a.data.data.method);break;case"Math":if(1!=Object.prototype.hasOwnProperty.call(a.data,"data"))return{bool:!1,Msg:"Select operation in Math node"};1==Object.prototype.hasOwnProperty.call(a.data.data,"method")&&(this.nodesMethod[n]=a.data.data.method);break;default:break}}return{bool:!0,Msg:"Nodes validated"}}validateInputsOutputs(){let e=0,t="",o="";var a=["inputs","outputs"],n=[!1,!1],r="inputs";for(let i in this.nodesId){let s=this.data[this.nodesId[i]];n[0]=0!=Object.keys(s.inputs).length,n[1]=0!=Object.keys(s.outputs).length;for(let u=0;u<2;u++)if(r=a[u],n[u]){let a=Object.keys(s[r]);for(let n in a){if(e=Object.keys(s[r][a[n]].connections).length,t=JSON.stringify(a[n]),o=s.name,0==e){if("outputs"==r&&"Numeric"==o)return{bool:!1,Msg:"It is missing a connection in "+t+" from the node "+o};if("inputs"==r)return{bool:!1,Msg:"It is missing a connection in "+t+" from the node "+o}}if(e>1&&"outputs"!=r)return{bool:!1,Msg:"There are too many connections in "+t+" from the node "+o};if("inputs"==r&&"Numeric"!=this.nodesNames[i]){t=t.replaceAll('"',"");var l=s[r][t].connections[0].node;this.nodesInputs[i].push(l)}}}}return{bool:!0,Msg:"Inputs and Outputs validated"}}executionErrors(){var e=[],t=[];let o=this.getRoot();var a=this.nodesId.length;for(let i=0;i<a;i++)e.push(!1),t.push("");function n(o,a,r,l){if(1==e[o])return{bool:!0,Msg:t[o]};if("Numeric"==r[o])return e[o]=!0,t[o]="Numeric",{bool:!0,Msg:"Numeric"};var i="",s=0,u=[];for(let e in l[o]){i=l[o][e],s=a.indexOf(i);let{bool:t,Msg:d}=n(s,a,r,l);if(0==t)return{bool:t,Msg:d};u.push(d)}switch(e[o]=!0,r[o]){case"Logic":return"Logic"!=u[0]&&"Logic"!=u[1]?{bool:!0,Msg:"Logic"}:{bool:!1,Msg:"Execution Error: not all the inputs have a Numeric outputs"};case"Math":return"Logic"!=u[0]&&"Logic"!=u[1]?{bool:!0,Msg:"Math"}:{bool:!1,Msg:"Execution Error: there are inputs not valid"};case"FOR":if("Logic"!=u[0]&&"Logic"!=u[1]&&"Math"==u[2])return{bool:!0,Msg:"Numeric"};if("Logic"==u[0])return{bool:!1,Msg:"Execution Error: there is Logic node in input_1 of the FOR node"};if("Logic"==u[1])return{bool:!1,Msg:"Execution Error: there is Logic node in input_2 of the FOR node"};if("Math"!=u[2])return{bool:!1,Msg:"Execution Error: a Math node in requiered in input_3 of the FOR node"};break;case"IFELSE":return"Logic"!=u[0]?{bool:!1,Msg:"Execution Error: a Logic value in required in input_1 of the IF/ELSE node"}:"Logic"!=u[1]&&"Logic"!=u[2]?{bool:!0,Msg:"Numeric"}:"Logic"==u[1]&&"Logic"==u[2]?{bool:!0,Msg:"Logic"}:{bool:!0,Msg:"Execution Error: the inputs of the IF/ELSE node are not the same"};default:return{bool:!1,Msg:"Name not recognized"}}}let{bool:r,Msg:l}=n(o,this.nodesId,this.nodesNames,this.nodesInputs);return 0==r?{bool:r,Msg:l}:{bool:!0,Msg:"No execution errors"}}executeProgram(){let e=this.logicOperators,t=this.mathOperations;function o(e,o,a,n,r){console.log(e),console.log(o),console.log(a),console.log(n),console.log(r);var l=a;for(let i=e;i<o;i++)l=t(a,n,r),a=l;return console.log(l),console.log(String(l)),l.toString()}var a=this.getRoot();function n(a,r,l,i,s,u,d){if("Numeric"==l[a])return 1==d?s[a]:"Numeric,"+s[a]+",";var c="",p=0,h=[];for(let e in i[a])c=i[a][e],p=r.indexOf(c),h.push(p);var v="",m="",g="",f="",b=0,w=0;switch(l[a]){case"Logic":return v=n(h[0],r,l,i,s,u,d),m=n(h[1],r,l,i,s,u,d),g=u[a],1==d?(f=e(parseFloat(v),parseFloat(m),g),f.toString()):"Logic,"+v+m+g+",";case"Math":return v=n(h[0],r,l,i,s,u,d),m=n(h[1],r,l,i,s,u,d),g=u[a],1==d?(f=t(parseFloat(v),parseFloat(m),g),f.toString()):"Math,"+v+m+g+",";case"FOR":var y=n(h[0],r,l,i,s,u,!0),N=n(h[1],r,l,i,s,u,!0),M=n(h[2],r,l,i,s,u,!1),E=M.split(",");return v=E[2],m=E[4],g=E[5],b=parseFloat(v),w=parseFloat(m),1==d?o(Math.round(parseFloat(y)),Math.round(parseFloat(N)),b,w,g):"FOR,"+y+","+N+","+v+","+m+","+g+",";case"IFELSE":var C=n(h[0],r,l,i,s,u,!0),O=n(h[1],r,l,i,s,u,!1),V=n(h[2],r,l,i,s,u,!1),I="";if(I="true"==C?O:V,0==d)return I;switch(E=I.split(","),E[0]){case"Logic":return v=E[2],m=E[4],g=E[5],f=e(parseFloat(v),parseFloat(m),g),f.toString();case"Math":return v=E[2],m=E[4],g=E[5],f=t(parseFloat(v),parseFloat(m),g),f.toString();case"FOR":return console.log(E),y=Math.round(parseFloat(E[1])),N=Math.round(parseFloat(E[2])),v=parseFloat(E[3]),m=parseFloat(E[4]),g=E[5],o(y,N,v,m,g);case"Numeric":return E[1];default:break}break;default:break}}var r="";return r=n(a,this.nodesId,this.nodesNames,this.nodesInputs,this.nodesValueVar,this.nodesMethod,!0),r}getPythonCode(){let e=this.mathOperationsPython,t=this.logicOperatorsPython,o=this.getNamePython,a=this.indentCode,n=this.getRoot();var r=[],l=[];function i(n,s,u,d,c,p,h){if("Numeric"==u[n]){var v="N"+s[n];return-1==r.indexOf(v)&&(r.push(v),l.push(p[n])),v}var m="",g=0,f=[];for(let e in d[n])m=d[n][e],g=s.indexOf(m),f.push(g);var b="",w="",y="",N="",M="",E="",C="",O="",V="";switch(u[n]){case"Logic":return b=i(f[0],s,u,d,c,p,!1),w=i(f[1],s,u,d,c,p,!1),y=c[n],N=u[f[0]],M=o(N),"N"!=M&&(O=b,b=M+s[f[0]]),N=u[f[1]],M=o(N),"N"!=M&&(V=w,w=M+s[f[1]]),O+V+"\nL"+s[n]+" = ( "+b+" "+t(y)+" "+w+" )";case"Math":var I="";b=i(f[0],s,u,d,c,p,!1),w=i(f[1],s,u,d,c,p,!1),y=c[n],N=u[f[0]],M=o(N);var _=M+s[n];return"N"!=M&&(I+=w,b=_),N=u[f[1]],M=o(N),_=M+s[f[1]],"N"!=M&&(I+=w,w=_),1==h?b+","+w+","+y+",":I+"\nM"+s[n]+" = "+b+" "+e(y)+" "+w;case"FOR":var k=i(f[0],s,u,d,c,p,!1),F=i(f[1],s,u,d,c,p,!1),x=i(f[2],s,u,d,c,p,!0),L=x.split(",");return N=u[f[0]],M=o(N),"N"!=M&&(O=k,k=M+s[f[0]]),N=u[f[1]],M=o(N),"N"!=M&&(V=F,F=M+s[f[1]]),O+V+"\nF"+s[n]+" = "+L[0]+"\nfor _ in range("+k+", "+F+"):\n\tF"+s[n]+" = F"+s[n]+" "+e(L[2])+" "+L[1];case"IFELSE":var H="\nIE"+s[n]+"=",D=i(f[0],s,u,d,c,p,!1),W=i(f[1],s,u,d,c,p,!1),P=i(f[2],s,u,d,c,p,!1);return N=u[f[1]],M=o(N),E=M+s[f[1]],E="N"==M?H+E:W+H+E,N=u[f[2]],M=o(N),C=M+s[f[2]],C="N"==M?H+C:P+H+C,E=a(E),C=a(C),D+"\nif(L"+s[f[0]]+"):"+E+" \nelse:"+C}return"Node not found"}var s="FOR"==this.nodesNames[n];let u=i(n,this.nodesId,this.nodesNames,this.nodesInputs,this.nodesMethod,this.nodesValueVar,s);var d="";for(let p=0;p<r.length;p++)d=d+"\n"+r[p]+" = "+l[p];var c="\nprint("+o(this.nodesNames[n])+this.nodesId[n]+")";u=d+u+c,this.pythonCode=u}getRoot(){var e=[],t=[],o=this.nodesId.length;for(let l=0;l<o;l++)e.push(!1),t.push(0);function a(o,n,r,l){if("Numeric"==r[o])return e[o]=!0,t[o]=1,1;if(1==e[o])return t[o];var i="",s=0,u=0;for(let e in l[o])i=l[o][e],s=n.indexOf(i),u+=a(s,n,r,l);return e[o]=!0,t[o]=u,u}for(let l in this.nodesId)a(l,this.nodesId,this.nodesNames,this.nodesInputs);var n=-1,r=-1;for(let l in t)t[l]>n&&(r=l,n=t[l]);return r}logicOperators(e,t,o){switch(o){case"is equal to":return e==t;case"is less than":return e<t;case"is greater than":return e>t;case"is less or equal than":return e<=t;case"is greater or equal than":return e>=t}}mathOperations(e,t,o){switch(o){case"sum":return e+t;case"rest":return e-t;case"multiplication":return e*t;case"divide":return e/t;case"pow":return Math.pow(e,t)}}logicOperatorsPython(e){switch(e){case"is equal to":return"==";case"is less than":return"<";case"is greater than":return">";case"is less or equal than":return"<=";case"is greater or equal than":return">="}}mathOperationsPython(e){switch(e){case"sum":return"+";case"rest":return"-";case"multiplication":return"*";case"divide":return"/";case"pow":return"**"}}getNamePython(e){switch(e){case"Numeric":return"N";case"Logic":return"L";case"FOR":return"F";case"IFELSE":return"IE";case"Math":return"M"}}indentCode(e){var t=e.replaceAll("\n","\n\t");return t}}var ge=o(9669),fe=o.n(ge),be={name:"drawflowApp",setup(){const e=(0,D.OT)([{name:"Numeric",color:"gray",item:"Numeric",input:0,output:1},{name:"Logic",color:"green",item:"Logic",input:2,output:1},{name:"Math",color:"brown",item:"Math",input:2,output:1},{name:"IF/ELSE",color:"blue",item:"IFELSE",input:3,output:1},{name:"FOR",color:"black",item:"FOR",input:3,output:1}]),t=(0,D.XI)({}),o=(0,D.iH)(!1),n=(0,D.iH)(!1),r=(0,D.iH)(!1),i=(0,D.iH)({}),s=(0,D.iH)({}),u=(0,D.iH)(""),d={version:3,h:l.h,render:a.sY},c=(0,l.FN)();c.appContext.app._context.config.globalProperties.$df=t;const p=(0,D.XI)({}),h=(0,D.iH)(""),v=(0,D.iH)("");function m(){p.value.reset(),h.value=p.value.executeNodeCode(t.value.export())}function g(){p.value.reset(),u.value=p.value.makePythonCode(t.value.export()),r.value=!0}function f(){t.value.import({drawflow:{Home:{data:{}}}})}function b(){v.value="",n.value=!0,fe().get("http://localhost:3000/readEditor").then((e=>{s.value=e.data})).catch((e=>v.value=e+v.value))}function w(){"Empty"!=s.value?"AxiosError: Network Error"!=v.value&&""!=v.value?(t.value.import(JSON.parse(s.value.replace('\\"',"'"))),v.value="Imported"):v.value+=" (no editor received)":v.value="Empty"}function y(){v.value="",i.value=t.value.export(),o.value=!0}function N(){var e=JSON.stringify(i.value);fe().get("http://localhost:3000/saveEditor?Editor="+e).then((e=>{v.value=e.data})).catch((e=>v.value=e)),o.value=!1}const M=e=>{"touchstart"===e.type?O=e.target.closest(".drag-drawflow").getAttribute("data-node"):e.dataTransfer.setData("node",e.target.getAttribute("data-node"))},E=e=>{if("touchend"===e.type){var t=document.elementFromPoint(V.touches[0].clientX,V.touches[0].clientY).closest("#drawflowApp");null!=t&&_(O,V.touches[0].clientX,V.touches[0].clientY),O=""}else{e.preventDefault();var o=e.dataTransfer.getData("node");_(o,e.clientX,e.clientY)}},C=e=>{e.preventDefault()};let O="",V=null;function I(e){V=e}function _(o,a,n){a=a*(t.value.precanvas.clientWidth/(t.value.precanvas.clientWidth*t.value.zoom))-t.value.precanvas.getBoundingClientRect().x*(t.value.precanvas.clientWidth/(t.value.precanvas.clientWidth*t.value.zoom)),n=n*(t.value.precanvas.clientHeight/(t.value.precanvas.clientHeight*t.value.zoom))-t.value.precanvas.getBoundingClientRect().y*(t.value.precanvas.clientHeight/(t.value.precanvas.clientHeight*t.value.zoom));const r=e.find((e=>e.item==o));t.value.addNode(o,r.input,r.output,a,n,o,{},o,"vue")}return(0,l.bv)((()=>{for(var e=document.getElementsByClassName("drag-drawflow"),o=0;o<e.length;o++)e[o].addEventListener("touchend",E,!1),e[o].addEventListener("touchmove",I,!1),e[o].addEventListener("touchstart",M,!1);const a=document.getElementById("drawflow");p.value=new me,t.value=new(H())(a,d,c.appContext.app._context),t.value.start(),t.value.registerNode("Numeric",$,{},{}),t.value.registerNode("Logic",Q,{},{}),t.value.registerNode("Math",ne,{},{}),t.value.registerNode("IFELSE",ue,{},{}),t.value.registerNode("FOR",ve,{},{}),t.value.import({drawflow:{Home:{data:{}}}})})),{exportEditor:y,importEditor:b,listNodes:e,drag:M,drop:E,allowDrop:C,dialogVisibleExport:o,dialogVisibleImport:n,dialogDataExport:i,dialogDataImport:s,importDataConfirm:w,exportDataConfirm:N,clearEditor:f,pythonCode:g,dialogPythonCode:u,dialogVisiblePythonCode:r,executeNodeCode:m,consoleData:h,requestsData:v}}};const we=(0,T.Z)(be,[["render",x],["__scopeId","data-v-7fc0581d"]]);var ye=we,Ne={__name:"App",setup(e){return(e,t)=>((0,l.wg)(),(0,l.j4)(ye))}};const Me=Ne;var Ee=Me;const Ce=(0,a.ri)(Ee);Ce.use(n.Z),Ce.use(r),Ce.mount("#app")}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,a,n,r){if(!a){var l=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],r=e[d][2];for(var i=!0,s=0;s<a.length;s++)(!1&r||l>=r)&&Object.keys(o.O).every((function(e){return o.O[e](a[s])}))?a.splice(s--,1):(i=!1,r<l&&(l=r));if(i){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,n,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,l=a[0],i=a[1],s=a[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(s)var d=s(o)}for(t&&t(a);u<l.length;u++)r=l[u],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},a=self["webpackChunkprueba"]=self["webpackChunkprueba"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(6051)}));a=o.O(a)})();
//# sourceMappingURL=app.a5e6bb88.js.map