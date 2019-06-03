var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'wrapper'])
Z([3,'date-weekday'])
Z([3,'5月29日'])
Z([3,'星期三'])
Z([3,'title'])
Z([3,'Today'])
Z([3,'true'])
Z(z[7])
Z([3,'swiper-banner'])
Z(z[7])
Z([3,'3000'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'bannerData']])
Z([3,'id'])
Z([[6],[[7],[3,'item']],[3,'isShow']])
Z([3,'swiper-item'])
Z([3,'_img'])
Z([3,'aspectFit'])
Z([[6],[[7],[3,'item']],[3,'image']])
Z(z[5])
Z([3,'近期热门'])
Z([3,'recent-hot'])
Z(z[7])
Z([3,'__i0__'])
Z(z[13])
Z([[7],[3,'hotData']])
Z(z[15])
Z([3,'scroll-view-item'])
Z([3,'cover'])
Z(z[18])
Z(z[19])
Z([[6],[[7],[3,'item']],[3,'cover']])
Z([3,'name'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'score'])
Z([a,[[2,'+'],[[6],[[7],[3,'item']],[3,'score']],[1,'分']]])
Z(z[5])
Z([3,'最新预告'])
Z([3,'new-trailer'])
Z(z[12])
Z(z[13])
Z([[7],[3,'trailerData']])
Z(z[15])
Z([[2,'<'],[[7],[3,'index']],[1,2]])
Z([3,'video-item'])
Z([[6],[[7],[3,'item']],[3,'trailer']])
Z(z[5])
Z([3,'猜你喜欢'])
Z([3,'uLike-film'])
Z([3,'__i1__'])
Z(z[13])
Z([[7],[3,'uLikeData']])
Z(z[15])
Z([3,'uLike-film-item'])
Z([3,'film-cover'])
Z(z[18])
Z(z[19])
Z(z[33])
Z([3,'film-info'])
Z(z[34])
Z([a,z[35][1]])
Z([3,'original-name'])
Z([a,[[6],[[7],[3,'item']],[3,'originalName']]])
Z([3,'tags'])
Z([a,[[6],[[7],[3,'item']],[3,'basicInfo']]])
Z([3,'time'])
Z([a,[[6],[[7],[3,'item']],[3,'releaseDate']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'header'])
Z([3,'user'])
Z([3,'avatar'])
Z([3,'scaleToFill'])
Z([3,'../../static/default_avatar.jpg'])
Z([3,'info'])
Z([3,'注册/登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'wrapper'])
Z([3,'title'])
Z([3,'搜索'])
Z([3,'search-bar'])
Z([3,'search-input'])
Z([3,'search'])
Z([3,'请输入关键词'])
Z([3,'sub-title'])
Z([3,'热门搜索'])
Z([3,'hot-search _ul'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'searchData']])
Z([3,'id'])
Z([3,'_li'])
Z([a,[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'name']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/index/index.wxml','./pages/me/me.wxml','./pages/search/search.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
cs.push("./pages/index/index.wxml:view:1:1")
var oB=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/index/index.wxml:view:1:38")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/index/index.wxml:text:1:65")
var oD=_n('text')
var fE=_oz(z,3,e,s,gg)
_(oD,fE)
cs.pop()
_(xC,oD)
cs.push("./pages/index/index.wxml:text:1:87")
var cF=_n('text')
var hG=_oz(z,4,e,s,gg)
_(cF,hG)
cs.pop()
_(xC,cF)
cs.pop()
_(oB,xC)
cs.push("./pages/index/index.wxml:view:1:116")
var oH=_n('view')
_rz(z,oH,'class',5,e,s,gg)
var cI=_oz(z,6,e,s,gg)
_(oH,cI)
cs.pop()
_(oB,oH)
cs.push("./pages/index/index.wxml:swiper:1:148")
var oJ=_mz(z,'swiper',['autoplay',7,'circular',1,'class',2,'indicatorDots',3,'interval',4],[],e,s,gg)
var lK=_v()
_(oJ,lK)
cs.push("./pages/index/index.wxml:block:1:248")
var aL=function(eN,tM,bO,gg){
cs.push("./pages/index/index.wxml:block:1:248")
var xQ=_v()
_(bO,xQ)
if(_oz(z,16,eN,tM,gg)){xQ.wxVkey=1
cs.push("./pages/index/index.wxml:block:1:331")
cs.push("./pages/index/index.wxml:swiper-item:1:362")
var oR=_n('swiper-item')
cs.push("./pages/index/index.wxml:view:1:375")
var fS=_n('view')
_rz(z,fS,'class',17,eN,tM,gg)
cs.push("./pages/index/index.wxml:image:1:401")
var cT=_mz(z,'image',['alt',-1,'class',18,'mode',1,'src',2],[],eN,tM,gg)
cs.pop()
_(fS,cT)
cs.pop()
_(oR,fS)
cs.pop()
_(xQ,oR)
cs.pop()
}
xQ.wxXCkey=1
cs.pop()
return bO
}
lK.wxXCkey=2
_2z(z,14,aL,e,s,gg,lK,'item','index','id')
cs.pop()
cs.pop()
_(oB,oJ)
cs.push("./pages/index/index.wxml:view:1:517")
var hU=_n('view')
_rz(z,hU,'class',21,e,s,gg)
var oV=_oz(z,22,e,s,gg)
_(hU,oV)
cs.pop()
_(oB,hU)
cs.push("./pages/index/index.wxml:scroll-view:1:556")
var cW=_mz(z,'scroll-view',['class',23,'scrollX',1],[],e,s,gg)
var oX=_v()
_(cW,oX)
cs.push("./pages/index/index.wxml:block:1:604")
var lY=function(t1,aZ,e2,gg){
cs.push("./pages/index/index.wxml:block:1:604")
cs.push("./pages/index/index.wxml:view:1:685")
var o4=_n('view')
_rz(z,o4,'class',29,t1,aZ,gg)
cs.push("./pages/index/index.wxml:view:1:716")
var x5=_n('view')
_rz(z,x5,'class',30,t1,aZ,gg)
cs.push("./pages/index/index.wxml:image:1:736")
var o6=_mz(z,'image',['alt',-1,'class',31,'mode',1,'src',2],[],t1,aZ,gg)
cs.pop()
_(x5,o6)
cs.pop()
_(o4,x5)
cs.push("./pages/index/index.wxml:view:1:813")
var f7=_n('view')
_rz(z,f7,'class',34,t1,aZ,gg)
var c8=_oz(z,35,t1,aZ,gg)
_(f7,c8)
cs.pop()
_(o4,f7)
cs.push("./pages/index/index.wxml:view:1:852")
var h9=_n('view')
_rz(z,h9,'class',36,t1,aZ,gg)
var o0=_oz(z,37,t1,aZ,gg)
_(h9,o0)
cs.pop()
_(o4,h9)
cs.pop()
_(e2,o4)
cs.pop()
return e2
}
oX.wxXCkey=2
_2z(z,27,lY,e,s,gg,oX,'item','__i0__','id')
cs.pop()
cs.pop()
_(oB,cW)
cs.push("./pages/index/index.wxml:view:1:928")
var cAB=_n('view')
_rz(z,cAB,'class',38,e,s,gg)
var oBB=_oz(z,39,e,s,gg)
_(cAB,oBB)
cs.pop()
_(oB,cAB)
cs.push("./pages/index/index.wxml:view:1:967")
var lCB=_n('view')
_rz(z,lCB,'class',40,e,s,gg)
var aDB=_v()
_(lCB,aDB)
cs.push("./pages/index/index.wxml:block:1:993")
var tEB=function(bGB,eFB,oHB,gg){
cs.push("./pages/index/index.wxml:block:1:993")
var oJB=_v()
_(oHB,oJB)
if(_oz(z,45,bGB,eFB,gg)){oJB.wxVkey=1
cs.push("./pages/index/index.wxml:block:1:1077")
cs.push("./pages/index/index.wxml:video:1:1104")
var fKB=_mz(z,'video',['class',46,'src',1],[],bGB,eFB,gg)
cs.pop()
_(oJB,fKB)
cs.pop()
}
oJB.wxXCkey=1
cs.pop()
return oHB
}
aDB.wxXCkey=2
_2z(z,43,tEB,e,s,gg,aDB,'item','index','id')
cs.pop()
cs.pop()
_(oB,lCB)
cs.push("./pages/index/index.wxml:view:1:1184")
var cLB=_n('view')
_rz(z,cLB,'class',48,e,s,gg)
var hMB=_oz(z,49,e,s,gg)
_(cLB,hMB)
cs.pop()
_(oB,cLB)
cs.push("./pages/index/index.wxml:view:1:1223")
var oNB=_n('view')
_rz(z,oNB,'class',50,e,s,gg)
var cOB=_v()
_(oNB,cOB)
cs.push("./pages/index/index.wxml:block:1:1248")
var oPB=function(aRB,lQB,tSB,gg){
cs.push("./pages/index/index.wxml:block:1:1248")
cs.push("./pages/index/index.wxml:view:1:1331")
var bUB=_n('view')
_rz(z,bUB,'class',55,aRB,lQB,gg)
cs.push("./pages/index/index.wxml:view:1:1361")
var oVB=_n('view')
_rz(z,oVB,'class',56,aRB,lQB,gg)
cs.push("./pages/index/index.wxml:image:1:1386")
var xWB=_mz(z,'image',['alt',-1,'class',57,'mode',1,'src',2],[],aRB,lQB,gg)
cs.pop()
_(oVB,xWB)
cs.pop()
_(bUB,oVB)
cs.push("./pages/index/index.wxml:view:1:1463")
var oXB=_n('view')
_rz(z,oXB,'class',60,aRB,lQB,gg)
cs.push("./pages/index/index.wxml:view:1:1487")
var fYB=_n('view')
_rz(z,fYB,'class',61,aRB,lQB,gg)
var cZB=_oz(z,62,aRB,lQB,gg)
_(fYB,cZB)
cs.pop()
_(oXB,fYB)
cs.push("./pages/index/index.wxml:view:1:1526")
var h1B=_n('view')
_rz(z,h1B,'class',63,aRB,lQB,gg)
var o2B=_oz(z,64,aRB,lQB,gg)
_(h1B,o2B)
cs.pop()
_(oXB,h1B)
cs.push("./pages/index/index.wxml:view:1:1582")
var c3B=_n('view')
_rz(z,c3B,'class',65,aRB,lQB,gg)
var o4B=_oz(z,66,aRB,lQB,gg)
_(c3B,o4B)
cs.pop()
_(oXB,c3B)
cs.push("./pages/index/index.wxml:view:1:1626")
var l5B=_n('view')
_rz(z,l5B,'class',67,aRB,lQB,gg)
var a6B=_oz(z,68,aRB,lQB,gg)
_(l5B,a6B)
cs.pop()
_(oXB,l5B)
cs.pop()
_(bUB,oXB)
cs.pop()
_(tSB,bUB)
cs.pop()
return tSB
}
cOB.wxXCkey=2
_2z(z,53,oPB,e,s,gg,cOB,'item','__i1__','id')
cs.pop()
cs.pop()
_(oB,oNB)
cs.pop()
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
cs.push("./pages/me/me.wxml:view:1:1")
var e8B=_n('view')
_rz(z,e8B,'bind:__l',0,e,s,gg)
cs.push("./pages/me/me.wxml:view:1:22")
var b9B=_n('view')
_rz(z,b9B,'class',1,e,s,gg)
cs.pop()
_(e8B,b9B)
cs.push("./pages/me/me.wxml:view:1:50")
var o0B=_n('view')
_rz(z,o0B,'class',2,e,s,gg)
cs.push("./pages/me/me.wxml:image:1:69")
var xAC=_mz(z,'image',['class',3,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(o0B,xAC)
cs.push("./pages/me/me.wxml:view:1:156")
var oBC=_n('view')
_rz(z,oBC,'class',6,e,s,gg)
cs.push("./pages/me/me.wxml:text:1:175")
var fCC=_n('text')
var cDC=_oz(z,7,e,s,gg)
_(fCC,cDC)
cs.pop()
_(oBC,fCC)
cs.pop()
_(o0B,oBC)
cs.pop()
_(e8B,o0B)
cs.pop()
_(r,e8B)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
cs.push("./pages/search/search.wxml:view:1:1")
var oFC=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/search/search.wxml:view:1:38")
var cGC=_n('view')
_rz(z,cGC,'class',2,e,s,gg)
var oHC=_oz(z,3,e,s,gg)
_(cGC,oHC)
cs.pop()
_(oFC,cGC)
cs.push("./pages/search/search.wxml:view:1:71")
var lIC=_n('view')
_rz(z,lIC,'class',4,e,s,gg)
cs.push("./pages/search/search.wxml:input:1:96")
var aJC=_mz(z,'input',['focus',-1,'class',5,'confirmType',1,'placeholder',2],[],e,s,gg)
cs.pop()
_(lIC,aJC)
cs.pop()
_(oFC,lIC)
cs.push("./pages/search/search.wxml:view:1:193")
var tKC=_n('view')
_rz(z,tKC,'class',8,e,s,gg)
var eLC=_oz(z,9,e,s,gg)
_(tKC,eLC)
cs.pop()
_(oFC,tKC)
cs.push("./pages/search/search.wxml:view:1:236")
var bMC=_n('view')
_rz(z,bMC,'class',10,e,s,gg)
var oNC=_v()
_(bMC,oNC)
cs.push("./pages/search/search.wxml:block:1:265")
var xOC=function(fQC,oPC,cRC,gg){
cs.push("./pages/search/search.wxml:block:1:265")
cs.push("./pages/search/search.wxml:view:1:348")
var oTC=_n('view')
_rz(z,oTC,'class',15,fQC,oPC,gg)
var cUC=_oz(z,16,fQC,oPC,gg)
_(oTC,cUC)
cs.pop()
_(cRC,oTC)
cs.pop()
return cRC
}
oNC.wxXCkey=2
_2z(z,13,xOC,e,s,gg,oNC,'item','index','id')
cs.pop()
cs.pop()
_(oFC,bMC)
cs.pop()
_(r,oFC)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"_ul, .",[1],"_li { margin: 0; padding: 0; list-style: none; }\n.",[1],"wrapper { padding-top: ",[0,40],"; }\n.",[1],"title { margin: ",[0,30]," ",[0,20]," ",[0,20]," ",[0,20],"; font-weight: bold; font-size: ",[0,40],"; }\n.",[1],"sub-title { margin: ",[0,20],"; font-weight: bold; font-size: ",[0,32],"; }\n.",[1],"wrapper { padding-bottom: ",[0,20],"; }\n.",[1],"_img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }\n.",[1],"date-weekday { margin: ",[0,20],"; color: #999; font-size: ",[0,28],"; }\n.",[1],"swiper-banner { width: 100%; height: ",[0,440],"; background-color: aliceblue; }\n.",[1],"swiper-banner .",[1],"swiper-item { position: relative; width: 100%; height: 100%; }\n.",[1],"recent-hot { width: 100%; white-space: nowrap; }\n.",[1],"recent-hot .",[1],"scroll-view-item { display: inline-block; margin-left: ",[0,20],"; width: ",[0,200],"; text-align: center; }\n.",[1],"recent-hot .",[1],"scroll-view-item:last-child { margin-right: ",[0,20],"; }\n.",[1],"recent-hot .",[1],"cover { position: relative; width: ",[0,200],"; height: ",[0,270],"; background-color: aliceblue; }\n.",[1],"recent-hot .",[1],"name { width: ",[0,200],"; line-height: ",[0,40],"; margin-top: ",[0,10],"; font-size: ",[0,28],"; font-weight: bold; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; text-align: left; }\n.",[1],"recent-hot .",[1],"score { line-height: ",[0,32],"; font-size: ",[0,24],"; color: #999; text-align: left; }\n.",[1],"new-trailer { padding: 0 ",[0,10],"; }\n.",[1],"new-trailer .",[1],"video-item { position: relative; display: inline-block; margin: 0 ",[0,10],"; width: ",[0,345],"; height: ",[0,220],"; background-color: #F0F8FF; }\n.",[1],"uLike-film { padding: 0 ",[0,20],"; }\n.",[1],"uLike-film .",[1],"uLike-film-item { position: relative; margin-bottom: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"uLike-film .",[1],"film-cover { position: relative; width: ",[0,200],"; height: ",[0,270],"; background-color: #F0F8FF; border-radius: ",[0,10],"; }\n.",[1],"uLike-film .",[1],"film-info { margin: ",[0,20]," 0; padding-left: ",[0,20],"; width: ",[0,492],"; height: ",[0,224],"; border: ",[0,2]," solid #f5f5f5; border-left: none; border-top-right-radius: ",[0,10],"; border-bottom-right-radius: ",[0,10],"; }\n.",[1],"uLike-film .",[1],"name { margin: ",[0,20]," 0 ",[0,10]," 0; font-size: ",[0,36],"; color: #000; }\n.",[1],"uLike-film .",[1],"original-name { margin-bottom: ",[0,6],"; font-size: ",[0,28],"; }\n.",[1],"uLike-film .",[1],"tags { margin-bottom: ",[0,6],"; font-size: ",[0,28],"; color: #999; }\n.",[1],"uLike-film .",[1],"time { font-size: ",[0,28],"; color: #999; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/me/me.wxss']=setCssToHead([".",[1],"header { width: 100%; height: ",[0,300],"; background-image: url(data:image/png;base64,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\x3d); background-size: cover; }\n.",[1],"user { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-top: ",[0,-100],"; padding: 0 ",[0,20],"; height: ",[0,100],"; }\n.",[1],"user .",[1],"avatar { width: ",[0,200],"; height: ",[0,200],"; border-radius: 50%; -webkit-box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3); box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3); overflow: hidden; }\n.",[1],"user .",[1],"info { padding-left: ",[0,60],"; width: ",[0,450],"; height: ",[0,200],"; line-height: ",[0,100],"; font-size: ",[0,36],"; }\n",],undefined,{path:"./pages/me/me.wxss"});    
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/search/search.wxss']=setCssToHead([".",[1],"_ul, .",[1],"_li { margin: 0; padding: 0; list-style: none; }\n.",[1],"wrapper { padding-top: ",[0,40],"; }\n.",[1],"title { margin: ",[0,30]," ",[0,20]," ",[0,20]," ",[0,20],"; font-weight: bold; font-size: ",[0,40],"; }\n.",[1],"sub-title { margin: ",[0,20],"; font-weight: bold; font-size: ",[0,32],"; }\n.",[1],"search-bar { margin: ",[0,10]," ",[0,20]," ",[0,100]," ",[0,20],"; padding: ",[0,10]," ",[0,20],"; background-color: aliceblue; border-radius: ",[0,10],"; font-size: ",[0,32],"; }\n.",[1],"search-bar .",[1],"search-input { height: ",[0,60],"; }\n.",[1],"hot-search { margin-top: ",[0,0],"; padding: 0 ",[0,20],"; }\n.",[1],"hot-search .",[1],"_li { height: ",[0,80],"; line-height: ",[0,80],"; border-bottom: ",[0,2]," solid #f5f5f5; color: #515151; font-size: ",[0,32],"; }\n",],undefined,{path:"./pages/search/search.wxss"});    
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
