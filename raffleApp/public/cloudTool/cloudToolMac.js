function CCloudToolMac() {

}

CCloudToolMac.prototype.mac = {
  tb: {//表定义
    head_r: "$r_", //根表头
    head_l: "$l_", //粒子运行(log)表头

    rTable         : "$r_table",
    rField         : "$r_field",
    rEnum          : "$r_enum",
    rIndex         : "$r_index",
    rIndexField    : "$r_indexField",
    rLinkTableState: "$r_linkTableState",
    sGene          : "gene",
    sGeneTable     : "geneTable",
    sGeneField     : "geneField",
    pg_db          : "$pg_db", //存贮数据库地址：server-db，如：w_0-u_2_2_2

    // zls_新增部分
    gene             : 'gene',
    dataPort         : "dataPort",
    geneTable        : "geneTable",
    vesselClass      : 'vesselClass',
    geneSubModule    : 'geneSubModule',
    module           : 'module',
    subGene          : 'subGene',
    geneSubEvent     : 'geneSubEvent',
    geneSubEventPara : 'geneSubEventPara',
    geneSubMethod    : 'geneSubMethod',
    geneSubMethodPara: 'geneSubMethodPara',
    subModuleParaSet : 'subModuleParaSet',
    MDEventPort      : 'MDEventPort',
    methodPort       : 'methodPort',
    methodPortPara   : 'methodPortPara',
    modulePara       : 'modulePara',
    MDEventPara      : 'MDEventPara',
    table            : 'table',
    field            : 'field',
    enum             : 'enum',
    fieldInitial     : 'fieldInitial',
    cloud            : "cloud",
    cloudVessel      : "cloudVessel",
    cloudGene        : "cloudGene",
    cloudDataPort    : "cloudDataPort",
    cloudEventPort   : "eventPort",
    geneStyle        : 'geneStyle',
    geneVariable     : 'geneVariable',
    event            : 'event',
    baseStyleVariable: 'baseStyleVariable',
    dataType         : 'dataType',
    variable         : 'variable',
    action           : 'action',
    eventPort        : 'eventPort',
    index            : 'index',
    // cloudFunction    : 'cloudFunction',
    cloudTable       : 'cloudTable',
    library          : 'library',
    libraryFunction  : 'libraryFunction',
    immediateValue   : 'immediateValue',


    // canvas
    canvasModule: 'canvasModule',
    elementModule: 'elementModule',
    groupModule: 'groupModule',
    groupElement: 'groupElement',
    lineModule: 'lineModule',

    // cloudCanvas
    cloudCanvas: 'cloudCanvas',
    cloudFunction: 'cloudFunction',
    vesselCanvas: 'vesselCanvas',
    vesselClassCanvas: 'vesselClassCanvas',
    geneElement: 'geneElement',
  },

  defVal: {//默认值定义
    linkVer: 0,//关联时，新建记录的默认版本
    newVer : 1,//表新建记录的默认版本
    del    : 0,//表新建记录的默认值
    m      : 1,//表新建记录的默认值
  },

  fd: {
    id     : "id",
    pt_id  : "$pt_id",
    gene_id: "$gene_id",
    user_id: "$user_id",
    del    : "$del",
    m      : "$m",
    ver    : "$ver",
    pg_ver : "$pg_ver",
    pg_id  : "$pg_id",
    pg_db  : "$pg_db",

    library        : {
      libraryName: 'library_name',
      comment    : 'comment',
      fileName   : 'file_name',
      status     : 'status',
      source     : 'source'
    },
    libraryFunction: {
      functionName: 'function_name',
      comment     : 'comment',
      outputWay   : 'output_way',
      code        : 'code',
      cpuConsume  : 'cpu_consume',
      memConsume  : 'mem_consume',
      para        : 'para'
    },

    index: {
      tableName : 'table_name',
      type      : 'type',
      fieldNum  : 'field_num',
      indexField: 'index_field'
    },

    cloudFunction: {
      parentCloudFunctionId: 'parent',
      functionName         : 'function_name',
      comment              : 'dataport_type',
      type                 : 'type',
      cloudVesselId        : 'cloud_vessel_id'
    },
    cloudTable   : {
      tableName: 'table_name',
      showName : 'show_name',
      comment  : 'comment'
    },

    immediateValue: {
      dataPortId   : 'dataport_id',
      subDataPortId: 'subdataport_id',
      value        : 'value',
    },
    gene          : {
      geneName    : "gene_name",
      type        : 'type',
      terminalType: 'terminal_type',
      layoutData  : 'layout_data',
      geneVersion : 'gene_version',
      url         : 'url',
      htmlName    : 'html_name',
      checkCode   : 'check_code',
      createDate  : 'create_date',
      createTime  : 'create_time',
      icon        : 'icon',
      comment     : 'comment',
      groupId     : 'group_id',
      cloudId     : 'cloud_id',
      right       : 'right',
      startTime   : 'start_time',
      deadLine    : 'deadline',
      quoteSum    : 'quote_sum',
      para        : 'para',
      status      : 'status',
    },
    geneLog       : {
      quoteGeneId: 'quote_gene_id'
    },
    geneTable     : {
      parentTableName: 'parent_table_name',
      tableName      : 'table_name',
      medium         : 'medium',
      source         : 'source',
      field          : 'field',
      initial        : 'initial',
    },

    dataPort   : {
      dataPortName: 'dataport_name',
      dataPortType: 'dataport_type',
      eventId     : 'event_id'
    },
    vesselClass: {
      vesselName : 'vessel_name',
      type       : 'type',
      attribute  : 'attribute',
      number     : 'number',
      winType    : 'win_type',
      size       : 'size',
      rowId      : 'row_id',
      parentWinId: 'parentwin_id',
      eventSet   : 'event_set',
      style      : 'style'
    },
    subGene    : {
      subGeneName : 'subgene_name',
      cloudId     : 'cloud_id',
      geneBaseId  : 'gene_base_id',
      vesselId    : 'vessel_id',
      type        : 'type',
      html        : 'html',
      terminalType: 'terminal_type',
      memConsume  : 'mem_consume',
      attrib      : 'attrib',
      paraSet     : 'para_set',
    },

    subEventPort: {
      eventPortSubId   : 'eventport_sub_id',
      subEventPortName : 'eventport_name',
      eventPortParentId: 'eventport_parent_id',
      eventId          : 'event_id',
      portType         : 'port_type',
      runType          : 'run_type',
      subEventType     : 'subevent_type',
      subGeneName      : 'subgene_name',
      para             : 'para',
      connectSubEvent  : 'connect_subevent',
    },

    subDataPort: {
      subDataPortName  : 'dataport_name',
      dataPortSubId    : 'dataport_sub_id',
      connectParentData: 'connect_parentdata',
      type             : 'type',
      // relatedTable     : 'related_table',
      // connectTableName : 'connect_table_name',
      eventId          : 'event_id',
      connectSubData   : 'connect_subdata',
      subGeneName      : 'subgene_name',
    },
    event      : {
      eventName: 'event_name',
      type     : 'type',
      option   : 'option',
      comment  : 'comment',
      code     : 'code',
      runType  : 'run_type',
      outputWay: 'output_way',
      para     : 'para',
    },

    variable : {
      variableName: 'variable_name',
      comment     : 'comment',
      dataType    : 'data_type',
      dataDefine  : 'data_define',
      initialValue: 'initial_value',
    },
    eventPort: {
      eventPortName: 'eventport_name',
      eventId      : 'event_id',
      type         : 'type',
      runType      : 'run_type',
      eventType    : 'event_type',
      para         : 'para',
    },

    action           : {
      actionName          : 'action_name',
      eventId             : 'event_id',
      subEventPortId      : 'subeventport_id',
      eventPortId         : 'eventport_id',
      methodName          : 'method_name',
      actionExpression    : 'action_expression',
      type                : 'type',
      stageFlag           : 'stage_flag',
      preExpression       : 'pre_expression',
      runType             : 'run_type',
      place               : 'place',
      comment             : 'comment',
      prePlanExpression   : 'pre_plan_expression',
      para                : 'para',
      postAction          : 'post_action',
      actionPlanExpression: 'action_plan_expression',
      code                : 'code',
    },
    dataType         : {
      typeName: 'type_name',
      typeType: 'type_type',
      define  : 'define',
    },
    geneLibrary      : {
      libraryName: 'library_name',
      libraryId  : 'library_id',
    },
    geneStyle        : {
      styleVariableId: 'style_variable_id',
      attrib         : 'attrib',
      elementType    : 'element_type',
      colorStatus    : 'color_status',
      sizeStatus     : 'size_status',
    },
    geneVariable     : {
      name      : 'name',
      attrib    : 'attrib',
      comment   : 'comment',
      default   : 'default',
      styleType : 'style_type',
      type      : 'type',
      dataType  : 'data_type',
      dataDefine: 'data_define',
    },
    baseStyleVariable: {
      name     : 'name',
      comment  : 'comment',
      default  : 'default',
      styleType: 'style_type'
    },


    $l_geneLog        : {
      geneAddr      : "gene_addr",
      parentGeneAddr: "parent_gene_addr",
      parentServer  : "parent_server",
      instructCode  : "instruct_code",
      status        : "status",
      startTime     : "start_time",
      endTime       : "end_time",
      checkCode     : "check_code",
      errorLength   : "error_length",
      linkStatus    : "link_status",
    },
    $l_dataPortLog    : {
      dataPortId       : "dataport_id",
      originGeneAddr   : "origin_gene_addr",
      originServer     : "origin_server",
      originSubGeneAddr: "origin_subgene_addr",
      originSubDataPort: "origin_subdataport",
      tableName        : "table_name",
      sendErrorBuff    : "send_errorbuff",
      errorOver        : "error_over"
    },
    $l_dataTrack      : {
      dataportId  : "dataport_id",
      destGeneAddr: "dest_gene_addr",
      destServer  : "dest_server",
      tableName   : "table_name",
    },
    $l_eventPortLog   : {
      eventPortId       : "eventport_id",
      originGeneAddr    : "origin_gene_addr",
      originServer      : "origin_server",
      originSubGeneAddr : "origin_subgene_addr",
      originSubEventPort: "origin_subeventport",
      eventId           : "event_id",
      sendErrorBuff     : "send_error_buff",
      errorOver         : "error_over"
    },
    $l_eventTrack     : {
      eventPortId : "eventport_id",
      destGeneAddr: "dest_gene_addr",
      destServer  : "dest_server",
      eventId     : "event_id"
    },
    $l_subGeneLog     : {
      subGeneAddr: "subgene_addr",
      subServerId: "subserver_id",
      runStatus  : "run_status",
      startTime  : "start_time",
      endTime    : "end_time"
    },
    $l_subDataPortLog : {
      dataportId       : "dataport_id",
      originGeneAddr   : "origin_gene_addr",
      originServer     : "origin_server",
      originSubGeneAddr: "origin_subgene_addr",
      originSubDataPort: "origin_subdataport",
      tableName        : "table_name"
    },
    $l_subDataTrack   : {
      dataportId  : "dataport_id",
      destGeneAddr: "dest_gene_addr",
      destServer  : "dest_server",
      tableName   : "table_name"
    },
    $l_subEventPortLog: {
      eventPortId       : "eventport_id",
      originGeneAddr    : "origin_gene_addr",
      originServer      : "origin_server",
      originSubGeneAddr : "origin_subgene_addr",
      originSubEventPort: "origin_subeventport",
      eventId           : "event_id",
    },
    $l_subEventTrack  : {
      eventPortId : "eventport_id",
      destGeneAddr: "dest_gene_addr",
      destServer  : "dest_server",
      eventId     : "event_id"
    },
    $l_errorBuff      : {
      server        : "server",
      destObjectName: "destobject_name",
      method        : "method",
      para          : "para"
    },
    $l_eventLog       : {
      eventId   : "event_id",
      instruct  : "instruct",
      attrName  : "attr_name",
      runStatus : "run_status",
      command   : "command",
      startTime : "start_time",
      endTime   : "end_time",
      inputPara : "input_para",
      outputPara: "output_para",
      source    : "source"
    },
    $l_actionLog      : {
      actionId  : "action_id",
      geneAddr  : "gene_addr",
      server    : "server",
      event     : "event",
      inputPara : "input_para",
      outputPara: "output_para",
      runStatus : "run_status",
      oldStatus : 'old_status',
      startTime : "start_time",
      endTime   : "end_time",
    },
    $l_variableLog    : {
      variableId: "variable_id",
      data      : "data"
    },
    geneHandle        : {
      geneAddr  : 'gene_addr',
      server    : "server",
      objectName: "object_name",
      geneLog   : "gene_log",
      status    : "status",
      errorInfo : "error_info"
    },
    serverAllocation  : {
      type     : 'type',
      server   : 'server',
      areaId   : 'area_id',
      userStart: 'user_start',
      userEnd  : 'user_end'
    },
    server            : {
      areaId     : 'area_id',
      cpuCapacity: 'cpu_capacity',
      memCapacity: 'mem_capacity',
      backupSum  : 'backup_sum',
      cpuLoad    : 'cpu_load',
      memLoad    : 'mem_load',
      cpuLoadRate: 'cpuload_rate',
      attrib     : 'attrib'
    },
    serverIP          : {
      number: 'number',
      ipAddr: 'ipaddr'
    },
    terminalGene      : {
      groupId       : 'group_id',
      cloudId       : 'cloudId',
      cloudVesselId : 'cloud_vessel_id',
      geneId        : 'gene_id',
      parentGeneId  : 'parent_gene_id',
      parentVesselId: 'parent_vessel_id',
      attrib        : 'attrib',
    },
    pageGene          : {
      cloudVesselId: 'cloud_vessel_id',
      geneId       : 'gene_id',
      webview      : 'webview_id'
    },
    userServer        : {
      server: 'server_id'
    },

    //画布数据库字段宏定义
    canvas: {
      title       : 'title',
      size        : 'size',
      style       : 'style',
      attrib      : 'attrib',
      nameStyle   : 'name_style',
      nameOrigin  : 'name_origin',
      anchor      : 'anchor',
      gridTemplate: 'grid_template',
      selection   : 'selection',
      origin      : 'origin',
      // gap: 'gap'
    },

    element         : {
      elementName   : 'element_name',
      icon          : 'icon',
      content       : 'content',
      form          : 'form',
      size          : 'size',
      style         : 'style',
      attrib        : 'attrib',
      nameOrigin    : 'name_origin',
      origin        : 'origin',
      anchor        : 'anchor',
      mirror        : 'mirror',
      groupNumber   : 'group_number',
      elementGroupId: 'element_group_id',
      selection     : 'selection',
      nameStyle     : 'name_style'
    },
    line            : {
      name      : 'name',
      direction : 'direction',
      style     : 'style',
      attrib    : 'attrib',
      startDotId: 'start_dot_id',
      endDotId  : 'end_dot_id',
      selection : 'selection'
    },
    dot             : {
      canvasId   : 'canvas_id',
      elementId  : 'element_id',
      anchor     : 'anchor',
      anchorCoord: 'anchor_coord'
    },
    turningPoint    : {
      coord : 'coord',
      number: 'number',
    },
    elementGroup    : {
      name     : 'name',
      size     : 'size',
      attrib   : 'attrib',
      style    : 'style',
      origin   : 'origin',
      mirror   : 'mirror',
      selection: 'selection'
    },
    elementModule   : {
      elementName: 'element_name',
      icon       : 'icon',
      content    : 'content',
      form       : 'form',
      size       : 'size',
      style      : 'style',
      attrib     : 'attrib',
      nameStyle  : 'name_style',
      nameOrigin : 'name_origin',
      anchor     : 'anchor'
    },
    groupModule     : {
      groupName: 'group_name',
      size     : 'size',
      attrib   : 'attrib',
      style    : 'style',
    },
    groupElement    : {
      elementModuleId: 'element_module_id',
      elementName    : 'element_name',
      groupNumber    : 'group_number',
      origin         : 'origin'
    },
    canvasModule    : {
      canvasName: 'canvas_name',
      size      : 'size',
      style     : 'style',
      attrib    : 'attrib',
      nameStyle : 'name_style',
      nameOrigin: 'name_origin',
      anchor    : 'anchor'
    },
    lineModule      : {
      name     : 'name',
      direction: 'direction',
      style    : 'style',
      attrib   : 'attrib',
    },
    geneCanvas      : {
      gene           : 'gene',
      mainCanvas     : 'main_canvas',
      dataportCanvas : 'dataport_canvas',
      eventportCanvas: 'eventport_canvas',
      dataCanvas     : 'data_canvas',
      eventCanvas    : 'event_canvas'
    },
    dataPortElement : {
      dataportId    : 'dataport_id',
      elementId     : 'element_id',
      dataLineid    : 'data_lineid',
      dataElementId : 'data_element_id',
      eventLineId   : 'event_line_id',
      eventElementId: 'event_element_id'
    },
    dataElement     : {
      geneTableId: 'genetable_id',
      elementId  : 'element_id'
    },
    eventPortElement: {
      eventportId   : 'eventport_id',
      elementId     : 'element_id',
      eventLineId   : 'event_line_id',
      eventElementId: 'event_element_id'
    },
    vesselCanvas    : {
      vesselId: 'vessel_id',
      canvasId: 'canvas_id',
    },
    eventElement    : {
      eventId  : 'event_id',
      elementId: 'element_id'
    },
    subGeneGroup    : {
      subgeneId: 'subgene_id',
      groupId  : 'group_id'
    },
    subDataElement  : {
      subdataportId    : 'subdataport_id',
      elementId        : 'element_id',
      dataportLineId   : 'dataport_line_id',
      dataportElementId: 'dataport_element_id',
      eventLineId      : 'event_line_id',
      eventElementId   : 'event_element_id',
      dataLineId       : 'data_line_id',
      dataElementId    : 'data_element_id'
    },
    subDataLine     : {
      lineId   : 'line_id',
      elementId: 'element_id'
    },
    subEventElement : {
      subeventportId    : 'subeventport_id',
      elementId         : 'element_id',
      eventportLineId   : 'eventport_line_id',
      eventportElementId: 'eventport_element_id',
      eventLineId       : 'event_line_id',
      eventElementId    : 'event_element_id'
    },
    subEventLine    : {
      lineId   : 'line_id',
      elementId: 'element_id',
    },
    eventCanvas     : {
      eventId : 'event_id',
      canvasId: 'canvas_id'
    },
    actionElement   : {
      actionElementId: 'action_element_id',
      type           : 'type',
      actionId       : 'action_id',
      canvasId       : 'canvas_id',
      elementId      : 'element_id',
      coordinate     : 'coordinate'
    },
    laneCanvas      : {
      vesselId  : 'vessel_id',
      canvasId  : 'canvas_id',
      coordinate: 'coordinate'
    },
    postLine        : {
      lineId      : 'line_id',
      name        : 'name',
      startGraphId: 'start_graph_id',
      startType   : 'start_type',
      endGraphId  : 'end_graph_id',
      endType     : 'end_type'
    },


    cloud         : {
      cloudName : 'cloud_name',
      comment   : 'comment',
      icon      : 'icon',
      type      : 'type',
      rootGeneId: 'root_gene',
      groupId   : 'group',
      status    : 'status'
    },
    cloudAuther   : {
      startDate  : 'start_date',
      dateLength : 'data_length',
      staffMax   : 'staff_max',
      customerMax: 'customer_max'
    },
    cloudVessel   : {
      name         : 'name',
      cloudVesselId: 'parent_cloudVessel_id',
      userType     : 'user_type',
      attrib       : 'attrib',
      vesselType   : 'type'
    },
    cloudGene     : {
      cloudId      : 'cloud_id',
      geneId       : 'gene_id',
      parentGeneId : 'parent_gene_id',
      vesselClassId: 'vessel_class',
      geneName     : 'gene_name',
      geneType     : 'gene_type',
      functionId   : 'function',
    },
    cloudDataPort : {
      dataPortType: 'dataport_type',
      dataPortName: 'related_table'
    },
    cloudEventPort: {
      eventPortName: 'eventport_name',
      type         : 'type',
      runType      : 'run_type',
      para         : 'para'
    },

    // zls新增
    table: {
      tableName      : 'table_name',
      showName       : 'show_name',
      comment        : 'comment',
      parentTableName: 'parent_table_name',
      nest           : 'nest',
      version        : 'version',
      checkCode      : 'check_code',
      status         : 'status'
    },
    field: {
      tableName    : 'table_name',
      fieldName    : 'field_name',
      showName     : 'show_name',
      comment      : 'comment',
      enumType     : 'enum_type',
      valueType    : 'value_type',
      accuracy     : 'accuracy',
      maxLength    : 'max_length',
      thisUnique   : 'this_unique',
      editFlag     : 'edit_flag',
      linkName     : 'link_name',
      linkDb       : 'link_db',
      linkFieldName: 'link_field_name',
      status       : 'status',
      enum         : 'enum',
    },
    enum : {
      number : 'number',
      value  : 'value',
      display: 'display'
    },

    // 云设计表格(20190819)
    cloudCanvas: {
      cloudId: 'cloud_id',
      canvasId: 'canvas_id',
      rootGeneId: 'root_gene_id',
      rootElementId: 'root_element_id'
    },
    vesselCanvasCloud: {
      vesselId: 'vessel_id',
      canvasId: 'canvas_id',
      parentCanvasId: 'parent_canvas_id',
      coordinate: 'coordinate',
      lineId: 'line_id'
    },
    vesselClassCanvas: {
      vesselClassId: 'vessel_class_id',
      canvasId: 'canvas_id',
      parentGeneId: 'parent_gene_id',
      parentElementId: 'parent_element_id',
      coordinate: 'coordinate'
    },
    geneElement: {
      geneId: 'gene_id',
      elementId: 'element_id',
      coordinate: 'coordinate'
    },
  },

  enum         : {//枚举的定义
    gene       : {
      type         : {
        window  : 0,
        page    : 1,
        terminal: 2,
        user    : 3,
        group   : 4,
      },
      terminal_type: {
        mobile     : 0,
        pc         : 1,
        miniProgram: 2,
        iOS        : 3,
        android    : 4,
      },
      right        : {
        formal   : 0,
        probation: 1,
        disable  : 2,
      },
      status       : {
        draft  : 0,
        release: 1,
        destroy: 2,
      },
      para         : {
        para_type: {
          para: 0,
          attr: 1
        }
      }
    },
    geneTable  : {
      medium: {
        lasting: 0,
        mem    : 1,
        all    : 2,
      },
      source: {
        fromSelf      : 0,
        fromParent    : 1,
        rootFromParent: 2,
      }
    },
    vesselClass: {
      type     : {//0-视窗/1-浏览窗/2-终端/3-服务器
        div     : "d",
        webview : "w",
        terminal: "t",
        server  : "s",
        // div: "0",
        // webview: "1",
        // terminal: "2",
        // user: "3",
        // group: "4"
      },
      win_type : {
        normal : 0,
        dialog : 1,
        overlay: 2,
        mask   : 3,
      },
      attribute: {
        static : 0,
        dynamic: 1,
      },

      style: {
        attrib: {
          heightMedium                 : 0,
          heightLarge                  : 1,
          heightSmall                  : 2,
          heightMini                   : 3,
          widthMedium                  : 4,
          widthLarge                   : 5,
          widthSmall                   : 6,
          widthMini                    : 7,
          paddingMedium                : 8,
          paddingLarge                 : 9,
          paddingSmall                 : 10,
          paddingMini                  : 11,
          marginMedium                 : 12,
          marginLarge                  : 13,
          marginSmall                  : 14,
          marginMini                   : 15,
          colHorizontalMedium          : 16,
          colHorizontalLarge           : 17,
          colHorizontalSmall           : 18,
          colHorizontalMini            : 19,
          colVerticalMedium            : 20,
          colVerticalLarge             : 21,
          colVerticalSmall             : 22,
          colVerticalMini              : 23,
          rowHorizontal                : 24,
          rowVertical                  : 25,
          borderStyle                  : 26,
          borderWidth                  : 27,
          borderRadius                 : 28,
          borderColor                  : 29,
          borderColorOpacity           : 30,
          borderStyleHover             : 31,
          borderWidthHover             : 32,
          borderRadiusHover            : 33,
          borderColorHover             : 34,
          borderColorOpacityHover      : 35,
          borderStyleDisable           : 36,
          borderWidthDisable           : 37,
          borderRadiusDisable          : 38,
          borderColorDisable           : 39,
          borderColorOpacityDisable    : 40,
          borderStyleChecked           : 41,
          borderWidthChecked           : 42,
          borderRadiusChecked          : 43,
          borderColorChecked           : 44,
          borderColorOpacityChecked    : 45,
          backgroundColor              : 46,
          backgroundColorOpacity       : 47,
          backgroundColorHover         : 48,
          backgroundColorOpacityHover  : 49,
          backgroundColorDisable       : 50,
          backgroundColorOpacityDisable: 51,
          backgroundColorChecked       : 52,
          backgroundColorOpacityChecked: 53,
          boxShadow                    : 54,
          transition                   : 55,
          fontFamilyMedium             : 56,
          fontMedium                   : 57,
          lineHeightMedium             : 58,
          fontFamilyLarge              : 59,
          fontLarge                    : 60,
          lineHeightLarge              : 61,
          fontFamilySmall              : 62,
          fontSmall                    : 63,
          lineHeightSmall              : 64,
          fontFamilyMini               : 65,
          fontMini                     : 66,
          lineHeightMini               : 67,
          color                        : 68,
          colorHover                   : 69,
          colorChecked                 : 70,
          colorDisable                 : 71,
          textShadow                   : 72,
          overflow                     : 73,
        },
        // styleName: 'styleName',
        // styleData: 'styleData'
      }
    },
    event      : {
      type      : {
        event : 0,
        method: 1,
      },
      option    : {
        normal: 0,
        start : 1,
        close : 2,
        error : 3,
      },
      run_type  : {
        synch: 0,
        async: 1,
      },
      output_way: {
        synch: 0,
        async: 1,
      },
      para      : {
        port_type: {
          in : 0,
          out: 1,
        },
      },
    },

    eventPort: {
      type    : {
        in : 0,
        out: 1,
      },
      run_type: {
        synch: 0,
        async: 1,
      },
      para    : {
        port_type: {
          in : 0,
          out: 1,
        },
      },
    },

    dataPort   : {
      dataPort_type: {
        in    : 0,
        out   : 1,
        twoWay: 2,
      }
    },
    subGene    : {
      type         : {
        window  : 0,
        page    : 1,
        terminal: 2,
        user    : 3,
        group   : 4,
      },
      attrib       : {
        normal: 0,
        loop  : 1,
      },
      terminal_type: {
        mobile: 0,
        PC    : 1,
      },
      paraSet      : {
        portType: {
          para: 0,
          attr: 1
        }
      }
    },
    subDataPort: {
      type: {
        in    : 0,
        out   : 1,
        twoWay: 2,
      },
    },

    subEventPort: {
      port_type    : {
        in : 0,
        out: 1,
      },
      run_type     : {
        synch: 0,
        async: 1,
      },
      subevent_type: {
        normal: 0,
        start : 1,
        close : 2
      },
      para         : {
        port_type: {
          in : 0,
          out: 1,
        },
      },
    },

    action      : {
      type      : {
        normal: 0,
        timing: 1,
      },
      stage_flag: {
        start : 0,
        normal: 1,
        normalEnd: 2,
        end   : 3,
      },
      run_type  : {
        synch: 0,
        async: 1,
        concurrency:2, //并发
      },
      para      : {
        port_type: {
          in : 0,
          out: 1,
        },
      },
    },
    geneVariable: {
      type: {
        data : 0,
        style: 1,
      },
    },
    geneStyle   : {
      attrib     : {
        height                  : 0,
        width                   : 1,
        padding                 : 2,
        margin                  : 3,
        rowHorizontalPosition   : 4,
        rowVerticalPosition     : 5,
        borderStyle             : 6,
        borderWidth             : 7,
        borderRadius            : 8,
        borderColor             : 9,
        borderColorOpacity      : 10,
        backgroundColor         : 11,
        backgroundColorOpacity  : 12,
        borderBoxShadow         : 13,
        borderAnimation         : 14,
        fontFamily              : 15,
        fontType                : 16,
        lineHeight              : 17,
        fontColor               : 18,
        fontBoxShadow           : 19,
        fontAnimation           : 20,
        moduleHorizontalPosition: 21,
        moduleVerticalPosition  : 22
      },
      elementType: {
        fontOrIcon: 0,
        border    : 1
      },
      colorStatus: {
        common : 0,
        hover  : 1,
        disable: 2,
        checked: 3
      },
      sizeStatus : {
        common: 0,
        medium: 1,
        small : 2,
        min   : 3,
        large : 4
      }
    },
    dataType    : {
      typeType: {
        object: 0,
        table : 1
      }
    },


    $l_geneLog      : {
      status    : {
        open : 0,
        close: 1
      },
      linkStatus: {
        online : 0,
        offline: 1
      }
    },
    $l_subGeneLog   : {
      runStatus: {
        open : 0,
        close: 1
      }
    },
    $l_actionLog    : {
      runStatus: {
        ready : 0,
        run   : 1,
        end   : 2,
        cancel: 3
      }
    },
    $l_eventLog     : {
      runStatus: {
        ready : 0,
        run   : 1,
        end   : 2,
        cancel: 3
      },
      command  : {
        ready   : 0,
        run     : 1,
        end     : 2,
        cancel  : 3,
        rollback: 4,
        reset   : 5
      }
    },
    geneHandle      : {
      status: {
        tobeRun : 0,
        run     : 1,
        tobeStop: 2,
        stop    : 3
      }
    },
    serverAllocation: {
      type: {
        register      : 0,
        authentication: 1,
        group         : 2,
        user          : 3,
        cloud         : 4
      }
    },
    server          : {
      attrib: {
        public : 0,
        private: 1
      }
    },
    terminalGene    : {
      attrib   : {
        roam : 0,
        fixed: 1
      },
      firstGene: {
        true0 : 0,
        false0: 1
      }
    },
    canvas          : {
      selection: {
        unselected: 0,
        selected  : 1,
      },
    },
    element         : {
      mirror   : {
        false0: 0,
        true0 : 1
      },
      selection: {
        unselected: 0,
        selected  : 1,
      }
    },

    elementGroup  : {
      mirror   : {
        false0: 0,
        true0 : 1
      },
      selection: {
        unselected: 0,
        selected  : 1,
      }
    },
    line          : {
      direction: {
        none   : 0,
        forward: 1,
        reverse: 2,
        twoWay : 3,
      },
      selection: {
        unselected: 0,
        selected  : 1,
      }
    },
    elementModule : {
      form: {
        line     : 0,
        rectangle: 1,
        circular : 2,
        triangle : 3
      }
    },
    lineModule    : {
      direction: {
        none   : 0,
        forward: 1,
        twoWay : 2,
      }
    },
    module        : {
      type  : {
        normal   : 0,
        interface: 1
      },
      status: {
        draft  : 0,
        release: 1
      },
      source: {
        selfMade: 0,
        quote   : 1,
        public  : 2
      }
    },
    modulePara    : {
      type: {
        data  : 0,
        attrib: 1,
        style : 2
      }
    },
    window        : {
      type: {
        normal: 0,
        dialog: 1
      }
    },
    moduleVariable: {
      dataType : {//数据类型
        value    : 0,
        character: 1,
        picture  : 2,
      },
      type     : {//变量类型
        data : 0,
        style: 1,
      },
      styleType: {//风格类别
        color       : 0,
        size        : 1,
        borderType  : 2,
        animation   : 3,
        shadow      : 4,
        padding     : 5,
        margin      : 6,
        borderStyle : 7,
        borderRadius: 8,
        fontType    : 9,
        fontBold    : 10,
        layer       : 11,
      },
    },
    moduleStyle   : {
      attrib     : {
        fontStyle        : 0,
        size             : 1,
        fontRowHeight    : 2,
        fontBold         : 3,
        color            : 4,
        shadow           : 5,
        animation        : 6,
        borderHeight     : 7,
        borderWidth      : 8,
        borderPadding    : 9,
        borderMargin     : 10,
        borderFilledColor: 11,
        borderLineColor  : 12,
        borderRadius     : 13,
        borderLineStyle  : 14,
        borderType       : 15,
      },
      elementType: {
        font  : 0,
        border: 1,
        icon  : 2,
      },
      colorStatus: {
        normal : 0,
        float  : 1,
        invalid: 2,
        checked: 3,
        warn   : 4,
        danger : 5,
        msg    : 6,
        ok     : 7,
      },
      sizeStatus : {
        normal : 0,
        middle : 1,
        smaller: 2,
        min    : 3,
        max    : 4,
      },

    },
    moduleMethod  : {
      outputWay: {
        sync : 0,
        async: 1
      },
      type     : {
        start : 0,
        normal: 1
      },
    },
    MDMethodPara  : {
      type: {
        in : 0,
        out: 1
      }
    },
    MDEventPara   : {
      type: {
        in : 0,
        out: 1
      }
    },
    methodPort    : {
      outputWay: {
        sync : 0,
        async: 1
      }
    },
    methodPortPara: {
      type: {
        in : 0,
        out: 1
      }
    },
    subParaSet    : {
      type: {
        data : 0,
        attr : 1,
        style: 2
      }
    },
    subMethodSet  : {
      outputWay: {
        sync : 0,
        async: 1
      }
    },
    subMethodPara : {
      type: {
        in : 0,
        out: 1
      }
    },
    subEventPara  : {
      type: {
        in : 0,
        out: 1
      }
    },


    //云系统
    cloud         : {
      status: {
        draft  : 0,
        release: 1,
        destroy: 2
      }
    },
    cloudVessel   : {
      attrib    : {
        fixed: 0,
        roam : 1
      },
      vesselType: {
        div     : "d",
        webview : "w",
        terminal: 1,
        server  : 0,
      },
      user_type : {
        department: 0,
        position  : 1,
        service   : 2
      }
    },
    cloudDataPort : {
      dataPort_type: {
        in    : 0,
        out   : 1,
        twoWay: 2
      }
    },
    cloudEventPort: {
      type    : {
        in : 0,
        out: 1
      },
      run_type: {
        synch: 0,
        async: 1,
      }
    },

    actionElement  : {
      type: {
        start     : 0,
        action    : 1,
        selector  : 2,
        expression: 3,
        end       : 4
      }
    },
    postLine       : {
      startType: {
        canvas : 0,
        element: 1
      },
      endType  : {
        canvas : 0,
        element: 1
      }
    },
    // zls新增
    table          : {
      nest  : {
        true : 0,
        false: 1
      },
      status: {
        draft  : 0,
        publish: 1,
        change : 2
      }
    },
    field          : {
      enumType : {
        no  : 0,
        one : 1,
        more: 2
      },
      valueType: {
        number : 0,
        string : 1,
        // img: 2,
        picture: 2,
        file   : 3,
        // day: 4,
        date   : 4,
        time   : 5,
        // dayAndTime: 6
        object : 6,
        text   : 7,
        module : 8,
        icon   : 9,
        point  : 10,
        audio  : 11,
      }
    },
    geneField      : {
      status: {
        open : 0,
        close: 1
      }
    },
    index          : {
      type: {
        common: 0,
        only  : 1
      }
    },
    library        : {
      status: {
        draft  : 0,
        release: 1,
        change : 2
      },
      source: {
        selfMade: 0,
        quote   : 1,
        public  : 2
      }
    },
    libraryFunction: {
      outputWay: {
        sync : 0,
        async: 1

      },
      para     : {
        port_type: {
          in : 0,
          out: 1
        }
      },
    },
    groupActivity  : {
      mode: {
        onLine : 0,
        outLine: 1,
        all    : 2
      },
    },
    cloudGene: {
      geneType: {
        window: 0,
        page: 1,
        terminal: 2,
        user: 3,
        group: 4,
      }
    },
      // zls新增20191217
      cloudFunction: {
        type: {
            development: 0,
            purchase: 1,
            production: 2,
            sale: 3
        }
      },
  },
  curPageServer: '',//当前粒子运行的页面server
  dbType       : {//数据库类型
    cloud : "c",//云数据库 c_cloudId
    group : "g",//组织数据库 g_groupId
    run   : "r",//运行数据库 r_cloudId_groupId_vesselId
    system: 's',//系统数据库
    user  : 'u',//用户数据库
  },
  serverType   : {//服务器类型
    server  : ".",//服务器
    terminal: "t",//终端 storage
    local   : "l",//终端 本地
    window  : "w",//浏览窗
    div     : "d",//视窗
  },
  //分隔符号
  separator    : {
    dbId    : "_",//数据库id之间的分隔符
    serverDb: "-" //服务器与数据库之间分隔符
  },

  //空定义
  // strNull   : "", //字符串为空的定义
  strNull   : null, //字符串为空的定义
  arrNull   : [],//数组为空的定义
  objectNull: null, //对象为空的定义
  tcNull    : null,//事务为空的定义
};

