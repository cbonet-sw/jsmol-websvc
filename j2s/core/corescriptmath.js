(function(Clazz
,Clazz_getClassName
,Clazz_newLongArray
,Clazz_doubleToByte
,Clazz_doubleToInt
,Clazz_doubleToLong
,Clazz_declarePackage
,Clazz_instanceOf
,Clazz_load
,Clazz_instantialize
,Clazz_decorateAsClass
,Clazz_floatToInt
,Clazz_floatToLong
,Clazz_makeConstructor
,Clazz_defineEnumConstant
,Clazz_exceptionOf
,Clazz_newIntArray
,Clazz_newFloatArray
,Clazz_declareType
,Clazz_prepareFields
,Clazz_superConstructor
,Clazz_newByteArray
,Clazz_declareInterface
,Clazz_newShortArray
,Clazz_innerTypeInstance
,Clazz_isClassDefined
,Clazz_prepareCallback
,Clazz_newArray
,Clazz_castNullAs
,Clazz_floatToShort
,Clazz_superCall
,Clazz_decorateAsType
,Clazz_newBooleanArray
,Clazz_newCharArray
,Clazz_implementOf
,Clazz_newDoubleArray
,Clazz_overrideConstructor
,Clazz_clone
,Clazz_doubleToShort
,Clazz_getInheritedLevel
,Clazz_getParamsType
,Clazz_isAF
,Clazz_isAB
,Clazz_isAI
,Clazz_isAS
,Clazz_isASS
,Clazz_isAP
,Clazz_isAFloat
,Clazz_isAII
,Clazz_isAFF
,Clazz_isAFFF
,Clazz_tryToSearchAndExecute
,Clazz_getStackTrace
,Clazz_inheritArgs
,Clazz_alert
,Clazz_defineMethod
,Clazz_overrideMethod
,Clazz_declareAnonymous
//,Clazz_checkPrivateMethod
,Clazz_cloneFinals
){
var $t$;
//var c$;
Clazz_declarePackage("JS");
Clazz_load(null, "JS.MathExt", ["java.util.Date", "$.Hashtable", "$.Random", "JU.A4", "$.AU", "$.BArray", "$.BS", "$.CU", "$.Lst", "$.M3", "$.M4", "$.Measure", "$.OC", "$.P3", "$.P4", "$.PT", "$.Quat", "$.Rdr", "$.SB", "$.V3", "J.api.Interface", "J.atomdata.RadiusData", "J.bspt.PointIterator", "J.c.VDW", "J.i18n.GT", "JM.BondSet", "$.Measurement", "JS.SV", "$.T", "JU.BSUtil", "$.BoxInfo", "$.Edge", "$.Escape", "$.JmolMolecule", "$.Logger", "$.Parser", "$.Point3fi", "$.SimpleUnitCell", "JV.FileManager", "$.JC", "$.Viewer"], function(){
var c$ = Clazz_decorateAsClass(function(){
this.vwr = null;
this.e = null;
this.rand = null;
this.pm = null;
Clazz_instantialize(this, arguments);}, JS, "MathExt", null);
/*LV!1824 unnec constructor*/Clazz_defineMethod(c$, "init", 
function(se){
this.e = se;
this.vwr = this.e.vwr;
return this;
}, "~O");
Clazz_defineMethod(c$, "evaluate", 
function(mp, op, args, tok){
switch (tok) {
case 134218760:
return (args.length >= 1 && args[0].tok == 4 ? mp.addXStr((args.length == 1 ?  new java.util.Date().toString() : this.vwr.apiPlatform.getDateFormat(JS.SV.sValue(args[1]))) + "\t" + JS.SV.sValue(args[0]).trim()) : mp.addXInt(((System.currentTimeMillis() - JS.MathExt.t0)) - (args.length == 0 ? 0 : args[0].asInt())));
case 134218250:
return (args.length == 1 && args[0].tok == 2 ? mp.addXInt(Math.abs(args[0].intValue)) : mp.addXFloat(Math.abs(args[0].asFloat())));
case 134218241:
case 134218245:
case 134218244:
case 134218246:
case 134218255:
return (args.length == 1 && this.evaluateMath(mp, args, tok));
case 1275069441:
case 1275068928:
case 1275068929:
case 1275068930:
case 1275068931:
case 1275335685:
case 1275334681:
return this.evaluateList(mp, op.intValue, args);
case 268437504:
if (args.length == 0) mp.wasX = false;
case 1275068418:
return this.evaluateArray(mp, args, tok == 1275068418 && op.tok == 268442113);
case 134217766:
return this.evaluateMatrix(mp, args);
case 134217765:
return this.evaluateCallbackParam(mp, args);
case 134217731:
case 134221850:
return this.evaluateQuaternion(mp, args, tok);
case 1275068420:
return this.evaluateBin(mp, args);
case 134221829:
return this.evaluateCache(mp, args);
case 1275068934:
case 1275068935:
return this.evaluateRowCol(mp, args, tok);
case 1765808134:
return this.evaluateColor(mp, args);
case 134221831:
return this.evaluateCompare(mp, args);
case 1228931586:
case 134217736:
case 1275203608:
return this.evaluateConnected(mp, args, tok, op.intValue);
case 1812599299:
case 1814695966:
return this.evaluateUnitCell(mp, args, op.tok == 268442113, op.tok == 268442113 ? op.intValue : op.tok);
case 134353926:
return this.evaluateContact(mp, args);
case 134221834:
return this.evaluateData(mp, args);
case 1275069444:
case 1275069442:
return this.evaluateDotDist(mp, args, tok, op.intValue);
case 1275069443:
if (op.tok == 268442113) return this.evaluateDotDist(mp, args, tok, op.intValue);
case 134217729:
case 1745489939:
return this.evaluateMeasure(mp, args, op.tok);
case 1228935687:
case 134223363:
return this.evaluateLoad(mp, args, tok == 1228935687);
case 1275068427:
return this.evaluateFind(mp, args);
case 1275068433:
return this.evaluateInChI(mp, args);
case 1287653388:
case 1825200146:
return this.evaluateFormat(mp, op.intValue, args, tok == 1825200146);
case 134320141:
return this.evaluateUserFunction(mp, op.value, args, op.intValue, op.tok == 268442113);
case 1275068437:
tok = 1275068725;
case 1275068446:
case 1275068725:
case 1275082241:
case 1275072526:
return this.evaluateGetProperty(mp, args, tok, op.tok == 268442113);
case 136314895:
return this.evaluateHelix(mp, args);
case 134219777:
case 134217750:
case 134217763:
return this.evaluatePlane(mp, args, tok, op.tok == 268442113);
case 134218759:
case 134238732:
case 134222850:
case 134222350:
return this.evaluateScript(mp, args, tok);
case 1275069446:
case 1275069447:
case 1275068932:
return this.evaluateString(mp, op.intValue, args);
case 134217751:
return this.evaluatePoint(mp, args);
case 1275068447:
return this.evaluatePointGroup(mp, args, op.tok == 268442113);
case 134256129:
return this.evaluatePrompt(mp, args);
case 134219266:
return this.evaluateRandom(mp, args);
case 1275068432:
return this.evaluateIn(mp, args);
case 1275072532:
return this.evaluateModulation(mp, args);
case 1275068443:
return this.evaluateReplace(mp, args);
case 134218753:
case 134218756:
case 134218757:
case 1237320707:
return this.evaluateSubstructure(mp, args, tok, op.tok == 268442113);
case 1275068444:
case 1275068425:
return this.evaluateSort(mp, args, tok);
case 134217764:
return this.evaluateSpacegroup(mp, args);
case 1296041985:
return this.evaluateSymop(mp, args, op.tok == 268442113);
case 1275068445:
return this.evaluateTensor(mp, args);
case 134217759:
return this.evaluateWithin(mp, args, op.tok == 268442113);
case 134221856:
return this.evaluateWrite(mp, args);
}
return false;
}, "JS.ScriptMathProcessor,JS.T,~A,~N");
Clazz_defineMethod(c$, "evaluateMatrix", 
function(mp, args){
var n = args.length;
var m4 = null;
var m3 = null;
var sarg0 = (n > 0 && args[0].tok == 4 ? args[0].value : null);
var map = (n < 2 || sarg0 == null ? null : args[1].getMap());
var lst = (n < 2 || sarg0 == null ? null : args[1].getList());
var retType = (n > 1 && args[n - 1].tok == 4 ? args[n - 1].value : null);
var asUVW = "uvw".equalsIgnoreCase(retType);
var asABC = "abc".equalsIgnoreCase(retType);
var asXYZ = asUVW || !asABC && "xyz".equalsIgnoreCase(retType);
var asRXYZ = !asUVW && !asABC && !asXYZ && "rxyz".equalsIgnoreCase(retType);
var a = null;
if (retType != null || lst != null || map != null) n--;
switch (n) {
case 0:
m4 =  new JU.M4();
m4.setIdentity();
break;
case 1:
switch (args[0].tok) {
case 12:
m4 = args[0].value;
break;
case 4:
var s = args[0].value;
if (s.equals("h") || s.equals("r") || s.indexOf(",") >= 0 && s.indexOf(":") < 0) {
var sym;
if (s.indexOf('*') >= 0) {
sym = this.vwr.getCurrentUnitCell();
if (sym == null) return false;
} else {
sym = this.vwr.getSymTemp();
}m4 = sym.convertTransform(s, null);
}if (m4 != null) break;
var select = null;
if (retType != null && !asABC && !asXYZ && !asUVW) {
if ("map".equals(retType)) {
map =  new java.util.Hashtable();
retType = null;
} else if ("list".equals(retType)) {
lst =  new JU.Lst();
retType = null;
} else {
select = "[SELECT (" + retType + ")]";
lst =  new JU.Lst();
retType = null;
}}var returnM4 = (lst == null && map == null);
var retMap = (map == null ? null :  new java.util.Hashtable());
var retLst = (lst == null ? null :  new JU.Lst());
if (returnM4) {
retMap =  new java.util.Hashtable();
retMap.put("ASM4", Boolean.TRUE);
}m4 = this.vwr.getSymStatic().staticGetMatrixTransform(s, retMap == null ? retLst : retMap);
if (returnM4) break;
if (map != null) {
map.clear();
for (var e, $e = retMap.entrySet().iterator (); $e.hasNext()&& ((e = $e.next ()) || true);) {
map.put(e.getKey(), JS.SV.getVariable(e.getValue()));
}
return mp.addXMap(map);
}if (lst != null) {
if (select != null) return mp.addXObj(this.vwr.extractProperty(retLst, select, -1));
lst.clear();
for (var i = 0, nl = retLst.size(); i < nl; i++) {
lst.addLast(JS.SV.getVariable(retLst.get(i)));
}
return mp.addXList(lst);
}break;
case 7:
lst = args[0].getList();
var len = lst.size();
switch (len) {
case 3:
case 4:
a =  Clazz_newFloatArray (len * len, 0);
for (var i = 0, pt = 0; i < len; i++) {
var row = lst.get(i);
switch (row.tok) {
case 8:
var p = row.value;
a[pt++] = p.x;
a[pt++] = p.y;
a[pt++] = p.z;
break;
case 9:
var p4 = row.value;
a[pt++] = p4.x;
a[pt++] = p4.y;
a[pt++] = p4.z;
a[pt++] = p4.w;
break;
case 7:
var a2 = lst.get(i).getList();
if (a2 == null || a2.size() != len) return false;
for (var j = 0; j < len; j++) {
a[pt++] = JS.SV.fValue(a2.get(j));
}
break;
}
}
break;
case 9:
case 16:
a = JS.SV.flistValue(args[0], 0);
break;
default:
return false;
}
break;
}
break;
case 2:
m3 =  new JU.M3();
if (args[0].tok != 8) return false;
var v = JU.V3.newV(JS.SV.ptValue(args[0]));
var angle = JS.SV.fValue(args[1]);
m3.setAA(JU.A4.newVA(v, (angle / 180 * 3.141592653589793)));
return mp.addXM3(m3);
case 3:
case 4:
if (args[0].tok == 7) {
a =  Clazz_newFloatArray (n == 3 ? 9 : 16, 0);
for (var p = 0, i = 0; i < n; i++) {
var row = JS.SV.flistValue(args[i], 0);
for (var j = 0; j < n; j++) a[p++] = row[j];

}
break;
}}
if (a != null) {
switch (a.length) {
case 9:
m3 = JU.M3.newA9(a);
break;
case 16:
m4 = JU.M4.newA16(a);
break;
default:
return false;
}
}if (asRXYZ || asABC || asUVW || asXYZ) {
if (m3 != null) {
m4 = JU.M4.newMV(m3,  new JU.P3());
}return mp.addXStr(this.matToString(m4, asRXYZ ? 0x1 : asABC ? 0xABC : asUVW ? 0xDEF : 0));
}return (m3 != null ? mp.addXM3(m3) : m4 != null ? mp.addXM4(m4) : false);
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "matToString", 
function(m4, mode){
var sym = this.vwr.getSymStatic();
switch (mode) {
case 0x1:
return sym.staticConvertOperation(null, m4, "rxyz");
case 32:
case 0xABC:
return sym.staticGetTransformABC(m4, false);
default:
case 36:
case 0xDEF:
case 28:
return this.vwr.getSymStatic().staticConvertOperation("", m4, (mode == 36 || mode == 0xDEF ? "uvw" : "xyz"));
}
}, "JU.M4,~N");
Clazz_defineMethod(c$, "evaluateCallbackParam", 
function(mp, args){
return mp.addX(this.e.getCallbackParameter(args.length == 0 ? -2147483648 : args[0].asInt()));
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "evaluateSpacegroup", 
function(mp, args){
var ucParams = null;
var nargs = args.length;
if (nargs == 0) return mp.addXObj(this.vwr.getSymTemp().getSpaceGroupInfo(this.vwr.ms, null, this.vwr.am.cmi, true, null));
var mode = (args[args.length - 1].tok == 4 ? args[args.length - 1].value : null);
var isSettings = "settings".equalsIgnoreCase(mode);
var isSetting = "setting".equalsIgnoreCase(mode);
var isSubgroups = (nargs > 1 && (nargs != 2 || !isSettings && !isSetting && !"list".equalsIgnoreCase(mode) && !"jmol".equalsIgnoreCase(mode)));
var xyzList = args[0].asString();
if (isSubgroups || "subgroups".equals(mode)) {
var ret = this.getSubgroupInfo(args, "subgroups".equals(mode) ? nargs : nargs + 1);
return (ret == null ? false : mp.addXObj(ret));
}var params = null;
var ret = null;
switch (nargs) {
default:
return false;
case 2:
if ("list".equals(mode)) {
params = Integer.$valueOf(this.vwr.getSymTemp().getSpaceGroupInfoObj("itaNumber", xyzList, false, false));
xyzList = "list";
break;
}if (args[1].tok != 4) {
ucParams = JS.SV.flistValue(args[1], 0);
if (ucParams == null || ucParams.length != 6) return false;
params = ucParams = JU.SimpleUnitCell.newParams(ucParams, NaN);
}case 1:
if (args[0].tok == 10) {
var atoms = JS.SV.getBitSet(args[0], true);
return mp.addXObj(this.vwr.findSpaceGroup(null, atoms, null, ucParams, null, null, 1));
}var itaNo = (args[0].tok == 2 ? args[0].intValue : nargs == 1 ? -2147483648 : 0);
if (isSettings || isSetting) {
if (isSettings && itaNo == 0) return false;
var data = (isSetting && nargs > 1 ? xyzList : null);
return mp.addXObj((itaNo == -2147483648 ? this.vwr.getCurrentUnitCell() : this.vwr.getSymTemp()).getSpaceGroupJSON(mode.toLowerCase(), data, itaNo));
}if ("setting".equalsIgnoreCase(xyzList) || "settings".equalsIgnoreCase(xyzList)) {
var sym = this.vwr.getOperativeSymmetry();
return mp.addXObj(sym == null ? null : sym.getSpaceGroupJSON(xyzList.toLowerCase(), null, -2147483648));
}if (xyzList.toUpperCase().startsWith("AFLOWLIB/")) {
return mp.addXObj(this.vwr.getSymTemp().getSpaceGroupJSON("AFLOWLIB", xyzList.substring(9), 0));
}if (xyzList.startsWith("Hall:") || xyzList.indexOf("x") >= 0 || ucParams != null) {
ret = this.vwr.findSpaceGroup(null, null, xyzList, ucParams, null, null, 1);
break;
}if (itaNo > 0 || args[0].tok == 3 || args[0].tok == 4) {
if (itaNo > 0 || xyzList.length > 1 && xyzList.charAt(1) == '/' || !xyzList.endsWith(":") && !Double.isNaN(JU.PT.parseFloat(xyzList))) xyzList = "ITA/" + xyzList;
if (xyzList.toUpperCase().startsWith("ITA/")) {
return mp.addXObj(this.vwr.getSymTemp().getSpaceGroupJSON("ITA", xyzList.substring(4), 0));
}}break;
}
if (ret == null) ret = this.vwr.getSymStatic().getSpaceGroupInfoObj(xyzList, params, true, false);
if (ret != null && !"jmol".equals(mode) && !"list".equals(mode)) {
System.out.println("MathExt " + ret);
var s = "" + (ret).get("itaIndex");
ret = this.vwr.getSymTemp().getSpaceGroupJSON("ITA", s, 0);
}return mp.addXObj(ret);
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "getSubgroupInfo", 
function(args, nargs){
var sym;
var index1 = -2147483648;
var index2 = -2147483648;
var nameFrom = null;
var nameTo = null;
switch (nargs) {
case 5:
index2 = args[3].intValue;
if (index2 < 0) return null;
case 4:
index1 = args[2].intValue;
if (index1 < 0 || index1 == 2147483647) return null;
case 3:
nameTo = (args[1].intValue == 0 ? "" : args[1].asString());
case 2:
nameFrom = args[0].asString();
case 1:
default:
if (nameFrom == null) {
sym = this.vwr.getOperativeSymmetry();
if (sym == null) return null;
nameFrom = sym.getSpaceGroupClegId();
} else {
sym = this.vwr.getSymStatic();
}break;
}
return sym.getSubgroupJSON(nameFrom, nameTo, index1, index2, 0, null, null);
}, "~A,~N");
Clazz_defineMethod(c$, "evaluatePointGroup", 
function(mp, args, isAtomProperty){
var pts = null;
var center = null;
var distanceTolerance = -1;
var linearTolerance = -1;
var bsAtoms = null;
var isSpaceGroup = false;
switch (args.length) {
case 4:
linearTolerance = args[3].asFloat();
case 3:
distanceTolerance = args[2].asFloat();
case 2:
switch (args[1].tok) {
case 8:
center = JS.SV.ptValue(args[1]);
break;
case 10:
bsAtoms = JS.SV.getBitSet(args[1], false);
if (args[0].asString().equalsIgnoreCase("spaceGroup")) {
isSpaceGroup = true;
if (args.length == 2) distanceTolerance = 0;
}break;
}
if (isSpaceGroup) break;
case 1:
switch (args[0].tok) {
case 7:
var points = args[0].getList();
pts =  new Array(points.size());
for (var i = pts.length; --i >= 0; ) pts[i] = JS.SV.ptValue(points.get(i));

break;
case 10:
bsAtoms = JS.SV.getBitSet(args[0], false);
pts = this.vwr.ms.at;
break;
case 4:
if (isAtomProperty) {
bsAtoms = JS.SV.getBitSet(mp.getX(), true);
if (bsAtoms == null || bsAtoms.isEmpty()) return false;
var s = args[0].asString();
if ("spacegroup".equals(s)) {
isSpaceGroup = true;
break;
}}default:
return false;
}
break;
case 0:
if (!isAtomProperty) {
return mp.addXObj(this.vwr.ms.getPointGroupInfo(null));
}bsAtoms = JS.SV.getBitSet(mp.getX(), false);
break;
default:
return false;
}
if (bsAtoms != null) {
var iatom = bsAtoms.nextSetBit(0);
if (iatom < 0 || iatom >= this.vwr.ms.ac || isSpaceGroup && bsAtoms.cardinality() != 1) return false;
if (isSpaceGroup) {
var lst = this.vwr.ms.generateCrystalClass(iatom, JU.P3.new3(NaN, NaN, NaN));
pts =  new Array(lst.size());
for (var i = pts.length; --i >= 0; ) pts[i] = lst.get(i);

center =  new JU.P3();
}}var pointGroup = this.vwr.getSymTemp().setPointGroup(this.vwr, null, center, (pts == null ? this.vwr.ms.at : pts), bsAtoms, false, distanceTolerance < 0 ? this.vwr.getFloat(570425382) : distanceTolerance, linearTolerance < 0 ? this.vwr.getFloat(570425384) : linearTolerance, (bsAtoms == null ? pts.length : bsAtoms.cardinality()), true);
return mp.addXMap(pointGroup.getPointGroupInfo(-1, null, true, null, 0, 1));
}, "JS.ScriptMathProcessor,~A,~B");
Clazz_defineMethod(c$, "evaluateUnitCell", 
function(mp, args, isSelector, tok){
var x1 = (isSelector ? JS.SV.getBitSet(mp.getX(), true) : tok == 1812599299 ? this.vwr.getAllAtoms() : null);
var iatom = ((x1 == null ? this.vwr.getAllAtoms() : x1).nextSetBit(0));
var lastParam = args.length - 1;
var scale = 1;
switch (lastParam < 0 ? 0 : args[lastParam].tok) {
case 2:
case 3:
scale = args[lastParam].asFloat();
lastParam--;
break;
}
var normalize = false;
var tok0 = (lastParam < 0 ? 0 : args[0].tok);
var ucnew = null;
var uc = null;
var arg0 = null;
switch (tok0) {
case 7:
uc = args[0].getList();
break;
case 12:
switch (lastParam > 1 ? 1073741936 : lastParam < 1 ? 0 : args[1].tok) {
default:
case 1073741936:
return false;
case 0:
case 1073742334:
break;
case 1073742335:
normalize = true;
break;
}
return mp.addXStr(this.vwr.getSymStatic().staticGetTransformABC(args[0].value, normalize));
case 4:
arg0 = args[0].asString();
if (tok == 1814695966) {
if (arg0.indexOf("a=") == 0) {
ucnew =  new Array(4);
for (var i = 0; i < 4; i++) ucnew[i] =  new JU.P3();

JU.SimpleUnitCell.setAbc(arg0, null, ucnew);
} else if (arg0.indexOf(",") >= 0 || arg0.equals("r")) {
var asMatrix = (args.length == 2 && JS.SV.bValue(args[1]));
var ret;
if (asMatrix) {
ret = this.vwr.getSymTemp().convertTransform(arg0, null);
} else {
ret = this.vwr.getV0abc(-1, arg0);
}return mp.addXObj(ret);
}}break;
}
if (tok == 1812599299) {
var b = this.vwr.ms.getBoxInfo(x1, 1);
return mp.addXObj(b.getInfo(arg0));
}var u = null;
var haveUC = (uc != null);
if (ucnew == null && haveUC && uc.size() < 4) return false;
var ptParam = (haveUC ? 1 : 0);
if (ucnew == null && !haveUC && tok0 != 8) {
u = (iatom < 0 ? this.vwr.getCurrentUnitCell() : this.vwr.ms.getUnitCell(this.vwr.ms.at[iatom].mi));
ucnew = (u == null ?  Clazz_newArray(-1, [JU.P3.new3(0, 0, 0), JU.P3.new3(1, 0, 0), JU.P3.new3(0, 1, 0), JU.P3.new3(0, 0, 1)]) : u.getUnitCellVectors());
}if (ucnew == null) {
ucnew =  new Array(4);
if (haveUC) {
switch (uc.size()) {
case 3:
ucnew[0] =  new JU.P3();
for (var i = 0; i < 3; i++) ucnew[i + 1] = JU.P3.newP(JS.SV.ptValue(uc.get(i)));

break;
case 4:
for (var i = 0; i < 4; i++) ucnew[i] = JU.P3.newP(JS.SV.ptValue(uc.get(i)));

break;
case 6:
var params =  Clazz_newFloatArray (6, 0);
for (var i = 0; i < 6; i++) params[i] = uc.get(i).asFloat();

JU.SimpleUnitCell.setAbc(null, params, ucnew);
break;
default:
return false;
}
} else {
ucnew[0] = JU.P3.newP(JS.SV.ptValue(args[0]));
switch (lastParam) {
case 3:
for (var i = 1; i < 4; i++) (ucnew[i] = JU.P3.newP(JS.SV.ptValue(args[i]))).sub(ucnew[0]);

break;
case 1:
var l = args[1].getList();
if (l != null && l.size() == 3) {
for (var i = 0; i < 3; i++) ucnew[i + 1] = JU.P3.newP(JS.SV.ptValue(l.get(i)));

break;
}default:
return false;
}
}}var op = (ptParam <= lastParam ? args[ptParam].asString() : null);
var toPrimitive = "primitive".equalsIgnoreCase(op);
if (toPrimitive || "conventional".equalsIgnoreCase(op)) {
var stype = (++ptParam > lastParam ? "" : args[ptParam].asString().toUpperCase());
if (stype.equals("BCC")) stype = "I";
 else if (stype.length == 0) stype = this.vwr.getSymmetryInfo(iatom, null, 0, null, null, null, 1073741994, null, 0, -1, 0, null);
if (stype == null || stype.length == 0) return false;
if (u == null) u = this.vwr.getSymTemp();
var m3 = this.vwr.getModelForAtomIndex(iatom).auxiliaryInfo.get("primitiveToCrystal");
if (!u.toFromPrimitive(toPrimitive, stype.charAt(0), ucnew, m3)) return false;
} else if ("reciprocal".equalsIgnoreCase(op)) {
ucnew = JU.SimpleUnitCell.getReciprocal(ucnew, null, scale);
scale = 1;
} else if ("vertices".equalsIgnoreCase(op)) {
return mp.addXObj(JU.BoxInfo.getVerticesFromOABC(ucnew));
}if (scale != 1) for (var i = 1; i < 4; i++) ucnew[i].scale(scale);

return mp.addXObj(ucnew);
}, "JS.ScriptMathProcessor,~A,~B,~N");
Clazz_defineMethod(c$, "evaluateArray", 
function(mp, args, isSelector){
if (isSelector) {
var x1 = mp.getX();
switch (x1.tok) {
case 11:
case 12:
return mp.addX(x1.toArray());
}
if (args.length == 0 || args.length > 2) return false;
var doCopy = (args.length == 1 || args[1].tok == 1073742334);
var id;
var m1;
switch (x1.tok) {
case 11:
case 12:
return mp.addX(x1.toArray());
case 6:
if (args.length != 1) return false;
var lst =  new JU.Lst();
var map = x1.getMap();
var keys = x1.getKeys(false);
for (var i = 0, n = keys.length; i < n; i++) if (map.get(keys[i]).getMap() == null) return false;

id = args[0].asString();
for (var i = 0, n = keys.length; i < n; i++) {
m1 = map.get(keys[i]).getMap();
if (doCopy) m1 = JS.SV.deepCopy(m1, true, false);
m1.put(id, JS.SV.newS(keys[i]));
lst.addLast(JS.SV.newV(6, m1));
}
return mp.addXList(lst);
case 7:
var toArray = true;
var bsIndex =  new JU.BS();
var map1 =  new java.util.Hashtable();
var lst1 = x1.getList();
id = args[0].asString();
for (var i = lst1.size(); --i > 0; ) {
m1 = lst1.get(i).getMap();
if (m1 == null || m1.get(id) == null) return false;
}
for (var i = 0, n = lst1.size(); i < n; i++) {
m1 = lst1.get(i).getMap();
if (m1 == null) return false;
if (doCopy) m1 = JS.SV.deepCopy(m1, true, false);
var mid = m1.remove(id);
if (toArray) {
if (mid.tok == 2 && mid.intValue >= 0 && mid.intValue <= 10000) {
bsIndex.set(mid.intValue);
} else {
toArray = false;
}}var key = mid.asString();
if (map1.containsKey(key)) return false;
map1.put(key, JS.SV.newV(6, m1));
}
if (toArray) {
var pt = bsIndex.nextSetBit(0);
if ( new Boolean (pt == 0 | pt == 1).valueOf()) {
var len = bsIndex.cardinality();
if (bsIndex.nextClearBit(pt) == len + pt) {
var a =  new Array(len);
for (var e, $e = map1.entrySet().iterator (); $e.hasNext()&& ((e = $e.next ()) || true);) {
a[Integer.parseInt(e.getKey()) - pt] = e.getValue();
}
var list =  new JU.Lst();
for (var i = 0; i < len; i++) list.addLast(a[i]);

return mp.addXList(list);
}}}return mp.addXObj(map1);
}
return false;
}var a =  new Array(args.length);
for (var i = a.length; --i >= 0; ) a[i] = JS.SV.newT(args[i]);

return mp.addXAV(a);
}, "JS.ScriptMathProcessor,~A,~B");
Clazz_defineMethod(c$, "evaluateBin", 
function(mp, args){
var n = args.length;
if (n < 3 || n > 5) return false;
var x1 = mp.getX();
var isListf = (x1.tok == 13);
if (!isListf && x1.tok != 7) return mp.addX(x1);
var f0 = JS.SV.fValue(args[0]);
var f1 = JS.SV.fValue(args[1]);
var df = JS.SV.fValue(args[2]);
var addBins = (n >= 4 && args[n - 1].tok == 1073742335);
var key = ((n == 5 || n == 4 && !addBins) && args[3].tok != 1073742334 ? JS.SV.sValue(args[3]) : null);
var data;
var maps = null;
if (isListf) {
data = x1.value;
} else {
var list = x1.getList();
data =  Clazz_newFloatArray (list.size(), 0);
if (key != null) maps = JU.AU.createArrayOfHashtable(list.size());
try {
for (var i = list.size(); --i >= 0; ) data[i] = JS.SV.fValue(key == null ? list.get(i) : (maps[i] = list.get(i).getMap()).get(key));

} catch (e) {
if (Clazz_exceptionOf(e, Exception)){
return false;
} else {
throw e;
}
}
}var nbins = Math.max(Clazz_doubleToInt(Math.floor((f1 - f0) / df + 0.01)), 1);
var array =  Clazz_newIntArray (nbins, 0);
var nPoints = data.length;
for (var i = 0; i < nPoints; i++) {
var v = data[i];
var bin = Clazz_doubleToInt(Math.floor((v - f0) / df));
if (bin < 0 || bin >= nbins) continue;
array[bin]++;
if (key != null) {
var map = maps[i];
if (map == null) continue;
map.put("_bin", JS.SV.newI(bin));
var v1 = f0 + df * bin;
var v2 = v1 + df;
map.put("_binMin", JS.SV.newF(bin == 0 ? -3.4028235E38 : v1));
map.put("_binMax", JS.SV.newF(bin == nbins - 1 ? 3.4028235E38 : v2));
}}
if (addBins) {
var lst =  new JU.Lst();
for (var i = 0; i < nbins; i++) lst.addLast( Clazz_newFloatArray(-1, [f0 + df * i, array[i]]));

return mp.addXList(lst);
}return mp.addXAI(array);
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "evaluateCache", 
function(mp, args){
if (args.length > 0) return false;
return mp.addXMap(this.vwr.fm.cacheList());
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "evaluateColor", 
function(mp, args){
var colorScheme = (args.length > 0 ? JS.SV.sValue(args[0]) : "");
var isIsosurface = colorScheme.startsWith("$");
if (args.length == 2 && colorScheme.equalsIgnoreCase("TOHSL")) return mp.addXPt(JU.CU.rgbToHSL(JU.P3.newP(args[1].tok == 8 ? JS.SV.ptValue(args[1]) : JU.CU.colorPtFromString(args[1].asString())), true));
if (args.length == 2 && colorScheme.equalsIgnoreCase("TORGB")) {
var pt = JU.P3.newP(args[1].tok == 8 ? JS.SV.ptValue(args[1]) : JU.CU.colorPtFromString(args[1].asString()));
return mp.addXPt(args[1].tok == 8 ? JU.CU.hslToRGB(pt) : pt);
}if (args.length == 4 && (args[3].tok == 1073742335 || args[3].tok == 1073742334)) {
var pt1 = JU.P3.newP(args[0].tok == 8 ? JS.SV.ptValue(args[0]) : JU.CU.colorPtFromString(args[0].asString()));
var pt2 = JU.P3.newP(args[1].tok == 8 ? JS.SV.ptValue(args[1]) : JU.CU.colorPtFromString(args[1].asString()));
var usingHSL = (args[3].tok == 1073742335);
if (usingHSL) {
pt1 = JU.CU.rgbToHSL(pt1, false);
pt2 = JU.CU.rgbToHSL(pt2, false);
}var sb =  new JU.SB();
var vd = JU.V3.newVsub(pt2, pt1);
var n = args[2].asInt();
if (n < 2) n = 20;
vd.scale(1 / (n - 1));
for (var i = 0; i < n; i++) {
sb.append(JU.Escape.escapeColor(JU.CU.colorPtToFFRGB(usingHSL ? JU.CU.hslToRGB(pt1) : pt1)));
pt1.add(vd);
}
return mp.addXStr(sb.toString());
}var ce = (isIsosurface ? null : this.vwr.cm.getColorEncoder(colorScheme));
if (!isIsosurface && ce == null) return mp.addXStr("");
var lo = (args.length > 1 ? JS.SV.fValue(args[1]) : 3.4028235E38);
var hi = (args.length > 2 ? JS.SV.fValue(args[2]) : 3.4028235E38);
var value = (args.length > 3 ? JS.SV.fValue(args[3]) : 3.4028235E38);
var getValue = (value != 3.4028235E38 || lo != 3.4028235E38 && hi == 3.4028235E38);
var haveRange = (hi != 3.4028235E38);
if (!haveRange && colorScheme.length == 0) {
value = lo;
var range = this.vwr.getCurrentColorRange();
lo = range[0];
hi = range[1];
}if (isIsosurface) {
var id = colorScheme.substring(1);
var data =  Clazz_newArray(-1, [id, null]);
if (!this.vwr.shm.getShapePropertyData(24, "colorEncoder", data)) return mp.addXStr("");
ce = data[1];
} else {
ce.setRange(lo, hi, lo > hi);
}var key = ce.getColorKey();
if (getValue) return mp.addXPt(JU.CU.colorPtFromInt(ce.getArgb(hi == 3.4028235E38 ? lo : value), null));
return mp.addX(JS.SV.getVariableMap(key));
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "evaluateCompare", 
function(mp, args){
var narg = args.length;
if (narg < 2 || narg > 5) return false;
var stddev;
var isTrue = (args[narg - 1].tok == 1073742335);
if (isTrue || args[narg - 1].tok == 1073742334) narg--;
var sOpt = JS.SV.sValue(args[narg - 1]);
var isStdDev = sOpt.equalsIgnoreCase("stddev");
var isIsomer = sOpt.equalsIgnoreCase("ISOMER");
var isTautomer = isIsomer && isTrue;
var isBonds = sOpt.equalsIgnoreCase("BONDS");
var isPoints = (args[0].tok == 7 && args[1].tok == 7);
var abmap = (narg >= 3 ? args[2].getList() : null);
var isSmiles = (abmap == null && !isPoints && !isIsomer && narg > (isStdDev ? 3 : 2));
var bs1 = (args[0].tok == 10 ? args[0].value : null);
var bs2 = (args[1].tok == 10 ? args[1].value : null);
var smiles1 = (bs1 == null ? JS.SV.sValue(args[0]) : "");
var smiles2 = (bs2 == null ? JS.SV.sValue(args[1]) : "");
stddev = NaN;
try {
if (isBonds) {
if (narg != 4) return false;
smiles1 = JS.SV.sValue(args[2]);
isSmiles = smiles1.equalsIgnoreCase("SMILES");
try {
if (isSmiles) smiles1 = this.vwr.getSmiles(bs1);
} catch (ex) {
if (Clazz_exceptionOf(ex, Exception)){
this.e.evalError(ex.getMessage(), null);
} else {
throw ex;
}
}
var data = this.e.getSmilesExt().getFlexFitList(bs1, bs2, smiles1, !isSmiles);
return (data == null ? mp.addXStr("") : mp.addXAF(data));
}if (isIsomer) {
if (narg != 3) return false;
if (bs1 == null && bs2 == null) {
var ret = this.vwr.getSmilesMatcher().getRelationship(smiles1, smiles2).toUpperCase();
return mp.addXStr(ret);
}var mf1 = (bs1 == null ? this.vwr.getSmilesMatcher().getMolecularFormula(smiles1, false, false) : JU.JmolMolecule.getMolecularFormulaAtoms(this.vwr.ms.at, bs1, null, false));
var mf2 = (bs2 == null ? this.vwr.getSmilesMatcher().getMolecularFormula(smiles2, false, false) : JU.JmolMolecule.getMolecularFormulaAtoms(this.vwr.ms.at, bs2, null, false));
if (!mf1.equals(mf2)) return mp.addXStr("NONE");
if (bs1 != null) smiles1 = this.e.getSmilesExt().getSmilesMatches("/strict///", null, bs1, null, 1, true, false);
var check;
if (bs2 == null) {
check = (this.vwr.getSmilesMatcher().areEqual(smiles2, smiles1) > 0);
} else {
smiles2 = this.e.getSmilesExt().getSmilesMatches("/strict///", null, bs2, null, 1, true, false);
check = ((this.e.getSmilesExt().getSmilesMatches("/strict///" + smiles1, null, bs2, null, 1, true, false)).nextSetBit(0) >= 0);
}if (!check) {
var s = smiles1 + smiles2;
if (s.indexOf("/") >= 0 || s.indexOf("\\") >= 0 || s.indexOf("@") >= 0) {
if (smiles1.indexOf("@") >= 0 && (bs2 != null || smiles2.indexOf("@") >= 0) && smiles1.indexOf("@SP") < 0) {
var pt = smiles1.toLowerCase().indexOf("invertstereo");
smiles1 = (pt >= 0 ? "/strict/" + smiles1.substring(0, pt) + smiles1.substring(pt + 12) : "/invertstereo strict/" + smiles1);
if (bs2 == null) {
check = (this.vwr.getSmilesMatcher().areEqual(smiles1, smiles2) > 0);
} else {
check = ((this.e.getSmilesExt().getSmilesMatches(smiles1, null, bs2, null, 1, true, false)).nextSetBit(0) >= 0);
}if (check) return mp.addXStr("ENANTIOMERS");
}if (bs2 == null) {
check = (this.vwr.getSmilesMatcher().areEqual("/nostereo/" + smiles2, smiles1) > 0);
} else {
var ret = this.e.getSmilesExt().getSmilesMatches("/nostereo/" + smiles1, null, bs2, null, 1, true, false);
check = ((ret).nextSetBit(0) >= 0);
}if (check) return mp.addXStr("DIASTEREOMERS");
}var ret = "CONSTITUTIONAL ISOMERS";
if (isTautomer) {
var inchi = this.vwr.getInchi(bs1, null, null);
if (inchi != null && inchi.equals(this.vwr.getInchi(bs2, null, null))) ret = "TAUTOMERS";
}return mp.addXStr(ret);
}if (bs1 == null || bs2 == null) return mp.addXStr("IDENTICAL");
stddev = this.e.getSmilesExt().getSmilesCorrelation(bs1, bs2, smiles1, null, null, null, null, false, null, null, false, 1);
return mp.addXStr(stddev < 0.2 ? "IDENTICAL" : "IDENTICAL or CONFORMATIONAL ISOMERS (RMSD=" + stddev + ")");
}var m =  new JU.M4();
var ptsA = null;
var ptsB = null;
if (isSmiles) {
if (bs1 == null || bs2 == null) return false;
sOpt = JS.SV.sValue(args[2]);
var isMap = sOpt.equalsIgnoreCase("MAP");
isSmiles = sOpt.equalsIgnoreCase("SMILES");
var isSearch = (isMap || sOpt.equalsIgnoreCase("SMARTS"));
if (isSmiles || isSearch) sOpt = (narg > (isStdDev ? 4 : 3) ? JS.SV.sValue(args[3]) : null);
var hMaps = (("H".equalsIgnoreCase(sOpt) || "allH".equalsIgnoreCase(sOpt) || "bestH".equalsIgnoreCase(sOpt)));
var isPolyhedron = !hMaps && ("polyhedra".equalsIgnoreCase(sOpt) || "polyhedron".equalsIgnoreCase(sOpt));
if (isPolyhedron) {
stddev = this.e.getSmilesExt().mapPolyhedra(bs1.nextSetBit(0), bs2.nextSetBit(0), isSmiles, m);
} else {
ptsA =  new JU.Lst();
ptsB =  new JU.Lst();
var allMaps = (("all".equalsIgnoreCase(sOpt) || "allH".equalsIgnoreCase(sOpt)));
var bestMap = (("best".equalsIgnoreCase(sOpt) || "bestH".equalsIgnoreCase(sOpt)));
if ("stddev".equals(sOpt)) sOpt = null;
var pattern = sOpt;
if (sOpt == null || hMaps || allMaps || bestMap) {
if (!isMap && !isSmiles || hMaps && isPolyhedron) return false;
pattern = "/noaromatic" + (allMaps || bestMap ? "/" : " nostereo/") + this.e.getSmilesExt().getSmilesMatches((hMaps ? "H" : ""), null, bs1, null, 32769, true, false);
} else {
allMaps = true;
}stddev = this.e.getSmilesExt().getSmilesCorrelation(bs1, bs2, pattern, ptsA, ptsB, m, null, isMap, null, null, bestMap, (isSmiles ? 1 : 2) | (!allMaps && !bestMap ? 8 : 0));
if (isMap) {
var nAtoms = ptsA.size();
if (nAtoms == 0) return mp.addXStr("");
var nMatch = Clazz_doubleToInt(ptsB.size() / nAtoms);
var ret =  new JU.Lst();
for (var i = 0, pt = 0; i < nMatch; i++) {
var a = JU.AU.newInt2(nAtoms);
ret.addLast(a);
for (var j = 0; j < nAtoms; j++, pt++) a[j] =  Clazz_newIntArray(-1, [(ptsA.get(j)).i, (ptsB.get(pt)).i]);

}
return (allMaps ? mp.addXList(ret) : ret.size() > 0 ? mp.addXAII(ret.get(0)) : mp.addXStr(""));
}}} else {
ptsA = this.e.getPointVector(args[0], 0);
ptsB = this.e.getPointVector(args[1], 0);
if (ptsA == null || ptsB == null) return false;
if (abmap != null) {
narg--;
var n = abmap.size();
if (n > ptsA.size() || n != ptsB.size()) return false;
var list =  new JU.Lst();
for (var i = 0; i < n; i++) list.addLast(ptsA.get(abmap.get(i).intValue - 1));

ptsA = list;
}switch (narg) {
case 2:
break;
case 3:
if (isStdDev) break;
default:
return false;
}
if (ptsA.size() == ptsB.size()) {
J.api.Interface.getInterface("JU.Eigen", this.vwr, "script");
stddev = JU.Measure.getTransformMatrix4(ptsA, ptsB, m, null);
}}return (isStdDev || Float.isNaN(stddev) ? mp.addXFloat(stddev) : mp.addXM4(m.round(1e-7)));
} catch (ex) {
if (Clazz_exceptionOf(ex, Exception)){
this.e.evalError(ex.getMessage() == null ? ex.toString() : ex.getMessage(), null);
return false;
} else {
throw ex;
}
}
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "evaluateConnected", 
function(mp, args, tok, intValue){
if (args.length > 5) return false;
var min = -2147483648;
var max = 2147483647;
var fmin = 0;
var fmax = 3.4028235E38;
var order = 65535;
var atoms1 = null;
var atoms2 = null;
var haveDecimal = false;
var isBonds = false;
switch (tok) {
case 1275203608:
var nv = -2147483648;
var smiles = null;
if (args.length > 0) {
switch (args[0].tok) {
case 2:
nv = args[0].intValue;
break;
case 4:
smiles = JS.SV.sValue(args[0]);
break;
}
}if (intValue == 1275203608) atoms1 = JS.SV.getBitSet(mp.getX(), true);
var data =  Clazz_newArray(-1, [Integer.$valueOf(nv), smiles, atoms1]);
if (!this.vwr.shm.getShapePropertyData(21, "getCenters", data)) data[1] = null;
return mp.addXBs(data[1] == null ?  new JU.BS() : data[1]);
case 1228931586:
var x1 = mp.getX();
if (x1.tok != 10 || args.length != 1 || args[0].tok != 10) return false;
atoms1 = x1.value;
atoms2 = args[0].value;
var list =  new JU.Lst();
var atoms = this.vwr.ms.at;
for (var i = atoms1.nextSetBit(0); i >= 0; i = atoms1.nextSetBit(i + 1)) {
var n = 0;
var b = atoms[i].bonds;
for (var j = b.length; --j >= 0; ) if (atoms2.get(b[j].getOtherAtom(atoms[i]).i)) n++;

list.addLast(Integer.$valueOf(n));
}
return mp.addXList(list);
}
for (var i = 0; i < args.length; i++) {
var $var = args[i];
switch ($var.tok) {
case 10:
isBonds = (Clazz_instanceOf($var.value,"JM.BondSet"));
if (isBonds && atoms1 != null) return false;
if (atoms1 == null) atoms1 = $var.value;
 else if (atoms2 == null) atoms2 = $var.value;
 else return false;
break;
case 4:
var type = JS.SV.sValue($var);
if (type.equalsIgnoreCase("hbond")) order = 30720;
 else order = JU.Edge.getBondOrderFromString(type);
if (order == 131071) return false;
break;
case 3:
haveDecimal = true;
default:
var n = $var.asInt();
var f = $var.asFloat();
if (max != 2147483647) return false;
if (min == -2147483648) {
min = Math.max(n, 0);
fmin = f;
} else {
max = n;
fmax = f;
}}
}
if (min == -2147483648) {
min = 1;
max = 100;
fmin = 0.1;
fmax = 1.0E8;
} else if (max == 2147483647) {
max = min;
fmax = fmin;
fmin = 0.1;
}if (atoms1 == null) atoms1 = this.vwr.getAllAtoms();
if (haveDecimal && atoms2 == null) atoms2 = atoms1;
if (atoms2 != null) {
var bsBonds =  new JU.BS();
this.vwr.makeConnections(fmin, fmax, order, 1086324745, atoms1, atoms2, bsBonds, isBonds, false, 0);
return mp.addX(JS.SV.newV(10, JM.BondSet.newBS(bsBonds)));
}return mp.addXBs(this.vwr.ms.getAtomsConnected(min, max, order, atoms1));
}, "JS.ScriptMathProcessor,~A,~N,~N");
Clazz_defineMethod(c$, "evaluateContact", 
function(mp, args){
if (args.length < 1 || args.length > 3) return false;
var i = 0;
var distance = 100;
var tok = args[0].tok;
switch (tok) {
case 3:
case 2:
distance = JS.SV.fValue(args[i++]);
break;
case 10:
break;
default:
return false;
}
if (i == args.length || !(Clazz_instanceOf(args[i].value,"JU.BS"))) return false;
var bsA = JU.BSUtil.copy(args[i++].value);
var bsB = (i < args.length ? JU.BSUtil.copy(args[i].value) : null);
var rd =  new J.atomdata.RadiusData(null, (distance > 10 ? distance / 100 : distance), (distance > 10 ? J.atomdata.RadiusData.EnumType.FACTOR : J.atomdata.RadiusData.EnumType.OFFSET), J.c.VDW.AUTO);
bsB = this.setContactBitSets(bsA, bsB, true, NaN, rd, false);
bsB.or(bsA);
return mp.addXBs(bsB);
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "evaluateData", 
function(mp, args){
var selected = (args.length == 0 ? "" : JS.SV.sValue(args[0]));
switch (args.length) {
case 0:
case 1:
break;
case 2:
case 3:
if (args[0].tok == 10) return mp.addXStr(this.vwr.getModelFileData(selected, JS.SV.sValue(args[1]), args.length == 3 && JS.SV.bValue(args[2])));
break;
case 4:
var iField = args[1].asInt();
var nBytes = args[2].asInt();
var firstLine = args[3].asInt();
var f = JU.Parser.parseFloatArrayFromMatchAndField(JS.SV.sValue(args[0]), null, 0, 0, null, iField, nBytes, null, firstLine);
return mp.addXStr(JU.Escape.escapeFloatA(f, false));
default:
return false;
}
if (selected.indexOf("data2d_") == 0) {
var f1 = this.vwr.getDataObj(selected, null, 2);
if (f1 == null) return mp.addXStr("");
if (args.length == 2 && args[1].tok == 2) {
var pt = args[1].intValue;
if (pt < 0) pt += f1.length;
if (pt >= 0 && pt < f1.length) return mp.addXStr(JU.Escape.escapeFloatA(f1[pt], false));
return mp.addXStr("");
}return mp.addXStr(JU.Escape.escapeFloatAA(f1, false));
}if (selected.endsWith("*")) return mp.addXList(this.vwr.getDataObj(selected, null, 0));
if (selected.indexOf("property_") == 0) {
var f1 = this.vwr.getDataObj(selected, null, 1);
return (f1 == null ? mp.addXStr("") : mp.addXStr(JU.Escape.escapeFloatA(f1, false)));
}var data = this.vwr.getDataObj(selected, null, -1);
return mp.addXStr(data == null || data.length < 2 ? "" : "" + data[1]);
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "evaluateDotDist", 
function(mp, args, tok, op){
var isDist = (tok == 1275069443);
var x1;
var x2;
var x3 = null;
switch (args.length) {
case 2:
if (op == 2147483647) {
x1 = args[0];
x2 = args[1];
break;
}x3 = args[1];
case 1:
x1 = mp.getX();
x2 = args[0];
break;
case 0:
if (isDist) {
x1 = mp.getX();
x2 = JS.SV.getVariable( new JU.P3());
break;
}default:
return false;
}
var f = NaN;
try {
if (tok == 1275069442) {
var a = JU.P3.newP(mp.ptValue(x1, null));
a.cross(a, mp.ptValue(x2, null));
return mp.addXPt(a);
}var pt2 = (x2.tok == 7 ? null : mp.ptValue(x2, null));
var plane2 = this.e.planeValue(x2);
if (isDist) {
var minMax = (op == -2147483648 ? 0 : op & 480);
var isMinMax = (minMax == 32 || minMax == 64);
var isAll = minMax == 480;
switch (x1.tok) {
case 7:
case 10:
var isAtomSet1 = (x1.tok == 10);
var isAtomSet2 = (x2.tok == 10);
var isPoint2 = (x2.tok == 8);
var bs1 = (isAtomSet1 ? x1.value : null);
var bs2 = (isAtomSet2 ? x2.value : null);
var list1 = (isAtomSet1 ? null : x1.getList());
var list2 = (isAtomSet2 ? null : x2.getList());
var returnAtom = (isMinMax && x3 != null && x3.asBoolean());
switch (x2.tok) {
case 10:
case 7:
case 8:
var atoms = this.vwr.ms.at;
if (returnAtom) {
var dMinMax = NaN;
var iMinMax = 2147483647;
if (isAtomSet1) {
for (var i = bs1.nextSetBit(0); i >= 0; i = bs1.nextSetBit(i + 1)) {
var d = (isPoint2 ? atoms[i].distanceSquared(pt2) : (this.e.getBitsetProperty(bs2, list2, op, atoms[i], plane2, x1.value, null, false, x1.index, false)).floatValue());
if (minMax == 32 ? d >= dMinMax : d <= dMinMax) continue;
dMinMax = d;
iMinMax = i;
}
return mp.addXBs(iMinMax == 2147483647 ?  new JU.BS() : JU.BSUtil.newAndSetBit(iMinMax));
}for (var i = list1.size(); --i >= 0; ) {
var pt = JS.SV.ptValue(list1.get(i));
var d = (isPoint2 ? pt.distanceSquared(pt2) : (this.e.getBitsetProperty(bs2, list2, op, pt, plane2, x1.value, null, false, 2147483647, false)).floatValue());
if (minMax == 32 ? d >= dMinMax : d <= dMinMax) continue;
dMinMax = d;
iMinMax = i;
}
return mp.addXInt(iMinMax);
}if (isAll) {
if (bs2 == null) {
var data =  Clazz_newFloatArray (bs1.cardinality(), 0);
for (var p = 0, i = bs1.nextSetBit(0); i >= 0; i = bs1.nextSetBit(i + 1), p++) data[p] = atoms[i].distance(pt2);

return mp.addXAF(data);
}var data2 =  Clazz_newFloatArray (bs1.cardinality(), bs2.cardinality(), 0);
for (var p = 0, i = bs1.nextSetBit(0); i >= 0; i = bs1.nextSetBit(i + 1), p++) for (var q = 0, j = bs2.nextSetBit(0); j >= 0; j = bs2.nextSetBit(j + 1), q++) data2[p][q] = atoms[i].distance(atoms[j]);


return mp.addXAFF(data2);
}if (isMinMax) {
var data =  Clazz_newFloatArray (isAtomSet1 ? bs1.cardinality() : list1.size(), 0);
if (isAtomSet1) {
for (var i = bs1.nextSetBit(0), p = 0; i >= 0; i = bs1.nextSetBit(i + 1)) data[p++] = (this.e.getBitsetProperty(bs2, list2, op, atoms[i], plane2, x1.value, null, false, x1.index, false)).floatValue();

return mp.addXAF(data);
}for (var i = data.length; --i >= 0; ) data[i] = (this.e.getBitsetProperty(bs2, list2, op, JS.SV.ptValue(list1.get(i)), plane2, null, null, false, 2147483647, false)).floatValue();

return mp.addXAF(data);
}return mp.addXObj(this.e.getBitsetProperty(bs1, list1, op, pt2, plane2, x1.value, null, false, x1.index, false));
}
}
}var pt1 = mp.ptValue(x1, null);
var plane1 = this.e.planeValue(x1);
if (isDist) {
if (plane2 != null && x3 != null) f = JU.Measure.directedDistanceToPlane(pt1, plane2, JS.SV.ptValue(x3));
 else f = (plane1 == null ? (plane2 == null ? pt2.distance(pt1) : JU.Measure.distanceToPlane(plane2, pt1)) : JU.Measure.distanceToPlane(plane1, pt2));
} else {
if (plane1 != null && plane2 != null) {
f = plane1.x * plane2.x + plane1.y * plane2.y + plane1.z * plane2.z + plane1.w * plane2.w;
} else {
if (plane1 != null) pt1 = JU.P3.new3(plane1.x, plane1.y, plane1.z);
 else if (plane2 != null) pt2 = JU.P3.new3(plane2.x, plane2.y, plane2.z);
f = pt1.dot(pt2);
}}} catch (e) {
if (Clazz_exceptionOf(e, Exception)){
} else {
throw e;
}
}
return mp.addXFloat(f);
}, "JS.ScriptMathProcessor,~A,~N,~N");
Clazz_defineMethod(c$, "evaluateHelix", 
function(mp, args){
if (args.length < 1 || args.length > 5) return false;
var pt = (args.length > 2 ? 3 : 1);
var type = (pt >= args.length ? "array" : JS.SV.sValue(args[pt]));
var tok = JS.T.getTokFromName(type);
if (args.length > 2) {
var pta = mp.ptValue(args[0], null);
var ptb = mp.ptValue(args[1], null);
if (tok == 0 || args[2].tok != 9 || pta == null || ptb == null) return false;
var dq = JU.Quat.newP4(args[2].value);
var data = JU.Measure.computeHelicalAxis(pta, ptb, dq);
return (data == null ? false : mp.addXObj(JU.Escape.escapeHelical(type, tok, pta, ptb, data)));
}var bs = (Clazz_instanceOf(args[0].value,"JU.BS") ? args[0].value : this.vwr.ms.getAtoms(1094715412, Integer.$valueOf(args[0].asInt())));
switch (tok) {
case 134217751:
case 1073741854:
case 1665140738:
return mp.addXObj(this.getHelixData(bs, tok));
case 134217729:
return mp.addXFloat((this.getHelixData(bs, 134217729)).floatValue());
case 135176:
case 1745489939:
return mp.addXObj(this.getHelixData(bs, tok));
case 1275068418:
var data = this.getHelixData(bs, 1073742001);
if (data == null) return false;
return mp.addXAS(data);
}
return false;
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "getHelixData", 
function(bs, tokType){
var iAtom = bs.nextSetBit(0);
return (iAtom < 0 ? "null" : this.vwr.ms.at[iAtom].group.getHelixData(tokType, this.vwr.getQuaternionFrame(), this.vwr.getInt(553648142)));
}, "JU.BS,~N");
Clazz_defineMethod(c$, "evaluateInChI", 
function(mp, args){
var x1 = mp.getX();
var flags = (args.length > 0 ? JS.SV.sValue(args[0]) : "fixedh?");
if (flags.toLowerCase().equals("standard")) flags = "";
var atoms = JS.SV.getBitSet(x1, true);
var molData = (atoms == null ? JS.SV.sValue(x1) : null);
var ret = this.vwr.getInchi(atoms, molData, flags);
return (flags.indexOf("model") >= 0 ? mp.addXMap(this.vwr.parseJSONMap(ret)) : mp.addXStr(ret));
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "evaluateFind", 
function(mp, args){
var x1 = mp.getX();
var isList = (x1.tok == 7);
var isAtoms = (x1.tok == 10);
var isEmpty = (args.length == 0);
var tok0 = (args.length == 0 ? 0 : args[0].tok);
var sFind = (isEmpty || tok0 != 4 ? "" : JS.SV.sValue(args[0]));
var isOff = (args.length > 1 && args[1].tok == 1073742334);
var tokLast = (tok0 == 0 ? 0 : args[args.length - 1].tok);
var argLast = (tokLast == 0 ? JS.SV.vF : args[args.length - 1]);
var isON = !isList && (tokLast == 1073742335);
var asIndex = (isList && argLast.tok == 4 && "index".equalsIgnoreCase(JS.SV.sValue(argLast)));
var flags = (args.length > 1 && args[1].tok != 1073742335 && args[1].tok != 1073742334 && args[1].tok != 10 ? JS.SV.sValue(args[1]) : "");
var isSequence = !isList && !isOff && sFind.equalsIgnoreCase("SEQUENCE");
var isSeq = !isList && !isOff && sFind.equalsIgnoreCase("SEQ");
if (sFind.toUpperCase().startsWith("SMILES/")) {
if (!sFind.endsWith("/")) sFind += "/";
var s = sFind.substring(6) + "//";
if (JV.JC.isSmilesCanonical(s)) {
flags = "SMILES";
sFind = "CHEMICAL";
} else {
sFind = "SMILES";
flags = s + flags;
}} else if (sFind.toUpperCase().startsWith("SMARTS/")) {
if (!sFind.endsWith("/")) sFind += "/";
flags = sFind.substring(6) + (flags.length == 0 ? "//" : flags);
sFind = "SMARTS";
}var smiles = null;
var isStr = false;
var isPatternObj = (args.length > 0 && args[0].tok == 134218753);
if (!isPatternObj && x1.tok == 4) {
switch (args.length) {
case 1:
if ((x1.value).startsWith("InChI=")) {
if (sFind.equalsIgnoreCase("SMILES")) {
return mp.addXStr(this.vwr.getInchi(null, x1.value, "SMILES" + flags));
}}isStr = !sFind.equals("SMILES");
break;
case 2:
case 3:
if (isOff || isON) {
isStr = true;
} else if ((x1.value).startsWith("InChI=")) {
if (sFind.equals("SMARTS")) {
smiles = this.vwr.getInchi(null, x1.value, "SMILES");
} else {
isStr = true;
}} else if (flags.length <= 3) {
if (flags.$replace('m', ' ').$replace('i', ' ').$replace('v', ' ').trim().length == 0) isStr = true;
}break;
}
}var isSmiles = !isStr && sFind.equalsIgnoreCase("SMILES");
var isSMARTS = isPatternObj || !isStr && sFind.equalsIgnoreCase("SMARTS");
var isChemical = !isList && !isStr && sFind.equalsIgnoreCase("CHEMICAL");
var isMF = !isList && !isStr && sFind.equalsIgnoreCase("MF");
var isCF = !isList && !isStr && sFind.equalsIgnoreCase("CELLFORMULA");
var isInchi = isAtoms && !isList && sFind.equalsIgnoreCase("INCHI");
var isInchiKey = isAtoms && !isList && sFind.equalsIgnoreCase("INCHIKEY");
var isStructureMap = (!isSmiles && !isSMARTS && tok0 == 10 && flags.toLowerCase().indexOf("map") >= 0);
var isEquivalent = !isSmiles && !isSMARTS && ((x1.tok == 10 || x1.tok == 8 || x1.tok == 7) && sFind.toLowerCase().startsWith("equivalent"));
try {
if (isEquivalent) {
switch (x1.tok) {
case 10:
return mp.addXBs(this.vwr.ms.getSymmetryEquivAtoms(x1.value, null, null));
case 8:
return mp.addXList(this.vwr.getSymmetryEquivPoints(x1.value, sFind + flags));
case 7:
var lst =  new JU.Lst();
var l0 = x1.getList();
for (var i = 0, n = l0.size(); i < n; i++) {
var p = JS.SV.ptValue(l0.get(i));
if (p == null) return false;
lst.addLast(p);
}
return mp.addXList(this.vwr.getSymmetryEquivPointList(lst, sFind + flags));
}
} else if (isInchi || isInchiKey) {
if (isInchiKey) flags += " key";
return mp.addXStr(this.vwr.getInchi(JS.SV.getBitSet(x1, true), null, flags));
}if (isChemical) {
var bsAtoms = (isAtoms ? x1.value : null);
var data = (bsAtoms == null ? JS.SV.sValue(x1) : this.vwr.getOpenSmiles(bsAtoms));
data = (data.length == 0 ? "" : this.vwr.getChemicalInfo(data, flags.toLowerCase(), bsAtoms)).trim();
if (data.startsWith("InChI")) data = JU.PT.rep(JU.PT.rep(data, "InChI=", ""), "InChIKey=", "");
return mp.addXStr(data);
}if (isSmiles || isSMARTS || isAtoms) {
var iPt = (isStructureMap ? 0 : isSmiles || isSMARTS ? 2 : 1);
var bs2 = (iPt < args.length && args[iPt].tok == 10 ? args[iPt++].value : null);
var asBonds = (argLast.tok == 4 && "bonds".equalsIgnoreCase(JS.SV.sValue(argLast)));
var isAll = (asBonds || isON);
var isSmilesObj = false;
var ret = null;
switch (x1.tok) {
case 134218753:
isSmilesObj = true;
case 7:
case 4:
if (smiles == null && !isList) {
smiles = x1.value;
}if ((isSmiles || isSMARTS) && args.length == 1 && flags == null) {
return false;
}if (bs2 != null) return false;
if (flags.equalsIgnoreCase("mf")) {
ret = this.vwr.getSmilesMatcher().getMolecularFormula(smiles.toString(), isSMARTS, isON);
} else {
var pattern = (isPatternObj ? args[0].value : flags);
var allMappings = true;
var asMap = false;
if (isPatternObj) {
switch (args.length) {
case 3:
allMappings = JS.SV.bValue(args[2]);
case 2:
asMap = JS.SV.bValue(args[1]);
break;
}
} else {
switch (args.length) {
case 4:
allMappings = JS.SV.bValue(args[3]);
case 3:
asMap = JS.SV.bValue(args[2]);
break;
}
}var isChirality = (!isPatternObj && pattern.equals("chirality"));
var justOne = (!asMap && (!allMappings || !isSMARTS && !isChirality));
try {
if (isList) {
var list = x1.getList();
var o =  new Array(list.size());
for (var i = o.length; --i >= 0; ) {
o[i] = list.get(i).value;
}
smiles = o;
}ret = this.e.getSmilesExt().getSmilesMatches(pattern, smiles, null, null, isSMARTS ? 2 : 1, !asMap, !allMappings);
if (isList) return mp.addXObj(ret);
} catch (ex) {
if (Clazz_exceptionOf(ex, Exception)){
System.out.println(ex.getMessage());
return mp.addXInt(-1);
} else {
throw ex;
}
}
var len = (isChirality ? 1 : JU.AU.isAI(ret) ? (ret).length : (ret).length);
if (len == 0 && this.vwr.getSmilesMatcher().getLastException() !== "MF_FAILED" && (isSmilesObj || (smiles).toLowerCase().indexOf("noaromatic") < 0 && (smiles).toLowerCase().indexOf("strict") < 0)) {
ret = this.e.getSmilesExt().getSmilesMatches(pattern, smiles, null, null, 16 | (isSMARTS ? 2 : 1), !asMap, !allMappings);
}if (justOne) {
return mp.addXInt(!allMappings && len > 0 ? 1 : len);
}}break;
case 10:
var bs = x1.value;
if (sFind.equalsIgnoreCase("spacegroup")) {
var o = this.vwr.findSpaceGroup(null, bs, null, null, null, null, ("parent".equals(flags.toLowerCase()) ? 8 : 0));
if (o != null) {
var s = o.toString();
o = JU.PT.rep(s.substring(s.indexOf(" ") + 1), " #", "\t");
}return mp.addXStr(o.toString());
}if (sFind.equalsIgnoreCase("crystalClass")) {
var n = bs.nextSetBit(0);
var bsNew = null;
if (args.length != 2) {
bsNew =  new JU.BS();
bsNew.set(n);
}return mp.addXList(this.vwr.ms.generateCrystalClass(n, (bsNew != null ? this.vwr.ms.getAtomSetCenter(bsNew) : argLast.tok == 10 ? this.vwr.ms.getAtomSetCenter(argLast.value) : JS.SV.ptValue(argLast))));
}if (isMF && flags.length != 0) {
return mp.addXBs(JU.JmolMolecule.getBitSetForMF(this.vwr.ms.at, bs, flags));
}if (isMF || isCF) {
var isEmpirical = isON;
return mp.addXStr(this.vwr.getFormulaForAtoms(bs, (isMF ? "MF" : "CELLFORMULA"), isEmpirical));
}if (isSequence || isSeq) {
var isHH = (argLast.asString().equalsIgnoreCase("H"));
isAll = new Boolean (isAll | isHH).valueOf();
return mp.addXStr(this.vwr.getSmilesOpt(bs, -1, -1, (isAll ? 3145728 | 5242880 | (isHH ? 9437184 : 0) : 0) | (isSeq ? 34603008 : 1048576), null));
}if (isStructureMap) {
var map = null;
var map1 = null;
var map2 = null;
var mapNames = null;
var key = (args.length == 3 ? JS.SV.sValue(argLast) : null);
var itype = (key == null || key.equals("%i") || key.equals("number") ? 'i' : key.equals("%a") || key.equals("name") ? 'a' : key.equals("%D") || key.equals("index") ? 'D' : '?');
if (key == null) key = "number";
var err = null;
flags = flags.$replace("map", "").trim();
sFind = this.vwr.getSmilesOpt(bs, 0, 0, 0, flags);
if (bs.cardinality() != bs2.cardinality()) {
err = "atom sets are not the same size";
} else {
try {
var iflags = (137);
if (flags.length > 0) sFind = "/" + flags + "/" + sFind;
map1 = this.vwr.getSmilesMatcher().getCorrelationMaps(sFind, this.vwr.ms.at, this.vwr.ms.ac, bs, iflags)[0];
var m2 = this.vwr.getSmilesMatcher().getCorrelationMaps(sFind, this.vwr.ms.at, this.vwr.ms.ac, bs2, iflags);
if (m2.length > 0) {
map =  Clazz_newIntArray (bs.length(), 0);
for (var i = map.length; --i >= 0; ) map[i] = -1;

map2 = m2[0];
for (var i = map1.length; --i >= 0; ) map[map1[i]] = map2[i];

mapNames =  Clazz_newArray(map1.length, 2, null);
var bsAll = JU.BS.copy(bs);
bsAll.or(bs2);
var names = (itype == '?' ?  new Array(bsAll.length()) : null);
if (names != null) names = this.e.getCmdExt().getBitsetIdentFull(bsAll, key, false, 2147483647, false, names);
var at = this.vwr.ms.at;
for (var pt = 0, i = bs.nextSetBit(0); i >= 0; i = bs.nextSetBit(i + 1)) {
var j = map[i];
if (j == -1) continue;
var a;
switch ((itype).charCodeAt(0)) {
case 97:
a =  Clazz_newArray(-1, [at[i].getAtomName(), at[j].getAtomName()]);
break;
case 105:
a =  Clazz_newArray(-1, [Integer.$valueOf(at[i].getAtomNumber()), Integer.$valueOf(at[j].getAtomNumber())]);
break;
case 68:
a =  Clazz_newArray(-1, [Integer.$valueOf(i), Integer.$valueOf(j)]);
break;
default:
a =  Clazz_newArray(-1, [names[i], names[j]]);
break;
}
mapNames[pt++] = a;
}
}} catch (ee) {
if (Clazz_exceptionOf(ee, Exception)){
err = ee.getMessage();
} else {
throw ee;
}
}
}var m =  new java.util.Hashtable();
m.put("BS1", bs);
m.put("BS2", bs2);
m.put("SMILES", sFind);
if (err == null) {
m.put("SMILEStoBS1", map1);
m.put("SMILEStoBS2", map2);
m.put("BS1toBS2", map);
m.put("MAP1to2", mapNames);
m.put("key", key);
} else {
m.put("error", err);
}return mp.addXMap(m);
}if (isSmiles || isSMARTS) {
sFind = (args.length > 1 && args[1].tok == 10 ? this.vwr.getSmilesOpt(args[1].value, 0, 0, 0, flags) : flags);
}flags = flags.toUpperCase();
var bsMatch3D = bs2;
if (flags.indexOf("INCHI") >= 0) {
return mp.addXStr(this.vwr.getInchi(bs, null, "SMILES/" + flags));
}if (flags.equals("MF")) {
smiles = this.e.getSmilesExt().getSmilesMatches("", null, bs, bsMatch3D, 1, true, false);
ret = this.vwr.getSmilesMatcher().getMolecularFormula(smiles.toString(), false, isON);
} else if (asBonds) {
var map = this.vwr.getSmilesMatcher().getCorrelationMaps(sFind, this.vwr.ms.at, this.vwr.ms.ac, bs, (isSmiles ? 1 : 2) | 8);
ret = (map.length > 0 ? this.vwr.ms.getDihedralMap(map[0]) :  Clazz_newIntArray (0, 0));
} else if (flags.equals("MAP")) {
var map = this.vwr.getSmilesMatcher().getCorrelationMaps(sFind, this.vwr.ms.at, this.vwr.ms.ac, bs, (isSmiles ? 1 : 2) | 128 | 16);
ret = map;
} else {
var smilesFlags = (isSmiles ? (flags.indexOf("OPEN") >= 0 ? 5 : 1) : 2) | (isON && sFind.length == 0 ? 22020096 : 0);
if (isSmiles && flags.indexOf("/ALL/") >= 0) {
smilesFlags |= 32768;
}if (flags.indexOf("/MOLECULE/") >= 0) {
var mols = this.vwr.ms.getMolecules();
var molList =  new JU.Lst();
for (var i = 0; i < mols.length; i++) {
if (mols[i].atomList.intersects(bs)) {
var bsRet = this.e.getSmilesExt().getSmilesMatches(sFind, null, mols[i].atomList, bsMatch3D, smilesFlags, !isON, false);
if (!bsRet.isEmpty()) molList.addLast(bsRet);
}}
ret = molList;
} else {
ret = this.e.getSmilesExt().getSmilesMatches(sFind, null, bs, bsMatch3D, smilesFlags, !isON, false);
}}break;
}
if (ret == null) this.e.invArg();
return mp.addXObj(ret);
}} catch (ex) {
if (Clazz_exceptionOf(ex, Exception)){
this.e.evalError(ex.getMessage(), null);
} else {
throw ex;
}
}
var bs =  new JU.BS();
var svlist = (isList ? x1.getList() : null);
if (isList && tok0 != 4 && tok0 != 0) {
var v = args[0];
for (var i = 0, n = svlist.size(); i < n; i++) {
if (JS.SV.areEqual(svlist.get(i), v)) bs.set(i);
}
var ret =  Clazz_newIntArray (bs.cardinality(), 0);
for (var pt = 0, i = bs.nextSetBit(0); i >= 0; i = bs.nextSetBit(i + 1)) ret[pt++] = i + 1;

return mp.addXAI(ret);
}var isReverse = (flags.indexOf("v") >= 0);
var isCaseInsensitive = (flags.indexOf("i") >= 0) || isOff;
var asMatch = (flags.indexOf("m") >= 0);
var checkEmpty = (sFind.length == 0);
var isPattern = (!checkEmpty && !isEquivalent && args.length == (asIndex ? 3 : 2));
if (isList || isPattern) {
var pm = (isPattern ? this.getPatternMatcher() : null);
var pattern = null;
if (isPattern) {
try {
pattern = pm.compile(sFind, isCaseInsensitive);
} catch (ex) {
if (Clazz_exceptionOf(ex, Exception)){
this.e.evalError(ex.toString(), null);
} else {
throw ex;
}
}
}var list = (checkEmpty ? null : JS.SV.strListValue(x1));
var nlist = (checkEmpty ? svlist.size() : list.length);
if (JU.Logger.debugging) JU.Logger.debug("finding " + sFind);
var n = 0;
var matcher = null;
var v = (asMatch ?  new JU.Lst() : null);
var what = "";
for (var i = 0; i < nlist; i++) {
var isMatch;
if (checkEmpty) {
var o = svlist.get(i);
switch (o.tok) {
case 6:
isMatch = (o.getMap().isEmpty() != isEmpty);
break;
case 7:
isMatch = ((o.getList().size() == 0) != isEmpty);
break;
case 4:
isMatch = ((o.asString().length == 0) != isEmpty);
break;
default:
isMatch = true;
}
} else if (isPattern) {
what = list[i];
matcher = pattern.matcher(what);
isMatch = matcher.find();
} else {
isMatch = (JS.SV.sValue(svlist.get(i)).indexOf(sFind) >= 0);
}if (asMatch && isMatch || !asMatch && isMatch == !isReverse) {
n++;
bs.set(i);
if (asMatch) v.addLast(isReverse ? what.substring(0, matcher.start()) + what.substring(matcher.end()) : matcher.group());
}}
if (!isList) {
return (asMatch ? mp.addXStr(v.size() == 1 ? v.get(0) : "") : isReverse ? mp.addXBool(n == 1) : asMatch ? mp.addXStr(n == 0 ? "" : matcher.group()) : mp.addXInt(n == 0 ? 0 : matcher.start() + 1));
}if (asIndex) {
var lst =  new JU.Lst();
for (var i = bs.nextSetBit(0); i >= 0; i = bs.nextSetBit(i + 1)) {
lst.addLast(JS.SV.newI(i + 1));
}
return mp.addXList(lst);
}if (asMatch) {
var listNew =  new Array(n);
if (n > 0) for (var i = list.length; --i >= 0; ) if (bs.get(i)) {
--n;
listNew[n] = (asMatch ? v.get(n) : list[i]);
}
return mp.addXAS(listNew);
}var l =  new JU.Lst();
for (var i = bs.nextSetBit(0); i >= 0; i = bs.nextSetBit(i + 1)) l.addLast(svlist.get(i));

return mp.addXList(l);
}if (isSequence) {
return mp.addXStr(this.vwr.getJBR().toStdAmino3(JS.SV.sValue(x1)));
}return mp.addXInt(JS.SV.sValue(x1).indexOf(sFind) + 1);
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "evaluateGetProperty", 
function(mp, args, tok0, isAtomProperty){
var nargs = args.length;
var isSelect = (isAtomProperty && tok0 == 1275082241);
var isPivot = (isAtomProperty && tok0 == 1275068725);
var isAuxiliary = (tok0 == 1275068446);
var pt = 0;
var tok = (nargs == 0 ? 0 : args[0].tok);
if (nargs == 2 && (tok == 7 || tok == 6 || tok == 14)) {
return mp.addXObj(this.vwr.extractProperty(args[0].value, args[1].value.toString(), -1));
}var bsSelect = (isAtomProperty && nargs == 1 && args[0].tok == 10 ? args[0].value : null);
var pname = (bsSelect == null && nargs > 0 ? JS.SV.sValue(args[pt++]) : "");
var propertyName = pname;
var lc = propertyName.toLowerCase();
if (!isSelect && lc.indexOf("[select ") < 0) propertyName = lc;
var isJSON = false;
if (propertyName.equals("json") && nargs > pt) {
isJSON = true;
propertyName = JS.SV.sValue(args[pt++]);
}var x = null;
if (isAtomProperty) {
x = mp.getX();
switch (x.tok) {
case 10:
break;
case 4:
var name = x.value;
var data =  new Array(3);
var shapeID;
if (name.startsWith("$")) {
name = name.substring(1);
shapeID = this.vwr.shm.getShapeIdFromObjectName(name);
if (shapeID >= 0) {
data[0] = name;
this.vwr.shm.getShapePropertyData(shapeID, "index", data);
if (data[1] != null && !pname.equals("index")) {
var index = (data[1]).intValue();
data[1] = this.vwr.shm.getShapePropertyIndex(shapeID, pname.intern(), index);
}}} else {
shapeID = JV.JC.shapeTokenIndex(JS.T.getTokFromName(name));
if (shapeID >= 0) {
data[0] = pname;
data[1] = Integer.$valueOf(-1);
this.vwr.shm.getShapePropertyData(shapeID, pname.intern(), data);
}}return (data[1] == null ? mp.addXStr("") : mp.addXObj(data[1]));
case 7:
if (isPivot) {
var lstx = x.getList();
if (nargs == 0) return mp.addXObj(this.getMinMax(lstx, 1275068725, true));
var map =  new java.util.Hashtable();
var sep = (nargs > 1 ? JS.SV.sValue(args[nargs - 1]) : null);
if (sep != null) nargs--;
var keys =  new Array(nargs);
for (var i = 0; i < nargs; i++) keys[i] = JS.SV.sValue(args[i]);

for (var i = 0, n = lstx.size(); i < n; i++) {
var sv = lstx.get(i);
if (sv.tok != 6) continue;
var mapi = sv.getMap();
var key = "";
for (var j = 0; j < nargs; j++) {
var obj = mapi.get(keys[j]);
key += (j == 0 ? "" : sep) + JS.SV.sValue(obj);
}
var vlist = map.get(key);
if (vlist == null) map.put(key, vlist = JS.SV.newV(7,  new JU.Lst()));
vlist.getList().addLast(sv);
}
return mp.addXMap(map);
}if (bsSelect != null) {
var l0 = x.getList();
var lst =  new JU.Lst();
for (var i = bsSelect.nextSetBit(0); i >= 0; i = bsSelect.nextSetBit(i + 1)) lst.addLast(l0.get(i));

return mp.addXList(lst);
}default:
if (tok0 == 1275068725 && x.tok == 6) {
var map =  new java.util.Hashtable();
var map0 = x.getMap();
for (var e, $e = map0.entrySet().iterator (); $e.hasNext()&& ((e = $e.next ()) || true);) {
var key = e.getKey();
var s = e.getValue().asString();
var l = map.get(s);
if (l == null) map.put(s, l =  new JU.Lst());
l.addLast(key);
}
if ("count".equals(lc)) {
for (var e, $e = map.entrySet().iterator (); $e.hasNext()&& ((e = $e.next ()) || true);) {
e.setValue(Integer.$valueOf((e.getValue()).size()));
}
}return mp.addXMap(map);
}if (isSelect) propertyName = "[SELECT " + propertyName + "]";
return mp.addXObj(this.vwr.extractProperty(x, propertyName, -1));
}
if (!lc.startsWith("bondinfo") && !lc.startsWith("atominfo") && !lc.startsWith("modelkitinfo")) propertyName = "atomInfo." + propertyName;
}var propertyValue = "";
if (propertyName.equalsIgnoreCase("fileContents") && nargs >= 2) {
var s = JS.SV.sValue(args[1]);
for (var i = 2; i < nargs; i++) s += "|" + JS.SV.sValue(args[i]);

propertyValue = s;
pt = nargs;
} else if (nargs > pt) {
switch (args[pt].tok) {
case 10:
propertyValue = args[pt++].value;
if (propertyName.equalsIgnoreCase("bondInfo") && nargs > pt && args[pt].tok == 10) propertyValue =  Clazz_newArray(-1, [propertyValue, args[pt].value]);
break;
case 6:
case 4:
if (this.vwr.checkPropertyParameter(propertyName)) propertyValue = args[pt++].value;
break;
}
}if (isAtomProperty) {
var bs = x.value;
var iAtom = bs.nextSetBit(0);
if (iAtom < 0) return mp.addXStr("");
propertyValue = bs;
}if (isAuxiliary && !isAtomProperty) propertyName = "auxiliaryInfo.models." + propertyName;
propertyName = JU.PT.rep(propertyName, ".[", "[");
var property = this.vwr.getProperty(null, propertyName, propertyValue);
if (pt < nargs) property = this.vwr.extractProperty(property, args, pt);
return mp.addXObj(isJSON ? JS.SV.safeJSON("value", property) : JS.SV.isVariableType(property) ? property : JU.Escape.toReadable(propertyName, property));
}, "JS.ScriptMathProcessor,~A,~N,~B");
Clazz_defineMethod(c$, "evaluateFormat", 
function(mp, intValue, args, isLabel){
if (isLabel && args.length > 1) return false;
var x1 = (args.length < 2 || intValue == 1287653388 ? mp.getX() : null);
var format;
var pt = -1;
var x = null;
switch (args.length) {
case 0:
format = "%U";
break;
case 1:
if (x1 == null) return false;
switch (args[0].tok) {
case 7:
format = null;
break;
case 4:
format = args[0].value;
pt = JS.SV.getFormatType(format);
if (pt >= 0) x = x1;
break;
default:
return false;
}
break;
case 2:
if (args[0].tok == 4) {
format = JS.SV.sValue(args[0]);
x = args[1];
} else {
x = args[0];
format = JS.SV.sValue(args[1]);
}pt = JS.SV.getFormatType(format);
break;
default:
format = args[0].value;
pt = JS.SV.getFormatType(format);
if (pt >= 0) return false;
break;
}
switch (pt) {
case -1:
break;
case 28:
case 32:
case 36:
return (x.tok == 12 && mp.addXStr(this.matToString(x.value, pt)));
default:
return mp.addXObj(JS.SV.getFormat(x, pt));
}
var bs = (x1 != null && x1.tok == 10 ? x1.value : null);
if (!isLabel && args.length > 0 && bs == null && format != null) {
if (args.length == 2) {
var listIn = x1.getList();
var formatList = x.getList();
if (listIn == null || formatList == null) return false;
x1 = JS.SV.getVariableList(this.getSublist(listIn, formatList));
}args =  Clazz_newArray(-1, [args[0], x1]);
x1 = null;
}if (x1 == null) {
if (format == null || pt >= 0 && args.length != 2) return false;
if (pt >= 0 || args.length < 2 || args[1].tok != 7) {
var o = JS.SV.format(args, pt);
return ((typeof(o)=='string') ? mp.addXStr(o) : mp.addXObj(o));
}var a = args[1].getList();
var args2 =  Clazz_newArray(-1, [args[0], null]);
var sa =  new Array(a.size());
for (var i = sa.length; --i >= 0; ) {
args2[1] = a.get(i);
sa[i] = JS.SV.format(args2, pt).toString();
}
return mp.addXAS(sa);
}if (x1.tok == 7 && format == null) {
var listIn = x1.getList();
var formatList = args[0].getList();
var listOut = this.getSublist(listIn, formatList);
return mp.addXList(listOut);
}var ret = null;
if (format == null) {
ret = "";
} else if (bs == null) {
ret = JS.SV.sprintf(JU.PT.formatCheck(format), x1);
} else {
ret = this.e.getCmdExt().getBitsetIdent(bs, format, x1.value, true, x1.index, false);
}return mp.addXObj(ret);
}, "JS.ScriptMathProcessor,~N,~A,~B");
Clazz_defineMethod(c$, "getSublist", 
function(listIn, formatList){
var listOut =  new JU.Lst();
var map;
var v;
var list;
for (var i = 0, n = listIn.size(); i < n; i++) {
var element = listIn.get(i);
switch (element.tok) {
case 6:
map = element.getMap();
list =  new JU.Lst();
for (var j = 0, n1 = formatList.size(); j < n1; j++) {
v = map.get(JS.SV.sValue(formatList.get(j)));
list.addLast(v == null ? JS.SV.newS("") : v);
}
listOut.addLast(JS.SV.getVariableList(list));
break;
case 7:
map =  new java.util.Hashtable();
list = element.getList();
for (var j = 0, n1 = Math.min(list.size(), formatList.size()); j < n1; j++) {
map.put(JS.SV.sValue(formatList.get(j)), list.get(j));
}
listOut.addLast(JS.SV.getVariable(map));
}
}
return listOut;
}, "JU.Lst,JU.Lst");
Clazz_defineMethod(c$, "evaluateList", 
function(mp, tok, args){
var len = args.length;
var x1 = mp.getX();
var x2;
switch (tok) {
case 1275335685:
return (len == 2 && mp.addX(x1.pushPop(args[0], args[1])) || len == 1 && mp.addX(x1.pushPop(null, args[0])));
case 1275334681:
return (len == 1 && mp.addX(x1.pushPop(args[0], null)) || len == 0 && mp.addX(x1.pushPop(null, null)));
case 1275069441:
if (len != 1 && len != 2) return false;
break;
case 1275069447:
case 1275069446:
break;
default:
if (len != 1) return false;
}
var isArray1 = (x1.tok == 7);
if (len == 2) {
var ret = this.listSpecial(tok, x1, JS.SV.sValue(args[0]), args[1], isArray1);
return (ret != null && mp.addXObj(ret));
}x2 = (len == 0 ? JS.SV.newV(1073742327, "all") : args[0]);
var isAll = (x2.tok == 1073742327);
if (!isArray1 && x1.tok != 4) return mp.binaryOp(this.opTokenFor(tok), x1, x2);
var isScalar1 = JS.SV.isScalar(x1);
var isScalar2 = JS.SV.isScalar(x2);
var list1 = null;
var list2 = null;
var alist1 = x1.getList();
var alist2 = x2.getList();
var sList1 = null;
var sList2 = null;
if (isArray1) {
len = alist1.size();
} else if (isScalar1) {
len = 2147483647;
} else {
sList1 = (JU.PT.split(JS.SV.sValue(x1), "\n"));
list1 =  Clazz_newFloatArray (len = sList1.length, 0);
JU.PT.parseFloatArrayData(sList1, list1);
}if (isAll && tok != 1275069446) {
var sum = 0;
if (isArray1) {
for (var i = len; --i >= 0; ) sum += JS.SV.fValue(alist1.get(i));

} else if (!isScalar1) {
for (var i = len; --i >= 0; ) sum += list1[i];

}return mp.addXFloat(sum);
}if (tok == 1275069446 && x2.tok == 4) {
var sb =  new JU.SB();
if (isScalar1) {
sb.append(JS.SV.sValue(x1));
} else {
var s = (isAll ? "" : x2.value.toString());
for (var i = 0; i < len; i++) sb.append(i > 0 ? s : "").append(JS.SV.sValue(alist1.get(i)));

}return mp.addXStr(sb.toString());
}var scalar = null;
if (isScalar2) {
scalar = x2;
} else if (x2.tok == 7) {
len = Math.min(len, alist2.size());
} else {
sList2 = JU.PT.split(JS.SV.sValue(x2), "\n");
list2 =  Clazz_newFloatArray (sList2.length, 0);
JU.PT.parseFloatArrayData(sList2, list2);
len = Math.min(len, list2.length);
}var token = this.opTokenFor(tok);
if (isArray1 && isAll) {
var llist =  new JU.Lst();
return mp.addXList(this.addAllLists(x1.getList(), llist));
}var a = (isScalar1 ? x1 : null);
var b;
var justVal = (len == 2147483647);
if (justVal) len = 1;
var olist =  new Array(len);
for (var i = 0; i < len; i++) {
if (isScalar2) b = scalar;
 else if (x2.tok == 7) b = alist2.get(i);
 else if (Float.isNaN(list2[i])) b = JS.SV.getVariable(JS.SV.unescapePointOrBitsetAsVariable(sList2[i]));
 else b = JS.SV.newF(list2[i]);
if (!isScalar1) {
if (isArray1) a = alist1.get(i);
 else if (Float.isNaN(list1[i])) a = JS.SV.getVariable(JS.SV.unescapePointOrBitsetAsVariable(sList1[i]));
 else a = JS.SV.newF(list1[i]);
}if (tok == 1275069446) {
if (a.tok != 7) {
var l =  new JU.Lst();
l.addLast(a);
a = JS.SV.getVariableList(l);
}}if (!mp.binaryOp(token, a, b)) return false;
olist[i] = mp.getX();
}
return (justVal ? mp.addXObj(olist[0]) : mp.addXAV(olist));
}, "JS.ScriptMathProcessor,~N,~A");
Clazz_defineMethod(c$, "listSpecial", 
function(tok, x1, tab, x2, isArray1){
var sList1 = null;
var sList2 = null;
var sList3 = null;
if (tok == 1275069441) {
sList1 = (isArray1 ? JS.SV.strListValue(x1) : JU.PT.split(JS.SV.sValue(x1), "\n"));
sList2 = (x2.tok == 7 ? JS.SV.strListValue(x2) : JU.PT.split(JS.SV.sValue(x2), "\n"));
var len = Math.max(sList1.length, sList2.length);
sList3 =  new Array(len);
for (var i = 0; i < len; i++) sList3[i] = (i >= sList1.length ? "" : sList1[i]) + tab + (i >= sList2.length ? "" : sList2[i]);

return sList3;
}if (x2.tok != 1073742335) return null;
var l = x1.getList();
var isCSV = (tab.length == 0);
if (isCSV) tab = ",";
if (tok == 1275069446) {
var s2 =  new Array(l.size());
for (var i = l.size(); --i >= 0; ) {
var a = l.get(i).getList();
if (a == null) s2[i] = l.get(i);
 else {
var sb =  new JU.SB();
for (var j = 0, n = a.size(); j < n; j++) {
if (j > 0) sb.append(tab);
var sv = a.get(j);
var s = null;
if (sv.tok == 4) {
var st = sv.value;
if (isCSV) {
s = "\"" + JU.PT.rep(st, "\"", "\"\"") + "\"";
}}sb.append(s == null ? "" + sv.asString() : s);
}
s2[i] = JS.SV.newS(sb.toString());
}}
return s2;
}var sa =  new JU.Lst();
if (isCSV) tab = "\0";
var next =  Clazz_newIntArray (2, 0);
for (var i = 0, nl = l.size(); i < nl; i++) {
var line = l.get(i).asString();
if (isCSV) {
next[1] = 0;
next[0] = 0;
var last = 0;
while (true) {
var s = JU.PT.getCSVString(line, next);
if (s == null) {
if (next[1] == -1) {
line += (++i < nl ? "\n" + l.get(i).asString() : "\"");
next[1] = last;
continue;
}line = line.substring(0, last) + line.substring(last).$replace(',', '\0');
break;
}line = line.substring(0, last) + line.substring(last, next[0]).$replace(',', '\0') + s + line.substring(next[1]);
next[1] = last = next[0] + s.length;
}
}var linaa = line.$plit(tab);
var la =  new JU.Lst();
for (var j = 0, n = linaa.length; j < n; j++) {
var s = linaa[j];
if (s.indexOf(".") < 0) try {
la.addLast(JS.SV.newI(Integer.parseInt(s)));
continue;
} catch (e) {
if (Clazz_exceptionOf(e, Exception)){
} else {
throw e;
}
}
 else try {
la.addLast(JS.SV.getVariable(Float.$valueOf(Float.parseFloat(s))));
continue;
} catch (ee) {
if (Clazz_exceptionOf(ee, Exception)){
} else {
throw ee;
}
}
la.addLast(JS.SV.newS(s));
}
sa.addLast(JS.SV.getVariableList(la));
}
return JS.SV.getVariableList(sa);
}, "~N,JS.SV,~S,JS.SV,~B");
Clazz_defineMethod(c$, "addAllLists", 
function(list, l){
var n = list.size();
for (var i = 0; i < n; i++) {
var v = list.get(i);
if (v.tok == 7) this.addAllLists(v.getList(), l);
 else l.addLast(v);
}
return l;
}, "JU.Lst,JU.Lst");
Clazz_defineMethod(c$, "evaluateLoad", 
function(mp, args, isFile){
if (!this.checkAccess()) return false;
if (args.length < 1 || args.length > 3) return false;
var file = JV.FileManager.fixDOSName(JS.SV.sValue(args[0]));
var asMap = (args.length > 1 && args[1].tok == 1073742335);
var async = (this.vwr.async || args.length > 2 && args[args.length - 1].tok == 1073742335);
var nBytesMax = (args.length > 1 && args[1].tok == 2 ? args[1].asInt() : -1);
var asJSON = (args.length > 1 && args[1].asString().equalsIgnoreCase("JSON"));
if (asMap) return mp.addXMap(this.vwr.fm.getFileAsMap(file, null, false));
var isQues = file.startsWith("?");
if (JV.Viewer.isJS && (isQues || async)) {
if (isFile && isQues) return mp.addXStr("");
file = this.e.loadFileAsync("load()_", file, mp.oPt, true);
}var str = isFile ? this.vwr.fm.getFilePath(file, false, false) : this.vwr.getFileAsString4(file, nBytesMax, false, false, true, "script");
try {
return (asJSON ? mp.addXObj(this.vwr.parseJSON(str)) : mp.addXStr(str));
} catch (e) {
if (Clazz_exceptionOf(e, Exception)){
return false;
} else {
throw e;
}
}
}, "JS.ScriptMathProcessor,~A,~B");
Clazz_defineMethod(c$, "evaluateMath", 
function(mp, args, tok){
var x = JS.SV.fValue(args[0]);
switch (tok) {
case 134218246:
x = Math.sqrt(x);
break;
case 134218244:
x = Math.sin(x * 3.141592653589793 / 180);
break;
case 134218245:
x = Math.cos(x * 3.141592653589793 / 180);
break;
case 134218255:
x = Math.tan(x * 3.141592653589793 / 180);
break;
case 134218241:
x = Math.acos(x) * 180 / 3.141592653589793;
break;
}
return mp.addXFloat(x);
}, "JS.ScriptMathProcessor,~A,~N");
Clazz_defineMethod(c$, "evaluateMeasure", 
function(mp, args, tok){
var nPoints = 0;
switch (tok) {
case 1745489939:
var property = null;
var points =  new JU.Lst();
var rangeMinMax =  Clazz_newFloatArray(-1, [3.4028235E38, 3.4028235E38]);
var strFormat = null;
var units = null;
var isAllConnected = false;
var isNotConnected = false;
var rPt = 0;
var isNull = false;
var rd = null;
var nBitSets = 0;
var vdw = 3.4028235E38;
var asMinArray = false;
var asFloatArray = false;
for (var i = 0; i < args.length; i++) {
switch (args[i].tok) {
case 10:
var bs = args[i].value;
if (bs.length() == 0) isNull = true;
points.addLast(bs);
nPoints++;
nBitSets++;
break;
case 8:
var v =  new JU.Point3fi();
v.setT(args[i].value);
points.addLast(v);
nPoints++;
break;
case 2:
case 3:
rangeMinMax[rPt++ % 2] = JS.SV.fValue(args[i]);
break;
case 4:
var s = JS.SV.sValue(args[i]);
if (s.startsWith("property_")) {
property = s;
break;
}if (s.equalsIgnoreCase("vdw") || s.equalsIgnoreCase("vanderwaals")) vdw = (i + 1 < args.length && args[i + 1].tok == 2 ? args[++i].asInt() : 100) / 100;
 else if (s.equalsIgnoreCase("notConnected")) isNotConnected = true;
 else if (s.equalsIgnoreCase("connected")) isAllConnected = true;
 else if (s.equalsIgnoreCase("minArray")) asMinArray = (nBitSets >= 1);
 else if (s.equalsIgnoreCase("asArray") || s.length == 0) asFloatArray = (nBitSets >= 1);
 else if (JM.Measurement.isUnits(s)) units = s.toLowerCase();
 else strFormat = nPoints + ":" + s;
break;
default:
return false;
}
}
if (nPoints < 2 || nPoints > 4 || rPt > 2 || isNotConnected && isAllConnected) return false;
if (isNull) return mp.addXStr("");
if (vdw != 3.4028235E38 && (nBitSets != 2 || nPoints != 2)) return mp.addXStr("");
rd = (vdw == 3.4028235E38 ?  new J.atomdata.RadiusData(rangeMinMax, 0, null, null) :  new J.atomdata.RadiusData(null, vdw, J.atomdata.RadiusData.EnumType.FACTOR, J.c.VDW.AUTO));
var obj = (this.vwr.newMeasurementData(null, points)).set(0, null, rd, property, strFormat, units, null, isAllConnected, isNotConnected, null, true, 0, 0, null, NaN, null).getMeasurements(asFloatArray, asMinArray);
return mp.addXObj(obj);
case 134217729:
if ((nPoints = args.length) != 3 && nPoints != 4) return false;
break;
default:
if ((nPoints = args.length) != 2) return false;
}
var pts =  new Array(nPoints);
for (var i = 0; i < nPoints; i++) {
if ((pts[i] = mp.ptValue(args[i], null)) == null) return false;
}
switch (nPoints) {
case 2:
return mp.addXFloat(pts[0].distance(pts[1]));
case 3:
return mp.addXFloat(JU.Measure.computeAngleABC(pts[0], pts[1], pts[2], true));
case 4:
return mp.addXFloat(JU.Measure.computeTorsion(pts[0], pts[1], pts[2], pts[3], true));
}
return false;
}, "JS.ScriptMathProcessor,~A,~N");
Clazz_defineMethod(c$, "evaluateModulation", 
function(mp, args){
var type = "";
var t = NaN;
var t456 = null;
switch (args.length) {
case 0:
break;
case 1:
switch (args[0].tok) {
case 8:
t456 = args[0].value;
break;
case 4:
type = args[0].asString();
break;
default:
t = JS.SV.fValue(args[0]);
}
break;
case 2:
type = JS.SV.sValue(args[0]);
t = JS.SV.fValue(args[1]);
break;
default:
return false;
}
if (t456 == null && t < 1e6) t456 = JU.P3.new3(t, t, t);
var x = mp.getX();
var bs = (x.tok == 10 ? x.value :  new JU.BS());
return mp.addXList(this.vwr.ms.getModulationList(bs, (type + "D").toUpperCase().charAt(0), t456));
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "evaluatePlane", 
function(mp, args, tok, isSelector){
if (tok == 134219777 && args.length != 3 && args.length != 4 || tok == 134217763 && args.length != 2 && args.length != 3 && args.length != 4 || args.length == 0 || args.length > 4) return false;
var pt1;
var pt2;
var pt3;
var plane = this.e.planeValue(args[0]);
var norm;
var vTemp;
switch (args.length) {
case 1:
if (tok == 134217750) {
if (args[0].tok != 7) return false;
var uvw = JS.SV.flistValue(args[0], 3);
if (uvw.length != 3) return false;
var sym = this.vwr.getOperativeSymmetry();
if (sym == null) return false;
var ptuvw = JU.P3.new3(uvw[0], uvw[1], uvw[2]);
sym.toCartesian(ptuvw, false);
plane = JU.P4.new4(ptuvw.x, ptuvw.y, ptuvw.z, 0);
if (isSelector) {
break;
}}return (plane != null && mp.addXPt4(plane));
case 2:
if (tok == 134217763) {
var plane1 = this.e.planeValue(args[1]);
if (plane1 == null) return false;
pt3 =  new JU.P3();
norm =  new JU.V3();
vTemp =  new JU.V3();
if (plane != null) {
var list = JU.Measure.getIntersectionPP(plane, plane1);
if (list == null) return mp.addXStr("");
return mp.addXList(list);
}pt2 = mp.ptValue(args[0], null);
if (pt2 == null) return mp.addXStr("");
return mp.addXPt(JU.Measure.getIntersection(pt2, null, plane1, pt3, norm, vTemp));
}case 3:
case 4:
switch (tok) {
case 134219777:
var offset = (args.length == 4 ? JS.SV.fValue(args[3]) : NaN);
plane = this.e.getHklPlane(JU.P3.new3(JS.SV.fValue(args[0]), JS.SV.fValue(args[1]), JS.SV.fValue(args[2])), offset, null);
if (isSelector) {
break;
}return plane != null && mp.addXPt4(plane);
case 134217763:
pt1 = mp.ptValue(args[0], null);
pt2 = mp.ptValue(args[1], null);
if (pt1 == null || pt2 == null) return mp.addXStr("");
var vLine = JU.V3.newV(pt2);
vLine.normalize();
var plane2 = this.e.planeValue(args[2]);
if (plane2 != null) {
pt3 =  new JU.P3();
norm =  new JU.V3();
vTemp =  new JU.V3();
pt1 = JU.Measure.getIntersection(pt1, vLine, plane2, pt3, norm, vTemp);
if (pt1 == null) return mp.addXStr("");
return mp.addXPt(pt1);
}pt3 = mp.ptValue(args[2], null);
if (pt3 == null) return mp.addXStr("");
var v =  new JU.V3();
pt3 = JU.P3.newP(pt3);
if (args.length == 3) {
JU.Measure.projectOntoAxis(pt3, pt1, vLine, v);
return mp.addXPt(pt3);
}var r = JS.SV.fValue(args[3]);
var ptCenter = JU.P3.newP(pt3);
JU.Measure.projectOntoAxis(pt3, pt1, vLine, v);
var d = ptCenter.distance(pt3);
var l =  new JU.Lst();
if (d == r) {
l.addLast(pt3);
} else if (d < r) {
d = Math.sqrt(r * r - d * d);
v.scaleAdd2(d, vLine, pt3);
l.addLast(JU.P3.newP(v));
v.scaleAdd2(-d, vLine, pt3);
l.addLast(JU.P3.newP(v));
}return mp.addXList(l);
}
switch (args[0].tok) {
case 2:
case 3:
if (args.length == 3) {
var r = JS.SV.fValue(args[0]);
var theta = JS.SV.fValue(args[1]);
var phi = JS.SV.fValue(args[2]);
norm = JU.V3.new3(0, 0, 1);
pt2 = JU.P3.new3(0, 1, 0);
var q = JU.Quat.newVA(pt2, phi);
q.getMatrix().rotate(norm);
pt2.set(0, 0, 1);
q = JU.Quat.newVA(pt2, theta);
q.getMatrix().rotate(norm);
pt2.setT(norm);
pt2.scale(r);
plane =  new JU.P4();
JU.Measure.getPlaneThroughPoint(pt2, norm, plane);
return mp.addXPt4(plane);
}break;
case 10:
case 8:
pt1 = mp.ptValue(args[0], null);
pt2 = mp.ptValue(args[1], null);
if (pt2 == null) return false;
pt3 = (args.length > 2 && (args[2].tok == 10 || args[2].tok == 8) ? mp.ptValue(args[2], null) : null);
norm = JU.V3.newV(pt2);
if (pt3 == null) {
plane =  new JU.P4();
if (args.length == 2 || args[2].tok != 2 && args[2].tok != 3 && !args[2].asBoolean()) {
pt3 = JU.P3.newP(pt1);
pt3.add(pt2);
pt3.scale(0.5);
norm.sub(pt1);
norm.normalize();
} else if (args[2].tok == 1073742335) {
pt3 = pt1;
} else {
norm.sub(pt1);
pt3 =  new JU.P3();
pt3.scaleAdd2(args[2].asFloat(), norm, pt1);
}JU.Measure.getPlaneThroughPoint(pt3, norm, plane);
return mp.addXPt4(plane);
}var vAB =  new JU.V3();
var ptref = (args.length == 4 ? mp.ptValue(args[3], null) : null);
var nd = JU.Measure.getDirectedNormalThroughPoints(pt1, pt2, pt3, ptref, norm, vAB);
return mp.addXPt4(JU.P4.new4(norm.x, norm.y, norm.z, nd));
}
}
if (isSelector) {
var x1 = mp.getX();
switch (x1.tok) {
case 10:
var list =  new JU.Lst();
var bsAtoms = JS.SV.getBitSet(x1, false);
for (var i = bsAtoms.nextSetBit(0); i >= 0; i = bsAtoms.nextSetBit(i + 1)) {
var p =  new JU.P3();
JU.Measure.getPlaneProjection(this.vwr.ms.at[i], plane, p,  new JU.V3());
list.addLast(JS.SV.getVariable(p));
}
return mp.addXList(list);
case 8:
var pt = JS.SV.ptValue(x1);
var p =  new JU.P3();
JU.Measure.getPlaneProjection(pt, plane, p,  new JU.V3());
return mp.addXPt(p);
}
}if (args.length != 4) return false;
var x = JS.SV.fValue(args[0]);
var y = JS.SV.fValue(args[1]);
var z = JS.SV.fValue(args[2]);
var w = JS.SV.fValue(args[3]);
return mp.addXPt4(JU.P4.new4(x, y, z, w));
}, "JS.ScriptMathProcessor,~A,~N,~B");
Clazz_defineMethod(c$, "evaluatePoint", 
function(mp, args){
var s = null;
switch (args.length) {
default:
return false;
case 1:
switch (args[0].tok) {
case 3:
case 2:
return mp.addXInt(args[0].asInt());
case 4:
s = args[0].value;
if (s.startsWith("(") && s.charAt(s.length - 1) == ')') {
return mp.addXPt(this.getRealPointFromFraction(s));
}break;
case 7:
var list = args[0].getList();
var len = list.size();
if (len == 0) {
return false;
}switch (list.get(0).tok) {
case 2:
case 3:
break;
case 7:
var ar =  new JU.Lst();
for (var i = 0; i < len; i++) {
ar.addLast(JS.SV.getVariable(JU.Escape.uP("{" + list.get(i).asString() + "}")));
}
return mp.addXList(ar);
case 4:
s = list.get(0).value;
if (!s.startsWith("{") || (typeof(JU.Escape.uP(s))=='string')) {
s = null;
break;
}var a =  new JU.Lst();
for (var i = 0; i < len; i++) {
a.addLast(JS.SV.getVariable(JU.Escape.uP(JS.SV.sValue(list.get(i)))));
}
return mp.addXList(a);
default:
return false;
}
s = "{" + s + "}";
}
if (s == null) s = JS.SV.sValue(args[0]);
var pt = JU.Escape.uP(s);
return (Clazz_instanceOf(pt,"JU.P3") ? mp.addXPt(pt) : mp.addXStr("" + pt));
case 2:
var pt3;
switch (args[1].tok) {
case 1073742334:
case 1073742335:
switch (args[0].tok) {
case 8:
pt3 = JU.P3.newP(args[0].value);
break;
case 10:
pt3 = this.vwr.ms.getAtomSetCenter(args[0].value);
break;
default:
return false;
}
if (args[1].tok == 1073742335) {
this.vwr.tm.transformPt3f(pt3, pt3);
pt3.y = this.vwr.tm.height - pt3.y;
if (this.vwr.antialiased) pt3.scale(0.5);
} else {
if (this.vwr.antialiased) pt3.scale(2);
pt3.y = this.vwr.tm.height - pt3.y;
this.vwr.tm.unTransformPoint(pt3, pt3);
}break;
case 8:
var sv = args[0].getList();
if (sv == null || sv.size() != 4) return false;
var pt1 = JS.SV.ptValue(args[1]);
pt3 = JU.P3.newP(JS.SV.ptValue(sv.get(0)));
pt3.scaleAdd2(pt1.x, JS.SV.ptValue(sv.get(1)), pt3);
pt3.scaleAdd2(pt1.y, JS.SV.ptValue(sv.get(2)), pt3);
pt3.scaleAdd2(pt1.z, JS.SV.ptValue(sv.get(3)), pt3);
break;
default:
return false;
}
return mp.addXPt(pt3);
case 3:
return mp.addXPt(JU.P3.new3(args[0].asFloat(), args[1].asFloat(), args[2].asFloat()));
case 4:
return mp.addXPt4(JU.P4.new4(args[0].asFloat(), args[1].asFloat(), args[2].asFloat(), args[3].asFloat()));
}
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "getRealPointFromFraction", 
function(s){
s = JU.PT.rep(s.substring(1, s.length - 1).$replace(',', ' '), "  ", " ");
var xyz = JU.PT.split(s.trim(), " ");
if (xyz.length != 3) return null;
var pt = JU.P3.new3(JU.SimpleUnitCell.parseCalcFunctions(this.vwr, null, xyz[0]), JU.SimpleUnitCell.parseCalcFunctions(this.vwr, null, xyz[1]), JU.SimpleUnitCell.parseCalcFunctions(this.vwr, null, xyz[2]));
return pt;
}, "~S");
Clazz_defineMethod(c$, "evaluatePrompt", 
function(mp, args){
if (args.length != 1 && args.length != 2 && args.length != 3) return false;
var label = JS.SV.sValue(args[0]);
var buttonArray = (args.length > 1 && args[1].tok == 7 ? JS.SV.strListValue(args[1]) : null);
var asButtons = (buttonArray != null || args.length == 1 || args.length == 3 && args[2].asBoolean());
var input = (buttonArray != null ? null : args.length >= 2 ? JS.SV.sValue(args[1]) : "OK");
var s = "" + this.vwr.prompt(label, input, buttonArray, asButtons);
return (asButtons && buttonArray != null ? mp.addXInt(Integer.parseInt(s) + 1) : mp.addXStr(s));
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "evaluateQuaternion", 
function(mp, args, tok){
var pt0 = null;
var nArgs = args.length;
var nMax = 2147483647;
var isRelative = false;
if (tok == 134221850) {
if (nArgs > 1 && args[nArgs - 1].tok == 4 && (args[nArgs - 1].value).equalsIgnoreCase("relative")) {
nArgs--;
isRelative = true;
}if (nArgs > 1 && args[nArgs - 1].tok == 2 && args[0].tok == 10) {
nMax = args[nArgs - 1].asInt();
if (nMax <= 0) nMax = 2147483646;
nArgs--;
}}switch (nArgs) {
case 0:
case 1:
case 4:
break;
case 2:
if (tok == 134221850) {
if (args[0].tok == 7 && (args[1].tok == 7 || args[1].tok == 1073742335)) break;
if (args[0].tok == 10 && (args[1].tok == 2 || args[1].tok == 10)) break;
}if ((pt0 = mp.ptValue(args[0], null)) == null || tok != 134221850 && args[1].tok == 8) return false;
break;
case 3:
if (tok != 134221850) return false;
if (args[0].tok == 9) {
if (args[2].tok != 8 && args[2].tok != 10) return false;
break;
}for (var i = 0; i < 3; i++) if (args[i].tok != 8 && args[i].tok != 10) return false;

break;
default:
return false;
}
var q = null;
var qs = null;
var p4 = null;
switch (nArgs) {
case 0:
return mp.addXPt4(this.vwr.tm.getRotationQ().toPoint4f());
case 1:
default:
if (tok == 134221850 && args[0].tok == 7) {
var data1 = this.e.getQuaternionArray(args[0].getList(), 1073742001);
var mean = JU.Quat.sphereMean(data1, null, 0.0001);
q = (Clazz_instanceOf(mean,"JU.Quat") ? mean : null);
break;
} else if (tok == 134221850 && args[0].tok == 10) {
qs = this.vwr.getAtomGroupQuaternions(args[0].value, nMax);
} else if (args[0].tok == 11) {
q = JU.Quat.newM(args[0].value);
} else if (args[0].tok == 9) {
p4 = args[0].value;
} else {
var s = JS.SV.sValue(args[0]);
var v = JU.Escape.uP(s.equalsIgnoreCase("best") ? this.vwr.getOrientation(1073741864, "best", null, null).toString() : s);
if (!(Clazz_instanceOf(v,"JU.P4"))) return false;
p4 = v;
}if (tok == 134217731) q = JU.Quat.newVA(JU.P3.new3(p4.x, p4.y, p4.z), p4.w);
break;
case 2:
if (tok == 134221850) {
if (args[0].tok == 7 && args[1].tok == 7) {
var data1 = this.e.getQuaternionArray(args[0].getList(), 1073742001);
var data2 = this.e.getQuaternionArray(args[1].getList(), 1073742001);
qs = JU.Quat.arrayDiv(data2, data1, nMax, isRelative);
break;
}if (args[0].tok == 7 && args[1].tok == 1073742335) {
var data1 = this.e.getQuaternionArray(args[0].getList(), 1073742001);
var stddev =  Clazz_newFloatArray (1, 0);
JU.Quat.sphereMean(data1, stddev, 0.0001);
return mp.addXFloat(stddev[0]);
}if (args[0].tok == 10 && args[1].tok == 10) {
var data1 = this.vwr.getAtomGroupQuaternions(args[0].value, 2147483647);
var data2 = this.vwr.getAtomGroupQuaternions(args[1].value, 2147483647);
qs = JU.Quat.arrayDiv(data2, data1, nMax, isRelative);
break;
}}var pt1 = mp.ptValue(args[1], null);
p4 = this.e.planeValue(args[0]);
if (pt1 != null) q = JU.Quat.getQuaternionFrame(JU.P3.new3(0, 0, 0), pt0, pt1);
 else q = JU.Quat.newVA(pt0, JS.SV.fValue(args[1]));
break;
case 3:
if (args[0].tok == 9) {
var pt = (args[2].tok == 8 ? args[2].value : this.vwr.ms.getAtomSetCenter(args[2].value));
return mp.addXStr(JU.Escape.drawQuat(JU.Quat.newP4(args[0].value), "q", JS.SV.sValue(args[1]), pt, 1));
}var pts =  new Array(3);
for (var i = 0; i < 3; i++) pts[i] = (args[i].tok == 8 ? args[i].value : this.vwr.ms.getAtomSetCenter(args[i].value));

q = JU.Quat.getQuaternionFrame(pts[0], pts[1], pts[2]);
break;
case 4:
if (tok == 134221850) p4 = JU.P4.new4(JS.SV.fValue(args[1]), JS.SV.fValue(args[2]), JS.SV.fValue(args[3]), JS.SV.fValue(args[0]));
 else q = JU.Quat.newVA(JU.P3.new3(JS.SV.fValue(args[0]), JS.SV.fValue(args[1]), JS.SV.fValue(args[2])), JS.SV.fValue(args[3]));
break;
}
if (qs != null) {
if (nMax != 2147483647) {
var list =  new JU.Lst();
for (var i = 0; i < qs.length; i++) list.addLast(qs[i].toPoint4f());

return mp.addXList(list);
}q = (qs.length > 0 ? qs[0] : null);
}return mp.addXPt4((q == null ? JU.Quat.newP4(p4) : q).toPoint4f());
}, "JS.ScriptMathProcessor,~A,~N");
Clazz_defineMethod(c$, "evaluateRandom", 
function(mp, args){
if (args.length > 3) return false;
if (this.rand == null) this.rand =  new java.util.Random();
var lower = 0;
var upper = 1;
switch (args.length) {
case 3:
this.rand.setSeed(Clazz_floatToInt(JS.SV.fValue(args[2])));
case 2:
upper = JS.SV.fValue(args[1]);
case 1:
lower = JS.SV.fValue(args[0]);
case 0:
break;
default:
return false;
}
return mp.addXFloat((this.rand.nextFloat() * (upper - lower)) + lower);
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "evaluateRowCol", 
function(mp, args, tok){
if (args.length != 1) return false;
var n = args[0].asInt() - 1;
var x1 = mp.getX();
var f;
switch (x1.tok) {
case 11:
if (n < 0 || n > 2) return false;
var m = x1.value;
switch (tok) {
case 1275068935:
f =  Clazz_newFloatArray (3, 0);
m.getRow(n, f);
return mp.addXAF(f);
case 1275068934:
default:
f =  Clazz_newFloatArray (3, 0);
m.getColumn(n, f);
return mp.addXAF(f);
}
case 12:
if (n < 0 || n > 2) return false;
var m4 = x1.value;
switch (tok) {
case 1275068935:
f =  Clazz_newFloatArray (4, 0);
m4.getRow(n, f);
return mp.addXAF(f);
case 1275068934:
default:
f =  Clazz_newFloatArray (4, 0);
m4.getColumn(n, f);
return mp.addXAF(f);
}
case 7:
var l1 = x1.getList();
var l2 =  new JU.Lst();
for (var i = 0, len = l1.size(); i < len; i++) {
var l3 = l1.get(i).getList();
if (l3 == null) return mp.addXStr("");
l2.addLast(n < l3.size() ? l3.get(n) : JS.SV.newS(""));
}
return mp.addXList(l2);
}
return false;
}, "JS.ScriptMathProcessor,~A,~N");
Clazz_defineMethod(c$, "evaluateIn", 
function(mp, args){
var x1 = mp.getX();
switch (args.length) {
case 1:
var lst = args[0].getList();
if (lst != null) for (var i = 0, n = lst.size(); i < n; i++) if (JS.SV.areEqual(x1, lst.get(i))) return mp.addXInt(i + 1);

break;
default:
for (var i = 0; i < args.length; i++) if (JS.SV.areEqual(x1, args[i])) return mp.addXInt(i + 1);

break;
}
return mp.addXInt(0);
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "evaluateReplace", 
function(mp, args){
var isAll = false;
var sFind;
var sReplace;
switch (args.length) {
case 0:
isAll = true;
sFind = sReplace = null;
break;
case 3:
isAll = JS.SV.bValue(args[2]);
case 2:
sFind = JS.SV.sValue(args[0]);
sReplace = JS.SV.sValue(args[1]);
break;
default:
return false;
}
var x = mp.getX();
if (x.tok == 7) {
var list = JS.SV.strListValue(x);
var l =  new Array(list.length);
for (var i = list.length; --i >= 0; ) l[i] = (sFind == null ? JU.PT.clean(list[i]) : isAll ? JU.PT.replaceAllCharacters(list[i], sFind, sReplace) : JU.PT.rep(list[i], sFind, sReplace));

return mp.addXAS(l);
}var s = JS.SV.sValue(x);
return mp.addXStr(sFind == null ? JU.PT.clean(s) : isAll ? JU.PT.replaceAllCharacters(s, sFind, sReplace) : JU.PT.rep(s, sFind, sReplace));
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "evaluateScript", 
function(mp, args, tok){
if (tok != 134222350 && !this.checkAccess()) return false;
if (args.length == 0 || args.length != 1 && (tok == 134222350 || tok == 134238732)) return false;
if ((tok == 134222350 || tok == 134238732) && args.length != 1 || args.length == 0) return false;
var s = JS.SV.sValue(args[0]);
var sb =  new JU.SB();
switch (tok) {
case 134218759:
return (args.length == 2 ? s.equalsIgnoreCase("JSON") && mp.addXObj(this.vwr.parseJSON(JS.SV.sValue(args[1]))) : mp.addXObj(this.vwr.evaluateExpressionAsVariable(s)));
case 134222850:
var appID = (args.length == 2 ? JS.SV.sValue(args[1]) : ".");
if (!appID.equals(".")) sb.append(this.vwr.jsEval(appID + "\1" + s));
if (appID.equals(".") || appID.equals("*")) this.e.runScriptBuffer(s, sb, true);
break;
case 134222350:
this.e.runScriptBuffer("show " + s, sb, true);
break;
case 134238732:
return mp.addX(this.vwr.jsEvalSV(s));
}
s = sb.toString();
var f;
return (Float.isNaN(f = JU.PT.parseFloatStrict(s)) ? mp.addXStr(s) : s.indexOf(".") >= 0 ? mp.addXFloat(f) : mp.addXInt(JU.PT.parseInt(s)));
}, "JS.ScriptMathProcessor,~A,~N");
Clazz_defineMethod(c$, "checkAccess", 
function(){
return !this.vwr.haveAccessInternal(null);
});
Clazz_defineMethod(c$, "evaluateSort", 
function(mp, args, tok){
if (args.length > 1) return false;
if (tok == 1275068444) {
if (args.length == 1 && args[0].tok == 4) {
return mp.addX(mp.getX().sortMapArray(args[0].asString()));
}var n = (args.length == 0 ? 0 : args[0].asInt());
return mp.addX(mp.getX().sortOrReverse(n));
}var x = mp.getX();
var match = (args.length == 0 ? null : args[0]);
if (x.tok == 4) {
var n = 0;
var s = JS.SV.sValue(x);
if (match == null) return mp.addXInt(0);
var m = JS.SV.sValue(match);
for (var i = 0; i < s.length; i++) {
var pt = s.indexOf(m, i);
if (pt < 0) break;
n++;
i = pt;
}
return mp.addXInt(n);
}var counts =  new JU.Lst();
var last = null;
var count = null;
var xList = JS.SV.getVariable(x.value).sortOrReverse(0).getList();
if (xList == null) return (match == null ? mp.addXStr("") : mp.addXInt(0));
for (var i = 0, nLast = xList.size(); i <= nLast; i++) {
var a = (i == nLast ? null : xList.get(i));
if (match != null && a != null && !JS.SV.areEqual(a, match)) continue;
if (JS.SV.areEqual(a, last)) {
count.intValue++;
continue;
} else if (last != null) {
var y =  new JU.Lst();
y.addLast(last);
y.addLast(count);
counts.addLast(JS.SV.getVariableList(y));
}count = JS.SV.newI(1);
last = a;
}
if (match == null) return mp.addX(JS.SV.getVariableList(counts));
if (counts.isEmpty()) return mp.addXInt(0);
return mp.addX(counts.get(0).getList().get(1));
}, "JS.ScriptMathProcessor,~A,~N");
Clazz_defineMethod(c$, "evaluateString", 
function(mp, tok, args){
var x = mp.getX();
var sArg = (args.length > 0 ? JS.SV.sValue(args[0]) : tok == 1275068932 ? "" : "\n");
switch (args.length) {
case 0:
break;
case 1:
if (args[0].tok == 1073742335) {
return mp.addX(JS.SV.getVariable(JU.PT.getTokens(x.asString())));
}break;
case 2:
if (x.tok == 7) break;
if (tok == 1275069447) {
x = JS.SV.getVariable(JU.PT.split(JU.PT.rep(x.value, "\n\r", "\n").$replace('\r', '\n'), "\n"));
break;
}default:
return false;
}
if (x.tok == 7 && tok != 1275068932 && (tok != 1275069447 || args.length == 2)) {
mp.addX(x);
return this.evaluateList(mp, tok, args);
}var s = (tok == 1275069447 && x.tok == 10 || tok == 1275068932 && x.tok == 7 ? null : JS.SV.sValue(x));
switch (tok) {
case 1275069447:
if (x.tok == 10) {
var bsSelected = x.value;
var modelCount = this.vwr.ms.mc;
var lst =  new JU.Lst();
for (var i = 0; i < modelCount; i++) {
var bs = this.vwr.getModelUndeletedAtomsBitSet(i);
bs.and(bsSelected);
lst.addLast(JS.SV.getVariable(bs));
}
return mp.addXList(lst);
}return mp.addXAS(JU.PT.split(s, sArg));
case 1275069446:
if (s.length > 0 && s.charAt(s.length - 1) == '\n') s = s.substring(0, s.length - 1);
return mp.addXStr(JU.PT.rep(s, "\n", sArg));
case 1275068932:
if (s != null) return mp.addXStr(JU.PT.trim(s, sArg));
var list = JS.SV.strListValue(x);
for (var i = list.length; --i >= 0; ) list[i] = JU.PT.trim(list[i], sArg);

return mp.addXAS(list);
}
return mp.addXStr("");
}, "JS.ScriptMathProcessor,~N,~A");
Clazz_defineMethod(c$, "evaluateSubstructure", 
function(mp, args, tok, isSelector){
var x = (isSelector ? mp.getX() : null);
var sx = null;
var bsSelected = null;
if (x != null) {
switch (x.tok) {
case 10:
bsSelected = x.value;
break;
case 4:
sx = x.value;
if (sx.startsWith("InChI")) {
mp.addX(x);
return this.evaluateInChI(mp,  Clazz_newArray(-1, [JS.SV.newS("SMILES " + (args.length > 0 ? args[0].asString() : sx.indexOf("/f") >= 0 ? "fixedh" : "amide"))]));
}}
}var isSelectedSmiles = isSelector && tok == 134218757;
if (isSelectedSmiles) {
return mp.addXObj(this.e.getSmilesExt().getSmilesMatches("", null, bsSelected, null, 1, true, false));
}if (args.length == 0 || isSelector && (tok == 134218753 || args.length > 1)) return false;
var objTarget = (tok == 134218756 && !isSelector && args[0].tok == 134218756 ? args[0].value : null);
if (objTarget != null && args.length < 2) return false;
var compileSearch = (tok == 134218756 && !isSelector && args[0].tok == 10);
var objPattern = (args[0].tok == 134218753 ? args[0].value : objTarget != null && args[1].tok == 134218753 ? args[1].value : null);
if (objTarget != null && objPattern == null) return false;
var pattern = (compileSearch ? null : objPattern == null ? JS.SV.sValue(args[0]) : null);
var bs =  new JU.BS();
if (pattern == null || pattern.length > 0) try {
if (compileSearch) {
return mp.addX(JS.SV.newV(134218756, this.vwr.getSmilesMatcher().compileSearchTarget(this.vwr.ms.at, this.vwr.ms.ac, JS.SV.getBitSet(args[0], false))));
}if (objTarget != null) return mp.addXBs(this.vwr.getSmilesMatcher().getSubstructureSet(objPattern, objTarget, 0, null, 2));
if (tok == 134218753) {
return mp.addX(JS.SV.newV(134218753, this.vwr.getSmilesMatcher().compileSmartsPattern(pattern)));
}if (bsSelected == null) bsSelected = (args.length == 2 && args[1].tok == 10 ? args[1].value : this.vwr.getModelUndeletedAtomsBitSet(-1));
bs = this.vwr.getSmilesMatcher().getSubstructureSet((objPattern == null ? pattern : objPattern), this.vwr.ms.at, this.vwr.ms.ac, bsSelected, (tok == 134218757 ? 1 : 2));
} catch (ex) {
if (Clazz_exceptionOf(ex, Exception)){
this.e.evalError(ex.getMessage(), null);
} else {
throw ex;
}
}
return (tok != 134218753 && mp.addXBs(bs));
}, "JS.ScriptMathProcessor,~A,~N,~B");
Clazz_defineMethod(c$, "evaluateSymop", 
function(mp, args, isProperty){
var o;
if (!isProperty && args.length == 2 && args[0].tok == 7 && args[1].tok == 4) {
var ret =  new JU.Lst();
var list = args[0].value;
for (var i = 0, n = list.size(); i < n; i++) {
o = this.getSymopInfo(mp, null,  Clazz_newArray(-1, [list.get(i), args[1]]), i + 1, false);
if (o == null) return false;
ret.addLast(o);
}
return mp.addXList(ret);
}var x1 = (isProperty ? mp.getX() : null);
o = this.getSymopInfo(mp, x1, args, 0, isProperty);
return mp.addXObj(o);
}, "JS.ScriptMathProcessor,~A,~B");
Clazz_defineMethod(c$, "getSymopInfo", 
function(mp, x1, args, index, isProperty){
var o = null;
var narg = args.length;
var str1 = (narg == 2 && args[1].tok == 4 ? (args[1].value).toLowerCase() : null);
var isrxyz = "rxyz".equals(str1);
if (str1 != null) {
var m = null;
var xyz = null;
switch (args[0].tok) {
case 4:
switch (str1) {
case "rxyz":
case "matrix":
xyz = args[0].value;
}
break;
case 12:
switch (str1) {
case "rxyz":
case "xyz":
m = args[0].value;
break;
}
break;
}
if (m != null || xyz != null) return this.vwr.getSymStatic().staticConvertOperation(xyz, m, isrxyz ? "rxyz" : null);
}var isPoint = false;
if (x1 != null && x1.tok != 10 && !(isPoint = (x1.tok == 8))) return null;
var bsAtoms = (x1 == null || isPoint ? null : x1.value);
var pt1 = (isPoint ? JS.SV.ptValue(x1) : null);
if (!isPoint && bsAtoms == null) bsAtoms = this.vwr.getThisModelAtoms();
if (narg == 0) {
var ops = JU.PT.split(JU.PT.trim(this.vwr.getSymTemp().getSpaceGroupInfo(this.vwr.ms, null, (bsAtoms == null || bsAtoms.isEmpty() ? Math.max(0, this.vwr.am.cmi) : this.vwr.ms.at[bsAtoms.nextSetBit(0)].mi), false, null).get("symmetryInfo"), "\n"), "\n");
var lst =  new JU.Lst();
for (var i = 0, n = ops.length; i < n; i++) lst.addLast(JU.PT.split(ops[i], "\t"));

return lst;
}var xyz = null;
var tok = 0;
var iOp = -2147483648;
var apt = 0;
var pt2 = null;
var bs1 = null;
var isWyckoff = false;
switch (args[0].tok) {
case 4:
xyz = JS.SV.sValue(args[0]);
switch (xyz == null ? "" : xyz.toLowerCase()) {
case "count":
var sym = this.vwr.getOperativeSymmetry();
return (narg != 1 ? null : Integer.$valueOf(sym == null ? 0 : sym.getSpaceGroupOperationCount()));
case "":
tok = 0;
break;
case "invariant":
tok = 36868;
break;
case "wyckoff":
tok = 1086324754;
isWyckoff = true;
break;
case "wyckoffm":
tok = 1086324755;
isWyckoff = true;
break;
}
apt++;
break;
case 12:
xyz = args[0].escape();
apt++;
break;
case 2:
iOp = args[0].asInt();
apt++;
break;
case 10:
if (!isPoint) {
bs1 = (args.length == 1 || args[1].tok != 10 ? bsAtoms : null);
bsAtoms = this.vwr.getModelUndeletedAtomsBitSet(this.vwr.getModelIndexForAtom(bsAtoms.nextSetBit(0)));
}break;
}
if (bsAtoms == null) {
if (apt < narg && args[apt].tok == 10) (bsAtoms =  new JU.BS()).or(args[apt].value);
if (apt + 1 < narg && args[apt + 1].tok == 10) (bsAtoms == null ? (bsAtoms =  new JU.BS()) : bsAtoms).or(args[apt + 1].value);
} else if (!bsAtoms.isEmpty()) {
bsAtoms = this.vwr.getModelUndeletedAtomsBitSet(this.vwr.getModelIndexForAtom(bsAtoms.nextSetBit(0)));
}var trans = null;
if (narg > apt && args[apt].tok == 7) {
var a = args[apt++].getList();
if (a.size() != 3) return null;
trans = JU.P3.new3(JS.SV.fValue(a.get(0)), JS.SV.fValue(a.get(1)), JS.SV.fValue(a.get(2)));
} else if (narg > apt && args[apt].tok == 2) {
JU.SimpleUnitCell.ijkToPoint3f(JS.SV.iValue(args[apt++]), trans =  new JU.P3(), 0, 0);
}if (pt1 == null && (pt1 = (narg > apt ? mp.ptValue(args[apt], bsAtoms) : null)) != null) apt++;
if ((pt2 = (narg > apt ? mp.ptValue(args[apt], bsAtoms) : null)) != null) apt++;
if (pt1 != null && pt2 == null && bs1 != null && !bs1.isEmpty()) {
pt2 = pt1;
bs1 = JU.BSUtil.copy(bs1);
bs1.and(bsAtoms);
var a0 = this.vwr.ms.getSymmetryEquivAtoms(bs1, null, null).nextSetBit(0);
if ("basis".equals(str1)) {
return JU.BSUtil.newAndSetBit(a0);
}pt1 = JU.P3.newP(this.vwr.ms.at[a0]);
}var nth = (pt2 != null && args.length > apt && iOp == -2147483648 && args[apt].tok == 2 ? args[apt].intValue : -1);
if (nth >= 0) apt++;
if (iOp == -2147483648 && tok != 36868) iOp = 0;
var map = null;
if (tok == 0 && xyz != null && xyz.indexOf(",") < 0) {
if (apt == narg) {
map = this.vwr.ms.getPointGroupInfo(null);
} else if (args[apt].tok == 6) {
map = args[apt].getMap();
}}if (map != null) {
var m;
var pt = xyz.indexOf('.');
var p1 = xyz.indexOf('^');
if (p1 > 0) {
nth = JU.PT.parseInt(xyz.substring(p1 + 1));
} else {
p1 = xyz.length;
nth = 1;
}if (pt > 0 && p1 > pt + 1) {
iOp = JU.PT.parseInt(xyz.substring(pt + 1, p1));
if (iOp < 1) iOp = 1;
p1 = pt;
} else {
iOp = 1;
}xyz = xyz.substring(0, p1);
o = map.get(xyz + "_m");
if (o == null) {
o = map.get(xyz);
return (o == null ? "" : o);
}var centerPt;
try {
if (Clazz_instanceOf(o,"JS.SV")) {
centerPt = (map.get("center")).value;
var obj = o;
if (obj.tok == 11) {
m = obj.value;
} else if (obj.tok == 7) {
m = obj.getList().get(iOp - 1).value;
} else {
return null;
}} else {
centerPt = map.get("center");
if (Clazz_instanceOf(o,"JU.M3")) {
m = o;
} else {
m = (o).get(iOp - 1);
}}var m0 = m;
m = JU.M3.newM3(m);
if (nth > 1) {
for (var i = 1; i < nth; i++) {
m.mul(m0);
}
}if (pt1 == null) return m;
pt1 = JU.P3.newP(pt1);
pt1.sub(centerPt);
m.rotate(pt1);
pt1.add(centerPt);
return pt1;
} catch (e) {
if (Clazz_exceptionOf(e, Exception)){
} else {
throw e;
}
}
return null;
}var desc = (narg == apt ? (isWyckoff ? "" : tok == 36868 ? "id" : pt2 != null || pt1 == null ? "matrix" : "point") : JS.SV.sValue(args[apt++]));
if (narg > 2) isrxyz = "rxyz".equals(desc);
var haveAtom = ((!isWyckoff || isProperty) && bsAtoms != null && !bsAtoms.isEmpty());
var iatom = (haveAtom ? bsAtoms.nextSetBit(0) : -1);
if (isWyckoff) {
var pt = (haveAtom ? this.vwr.ms.getAtom(iatom) : pt1);
while (desc.length > 0 && JU.PT.isDigit(desc.charAt(0))) desc = desc.substring(1);

if (pt == null) {
switch (desc) {
case "":
case "*":
desc = "*";
break;
default:
if (desc.length == 1) desc += "*";
 else return null;
}
}if (desc.length == 0 || desc.equalsIgnoreCase("label")) desc = null;
var letter = (desc == null ? (tok == 1086324755 ? "" : null) : desc.endsWith("*") || desc.equalsIgnoreCase("coord") || desc.equalsIgnoreCase("coords") ? desc : desc.substring(0, 1));
var sym = this.vwr.getOperativeSymmetry();
return (sym == null ? null : sym.getWyckoffPosition(this.vwr, pt, (letter == null ? (tok == 1086324755 ? "M" : null) : (tok == 1086324755 ? "M" : "") + letter)));
}desc = desc.toLowerCase();
if (tok == 36868 || desc.equals("invariant") && isProperty) {
if (haveAtom && pt1 == null) pt1 = this.vwr.ms.at[iatom];
haveAtom = (pt1 != null);
if (iatom < 0) iatom = this.vwr.getThisModelAtoms().nextSetBit(0);
}if (tok == 36868 && iOp == -2147483648) {
var ret = null;
var sym = this.vwr.getCurrentUnitCell();
if (pt1 != null) {
ret = (sym == null ?  Clazz_newIntArray (0, 0) : sym.getInvariantSymops(pt1, null));
} else if (bsAtoms != null && !bsAtoms.isEmpty()) {
var ia = bsAtoms.nextSetBit(0);
pt1 = this.vwr.ms.at[ia];
ret = this.vwr.ms.getSymmetryInvariant(ia);
}if (ret != null && ret.length > 0) {
var m =  new Array(ret.length);
for (var i = 0; i < m.length; i++) {
iOp = ret[i];
m[i] = this.vwr.getSymmetryInfo(iatom, null, iOp, null, pt1, pt1, 1275068418, desc, 0, -1, 0, null);
}
return m;
}return ret;
}return (apt == args.length ? this.vwr.getSymmetryInfo(iatom, xyz, index > 0 ? index : iOp, trans, pt1, pt2, 1275068418, desc, 0, nth, 0, null) : null);
}, "JS.ScriptMathProcessor,JS.SV,~A,~N,~B");
Clazz_defineMethod(c$, "evaluateTensor", 
function(mp, args){
var isTensor = (args.length == 2 && args[1].tok == 1275068445);
var x = (isTensor ? null : mp.getX());
if (args.length > 2 || !isTensor && x.tok != 10) return false;
var bs = x.value;
var tensorType = (isTensor || args.length == 0 ? null : JS.SV.sValue(args[0]).toLowerCase());
var calc = this.vwr.getNMRCalculation();
if ("unique".equals(tensorType)) return mp.addXBs(calc.getUniqueTensorSet(bs));
var infoType = (args.length < 2 ? null : JS.SV.sValue(args[1]).toLowerCase());
if (isTensor) {
return mp.addXObj((args[0].value).getInfo(infoType));
}return mp.addXList(calc.getTensorInfo(tensorType, infoType, bs));
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "evaluateUserFunction", 
function(mp, name, args, tok, isSelector){
var x1 = null;
if (isSelector) {
x1 = mp.getX();
switch (x1.tok) {
case 10:
break;
case 6:
if (args.length > 0) return false;
x1 = x1.getMap().get(name);
return (x1 == null ? mp.addXStr("") : mp.addX(x1));
default:
return false;
}
}name = name.toLowerCase();
mp.wasX = false;
var params =  new JU.Lst();
for (var i = 0; i < args.length; i++) {
params.addLast(args[i]);
}
if (isSelector) {
return mp.addXObj(this.e.getBitsetProperty(x1.value, null, tok, null, null, x1.value,  Clazz_newArray(-1, [name, params]), false, x1.index, false));
}var $var = this.e.getUserFunctionResult(name, params, null);
return ($var == null ? false : mp.addX($var));
}, "JS.ScriptMathProcessor,~S,~A,~N,~B");
Clazz_defineMethod(c$, "evaluateWithin", 
function(mp, args, isAtomProperty){
var len = args.length;
if (len < 1 || len > 5) return false;
if (len == 1 && args[0].tok == 10) return mp.addX(args[0]);
var bs = (isAtomProperty ? JS.SV.getBitSet(mp.getX(), false) : null);
var distance = 0;
var withinSpec = args[0].value;
var withinStr = "" + withinSpec;
var ms = this.vwr.ms;
var isVdw = false;
var isWithinModelSet = false;
var isWithinGroup = false;
var isDistance = false;
var bsSelected = null;
var rd = null;
var tok = args[0].tok;
out : while (true) {
switch (tok == 4 ? tok = JS.T.getTokFromName(withinStr) : tok) {
case 1648363544:
isVdw = true;
withinSpec = null;
case 3:
case 2:
isDistance = true;
if (len < 2 || len == 3 && args[1].tok == 7 && args[2].tok != 7) return false;
distance = (isVdw ? 100 : JS.SV.fValue(args[0]));
switch (tok = args[1].tok) {
case 1073742335:
case 1073742334:
isWithinModelSet = args[1].asBoolean();
if (len > 2 && JS.SV.sValue(args[2]).equalsIgnoreCase("unitcell")) tok = 1814695966;
 else if (len > 2 && args[2].tok != 10) return false;
len = 0;
break;
case 4:
var s = JS.SV.sValue(args[1]);
if (s.startsWith("$")) {
bsSelected = this.getAtomsNearSurface(distance, s.substring(1));
break out;
}if (s.equalsIgnoreCase("group")) {
isWithinGroup = true;
tok = 1086324742;
} else if (s.equalsIgnoreCase("vanderwaals") || s.equalsIgnoreCase("vdw")) {
withinSpec = null;
isVdw = true;
tok = 1648363544;
} else {
tok = JS.T.getTokFromName(s);
if (tok == 0) return false;
}break;
}
break;
case 7:
if (len == 1) {
withinSpec = args[0].asString();
tok = 0;
}break;
case 1073742328:
bsSelected = (len == 3 && Clazz_instanceOf(args[1].value,"JU.BS") && Clazz_instanceOf(args[2].value,"JU.BS") ? this.vwr.getBranchBitSet((args[2].value).nextSetBit(0), (args[1].value).nextSetBit(0), true) : null);
break out;
case 134218757:
case 1237320707:
case 134218756:
var isOK = true;
switch (len) {
case 2:
bsSelected = bs;
break;
case 3:
isOK = (args[2].tok == 10);
if (isOK) bsSelected = args[2].value;
break;
default:
isOK = false;
}
return isOK && mp.addXObj(this.e.getSmilesExt().getSmilesMatches(JS.SV.sValue(args[1]), null, bsSelected, null, tok == 134218756 ? 2 : 1, mp.asBitSet, false));
}
if ((typeof(withinSpec)=='string')) {
if (tok == 0) {
tok = 1073742362;
if (len > 2) return false;
len = 2;
}} else if (!isDistance) {
return false;
}switch (len) {
case 1:
switch (tok) {
case 2097184:
case 136314895:
case 1812599299:
case 1814695966:
bsSelected = ms.getAtoms(tok, null);
break out;
case 1073741863:
bsSelected = ms.getAtoms(tok, "");
break out;
case 1073742362:
bsSelected = ms.getAtoms(1086324744, withinStr);
break out;
}
return false;
case 2:
switch (tok) {
case 7:
break;
case 1073742362:
tok = 1086324744;
break;
case 1073741824:
case 1086326786:
case 1086326785:
case 1073741863:
case 1086324744:
case 1111490587:
case 1073742128:
case 1073741925:
case 1073742189:
bsSelected = this.vwr.ms.getAtoms(tok, JS.SV.sValue(args[1]));
break out;
case 1094713349:
case 1094713350:
bsSelected = this.vwr.ms.getAtoms(tok, JS.SV.ptValue(args[1]));
break out;
case 1814695966:
var l = args[1].getList();
if (l == null) return false;
var oabc = null;
var uc = null;
if (l.size() != 4) return false;
oabc =  new Array(4);
for (var i = 0; i < 4; i++) {
if ((oabc[i] = JS.SV.ptValue(l.get(i))) == null) return false;
}
uc = this.vwr.getSymTemp().getUnitCell(oabc, false, null);
bsSelected = this.vwr.ms.getAtoms(tok, uc);
break out;
}
break;
case 3:
switch (tok) {
case 1073742335:
case 1073742334:
case 1086324742:
case 1648363544:
case 1814695966:
case 134217750:
case 134219777:
case 1073742329:
case 8:
case 7:
break;
case 1086324744:
withinStr = JS.SV.sValue(args[1]);
break;
default:
return false;
}
break;
}
var plane = null;
var pt = null;
var pts1 = null;
var last = args.length - 1;
switch (args[last].tok) {
case 9:
plane = args[last].value;
break;
case 8:
pt = args[last].value;
if (JS.SV.sValue(args[1]).equalsIgnoreCase("hkl")) plane = this.e.getHklPlane(pt, NaN, null);
break;
case 7:
pts1 = (last == 2 && args[1].tok == 7 ? args[1].getList() : null);
pt = (last == 2 ? JS.SV.ptValue(args[1]) : last == 1 ? JU.P3.new3(NaN, 0, 0) : null);
break;
}
if (plane != null) {
bsSelected = ms.getAtomsNearPlane(distance, plane);
break out;
}var bsLast = (args[last].tok == 10 ? args[last].value : null);
if (bs == null) bs = bsLast;
if (last > 0 && pt == null && pts1 == null && bs == null) return false;
if (tok == 1814695966) {
var asMap = isWithinModelSet;
return ((bs != null || pt != null) && mp.addXObj(this.vwr.ms.getUnitCellPointsWithin(distance, bs, pt, asMap)));
}if (pt != null || pts1 != null) {
if (args[last].tok == 7) {
var sv = args[last].getList();
var ap3 =  new Array(sv.size());
for (var i = ap3.length; --i >= 0; ) ap3[i] = JS.SV.ptValue(sv.get(i));

var ap31 = null;
if (pts1 != null) {
ap31 =  new Array(pts1.size());
for (var i = ap31.length; --i >= 0; ) ap31[i] = JS.SV.ptValue(pts1.get(i));

}var ret =  new Array(1);
if (bs != null) {
bs.and(this.vwr.getAllAtoms());
ap31 = this.vwr.ms.at;
}switch (J.bspt.PointIterator.withinDistPoints(distance, pt, ap3, ap31, bs, ret)) {
case 10:
return mp.addXBs(ret[0]);
case 134217751:
return mp.addXPt(ret[0]);
case 1073742001:
return mp.addXList(ret[0]);
case 1275068418:
return mp.addXAI(ret[0]);
case 4:
return mp.addXStr(ret[0]);
default:
return false;
}
}return mp.addXBs(this.vwr.getAtomsNearPt(distance, pt, null));
}if (tok == 1086324744) {
return mp.addXBs(this.vwr.ms.getSequenceBits(withinStr, bs,  new JU.BS()));
}if (bs == null) bs =  new JU.BS();
if (!isDistance) {
try {
return mp.addXBs(this.vwr.ms.getAtoms(tok, bs));
} catch (e) {
if (Clazz_exceptionOf(e, Exception)){
return false;
} else {
throw e;
}
}
}if (isWithinGroup) return mp.addXBs(this.vwr.getGroupsWithin(Clazz_floatToInt(distance), bs));
if (isVdw) {
rd =  new J.atomdata.RadiusData(null, (distance > 10 ? distance / 100 : distance), (distance > 10 ? J.atomdata.RadiusData.EnumType.FACTOR : J.atomdata.RadiusData.EnumType.OFFSET), J.c.VDW.AUTO);
if (distance < 0) distance = 0;
}var bsret = this.vwr.ms.getAtomsWithinRadius(distance, (isAtomProperty ? bsLast : bs), isWithinModelSet, rd, isAtomProperty ? bs : null);
if (isAtomProperty) {
bsret.andNot(bsLast);
}return mp.addXBs(bsret);
}
if (bsSelected != null) {
if (bs != null) bsSelected.and(bs);
return mp.addXBs(bsSelected);
}return false;
}, "JS.ScriptMathProcessor,~A,~B");
Clazz_defineMethod(c$, "evaluateWrite", 
function(mp, args){
if (!this.checkAccess()) return false;
var n = args.length;
var asBytes = false;
if (n == 2 && args[1].tok == 1073742335) {
n = 1;
asBytes = true;
}switch (n) {
case 0:
return false;
case 1:
var type = args[0].asString().toUpperCase();
if (type.equals("PNGJ")) {
var o = this.vwr.fm.getFileAsMap(null, "PNGJ", asBytes);
return (asBytes ? mp.addX(JS.SV.newV(15,  new JU.BArray(o))) : mp.addXMap(o));
}if (JU.PT.isOneOf(type, ";ZIP;ZIPALL;JMOL;")) {
var params =  new java.util.Hashtable();
var oc =  new JU.OC();
params.put("outputChannel", oc);
this.vwr.createZip(null, type, params);
var bytes = oc.toByteArray();
if (asBytes) return mp.addX(JS.SV.newV(15,  new JU.BArray(bytes)));
params =  new java.util.Hashtable();
this.vwr.readFileAsMap(JU.Rdr.getBIS(bytes), params, null);
return mp.addXMap(params);
}break;
}
return mp.addXStr(this.e.getCmdExt().dispatch(134221856, true, args));
}, "JS.ScriptMathProcessor,~A");
Clazz_defineMethod(c$, "getAtomsNearSurface", 
function(distance, surfaceId){
var data =  Clazz_newArray(-1, [surfaceId, null, null]);
if (this.e.getShapePropertyData(24, "getVertices", data)) return this.getAtomsNearPts(distance, data[1], data[2]);
data[1] = Integer.$valueOf(0);
data[2] = Integer.$valueOf(-1);
if (this.e.getShapePropertyData(22, "getCenter", data)) {
return this.vwr.getAtomsNearPt(distance, data[2], null);
}data[1] = Float.$valueOf(distance);
if (this.e.getShapePropertyData(21, "getAtomsWithin", data)) return data[2];
return  new JU.BS();
}, "~N,~S");
Clazz_defineMethod(c$, "getAtomsNearPts", 
function(distance, points, bsInclude){
var bsResult =  new JU.BS();
if (points.length == 0 || bsInclude != null && bsInclude.isEmpty()) return bsResult;
if (bsInclude == null) bsInclude = JU.BSUtil.setAll(points.length);
var at = this.vwr.ms.at;
for (var i = this.vwr.ms.ac; --i >= 0; ) {
var atom = at[i];
if (atom == null) continue;
for (var j = bsInclude.nextSetBit(0); j >= 0; j = bsInclude.nextSetBit(j + 1)) if (atom.distance(points[j]) < distance) {
bsResult.set(i);
break;
}
}
return bsResult;
}, "~N,~A,JU.BS");
Clazz_defineMethod(c$, "getMinMax", 
function(floatOrSVArray, tok, isSV){
var data = null;
var sv = null;
var ndata = 0;
var htPivot = null;
while (true) {
if (JU.AU.isAF(floatOrSVArray)) {
if (tok == 1275068725) return Float.$valueOf(NaN);
data = floatOrSVArray;
ndata = data.length;
if (ndata == 0) break;
} else if (Clazz_instanceOf(floatOrSVArray,"JU.Lst")) {
sv = floatOrSVArray;
ndata = sv.size();
if (ndata == 0) {
if (tok != 1275068725) break;
} else {
if (tok != 1275068725) {
var sv0 = sv.get(0);
if (sv0.tok == 8) return this.getMinMaxPoint(sv, tok);
if (sv0.tok == 4 && (sv0.value).startsWith("{")) {
var pt = JS.SV.ptValue(sv0);
if (Clazz_instanceOf(pt,"JU.P3")) return this.getMinMaxPoint(sv, tok);
if (Clazz_instanceOf(pt,"JU.P4")) return this.getMinMaxQuaternion(sv, tok);
break;
}}}} else {
break;
}var sum;
var minMax;
var isMin = false;
switch (tok) {
case 1275068725:
htPivot =  new java.util.Hashtable();
sum = minMax = 0;
break;
case 32:
isMin = true;
sum = 3.4028235E38;
minMax = 2147483647;
break;
case 64:
sum = -3.4028235E38;
minMax = -2147483647;
break;
default:
sum = minMax = 0;
}
var sum2 = 0;
var n = 0;
var isInt = true;
var isPivot = (tok == 1275068725);
for (var i = ndata; --i >= 0; ) {
var o = (sv == null ? null : sv.get(i));
var svi = (!isSV ? null : o == null ? JS.SV.vF : o);
var v = (isPivot ? 1 : data == null ? JS.SV.fValue(svi) : data[i]);
if (Float.isNaN(v)) continue;
n++;
switch (tok) {
case 160:
case 192:
sum2 += (v) * v;
case 128:
case 96:
sum += v;
break;
case 1275068725:
var key = (svi == null ? o.toString() : svi.asString());
var ii = htPivot.get(key);
htPivot.put(key, (ii == null ? Integer.$valueOf(1) : Integer.$valueOf(ii.intValue() + 1)));
break;
case 32:
case 64:
isInt = new Boolean (isInt & (svi.tok == 2)).valueOf();
if (isMin == (v < sum)) {
sum = v;
if (isInt) minMax = svi.intValue;
}break;
}
}
if (tok == 1275068725) {
return htPivot;
}if (n == 0) break;
switch (tok) {
case 96:
sum /= n;
break;
case 192:
if (n == 1) break;
sum = Math.sqrt((sum2 - sum * sum / n) / (n - 1));
break;
case 32:
case 64:
if (isInt) return Integer.$valueOf(minMax);
break;
case 128:
break;
case 160:
sum = sum2;
break;
}
return Float.$valueOf(sum);
}
return JS.MathExt.nan;
}, "~O,~N,~B");
Clazz_defineMethod(c$, "getMinMaxPoint", 
function(pointOrSVArray, tok){
var data = null;
var sv = null;
var ndata = 0;
if (Clazz_instanceOf(pointOrSVArray,Array)) {
data = pointOrSVArray;
ndata = data.length;
} else if (Clazz_instanceOf(pointOrSVArray,"JU.Lst")) {
sv = pointOrSVArray;
ndata = sv.size();
}if (sv == null && data == null) return JS.MathExt.nan;
var result =  new JU.P3();
var fdata =  Clazz_newFloatArray (ndata, 0);
for (var xyz = 0; xyz < 3; xyz++) {
for (var i = 0; i < ndata; i++) {
var pt = (data == null ? JS.SV.ptValue(sv.get(i)) : data[i]);
if (pt == null) return JS.MathExt.nan;
switch (xyz) {
case 0:
fdata[i] = pt.x;
break;
case 1:
fdata[i] = pt.y;
break;
case 2:
fdata[i] = pt.z;
break;
}
}
var f = this.getMinMax(fdata, tok, true);
if (!(Clazz_instanceOf(f, Number))) return JS.MathExt.nan;
var value = (f).floatValue();
switch (xyz) {
case 0:
result.x = value;
break;
case 1:
result.y = value;
break;
case 2:
result.z = value;
break;
}
}
return result;
}, "~O,~N");
Clazz_defineMethod(c$, "getMinMaxQuaternion", 
function(svData, tok){
var data;
switch (tok) {
case 32:
case 64:
case 128:
case 160:
return JS.MathExt.nan;
}
while (true) {
data = this.e.getQuaternionArray(svData, 1073742001);
if (data == null) break;
var retStddev =  Clazz_newFloatArray (1, 0);
var result = JU.Quat.sphereMean(data, retStddev, 0.0001);
switch (tok) {
case 96:
return result;
case 192:
return Float.$valueOf(retStddev[0]);
}
break;
}
return JS.MathExt.nan;
}, "JU.Lst,~N");
Clazz_defineMethod(c$, "getPatternMatcher", 
function(){
return (this.pm == null ? this.pm = J.api.Interface.getUtil("PatternMatcher", this.e.vwr, "script") : this.pm);
});
Clazz_defineMethod(c$, "opTokenFor", 
function(tok){
switch (tok) {
case 1275069441:
case 1275069446:
return JS.T.tokenPlus;
case 1275068931:
return JS.T.tokenMinus;
case 1275068929:
return JS.T.tokenTimes;
case 1275068930:
return JS.T.tokenMul3;
case 1275068928:
return JS.T.tokenDivide;
}
return null;
}, "~N");
Clazz_defineMethod(c$, "setContactBitSets", 
function(bsA, bsB, localOnly, distance, rd, warnMultiModel){
var withinAllModels;
var bs;
if (bsB == null) {
bsB = JU.BSUtil.setAll(this.vwr.ms.ac);
JU.BSUtil.andNot(bsB, this.vwr.slm.bsDeleted);
bsB.andNot(bsA);
withinAllModels = false;
} else {
bs = JU.BSUtil.copy(bsA);
bs.or(bsB);
var nModels = this.vwr.ms.getModelBS(bs, false).cardinality();
withinAllModels = (nModels > 1);
if (warnMultiModel && nModels > 1 && !this.e.tQuiet) this.e.showString(J.i18n.GT.$("Note: More than one model is involved in this contact!"));
}if (!bsA.equals(bsB)) {
var setBfirst = (!localOnly || bsA.cardinality() < bsB.cardinality());
if (setBfirst) {
bs = this.vwr.ms.getAtomsWithinRadius(distance, bsA, withinAllModels, (Float.isNaN(distance) ? rd : null), null);
bsB.and(bs);
}if (localOnly) {
bs = this.vwr.ms.getAtomsWithinRadius(distance, bsB, withinAllModels, (Float.isNaN(distance) ? rd : null), null);
bsA.and(bs);
if (!setBfirst) {
bs = this.vwr.ms.getAtomsWithinRadius(distance, bsA, withinAllModels, (Float.isNaN(distance) ? rd : null), null);
bsB.and(bs);
}bs = JU.BSUtil.copy(bsB);
bs.and(bsA);
if (bs.equals(bsA)) bsB.andNot(bsA);
 else if (bs.equals(bsB)) bsA.andNot(bsB);
}}return bsB;
}, "JU.BS,JU.BS,~B,~N,J.atomdata.RadiusData,~B");
c$.nan = Float.$valueOf(NaN);
c$.t0 = System.currentTimeMillis();
});
;//5.0.1-v7 Mon Jun 30 08:59:24 CDT 2025
Clazz_declarePackage("J.bspt");
Clazz_load(null, "J.bspt.PointIterator", ["JU.BS", "$.Lst", "$.P3", "J.bspt.Bspt", "JU.BSUtil", "$.Point3fi"], function(){
var c$ = Clazz_declareType(J.bspt, "PointIterator", null);
c$.withinDistPoints = Clazz_defineMethod(c$, "withinDistPoints", 
function(distance, pt, ap3, ap31, bsSelected, ret){
var pts =  new JU.Lst();
var bspt =  new J.bspt.Bspt(3, 0);
var iter;
if (pt != null && Float.isNaN(pt.x)) {
var pt3 =  new Array(ap3.length);
var p;
for (var i = pt3.length; --i >= 0; ) {
var p3 = ap3[i];
if (p3 == null) return 0;
if (bsSelected == null) {
p =  new JU.Point3fi();
p.setT(p3);
p.i = i;
pt3[i] = p;
bspt.addTuple(p);
} else {
bspt.addTuple(p3);
}}
iter = bspt.allocateCubeIterator();
var bsp;
if (bsSelected != null) {
bsp = JU.BS.newN(ap31.length);
for (var i = bsSelected.nextSetBit(0); i >= 0; i = bsSelected.nextSetBit(i + 1)) {
iter.initialize(ap31[i], distance, false);
var d2 = distance * distance;
while (iter.hasMoreElements()) {
if (iter.nextElement().distanceSquared(ap31[i]) <= d2) {
bsp.set(i);
break;
}}
}
ret[0] = bsp;
return 10;
}bsp = JU.BSUtil.newBitSet2(0, ap3.length);
for (var i = pt3.length; --i >= 0; ) {
iter.initialize(p = pt3[i], distance, false);
var d2 = distance * distance;
var n = 0;
while (iter.hasMoreElements()) {
var pt2 = iter.nextElement();
if (bsp.get(pt2.i) && pt2.distanceSquared(p) <= d2 && (++n > 1)) bsp.clear(pt2.i);
}
}
for (var i = bsp.nextSetBit(0); i >= 0; i = bsp.nextSetBit(i + 1)) pts.addLast(JU.P3.newP(pt3[i]));

ret[0] = pts;
return 1073742001;
}if (distance == 0) {
if (ap31 == null) {
var d2 = 3.4028235E38;
var pt3 = null;
for (var i = ap3.length; --i >= 0; ) {
var pta = ap3[i];
distance = pta.distanceSquared(pt);
if (distance < d2) {
pt3 = pta;
d2 = distance;
}}
ret[0] = (pt3 == null ? "" : pt3);
return (pt3 == null ? 4 : 134217751);
}var ptsOut =  Clazz_newIntArray (ap31.length, 0);
for (var i = ptsOut.length; --i >= 0; ) {
var d2 = 3.4028235E38;
var imin = -1;
pt = ap31[i];
for (var j = ap3.length; --j >= 0; ) {
var pta = ap3[j];
distance = pta.distanceSquared(pt);
if (distance < d2) {
imin = j;
d2 = distance;
}}
ptsOut[i] = imin;
}
ret[0] = ptsOut;
return 1275068418;
}for (var i = ap3.length; --i >= 0; ) bspt.addTuple(ap3[i]);

iter = bspt.allocateCubeIterator();
iter.initialize(pt, distance, false);
var d2 = distance * distance;
while (iter.hasMoreElements()) {
var pt2 = iter.nextElement();
if (pt2.distanceSquared(pt) <= d2) pts.addLast(pt2);
}
iter.release();
ret[0] = pts;
return 1073742001;
}, "~N,JU.P3,~A,~A,JU.BS,~A");
});
;//5.0.1-v7 Mon Jun 09 19:40:05 CEST 2025
Clazz_declarePackage("JU");
Clazz_load(null, "JU.PatternMatcher", ["JV.Viewer"], function(){
var c$ = Clazz_declareType(JU, "PatternMatcher", null);
/*LV!1824 unnec constructor*/Clazz_defineMethod(c$, "compile", 
function(regex, isCaseInsensitive){
if (JV.Viewer.isJS && !JV.Viewer.isSwingJS) {
return  new JU.PatternMatcher.JSPattern(regex, isCaseInsensitive);
}{
}}, "~S,~B");
/*if3*/;(function(){
var c$ = Clazz_decorateAsClass(function(){
this.regexp = null;
this.strString = null;
this.leftBound = -1;
this.rightBound = -1;
this.results = null;
Clazz_instantialize(this, arguments);}, JU.PatternMatcher, "JSPattern", null);
Clazz_makeConstructor(c$, 
function(regex, isCaseInsensitive){
var flagStr = (isCaseInsensitive ? "gi" : "g");
{
this.regexp = new RegExp(regex, flagStr);
}}, "~S,~B");
Clazz_defineMethod(c$, "find", 
function(){
var s = (this.rightBound == this.strString.length ? this.strString : this.strString.substring(0, this.rightBound));
{
this.regexp.lastIndex = this.leftBound;
this.results = this.regexp.exec(s);
this.leftBound = this.regexp.lastIndex;
}return (this.results != null);
});
Clazz_defineMethod(c$, "start", 
function(){
{
return this.regexp.lastIndex - this.results[0].length;
}});
Clazz_defineMethod(c$, "end", 
function(){
{
return this.regexp.lastIndex;
}});
Clazz_defineMethod(c$, "group", 
function(){
if (this.results == null || this.results.length == 0) {
return null;
}return this.results[0];
});
Clazz_defineMethod(c$, "matcher", 
function(s){
this.strString = s;
this.leftBound = 0;
this.rightBound = s.length;
return this;
}, "~S");
/*eoif3*/})();
});
;//5.0.1-v7 Tue May 20 13:40:34 CDT 2025
})(Clazz
,Clazz.getClassName
,Clazz.newLongArray
,Clazz.doubleToByte
,Clazz.doubleToInt
,Clazz.doubleToLong
,Clazz.declarePackage
,Clazz.instanceOf
,Clazz.load
,Clazz.instantialize
,Clazz.decorateAsClass
,Clazz.floatToInt
,Clazz.floatToLong
,Clazz.makeConstructor
,Clazz.defineEnumConstant
,Clazz.exceptionOf
,Clazz.newIntArray
,Clazz.newFloatArray
,Clazz.declareType
,Clazz.prepareFields
,Clazz.superConstructor
,Clazz.newByteArray
,Clazz.declareInterface
,Clazz.newShortArray
,Clazz.innerTypeInstance
,Clazz.isClassDefined
,Clazz.prepareCallback
,Clazz.newArray
,Clazz.castNullAs
,Clazz.floatToShort
,Clazz.superCall
,Clazz.decorateAsType
,Clazz.newBooleanArray
,Clazz.newCharArray
,Clazz.implementOf
,Clazz.newDoubleArray
,Clazz.overrideConstructor
,Clazz.clone
,Clazz.doubleToShort
,Clazz.getInheritedLevel
,Clazz.getParamsType
,Clazz.isAF
,Clazz.isAB
,Clazz.isAI
,Clazz.isAS
,Clazz.isASS
,Clazz.isAP
,Clazz.isAFloat
,Clazz.isAII
,Clazz.isAFF
,Clazz.isAFFF
,Clazz.tryToSearchAndExecute
,Clazz.getStackTrace
,Clazz.inheritArgs
,Clazz.alert
,Clazz.defineMethod
,Clazz.overrideMethod
,Clazz.declareAnonymous
//,Clazz.checkPrivateMethod
,Clazz.cloneFinals
);
