function _0x4502(){const _0x579ba0=['quotedMessage','composing','exports','1032973YXcvMR','2SbUbrc','client','./Base','download','imageMessage','sendTyping','26959200UQEieE','9VrwPbJ','split','@adiwajshing/baileys','downloadAndSaveMediaMessage','49aHQPqZ','stanzaId','image','./Image','videoMessage','292848nYWJyr','1355187GIGDGU','4062840pOesEH','reply','caption','mediaKey','data','sendMessage','jid','2035632ZFAzwC','delete','participant','_patch','url','width','conversation','text','4225150cokWzn','message','mimetype','height','video','deleteMessage'];_0x4502=function(){return _0x579ba0;};return _0x4502();}const _0x3f437b=_0x152c;(function(_0x2faa89,_0x1f3daf){const _0x4a7782=_0x152c,_0x45e4ff=_0x2faa89();while(!![]){try{const _0x2440bf=parseInt(_0x4a7782(0x1a9))/0x1*(-parseInt(_0x4a7782(0x1aa))/0x2)+-parseInt(_0x4a7782(0x1bb))/0x3+parseInt(_0x4a7782(0x1c3))/0x4+-parseInt(_0x4a7782(0x1a0))/0x5+parseInt(_0x4a7782(0x1ba))/0x6*(parseInt(_0x4a7782(0x1b5))/0x7)+-parseInt(_0x4a7782(0x1bc))/0x8*(parseInt(_0x4a7782(0x1b1))/0x9)+parseInt(_0x4a7782(0x1b0))/0xa;if(_0x2440bf===_0x1f3daf)break;else _0x45e4ff['push'](_0x45e4ff['shift']());}catch(_0x1b274b){_0x45e4ff['push'](_0x45e4ff['shift']());}}}(_0x4502,0xad121));function _0x152c(_0x58c5bb,_0x12de58){const _0x450217=_0x4502();return _0x152c=function(_0x152c33,_0x2a09f0){_0x152c33=_0x152c33-0x19f;let _0x5dbad6=_0x450217[_0x152c33];return _0x5dbad6;},_0x152c(_0x58c5bb,_0x12de58);}const {MessageType,Presence,MessageOptions}=require(_0x3f437b(0x1b3)),Base=require(_0x3f437b(0x1ac)),Image=require(_0x3f437b(0x1b8));class ReplyMessage extends Base{constructor(_0x2646ec,_0x39e061){const _0x1b9a41=_0x3f437b;super(_0x2646ec);if(_0x39e061)this[_0x1b9a41(0x1c6)](_0x39e061);}[_0x3f437b(0x1c6)](_0x5432b7){const _0xf657fa=_0x3f437b;this['id']=_0x5432b7[_0xf657fa(0x1b6)],this['jid']=_0x5432b7[_0xf657fa(0x1c5)];if(_0x5432b7[_0xf657fa(0x1a6)]&&_0x5432b7[_0xf657fa(0x1a6)][_0xf657fa(0x1ae)])this[_0xf657fa(0x1a1)]=_0x5432b7[_0xf657fa(0x1a6)][_0xf657fa(0x1ae)][_0xf657fa(0x1be)]===null?_0x5432b7['message'][_0xf657fa(0x1ae)][_0xf657fa(0x1be)]:'',this['caption']=_0x5432b7[_0xf657fa(0x1a6)][_0xf657fa(0x1ae)][_0xf657fa(0x1be)]===null?_0x5432b7[_0xf657fa(0x1a1)][_0xf657fa(0x1ae)]['caption']:'',this[_0xf657fa(0x1c7)]=_0x5432b7[_0xf657fa(0x1a6)][_0xf657fa(0x1ae)][_0xf657fa(0x1c7)],this[_0xf657fa(0x1a2)]=_0x5432b7[_0xf657fa(0x1a6)][_0xf657fa(0x1ae)][_0xf657fa(0x1a2)],this[_0xf657fa(0x1a3)]=_0x5432b7[_0xf657fa(0x1a6)]['imageMessage'][_0xf657fa(0x1a3)],this[_0xf657fa(0x1c8)]=_0x5432b7[_0xf657fa(0x1a6)][_0xf657fa(0x1ae)]['width'],this[_0xf657fa(0x1bf)]=_0x5432b7[_0xf657fa(0x1a6)][_0xf657fa(0x1ae)][_0xf657fa(0x1bf)],this[_0xf657fa(0x1b7)]=!![],this[_0xf657fa(0x1a4)]=![];else{if(_0x5432b7[_0xf657fa(0x1a6)]&&_0x5432b7[_0xf657fa(0x1a6)]['videoMessage'])this['message']=_0x5432b7[_0xf657fa(0x1a6)][_0xf657fa(0x1b9)]['caption']===null?_0x5432b7['message'][_0xf657fa(0x1b9)][_0xf657fa(0x1be)]:'',this[_0xf657fa(0x1be)]=_0x5432b7[_0xf657fa(0x1a6)][_0xf657fa(0x1b9)][_0xf657fa(0x1be)]===null?_0x5432b7[_0xf657fa(0x1a1)][_0xf657fa(0x1b9)][_0xf657fa(0x1be)]:'',this[_0xf657fa(0x1c7)]=_0x5432b7[_0xf657fa(0x1a6)]['videoMessage'][_0xf657fa(0x1c7)],this['mimetype']=_0x5432b7['quotedMessage'][_0xf657fa(0x1b9)][_0xf657fa(0x1a2)],this[_0xf657fa(0x1a3)]=_0x5432b7[_0xf657fa(0x1a6)][_0xf657fa(0x1b9)][_0xf657fa(0x1a3)],this[_0xf657fa(0x1c8)]=_0x5432b7[_0xf657fa(0x1a6)][_0xf657fa(0x1b9)][_0xf657fa(0x1c8)],this[_0xf657fa(0x1bf)]=_0x5432b7['quotedMessage'][_0xf657fa(0x1b9)][_0xf657fa(0x1bf)],this[_0xf657fa(0x1a4)]=!![];else _0x5432b7[_0xf657fa(0x1a6)]&&_0x5432b7[_0xf657fa(0x1a6)][_0xf657fa(0x1c9)]&&(this[_0xf657fa(0x1a1)]=_0x5432b7['quotedMessage'][_0xf657fa(0x1c9)],this[_0xf657fa(0x19f)]=_0x5432b7[_0xf657fa(0x1a6)][_0xf657fa(0x1c9)],this['image']=![],this[_0xf657fa(0x1a4)]=![]);}return this[_0xf657fa(0x1c0)]=_0x5432b7,super[_0xf657fa(0x1c6)](_0x5432b7);}async[_0x3f437b(0x1c4)](){const _0x4756b8=_0x3f437b;return await this[_0x4756b8(0x1ab)][_0x4756b8(0x1a5)](this[_0x4756b8(0x1c2)],{'id':this['id'],'remoteJid':this[_0x4756b8(0x1c2)],'fromMe':!![]});}async[_0x3f437b(0x1bd)](_0x53375a){const _0x5001b3=_0x3f437b;var _0x1d3ef7=await this[_0x5001b3(0x1ab)]['sendMessage'](this[_0x5001b3(0x1c2)],_0x53375a,MessageType[_0x5001b3(0x19f)],{'quoted':this[_0x5001b3(0x1c0)]});return new Message(this[_0x5001b3(0x1ab)],_0x1d3ef7);}async[_0x3f437b(0x1c1)](_0xa0a61f,_0x273ca5,_0x472234){const _0x320be8=_0x3f437b;return await this[_0x320be8(0x1ab)][_0x320be8(0x1c1)](this['jid'],_0xa0a61f,_0x273ca5,_0x472234);}async[_0x3f437b(0x1af)](){const _0x43f8a6=_0x3f437b;return await this[_0x43f8a6(0x1ab)]['updatePresence'](this['jid'],Presence[_0x43f8a6(0x1a7)]);}async[_0x3f437b(0x1ad)](_0x3aed65=this['id']){const _0x23ecbd=_0x3f437b;return this[_0x23ecbd(0x1b7)]?(await this['client'][_0x23ecbd(0x1b4)](this[_0x23ecbd(0x1c0)]['quotedMessage'][_0x23ecbd(0x1ae)],_0x3aed65),this['id']+'.'+this['mimetype'][_0x23ecbd(0x1b2)]('/')[0x1]):![];}};module[_0x3f437b(0x1a8)]=ReplyMessage;