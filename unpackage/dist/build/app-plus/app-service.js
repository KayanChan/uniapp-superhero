var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'bannerData']])
Z([3,'id'])
Z([[6],[[7],[3,'item']],[3,'isShow']])
Z(z[2])
Z(z[3])
Z([[7],[3,'trailerData']])
Z(z[5])
Z([[2,'<'],[[7],[3,'index']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
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
var xC=_v()
_(oB,xC)
cs.push("./pages/index/index.wxml:block:1:248")
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
if(_oz(z,6,cF,fE,gg)){cI.wxVkey=1
cs.push("./pages/index/index.wxml:block:1:331")
cs.pop()
}
cI.wxXCkey=1
return hG
}
xC.wxXCkey=2
_2z(z,4,oD,e,s,gg,xC,'item','index','id')
cs.pop()
var oJ=_v()
_(oB,oJ)
cs.push("./pages/index/index.wxml:block:1:993")
var lK=function(tM,aL,eN,gg){
var oP=_v()
_(eN,oP)
if(_oz(z,11,tM,aL,gg)){oP.wxVkey=1
cs.push("./pages/index/index.wxml:block:1:1077")
cs.pop()
}
oP.wxXCkey=1
return eN
}
oJ.wxXCkey=2
_2z(z,9,lK,e,s,gg,oJ,'item','index','id')
cs.pop()
cs.pop()
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/search/search","pages/me/me"],"subPackages":[],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"tabBar":{"selectedColor":"#515151","color":"#999","list":[{"pagePath":"pages/index/index","iconPath":"static/index.png","selectedIconPath":"static/indexHL.png","text":"首页"},{"pagePath":"pages/search/search","iconPath":"static/search.png","selectedIconPath":"static/searchHL.png","text":"搜索"},{"pagePath":"pages/me/me","iconPath":"static/me.png","selectedIconPath":"static/meHL.png","text":"我的"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uniapp-superhero","compilerVersion":"1.9.9","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"首页","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/me/me.json']={"navigationBarTitleText":"我的","usingComponents":{}};
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/search/search.json']={"navigationBarTitleText":"搜索","usingComponents":{}};
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"32f4":function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={onLaunch:function(){console.log("App Launch"," at App.vue:4")},onShow:function(){console.log("App Show"," at App.vue:7")},onHide:function(){console.log("App Hide"," at App.vue:10")}};o.default=t},"6fec":function(n,o,e){"use strict";var t=e("f1fc"),u=e.n(t);u.a},"90ac":function(n,o,e){"use strict";e.r(o);var t=e("32f4"),u=e.n(t);for(var c in t)"default"!==c&&function(n){e.d(o,n,function(){return t[n]})}(c);o["default"]=u.a},adef:function(n,o,e){"use strict";e.r(o);var t=e("90ac");for(var u in t)"default"!==u&&function(n){e.d(o,n,function(){return t[n]})}(u);e("6fec");var c,a,f=e("2877"),l=Object(f["a"])(t["default"],c,a,!1,null,null,null);o["default"]=l.exports},f1fc:function(n,o,e){}},[["1a27","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"04e8":function(e,t,r){"use strict";(function(e){r("2983");n(r("66fd"));var t=n(r("02b9"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},"1a27":function(e,t,r){"use strict";(function(e){r("2983");var t=o(r("66fd")),n=o(r("adef"));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default.config.productionTip=!1,n.default.mpType="app";var s=new t.default(i({},n.default));e(s).$mount()}).call(this,r("6e42")["createApp"])},"1f69":function(e,t,r){"use strict";e.exports={status:200,msg:"OK",data:[{id:"marvel-1022",name:"蜘蛛侠：英雄归来",poster:"http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/poster.png",cover:"http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/cover.png",trailer:"http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/trailer.mp4",score:7.9,prisedCounts:9980,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Spider-Man: Homecoming",releaseDate:"上映时间：2017-09-08(中国大陆) ",totalTime:"影片时长：133分钟",plotDesc:"彼得帕克（汤姆·赫兰德 Tom Holland 饰）在内战后受到了钢铁侠托尼斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰）的赏识，表面上，彼得进入托尼的公司成为了一名实习生，实际上，他和复仇者联盟的成员们一起接受了各种各样的训练。托尼虽然欣赏彼得的勇敢和正直，却并不认为他目前已经拥有加入复联的实力，他派出了特工哈皮（乔恩·费儒 Jon Favreau 饰）暗中观察，这让十分想证明自己的彼得感到万分焦躁",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/1.png","http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/2.png","http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/3.png","http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/4.png","http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/5.png","http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/6.png","http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/7.png","http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/8.png"]',createTime:"2017-09-08T07:40:37.000+0000"},{id:"marvel-1010",name:"美国队长3：内战",poster:"http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica3/poster.png",cover:"http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica3/cover.png",trailer:"http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica3/trailer.mp4",score:7.1,prisedCounts:5364,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Civil War",releaseDate:"上映时间：2016-05-06(中国大陆/美国)",totalTime:"影片时长：148分钟",plotDesc:"美国队长史蒂夫·罗杰斯（克里斯·埃文斯 Chris Evans 饰）带领着全新组建的复仇者联盟，继续维护世界和平。然而，一次执行任务时联盟成员不小心造成大量平民伤亡，从而激发政治压力，政府决定通过一套监管系统来管理和领导复仇者联盟。联盟内部因此分裂为两派：一方由史蒂夫· 罗杰斯领导，他主张维护成员自由，在免受政府干扰的情况下保护世界；另一方则追随托尼·斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰），他令人意外地决定支持政府的监管和责任制体系。神秘莫测的巴基（塞巴斯蒂安·斯坦 Sebastian Stan 饰）似乎成为内战的关键人物…",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica3/photos/1.png","http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica3/photos/2.png","http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica3/photos/3.png","http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica3/photos/4.png","http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica3/photos/5.png"]',createTime:"2016-05-06T07:40:37.000+0000"},{id:"marvel-1011",name:"惊奇队长",poster:"http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/poster.png",cover:"http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.png",trailer:"http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/trailer.mp4",score:0,prisedCounts:555,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Captain Marvel",releaseDate:"上映时间：2019-03-08(美国)",totalTime:"影片时长：未知",plotDesc:"漫画中的初代“惊奇女士”原名Carol Danvers，她曾经是一名美国空军情报局探员，暗恋惊奇先生。此后她得到了超能力，成为“惊奇女士”，在漫画中是非常典型的女性英雄人物。 ",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/photos/1.png","http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/photos/2.png","http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/photos/3.png","http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/photos/4.png","http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/photos/5.png"]',createTime:"2019-03-08T07:40:37.000+0000"},{id:"xman-1006",name:"X战警：死侍2",poster:"http://122.152.205.72:88/superhero/xman/Deadpool2/poster.png",cover:"http://122.152.205.72:88/superhero/xman/Deadpool2/cover.png",trailer:"http://122.152.205.72:88/superhero/xman/Deadpool2/trailer.mp4",score:7.8,prisedCounts:5963,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：xman: Deadpool2",releaseDate:"上映时间：2018-05-18(美国)",totalTime:"影片时长：119分钟",plotDesc:"漫威史上最贱的雇佣兵死侍再度归来！本与女友过着幸福生活的死侍（瑞安·雷诺兹 饰）上门寻仇，美好生活岌岌可危。然而悲惨的日子还没结束，死侍还和想要接纳他的X战警剪不断，理还乱。就在这位平日里插科打诨的英雄人生跌入谷底之时，一位强大的时空穿越者——电索（乔什·布洛林 饰）却盯上了死侍想要保护的少年。为迎强敌，死侍广发英雄帖，临时组建了X特攻队。就凭他们真的能打过这位来自未来的敌人么？",directors:'["s-1001"]',actors:'["s-1002","s-1003","s-1004","s-1005","s-1006"]',plotPics:'["http://122.152.205.72:88/superhero/xman/Deadpool2/photos/1.png","http://122.152.205.72:88/superhero/xman/Deadpool2/photos/2.png","http://122.152.205.72:88/superhero/xman/Deadpool2/photos/3.png","http://122.152.205.72:88/superhero/xman/Deadpool2/photos/4.png","http://122.152.205.72:88/superhero/xman/Deadpool2/photos/5.png"]',createTime:"2018-05-18T07:40:37.000+0000"},{id:"marvel-1004",name:"复仇者联盟2：奥创纪元",poster:"http://122.152.205.72:88/superhero/MARVEL/Avengers2/poster.png",cover:"http://122.152.205.72:88/superhero/MARVEL/Avengers2/cover.png",trailer:"http://122.152.205.72:88/superhero/MARVEL/Avengers2/trailer.mp4",score:8.2,prisedCounts:7451,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Avengers: Age of Ultron2",releaseDate:"上映时间：2015-05-12(中国大陆)",totalTime:"影片时长：142分钟",plotDesc:"托尼·斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰）试图重启一个已经废弃的维和项目，不料该项目却成为危机导火索。世上最强大的超级英雄——钢铁侠、美国队长（克里斯·埃文斯 Chris Evans 饰）、雷神（克里斯·海姆斯沃斯 Chris Hemsworth 饰）、绿巨人（马克·鲁弗洛 Mark Ruffalo 饰）、黑寡妇（斯嘉丽·约翰逊 Scarlett Johansson 饰）和鹰眼（杰瑞米·雷纳 Jeremy Renner 饰），不得不接受终极考验，拯救危在旦夕的地球。神秘反派奥创（詹姆斯·斯派德 James Spader 配音）逐渐崛起，超级英雄们必须重新集结，竭力阻止奥创实施人类灭绝计划。战斗中，复仇者联盟成员们还遇到了两个新人物——旺达·马克西莫夫（伊丽莎白·奥尔森 Elizabeth Olsen 饰）和皮特罗·马克西莫夫（亚伦·泰勒-约翰逊 Aaron Taylor-Johnson 饰），以及以全新面目归来的老朋友——幻视（保罗·贝坦尼 Paul Bettany 饰）。 ",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/MARVEL/Avengers2/photos/1.png","http://122.152.205.72:88/superhero/MARVEL/Avengers2/photos/2.png","http://122.152.205.72:88/superhero/MARVEL/Avengers2/photos/3.png","http://122.152.205.72:88/superhero/MARVEL/Avengers2/photos/4.png","http://122.152.205.72:88/superhero/MARVEL/Avengers2/photos/5.png","http://122.152.205.72:88/superhero/MARVEL/Avengers2/photos/6.png","http://122.152.205.72:88/superhero/MARVEL/Avengers2/photos/7.png","http://122.152.205.72:88/superhero/MARVEL/Avengers2/photos/8.png"]',createTime:"2015-05-12T07:40:37.000+0000"}]}},"212e":function(e,t,r){"use strict";(function(e){r("2983");n(r("66fd"));var t=n(r("aa5d"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},2877:function(e,t,r){"use strict";function n(e,t,r,n,o,i,a,s){var p,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=p):o&&(p=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),p)if(c.functional){c._injectStyles=p;var u=c.render;c.render=function(e,t){return p.call(t),u(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,p):[p]}return{exports:e,options:c}}r.d(t,"a",function(){return n})},2983:function(e,t,r){},"45c5":function(e,t,r){"use strict";e.exports={status:200,msg:"OK",data:[{id:"dc-1004",name:"蝙蝠侠:黑暗骑士崛起",poster:"http://122.152.205.72:88/superhero/DC/BatManTheDarkKnightRises/poster.jpg",cover:"http://122.152.205.72:88/superhero/DC/BatManTheDarkKnightRises/cover.jpg",trailer:"http://122.152.205.72:88/superhero/DC/BatManTheDarkKnightRises/trailer.mp4",score:9.1,prisedCounts:7561,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：The Dark Knight‎ Rises ",releaseDate:"上映时间：2012-08-27(中国大陆)",totalTime:"影片时长：165分钟(中国大陆)",plotDesc:"检察官哈维·登特（艾伦·艾克哈特 Aaron Eckhart 饰）死后的八年间，哥谭市在戈登警长（加里·奥德曼 Gary Oldman 饰）的努力下有效地遏制了犯罪活动。而蝙蝠侠布鲁斯·韦恩（克里斯蒂安·贝尔 Christian Bale 饰）因为背负谋杀登特的罪名，被 警方通缉，在哥谭市销声匿迹。然而，这看似平静的状态被恐怖分子贝恩（汤姆·哈迪 Tom Hardy 饰）的出现打破，他利用猫女（安妮·海瑟薇 Anne Hathaway 饰）偷取布鲁斯的指纹，致使韦恩集团面临破财，布鲁斯被赶出董事会。为了保证韦恩集团投资的能源项目不被坏人利用制造核弹，布鲁斯帮助米兰达（玛丽昂·歌迪亚 Marion Cotillard 饰）成为董事会主席。贝恩接下来一连串精密设计的计划将哥谭市陷入孤绝之境，毁灭之日指日可待。布鲁斯只能再次肩负起拯救哥谭的重任，然而至亲的管家阿福辞职离开、猫女的背叛、贝恩的凶残手段，爱人米拉达的真实面目露出，都让他拯救哥谭的行动变得不可能…",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/DC/BatManTheDarkKnightRises/photos/1.jpg","http://122.152.205.72:88/superhero/DC/BatManTheDarkKnightRises/photos/2.jpg","http://122.152.205.72:88/superhero/DC/BatManTheDarkKnightRises/photos/3.jpg","http://122.152.205.72:88/superhero/DC/BatManTheDarkKnightRises/photos/4.jpg","http://122.152.205.72:88/superhero/DC/BatManTheDarkKnightRises/photos/5.jpg","http://122.152.205.72:88/superhero/DC/BatManTheDarkKnightRises/photos/6.jpg"]',createTime:"2012-08-27T07:40:37.000+0000"},{id:"marvel-1026",name:"毒液：致命守护者",poster:"http://122.152.205.72:88/superhero/MARVEL/Venom/poster.png",cover:"http://122.152.205.72:88/superhero/MARVEL/Venom/cover.png",trailer:"http://122.152.205.72:88/superhero/MARVEL/Venom/trailer.mp4",score:8.9,prisedCounts:7892,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Venom",releaseDate:"上映时间：2018-11-09(中国大陆)",totalTime:"影片时长：112分钟",plotDesc:"艾迪（汤姆·哈迪 Tom Hardy 饰）是一位深受观众喜爱的新闻记者，和女友安妮（米歇尔·威廉姆斯 Michelle Williams 饰）相恋多年，彼此之间感情十分要好。安妮是一名律师，接手了生命基金会的案件，在女友的邮箱里，艾迪发现了基金会老板德雷克（里兹·阿迈德 Riz Ahmed 饰）不为人知的秘密。为此，艾迪不仅丢了工作，女友也离他而去",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/MARVEL/Venom/photos/1.png","http://122.152.205.72:88/superhero/MARVEL/Venom/photos/2.png","http://122.152.205.72:88/superhero/MARVEL/Venom/photos/3.png","http://122.152.205.72:88/superhero/MARVEL/Venom/photos/4.png","http://122.152.205.72:88/superhero/MARVEL/Venom/photos/5.png"]',createTime:"2018-11-09T07:40:37.000+0000"},{id:"marvel-1005",name:"复仇者联盟3：无限战争",poster:"http://122.152.205.72:88/superhero/MARVEL/Avengers3/poster.png",cover:"http://122.152.205.72:88/superhero/MARVEL/Avengers3/cover.png",trailer:"http://122.152.205.72:88/superhero/MARVEL/Avengers3/trailer.mp4",score:8.8,prisedCounts:9637,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Avengers: Infinity War ",releaseDate:"上映时间：2018-05-11(中国大陆) ",totalTime:"影片时长：150分钟",plotDesc:"最先与灭霸军团遭遇的雷神索尔一行遭遇惨烈打击，洛基遇害，空间宝石落入灭霸之手。未几，灭霸的先锋部队杀至地球，一番缠斗后掳走奇异博士。为阻止时间宝石落入敌手，斯塔克和蜘蛛侠闯入了敌人的飞船。与此同时，拥有心灵宝石的幻视也遭到外星侵略者的袭击，为此美国队长、黑寡妇等人将其带到瓦坎达王国，向黑豹求助。幸免于难的索尔与星爵一行相逢，随后他们兵分两路。索尔与火箭、格鲁特踏上再铸雷神之锤的旅程，星爵则与卡魔拉等人试图阻止灭霸的恶行。而知晓灵魂宝石下落的卡魔拉，同样是其义父灭霸追踪的对象。 ",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/MARVEL/Avengers3/photos/1.png","http://122.152.205.72:88/superhero/MARVEL/Avengers3/photos/2.png","http://122.152.205.72:88/superhero/MARVEL/Avengers3/photos/3.png","http://122.152.205.72:88/superhero/MARVEL/Avengers3/photos/4.png","http://122.152.205.72:88/superhero/MARVEL/Avengers3/photos/5.png","http://122.152.205.72:88/superhero/MARVEL/Avengers3/photos/6.png"]',createTime:"2018-05-11T07:40:37.000+0000"},{id:"marvel-1016",name:"银河护卫队2",poster:"http://122.152.205.72:88/superhero/MARVEL/GuardiansOfTheGalaxy2/poster.png",cover:"http://122.152.205.72:88/superhero/MARVEL/GuardiansOfTheGalaxy2/cover.png",trailer:"http://122.152.205.72:88/superhero/MARVEL/GuardiansOfTheGalaxy2/trailer.mp4",score:8.7,prisedCounts:8632,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Guardians of the Galaxy Vol. 2",releaseDate:"上映时间：2017-05-05(中国大陆/美国) ",totalTime:"影片时长：136分钟",plotDesc:"火箭浣熊（布莱德利·库珀 Bradley Cooper 饰）偷走了大祭司阿耶莎（伊丽莎白·德比齐 Elizabeth Debicki 饰）的能量电池，包括星爵（克里斯·帕拉特 Chris Pratt 饰）、卡魔拉（佐伊·索尔达娜 Zoe Saldana 饰）、德拉克斯（戴夫·巴蒂斯塔 Dave Bautista 饰）在内的一行人遭到了后者派出的舰队的袭击。一个神秘人物乘坐着飞船救下了银河护卫队的众人，而驾驶着飞船的不是别人，竟然正是星爵的亲生父亲伊戈（库尔特·拉塞尔 Kurt Russell 饰）",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/MARVEL/GuardiansOfTheGalaxy2/photos/1.png","http://122.152.205.72:88/superhero/MARVEL/GuardiansOfTheGalaxy2/photos/2.png","http://122.152.205.72:88/superhero/MARVEL/GuardiansOfTheGalaxy2/photos/3.png","http://122.152.205.72:88/superhero/MARVEL/GuardiansOfTheGalaxy2/photos/4.png","http://122.152.205.72:88/superhero/MARVEL/GuardiansOfTheGalaxy2/photos/5.png"]',createTime:"2017-05-05T07:40:37.000+0000"},{id:"marvel-1018",name:"钢铁侠3",poster:"http://122.152.205.72:88/superhero/MARVEL/IronMan3/poster.png",cover:"http://122.152.205.72:88/superhero/MARVEL/IronMan3/cover.png",trailer:"http://122.152.205.72:88/superhero/MARVEL/IronMan3/trailer.mp4",score:8.7,prisedCounts:7854,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名： Iron Man 3",releaseDate:"上映时间：2013-05-01(中国大陆)",totalTime:"影片时长：134分钟",plotDesc:"自纽约事件以来，托尼·斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰）为前所未有的焦虑症所困扰。他疯狂投入钢铁侠升级版的研发，为此废寝忘食，甚至忽略了女友佩珀·波茨（格温妮斯·帕特洛 Gwyneth Paltrow 饰）的感受。与此同时，臭名昭著的恐怖头目曼达林（本·金斯利 Ben Kingsley 饰）制造了一连串的爆炸袭击事件，托尼当年最忠诚的保镖即在最近的一次袭击中身负重伤。未过多久，托尼、佩珀以及曾与他有过一面之缘的女植物学家玛雅（丽贝卡·豪尔 Rebecca Hall 饰）在家中遭到猛烈的炮火袭击，几乎丧命，而这一切似乎都与22年前那名偶然邂逅的科学家阿尔德里奇·基连（盖·皮尔斯 Guy Pearce 饰）及其终极生物的研究有关",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/MARVEL/IronMan3/photos/1.png","http://122.152.205.72:88/superhero/MARVEL/IronMan3/photos/2.png","http://122.152.205.72:88/superhero/MARVEL/IronMan3/photos/3.png","http://122.152.205.72:88/superhero/MARVEL/IronMan3/photos/4.png","http://122.152.205.72:88/superhero/MARVEL/IronMan3/photos/5.png"]',createTime:"2013-05-01T07:40:37.000+0000"},{id:"xman-1002",name:"X战警：逆转未来",poster:"http://122.152.205.72:88/superhero/xman/DaysOfFuturePast/poster.png",cover:"http://122.152.205.72:88/superhero/xman/DaysOfFuturePast/cover.png",trailer:"http://122.152.205.72:88/superhero/xman/DaysOfFuturePast/trailer.mp4",score:8.5,prisedCounts:7965,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：xman: Days of Future Past",releaseDate:"上映时间：2014-05-23(美国/中国大陆)",totalTime:"影片时长：131分钟(美国) ",plotDesc:"故事的设定发生在当下，变种人族群遭到了前所未有的毁灭性打击，而这一切的根源是“魔形女”瑞文（詹妮弗·劳伦斯 Jennifer Lawrence 饰）在1973年刺杀了玻利瓦尔·特拉斯克（彼特·丁拉基 Peter Dinklage 饰）。在得知“幻影猫”（艾伦·佩吉 E llen Page 饰）利用穿越时空的能力帮助Blink（范冰冰 饰）等战友逃脱巨型机器人“哨兵”的追杀后，X教授（帕特里克·斯图尔特 Patrick Stewart 饰）和万磁王（伊恩·麦克莱恩 Ian McKellen 饰）达成认同，决定让金刚狼（休·杰克曼 Hugh Jackman 饰）穿越回1973年，找到年轻的X教授（詹姆斯·麦卡沃伊 James McAvoy 饰）和年轻的万磁王（迈克尔·法斯宾德 Michael Fassbender 饰）并说服他们一起阻止魔形女的行动。于是，金刚狼踏上了回到过去的旅程，但是命运会不会发生逆转，任何人都无从知晓",directors:'["s-1011"]',actors:'["s-1017","s-1012","s-1013","s-1014","s-1015"]',plotPics:'["http://122.152.205.72:88/superhero/xman/DaysOfFuturePast/photos/1.png","http://122.152.205.72:88/superhero/xman/DaysOfFuturePast/photos/2.png","http://122.152.205.72:88/superhero/xman/DaysOfFuturePast/photos/3.png","http://122.152.205.72:88/superhero/xman/DaysOfFuturePast/photos/4.png","http://122.152.205.72:88/superhero/xman/DaysOfFuturePast/photos/5.png","http://122.152.205.72:88/superhero/xman/DaysOfFuturePast/photos/6.png"]',createTime:"2014-05-23T07:40:37.000+0000"},{id:"xman-1003",name:"X战警：第一战",poster:"http://122.152.205.72:88/superhero/xman/FirstClass/poster.png",cover:"http://122.152.205.72:88/superhero/xman/FirstClass/cover.png",trailer:"http://122.152.205.72:88/superhero/xman/FirstClass/trailer.mp4",score:8.5,prisedCounts:7965,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：xman: First Class",releaseDate:"上映时间：2011-05-25(纽约首映)",totalTime:"影片时长：132分钟(美国) ",plotDesc:"年轻的X教授查尔斯（詹姆斯·麦卡沃伊 James McAvoy 饰）和万磁王埃里克（迈克尔·法斯宾德 Michael Fassbender 饰）是一对志向相投的好朋友。他们最早发现了自己的超能力，并与其他几个变种人一起在CIA工作。引发埃里克超能力的纳粹战争贩子肖（凯文·贝肯 Kevin Bacon 饰）一直试图挑起核战争，而想方设法挑起美苏两国的矛盾。埃里克和查尔斯一直与肖手下的变种人战斗，努力阻止肖的阴谋。肖怂恿苏联引发古巴导弹危机，查尔斯和埃里克获知消息后，在海湾与肖手下的变种人拉开了对决的一战。最终，肖被查尔斯和埃里克合力消灭。可是，在这个过程中，埃里克逐渐被肖的政治观点影响，与查尔斯产生裂痕。通过海湾的这一战，埃里克和查尔斯最终决裂，一方变成支持人类与变种人和平共存的X教授；另一方坚持通过消灭人类换来变种人兴起的观点，自称万磁王..",directors:'["s-1018"]',actors:'["s-1017","s-1012","s-1013","s-1014","s-1015"]',plotPics:'["http://122.152.205.72:88/superhero/xman/FirstClass/photos/1.png","http://122.152.205.72:88/superhero/xman/FirstClass/photos/2.png","http://122.152.205.72:88/superhero/xman/FirstClass/photos/3.png","http://122.152.205.72:88/superhero/xman/FirstClass/photos/4.png","http://122.152.205.72:88/superhero/xman/FirstClass/photos/5.png","http://122.152.205.72:88/superhero/xman/FirstClass/photos/6.png"]',createTime:"2011-05-25T07:40:37.000+0000"},{id:"xman-1007",name:"金刚狼：殊死一战",poster:"http://122.152.205.72:88/superhero/xman/Logan/poster.png",cover:"http://122.152.205.72:88/superhero/xman/Logan/cover.png",trailer:"http://122.152.205.72:88/superhero/xman/Logan/trailer.mp4",score:8.5,prisedCounts:9631,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：xman: Logan",releaseDate:"上映时间：2017-03-03(中国大陆/美国)",totalTime:"影片时长：123分钟(中国大陆)",plotDesc:"故事发生在2029年，彼时，X战警早已经解散，作为为数不多的仅存的变种人，金刚狼罗根（休·杰克曼 Hugh Jackman 饰）和卡利班（斯戴芬·莫昌特 Stephen Merchant 饰）照顾着年迈的X教授（帕特里克·斯图尔特 Patrick Stewart 饰），由于衰老，X教授已经丧失了对于自己超能力的控制，如果不依赖药物，他的超能力就会失控，在全球范围内制造无法挽回的灾难。不仅如此，金刚狼的自愈能力亦随着时间的流逝逐渐减弱，体能和力量都早已经大不如从前。 ",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/xman/Logan/photos/1.png","http://122.152.205.72:88/superhero/xman/Logan/photos/2.png","http://122.152.205.72:88/superhero/xman/Logan/photos/3.png","http://122.152.205.72:88/superhero/xman/Logan/photos/4.png","http://122.152.205.72:88/superhero/xman/Logan/photos/5.png"]',createTime:"2017-03-03T07:40:37.000+0000"}]}},"66fd":function(e,t,r){"use strict";r.r(t),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var r=Object.freeze({});function n(e){return void 0===e||null===e}function o(e){return void 0!==e&&null!==e}function i(e){return!0===e}function a(e){return!1===e}function s(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function p(e){return null!==e&&"object"===typeof e}var c=Object.prototype.toString;function u(e){return"[object Object]"===c.call(e)}function h(e){return"[object RegExp]"===c.call(e)}function l(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function f(e){return o(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function d(e){return null==e?"":Array.isArray(e)||u(e)&&e.toString===c?JSON.stringify(e,null,2):String(e)}function v(e){var t=parseFloat(e);return isNaN(t)?e:t}function g(e,t){for(var r=Object.create(null),n=e.split(","),o=0;o<n.length;o++)r[n[o]]=!0;return t?function(e){return r[e.toLowerCase()]}:function(e){return r[e]}}g("slot,component",!0);var m=g("key,ref,slot,slot-scope,is");function _(e,t){if(e.length){var r=e.indexOf(t);if(r>-1)return e.splice(r,1)}}var y=Object.prototype.hasOwnProperty;function A(e,t){return y.call(e,t)}function b(e){var t=Object.create(null);return function(r){var n=t[r];return n||(t[r]=e(r))}}var M=/-(\w)/g,$=b(function(e){return e.replace(M,function(e,t){return t?t.toUpperCase():""})}),x=b(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),E=/\B([A-Z])/g,w=b(function(e){return e.replace(E,"-$1").toLowerCase()});function O(e,t){function r(r){var n=arguments.length;return n?n>1?e.apply(t,arguments):e.call(t,r):e.call(t)}return r._length=e.length,r}function D(e,t){return e.bind(t)}var R=Function.prototype.bind?D:O;function V(e,t){t=t||0;var r=e.length-t,n=new Array(r);while(r--)n[r]=e[r+t];return n}function C(e,t){for(var r in t)e[r]=t[r];return e}function L(e){for(var t={},r=0;r<e.length;r++)e[r]&&C(t,e[r]);return t}function T(e,t,r){}var k=function(e,t,r){return!1},S=function(e){return e};function P(e,t){if(e===t)return!0;var r=p(e),n=p(t);if(!r||!n)return!r&&!n&&String(e)===String(t);try{var o=Array.isArray(e),i=Array.isArray(t);if(o&&i)return e.length===t.length&&e.every(function(e,r){return P(e,t[r])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(o||i)return!1;var a=Object.keys(e),s=Object.keys(t);return a.length===s.length&&a.every(function(r){return P(e[r],t[r])})}catch(c){return!1}}function j(e,t){for(var r=0;r<e.length;r++)if(P(e[r],t))return r;return-1}function I(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var N=["component","directive","filter"],F=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:k,isReservedAttr:k,isUnknownElement:k,getTagNamespace:T,parsePlatformTagName:S,mustUseProp:k,async:!0,_lifecycleHooks:F},H=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function U(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function X(e,t,r,n){Object.defineProperty(e,t,{value:r,enumerable:!!n,writable:!0,configurable:!0})}var z=new RegExp("[^"+H.source+".$_\\d]");function G(e){if(!z.test(e)){var t=e.split(".");return function(e){for(var r=0;r<t.length;r++){if(!e)return;e=e[t[r]]}return e}}}var K,J="__proto__"in{},W="undefined"!==typeof window,q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Z=q&&WXEnvironment.platform.toLowerCase(),Q=W&&window.navigator.userAgent.toLowerCase(),Y=Q&&/msie|trident/.test(Q),ee=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),te=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===Z),re=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(W)try{var ne={};Object.defineProperty(ne,"passive",{get:function(){}}),window.addEventListener("test-passive",null,ne)}catch(ro){}var oe=function(){return void 0===K&&(K=!W&&!q&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),K},ie=W&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ae(e){return"function"===typeof e&&/native code/.test(e.toString())}var se,pe="undefined"!==typeof Symbol&&ae(Symbol)&&"undefined"!==typeof Reflect&&ae(Reflect.ownKeys);se="undefined"!==typeof Set&&ae(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ce=T,ue=0,he=function(){this.id=ue++,this.subs=[]};he.prototype.addSub=function(e){this.subs.push(e)},he.prototype.removeSub=function(e){_(this.subs,e)},he.prototype.depend=function(){he.target&&he.target.addDep(this)},he.prototype.notify=function(){var e=this.subs.slice();for(var t=0,r=e.length;t<r;t++)e[t].update()},he.target=null;var le=[];function fe(e){le.push(e),he.target=e}function de(){le.pop(),he.target=le[le.length-1]}var ve=function(e,t,r,n,o,i,a,s){this.tag=e,this.data=t,this.children=r,this.text=n,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},ge={child:{configurable:!0}};ge.child.get=function(){return this.componentInstance},Object.defineProperties(ve.prototype,ge);var me=function(e){void 0===e&&(e="");var t=new ve;return t.text=e,t.isComment=!0,t};function _e(e){return new ve(void 0,void 0,void 0,String(e))}function ye(e){var t=new ve(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var Ae=Array.prototype,be=Object.create(Ae),Me=["push","pop","shift","unshift","splice","sort","reverse"];Me.forEach(function(e){var t=Ae[e];X(be,e,function(){var r=[],n=arguments.length;while(n--)r[n]=arguments[n];var o,i=t.apply(this,r),a=this.__ob__;switch(e){case"push":case"unshift":o=r;break;case"splice":o=r.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var $e=Object.getOwnPropertyNames(be),xe=!0;function Ee(e){xe=e}var we=function(e){this.value=e,this.dep=new he,this.vmCount=0,X(e,"__ob__",this),Array.isArray(e)?(J?Oe(e,be):De(e,be,$e),this.observeArray(e)):this.walk(e)};function Oe(e,t){e.__proto__=t}function De(e,t,r){for(var n=0,o=r.length;n<o;n++){var i=r[n];X(e,i,t[i])}}function Re(e,t){var r;if(p(e)&&!(e instanceof ve))return A(e,"__ob__")&&e.__ob__ instanceof we?r=e.__ob__:xe&&!oe()&&(Array.isArray(e)||u(e))&&Object.isExtensible(e)&&!e._isVue&&(r=new we(e)),t&&r&&r.vmCount++,r}function Ve(e,t,r,n,o){var i=new he,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,p=a&&a.set;s&&!p||2!==arguments.length||(r=e[t]);var c=!o&&Re(r);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):r;return he.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(t)&&Te(t))),t},set:function(t){var n=s?s.call(e):r;t===n||t!==t&&n!==n||s&&!p||(p?p.call(e,t):r=t,c=!o&&Re(t),i.notify())}})}}function Ce(e,t,r){if(Array.isArray(e)&&l(t))return e.length=Math.max(e.length,t),e.splice(t,1,r),r;if(t in e&&!(t in Object.prototype))return e[t]=r,r;var n=e.__ob__;return e._isVue||n&&n.vmCount?r:n?(Ve(n.value,t,r),n.dep.notify(),r):(e[t]=r,r)}function Le(e,t){if(Array.isArray(e)&&l(t))e.splice(t,1);else{var r=e.__ob__;e._isVue||r&&r.vmCount||A(e,t)&&(delete e[t],r&&r.dep.notify())}}function Te(e){for(var t=void 0,r=0,n=e.length;r<n;r++)t=e[r],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Te(t)}we.prototype.walk=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)Ve(e,t[r])},we.prototype.observeArray=function(e){for(var t=0,r=e.length;t<r;t++)Re(e[t])};var ke=B.optionMergeStrategies;function Se(e,t){if(!t)return e;for(var r,n,o,i=pe?Reflect.ownKeys(t):Object.keys(t),a=0;a<i.length;a++)r=i[a],"__ob__"!==r&&(n=e[r],o=t[r],A(e,r)?n!==o&&u(n)&&u(o)&&Se(n,o):Ce(e,r,o));return e}function Pe(e,t,r){return r?function(){var n="function"===typeof t?t.call(r,r):t,o="function"===typeof e?e.call(r,r):e;return n?Se(n,o):o}:t?e?function(){return Se("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function je(e,t){var r=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return r?Ie(r):r}function Ie(e){for(var t=[],r=0;r<e.length;r++)-1===t.indexOf(e[r])&&t.push(e[r]);return t}function Ne(e,t,r,n){var o=Object.create(e||null);return t?C(o,t):o}ke.data=function(e,t,r){return r?Pe(e,t,r):t&&"function"!==typeof t?e:Pe(e,t)},F.forEach(function(e){ke[e]=je}),N.forEach(function(e){ke[e+"s"]=Ne}),ke.watch=function(e,t,r,n){if(e===re&&(e=void 0),t===re&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var o={};for(var i in C(o,e),t){var a=o[i],s=t[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},ke.props=ke.methods=ke.inject=ke.computed=function(e,t,r,n){if(!e)return t;var o=Object.create(null);return C(o,e),t&&C(o,t),o},ke.provide=Pe;var Fe=function(e,t){return void 0===t?e:t};function Be(e,t){var r=e.props;if(r){var n,o,i,a={};if(Array.isArray(r)){n=r.length;while(n--)o=r[n],"string"===typeof o&&(i=$(o),a[i]={type:null})}else if(u(r))for(var s in r)o=r[s],i=$(s),a[i]=u(o)?o:{type:o};else 0;e.props=a}}function He(e,t){var r=e.inject;if(r){var n=e.inject={};if(Array.isArray(r))for(var o=0;o<r.length;o++)n[r[o]]={from:r[o]};else if(u(r))for(var i in r){var a=r[i];n[i]=u(a)?C({from:i},a):{from:a}}else 0}}function Ue(e){var t=e.directives;if(t)for(var r in t){var n=t[r];"function"===typeof n&&(t[r]={bind:n,update:n})}}function Xe(e,t,r){if("function"===typeof t&&(t=t.options),Be(t,r),He(t,r),Ue(t),!t._base&&(t.extends&&(e=Xe(e,t.extends,r)),t.mixins))for(var n=0,o=t.mixins.length;n<o;n++)e=Xe(e,t.mixins[n],r);var i,a={};for(i in e)s(i);for(i in t)A(e,i)||s(i);function s(n){var o=ke[n]||Fe;a[n]=o(e[n],t[n],r,n)}return a}function ze(e,t,r,n){if("string"===typeof r){var o=e[t];if(A(o,r))return o[r];var i=$(r);if(A(o,i))return o[i];var a=x(i);if(A(o,a))return o[a];var s=o[r]||o[i]||o[a];return s}}function Ge(e,t,r,n){var o=t[e],i=!A(r,e),a=r[e],s=qe(Boolean,o.type);if(s>-1)if(i&&!A(o,"default"))a=!1;else if(""===a||a===w(e)){var p=qe(String,o.type);(p<0||s<p)&&(a=!0)}if(void 0===a){a=Ke(n,o,e);var c=xe;Ee(!0),Re(a),Ee(c)}return a}function Ke(e,t,r){if(A(t,"default")){var n=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[r]&&void 0!==e._props[r]?e._props[r]:"function"===typeof n&&"Function"!==Je(t.type)?n.call(e):n}}function Je(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function We(e,t){return Je(e)===Je(t)}function qe(e,t){if(!Array.isArray(t))return We(t,e)?0:-1;for(var r=0,n=t.length;r<n;r++)if(We(t[r],e))return r;return-1}function Ze(e,t,r){fe();try{if(t){var n=t;while(n=n.$parent){var o=n.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(n,e,t,r);if(a)return}catch(ro){Ye(ro,n,"errorCaptured hook")}}}Ye(e,t,r)}finally{de()}}function Qe(e,t,r,n,o){var i;try{i=r?e.apply(t,r):e.call(t),i&&!i._isVue&&f(i)&&!i._handled&&(i.catch(function(e){return Ze(e,n,o+" (Promise/async)")}),i._handled=!0)}catch(ro){Ze(ro,n,o)}return i}function Ye(e,t,r){if(B.errorHandler)try{return B.errorHandler.call(null,e,t,r)}catch(ro){ro!==e&&et(ro,null,"config.errorHandler")}et(e,t,r)}function et(e,t,r){if(!W&&!q||"undefined"===typeof console)throw e;console.error(e)}var tt,rt=[],nt=!1;function ot(){nt=!1;var e=rt.slice(0);rt.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&ae(Promise)){var it=Promise.resolve();tt=function(){it.then(ot),te&&setTimeout(T)}}else if(Y||"undefined"===typeof MutationObserver||!ae(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())tt="undefined"!==typeof setImmediate&&ae(setImmediate)?function(){setImmediate(ot)}:function(){setTimeout(ot,0)};else{var at=1,st=new MutationObserver(ot),pt=document.createTextNode(String(at));st.observe(pt,{characterData:!0}),tt=function(){at=(at+1)%2,pt.data=String(at)}}function ct(e,t){var r;if(rt.push(function(){if(e)try{e.call(t)}catch(ro){Ze(ro,t,"nextTick")}else r&&r(t)}),nt||(nt=!0,tt()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){r=e})}var ut=new se;function ht(e){lt(e,ut),ut.clear()}function lt(e,t){var r,n,o=Array.isArray(e);if(!(!o&&!p(e)||Object.isFrozen(e)||e instanceof ve)){if(e.__ob__){var i=e.__ob__.dep.id;if(t.has(i))return;t.add(i)}if(o){r=e.length;while(r--)lt(e[r],t)}else{n=Object.keys(e),r=n.length;while(r--)lt(e[n[r]],t)}}}var ft=b(function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var r="~"===e.charAt(0);e=r?e.slice(1):e;var n="!"===e.charAt(0);return e=n?e.slice(1):e,{name:e,once:r,capture:n,passive:t}});function dt(e,t){function r(){var e=arguments,n=r.fns;if(!Array.isArray(n))return Qe(n,null,arguments,t,"v-on handler");for(var o=n.slice(),i=0;i<o.length;i++)Qe(o[i],null,e,t,"v-on handler")}return r.fns=e,r}function vt(e,t,r,o,a,s){var p,c,u,h;for(p in e)c=e[p],u=t[p],h=ft(p),n(c)||(n(u)?(n(c.fns)&&(c=e[p]=dt(c,s)),i(h.once)&&(c=e[p]=a(h.name,c,h.capture)),r(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,e[p]=u));for(p in t)n(e[p])&&(h=ft(p),o(h.name,t[p],h.capture))}function gt(e,t,r){var i=t.options.props;if(!n(i)){var a={},s=e.attrs,p=e.props;if(o(s)||o(p))for(var c in i){var u=w(c);mt(a,p,c,u,!0)||mt(a,s,c,u,!1)}return a}}function mt(e,t,r,n,i){if(o(t)){if(A(t,r))return e[r]=t[r],i||delete t[r],!0;if(A(t,n))return e[r]=t[n],i||delete t[n],!0}return!1}function _t(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function yt(e){return s(e)?[_e(e)]:Array.isArray(e)?bt(e):void 0}function At(e){return o(e)&&o(e.text)&&a(e.isComment)}function bt(e,t){var r,a,p,c,u=[];for(r=0;r<e.length;r++)a=e[r],n(a)||"boolean"===typeof a||(p=u.length-1,c=u[p],Array.isArray(a)?a.length>0&&(a=bt(a,(t||"")+"_"+r),At(a[0])&&At(c)&&(u[p]=_e(c.text+a[0].text),a.shift()),u.push.apply(u,a)):s(a)?At(c)?u[p]=_e(c.text+a):""!==a&&u.push(_e(a)):At(a)&&At(c)?u[p]=_e(c.text+a.text):(i(e._isVList)&&o(a.tag)&&n(a.key)&&o(t)&&(a.key="__vlist"+t+"_"+r+"__"),u.push(a)));return u}function Mt(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function $t(e){var t=xt(e.$options.inject,e);t&&(Ee(!1),Object.keys(t).forEach(function(r){Ve(e,r,t[r])}),Ee(!0))}function xt(e,t){if(e){for(var r=Object.create(null),n=pe?Reflect.ownKeys(e):Object.keys(e),o=0;o<n.length;o++){var i=n[o];if("__ob__"!==i){var a=e[i].from,s=t;while(s){if(s._provided&&A(s._provided,a)){r[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in e[i]){var p=e[i].default;r[i]="function"===typeof p?p.call(t):p}else 0}}return r}}function Et(e,t){if(!e||!e.length)return{};for(var r={},n=0,o=e.length;n<o;n++){var i=e[n],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==t&&i.fnContext!==t||!a||null==a.slot)(r.default||(r.default=[])).push(i);else{var s=a.slot,p=r[s]||(r[s]=[]);"template"===i.tag?p.push.apply(p,i.children||[]):p.push(i)}}for(var c in r)r[c].every(wt)&&delete r[c];return r}function wt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Ot(e,t,n){var o,i=Object.keys(t).length>0,a=e?!!e.$stable:!i,s=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&n&&n!==r&&s===n.$key&&!i&&!n.$hasNormal)return n;for(var p in o={},e)e[p]&&"$"!==p[0]&&(o[p]=Dt(t,p,e[p]))}else o={};for(var c in t)c in o||(o[c]=Rt(t,c));return e&&Object.isExtensible(e)&&(e._normalized=o),X(o,"$stable",a),X(o,"$key",s),X(o,"$hasNormal",i),o}function Dt(e,t,r){var n=function(){var e=arguments.length?r.apply(null,arguments):r({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:yt(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return r.proxy&&Object.defineProperty(e,t,{get:n,enumerable:!0,configurable:!0}),n}function Rt(e,t){return function(){return e[t]}}function Vt(e,t){var r,n,i,a,s;if(Array.isArray(e)||"string"===typeof e)for(r=new Array(e.length),n=0,i=e.length;n<i;n++)r[n]=t(e[n],n);else if("number"===typeof e)for(r=new Array(e),n=0;n<e;n++)r[n]=t(n+1,n);else if(p(e))if(pe&&e[Symbol.iterator]){r=[];var c=e[Symbol.iterator](),u=c.next();while(!u.done)r.push(t(u.value,r.length)),u=c.next()}else for(a=Object.keys(e),r=new Array(a.length),n=0,i=a.length;n<i;n++)s=a[n],r[n]=t(e[s],s,n);return o(r)||(r=[]),r._isVList=!0,r}function Ct(e,t,r,n){var o,i=this.$scopedSlots[e];i?(r=r||{},n&&(r=C(C({},n),r)),o=i(r)||t):o=this.$slots[e]||t;var a=r&&r.slot;return a?this.$createElement("template",{slot:a},o):o}function Lt(e){return ze(this.$options,"filters",e,!0)||S}function Tt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function kt(e,t,r,n,o){var i=B.keyCodes[t]||r;return o&&n&&!B.keyCodes[t]?Tt(o,n):i?Tt(i,e):n?w(n)!==t:void 0}function St(e,t,r,n,o){if(r)if(p(r)){var i;Array.isArray(r)&&(r=L(r));var a=function(a){if("class"===a||"style"===a||m(a))i=e;else{var s=e.attrs&&e.attrs.type;i=n||B.mustUseProp(t,s,a)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var p=$(a),c=w(a);if(!(p in i)&&!(c in i)&&(i[a]=r[a],o)){var u=e.on||(e.on={});u["update:"+a]=function(e){r[a]=e}}};for(var s in r)a(s)}else;return e}function Pt(e,t){var r=this._staticTrees||(this._staticTrees=[]),n=r[e];return n&&!t?n:(n=r[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),It(n,"__static__"+e,!1),n)}function jt(e,t,r){return It(e,"__once__"+t+(r?"_"+r:""),!0),e}function It(e,t,r){if(Array.isArray(e))for(var n=0;n<e.length;n++)e[n]&&"string"!==typeof e[n]&&Nt(e[n],t+"_"+n,r);else Nt(e,t,r)}function Nt(e,t,r){e.isStatic=!0,e.key=t,e.isOnce=r}function Ft(e,t){if(t)if(u(t)){var r=e.on=e.on?C({},e.on):{};for(var n in t){var o=r[n],i=t[n];r[n]=o?[].concat(o,i):i}}else;return e}function Bt(e,t,r,n){t=t||{$stable:!r};for(var o=0;o<e.length;o++){var i=e[o];Array.isArray(i)?Bt(i,t,r):i&&(i.proxy&&(i.fn.proxy=!0),t[i.key]=i.fn)}return n&&(t.$key=n),t}function Ht(e,t){for(var r=0;r<t.length;r+=2){var n=t[r];"string"===typeof n&&n&&(e[t[r]]=t[r+1])}return e}function Ut(e,t){return"string"===typeof e?t+e:e}function Xt(e){e._o=jt,e._n=v,e._s=d,e._l=Vt,e._t=Ct,e._q=P,e._i=j,e._m=Pt,e._f=Lt,e._k=kt,e._b=St,e._v=_e,e._e=me,e._u=Bt,e._g=Ft,e._d=Ht,e._p=Ut}function zt(e,t,n,o,a){var s,p=this,c=a.options;A(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var u=i(c._compiled),h=!u;this.data=e,this.props=t,this.children=n,this.parent=o,this.listeners=e.on||r,this.injections=xt(c.inject,o),this.slots=function(){return p.$slots||Ot(e.scopedSlots,p.$slots=Et(n,o)),p.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ot(e.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Ot(e.scopedSlots,this.$slots)),c._scopeId?this._c=function(e,t,r,n){var i=or(s,e,t,r,n,h);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(e,t,r,n){return or(s,e,t,r,n,h)}}function Gt(e,t,n,i,a){var s=e.options,p={},c=s.props;if(o(c))for(var u in c)p[u]=Ge(u,c,t||r);else o(n.attrs)&&Jt(p,n.attrs),o(n.props)&&Jt(p,n.props);var h=new zt(n,p,a,i,e),l=s.render.call(null,h._c,h);if(l instanceof ve)return Kt(l,n,h.parent,s,h);if(Array.isArray(l)){for(var f=yt(l)||[],d=new Array(f.length),v=0;v<f.length;v++)d[v]=Kt(f[v],n,h.parent,s,h);return d}}function Kt(e,t,r,n,o){var i=ye(e);return i.fnContext=r,i.fnOptions=n,t.slot&&((i.data||(i.data={})).slot=t.slot),i}function Jt(e,t){for(var r in t)e[$(r)]=t[r]}Xt(zt.prototype);var Wt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var r=e;Wt.prepatch(r,r)}else{var n=e.componentInstance=Qt(e,$r);n.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var r=t.componentOptions,n=t.componentInstance=e.componentInstance;Or(n,r.propsData,r.listeners,t,r.children)},insert:function(e){var t=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,Cr(r,"mounted")),e.data.keepAlive&&(t._isMounted?Ur(r):Rr(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Vr(t,!0):t.$destroy())}},qt=Object.keys(Wt);function Zt(e,t,r,a,s){if(!n(e)){var c=r.$options._base;if(p(e)&&(e=c.extend(e)),"function"===typeof e){var u;if(n(e.cid)&&(u=e,e=dr(u,c),void 0===e))return fr(u,t,r,a,s);t=t||{},fn(e),o(t.model)&&tr(e.options,t);var h=gt(t,e,s);if(i(e.options.functional))return Gt(e,h,t,r,a);var l=t.on;if(t.on=t.nativeOn,i(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}Yt(t);var d=e.options.name||s,v=new ve("vue-component-"+e.cid+(d?"-"+d:""),t,void 0,void 0,void 0,r,{Ctor:e,propsData:h,listeners:l,tag:s,children:a},u);return v}}}function Qt(e,t){var r={_isComponent:!0,_parentVnode:e,parent:t},n=e.data.inlineTemplate;return o(n)&&(r.render=n.render,r.staticRenderFns=n.staticRenderFns),new e.componentOptions.Ctor(r)}function Yt(e){for(var t=e.hook||(e.hook={}),r=0;r<qt.length;r++){var n=qt[r],o=t[n],i=Wt[n];o===i||o&&o._merged||(t[n]=o?er(i,o):i)}}function er(e,t){var r=function(r,n){e(r,n),t(r,n)};return r._merged=!0,r}function tr(e,t){var r=e.model&&e.model.prop||"value",n=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[r]=t.model.value;var i=t.on||(t.on={}),a=i[n],s=t.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[n]=[s].concat(a)):i[n]=s}var rr=1,nr=2;function or(e,t,r,n,o,a){return(Array.isArray(r)||s(r))&&(o=n,n=r,r=void 0),i(a)&&(o=nr),ir(e,t,r,n,o)}function ir(e,t,r,n,i){if(o(r)&&o(r.__ob__))return me();if(o(r)&&o(r.is)&&(t=r.is),!t)return me();var a,s,p;(Array.isArray(n)&&"function"===typeof n[0]&&(r=r||{},r.scopedSlots={default:n[0]},n.length=0),i===nr?n=yt(n):i===rr&&(n=_t(n)),"string"===typeof t)?(s=e.$vnode&&e.$vnode.ns||B.getTagNamespace(t),a=B.isReservedTag(t)?new ve(B.parsePlatformTagName(t),r,n,void 0,void 0,e):r&&r.pre||!o(p=ze(e.$options,"components",t))?new ve(t,r,n,void 0,void 0,e):Zt(p,r,e,n,t)):a=Zt(t,r,e,n);return Array.isArray(a)?a:o(a)?(o(s)&&ar(a,s),o(r)&&sr(r),a):me()}function ar(e,t,r){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,r=!0),o(e.children))for(var a=0,s=e.children.length;a<s;a++){var p=e.children[a];o(p.tag)&&(n(p.ns)||i(r)&&"svg"!==p.tag)&&ar(p,t,r)}}function sr(e){p(e.style)&&ht(e.style),p(e.class)&&ht(e.class)}function pr(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,o=n&&n.context;e.$slots=Et(t._renderChildren,o),e.$scopedSlots=r,e._c=function(t,r,n,o){return or(e,t,r,n,o,!1)},e.$createElement=function(t,r,n,o){return or(e,t,r,n,o,!0)};var i=n&&n.data;Ve(e,"$attrs",i&&i.attrs||r,null,!0),Ve(e,"$listeners",t._parentListeners||r,null,!0)}var cr,ur=null;function hr(e){Xt(e.prototype),e.prototype.$nextTick=function(e){return ct(e,this)},e.prototype._render=function(){var e,t=this,r=t.$options,n=r.render,o=r._parentVnode;o&&(t.$scopedSlots=Ot(o.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=o;try{ur=t,e=n.call(t._renderProxy,t.$createElement)}catch(ro){Ze(ro,t,"render"),e=t._vnode}finally{ur=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof ve||(e=me()),e.parent=o,e}}function lr(e,t){return(e.__esModule||pe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),p(e)?t.extend(e):e}function fr(e,t,r,n,o){var i=me();return i.asyncFactory=e,i.asyncMeta={data:t,context:r,children:n,tag:o},i}function dr(e,t){if(i(e.error)&&o(e.errorComp))return e.errorComp;if(o(e.resolved))return e.resolved;var r=ur;if(r&&o(e.owners)&&-1===e.owners.indexOf(r)&&e.owners.push(r),i(e.loading)&&o(e.loadingComp))return e.loadingComp;if(r&&!o(e.owners)){var a=e.owners=[r],s=!0,c=null,u=null;r.$on("hook:destroyed",function(){return _(a,r)});var h=function(e){for(var t=0,r=a.length;t<r;t++)a[t].$forceUpdate();e&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},l=I(function(r){e.resolved=lr(r,t),s?a.length=0:h(!0)}),d=I(function(t){o(e.errorComp)&&(e.error=!0,h(!0))}),v=e(l,d);return p(v)&&(f(v)?n(e.resolved)&&v.then(l,d):f(v.component)&&(v.component.then(l,d),o(v.error)&&(e.errorComp=lr(v.error,t)),o(v.loading)&&(e.loadingComp=lr(v.loading,t),0===v.delay?e.loading=!0:c=setTimeout(function(){c=null,n(e.resolved)&&n(e.error)&&(e.loading=!0,h(!1))},v.delay||200)),o(v.timeout)&&(u=setTimeout(function(){u=null,n(e.resolved)&&d(null)},v.timeout)))),s=!1,e.loading?e.loadingComp:e.resolved}}function vr(e){return e.isComment&&e.asyncFactory}function gr(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var r=e[t];if(o(r)&&(o(r.componentOptions)||vr(r)))return r}}function mr(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&br(e,t)}function _r(e,t){cr.$on(e,t)}function yr(e,t){cr.$off(e,t)}function Ar(e,t){var r=cr;return function n(){var o=t.apply(null,arguments);null!==o&&r.$off(e,n)}}function br(e,t,r){cr=e,vt(t,r||{},_r,yr,Ar,e),cr=void 0}function Mr(e){var t=/^hook:/;e.prototype.$on=function(e,r){var n=this;if(Array.isArray(e))for(var o=0,i=e.length;o<i;o++)n.$on(e[o],r);else(n._events[e]||(n._events[e]=[])).push(r),t.test(e)&&(n._hasHookEvent=!0);return n},e.prototype.$once=function(e,t){var r=this;function n(){r.$off(e,n),t.apply(r,arguments)}return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(e)){for(var n=0,o=e.length;n<o;n++)r.$off(e[n],t);return r}var i,a=r._events[e];if(!a)return r;if(!t)return r._events[e]=null,r;var s=a.length;while(s--)if(i=a[s],i===t||i.fn===t){a.splice(s,1);break}return r},e.prototype.$emit=function(e){var t=this,r=t._events[e];if(r){r=r.length>1?V(r):r;for(var n=V(arguments,1),o='event handler for "'+e+'"',i=0,a=r.length;i<a;i++)Qe(r[i],t,n,t,o)}return t}}var $r=null;function xr(e){var t=$r;return $r=e,function(){$r=t}}function Er(e){var t=e.$options,r=t.parent;if(r&&!t.abstract){while(r.$options.abstract&&r.$parent)r=r.$parent;r.$children.push(e)}e.$parent=r,e.$root=r?r.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function wr(e){e.prototype._update=function(e,t){var r=this,n=r.$el,o=r._vnode,i=xr(r);r._vnode=e,r.$el=o?r.__patch__(o,e):r.__patch__(r.$el,e,t,!1),i(),n&&(n.__vue__=null),r.$el&&(r.$el.__vue__=r),r.$vnode&&r.$parent&&r.$vnode===r.$parent._vnode&&(r.$parent.$el=r.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Cr(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||_(t.$children,e),e._watcher&&e._watcher.teardown();var r=e._watchers.length;while(r--)e._watchers[r].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Cr(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Or(e,t,n,o,i){var a=o.data.scopedSlots,s=e.$scopedSlots,p=!!(a&&!a.$stable||s!==r&&!s.$stable||a&&e.$scopedSlots.$key!==a.$key),c=!!(i||e.$options._renderChildren||p);if(e.$options._parentVnode=o,e.$vnode=o,e._vnode&&(e._vnode.parent=o),e.$options._renderChildren=i,e.$attrs=o.data.attrs||r,e.$listeners=n||r,t&&e.$options.props){Ee(!1);for(var u=e._props,h=e.$options._propKeys||[],l=0;l<h.length;l++){var f=h[l],d=e.$options.props;u[f]=Ge(f,d,t,e)}Ee(!0),e.$options.propsData=t}n=n||r;var v=e.$options._parentListeners;e.$options._parentListeners=n,br(e,n,v),c&&(e.$slots=Et(i,o.context),e.$forceUpdate())}function Dr(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Rr(e,t){if(t){if(e._directInactive=!1,Dr(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var r=0;r<e.$children.length;r++)Rr(e.$children[r]);Cr(e,"activated")}}function Vr(e,t){if((!t||(e._directInactive=!0,!Dr(e)))&&!e._inactive){e._inactive=!0;for(var r=0;r<e.$children.length;r++)Vr(e.$children[r]);Cr(e,"deactivated")}}function Cr(e,t){fe();var r=e.$options[t],n=t+" hook";if(r)for(var o=0,i=r.length;o<i;o++)Qe(r[o],e,null,e,n);e._hasHookEvent&&e.$emit("hook:"+t),de()}var Lr=[],Tr=[],kr={},Sr=!1,Pr=!1,jr=0;function Ir(){jr=Lr.length=Tr.length=0,kr={},Sr=Pr=!1}var Nr=Date.now;if(W&&!Y){var Fr=window.performance;Fr&&"function"===typeof Fr.now&&Nr()>document.createEvent("Event").timeStamp&&(Nr=function(){return Fr.now()})}function Br(){var e,t;for(Nr(),Pr=!0,Lr.sort(function(e,t){return e.id-t.id}),jr=0;jr<Lr.length;jr++)e=Lr[jr],e.before&&e.before(),t=e.id,kr[t]=null,e.run();var r=Tr.slice(),n=Lr.slice();Ir(),Xr(r),Hr(n),ie&&B.devtools&&ie.emit("flush")}function Hr(e){var t=e.length;while(t--){var r=e[t],n=r.vm;n._watcher===r&&n._isMounted&&!n._isDestroyed&&Cr(n,"updated")}}function Ur(e){e._inactive=!1,Tr.push(e)}function Xr(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Rr(e[t],!0)}function zr(e){var t=e.id;if(null==kr[t]){if(kr[t]=!0,Pr){var r=Lr.length-1;while(r>jr&&Lr[r].id>e.id)r--;Lr.splice(r+1,0,e)}else Lr.push(e);Sr||(Sr=!0,ct(Br))}}var Gr=0,Kr=function(e,t,r,n,o){this.vm=e,o&&(e._watcher=this),e._watchers.push(this),n?(this.deep=!!n.deep,this.user=!!n.user,this.lazy=!!n.lazy,this.sync=!!n.sync,this.before=n.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=r,this.id=++Gr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new se,this.newDepIds=new se,this.expression="","function"===typeof t?this.getter=t:(this.getter=G(t),this.getter||(this.getter=T)),this.value=this.lazy?void 0:this.get()};Kr.prototype.get=function(){var e;fe(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(ro){if(!this.user)throw ro;Ze(ro,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ht(e),de(),this.cleanupDeps()}return e},Kr.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},Kr.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Kr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():zr(this)},Kr.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||p(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(ro){Ze(ro,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},Kr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Kr.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Kr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||_(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Jr={enumerable:!0,configurable:!0,get:T,set:T};function Wr(e,t,r){Jr.get=function(){return this[t][r]},Jr.set=function(e){this[t][r]=e},Object.defineProperty(e,r,Jr)}function qr(e){e._watchers=[];var t=e.$options;t.props&&Zr(e,t.props),t.methods&&an(e,t.methods),t.data?Qr(e):Re(e._data={},!0),t.computed&&tn(e,t.computed),t.watch&&t.watch!==re&&sn(e,t.watch)}function Zr(e,t){var r=e.$options.propsData||{},n=e._props={},o=e.$options._propKeys=[],i=!e.$parent;i||Ee(!1);var a=function(i){o.push(i);var a=Ge(i,t,r,e);Ve(n,i,a),i in e||Wr(e,"_props",i)};for(var s in t)a(s);Ee(!0)}function Qr(e){var t=e.$options.data;t=e._data="function"===typeof t?Yr(t,e):t||{},u(t)||(t={});var r=Object.keys(t),n=e.$options.props,o=(e.$options.methods,r.length);while(o--){var i=r[o];0,n&&A(n,i)||U(i)||Wr(e,"_data",i)}Re(t,!0)}function Yr(e,t){fe();try{return e.call(t,t)}catch(ro){return Ze(ro,t,"data()"),{}}finally{de()}}var en={lazy:!0};function tn(e,t){var r=e._computedWatchers=Object.create(null),n=oe();for(var o in t){var i=t[o],a="function"===typeof i?i:i.get;0,n||(r[o]=new Kr(e,a||T,T,en)),o in e||rn(e,o,i)}}function rn(e,t,r){var n=!oe();"function"===typeof r?(Jr.get=n?nn(t):on(r),Jr.set=T):(Jr.get=r.get?n&&!1!==r.cache?nn(t):on(r.get):T,Jr.set=r.set||T),Object.defineProperty(e,t,Jr)}function nn(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),he.target&&t.depend(),t.value}}function on(e){return function(){return e.call(this,this)}}function an(e,t){e.$options.props;for(var r in t)e[r]="function"!==typeof t[r]?T:R(t[r],e)}function sn(e,t){for(var r in t){var n=t[r];if(Array.isArray(n))for(var o=0;o<n.length;o++)pn(e,r,n[o]);else pn(e,r,n)}}function pn(e,t,r,n){return u(r)&&(n=r,r=r.handler),"string"===typeof r&&(r=e[r]),e.$watch(t,r,n)}function cn(e){var t={get:function(){return this._data}},r={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",r),e.prototype.$set=Ce,e.prototype.$delete=Le,e.prototype.$watch=function(e,t,r){var n=this;if(u(t))return pn(n,e,t,r);r=r||{},r.user=!0;var o=new Kr(n,e,t,r);if(r.immediate)try{t.call(n,o.value)}catch(i){Ze(i,n,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var un=0;function hn(e){e.prototype._init=function(e){var t=this;t._uid=un++,t._isVue=!0,e&&e._isComponent?ln(t,e):t.$options=Xe(fn(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Er(t),mr(t),pr(t),Cr(t,"beforeCreate"),qr(t),t.$options.el&&t.$mount(t.$options.el)}}function ln(e,t){var r=e.$options=Object.create(e.constructor.options),n=t._parentVnode;r.parent=t.parent,r._parentVnode=n;var o=n.componentOptions;r.propsData=o.propsData,r._parentListeners=o.listeners,r._renderChildren=o.children,r._componentTag=o.tag,t.render&&(r.render=t.render,r.staticRenderFns=t.staticRenderFns)}function fn(e){var t=e.options;if(e.super){var r=fn(e.super),n=e.superOptions;if(r!==n){e.superOptions=r;var o=dn(e);o&&C(e.extendOptions,o),t=e.options=Xe(r,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function dn(e){var t,r=e.options,n=e.sealedOptions;for(var o in r)r[o]!==n[o]&&(t||(t={}),t[o]=r[o]);return t}function vn(e){this._init(e)}function gn(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var r=V(arguments,1);return r.unshift(this),"function"===typeof e.install?e.install.apply(e,r):"function"===typeof e&&e.apply(null,r),t.push(e),this}}function mn(e){e.mixin=function(e){return this.options=Xe(this.options,e),this}}function _n(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var r=this,n=r.cid,o=e._Ctor||(e._Ctor={});if(o[n])return o[n];var i=e.name||r.options.name;var a=function(e){this._init(e)};return a.prototype=Object.create(r.prototype),a.prototype.constructor=a,a.cid=t++,a.options=Xe(r.options,e),a["super"]=r,a.options.props&&yn(a),a.options.computed&&An(a),a.extend=r.extend,a.mixin=r.mixin,a.use=r.use,N.forEach(function(e){a[e]=r[e]}),i&&(a.options.components[i]=a),a.superOptions=r.options,a.extendOptions=e,a.sealedOptions=C({},a.options),o[n]=a,a}}function yn(e){var t=e.options.props;for(var r in t)Wr(e.prototype,"_props",r)}function An(e){var t=e.options.computed;for(var r in t)rn(e.prototype,r,t[r])}function bn(e){N.forEach(function(t){e[t]=function(e,r){return r?("component"===t&&u(r)&&(r.name=r.name||e,r=this.options._base.extend(r)),"directive"===t&&"function"===typeof r&&(r={bind:r,update:r}),this.options[t+"s"][e]=r,r):this.options[t+"s"][e]}})}function Mn(e){return e&&(e.Ctor.options.name||e.tag)}function $n(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!h(e)&&e.test(t)}function xn(e,t){var r=e.cache,n=e.keys,o=e._vnode;for(var i in r){var a=r[i];if(a){var s=Mn(a.componentOptions);s&&!t(s)&&En(r,i,n,o)}}}function En(e,t,r,n){var o=e[t];!o||n&&o.tag===n.tag||o.componentInstance.$destroy(),e[t]=null,_(r,t)}hn(vn),cn(vn),Mr(vn),wr(vn),hr(vn);var wn=[String,RegExp,Array],On={name:"keep-alive",abstract:!0,props:{include:wn,exclude:wn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)En(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){xn(e,function(e){return $n(t,e)})}),this.$watch("exclude",function(t){xn(e,function(e){return!$n(t,e)})})},render:function(){var e=this.$slots.default,t=gr(e),r=t&&t.componentOptions;if(r){var n=Mn(r),o=this,i=o.include,a=o.exclude;if(i&&(!n||!$n(i,n))||a&&n&&$n(a,n))return t;var s=this,p=s.cache,c=s.keys,u=null==t.key?r.Ctor.cid+(r.tag?"::"+r.tag:""):t.key;p[u]?(t.componentInstance=p[u].componentInstance,_(c,u),c.push(u)):(p[u]=t,c.push(u),this.max&&c.length>parseInt(this.max)&&En(p,c[0],c,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}},Dn={KeepAlive:On};function Rn(e){var t={get:function(){return B}};Object.defineProperty(e,"config",t),e.util={warn:ce,extend:C,mergeOptions:Xe,defineReactive:Ve},e.set=Ce,e.delete=Le,e.nextTick=ct,e.observable=function(e){return Re(e),e},e.options=Object.create(null),N.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,C(e.options.components,Dn),gn(e),mn(e),_n(e),bn(e)}Rn(vn),Object.defineProperty(vn.prototype,"$isServer",{get:oe}),Object.defineProperty(vn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vn,"FunctionalRenderContext",{value:zt}),vn.version="2.6.10";var Vn="[object Array]",Cn="[object Object]";function Ln(e,t){var r={};return Tn(e,t),kn(e,t,"",r),r}function Tn(e,t){if(e!==t){var r=Pn(e),n=Pn(t);if(r==Cn&&n==Cn){if(Object.keys(e).length>=Object.keys(t).length)for(var o in t){var i=e[o];void 0===i?e[o]=null:Tn(i,t[o])}}else r==Vn&&n==Vn&&e.length>=t.length&&t.forEach(function(t,r){Tn(e[r],t)})}}function kn(e,t,r,n){if(e!==t){var o=Pn(e),i=Pn(t);if(o==Cn)if(i!=Cn||Object.keys(e).length<Object.keys(t).length)Sn(n,r,e);else{var a=function(o){var i=e[o],a=t[o],s=Pn(i),p=Pn(a);if(s!=Vn&&s!=Cn)i!=t[o]&&Sn(n,(""==r?"":r+".")+o,i);else if(s==Vn)p!=Vn?Sn(n,(""==r?"":r+".")+o,i):i.length<a.length?Sn(n,(""==r?"":r+".")+o,i):i.forEach(function(e,t){kn(e,a[t],(""==r?"":r+".")+o+"["+t+"]",n)});else if(s==Cn)if(p!=Cn||Object.keys(i).length<Object.keys(a).length)Sn(n,(""==r?"":r+".")+o,i);else for(var c in i)kn(i[c],a[c],(""==r?"":r+".")+o+"."+c,n)};for(var s in e)a(s)}else o==Vn?i!=Vn?Sn(n,r,e):e.length<t.length?Sn(n,r,e):e.forEach(function(e,o){kn(e,t[o],r+"["+o+"]",n)}):Sn(n,r,e)}}function Sn(e,t,r){e[t]=r}function Pn(e){return Object.prototype.toString.call(e)}function jn(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var r=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var n=0;n<r.length;n++)r[n]()}}function In(e){return Lr.find(function(t){return e._watcher===t})}function Nn(e,t){if(!e.__next_tick_pending&&!In(e)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=e.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+e._uid+"]:nextVueTick")}return ct(t,e)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=e.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+e._uid+"]:nextMPTick")}var o;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(t)try{t.call(e)}catch(ro){Ze(ro,e,"nextTick")}else o&&o(e)}),!t&&"undefined"!==typeof Promise)return new Promise(function(e){o=e})}function Fn(e){var t=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{})),r=t.reduce(function(t,r){return t[r]=e[r],t},Object.create(null));return Object.assign(r,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(r["name"]=e.name,r["value"]=e.value),JSON.parse(JSON.stringify(r))}var Bn=function(e,t){var r=this;if(null!==t&&("page"===this.mpType||"component"===this.mpType)){var n=this.$scope,o=Fn(this);o.__webviewId__=n.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(e){i[e]=n.data[e]});var a=Ln(o,i);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,n.setData(a,function(){r.__next_tick_pending=!1,jn(r)})):jn(this)}};function Hn(){}function Un(e,t,r){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Hn),e.$options.render||(e.$options.render=Hn);var n=function(){e._update(e._render(),r)};return new Kr(e,n,T,{before:function(){e._isMounted&&!e._isDestroyed&&Cr(e,"beforeUpdate")}},!0),r=!1,e}function Xn(e,t){return o(e)||o(t)?zn(e,Gn(t)):""}function zn(e,t){return e?t?e+" "+t:e:t||""}function Gn(e){return Array.isArray(e)?Kn(e):p(e)?Jn(e):"string"===typeof e?e:""}function Kn(e){for(var t,r="",n=0,i=e.length;n<i;n++)o(t=Gn(e[n]))&&""!==t&&(r&&(r+=" "),r+=t);return r}function Jn(e){var t="";for(var r in e)e[r]&&(t&&(t+=" "),t+=r);return t}var Wn=b(function(e){var t={},r=/;(?![^(]*\))/g,n=/:(.+)/;return e.split(r).forEach(function(e){if(e){var r=e.split(n);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t});function qn(e){return Array.isArray(e)?L(e):"string"===typeof e?Wn(e):e}var Zn=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qn(e,t){var r=t.split("."),n=r[0];return 0===n.indexOf("__$n")&&(n=parseInt(n.replace("__$n",""))),1===r.length?e[n]:Qn(e[n],r.slice(1).join("."))}function Yn(e){var t=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:V(arguments,1)}),t.apply(this,arguments)},e.prototype.$nextTick=function(e){return Nn(this,e)},Zn.forEach(function(t){e.prototype[t]=function(e){if(this.$scope)return this.$scope[t](e)}}),e.prototype.__init_provide=Mt,e.prototype.__init_injections=$t,e.prototype.__call_hook=function(e,t){var r=this;fe();var n,o=r.$options[e],i=e+" hook";if(o)for(var a=0,s=o.length;a<s;a++)n=Qe(o[a],r,t?[t]:null,r,i);return r._hasHookEvent&&r.$emit("hook:"+e),de(),n},e.prototype.__set_model=function(e,t,r,n){Array.isArray(n)&&(-1!==n.indexOf("trim")&&(r=r.trim()),-1!==n.indexOf("number")&&(r=this._n(r))),e[t]=r},e.prototype.__set_sync=function(e,t,r){e[t]=r},e.prototype.__get_orig=function(e){return u(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,t){return Qn(t||this,e)},e.prototype.__get_class=function(e,t){return Xn(t,e)},e.prototype.__get_style=function(e,t){if(!e&&!t)return"";var r=qn(e),n=t?C(t,r):r;return Object.keys(n).map(function(e){return w(e)+":"+n[e]}).join(";")}}var eo=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function to(e){var t=e.extend;e.extend=function(e){e=e||{};var r=e.methods;return r&&Object.keys(r).forEach(function(t){-1!==eo.indexOf(t)&&(e[t]=r[t],delete r[t])}),t.call(this,e)};var r=e.config.optionMergeStrategies,n=r.created;eo.forEach(function(e){r[e]=n}),e.prototype.__lifecycle_hooks__=eo}vn.prototype.__patch__=Bn,vn.prototype.$mount=function(e,t){return Un(this,e,t)},to(vn),Yn(vn),t["default"]=vn}.call(this,r("c8ba"))},"6e42":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createApp=xe,t.createPage=Oe,t.createComponent=Re,t.default=void 0;var n=o(r("66fd"));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=Object.prototype.toString,s=Object.prototype.hasOwnProperty;function p(e){return"function"===typeof e}function c(e){return"string"===typeof e}function u(e){return"[object Object]"===a.call(e)}function h(e,t){return s.call(e,t)}function l(){}function f(e){var t=Object.create(null);return function(r){var n=t[r];return n||(t[r]=e(r))}}var d=/-(\w)/g,v=f(function(e){return e.replace(d,function(e,t){return t?t.toUpperCase():""})}),g=/subNVue|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$/,m=/^create|Manager$/,_=/^on/;function y(e){return m.test(e)}function A(e){return g.test(e)}function b(e){return _.test(e)}function M(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function $(e){return!(y(e)||A(e)||b(e))}function x(e,t){return $(e)?function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return p(e.success)||p(e.fail)||p(e.complete)?t.apply(void 0,[e].concat(n)):M(new Promise(function(r,o){t.apply(void 0,[Object.assign({},e,{success:r,fail:o})].concat(n)),Promise.prototype.finally=function(e){var t=this.constructor;return this.then(function(r){return t.resolve(e()).then(function(){return r})},function(r){return t.resolve(e()).then(function(){throw r})})}}))}:t}var E=1e-4,w=750,O=!1,D=0,R=0;function V(){var e=wx.getSystemInfoSync(),t=e.platform,r=e.pixelRatio,n=e.windowWidth;D=n,R=r,O="ios"===t}function C(e,t){if(0===D&&V(),e=Number(e),0===e)return 0;var r=e/w*(t||D);return r<0&&(r=-r),r=Math.floor(r+E),0===r?1!==R&&O?.5:1:e<0?-r:r}var L={},T=[],k=[],S=["success","fail","cancel","complete"];function P(e,t,r){return function(n){return t(I(e,n,r))}}function j(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(u(t)){var i=!0===o?t:{};for(var a in p(r)&&(r=r(t,i)||{}),t)if(h(r,a)){var s=r[a];p(s)&&(s=s(t[a],t,i)),s?c(s)?i[s]=t[a]:u(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(e,"暂不支持").concat(a))}else-1!==S.indexOf(a)?i[a]=P(e,t[a],n):o||(i[a]=t[a]);return i}return p(t)&&(t=P(e,t,n)),t}function I(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return p(L.returnValue)&&(t=L.returnValue(e,t)),j(e,t,r,{},n)}function N(e,t){if(h(L,e)){var r=L[e];return r?function(t,n){var o=r;p(r)&&(o=r(t)),t=j(e,t,o.args,o.returnValue);var i=wx[o.name||e](t,n);return A(e)?I(e,i,o.returnValue,y(e)):i}:function(){console.error("app-plus 暂不支持".concat(e))}}return t}var F=Object.create(null),B=["subscribePush","unsubscribePush","onPush","offPush","share"];function H(e){return function(t){var r=t.fail,n=t.complete,o={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};p(r)&&r(o),p(n)&&n(o)}}function U(e){if(e.$processed=!0,e.__uniapp_mask_id){var t=e.__uniapp_mask,r=plus.webview.getWebviewById(e.__uniapp_mask_id),n=e.show,o=e.hide,i=e.close,a=function(){r.setStyle({mask:t})},s=function(){r.setStyle({mask:"none"})};e.show=function(){a();for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return n.apply(e,r)},e.hide=function(){s();for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return o.apply(e,r)},e.close=function(){s(),p=[];for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return i.apply(e,r)},e.postMessage=function(t){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:t,options:{id:e.id}},e.id)};var p=[];e.onMessage=function(e){p.push(e)},e.$consumeMessage=function(e){p.forEach(function(t){return t(e)})}}}B.forEach(function(e){F[e]=H(e)});var X={getSubNVueById:function(e){var t=plus.webview.getWebviewById(e);return t&&!t.$processed&&U(t),t}};function z(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}var G=Object.freeze({requireNativePlugin:z,subNVue:X}),K=Page,J=Component,W=/:/g,q=f(function(e){return v(e.replace(W,"-"))});function Z(e){if(wx.canIUse("nextTick")){var t=e.triggerEvent;e.triggerEvent=function(r){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return t.apply(e,[q(r)].concat(o))}}}function Q(e,t){var r=t[e];t[e]=r?function(){Z(this);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.apply(this,t)}:function(){Z(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Q("onLoad",e),K(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Q("created",e),J(e)};var Y=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ee(e){return Behavior(e)}function te(e){var t=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},r=t.selectAllComponents(".vue-ref");r.forEach(function(t){var r=t.dataset.ref;e[r]=t.$vm||t});var n=t.selectAllComponents(".vue-ref-in-for");return n.forEach(function(t){var r=t.dataset.ref;e[r]||(e[r]=[]),e[r].push(t.$vm||t)}),e}})}function re(e,t){e.triggerEvent("__l",e.$vm||t,{bubbles:!0,composed:!0})}function ne(e){e.detail.$mp?e.detail.$parent||(e.detail.$parent=this.$vm,e.detail.$parent.$children.push(e.detail),e.detail.$root=this.$vm.$root):e.detail.parent||(e.detail.parent=this.$vm)}function oe(e){return ie(e)}function ie(e){return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},Component(e)}function ae(e,t){var r=e.$mp[e.mpType];t.forEach(function(t){h(r,t)&&(e[t]=r[t])})}function se(e,t){t.forEach(function(t){e[t]=function(e){return this.$vm.__call_hook(t,e)}})}function pe(e,t){var r=e.data||{},n=e.methods||{};if("function"===typeof r)try{r=r.call(t)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",r)}else try{r=JSON.parse(JSON.stringify(r))}catch(o){}return u(r)||(r={}),Object.keys(n).forEach(function(e){-1!==t.__lifecycle_hooks__.indexOf(e)||h(r,e)||(r[e]=n[e])}),r}var ce=[String,Number,Boolean,Object,Array,null];function ue(e){return function(t,r){this.$vm&&(this.$vm[e]=t)}}function he(e){var t=e["behaviors"],r=e["extends"],n=e["mixins"],o=e["props"];o||(e["props"]=o=[]);var i=[];return Array.isArray(t)&&t.forEach(function(e){i.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]=String,o["value"]=null))}),u(r)&&r.props&&i.push(ee({properties:fe(r.props,!0)})),Array.isArray(n)&&n.forEach(function(e){u(e)&&e.props&&i.push(ee({properties:fe(e.props,!0)}))}),i}function le(e,t,r,n){return Array.isArray(t)&&1===t.length?t[0]:t}function fe(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n={};return t||(n.vueSlots={type:null,value:[],observer:function(e,t){var r=Object.create(null);e.forEach(function(e){r[e]=!0}),this.setData({$slots:r})}}),Array.isArray(e)?e.forEach(function(e){n[e]={type:null,observer:ue(e)}}):u(e)&&Object.keys(e).forEach(function(t){var o=e[t];if(u(o)){var i=o["default"];p(i)&&(i=i()),o.type=le(t,o.type,i,r),n[t]={type:-1!==ce.indexOf(o.type)?o.type:null,value:i,observer:ue(t)}}else{var a=le(t,o,null,r);n[t]={type:-1!==ce.indexOf(a)?a:null,observer:ue(t)}}}),n}function de(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(t){}return e.stopPropagation=l,e.preventDefault=l,e.target=e.target||{},h(e,"detail")||(e.detail={}),u(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function ve(e,t){var r=e;return t.forEach(function(t){var n=t[0],o=t[2];if(n||"undefined"!==typeof o){var i=t[1],a=t[3],s=n?e.__get_value(n,r):r;Number.isInteger(s)?r=o:i?Array.isArray(s)?r=s.find(function(t){return e.__get_value(i,t)===o}):u(s)?r=Object.keys(s).find(function(t){return e.__get_value(i,s[t])===o}):console.error("v-for 暂不支持循环数据：",s):r=s[o],a&&(r=e.__get_value(a,r))}}),r}function ge(e,t,r){var n={};return Array.isArray(t)&&t.length&&t.forEach(function(t,o){"string"===typeof t?t?"$event"===t?n["$"+o]=r:0===t.indexOf("$event.")?n["$"+o]=e.__get_value(t.replace("$event.",""),r):n["$"+o]=e.__get_value(t):n["$"+o]=e:n["$"+o]=ve(e,t)}),n}function me(e){for(var t={},r=1;r<e.length;r++){var n=e[r];t[n[0]]=n[1]}return t}function _e(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=t.currentTarget&&t.currentTarget.dataset&&"wx"===t.currentTarget.dataset.comType,!r.length))return a?[t]:t.detail.__args__||t.detail;var s=ge(e,n,t),p=[];return r.forEach(function(e){"$event"===e?"__set_model"!==i||o?o&&!a?p.push(t.detail.__args__[0]):p.push(t):p.push(t.target.value):Array.isArray(e)&&"o"===e[0]?p.push(me(e)):"string"===typeof e&&h(s,e)?p.push(s[e]):p.push(e)}),p}var ye="~",Ae="^";function be(e){var t=this;e=de(e);var r=(e.currentTarget||e.target).dataset.eventOpts;if(!r)return console.warn("事件信息不存在");var n=e.type;r.forEach(function(r){var o=r[0],i=r[1],a=o.charAt(0)===Ae;o=a?o.slice(1):o;var s=o.charAt(0)===ye;o=s?o.slice(1):o,i&&n===o&&i.forEach(function(r){var n=r[0];if(n){var o=t.$vm[n];if(!p(o))throw new Error(" _vm.".concat(n," is not a function"));if(s){if(o.once)return;o.once=!0}o.apply(t.$vm,_e(t.$vm,e,r[1],r[2],a,n))}})})}var Me=["onHide","onError","onPageNotFound","onUniNViewMessage"];function $e(e){this.$vm||(this.$vm=e,this.$vm.$mp={app:this})}function xe(e){n.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=i({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(te(this),ae(this,Y)))},created:function(){this.__init_injections(this),this.__init_provide(this)}});var t={onLaunch:function(t){$e.call(this,e),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onLaunch",t)},onShow:function(t){$e.call(this,e),this.$vm.__call_hook("onShow",t)}};return t.globalData=e.$options.globalData||{},se(t,Me),App(t),e}var Ee=["onShow","onHide","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap","onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function we(e){this.$vm||(this.$vm=new e({mpType:"page",mpInstance:this}),this.$vm.__call_hook("created"),this.$vm.$mount())}function Oe(e){var t;e=e.default||e,p(e)?(t=e,e=t.extendOptions):t=n.default.extend(e);var r={options:{multipleSlots:!0,addGlobalClass:!0},data:pe(e,n.default.prototype),lifetimes:{attached:function(){we.call(this,t)},ready:function(){this.$vm.__call_hook("beforeMount"),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},detached:function(){this.$vm.$destroy()}},methods:{onLoad:function(e){we.call(this,t),this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},onUnload:function(){this.$vm.__call_hook("onUnload")},__e:be,__l:ne}};return se(r.methods,Ee),oe(r,e)}function De(e){if(!this.$vm){var t=this.properties,r={mpType:"component",mpInstance:this,propsData:t};this.$vm=new e(r);var n=t.vueSlots;if(Array.isArray(n)&&n.length){var o=Object.create(null);n.forEach(function(e){o[e]=!0}),this.$vm.$scopedSlots=this.$vm.$slots=o}this.$vm.$mount()}}function Re(e){var t;e=e.default||e,p(e)?(t=e,e=t.extendOptions):t=n.default.extend(e);var r=he(e),o=fe(e.props,!1,e.__file),i={options:{multipleSlots:!0,addGlobalClass:!0},data:pe(e,n.default.prototype),behaviors:r,properties:o,lifetimes:{attached:function(){De.call(this,t)},ready:function(){De.call(this,t),re(this),this.$vm.__call_hook("created"),this.$vm.__call_hook("beforeMount"),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__e:be,__l:ne}};return ie(i,e)}T.forEach(function(e){L[e]=!1}),k.forEach(function(e){var t=L[e]&&L[e].name?L[e].name:e;wx.canIUse(t)||(L[e]=!1)});var Ve={};"undefined"!==typeof Proxy?Ve=new Proxy({},{get:function(e,t){return"upx2px"===t?C:G[t]?x(t,G[t]):h(wx,t)||h(L,t)?x(t,N(t,wx[t])):void 0}}):(Ve.upx2px=C,Object.keys(G).forEach(function(e){Ve[e]=x(e,G[e])}),Object.keys(wx).forEach(function(e){(h(wx,e)||h(L,e))&&(Ve[e]=x(e,N(e,wx[e])))}));var Ce=Ve,Le=Ce;t.default=Le},"93b5":function(e,t,r){"use strict";e.exports={status:200,msg:"OK",data:[{id:"marvel-1022",name:"蜘蛛侠：英雄归来",poster:"http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/poster.png",cover:"http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/cover.png",trailer:"http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/trailer.mp4",score:7.9,prisedCounts:9980,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Spider-Man: Homecoming",releaseDate:"上映时间：2017-09-08(中国大陆) ",totalTime:"影片时长：133分钟",plotDesc:"彼得帕克（汤姆·赫兰德 Tom Holland 饰）在内战后受到了钢铁侠托尼斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰）的赏识，表面上，彼得进入托尼的公司成为了一名实习生，实际上，他和复仇者联盟的成员们一起接受了各种各样的训练。托尼虽然欣赏彼得的勇敢和正直，却并不认为他目前已经拥有加入复联的实力，他派出了特工哈皮（乔恩·费儒 Jon Favreau 饰）暗中观察，这让十分想证明自己的彼得感到万分焦躁",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/1.png","http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/2.png","http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/3.png","http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/4.png","http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/5.png","http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/6.png","http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/7.png","http://122.152.205.72:88/superhero/MARVEL/SpiderManHomecoming/photos/8.png"]',createTime:"2017-09-08T07:40:37.000+0000"},{id:"marvel-1005",name:"复仇者联盟3：无限战争",poster:"http://122.152.205.72:88/superhero/MARVEL/Avengers3/poster.png",cover:"http://122.152.205.72:88/superhero/MARVEL/Avengers3/cover.png",trailer:"http://122.152.205.72:88/superhero/MARVEL/Avengers3/trailer.mp4",score:8.8,prisedCounts:9637,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Avengers: Infinity War ",releaseDate:"上映时间：2018-05-11(中国大陆) ",totalTime:"影片时长：150分钟",plotDesc:"最先与灭霸军团遭遇的雷神索尔一行遭遇惨烈打击，洛基遇害，空间宝石落入灭霸之手。未几，灭霸的先锋部队杀至地球，一番缠斗后掳走奇异博士。为阻止时间宝石落入敌手，斯塔克和蜘蛛侠闯入了敌人的飞船。与此同时，拥有心灵宝石的幻视也遭到外星侵略者的袭击，为此美国队长、黑寡妇等人将其带到瓦坎达王国，向黑豹求助。幸免于难的索尔与星爵一行相逢，随后他们兵分两路。索尔与火箭、格鲁特踏上再铸雷神之锤的旅程，星爵则与卡魔拉等人试图阻止灭霸的恶行。而知晓灵魂宝石下落的卡魔拉，同样是其义父灭霸追踪的对象。 ",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/MARVEL/Avengers3/photos/1.png","http://122.152.205.72:88/superhero/MARVEL/Avengers3/photos/2.png","http://122.152.205.72:88/superhero/MARVEL/Avengers3/photos/3.png","http://122.152.205.72:88/superhero/MARVEL/Avengers3/photos/4.png","http://122.152.205.72:88/superhero/MARVEL/Avengers3/photos/5.png","http://122.152.205.72:88/superhero/MARVEL/Avengers3/photos/6.png"]',createTime:"2018-05-11T07:40:37.000+0000"},{id:"xman-1007",name:"金刚狼：殊死一战",poster:"http://122.152.205.72:88/superhero/xman/Logan/poster.png",cover:"http://122.152.205.72:88/superhero/xman/Logan/cover.png",trailer:"http://122.152.205.72:88/superhero/xman/Logan/trailer.mp4",score:8.5,prisedCounts:9631,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：xman: Logan",releaseDate:"上映时间：2017-03-03(中国大陆/美国)",totalTime:"影片时长：123分钟(中国大陆)",plotDesc:"故事发生在2029年，彼时，X战警早已经解散，作为为数不多的仅存的变种人，金刚狼罗根（休·杰克曼 Hugh Jackman 饰）和卡利班（斯戴芬·莫昌特 Stephen Merchant 饰）照顾着年迈的X教授（帕特里克·斯图尔特 Patrick Stewart 饰），由于衰老，X教授已经丧失了对于自己超能力的控制，如果不依赖药物，他的超能力就会失控，在全球范围内制造无法挽回的灾难。不仅如此，金刚狼的自愈能力亦随着时间的流逝逐渐减弱，体能和力量都早已经大不如从前。 ",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/xman/Logan/photos/1.png","http://122.152.205.72:88/superhero/xman/Logan/photos/2.png","http://122.152.205.72:88/superhero/xman/Logan/photos/3.png","http://122.152.205.72:88/superhero/xman/Logan/photos/4.png","http://122.152.205.72:88/superhero/xman/Logan/photos/5.png"]',createTime:"2017-03-03T07:40:37.000+0000"},{id:"marvel-1029",name:"雷神3：诸神黄昏",poster:"http://122.152.205.72:88/superhero/MARVEL/Thor3/poster.png",cover:"http://122.152.205.72:88/superhero/MARVEL/Thor3/cover.png",trailer:"http://122.152.205.72:88/superhero/MARVEL/Thor3/trailer.mp4",score:8.4,prisedCounts:9630,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Thor: Ragnarok",releaseDate:"上映时间：2017-11-03(美国/中国大陆)",totalTime:"影片时长：130分钟",plotDesc:"在“索科维亚战役”两年后，雷神索尔（克里斯·海姆斯沃斯 Chris Hemsworth 饰）识破了洛基（汤姆·希德勒斯顿 Tom Hiddleston 饰）的伪装，辗转找到了被放逐到地球的奥丁（安东尼·霍普金斯 Anthony Hopkins 饰）。然而垂死的奥丁却告知两个儿子，“诸神的黄昏”已经开始，曾遭到奥丁封禁的死亡女神海拉（凯特·布兰切特 Cate Blanchett 饰）即将重返阿斯加德。与海拉的初次对决中，索尔失去了雷神之锤，他和洛基也被打落至混乱不堪的萨卡星。在萨卡的决斗场上，索尔重逢失踪许久的绿巨人，也见到了曾从海拉魔爪下逃得一生的女武神",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/MARVEL/Thor3/photos/1.png","http://122.152.205.72:88/superhero/MARVEL/Thor3/photos/2.png","http://122.152.205.72:88/superhero/MARVEL/Thor3/photos/3.png","http://122.152.205.72:88/superhero/MARVEL/Thor3/photos/4.png","http://122.152.205.72:88/superhero/MARVEL/Thor3/photos/5.png"]',createTime:"2017-11-03T07:40:37.000+0000"}]}},c1de:function(e,t,r){"use strict";e.exports={status:200,msg:"OK",data:{page:1,total:6,records:50,rows:[{id:"xman-1010",name:"X战警：新变种人",poster:"http://122.152.205.72:88/superhero/xman/TheNewMutants/poster.png",cover:"http://122.152.205.72:88/superhero/xman/TheNewMutants/cover.png",trailer:"http://122.152.205.72:88/superhero/xman/TheNewMutants/trailer.mp4",score:0,prisedCounts:123,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：xman: The New Mutants",releaseDate:"上映时间：2019-08-02(美国)",totalTime:"影片时长：未知",plotDesc:"二十世纪福斯准备拓展“X战警”系列，立项《新变种人》，找来导演乔什·布恩自编自导。《新变种人》算是《X战警》漫画比较冷门的分支(死侍首次在这里亮相)，角色都是X教授和万磁王的学生，能力比较特别、奇怪。《逆转未来》中的太阳黑子和闪烁在漫画中曾是新变种人成员",directors:'[""]',actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/xman/TheNewMutants/photos/1.png","http://122.152.205.72:88/superhero/xman/TheNewMutants/photos/2.png","http://122.152.205.72:88/superhero/xman/TheNewMutants/photos/3.png","http://122.152.205.72:88/superhero/xman/TheNewMutants/photos/4.png"]',createTime:"2019-08-02T07:40:37.000+0000"},{id:"xman-1004",name:"X战警：黑凤凰",poster:"http://122.152.205.72:88/superhero/xman/DarkPhoenix/poster.png",cover:"http://122.152.205.72:88/superhero/xman/DarkPhoenix/cover.png",trailer:"http://122.152.205.72:88/superhero/xman/DarkPhoenix/trailer.mp4",score:0,prisedCounts:1573,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：xman: Dark Phoenix",releaseDate:"上映时间：2019-06-07(美国)",totalTime:"影片时长：未知",plotDesc:"在《X战警：黑凤凰》中，X战警将面临他们最强大又可怕的敌人：他们的一位成员——琴·葛蕾。在一次太空救援任务中，琴被一股神秘的宇宙力量击中险些死亡。返回家中后，这股力量令她变得无比强大的同时也极不稳定。琴在与体内能量搏斗期间释放了自己无法控制也无法领会的力量。随着不断失去控制，琴伤害了她的至亲之人。这一举动割裂了维系X战警的纽带。现在随着X战警家族渐渐分崩离析，他们必须找到办法重新团结一心——不仅为拯救琴的灵魂，更为地球的安全。因为外星势力正意图武器化琴体内的力量并以此统治银河系",directors:'["s-1019"]',actors:'["s-1020","s-1012","s-1013","s-1014","s-1015"]',plotPics:'["http://122.152.205.72:88/superhero/xman/DarkPhoenix/photos/1.png","http://122.152.205.72:88/superhero/xman/DarkPhoenix/photos/2.png","http://122.152.205.72:88/superhero/xman/DarkPhoenix/photos/3.png","http://122.152.205.72:88/superhero/xman/DarkPhoenix/photos/4.png","http://122.152.205.72:88/superhero/xman/DarkPhoenix/photos/5.png"]',createTime:"2019-06-07T07:40:37.000+0000"},{id:"marvel-1006",name:"复仇者联盟4：终局之战",poster:"http://122.152.205.72:88/superhero/MARVEL/Avengers4/poster.png",cover:"http://122.152.205.72:88/superhero/MARVEL/Avengers4/cover.png",trailer:"http://122.152.205.72:88/superhero/MARVEL/Avengers4/trailer.mp4",score:0,prisedCounts:6666,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Avengers: Endgame",releaseDate:"上映时间：2019-05(中国大陆)",totalTime:"影片时长：未知",plotDesc:"《复仇者联盟4》（Untitled Avengers film）是未上映的美国超级英雄电影，改编自漫威漫画，也是漫威电影宇宙第22部影片。由安东尼·罗素和乔·罗素执导，小罗伯特·唐尼、乔什·布洛林、马克·鲁法洛、汤姆·希德勒斯顿、克里斯·埃文斯、汤姆·赫兰德等主演。最终定档于2019年5月3日在美国上映",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/MARVEL/Avengers4/photos/1.png","http://122.152.205.72:88/superhero/MARVEL/Avengers4/photos/2.png","http://122.152.205.72:88/superhero/MARVEL/Avengers4/photos/3.png","http://122.152.205.72:88/superhero/MARVEL/Avengers4/photos/4.png","http://122.152.205.72:88/superhero/MARVEL/Avengers4/photos/5.png","http://122.152.205.72:88/superhero/MARVEL/Avengers4/photos/6.png","http://122.152.205.72:88/superhero/MARVEL/Avengers4/photos/7.png","http://122.152.205.72:88/superhero/MARVEL/Avengers4/photos/8.png","http://122.152.205.72:88/superhero/MARVEL/Avengers4/photos/9.png","http://122.152.205.72:88/superhero/MARVEL/Avengers4/photos/10.png"]',createTime:"2019-05-10T07:40:37.000+0000"},{id:"dc-1011",name:"沙赞",poster:"http://122.152.205.72:88/superhero/DC/Shazam/poster.jpg",cover:"http://122.152.205.72:88/superhero/DC/Shazam/cover.jpg",trailer:"http://122.152.205.72:88/superhero/DC/Shazam/trailer.mp4",score:0,prisedCounts:4218,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Shazam",releaseDate:"上映时间： 2019-04-05(美国)",totalTime:"影片时长：未知",plotDesc:"每个人身体里都潜藏着一位超级英雄，只需要一点魔力便能将其释放。14岁的街头小混混比利·巴特森(亚瑟·安其饰)通过大喊“沙赞”这个词，就可以变身为成年超级英雄沙赞(扎克瑞·莱维饰)，这是一种来自于古老巫师的恩惠。如神一般的肌肉身体里，仍存有一颗孩子心，他开心地与超能力为伴。他能飞吗？他能X光透视吗？他能从手中射出闪电吗？他能不用再考试了吗？沙赞以孩子般轻率又鲁莽的方式，开始测试他的能力极限。但他需要尽快掌握这些力量，以对抗塞迪斯·希瓦纳博士控制的邪恶势力。",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/DC/Shazam/photos/1.jpg","http://122.152.205.72:88/superhero/DC/Shazam/photos/2.jpg","http://122.152.205.72:88/superhero/DC/Shazam/photos/3.jpg","http://122.152.205.72:88/superhero/DC/Shazam/photos/4.jpg","http://122.152.205.72:88/superhero/DC/Shazam/photos/5.jpg"]',createTime:"2019-04-05T07:40:37.000+0000"},{id:"marvel-1011",name:"惊奇队长",poster:"http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/poster.png",cover:"http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/cover.png",trailer:"http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/trailer.mp4",score:0,prisedCounts:555,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Captain Marvel",releaseDate:"上映时间：2019-03-08(美国)",totalTime:"影片时长：未知",plotDesc:"漫画中的初代“惊奇女士”原名Carol Danvers，她曾经是一名美国空军情报局探员，暗恋惊奇先生。此后她得到了超能力，成为“惊奇女士”，在漫画中是非常典型的女性英雄人物。 ",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/photos/1.png","http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/photos/2.png","http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/photos/3.png","http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/photos/4.png","http://122.152.205.72:88/superhero/MARVEL/CaptainMarvel/photos/5.png"]',createTime:"2019-03-08T07:40:37.000+0000"},{id:"dc-1001",name:"海王",poster:"http://122.152.205.72:88/superhero/DC/Aquaman/poster.jpg",cover:"http://122.152.205.72:88/superhero/DC/Aquaman/cover.jpg",trailer:"http://122.152.205.72:88/superhero/DC/Aquaman/trailer.mp4",score:8.2,prisedCounts:2678,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Aquaman‎",releaseDate:"上映时间：2018-12-07(中国大陆)",totalTime:"影片时长：143分钟（中国大陆）",plotDesc:"华纳兄弟影片公司与导演温子仁联手为您呈现波澜壮阔的动作冒险电影——《海王》！横跨七大洋的广阔海底世界徐徐展开，给观众带来震撼十足的视觉奇观。本片由杰森·莫玛领衔主演，讲述半人半亚特兰蒂斯血统的亚瑟·库瑞踏上永生难忘的征途——他不但需要直面自己的特殊身世，更不得不面对生而为王的考验：自己究竟能否配得上“海王”之名。",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/DC/Aquaman/photos/1.jpg","http://122.152.205.72:88/superhero/DC/Aquaman/photos/2.jpg","http://122.152.205.72:88/superhero/DC/Aquaman/photos/3.jpg","http://122.152.205.72:88/superhero/DC/Aquaman/photos/4.jpg","http://122.152.205.72:88/superhero/DC/Aquaman/photos/5.jpg","http://122.152.205.72:88/superhero/DC/Aquaman/photos/6.jpg","http://122.152.205.72:88/superhero/DC/Aquaman/photos/7.jpg"]',createTime:"2018-12-07T07:40:37.000+0000"},{id:"marvel-1026",name:"毒液：致命守护者",poster:"http://122.152.205.72:88/superhero/MARVEL/Venom/poster.png",cover:"http://122.152.205.72:88/superhero/MARVEL/Venom/cover.png",trailer:"http://122.152.205.72:88/superhero/MARVEL/Venom/trailer.mp4",score:8.9,prisedCounts:7892,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Venom",releaseDate:"上映时间：2018-11-09(中国大陆)",totalTime:"影片时长：112分钟",plotDesc:"艾迪（汤姆·哈迪 Tom Hardy 饰）是一位深受观众喜爱的新闻记者，和女友安妮（米歇尔·威廉姆斯 Michelle Williams 饰）相恋多年，彼此之间感情十分要好。安妮是一名律师，接手了生命基金会的案件，在女友的邮箱里，艾迪发现了基金会老板德雷克（里兹·阿迈德 Riz Ahmed 饰）不为人知的秘密。为此，艾迪不仅丢了工作，女友也离他而去",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/MARVEL/Venom/photos/1.png","http://122.152.205.72:88/superhero/MARVEL/Venom/photos/2.png","http://122.152.205.72:88/superhero/MARVEL/Venom/photos/3.png","http://122.152.205.72:88/superhero/MARVEL/Venom/photos/4.png","http://122.152.205.72:88/superhero/MARVEL/Venom/photos/5.png"]',createTime:"2018-11-09T07:40:37.000+0000"},{id:"marvel-1002",name:"蚁人2: 黄蜂女现身",poster:"http://122.152.205.72:88/superhero/MARVEL/AntMan2/poster.png",cover:"http://122.152.205.72:88/superhero/MARVEL/AntMan2/cover.png",trailer:"http://122.152.205.72:88/superhero/MARVEL/AntMan2/trailer.mp4",score:7.3,prisedCounts:5932,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：Ant-Man and the Wasp",releaseDate:"上映时间：2018-08-24(中国大陆)",totalTime:"影片时长：118分钟",plotDesc:"来自漫威电影宇宙的新片《蚁人2：黄蜂女现身》重点展现了两位超级英雄令人惊叹的收缩能力。继《美国队长3》的故事线之后，斯科特·朗迎来了自己作为超级英雄和孩子父亲的双重身份。一方面，他在背负着蚁人职责的同时努力过好自己的生活；另一方面，二代黄蜂女霍普·凡·戴恩和汉克·皮姆博士又向他传达了一项紧迫的新任务。斯科特必须再次穿上战衣，与黄蜂女并肩作战，共同破解来自过去的谜题",directors:"['']",actors:"['']",plotPics:'["http://122.152.205.72:88/superhero/MARVEL/AntMan2/photos/1.png","http://122.152.205.72:88/superhero/MARVEL/AntMan2/photos/2.png","http://122.152.205.72:88/superhero/MARVEL/AntMan2/photos/3.png","http://122.152.205.72:88/superhero/MARVEL/AntMan2/photos/4.png","http://122.152.205.72:88/superhero/MARVEL/AntMan2/photos/5.png"]',createTime:"2018-08-24T07:40:37.000+0000"},{id:"xman-1006",name:"X战警：死侍2",poster:"http://122.152.205.72:88/superhero/xman/Deadpool2/poster.png",cover:"http://122.152.205.72:88/superhero/xman/Deadpool2/cover.png",trailer:"http://122.152.205.72:88/superhero/xman/Deadpool2/trailer.mp4",score:7.8,prisedCounts:5963,basicInfo:"2018 / 美国 / 科幻 / 超级英雄",originalName:"原名：xman: Deadpool2",releaseDate:"上映时间：2018-05-18(美国)",totalTime:"影片时长：119分钟",plotDesc:"漫威史上最贱的雇佣兵死侍再度归来！本与女友过着幸福生活的死侍（瑞安·雷诺兹 饰）上门寻仇，美好生活岌岌可危。然而悲惨的日子还没结束，死侍还和想要接纳他的X战警剪不断，理还乱。就在这位平日里插科打诨的英雄人生跌入谷底之时，一位强大的时空穿越者——电索（乔什·布洛林 饰）却盯上了死侍想要保护的少年。为迎强敌，死侍广发英雄帖，临时组建了X特攻队。就凭他们真的能打过这位来自未来的敌人么？",directors:'["s-1001"]',actors:'["s-1002","s-1003","s-1004","s-1005","s-1006"]',plotPics:'["http://122.152.205.72:88/superhero/xman/Deadpool2/photos/1.png","http://122.152.205.72:88/superhero/xman/Deadpool2/photos/2.png","http://122.152.205.72:88/superhero/xman/Deadpool2/photos/3.png","http://122.152.205.72:88/superhero/xman/Deadpool2/photos/4.png","http://122.152.205.72:88/superhero/xman/Deadpool2/photos/5.png"]',createTime:"2018-05-18T07:40:37.000+0000"}],userdata:null}}},c8ba:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}e.exports=r},e984:function(e,t,r){"use strict";e.exports={status:200,msg:"OK",data:[{id:"1",movieId:"marvel-1011",image:"http://122.152.205.72:88/group1/M00/00/03/CpoxxFw1ZHiASu_7AAfGb_KNy8Y861.png",sort:1,isShow:1},{id:"2",movieId:"xman-1004",image:"http://122.152.205.72:88/group1/M00/00/03/CpoxxFw1ZSiAaDteAAdT5PsVWXs099.png",sort:2,isShow:1},{id:"4",movieId:"dc-1011",image:"http://122.152.205.72:88/group1/M00/00/03/CpoxxFw1ZW6AHqLOAAe4KaofyAU209.png",sort:4,isShow:1},{id:"5",movieId:"dc-1005",image:"http://122.152.205.72:88/group1/M00/00/03/CpoxxFw1ZauAKb7sAAe1cnsz_BQ313.png",sort:5,isShow:1},{id:"6",movieId:"dc-1008",image:"http://122.152.205.72:88/group1/M00/00/03/CpoxxFw1ZgSAdG-rAAfcNtoF_n8219.png",sort:6,isShow:1},{id:"7",movieId:"marvel-1022",image:"http://122.152.205.72:88/group1/M00/00/03/CpoxxFw1Z_aASu2VAAf-RnvbnhY123.png",sort:7,isShow:1}]}},ebbf:function(e,t,r){"use strict";(function(e){r("2983");n(r("66fd"));var t=n(r("216d"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"11d8":function(t,n,e){"use strict";e.r(n);var a=e("3335"),u=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=u.a},"1fe1":function(t,n,e){"use strict";var a=e("c31b"),u=e.n(a);u.a},"216d":function(t,n,e){"use strict";e.r(n);var a=e("f5c5"),u=e("11d8");for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);e("1fe1");var o=e("2877"),f=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=f.exports},3335:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=f(e("e984")),u=f(e("45c5")),r=f(e("93b5")),o=f(e("1f69"));function f(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{bannerData:a.default.data,hotData:u.default.data,trailerData:r.default.data,uLikeData:o.default.data}},onLoad:function(){console.log(this.uLikeData," at pages\\index\\index.vue:61")},methods:{}};n.default=c},c31b:function(t,n,e){},f5c5:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})}},[["ebbf","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/search/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/search/search.js';

define('pages/search/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"02b9":function(t,n,e){"use strict";e.r(n);var u=e("096c"),a=e("a01c");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("5b8f");var c=e("2877"),f=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=f.exports},"096c":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},"0f70":function(t,n,e){},"5b8f":function(t,n,e){"use strict";var u=e("0f70"),a=e.n(u);a.a},"66fb":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=a(e("c1de"));function a(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{searchData:u.default.data.rows}},methods:{}};n.default=r},a01c:function(t,n,e){"use strict";e.r(n);var u=e("66fb"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a}},[["04e8","common/runtime","common/vendor"]]]);
});
require('pages/search/search.js');
__wxRoute = 'pages/me/me';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/me.js';

define('pages/me/me.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/me"],{6381:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},"776b":function(n,t,e){"use strict";e.r(t);var u=e("e457"),a=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=a.a},"982a":function(n,t,e){"use strict";var u=e("fa1f"),a=e.n(u);a.a},aa5d:function(n,t,e){"use strict";e.r(t);var u=e("6381"),a=e("776b");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);e("982a");var o=e("2877"),f=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=f.exports},e457:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},fa1f:function(n,t,e){}},[["212e","common/runtime","common/vendor"]]]);
});
require('pages/me/me.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

