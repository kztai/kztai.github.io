/**
 * 新增、删除、修改某些数据表记录后需要上传，支持多表多记录
 // * @param vm {object}
 * @param data {object}
 * @param data.objectName {array} 待上传表记录对应的表名
 * @param data.record {array} 待上传表记录对应的id
 * @param successCallBack
 * @param errorCallBack
 */
var libUpload = {};


libUpload.uploadData0 = function (data, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var dataPort;
  var fnname = 'libUpload.uploadData';

  if (successCallBack !== null) {
    var p = {};
    p.successCallBack = successCallBack;
    p.errorCallBack = errorCallBack;
    p.nStep = 0;
    errorCallBack = p;
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    if ($this.debugFlag_szl) {
      console.log('【SZL】' + fnname + ': para.nStep = ' + para.nStep);
    }
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
      case 'init':
        para.i = 0;
        para.nStep = 'dataPort';
        dbFlag += 1;
        break;
      case 'dataPort':
        para.nStep = 'dataOutput';
        switch (data.objectName[para.i]) {
          case 'immediateValue':
            dataPort = 'singlularIO';
            break;
          case 'module':
            dataPort = 'moduleIO';
            break;
          case 'table':
            dataPort = 'tableIO';
            break;
          case 'gene':
            dataPort = 'geneIO';
            break;
          case 'cloud':
            dataPort = 'cloudIO';
            break;
          default:
            dataPort = data.objectName[para.i];
            para.nStep = 'end';
        }
        dbFlag += 1;
        break;
      case 'dataOutput':
        if (para.i === data.objectName.length) {
          para.nStep = 'end';
          dbFlag += 1;
          break;
        }

        $this.sys.api.dataOutput(dataPort, data.record[para.i], '',
          function () {
            para.i += 1;
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.uploadData(data, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'end':
        para.successCallBack('success');
        return;
      default:
        para.errorCallBack('error');
        return;
    }
    dbFlag += 1;
    if (dbFlag === 1) return;
  }
};


libUpload.uploadData = function (data, successCallBack, errorCallBack) {
  var $this = this;
  var para;
  var dbFlag;
  var dataPort;
  var fnname = 'libUpload.uploadData';

  if (successCallBack !== null) {
    var p = {};
    p.successCallBack = successCallBack;
    p.errorCallBack = errorCallBack;
    p.nStep = 0;
    errorCallBack = p;
    successCallBack = null;
  }
  para = errorCallBack;

  while (1) {
    if ($this.debugFlag_szl) {
      console.log('【SZL】' + fnname + ': para.nStep = ' + para.nStep);
    }
    dbFlag = 0;
    switch (para.nStep) {
      case 0:
      case 'init':
        para.i = 0;
        para.nStep = 'getRoot';
        dbFlag += 1;
        break;
      case 'getRoot':
        if (para.i === data.objectName.length) {
          para.nStep = 'end';
          dbFlag += 1;
          break;
        }
        $this.sys.api.getRootRecord(data.objectName[para.i], data.record[para.i],
          function (result) {
            para.root = result;
            para.nStep = 'dataPort';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.uploadData(data, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'dataPort':
        switch (para.root.tableName) {
          case 'immediateValue':
            dataPort = 'singlularIO';
            break;
          case 'module':
            dataPort = 'moduleIO';
            break;
          case 'table':
            dataPort = 'tableIO';
            break;
          case 'gene':
            dataPort = 'geneIO';
            break;
          case 'cloud':
            dataPort = 'cloudIO';
            break;
          default:
            dataPort = para.root.tableName;
        }
        para.nStep = 'dataOutput';
        dbFlag += 1;
        break;
      case 'dataOutput':
        $this.sys.api.dataOutput(dataPort, para.root.arrRecord, '',
          function () {
            para.i += 1;
            para.nStep = 'getRoot';
            dbFlag += 1;
            if (dbFlag === 2) {
              $this.uploadData(data, successCallBack, errorCallBack);
            }
          }, para.errorCallBack);
        break;
      case 'end':
        para.successCallBack('success');
        return;
      default:
        para.errorCallBack('error');
        return;
    }
    dbFlag += 1;
    if (dbFlag === 1) return;
  }
};

export default libUpload;
