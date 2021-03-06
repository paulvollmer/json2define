// json2define - lib/index.js


function json2define() {
  this.root = '';
  this.data;
  this.uppercase = true;
  this.linebreak = '\n';
}

module.exports = json2define;

json2define.prototype.setRoot = function(root) {
  this.root = root;
};

json2define.prototype.isRootSet = function() {
  if (this.root !== '') return true;
  else return false;
};

json2define.prototype.setJSON = function(data) {
  var dataParsed = {};
  try {
    dataParsed = JSON.parse(data);
  } catch(e) {
    console.log(e);
  }
  this.data = dataParsed;
};

json2define.prototype.setUppercase = function(uppercase) {
  this.uppercase = uppercase;
};

json2define.prototype.getDefineCode = function(name, value) {
  if (this.uppercase === true) name = name.toUpperCase();
  var str = '#define ';
  if (this.isRootSet()) str += this.root+'_';

  // check if name contains a "-" and replace with "_"
  var replacedName = name.replace('-', '_');
  str += replacedName;

  // check value type
  var valueType = typeof value;
  if (valueType === 'boolean') {
    str += ' '+value+'';
  }
  else if (valueType === 'number') {
    str += ' '+value+'';
  }
  else if (valueType === 'string') {
    // value is a char
    if (value.length === 1) {
      str += ' \''+value+'\'';
    }
    // value is a string
    else {
      str += ' "'+value+'"';
    }
  };

  return str;
};

json2define.prototype.getFileHead = function() {
  var str = '//'+this.linebreak+
            '// This File was generated by json2define'+this.linebreak+
            '// Date: '+new Date()+this.linebreak+
            '//'+this.linebreak+
            '// DO NOT EDIT BY HAND'+this.linebreak+
            '//'+this.linebreak;
  return str;
};

json2define.prototype.generate = function() {
  var str = this.getFileHead()+this.linebreak;
  var defineName;
  if (this.isRootSet()) defineName = 'INCLUDED_'+this.root+'_H';
  else defineName = 'INCLUDED_GENERATED_JSON2DEFINE_H';
  str += '#ifndef '+defineName+this.linebreak;
  str += '#define '+defineName+this.linebreak+this.linebreak;
  str += this.parseObject(this.data);
  str += this.linebreak+'#endif // '+defineName+this.linebreak;
  return str;
};

json2define.prototype.parseObject = function(obj, beginStr) {
  if (beginStr === undefined) beginStr = '';
  else beginStr += '_';
  var str = '';
  for(i in obj) {
    if (typeof obj[i] === 'object') {
      //str += '// object '+i+this.linebreak;
      str += this.parseObject(obj[i], i);
    }
    else {
      str += this.getDefineCode(beginStr+i, obj[i])+this.linebreak;
    }
    //console.log(i+' '+this.data[i]);
  }
  return str;
};
