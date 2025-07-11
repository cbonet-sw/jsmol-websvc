Clazz.declarePackage("J.adapter.readers.xml");
Clazz.load(["J.adapter.readers.xml.XmlReader", "JU.BS"], "J.adapter.readers.xml.XmlXsdReader", ["JU.PT", "J.adapter.smarter.Atom"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.bsBackbone = null;
this.iChain = -1;
this.iGroup = 0;
this.iAtom = 0;
Clazz.instantialize(this, arguments);}, J.adapter.readers.xml, "XmlXsdReader", J.adapter.readers.xml.XmlReader);
Clazz.prepareFields (c$, function(){
this.bsBackbone =  new JU.BS();
});
Clazz.makeConstructor(c$, 
function(){
Clazz.superConstructor (this, J.adapter.readers.xml.XmlXsdReader, []);
});
Clazz.overrideMethod(c$, "processXml", 
function(parent, saxReader){
parent.htParams.put("backboneAtoms", this.bsBackbone);
this.processXml2(parent, saxReader);
this.asc.atomSymbolicMap.clear();
}, "J.adapter.readers.xml.XmlReader,~O");
Clazz.overrideMethod(c$, "processStartElement", 
function(localName, nodeName){
var tokens;
if ("molecule".equals(localName)) {
this.asc.newAtomSet();
this.asc.setAtomSetName(this.atts.get("name"));
return;
}if ("linearchain".equals(localName)) {
this.iGroup = 0;
this.iChain++;
}if ("repeatunit".equals(localName)) {
this.iGroup++;
}if ("atom3d".equals(localName)) {
this.thisAtom =  new J.adapter.smarter.Atom();
this.thisAtom.elementSymbol = this.atts.get("components");
this.thisAtom.atomName = this.atts.get("id");
this.thisAtom.atomSerial = ++this.iAtom;
if (this.iChain >= 0) this.parent.setChainID(this.thisAtom, "" + String.fromCharCode((this.iChain - 1) % 26 + 65));
this.thisAtom.group3 = "UNK";
if (this.iGroup == 0) this.iGroup = 1;
this.thisAtom.sequenceNumber = this.iGroup;
var xyz = this.atts.get("xyz");
if (xyz != null) {
tokens = JU.PT.getTokens(xyz.$replace(',', ' '));
this.thisAtom.set(this.parseFloatStr(tokens[0]), this.parseFloatStr(tokens[1]), this.parseFloatStr(tokens[2]));
}var isBackbone = "1".equals(this.atts.get("isbackboneatom"));
if (isBackbone) this.bsBackbone.set(this.iAtom);
return;
}if ("bond".equals(localName)) {
var atoms = JU.PT.split(this.atts.get("connects"), ",");
var order = 1;
if (this.atts.containsKey("type")) {
var type = this.atts.get("type");
if (type.equals("Double")) order = 2;
 else if (type.equals("Triple")) order = 3;
}this.asc.addNewBondFromNames(atoms[0], atoms[1], order);
return;
}}, "~S,~S");
Clazz.overrideMethod(c$, "processEndElement", 
function(localName){
if ("atom3d".equalsIgnoreCase(localName)) {
if (this.thisAtom.elementSymbol != null && !Float.isNaN(this.thisAtom.z)) {
this.parent.setAtomCoord(this.thisAtom);
this.asc.addAtomWithMappedName(this.thisAtom);
}this.thisAtom = null;
return;
}this.setKeepChars(false);
}, "~S");
});
;//5.0.1-v7 Tue Jun 10 01:13:43 CEST 2025
