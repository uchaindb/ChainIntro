(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["a4paper"],{"193d":function(e,t,a){},"36bd":function(e,t,a){"use strict";var s=a("4bf8"),n=a("77f1"),i=a("9def");e.exports=function(e){var t=s(this),a=i(t.length),c=arguments.length,o=n(c>1?arguments[1]:void 0,a),r=c>2?arguments[2]:void 0,l=void 0===r?a:n(r,a);while(l>o)t[o++]=e;return t}},"454f":function(e,t,a){a("46a7");var s=a("584a").Object;e.exports=function(e,t,a){return s.defineProperty(e,t,a)}},"46a7":function(e,t,a){var s=a("63b6");s(s.S+s.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},"504c":function(e,t,a){var s=a("9e1e"),n=a("0d58"),i=a("6821"),c=a("52a7").f;e.exports=function(e){return function(t){var a,o=i(t),r=n(o),l=r.length,m=0,d=[];while(l>m)a=r[m++],s&&!c.call(o,a)||d.push(e?[a,o[a]]:o[a]);return d}}},"6c7b":function(e,t,a){var s=a("5ca1");s(s.P,"Array",{fill:a("36bd")}),a("9c6c")("fill")},"85f2":function(e,t,a){e.exports=a("454f")},"9bfd":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),e.type?a("table",{attrs:{id:"print-table"}},e._l(12,function(t){return a("tr",{key:t},e._l(5,function(s){return a("td",{key:s},["sticker"==e.type&&e.bcArchData?[e._l([(5*(t-1)+s-1)%e.bcArchData.length],function(t){return[a("div",{key:t+"content",staticClass:"content"},[a("span",{staticClass:"title",class:["color-"+e.bcArchData[t].categoryKey]},[e._v("\n                "+e._s(e.bcArchData[t].simpleTitle||e.bcArchData[t].title)+"\n              ")]),a("p",{staticClass:"content-body"},[e._v("\n                "+e._s(e.bcArchData[t].simpleDesc||e.bcArchData[t].desc)+"\n              ")]),a("p",{staticClass:"content-foot"},[e._v("\n                "+e._s(e.typeData[e.bcArchData[t].categoryKey].title)+"\n              ")])]),a("div",{key:t+"qrcode",staticClass:"qrcode"},[a("qrcode",{attrs:{value:"b.uchaindb.com#"+t,tag:"img",options:{errorCorrectionLevel:"L",margin:0}}})],1)]})]:"coins"==e.type&&e.coins?[e._l([(5*(t-1)+s-1)%e.coins.length],function(t){return[a("div",{key:t+"content",staticClass:"content"},[a("span",{staticClass:"title coin"},[e._v("\n                "+e._s(e.coins[t].name)+"\n              ")]),a("p",{staticClass:"content-foot coin"},[e._v("\n                "+e._s(e.coins[t].symbol)+"\n              ")])]),a("div",{key:t+"qrcode",staticClass:"qrcode"},[a("img",{staticClass:"w-75 m-4",attrs:{src:"icons/"+e.coins[t].symbol.toLowerCase()+".svg"}})])]})]:"sticker"!=e.type?[e._l([(5*(t-1)+s-1)%e.testData.length],function(t){return[a("div",{key:t+"content",staticClass:"wholecontent"},[a("div",{key:t+"content",class:e.testData[t].class,style:{color:e.testData[t].color,"background-color":e.testData[t].backColor}},[e._v("\n                "+e._s(e.testData[t].content)+"\n              ")])])]})]:e._e()],2)}),0)}),0):e._e()])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav"},[a("li",[a("a",{attrs:{href:"#/a4/sticker"}},[e._v("Sticker")])]),a("li",[a("a",{attrs:{href:"#/a4/red"}},[e._v("Red")])]),a("li",[a("a",{attrs:{href:"#/a4/blue"}},[e._v("Blue")])]),a("li",[a("a",{attrs:{href:"#/a4/helper"}},[e._v("Helper")])]),a("li",[a("a",{attrs:{href:"#/a4/binary"}},[e._v("Binary")])]),a("li",[a("a",{attrs:{href:"#/a4/coins"}},[e._v("Coins")])])])}],i=a("bd86"),c=(a("7f7f"),a("6c7b"),a("55dd"),a("d225")),o=a("b0b4"),r=a("308d"),l=a("6bb5"),m=a("4e2b"),d=a("9ab4"),p=a("60a3"),y=a("e979"),b=a("4cc3"),u=a("d56f"),h=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(r["a"])(this,Object(l["a"])(t).call(this)),e.archData=y["a"].archData,e.typeData=y["a"].typeData,e.ecoData=y["a"].ecoData,e.riskData=y["a"].riskData,e.bcArchData=[],e.coins=[],e.type=null,e}return Object(m["a"])(t,e),Object(o["a"])(t,[{key:"beforeMount",value:function(){this.update()}},{key:"routeChanged",value:function(e,t){this.update()}},{key:"update",value:function(){this.type=this.$route.params.id,"sticker"==this.type?(this.bcArchData=y["a"].archList.sort(function(e,t){return e.id-t.id}),this.bcArchData.splice(20)):"coins"==this.type?this.coins=[{name:"Bitcoin",symbol:"BTC"},{name:"Ethereum",symbol:"ETH"},{name:"XRP",symbol:"XRP"},{name:"Bitcoin Cash",symbol:"BCH"},{name:"Litecoin",symbol:"LTC"},{name:"EOS",symbol:"EOS"},{name:"Binance Coin",symbol:"BNB"},{name:"Bitcoin SV",symbol:"BSV"},{name:"Stellar",symbol:"XLM"},{name:"Cardano",symbol:"ADA"},{name:"Monero",symbol:"XMR"},{name:"TRON",symbol:"TRX"},{name:"IOTA",symbol:"MIOTA"},{name:"Dash",symbol:"DASH"},{name:"Tezos",symbol:"XTZ"},{name:"Ethereum Classic",symbol:"ETC"},{name:"NEO",symbol:"NEO"},{name:"Cosmos",symbol:"ATOM"},{name:"NEM",symbol:"XEM"},{name:"Ontology",symbol:"ONT"},{name:"Dogecoin",symbol:"DOGE"},{name:"Zcash",symbol:"ZEC"},{name:"VeChain",symbol:"VET"},{name:"Decred",symbol:"DCR"},{name:"Qtum",symbol:"QTUM"},{name:"Ravencoin",symbol:"RVN"},{name:"Bitcoin Gold",symbol:"BTG"},{name:"Lisk",symbol:"LSK"},{name:"Nano",symbol:"NANO"},{name:"DigiByte",symbol:"DGB"},{name:"Bitcoin Diamond",symbol:"BCD"},{name:"Waves",symbol:"WAVES"},{name:"ICON",symbol:"ICX"},{name:"BitShares",symbol:"BTS"},{name:"Bytecoin",symbol:"BCN"},{name:"MonaCoin",symbol:"MONA"},{name:"THETA",symbol:"THETA"},{name:"Komodo",symbol:"KMD"},{name:"Siacoin",symbol:"SC"},{name:"IOST",symbol:"IOST"},{name:"Ardor",symbol:"ARDR"},{name:"Bytom",symbol:"BTM"},{name:"Verge",symbol:"XVG"},{name:"Steem",symbol:"STEEM"},{name:"Zilliqa",symbol:"ZIL"},{name:"Zcoin",symbol:"XZC"},{name:"Aeternity",symbol:"AE"},{name:"Metaverse ETP",symbol:"ETP"},{name:"Electroneum",symbol:"ETN"},{name:"Factom",symbol:"FCT"},{name:"Stratis",symbol:"STRAT"},{name:"Beam",symbol:"BEAM"},{name:"Elastos",symbol:"ELA"},{name:"Grin",symbol:"GRIN"},{name:"ReddCoin",symbol:"RDD"},{name:"NULS",symbol:"NULS"},{name:"Horizen",symbol:"ZEN"},{name:"Aion",symbol:"AION"},{name:"Nebulas",symbol:"NAS"},{name:"WaykiChain",symbol:"WICC"}]:"binary"==this.type?this.testData=[{content:"1",color:"#e850a8",class:"bignumber"},{content:"0",color:"#66ccff",class:"bignumber"}]:(this.testData=[{content:"",backColor:"#66ccff",class:"block"},{content:"",backColor:"#e850a8",class:"block"},{content:"",backColor:"#66cc33",class:"block"},{content:"",backColor:"black",class:"block"}],"red"==this.type?this.testData=[this.testData[1]]:"blue"==this.type?this.testData=[this.testData[0]]:"helper"==this.type&&(this.testData=Array(15).fill(this.testData[0]).concat(Array(15).fill(this.testData[1])).concat(Array(25).fill(this.testData[2])).concat(Array(5).fill(this.testData[3]))))}}]),t}(p["c"]);d["a"]([Object(p["d"])("$route")],h.prototype,"routeChanged",null),h=d["a"]([Object(p["a"])({components:Object(i["a"])({NavMenu:b["a"]},u["a"].name,u["a"])})],h);var f=h,g=f,k=(a("b149"),a("2877")),_=Object(k["a"])(g,s,n,!1,null,"02855ab2",null);t["default"]=_.exports},ac6a:function(e,t,a){for(var s=a("cadf"),n=a("0d58"),i=a("2aba"),c=a("7726"),o=a("32e9"),r=a("84f2"),l=a("2b4c"),m=l("iterator"),d=l("toStringTag"),p=r.Array,y={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},b=n(y),u=0;u<b.length;u++){var h,f=b[u],g=y[f],k=c[f],_=k&&k.prototype;if(_&&(_[m]||o(_,m,p),_[d]||o(_,d,f),r[f]=p,g))for(h in s)_[h]||i(_,h,s[h],!0)}},b0b4:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var s=a("85f2"),n=a.n(s);function i(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),n()(e,s.key,s)}}function c(e,t,a){return t&&i(e.prototype,t),a&&i(e,a),e}},b149:function(e,t,a){"use strict";var s=a("193d"),n=a.n(s);n.a},e979:function(e,t,a){"use strict";a("ac6a"),a("ffc1");var s={archData:{currency:{nocoin:{id:0,title:"无代币",desc:"也被称为无币区块链，无一般等价物，很难形成价值网络",cons:["参与者均无法获得激励"],pros:["更加纯粹的专注于业务本身"]},frommine_deflation:{id:1,title:"通缩型代币",desc:"通过挖矿创造初始代币，但代币总量固定",cons:["早期投资者介入不易"],pros:["早期用户获利更多"]},frommine_inflation:{id:2,title:"通胀型代币",desc:"通过挖矿创造初始代币，但代币上限不定",cons:["经济模型决定了区块链的健康程度"],pros:["早期用户获利更多"]}},ledger:{chain:{id:3,title:"区块链",desc:"由比特币创造，将区块链以链状结构相连",cons:["性能效率低下","性能不易扩展"],pros:["久经考验，稳定"]},dag:{id:4,title:"单向无环图",desc:"有类似于区块链的性质，不过以图的形式使得并行性得到增强",cons:["尚未大范围应用","容错处理更复杂"],pros:["性能效率更高"]}},contracts:{novm:{id:9,title:"无法执行",desc:"不能执行任何智能合约，只能进行区块链预定的指定操作",cons:["无法扩展功能"],pros:["高性能","不容易产生漏洞"]},limitstackvm:{id:10,title:"受限栈模式",desc:"在比特币中使用，可以执行少量运行的命令",cons:["功能少"],pros:["高性能","少漏洞"]},fullstackvm:{id:11,title:"图灵完全",desc:"图灵完全的虚拟机，可以执行任何类型的逻辑",cons:["常常出现漏洞"],pros:["性能保障机制复杂","功能完整，可扩展性强"]}},hash:{sha2:{id:5,title:"SHA2",desc:"SHA算法家族的第二代，在比特币中使用为SHA256",cons:["可能会在将来被攻破"],pros:["足够高的熵"]},sha3:{id:6,title:"Keccak",desc:"也称SHA3，在以太坊中被使用",cons:["计算速度慢"],pros:["暂时不担心攻破"]}},signature:{ecdsa:{id:7,title:"椭圆曲线",desc:"ECDSA，被大部分区块链所采用",cons:["性能略低"],pros:["存储空间少","被区块链广泛使用"]},rsa:{id:8,title:"RSA",desc:"经典的数字签名算法，广泛应用于银行、证书等领域",cons:["存储空间占用大"],pros:["非常成熟，性能优","在安全行业广泛使用"]}},permission:{permissioned:{id:12,title:"授权接入",desc:"只有获得授权的节点才可以接入区块链网络",cons:["不开放，无法让所有人广泛参与"],pros:["成员受控，安全可控","适合企业之间或内部使用"]},public:{id:13,title:"公开接入",desc:"任意节点均有机会接入到该区块链网络",cons:["为解决女巫攻击的问题，需要精巧的设计"],pros:["接受任意成员的加入","适合企业之间或内部使用"]}},api:{rpc:{id:14,title:"通用型接口",desc:"通常使用远程过程调用(RPC)，一种易扩展升级的接口，广泛用于区块链项目",cons:["接口本身无描述"],pros:["接口标准","易升级扩展"]},restful:{id:15,title:"描述型接口",desc:"以REST为代表的描述性接口，广泛用在网络应用中",cons:["接口升级需要慎重的考虑"],pros:["接口标准","接口描述明确详细，易于使用"]}},consensus:{pow_sha2:{id:16,title:"工作量证明-SHA2",simpleTitle:"工作量证明",desc:"在比特币中使用，通过大计算量避免女巫攻击",cons:["消耗大量的能源"],pros:["成熟稳定","作恶成本高"],risk:["cross_chain_hash_attack","fifty_one","double_spend","selfish_mining"]},pow_ethash:{id:20,title:"工作量证明-Ethash",desc:"专门为以太坊设计的工作量证明算法",cons:["消耗大量的能源"],pros:["成熟稳定","作恶成本高"],risk:["cross_chain_hash_attack","fifty_one","double_spend","selfish_mining"]},pow_newalgo:{id:17,title:"工作量证明-新方法",simpleTitle:"新工作量证明",desc:"通过大计算量避免女巫攻击，通过设计新的方法，避免跨链算力攻击",cons:["消耗大量的能源","不成熟和稳定"],pros:["作恶成本高"],risk:["fifty_one","double_spend","selfish_mining"]},pos_casper:{id:21,title:"权利证明-casper",desc:"专门为以太坊设计的权力证明算法，通过抵押以太币来挖矿",cons:["尚未能证明其防攻击能力"],pros:["避免能源消耗"],risk:["sybil_attack","long_range"]},pos_standard:{id:18,title:"权利证明",desc:"根据在区块链上所拥有的权利（股权）来获得记账（并获得收益）的概率",simpleDesc:"根据在区块链上所拥有的权利来获得记账的概率",cons:["很难防止女巫攻击"],pros:["避免能源消耗"],risk:["sybil_attack","long_range"]},pos_algorand:{id:22,title:"权利证明-Algorand",desc:"由Algorand设计的一种权利证明机制，通过数学随机数的方法，使得每个用户获得记账概率进行了平均",cons:["尚未能证明其防攻击能力"],pros:["避免能源消耗","避免单个用户拥有过多的权利"],risk:["sybil_attack","long_range"]},dpos_standard:{id:19,title:"委托权利证明",desc:"将拥有的区块链权利委托给部分用户，这部分用户平均分配获得记账概率",simpleDesc:"将拥有的权利委托给部分用户，他们将平均获得记账权",cons:["尚未能证明其防攻击能力"],pros:["避免能源消耗"],risk:["sybil_attack","long_range"]}}},archList:[],typeData:{currency:{title:"① 代币机制",desc:"决定了区块链的价值如何体现与流转"},ledger:{title:"② 账本模式",desc:"区块之间的连接方式决定了区块链的并行性"},contracts:{title:"⑤ 智能合约",desc:"用于执行逻辑，使区块链具备更好的扩展性"},hash:{title:"③ 数字摘要",desc:"标识信息唯一性的数学方法"},signature:{title:"④ 数字签名",desc:"基于困难的数学问题，使得签名可以安全防伪"},permission:{title:"⑥ 权限控制",desc:"决定区块链如何接纳新的节点成员"},api:{title:"⑦ 接口设计",desc:"决定区块链的对外接口的设计模式"},consensus:{title:"⑧ 共识机制",desc:"多个节点如何获得记账权限的策略机制"},incentive:{title:"激励",desc:"提供激励以鼓励达成共识的参与者，积极地参与到区块链的稳定运行中"},governance:{title:"治理",desc:"提供如何更新代码、管理初始资金并协调区块链参与者"},dapp:{title:"DApp",desc:"更为复杂和综合的智能合约"}},ecoData:{incentive:{mine:{id:"ei1",icon:"briefcase",title:"挖矿激励"},fee:{id:"ei2",icon:"money-bill",title:"交易费"},profitsharing:{id:"ei3",icon:"handshake",title:"分红"}},governance:{voting_code:{id:"eg1",icon:"poll",title:"通过投票提交代码更改"},committee_code:{id:"eg2",icon:"users",title:"通过委员会审核代码"},foundation:{id:"eg3",icon:"hands-helping",title:"由非营利组织管理协调社区、资金"},company:{id:"eg4",icon:"building",title:"由公司管理管理协调社区、资金"},voting_community:{id:"eg5",icon:"book",title:"社区自组织，由投票表决"}},dapp:{oracle:{id:"ed1",icon:"american-sign-language-interpreting",title:"链下预测服务"},central_exchange:{id:"ed2",icon:"exchange-alt",title:"中心化交易所"},distributed_exchange:{id:"ed3",icon:"link",title:"去中心交易所"}}},ecoList:[],riskData:{fifty_one:{icon:"carrot",text:"51%算力攻击",desc:"由全网算力超过51%的拥有者发起，导致历史被修改的攻击"},double_spend:{icon:"carrot",text:"双花攻击",desc:"当使用区块链中的代币进行链下交易时，由于（临时）历史的变更，使得一笔钱被花在两个地方"},sybil_attack:{icon:"carrot",text:"女巫攻击",desc:"利用单个节点伪装成多个节点，以削弱网络的冗余性、健壮性，并干扰正常的网络活动"},selfish_mining:{icon:"carrot",text:"自私挖矿攻击",desc:"具有挖矿优势的矿工私藏已成功挖到块，并继续挖矿以延续优势，使得其他矿工更加处于劣势，而无法获得挖矿奖励"},long_range:{icon:"carrot",text:"长程攻击",desc:"由历史上拥有过绝大多数股权的控制人发起，导致历史被修改的攻击"},cross_chain_hash_attack:{icon:"carrot",text:"跨链算力攻击",desc:"新链使用成熟的算力算法时，非常容易被现行矿池进行51%算力攻击"}},coins:[{id:"btc",icon:"btc",name:"比特币",desc:"最初由中本聪在2008年提出，并于2009年正式上线。比特币是一种点对点形式的虚拟的加密数字货币。与以往的货币不同，比特币不依靠特定货币机构发行，它依据特定算法，通过大量的计算产生",char:{currency:"frommine_deflation",ledger:"chain",hash:"sha2",signature:"ecdsa",contracts:"limitstackvm",permission:"public",api:"rpc",consensus:"pow_sha2",incentive:[],governance:[],dapp:[]}},{id:"eth",icon:"eth",name:"以太坊",desc:"概念首次在2013年由Vitalik受比特币启发后提出，大意为“下一代加密货币与去中心化应用平台”，在2014年通过ICO众筹开始得以发展。以太币是市值第二高的加密货币，仅次于比特币。",char:{currency:"frommine_inflation",ledger:"chain",hash:"sha3",signature:"ecdsa",contracts:"fullstackvm",permission:"public",api:"rpc",consensus:"pos_standard",incentive:[],governance:[],dapp:[]}},{id:"eos",icon:"eos",name:"EOS",desc:"引入的一种新的区块链架构，旨在实现分布式应用的性能扩展。它并不是像比特币和以太坊那样，直接是货币，而是基于其公链进行发币，被称为区块链3.0。",char:{currency:"frommine_inflation",ledger:"chain",hash:"sha2",signature:"ecdsa",contracts:"fullstackvm",permission:"permissioned",api:"rpc",consensus:"dpos_standard",incentive:[],governance:[],dapp:[]}}],modes:{standard:{name:"标准",id:"standard",columns:[{key:"arch",type:"arch",control:"detail",items:["currency","ledger","hash","signature"],title:"基础架构",icon:"boxes",color:"primary"},{key:"comp",type:"arch",control:"detail",items:["contracts","permission","api","consensus"],title:"基础组件",icon:"cubes",color:"success"},[{key:"eco",type:"eco",control:"detail",items:["incentive","governance","dapp"],title:"生态系统",icon:"users",color:"info"},{key:"risk",type:"risk",control:"detail",title:"潜在风险",icon:"exclamation-triangle",color:"danger"}]]},simple:{name:"简化",id:"simple",columns:[{key:"comp",type:"arch",control:"compact",items:["currency","ledger","hash","signature","contracts","permission","api","consensus"],title:"架构组件",icon:"boxes",color:"primary"},{key:"eco",type:"eco",control:"detail",items:["incentive","governance","dapp"],title:"生态系统",icon:"users",color:"info"},{key:"risk",type:"risk",control:"detail",title:"潜在风险",icon:"exclamation-triangle",color:"danger"}]},arch:{name:"仅架构",id:"arch",columns:[{key:"arch",type:"arch",control:"compact",items:["currency","ledger","hash","signature"],title:"基础架构",icon:"boxes",color:"primary"},{key:"comp",type:"arch",control:"compact",items:["contracts","permission","api","consensus"],title:"基础组件",icon:"cubes",color:"success"},{key:"risk",type:"risk",control:"detail",title:"潜在风险",icon:"exclamation-triangle",color:"danger"}]}}};Object.entries(s.archData).map(function(e,t){Object.entries(e[1]).map(function(t,a){var n=Object.assign({key:t[0],categoryKey:e[0]},t[1]);s.archList.push(n)})}),Object.entries(s.ecoData).map(function(e,t){Object.entries(e[1]).map(function(t,a){var n=Object.assign({key:t[0],categoryKey:e[0]},t[1]);t[1].id&&s.ecoList.push(n)})}),t["a"]=s},ffc1:function(e,t,a){var s=a("5ca1"),n=a("504c")(!0);s(s.S,"Object",{entries:function(e){return n(e)}})}}]);
//# sourceMappingURL=a4paper.3187af4b.js.map