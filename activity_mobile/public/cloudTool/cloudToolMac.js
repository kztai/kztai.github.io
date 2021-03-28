function CCloudToolMac() {

}

CCloudToolMac.prototype.mac = {
    tb: {//表定义
        head_r: "$r_", //根表头
        head_l: "$l_", //粒子运行(log)表头

        rTable: "$r_table",
        rField: "$r_field",
        rEnum: "$r_enum",
        rIndex: "$r_index",
        rIndexField: "$r_indexField",
        rLinkTableState: "$r_linkTableState",
        sGene: "gene",
        sGeneTable: "geneTable",
        sGeneField: "geneField",
        pg_db: "$pg_db",//存贮数据库地址：server-db，如：w_0-u_2_2_2

        gene: "gene",
        subGene: "subGene",
        vesselClass: "vesselClass",

        cloud: "cloud",
        cloudVessel: "cloudVessel",
        cloudGene: "cloudGene",

        group: "group",
        releGroupList: "releGroupList",
        department: "department",
        myCloud: "myCloud",
        serverArea: 'serverArea',
        serverHard: 'serverHard',

        cloudSet: "cloudSet",
        vesselCase: "vesselCase",
        geneSet: 'geneSet',
        terminalGene: "terminalGene",
        pageGene: "pageGene",
        server: 'server',
        serverIp: 'serverIP',

        immediateValue: "immediateValue",

        elementModule: 'elementModule',
        lineModule: 'lineModule',
        canvasModule: 'canvasModule',

        cloudDataPortSet: "cloudDataPortSet",
        cloudEventPortSet: "cloudEventPortSet",
        cloudEventPortPara: "cloudSetEventPortPara",
        dataConnect: "dataConnect",
        eventConnect: "eventConnect",
        myData: "myData",
        releGroupList: "releGroupList",
        myTrans: "_myTrans",
        myTransPara: "myTransPara",
        interfaceSetCanvas: "interfaceSetCanvas",
        interfaceSetElement: "interfaceSetElement",
        interfaceSetLine: "interfaceSetLine",
        styleModule: 'styleModule',


        // 登录注册
        seccode: 'seccode',
        emailcode: 'emailcode',
        config: 'userConfig',
        user: 'user',
        terminalStat: 'terminalStat',
        thirdLogin: 'thirdLogin',
        users: 'cloud',
        terminalStats: 'cloudAuther',
        thirdLogins: 'cloudVessel',
        userss: 'interfaceSetCanvas',
        terminalStatss: 'interfaceSetElement',
        thirdLoginss: 'interfaceSetLine',

        // 客户管理
        userInfo: 'userInfo',
        myAttention: 'myAttention',
        myFans: 'myFans',
        myFriend: 'myFirend',
        myComment: 'myComment',
        cash: 'cash',
        coupon: 'coupon',
        score: 'score',
        myInvite: 'myInvite',
        myActivity: 'myActivity',
        myApply: 'myApply',
        myGroup: 'myGroup',
        myBlog: 'myBlog',
        myHomepage: 'myHomepage',
        myHandle: 'myHandle',
        userBlog: 'userBlog',
        userBlogHandle: 'userBlogHandle',
        userBlogComment: 'userBlogComment',
        userBlogCommentPraise: 'userBlogCommentPraise',
        publicBlog: 'publicBlog',
        publicBlogHandle: 'publicBlogHandle',
        publicBlogAttention: 'publicBlogAttention',
        groupBlog: 'groupBlog',
        groupInfo: 'groupInfo',
        userBlogLabel: 'userBlogLabel',
        groupHomepage: 'groupHomePage',
        groupBlogLabel: 'groupBlogLabel',
        clerk: 'clerk',
        publicBlogLabel: 'publicBlogLabel',
        groupBlogHandle: 'groupBlogHandle',
        groupBlogComment: 'groupBlogComment',
        groupBlogCommentPraise: 'groupCommentPraise',

        // 活动中心：
        groupActivityOrder: 'groupActivityOrder',
        groupActivityBill: 'groupActivityBill',
        groupActivityAppendix: 'groupActivityAppendix',
        groupActivity: 'groupActivity',
        groupActivityTicketType: 'groupActivityTicketType',
        groupActivityEnrollForm: 'groupActivityEnrollForm',
        myAlbum: 'myAlbum',
        myPhoto: 'myPhoto',
        photoComment: 'photoComment',
        photoHandle: 'photoHandle',

        groupActivityEnroll:'groupActivityEnroll',
        enrollOption:'enrollOption',
        clerkSet:'clerkSet',
        groupActivityManageMember:'groupActivityManageMember',
        activityBudgetOption:'activityBudgetOption',
        groupActivityBudgetForm:'groupActivityBudgetForm',
        activityOption:'activityOption',
        activityEnrollOption:'activityEnrollOption',
        groupActivityDiscuss:'groupActivityDiscuss',
        addressOption:'addressOption',
        groupActivityHandle:'groupActivityHandle',
        groupClassify:'groupClassify',
    },

    defVal: {//默认值定义
        linkVer: 0,//关联时，新建记录的默认版本
        newVer: 1,//表新建记录的默认版本
        del: 0,//表新建记录的默认值
        m: 1,//表新建记录的默认值
    },

    fd: {
        id: "id",
        pt_id: "$pt_id",
        gene_id: "$gene_id",
        user_id: "$user_id",
        del: "$del",
        m: "$m",
        ver: "$ver",
        pg_ver: "$pg_ver",
        pg_id: "$pg_id",
        pg_db: "$pg_db",

        immediateValue: {
            dataPortId: 'dataport_id',
            subDataPortId: 'subdataport_id',
            value: 'value',
        },
        gene: {
            geneName: "gene_name",
            type: 'type',
            terminalType: 'terminal_type',
            memConsume: 'mem_consume',
            layoutData: 'layout_data',
            geneVersion: 'gene_version',
            url: 'url',
            htmlName: 'html_name',
            checkCode: 'check_code',
            createDate: 'create_date',
            createTime: 'create_time',
            icon: 'icon',
            comment: 'comment',
            groupId: 'group_id',
            cloudId: 'cloud_id',
            right: 'right',
            startTime: 'start_time',
            deadline: 'deadline',
            quoteSum: 'quote_sum'
        },
        geneLog: {
            quoteGeneId: 'quote_gene_id'
        },
        geneTable: {
            parentTableName: 'parent_table_name',
            tableName: 'table_name',
            medium: 'medium'
        },
        geneField: {
            tableName: 'table_name',
            fieldName: 'field_name',
            linkName: 'link_name',
            linkFieldName: 'link_field_name'
        },
        fieldInitial: {
            value: 'value',
            number: 'number',
            parentNumber: 'parent_number'
        },
        dataPort: {
            dataportName: 'dataport_name',
            dataportType: 'dataport_type',
            relatedTable: 'related_table',
            tableName: 'table_name',
            connectLine: 'connect_line',
            eventId: 'event_id'
        },
        vesselClass: {
            vesselName: 'vessel_name',
            type: 'type',
            attribute: 'attribute',
            number: 'number',
            winType: 'win_type',
            size: 'size',
            windowDiv: 'window_div',
            rowId: 'row_id',
            parentWinId: 'parentwin_id'
        },
        subGene: {
            subgeneName: 'subgene_name',
            cloudId: 'cloud_id',
            geneBaseId: 'gene_base_id',
            vesselId: 'vessel_id',
            type: 'type',
            html: 'html',
            terminalType: 'terminal_type',
            memConsume: 'mem_consume',
            geneRef: 'gene_ref'
        },
        subGeneParaSet: {
            name: 'name',
            number: 'number',
            expression: 'expression'
        },
        subEventPort: {
            eventportSubId: 'eventport_sub_id',
            eventportName: 'eventport_name',
            eventportParentId: 'eventport_parent_id',
            eventId: 'event_id',
            portType: 'port_type',
            runType: 'run_type',
            subEventType: 'subevent_type'
        },
        subEventLink: {
            subeventportId: 'subeventport_id'
        },
        subEventPortPara: {
            tableName: 'table_name',
            type: 'type',
            number: 'number'
        },
        subDataPort: {
            dataportName: 'dataport_name',
            dataportSubId: 'dataport_sub_id',
            dataportParentId: 'dataport_parent_id',
            type: 'type',
            relatedTable: 'related_table',
            connectTableName: 'connect_table_name',
            connectLine: 'connect_line',
            eventId: 'event_id',
            connectDir: 'connect_dir'
        },
        interDataPort: {
            subdataportId: 'subdataport_id',
            connectDir: 'connect_dir'
        },
        event: {
            eventName: 'event_name',
            // methodName: 'method_name',
            type: 'type',
            option: 'option',
            comment: 'comment',
            code: 'code',
            // fileName: 'file_name',
            humanConsume: 'human_consume',
            cpuConsume: 'cpu_consume',
            memConsume: 'mem_consume',
            // functionId: 'function_id',
            runType: 'run_type'
        },
        eventPara: {
            tableName: 'table_name',
            type: 'type',
            number: 'number',
            variableId: 'variable_id'
        },
        variable: {
            variableName: 'variable_name',
            tableName: 'table_name',
            fieldName: 'field_name',
            initialValue: 'initial_value'
        },
        eventPort: {
            eventportName: 'eventport_name',
            eventId: 'event_id',
            type: 'type',
            runType: 'run_type'
        },
        eventPortPara: {
            tableName: 'table_name',
            type: 'type',
            number: 'number'
        },
        action: {
            actionName: 'action_name',
            eventId: 'event_id',
            subeventportId: 'subeventport_id',
            eventportId: 'eventport_id',
            methodName: 'method_name',
            actionExpression: 'action_expression',
            type: 'type',
            stageFlag: 'stage_flag',
            preExpression: 'pre_expression',
            runType: 'run_type',
            place: 'place'
        },
        actionPara: {
            tableName: 'table_name',
            variableId: 'variable_id',
            type: 'type',
            option: 'option',
            number: 'number'
        },
        postAction: {
            postactionId: 'postaction_id',
            postExpression: 'post_expression',
            number: 'number',
            startDot: 'start_dot',
            endDot: 'end_dot'
        },
        geneSubModule: {
            module: 'module_id',
            subModuleName: 'submodule_name',
            vesselId: 'vessel_id',
            moduleRef: 'module_ref'
        },
        geneSubEvent: {
            eventName: 'event_name',
            subModuleId: 'submodule_id',
            subMethod: 'submethod',
            methodId: 'method_id',
            eventPortParentId: 'eventport_parent_id',
            eventPortChildId: 'eventport_child_id'
        },
        geneSubEventPara: {
            type: 'type',
            number: 'number'
        },
        subModuleParaSet: {
            name: 'name',
            number: 'number',
            expression: 'expression',
            type: 'type'
        },
        geneSubMethod: {
            methodName: 'method_name'
        },
        geneSubMethodPara: {
            type: 'type',
            number: 'number'
        },
        geneSubMethodLink: {
            eventId: 'event_id'
        },
        geneMethod: {
            methodName: 'method_name',
            comment: 'comment',
            cpuConsume: 'cpu_consume',
            memConsume: 'mem_consume'
        },
        geneMethodPara: {
            tableName: 'table_name',
            type: 'type',
            number: 'number'
        },

        $l_geneLog: {
            geneAddr: "gene_addr",
            parentGeneAddr: "parent_gene_addr",
            parentServer: "parent_server",
            instructCode: "instruct_code",
            status: "status",
            startTime: "start_time",
            endTime: "end_time",
            checkCode: "check_code",
            errorLength: "error_length",
            linkStatus: "link_status",
        },
        $l_dataPortLog: {
            dataPortId: "dataport_id",
            originGeneAddr: "origin_gene_addr",
            originServer: "origin_server",
            originSubGeneAddr: "origin_subgene_addr",
            originSubDataPort: "origin_subdataport",
            tableName: "table_name",
            sendErrorBuff: "send_errorbuff",
            errorOver: "error_over"
        },
        $l_dataTrack: {
            dataportId: "dataport_id",
            destGeneAddr: "dest_gene_addr",
            destServer: "dest_server",
            tableName: "table_name",
        },
        $l_eventPortLog: {
            eventPortId: "eventport_id",
            originGeneAddr: "origin_gene_addr",
            originServer: "origin_server",
            originSubGeneAddr: "origin_subgene_addr",
            originSubEventPort: "origin_subeventport",
            eventId: "event_id",
            sendErrorBuff: "send_error_buff",
            errorOver: "error_over"
        },
        $l_eventTrack: {
            eventPortId: "eventport_id",
            destGeneAddr: "dest_gene_addr",
            destServer: "dest_server",
            eventId: "event_id"
        },
        $l_subGeneLog: {
            subGeneAddr: "subgene_addr",
            subServerId: "subserver_id",
            runStatus: "run_status",
            startTime: "start_time",
            endTime: "end_time"
        },
        $l_subDataPortLog: {
            dataportId: "dataport_id",
            originGeneAddr: "origin_gene_addr",
            originServer: "origin_server",
            originSubGeneAddr: "origin_subgene_addr",
            originSubDataPort: "origin_subdataport",
            tableName: "table_name"
        },
        $l_subDataTrack: {
            dataportId: "dataport_id",
            destGeneAddr: "dest_gene_addr",
            destServer: "dest_server",
            tableName: "table_name"
        },
        $l_subEventPortLog: {
            eventPortId: "eventport_id",
            originGeneAddr: "origin_gene_addr",
            originServer: "origin_server",
            originSubGeneAddr: "origin_subgene_addr",
            originSubEventPort: "origin_subeventport",
            eventId: "event_id",
        },
        $l_subEventTrack: {
            eventPortId: "eventport_id",
            destGeneAddr: "dest_gene_addr",
            destServer: "dest_server",
            eventId: "event_id"
        },
        $l_errorBuff: {
            server: "server",
            destObjectName: "destobject_name",
            method: "method",
            para: "para"
        },
        $l_eventLog: {
            eventId: "event_id",
            instruct: "instruct",
            attrName: "attr_name",
            runStatus: "run_status",
            command: "command",
            startTime: "start_time",
            endTime: "end_time",
            inputPara: "input_para",
            outputPara: "output_para",
            source: "source"
        },
        $l_actionLog: {
            actionId: "action_id",
            geneAddr: "gene_addr",
            server: "server",
            event: "event",
            inputPara: "input_para",
            outputPara: "output_para",
            runStatus: "run_status",
            oldStatus: 'old_status',
            startTime: "start_time",
            endTime: "end_time",
        },
        $l_variableLog: {
            variableId: "variable_id",
            data: "data"
        },
        geneHandle: {
            geneAddr: 'gene_addr',
            server: "server",
            objectName: "object_name",
            geneLog: "gene_log",
            status: "status",
            errorInfo: "error_info"
        },
        serverAllocation: {
            type: 'type',
            server: 'server',
            areaId: 'area_id',
            userStart: 'user_start',
            userEnd: 'user_end'
        },
        server: {
            publicDomain: 'public_domain',
            oneDomain: 'one_domain'
        },
        serverIP: {
            serverIp: 'sever_iP',
            serverPort: 'server_port',
            domain: 'domain',
            number: 'number'
        },
        terminalGene: {
            groupId: 'group_id',
            cloudId: 'cloudId',
            cloudVesselId: 'cloud_vessel_id',
            geneId: 'gene_id',
            parentGeneId: 'parent_gene_id',
            parentVesselId: 'parent_vessel_id',
            attrib: 'attrib',
            geneName: 'gene_name'
        },
        pageGene: {
            cloudVesselId: 'cloud_vessel_id',
            geneId: 'gene_id',
            webview: 'webview_id',
            geneName: 'gene_name'
        },
        userServer: {
            server: 'server_id'
        },

        //画布数据库字段宏定义
        canvas: {
            title: 'title',
            size: 'size',
            style: 'style',
            attrib: 'attrib',
            nameStyle: 'name_style',
            nameOrigin: 'name_origin',
            anchor: 'anchor',
            gridTemplate: 'grid_template',
            selection: 'selection',
            origin: 'origin',
            // gap: 'gap'
        },

        element: {
            elementName: 'element_name',
            icon: 'icon',
            content: 'content',
            form: 'form',
            size: 'size',
            style: 'style',
            attrib: 'attrib',
            nameOrigin: 'name_origin',
            origin: 'origin',
            anchor: 'anchor',
            mirror: 'mirror',
            groupNumber: 'group_number',
            elementGroupId: 'element_group_id',
            selection: 'selection',
            nameStyle: 'name_style'
        },
        line: {
            name: 'name',
            direction: 'direction',
            style: 'style',
            attrib: 'attrib',
            startDotId: 'start_dot_id',
            endDotId: 'end_dot_id',
            selection: 'selection'
        },
        dot: {
            canvasId: 'canvas_id',
            elementId: 'element_id',
            anchor: 'anchor',
            anchorCoord: 'anchor_coord'
        },
        turningPoint: {
            coord: 'coord',
            number: 'number',
        },
        elementGroup: {
            name: 'name',
            size: 'size',
            attrib: 'attrib',
            style: 'style',
            origin: 'origin',
            mirror: 'mirror',
            selection: 'selection'
        },
        elementModule: {
            elementName: 'element_name',
            icon: 'icon',
            content: 'content',
            form: 'form',
            size: 'size',
            style: 'style',
            attrib: 'attrib',
            nameStyle: 'name_style',
            nameOrigin: 'name_origin',
            anchor: 'anchor'
        },
        groupModule: {
            groupName: 'group_name',
            size: 'size',
            attrib: 'attrib',
            style: 'style',
        },
        groupElement: {
            elementModuleId: 'element_module_id',
            elementName: 'element_name',
            groupNumber: 'group_number',
            origin: 'origin'
        },
        canvasModule: {
            canvasName: 'canvas_name',
            size: 'size',
            style: 'style',
            attrib: 'attrib',
            nameStyle: 'name_style',
            nameOrigin: 'name_origin',
            anchor: 'anchor'
        },
        lineModule: {
            name: 'name',
            direction: 'direction',
            style: 'style',
            attrib: 'attrib',
        },
        geneCanvas: {
            gene: 'gene',
            mainCanvas: 'main_canvas',
            dataportCanvas: 'dataport_canvas',
            eventportCanvas: 'eventport_canvas',
            dataCanvas: 'data_canvas',
            eventCanvas: 'event_canvas'
        },
        dataPortElement: {
            dataportId: 'dataport_id',
            elementId: 'element_id',
            dataLineid: 'data_lineid',
            dataElementId: 'data_element_id',
            eventLineId: 'event_line_id',
            eventElementId: 'event_element_id'
        },
        dataElement: {
            geneTableId: 'genetable_id',
            elementId: 'element_id'
        },
        eventPortElement: {
            eventportId: 'eventport_id',
            elementId: 'element_id',
            eventLineId: 'event_line_id',
            eventElementId: 'event_element_id'
        },
        vesselCanvas: {
            vesselId: 'vessel_id',
            canvasId: 'canvas_id',
        },
        eventElement: {
            eventId: 'event_id',
            elementId: 'element_id'
        },
        subGeneGroup: {
            subgeneId: 'subgene_id',
            groupId: 'group_id'
        },
        subDataElement: {
            subdataportId: 'subdataport_id',
            elementId: 'element_id',
            dataportLineId: 'dataport_line_id',
            dataportElementId: 'dataport_element_id',
            eventLineId: 'event_line_id',
            eventElementId: 'event_element_id',
            dataLineId: 'data_line_id',
            dataElementId: 'data_element_id'
        },
        subDataLine: {
            lineId: 'line_id',
            elementId: 'element_id'
        },
        subEventElement: {
            subeventportId: 'subeventport_id',
            elementId: 'element_id',
            eventportLineId: 'eventport_line_id',
            eventportElementId: 'eventport_element_id',
            eventLineId: 'event_line_id',
            eventElementId: 'event_element_id'
        },
        subEventLine: {
            lineId: 'line_id',
            elementId: 'element_id',
        },
        eventCanvas: {
            eventId: 'event_id',
            canvasId: 'canvas_id'
        },
        actionElement: {
            actionElementId: 'action_element_id',
            type: 'type',
            actionId: 'action_id',
            canvasId: 'canvas_id',
            elementId: 'element_id',
            coordinate: 'coordinate'
        },
        laneCanvas: {
            vesselId: 'vessel_id',
            canvasId: 'canvas_id',
            coordinate: 'coordinate'
        },
        postLine: {
            lineId: 'line_id',
            name: 'name',
            startGraphId: 'start_graph_id',
            startType: 'start_type',
            endGraphId: 'end_graph_id',
            endType: 'end_type'
        },
        module: {
            moduleName: 'module_name',
            comment: 'comment',
            type: 'type',
            defaultSize: 'default_size',
            layoutData: 'layout_data',
            fileName: 'file_name',
            status: 'status',
            source: 'source'
        },
        subModule: {
            moduleId: 'module_id',
            subModuleName: 'submodule_name',
            windowId: 'window_id',
            moduleRef: 'module_ref'
        },
        modulePara: {
            name: 'name',
            text: 'text',
            moduleVariableId: 'modulevariable_id',
            number: 'number',
            type: 'type'
        },
        window: {
            type: 'type',
            size: 'size',
            windowId: 'window_id',
            rowId: 'row_id',
            parentWinId: 'parentwin_id',
            name: 'name'
        },
        moduleLog: {
            geneId: 'gene_id',
            geneName: 'gene_name'
        },
        subParaSet: {
            name: 'name',
            expression: 'expression',
            type: 'type'
        },
        subEventSet: {
            eventName: 'event_name',
            subModuleId: 'submodule_id',
            subModuleMethod: 'submodule_method',
            moduleMethodId: 'modulemethod_id',
            parentEventName: 'parentevent_name',
        },
        subEventPara: {
            type: 'type',
            number: 'number'
        },
        subMethodSet: {
            methodName: 'method_name'
        },
        subMethodPara: {
            type: 'type',
            number: 'number'
        },
        subMethodLink: {
            subEventSetId: 'subeventset_id',
            moduleMethodId: 'modulemethod_id'
        },
        methodPort: {
            methodName: 'method_name',
            comment: 'comment',
            moduleMethodId: 'modulemethod_id',
            subModuleId: 'submodule_id',
            subMethod: 'submethod'
        },
        methodPortPara: {
            variableId: 'variable_id',
            type: 'type',
            number: 'number'
        },
        moduleMethod: {
            methodName: 'method_name',
            comment: 'comment',
            code: 'code',
            cpuConsume: 'cpu_consume',
            memConsume: 'mem_consume'
        },
        MDEventPort: {
            eventName: 'event_name',
            comment: 'comment',
            subModuleId: 'submodule_id',
            subEvent: 'subevent',
            moduleMethodId: 'modulemethod_id'
        },
        MDEventPara: {
            type: 'type',
            number: 'number',
        },
        moduleVariable: {
            name: 'name',
            type: 'type',//变量类型
            default: 'default',
            text: 'text',
            dataType: 'data_type',
            styleType: 'style_type',
        },
        moduleStyle: {
            styleVariable: 'style_variable',
            attrib: 'attrib',
            elementType: 'element_type',
            colorStatus: 'color_status',
            sizeStatus: 'size_status',
        },
        MDMethodPara: {
            moduleVariableId: 'modulevariable_id',
            type: 'type',
            number: 'number'
        },

        cloud: {
            cloudName: 'cloud_name',
            comment: 'comment',
            icon: 'icon',
            type: 'type',
            rootGeneId: 'root_gene_id',
            groupId: 'group'
        },
        cloudAuther: {
            startDate: 'start_date',
            dateLength: 'data_length',
            staffMax: 'staff_max',
            customerMax: 'customer_max'
        },
        cloudVessel: {
            name: 'name',
            cloudVesselId: 'cloudVesselID',
            userType: 'user_type',
            attrib: 'attrib',
            vesselType: 'vessel_type'
        },
        cloudGene: {
            geneId: 'gene_id',
            parentGeneId: 'parent_gene_id',
            vesselClassId: 'vessel_class',
            geneName: 'gene_name',
            geneType: 'gene_type'
        },
        cloudDataPort: {
            dataPortName: 'dataport_name',
            dataPortType: 'dataport_type',
            relatedTable: 'related_table',
            tableName: 'tableName'
        },
        cloudEventPort: {
            eventPortName: 'eventport_name',
            type: 'type',
            runType: 'run_type'
        },
        cloudEventPortPara: {
            tableName: 'table_name',
            type: 'type',
            number: 'number'
        },

        //组织
        group: {
            groupName: 'group_name',
            leader: 'leader',
            groupSite: 'group_site'
        },
        department: {
            name: 'name',
            comment: 'comment',
            businessType: 'business_type',
            superior: 'superior',
            leader: 'leader',
            attrib: 'attrib'
        },
        myCloud: {
            cloud: 'cloud',
            cloudName: 'cloud_name',
            cloudSet: 'cloud_set',
            status: 'status'
        },
        serverArea: {
            parentAreaId: 'parent_area_id',
            areaName: 'Area_name',
            address: 'address',
            backupSum: 'backup_sum',
            serverSum: 'server_sum',
            cpuCapacity: 'cpu_capacity',
            HDDCapacity: 'HDD_capacity',
            SSDCapacity: 'SSD_capacity',
            memCapacity: 'mem_capacity',
            flowCapacity: 'flow_capacity',
            reserveCpu: 'reserve_cpu',
            reserveMem: 'reserve_mem',
            reserveHDD: 'reserve_HDD',
            reserveSSD: 'reserve_SSD',
            reserveFlow: 'reserve_flow'
        },
        serverHard: {
            name: 'name',
            ipAdd: 'ip_addr',
            cpuCapacity: 'cpu_capacity',
            memCapacity: 'mem_capacity',
            HDDCapacity: 'HDD_capacity',
            SSDCapacity: 'SSD_capacity',
            flowCapacity: 'flow_capacity',
            reserveCpu: 'reserve_cpu',
            reserveMem: 'reserve_mem',
            reserveHDD: 'reserve_HDD',
            reserveSSD: 'reserve_SSD',
            reserveFlow: 'reserve_flow',
            attrib: 'attrib',
            status: 'status',
            machineRoomId: 'machine_room_id'
        },

        //云设置
        cloudSet: {
            cloudID: 'cloud_id',
            rootGene: 'root_gene',
            groupID: 'group_id',
            rootVesselID: 'root_vessel_id',
            cpuCapacity: 'cpu_capacity',
            memCapacity: 'mem_capacity',
            flowCapacity: 'flow_capacity',
            saveCapacity: 'save_capacity',
            open: 'open',
            status: 'status',
            styleTemplate: 'style_template',
            backupSum: 'backup_sum'
        },
        vesselCase: {
            // parentVesselCaseID: 'parent_vesselcase_id',
            parentVesselCaseID: 'parent_vesselcas',//jasonlgb-字段名称错误
            cloudVesselID: 'cloud_vessel_id',
            vesselName: 'vessel_name',
            parentVesselID: 'parent_vessel_id',
            superior: 'superior',
            departmentID: 'department_id',
            serverID: 'sever_id',
            saveType: 'save_type',
            type: 'type',
            cpuCapacity: 'cpu_capacity',
            memCapacity: 'mem_capacity',
            flowCapacity: 'flow_capacity',
            saveCapacity: 'save_capacity',
            status: 'status'
        },
        geneSet: {
            cloudId: 'cloud_id',
            cloudVesselId: 'cloud_vessel_id',
            geneId: 'gene_id',
            geneName: 'gene_name',
            parentGeneId: 'parent_gene_id',
            parentVesselId: 'parent_vessel_id',
            auther: 'auther'
        },
        myData: {
            table: 'table',
            tableName: 'table_name',
            status: 'status'
        },
        cloudDataPortSet: {
            dataportId: 'dataport_id',
            dataportName: 'dataport_name',
            dataportType: 'dataport_type',
            relatedTable: 'related_table',
            relatedTableName: 'table_name',
            newData: 'new_data'
        },
        cloudEventPortSet: {
            eventportId: 'eventport_id',
            eventportName: 'eventport_name',
            type: 'type',
            TransId: 'trans_id'
        },
        cloudEventPortPara: {
            tableName: 'table_name',
            type: 'type',
            number: 'number'
        },
        dataConnect: {
            relatedGroupId: 'related_group_id',
            relatedCloudId: 'related_cloud_id',
            relatedGeneAdd: 'related_gene_add',
            relatedDataport: 'related_dataport',
            // relatedDataport: 'related_dataport_id',
            direction: 'direction',
            server: 'server',
            auther: 'auther'
        },
        eventConnect: {
            relatedGroupId: 'related_group_id',
            relatedCloudId: 'related_cloud_id',
            relatedGeneAdd: 'related_gene_add',
            relatedEventpor: 'related_eventpor',
            // relatedEventpor: 'related_eventport_id',
            relation: 'relation',
            server: 'server'
        },
        releGroupList: {
            releGroup: 'rele_group',
            releName: 'group_name',
            comment: 'comment',
            type: 'type',
            releSite: 'rele_site'
        },
        myTrans: {
            transId: 'trans_id',
            transName: 'trans_name',
            status: 'status',
        },
        myTransPara: {
            tableName: 'table_name',
            type: 'type',
            number: 'number'
        },
        interfaceSetCanvas: {
            relatedGroupId: 'related_group_id',
            cloudsetId: 'cloudSet_id',
            relatedCloudsetId: 'related_cloudSet_id',
            cloudsetCanvas: 'cloudSet_canvas',
            relatedCloudsetCanvas: 'related_cloudSet_canvas',
            mainCanvas: 'main_canvas',
            dataCanvas: 'data_canvas',
            eventCanvas: 'event_canvas'
        },
        interfaceSetElement: {
            elementId: 'element_id',
            parentCanvasId: 'parent_canvas_id',
            type: 'type',
            unitId: 'unit_id'
        },
        interfaceSetLine: {
            lineId: 'line_id',
            startElementId: 'start_element_id',
            endElementId: 'end_element_id',
            direction: 'direction'
        },
        releGroupList: {
            releGroup: 'rele_group',
            groupName: 'group_name',
            comment: 'comment',
            type: 'type',
            releSite: 'rele_site'
        },

        styleModule: {
            groupId: 'group_id',
            name: 'name',
            text: 'text'
        },


        // 登录注册宏定义
        seccode: {
            mobile: 'mobile',
            seccode: 'seccode',
            startTime: 'start_time'
        },
        emailcode: {
            email: 'email',
            emailcode: 'emailcode',
            startTime: 'start_time',
        },
        config: {
            seccodeOverTime: 'seccode_over_time',
            emailcodeOverTime: 'emailcode_over_time',
            qrcodeOverTime: 'qrcode_over_time'
        },
        user: {
            groupID: 'group_id',
            mobile: 'mobile',
            email: 'email',
            password: 'password',
            userType: 'user_type',
            nickName: 'nick_name',
            portrait: 'portrait',
            token: 'token',
            userSite: 'user_site',
            userName: 'user_name',
            idNumber: 'id_number'
        },
        terminalStat: {
            name: 'name',
            type: 'type',
            status: 'status'
        },
        thirdLogin: {
            thirdName: 'third_name',
            thirdType: 'third_type',
            openid: 'openid',
            unionid: 'unionid',
            accessToken: 'access_token',
            platformUserServer: 'platform_user_server'
        },
        users: {
            groupID: 'goodsid',
            mobile: 'cloud_name',
            email: 'comment',
            password: 'icon',
            userType: 'type',
            nickName: 'root_gene',
            portrait: 'group',
            // token:'open',
            // userSite:'status',
            // userName:'style_template',
            // idNumber:'backup_sum'
        },
        terminalStats: {
            name: 'start_date',
            type: 'date_leng',
            status: 'staff_max'
        },
        thirdLogins: {
            thirdName: 'name',
            thirdType: 'user_type',
            openid: 'attrib',
            unionid: 'type',
            accessToken: 'cloudVesselID',
            // platformUserServer:'mem_capacity'
        },
        userss: {
            groupID: 'related_group_id',
            mobile: 'cloudSet_id',
            email: 'related_cloudSet_id',
            password: 'cloudSet_canvas',
            userType: 'related_cloudSet_canvas',
            nickName: 'main_canvas',
            portrait: 'data_canvas',
            token: 'event_canvas',
            // userSite:'status',
            // userName:'style_template',
            // idNumber:'backup_sum'
        },
        terminalStatss: {
            name: 'element_id',
            type: 'parent_canvas_id',
            status: 'type'
        },
        thirdLoginss: {
            thirdName: 'line_id',
            thirdType: 'start_element_id',
            openid: 'end_element_id',
            unionid: 'direction',
            // accessToken:'cloudVesselID',
            // platformUserServer:'mem_capacity'
        },

        //客户管理
        userInfo: {
            userID: 'user_id',
            name: 'name',
            sex: 'sex',
            birthTime: 'birth_time',
            nickName: 'nick_name',
            headPortrait: 'head_portrait',
            IDNumber: 'ID_number',
            IDPhoto: 'ID_photo',
            passportNumber: 'passport_number',
            passportPhoto: 'passport_photo',
            nativePlace: 'native_place',
            citizenship: 'citizenship',
            nation: 'nation',
            stature: 'stature',
            weight: 'weight',
            score: 'score',
            money: 'money',
            cash: 'cash',
            coupon: 'coupon',
            giftbag: 'giftbag',
            levelName: 'level_name',
            userSite: 'user_site',
            level: 'level',
            location: 'location'
        },
        myAttention: {
            siteType: 'site_type',
            siteID: 'site_id',
            name: 'name',
            siteURL: 'site_URL',
            abstract: 'context',
            picture: 'picture',
            time: 'time',
            attentionId: 'attention_id'
        },
        myFans: {
            name: 'name',
            sex: 'sex',
            picture: 'picture',
            abstract: 'abstract',
            fansID: 'fans_id',
            fansURL: 'fans_URL',
            time: 'time',
            fansSite: 'context',
        },
        myFriend: {
            name: 'name',
            sex: 'sex',
            picture: 'picture',
            context: 'context',
            userId: 'user_id',
            friendURL: 'friend_URL',
            time: 'time'
        },
        cash: {
            value: 'value',
            context: 'context',
            time: 'time',
            type: 'type',
            taskId: 'task_id',
            orderNumber: 'order_number',
            myorderId: 'myorder_id',
            balance: 'balance'
        },
        coupon: {
            userInfo: 'user_info',
            name: 'name',
            number: 'number',
            value: 'value',
            discount: 'discount',
            startTime: 'start_time',
            endTime: 'end_time',
            content: 'content',
            groupName: 'group_name',
            picture: 'picture',
            groupid: 'groupid',
            groupsite: 'groupsite',
            type: 'type',
            status: 'status',
            orderNumber: 'order_number',
            myorderId: 'myorder_id'
        },
        score: {
            userInfo: 'user_info',
            value: 'value',
            context: 'context',
            time: 'time',
            type: 'type',
            taskId: 'task_id',
            orderNumber: 'order_number',
            myorderId: 'myorder_id',
            balance: 'balance'
        },
        myInvite: {
            name: 'name',
            picture: 'picture',
            mobile: 'mobile',
            star: 'star',
            time: 'time'
        },
        myActivity: {
            userInfo: 'user_info',
            name: 'name',
            picture: 'picture',
            abstract: 'abstract',
            type: 'type',
            activityURL: 'activity_URL',
            time: 'time',
            startTime: 'start_time',
            endTime: 'end_time',
            author: 'author'
        },
        myApply: {
            userInfo: 'user_info',
            name: 'name',
            picture: 'picture',
            abstract: 'abstract',
            type: 'type',
            site_URL: 'site_URL',
            date: 'date'
        },
        myGroup: {
            userInfo: 'user_info',
            groupName: 'group_name',
            groupAbbreviation: 'group_abbreviation',
            groupId: 'group_id',
            groupSite: 'group_site',
            groupType: 'group_type',
            joinDate: 'join_date',
            dimissionDate: 'dimission_date',
            role: 'role',
            type: 'type',
            status: 'status'
        },
        myHomepage: {
            name: 'name',
            picture: 'picture',
            context: 'context',
            time: 'time',
            homePageURL: 'homepage_URL',
            type: 'type',
            status: 'status'
        },
        userBlog: {
            blogType: 'blog_type',
            name: 'name',
            abstract: 'abstract',
            picture: 'picture',
            details: 'details',
            openRange: 'open_range',
            praiseNumber: 'praise_number',
            commentNumber: 'comment_number',
            favoriteNumber: 'favorite_number',
            time: 'time',
            closeComment: 'close_comment',
            release: 'release',
            status: 'status',
            thumbnail: 'thumbnail',
            labelNumber: 'label_number',
        },
        myBlog: {
            blogType: 'blog_type',
            blogID: 'blog_id',
            blogURL: 'blog_url',
            name: 'name',
            abstract: 'abstract',
            praiseNumber: 'praise_number',
            commentNumber: 'comment_number',
            favoriteNumber: 'favorite_number',
            time: 'time',
            status: 'status'
        },
        myHandle: {
            siteType: 'site_type',
            siteID: 'site_id',
            siteURL: 'site_url',
            name: 'name',
            abstract: 'abstract',
            picture: 'picture',
            authorName: 'author_name',
            praise: 'praise',
            praiseTime: 'praise_time',
            favorite: 'favorite',
            favoriteTime: 'favorite_time',
            browse: 'browse',
            browseTime: 'browse_time'
        },
        myComment: {
            commentID: 'comment_id',
            detail: 'detail',
            time: 'time'
        },
        userBlogHandle: {
            handler: 'handle_id',
            praise: 'praise',
            praiseTime: 'praise_time',
            favorite: 'favorite',
            favoriteTime: 'favorite_time'
        },
        userBlogComment:{
            userBlog:'user_blog_id',
            parentID:'parent_id',
            observer:'observer_id',
            name:'name',
            headPortrait:'head_portrait',
            details:'details',
            praiseNumber:'praise_number',
            commentNumber:'comment_number',
            hideComment:'hide_comment',
            time:'time',
            delete:'delete'
        },
        userBlogCommentPraise: {
            praiser: 'praiser',
            praise: 'praise',
            praiseTime: 'praise_time',
        },
        publicBlog: {
            blogType: 'blog_type',
            blogID: 'blog_id',
            blogURL: 'blog_url',
            blogName: 'blog_name',
            abstract: 'abstract',
            picture: 'picture',
            author: 'author_id',
            authorName: 'author_name',
            headPortrait: 'head_portrait',
            groupID: 'group_id',
            groupName: 'group_name',
            logo: 'logo',
            groupSite: 'group_site',
            praiseNumber: 'praise_number',
            commentNumber: 'comment_number',
            favoriteNumber:'favorite_number',
            time: 'time',
            delete: 'delete',
            thumbnail: 'thumbnail',
            geneSite: 'gene_site',
            labelNumber: 'label_number'
        },
        publicBlogAttention: {
            myID: 'my_id',
            siteType: 'site_type',
            siteID: 'site_id'
        },
        publicBlogHandle: {
            myID: 'my_id',
            publicBBSID: 'item',
            praise: 'praise',
            praiseTime: 'praise_time',
            favorite: 'favorite',
            favoriteTime: 'favorite_time',
        },
        groupBlog: {
            blogType: 'blog_type',
            name: 'name',
            abstract: 'abstract',
            picture: 'picture',
            details: 'details',
            thumbnail: 'thumbnail',
            labelNumber: 'label_number',
            author: 'author',
            authorName: 'author_name',
            openRange: 'open_range',
            praiseNumber: 'praise_number',
            commentNumber: 'comment_number',
            favoriteNumber: 'favorite_number',
            time: 'time',
            closeComment: 'close_comment',
            status: 'status'
        },
        groupInfo: {
            groupID: 'groupID',
            groupName: 'group_name',
            logo: 'logo',
            groupSite: 'group_site'
        },
        userBlogLabel: {
            name:'name',
        },
        groupHomepage: {
            homePageURL: 'URL',
            type: 'type'
        },
        groupBlogLabel: {
            name:'name',
        },
        clerk: {
            groupID: 'group_id',
            name: 'name',
            user: 'user',
            userSite: 'userSite'
        },
        publicBlogLabel: {
            name:'name',
        },
        groupBlogHandle: {
            handler: 'handler_id',
            praise: 'praise',
            praiseTime: 'praise_time',
            favorite: 'favorite',
            favoriteTime: 'favorite_time'
        },
        groupBlogComment: {
            groupBlogID: 'group_blog_id',
            parentID: 'parent_id',
            observer: 'observer_id',
            name: 'name',
            headPortrait: 'head_portrait',
            groupID: 'group_id',
            groupName: 'group_name',
            logo: 'logo',
            details: 'details',
            praiseNumber: 'praise_number',
            commentNumber:'comment_number',
            hideComment: 'hide_comment',
            delete: 'delete',
            time: 'time'
        },
        groupBlogCommentPraise: {
            praiser: 'praiser_id',
            praise: 'praise',
            praiseTime: 'praise_time',
        },


        // 活动中心：
        groupActivityOrder: {
            groupActivityID: 'group_activity_id',
            orderNumber: 'field_num',
            // orderNumber: 'order_number',
            applicant: 'applicant',
            groupActivityTicketTypeID: 'group_activity_ticket_type_id',
            createTime: 'create_time',
            status: 'status',
            price: 'price',
            name: 'field_str',
            headPortrait: 'head_portrait'
        },
        groupActivityBill: {
            number: 'number',
            code: 'code',
            name: 'name',
            mobile: 'field_str',
            // mobile: 'phone',
            status: 'status',
            rejectReason: 'refuse_reason',
            cancelReason: 'close_reason',
            info: 'info',
        },
        groupActivityAppendix: {
            type: 'type',
            name: 'name',
            picture: 'picture',
            thumbnail: 'thumbnail',
            file: 'file'
        },

        myAlbum: {
            siteType: 'site_type',
            siteId: 'site_id',
            name: 'name',
            describe: 'discribe',
            time: 'time'
        },
        myPhoto: {
            picture: 'picture',
            thumbnail: 'thumbnail',
            name: 'name',
            describe: 'describe',
            number: 'number',
            type: 'field_num'
        },
        photoHandle: {
            handler: 'handler',
            time: 'time',
            praise: 'praise'
        },
        photoComment: {
            observer: 'observer',
            name: 'name',
            headPortrait: 'head_portrait',
            content: 'content',
            time: 'time'
        },

        groupActivity:{
            name:'name',
            poster:'poster',
            abstract:'abstract',
            details:'details',
            startTime:'start_time',
            endTime:'end_time',
            picture:'picture',
            place:'place',
            phone:'phone',
            mode:'mode',
            label:'label',
            newsSummary:'news_summary',
            author:'author',
            authorName:'author_name',
            authorSite:'author_site',
            department:'department',
            departmentName:'department_name',
            pubicDepartment:'public_department',
            publicCustomer:'public_customer',
            refundExplain:'refund_explain',
            showEnrollInfo:'show_enroll_info',
            refuseReason:'refuse_reason',
            closeReason:'close_reason',
            status:'status',
            praiseNumber:'praise_number',
            commentNumber:'comment_number',
            favoriteNumber:'favorite_number',
            enrollNumber:'enroll_number',
            browerNumber:'brower_number',
            forwardNumber:'foward_number',
            createTime:'create_time',
            groupId: 'author',
            groupName: 'department_name',
            refundObject: 'refundObject',
            openEnrollChannel: 'openEnrollChannel'
        },
        groupActivityTicketType:{
            name:'name',
            explain:'explain',
            price:'price',
            poll:'number',
            minNumber:'min_number',
            maxNumber:'max_number',
            approval:'approval',
            startTime:'start_time',
            endTime:'end_time',
            saleStartTime:'sale_start_time',
            saleEndTime:'sale_end_time',
            refundEndTime:'refund_end_time',
            number:'field_num'
        },
        groupActivityEnrollForm: {
            name: 'name',
            attribute: 'attribute',
            baseComponent: 'base_component'
        },

        activityOption:{
            label:'label',
            budget:'budget',
            customerLevel:'customer_level',
        },
        activityEnrollOption:{
            type:'type',
            name:'name',
            baseComponent:'base_component'
        },
        department: {
            name: 'name',
            comment: 'comment',
            status:'status',
            superior: 'superior',
            leader: 'leader',
            attrib: 'attrib'
        },
        clerkSet:{
            user:'user',
            clerkID:'clerk_id',
            clerkName:'clerk_name',
            class:'class',
            clerkSite:'clerk_site',
            status:'status'
        },
        groupActivityBudgetForm:{
            name:'name',
            unit:'unit',
            budgetAmount:'budgetAmount',
            budgetRemarks:'budgetRemarks',
            actualAmount:'actualAmount',
            actualRemarks:'actualRemarks'
        },
        groupActivityManageMember:{
            // member:'field_num',
            member:'member',
            function:'function'
        },
        groupActivityDiscuss:{
            groupActivityID:'group_activity_id',
            questioner:'questioner',
            name:'name',
            headPortrait:'head_portrait',
            askContent:'ask_content',
            askTime:'ask_time',
            answerContent:'answer_content',
            answerTime:'answer_time'
        },
        addressOption:{
            parent:'parent',
            name:'name',
            code:'code'
        },
        groupActivityHandle:{
            groupActivityID:'group_activity_id',
            handler:'handler',
            praise:'praise',
            praiseTime:'praise_time',
            favorite:'favorite',
            favoriteTime:'favorite_time'
        },
        groupClassify: {
            firstName: 'firstName',
            secondName: 'secondName'
        }
    },

    enum: {//枚举的定义
        gene: {
            type: {
                window: "0",
                terminal: "1",
                user: "2",
                group: "3"
            },
            terminal_type: {
                pc: 0,
                mobile: 1
            },
            right: {
                formal: "0",
                probation: "1",
                disable: "2"
            }
        },
        geneTable: {
            medium: {
                lasting: "0",
                mem: '1',
                all: '2'
            }
        },
        vesselClass: {
            type: {//0-视窗/1-浏览窗/2-终端/3-服务器
                div: "d",
                webview: "w",
                terminal: "t",
                server: "s",
                // div: "0",
                // webview: "1",
                // terminal: "2",
                // userServe: "3",
                // group: "4"
            },
            win_type: {
                normal: '0',
                dialog: '1'
            },
            attribute: {
                static: "0",
                dynamic: "1"
            }
        },
        event: {
            type: {
                event: '0',
                method: '1'
            },
            option: {
                normal: "0",
                start: "1",
                close: "2",
                error: "3"
            },
            run_type: {
                synch: "0",
                async: "1",
            }
        },
        eventPara: {
            type: {
                in: "0",
                out: "1"
            }
        },
        eventPort: {
            type: {
                in: "0",
                out: "1"
            },
            run_type: {
                synch: "0",
                async: "1",
            }
        },
        eventPortPara: {
            type: {
                in: "0",
                out: "1"
            }
        },
        dataPort: {
            connect_line: {
                exist: "0",
                none: "1"
            },
            dataPort_type: {
                in: "0",
                out: "1",
                twoWay: "2"
            }
        },
        subGene: {
            type: {//0-视窗/1-浏览窗/2-用户/3-部门/4-组织
                window: "0",
                terminal: "1",
                user: "2",
                group: "3"
            },
            terminal_type: {//0-PC/1-移动
                PC: "0",
                mobile: "1"
            }
        },
        subDataPort: {
            connect_line: {
                exist: "0",
                none: "1"
            },
            connect_dir: {
                in: "0",
                out: "1",
                twoWay: "2"
            },
            type: {
                in: "0",
                out: "1",
                twoWay: "2"
            }
        },
        interDataPort: {
            connect_dir: {
                in: "0",
                out: "1",
                twoWay: "2"
            }
        },
        subEventPort: {
            port_type: {
                in: "0",
                out: "1"
            },
            run_type: {
                synch: "0",
                async: "1",
            },
            subevent_type: {
                normal: "0",
                start: "1",
                close: "2"
            }
        },
        subEventPortPara: {
            type: {
                in: "0",
                out: "1"
            }
        },
        action: {
            type: {
                normal: "0",
                timing: "1"
            },
            stage_flag: {
                start: "0",
                normal: "1",
                end: "2"
            },
            run_type: {
                synch: "0",
                async: "1"
            }
        },
        actionPara: {
            type: {
                in: "0",
                out: "1"
            },
            option: {
                true: "0",
                false: "1"
            }
        },
        $l_geneLog: {
            status: {
                open: "0",
                close: "1"
            },
            linkStatus: {
                online: "0",
                offline: "1"
            }
        },
        $l_subGeneLog: {
            runStatus: {
                open: "0",
                close: "1"
            }
        },
        $l_actionLog: {
            runStatus: {
                ready: "0",
                run: "1",
                end: "2",
                cancel: "3"
            }
        },
        $l_eventLog: {
            runStatus: {
                ready: "0",
                run: "1",
                end: "2",
                cancel: "3"
            },
            command: {
                ready: "0",
                run: "1",
                end: "2",
                cancel: "3",
                rollback: "4",
                reset: "5"
            }
        },
        geneHandle: {
            status: {
                tobeRun: "0",
                run: "1",
                tobeStop: "2",
                stop: "3"
            }
        },
        serverAllocation: {
            type: {
                register: "0",
                authentication: "1",
                group: "2",
                user: "3",
                cloud: "4"
            }
        },
        server: {
            attrib: {
                public: "0",
                private: "1"
            }
        },
        terminalGene: {
            attrib: {
                roam: "0",
                fixed: "1"
            },
            firstGene: {
                true0: "0",
                false0: "1"
            }
        },
        canvas: {
            selection: {
                unselected: '0',
                selected: '1',
            },
        },
        element: {
            mirror: {
                false0: '0',
                true0: '1'
            },
            selection: {
                unselected: '0',
                selected: '1',
            }
        },

        elementGroup: {
            mirror: {
                false0: '0',
                true0: '1'
            },
            selection: {
                unselected: '0',
                selected: '1',
            }
        },
        line: {
            direction: {
                none: '0',
                forward: '1',
                reverse: '2',
                twoWay: '3',
            },
            selection: {
                unselected: '0',
                selected: '1',
            }
        },
        elementModule: {
            form: {
                line: '0',
                rectangle: '1',
                circular: '2',
                triangle: '3'
            }
        },
        lineModule: {
            direction: {
                none: '0',
                forward: '1',
                twoWay: '2',
            }
        },
        module: {
            type: {
                normal: '0',
                interface: '1'
            },
            status: {
                draft: '0',
                release: '1'
            },
            source: {
                selfMade: '0',
                quote: '1',
                public: '2'
            }
        },
        modulePara: {
            type: {
                data: '0',
                attrib: '1',
                style: '2'
            }
        },
        window: {
            type: {
                normal: '0',
                dialog: '1'
            }
        },
        moduleVariable: {
            dataType: {//数据类型
                value: '0',
                character: '1',
                picture: '2',
            },
            type: {//变量类型
                data: '0',
                style: '1',
            },
            styleType: {//风格类别
                color: '0',
                size: '1',
                borderType: '2',
                animation: '3',
                shadow: '4',
                padding: '5',
                margin: '6',
                borderStyle: '7',
                borderRadius: '8',
                fontType: '9',
                fontBold: '10',
                layer: '11',
            },
        },
        moduleStyle: {
            attrib: {
                fontStyle: '0',
                size: '1',
                fontRowHeight: '2',
                fontBold: '3',
                color: '4',
                shadow: '5',
                animation: '6',
                borderHeight: '7',
                borderWidth: '8',
                borderPadding: '9',
                borderMargin: '10',
                borderFilledColor: '11',
                borderLineColor: '12',
                borderRadius: '13',
                borderLineStyle: '14',
            },
            elementType: {
                font: '0',
                border: '1',
                icon: '2',
            },
            colorStatus: {
                normal: '0',
                float: '1',
                invalid: '2',
                checked: '3',
                warn: '4',
                danger: '5',
                msg: '6',
                ok: '7',
            },
            sizeStatus: {
                normal: '0',
                middle: '1',
                smaller: '2',
                min: '3',
                max: '4',
            },

        },
        MDMethodPara: {
            type: {
                in: '0',
                out: '1'
            }
        },
        MDEventPara: {
            type: {
                in: '0',
                out: '1'
            }
        },
        methodPortPara: {
            type: {
                in: '0',
                out: '1'
            }
        },
        subParaSet: {
            type: {
                data: '0',
                attr: '1',
                style: '2'
            }
        },
        subModuleParaSet: {
            type: {
                data: '0',
                attr: '1',
                style: '2'
            }
        },

        //云系统
        cloudVessel: {
            attrib: {
                fixed: '0',
                roam: '1'
            },
            vesselType: {
                div: "d",
                webview: "w",
                terminal: "t",
                server: "s",
            },
            userType: {
                department: '0',
                position: '1',
                service: '2'
            }
        },
        cloudDataPortSet: {
            dataPort_type: {
                in: "0",
                out: "1",
                twoWay: "2"
            },
            new_data: {
                yes: "0",
                no: "1"
            }
        },
        cloudEventPortSet: {
            type: {
                in: "0",
                out: "1"
            },
            run_type: {
                synch: "0",
                async: "1",
            }
        },
        cloudEventPortPara: {
            type: {
                in: "0",
                out: "1"
            }
        },
        dataConnect: {
            direction: {
                in: "0",
                out: "1",
                twoWay: "2"
            },
            auther: {
                allow: "0",
                ban: "1"
            }
        },
        interfaceSetElement: {
            type: {
                eventport: '0',
                dataport: '1',
                data: '2',
                event: '3'
            }
        },
        interfaceSetLine: {
            direction: {
                in: '0',
                out: '1',
                twoWay: '2'
            }
        },
        myData: {
            status: {
                draft: '0',
                deploy: '1'
            }
        },

        actionElement: {
            type: {
                start: '0',
                action: '1',
                selector: '2',
                expression: '3',
                end: '4'
            }
        },
        postLine: {
            startType: {
                canvas: '0',
                element: '1'
            },
            endType: {
                canvas: '0',
                element: '1'
            }
        },

        //组织，jasonlgb
        department: {
            attrib: {
                department: '0',
                position: '1',
                service: '2'
            }
        },
        serverHard: {
            status: {
                run: '0',
                ready: '1'
            }
        },
        // 云配置
        vesselCase: {
            type: {
                department: '0',
                position: '1',
                service: '2'
            },
            status: {
                draft: '0',
                deploy: '1',
                change: '2'
            },
            saveType: {
                HDD: '0',
                SSD: '1'
            }
        },
        geneSet: {
            auther: {
                allow: '0',
                ban: '1'
            }
        },


        // 登录注册定义
        user: {
            userType: {
                ordinary: '0',
                visitor: '1'
            }
        },
        terminalStat: {
            type: {
                pc: '0',
                routine: '1',
                app: '2'
            },
            status: {
                logout: '0',
                login: '1',
                logoff: '2'
            }
        },
        thirdLogin: {
            thirdType: {
                qq: 0,
                weChat: 1
            }
        },
        mobileVerify: {
            unregistered: '0',//未注册
            bindqq: '1',//绑定QQ
            bindwechat: '2',//绑定微信
            bindboth: '3',//绑定QQ和微信
            unbind: '4',//未绑定
        },


        //客户管理
        userInfo: {
            sex: {
                man: 0,
                woman: 1
            }
        },
        cash: {
            type: {
                get: 0,
                apply: 1
            }
        },
        coupon: {
            type: {
                currency: 0,
                special: 1
            },
            status: {
                unused: 0,
                used: 1,
                expired: 2
            }
        },
        score: {
            type: {
                get: 0,
                apply: 1
            }
        },
        myActivity: {
            type: {
                publish: 0,
                participate: 1
            }
        },
        myAttention: {
            siteType: {
                user: 0,
                group: 1,
                special: 2,
                store: 3
            }
        },
        myGroup: {
            role: {
                staff: 0,
                student: 1,
                customer: 2
            },
            type: {
                allTime: 0,
                partTime: 1
            },
            status: {
                onJob: 0,
                offJob: 1
            }
        },
        userBlog: {
            blogType: {
                post: 0,
                article: 1
            },
            openRange: {
                open: 0,
                friend: 1,
                onlyme: 2
            },
            closeComment: {
                yes: 1,
                no: 0
            },
            release: {
                yes: 1,
                no: 0
            },
            status: {
                default: 0,
                draft: 1,
                release: 2,
                delete: 3
            }
        },
        myBlog: {
            blogType: {
                post: 0,
                article: 1
            },
            status: {
                draft: 0,
                release: 1,
                delete: 2
            }
        },
        userBlogClass: {
            class: {
                technology: 0,
                finance: 1,
                education: 2,
                life: 3,
                society: 4
            }
        },
        publicBlog: {
            blogType: {
                post: 0,
                article: 1
            },
            delete: {
                yes: 1,
                no: 0
            }
        },
        publicBlogClass: {
            class: {
                technology: 0,
                finance: 1,
                education: 2,
                life: 3,
                society: 4
            }
        },
        userBlogComment: {
            hideComment: {
                yes: 1,
                no: 0
            },
            delete: {
                no: 0,
                yes: 1
            }
        },
        groupBlogComment: {
            hideComment: {
                yes: 1,
                no: 0
            },
            delete: {
                no: 0,
                yes: 1
            }
        },
        userBlogCommentPraise: {
            praise: {
                yes: 1,
                no: 0
            }
        },
        groupBlogCommentPraise: {
            praise: {
                yes: 1,
                no: 0
            }
        },
        myHomepage: {
            type: {
                pc: 0,
                procedures: 1,
                mobile: 2
            }
        },
        groupHomepage: {
            type: {
                pc: 0,
                procedures: 1,
                mobile: 2
            }
        },
        myHandle: {
            siteType: {
                userForum: 0,
                groupForum: 1,
                userActivity: 2,
                groupActivity: 3,
                goods: 4
            },
            praise: {
                yes: 1,
                no: 0
            },
            favorite: {
                yes: 1,
                no: 0
            },
            browse: {
                yes: 1,
                no: 0
            }
        },
        userBlogHandle: {
            praise: {
                no: 0,
                yes: 1
            },
            favorite: {
                no: 0,
                yes: 1
            }
        },
        groupBlogHandle: {
            praise: {
                no: 0,
                yes: 1
            },
            favorite: {
                no: 0,
                yes: 1
            }
        },
        publicBlogHandle: {
            praise: {
                no: 0,
                yes: 1
            },
            favorite: {
                no: 0,
                yes: 1
            }
        },
        groupBlog: {
            blogType: {
                post: 0,
                article: 1
            },
            openRange: {
                open: 0,
                member: 1
            },
            closeComment: {
                yes: 1,
                no: 0
            },
            status: {
                default: 0,
                draft: 1,
                release: 2,
                delete: 3
            },
        },
        publicBlogAttention:{
            siteType:{
                user:0,
                group:1
            }
        },


        // 活动中心：
        groupActivityOrder: {
            status: {
                pay: 0,
                finish: 1,
                close: 2
            },
            orderNumberType: {
                activity: 1,
                market: 2,
                apply: 3
            }
        },
        groupActivityBill: {
            status: {
                check: 0,
                pay: 1,
                refund: 2,
                refunding: 3,
                refunded: 4,
                reject: 5,
                checkTicket: 6,
                finish: 7,
                cancel: 8
            }
        },
        groupActivityAppendix: {
            type: {
                picture: 0,
                file: 1
            }
        },

        myAlbum: {
            siteType: {
                userBlog: 0,
                groupBlog: 1,
                userActivity: 2,
                groupActivity: 3,
                shop: 4
            }
        },
        myPhoto: {
            type: {
                photo: 0,
                video: 1
            }
        },

        groupActivity: {
            status: {
                draft: 0,
                check: 1,
                rejected: 2,
                released: 3,
                finished: 4,
                closed: 5,
                deleted: 6,
                terminal: 7
            },
            mode: {
                online: 0,
                outLine: 1,
                all: 2
            },
            showEnrollInfo:{
                yes:1,
                no:2
            },
            refundExplain: {
                type:{
                    support:1,
                    oppose:0
                }
            },
            refundObject: {
                type: {
                    support: 1,
                    oppose: 0
                }
            },
            openEnrollChannel: {
                type: {
                    yes:1,
                    no:0
                }
            }
        },

        enrollOption:{
            type:{
                commonly:0,
                custom:1
            }
        },
        clerkSet:{
            class:{
                clerk:0,
                user:1
            },
            status:{
                draft:0,
                release:1,
                move:2
            }
        },
        groupActivityManageMember:{
            function: {
                plan:0,
                host:1,
                lecture:2,
                assistant:3,
                service:4
            }
        },
        activityEnrollOption:{
            type:{
                commonly:0,
                custom:1
            }
        },

        groupActivityHandle:{
            praise:{
                no:0,
                yes:1
            },
            favorite:{
                no:0,
                yes:1
            }
        },

        groupActivityTicketType: {
            approval: {
                yes: 0,
                no: 1
            }
        },
        groupActivityEnrollForm: {
            attribute: {
                need: 0,
                noNeed: 1
            }
        }
    },
    curPageServer: '',//当前粒子运行的页面server
    dbType: {//数据库类型
        cloud: "c",//云数据库 c_cloudId
        group: "g",//组织数据库 g_groupId
        run: "r",//运行数据库 r_cloudId_groupId_vesselId
        system: 's',//系统数据库
        user: 'u',//用户数据库
    },
    serverType: {//服务器类型
        server: ".",//服务器
        terminal: "t",//终端 storage
        local: "l",//终端 本地
        window: "w",//浏览窗
        div: "d",//视窗
    },
    //分隔符号
    separator: {
        dbId: "",//数据库id之间的分隔符
        serverDb: "-" //服务器与数据库之间分隔符
    },

    //空定义
    strNull: "", //字符串为空的定义
    arrNull: [],//数组为空的定义
    objectNull: null, //对象为空的定义
    tcNull: null,//事务为空的定义

    setBlog: {
        type: {
            getAttentionState: 0,
            newAttention: 1,
            deleteAttention: 2,
            newBlog: 3,
            deleteBlog: 4,
            getBlogState: 5,
            getHandleState: 6,
            newPraise: 7,
            increasePraise: 8,
            deletePraise: 9,
            decreasePraise: 10,
            newFavorite: 11,
            increaseFavorite: 12,
            deleteFavorite: 13,
            decreaseFavorite: 14,
            newHistory: 15,
            newComment: 16,
            increaseComment: 17,
            deleteComment: 18,
            newFans: 19,
            deleteFans: 20,
            newPraiseUserForum: 21,
            deletePraiseUserForum: 22,
            decreaseComment: 23,
            newCommentPraise: 24,
            openComment: 25,
            closeComment: 26,
            showComment: 27,
            hideComment: 28,
            deleteCommentPraise: 37,
            getCommentPraiseState: 40,
            newPraiseGroupForum: 44,
            deletePraiseGroupForum: 45,
            getLabelInfo: 53,
            getLabelState: 54,
            newLabel: 55,
            deleteLabel: 56,
            modifyLabel: 57,
            getBlogStateUserForum:58,
            getBlogStateGroupForum:59,
        }
    },
    userType: {
        member: 0,
        nonmember: 1
    },
    labelType: {
        userLabel: 0,
        userAndCommonLabel: 1,
        groupLabel: 2,
        groupAndCommonLabel: 3
    },
    userLogin: {
        type: {
            seccodeLogin: 0,
            weChatBindMobile: 1,
            QQBindMobile: 2,
            wechatLogin: 3,
            qqLogin: 4,
            passwordLogin: 5,
            mobileGetPassword: 6,
            emailGetPassword: 7,
            qrcodeLogin: 8
        }
    },
    setUserInfo: {
        forum: 0
    },
    groupChange: {
        modify: 0,
        new: 1
    },
    attentionChange: {
        new: 0,
        cancel: 1
    },
    thirdRecharge: {
        weChat: 0,
        apply: 1
    },


    // 活动中心：
    moduleType: {
        orderInput: 0,
        activityDetail: 1,
        applySuccess: 2,
        orderApproval: 3,
        orderConfirm: 4,
        orderDetail: 5,
    },
    activityManageType: {
        dataAnalysis: 0,
        applyManage: 1,
        checkTicket: 2,
        applySort: 3,
        newsSummary: 4,
        allSummary: 5
    },
    pageType: {
        activityManage: 0,
        activityCreate: 1,
        ListUser: 2,
        detailUser: 3,
        detailWork: 4,
        activityHome: 5,
        listWork: 6
    },

    activityHandleState:{
        type: {
            praise: 0,
            favorite: 1,
        }
    },
    activityHandle:{
        type: {
            newPraise: 0,
            deletePraise: 1,
            newFavorite: 2,
            deleteFavorite: 3
        }
    },

};




//记录当前用户id和name、组织部门
CCloudToolMac.prototype.groupId = 1;
CCloudToolMac.prototype.groupName = '瓴码';
CCloudToolMac.prototype.departmentId = 1;
CCloudToolMac.prototype.departmentName = '研发部';
CCloudToolMac.prototype.userId = 1;
CCloudToolMac.prototype.userName = '李开发';
CCloudToolMac.prototype.userSite = 1;
//默认图片
CCloudToolMac.prototype.defaultImage = "data:image/png;base64,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1vBbXvwMCnMKf1Ryw9t9kP6hiaFD91/69pc9ff+996ArN23ecvvd9771w188+/knX3bBh1947p88Di46TvzpF6oyemGPNim8es26j3zyi8956tHX3XIX+AtZAmX4eRgaoiPf8ebXvvVNr0FLC2cNvvLZJyzcZT749YpTj8fasZ9Tjzts6/bRX624dPd5s372hT8sVolZWOHx7Bgd+9ln34UmR3nha3ftdz924V2P4LNE5di3Bq48/IMDtp6kZyZyWJdSnHSnwA/DPBmxJC+0CmaWFH5awbOONCnxor5xVNjBeSDVwuY4f83cB4HDMAXdYpZEQslke9OBkuEjlWQar4Z0D0QABVCJHmykogCNj4Etgjjbq5qMfKprlkEQfZAsRkwUmlB4ryWL/uEj76D5cNEipe3CKc946if/9js/veamNMEd06E/PveVb3nDmdddf/Nr/vDv8WNpAsO3Sbz34AKGdcuv7znnD/96t90WQ4bVhHX7+n7vDz7NMOOAu9132+WHX/4QDgguhvrq7/vE/3kdioQIJcf7R+jxc8546pU33nvVretohXUNzPP7CbPnzkO2i2988LC95334nN/mru1fnHOKzNL6QP85px8DAW7mvPflR3/h0lW5ZbtjwbyBfXaf/wdnHH3psnuR8457NzzpoKW/uOOBRzbvYJw//4T9mWAZuk6PU1OX/HLV7Ws3ooClC2ef96InM23OGRn8+IXLWAE5YBzjvFp5cOvo2Nb+ydc9++gNj2659KZ74XDuyOAe84cZirDCNsLSXed++6q7HtnBEBvxqYkEJ9k4z+p7kg1LHWqmctQH/wQefcmSyuUe4PikJyxYuuvID69fMzLYzz3ptY+MQu1rV97/tufvu2rjw49tn3rRk3ffa+HQNy6/46TDl5x48O53rx+FBxaLu84dnDNraK/F80AQdoju37J1+/jY0vmDrz/laCjfte5RXhP99tOf5MoifU28iBvjw4PrNz3+wxtWL9/A4svXt69Zv/GD3/wZnODGff68l37qu5ff/dAmTHy3uSMfO/cloKArYn9Cc+jOdY989juX37Hqvm3btm7H8Rsb/fHff3ifPff4t0v+4+2/+3yGEE+hfPwfvhcfpO/c1511zmteASf81sT20dHzv/Pj73zpw3+x996nvPLNO0Z5kESYQvPqbKrv45/50ue/+v3br77o1Kcff9yxR3J/ninquCcfiaEwAR1z+IHcIH7uU1ZedsOKI17xR3QQtoQ4V5//px/80oVX3rLy6IP2ueAD5zztrZ8eHJnNo4cohF/05HcC85BTrK1sjm6zl7qRSpqkyF+BBFkV24KjMoWrRHKskAErHRVbRwh52rLFCACjc0ACKDojyQdBHAVQb6uY1mS4wErChifVbmUX6aSno7DYWZ6seJcOMxM+0kZISEbL46pIwUCtOBa506VajKTYdGFux8weOf7JRz/n7D+CUGTwrkRPNqz8ix9/L28Z1cDDG5sfhx287/Nf/ccL5o5c9d1Pv/LcD5GNk7H7okW0DjpQkD3R1Q/yE/Z9e+65J7zxlGj5IH/1ntfJa9CE2YOK3JoZmT2Cssj96N/+25qHHlu0cP4n3v0qbhL1Dc764kU3vOc1T3/48bGVD2yGMuLN9kfj5iD5rP4h3p38tcuWv+H0J53/77cg6f5LFrCEgc7i+SMv+q0Dv3XlSvYDTz10l6P22Zu57oGNW79+xd07xqaefODua9Zv2TZ6/7w5s/7jV2uP2GcxOOLciNPO9DjVd/azj8BNhzea89Gr8dHTnrLvLaseeiyvU1+8YO6SxbPXPDqKnb7q5EP+5arld96/kTEPhd3nzzrj6Yd9/qL/5GmW0Ymp5fc9jPc0e+58uyI3BZ7zlP2ecTTQ0M89nXse2sIku8+iBZu3+Ub1Um51GmdTk4O3rH6M3l6+9vE71m2Z6h987bP2e2zb+O0PbueOD930tZ8/MAr+DA5etpx90i2bHuPe0eSJhy25Yc29V9/9OPdQnrLv3MOeuNsNKx/ewm7GLJQJRk287IR9vnf1nWc/60hFG5/42IW/GOVesXJzl2b07GcetfuiBZ//8S9nL1jIi+Zlaapvr90W/uVrT0MbpOfPmfW2l/72Dp0Ibo/K7PAsbg/lXgwvgR8cun3thicfuPeJRx7Ardxd5s35+kWX8biKtjQ58ZSjDj380AM/+nf/4uDp6/vat7/3uX+8EJS45JtfkDbLwPM+ePNPv/FX7znvf//5ZxHQTJ+r4NMX02/bto1CP7jkP35+7bJPfehdF192xYc+fQEG/4WPvHvFytWf/+aP+V1xHk/Z5uvs6RmGzeT8eXPuf+hhNsjY8YXYjh18YY3fsuBdHhM+3shsk+GkYStK/hzqtigcmOaTRBm+GTuFXkkTFM5RuxjkKALDtJdPwvMUEyOcadBFUKMNNxXFhhhFfFoKo9FBJcBba6vOewy10xSpSHZnXqa9rjYX4CljTyaqe0PctLhgrIshBtO9nHqwpW5MpvOcaU+l09LQoJlfr1xz1vOedt5rX9apSU6+/8OffOr8723dxiYW1arRvgc2bHzTez/3gXee/dozX/AnHzt/wybuxmGfg4cduj+uCoMH6vzKAb8BTQt1ymZHEKT/wkuuEwjAsr6pXXeZd+rTj2UblUP/pK+fG5FbRidnj9m090pmzds2MfDvv1h1+kkH/f2Pl2f+Zw3r/M/sdNyBu84b6b/8ptV4qg8/Pj4yOPDUI5+w+L6Nl920dtbQwPaxiQ1bx3kI7Zb7t928eiNPf73guH0mXBYoPTxct+Lhd770mKuX33fsgbuxS0quD5rxXvK+qX/5j1tX4IOwfl445/UveAqPP8HP6559JMjMDWY6mR3Qex/hXsbk3/zgxt9//lEveWrufONqDQ6wYn/7y06yDQXqv/r2dSse4ne88yarvqnLb1z967VsQ/b97jMPQQTujx6978Llq9lp9mFxa/DP5+TkyGAfPgPhd05+4iU3P7TvXrs88Oj2n/xqAyMWYq9++p4XXreOO0iDfYPcqqazz8wP6LLJgkfG8yDs+B6x7+LbVm84/bcOuGjZBvw3DADC37hm7YZHvJ2MAXz8dSdr4tUiMetE1gYD/ccd8sTV6zf99SXLgae7Nzx+wWU3jo6Obtq6jTur7znz1H+5Zjm/skd1rJymZ82aDRuseAYnmCaG/+zNZ+wyZ/iqG379VxdctPzOVQ9v2gw0je/YfuKR+7/x7DPe/N6P2Q5hamrL1m3r1vMTwtlqgQn0zk3us9561Q/+8YJv/ivELaUP5CfludtC6reedOifvfftS5fsfuTJZ3z8A2/j6cIvf+PCL33yQ1jF+z/1FZ4K5InAPMc49fzfOoKxuXzl/SywrOvjZPzQJ+g1zp4NLPMOFBfyDpk2JFBKmps5AGmcTAehbBCrrwQTOUkBk+jSI9mBD9lWwZVvYeVKMRPBC0sUcIgqhSDmOCizD1INp8nfZK+dp8EUIHKc2tKMQPPwT2aVrwRxFTPOBSI0ETcEuxJBAhxRjkWaY+IChypFpaNpDsNq98W7rly19pP/8C9KPjlx9ktO3XuvJayLuWaQQv9ee/KI6fybf/KPl//8+pef8ydPOfrgs04/+aH1G/fZc/fFi3ZdvnIdv8C2/uGN/F7sIO4iLzjw55H6+FGjIFzf0YftF4cdtJuaN9cdU772BjTwALk8+LisB2m8GB84nTXr1+u2r3vsfhJLFs29/2FerY7/qc0+ab9dv3v1Sp41wI7ZMcWH+dpP73zaEUvrsVRIyPLgwJbxgdEdA7u6jCKAXDHN/j6W/jeueOis3z501wWzv3ftLQMj8+gxzB3ZTzl2/+MP3RseeIqNU0Y66f9cvmbNhs2btk88voPHurDYrLz6JhfvMvcbP71x0zYqTj5h0dzTn3rkly++jut4NC9/xjFAI+DFU+ssAWJITjsLZs+aPTJ04mFL8TSWLJpz4S8eGBiaDaDw0Ed8H1qcOGyvkf2WzPn5bWNLd53F0L1z3ZYnH7DriQcvuvneLbP7+1Y/8NiLnrLHRb98mNG7726zTjl8jxVrN110zap3v+IY6HNjc7/dZy+YM/ydq1a+5YVHzh5i+TA+ODCLZ/K2g+0jPpXDFswHvnHtglkDh+45/ye/WoX18ujrWScfvsfC+Z+7eNnI3F3YoSFz844JPLWzn3n013+6bMu27SwWblq9YYBbYz4cqLc9NBvO0dz44ITPEf/5N3+6Y9vWHVsf/51Tjv3Am15xxjv/kmdv3/I7p7/xrNM//sV/uvZXd8WU2zCLi1HpjLyp/rXrN77qDe++5faVz3vmCRs3PpqxoGG84LmnLtlzbzbRNz++9aOfPX+fvZZ+6ePve2zTYxR4/e+89KWve9frz3zxkw/f/8ob70Td7MJhXW8+8wU/uvw/d+zY0e/tLXtwcgePh9Dxo19858suuub2y5evHWCSy1xbg6XsPIajBWK37cMTQs4cniQyKsnjrAasie5UVEi6FbCyV61VMkV3KVNeSOJgSoMegNCFjD5Imq1PanRn04leEVsw/LcgUkznOtxRxACbjR5jQ/FRRx1qJBsTUqOQg8erleqxISmutpa9uM/eS089+QQVMDl5yEH7r1l7fxBa/OE4dP8nbNmyzWcuX3Dupq2j7zn3FWe+9Nlvft/nXvn7H33/77/qnjXrPvtnb2YP6C0f/AcGmD4IADHChgD2lkctSekKiUTw0MSwWf0kwjkvP3l0bJy5zIpOaeyfsMnat9kx2D+L32Ib5xFk0GbqiH0WcIPg4a2TBy6ZD7fveIk/E5f+6Tt6312ZStlFO++0g//p2oeUXBEZusjEUkWoZ3LDa7/u9vtOOuLENes3bd+2fYifthsc4oFuLt668sF712+i/KL5I6efdDi1SC9f/eCGzTvAjoP23OWUY/b79jUrMVTGAO1y13bTdn50enKXOTy9PrVxy3b2Fn16i5srlJiY4NbIgtloYuBJBy552pH7ADoPPLLl+tvXcc+IBRTTIm/14e4Q64LtLH4m+4YHpp5+2KLvXLUaZqDPANg+OnnJTQ/utSv7rmP/69kH/c2/3vam5x1y0JJZd2+Y2Lhl4pKbH171wKOAApqlXSbWZx211433bBofnP2zW9e/9refeP7P7nMGoAAPgOkAYh2U6t8xOXHa8QfROxffsJICdIWdMeBbKbhn4k/YTU5cfNPKu+978O0vfuqu8+dec9sqJoAYTcyKTtSo7Uk7FT8TJ8Zj6FuXXXfi4ftf8Gdv4ysIeFhv+eDfXH/rin6cR9cTCvWyF5120gnHkth9Nx57bcMQs1h2651Ize4GXWWXJmiPU5Pn/9OFV/3iZnr2lKcdd9LxR9ndfVPX/fLmRx997M3v+wS7Gzy11DfOEOh7x2tecszhB/zxJy4AFx2crKRwaLZvEcf7Bw994pKJHTdOcPcX1WvZNeMqgGMkoRJIqkrkIVEl7BVMKrzJQpLFaU7DV3ivTGpVfi8RR8SKMAB7MUmoSpgcmgpx2qhVDCzUUJ/BhKz8RqiradMBFv1MFyG/V73Slkzp7kJ6P13ZU4puSC7XNeOOpOzS/6GQqH/g2ptXeA+CPLOnLr3yl/fcu5alts4Ci93Bof2euPfGRzcftO+eJ59w1Lvf+up71z70mnd9Atn++v3nPOcZJ7zh3Z++6771//y5d//pO8/65FcuZa0JEVCAuicec/CCBfz+4+C6hzdjZvgCaGfBXFcHTzv2IPY1GTnwedPta3gcg+Uru/oubbDygf45IwNzhvwlxiP2W/zvN65jGxayJxy0eNk9j7LF8MDWwX+86kUo1DwAACAASURBVH5Gr79KwFKepwYmxp533L7srlxy64ZZc+bjVnC7ZO5cd46Aj8ABXu34Potnv/55x1xz6+pFC+a8/aVP/tYVd67fzN6oLK16cNNt9z7Mkxrbd3hXqCrusxt3E7G3gQOW7sJzUzyfwJdsSn+Amg8xUDTaxgK5/3rGM4/ad+mi29c+IoHJyRMP2hNFMSqvv2v96g3beaB1jwXDzz3hgG9fsZLC3JRYumhk/pyhHX6hb+CQPWdv3j7xCA7DiI7AIp86Y0EzserBx56weDYgNTg862e3PXLkPgtXPfL41jGeT5tiU2nhLH+5DsR62UlP3LR1/Kb7ts+eu8uKDaNHbxl79dP2vOjGjTzmr+pzFxa4ETEnJj7/o1+968XH3nHfhoc2PoZn5PBhROHzj4/NHe6fO7t/t912fc5RT1w4b87Fy+48er89P3POc+554NFlqx66/9EtW7aP+mhc3+AjW1jDDDxhyS5DffPQxAG7LzjmgL2OP+rg1Wsf/N6lV3/jx1du3z7aj086zu9mZiXe3/frO+76yZXXocCDDtxPBIoNIuzRh+wPZj731JMffIhn/4SDK6698drrlv3rpVej3pec9owPf+Admx57/FNf+PILn/N0VL5m3YPfveCT/375zz/4yQvA7xOfdOgfnXvmU5501Lv+9DN3rFrLjSXmDe5t89ji047aF3Dcc/HCfffe446Va1mc2n1Z2isyqmnL/MyWNC2YOIIINNTGkd3pmQz3sGNGTuX3CrRElYeEtVKawSdwmJPRNh2TlQu2yEOZwQIh5L+G3mCuS1WkypND1f9aidYkmY+KKQMDYqXMWY+kSKHwGkydzriU+lYC4/PNAMSwg/sHb777gV/d7YNS7erk+KVf+fBBBz5x+47Ru1fdz00T7pn9/PpbDtxv7995+fPe/oEv3HI3t0iGvvzxt3EH9jV/8CmflZy38H+9/x++9am385jZvQ8+RuN4vLgVZzzvqfvvs/TeBza+8azTopPwwx2BNevPfvFJn/3mFes2bL7vocduuPPB9ZvHZs2eveyen83lAQ3WM9zRWDjywuP3ogKjYu2mSZBl8TxG2tRd68fZUoWBAANAMfbCE/cGF+iXLdvHv37FKn51klp8T+mNz9qfuxJ33PcoHcNV7vQyv736WUdd9PM7brxrPaBy2lP2O/vUQz/x3WUMP34N272svv7fO+3YQ5+4++oHN/Jdve9ftfwVpxytn+TyZ/Lf/vN2Oxl3a2Dg6z+5mSWMc4lzZqyqrw+EuPb2NT+7eeWj2yZ5LhYprrjtgalfr/NJvuFZw7PmYNinHrv01ns3ARPH7rfghIN2hd4v7960ZRzPa2j1Rn7ydvOcufPYxV3z8I7nHf8EOUrgHsV/3sEicd6DW4bWr8iu6uTUgbuNPPPwJVy6/FcPHb3vYmbp7y17eISf7OWmw8TQRTc+8qoT9jhi73m3PjCmlzA0wqh3LcOAGZzctm3iz7993enH7fvcp+zP3upXLruBdkTayYn3vfLkpbvO4xm56++87/fPv2T7ZP93b1xDlzz3yL2PP3DPFy7kVvUgCz02TT76w2WA17te+jR2o7bsGF19//prl6/835/9Fl9LFMF5QMXvA43h+vUPcsN4cNXaB1esuOdr3/8JK6CvXHgZLWKuaIBCX/ncny/adeHWbdve9p6PaMB9fR/4qy9SAL6Jb1txzxvf8cHbVqy6e9nFgOD7PvSJr1x4yZe/c/Ffvvctj2/dtu/eS77+uQ/dfNuKo077PVAVl2Sq3+/+3bXqvhuWr/jzt/2u/dfX98Vv/Gjlug3clAFuRY3aIhREcoOycITY/SVgvwcizXLlMsNOhru0OQQzAhOVbrGYkJJVKLfjytlwqHGVqbzr4NAInxbuX7CY7yayrKU/2KgzS2+k6PSMole3rlPI0Ap1iV4hxHAvowMIZuk8IUYnoWIf687XQ5y925aqxMSR+rQ6KstV7+T77Lmn7Xu6erJVmvHAtMrtNF65lv4r9zS1mXJpx6+7QQc1OwnjCufhdPsDNPIOIpQLBVG1kIaWPBcWShFaCHbA7UmmYXZU2XCdwxdp+Rqu8Rz+cGFiRf4SLWOP2zbsm6Abhq9N07gTpoPZbzRyOyLfK0XG7B2yOGDZu2MH36l1JQyj7J/oqVAUP8S+YE5krPjLxjq0mBQgEk3ZBKcIyt1nGGblQ4QUnIbn7E3SgE+dIJtMsNzgw7vVcsbuclZiQ7yCACm8VYGOkBNlOVi0Kjj1oVIfkbAi30dm1ZYVnSXkje0J3AH40l6UAE/OX+tVcPVoGRdMO7YDjvQLJThoy4P9Fx9UgwJDxX6CRx4A4cu51IIiz8/vGN2+fRuP9WzZvh3c4zs1eT8ZqyFhVp+GWnTMoG+3dwWU3uPmLa1xoBN5gllvWW3fOrpt29gO6OPM8T0anvLiO7g7ksO3b3f4K7wg9NgoN2hQOsxIw5gPggqvUw0lNgP9bgggq1ojI6pTP3SZ9hzNULL5Ms6dGL+2TUIjCwrE8gMTjJEsefDHeqhhMcq3gRMoSTr026BD1jCh2lv/2U3wkbiXqFP5gyfj6TK5hIwOLp/lUXYTGlJLCFt5zyF6BTVLfhveOSTHaMYlh1fhSxLhYKcC0yQoEA3KoAhWPOaMdIg2vTpIzGjtRAeNjhQ4V8Fldg5zzsjjE2eXFTm3+oVirdJxoQkxAPj5FdOBCc65VgOLLqFsjIocIUzU8K92PSAmeyo0CZjyK5I+T4bwsohZUyIrYHSrYWU4zGbQOnADUinIWkay0DFEV7DECKRPvMTwEw2y1R/jgBpPTnHuowZ+WduqMWCt1pZ8+iCUoiuoZ+PA9jVCd2FpEJmMIJ8pIWJgBPSC2kRPGr4FC8HzgKEjLMhZ1k4aGLCYtJxa+9n54ZzFXYiTwzn/yAIPsAaH0EjHUMzeqALQdVECzrq4s1YuhVpGFKAx0j970lcFKTDqxfuAgJoRQ6cCckxxsyHVPz5ECvWgETmWH+cGZiZGGnM6XyiCZ7nmoroS18KezA33zbUKq5Vh9i853IPnKlDETvIA98xwQAa5mcqi1NaYoMSgACZjSQ3pFCtgRIE+7ZjjqUGmvG7TJg1lOSliJGspiMb6mP8YlnAetcA/tTwIzo5ROLezaLe+5MF3B9gQq2mVr0iAnj0MolrsTa02RqBiWzKTRDsrDsi3nE1zVZa5zKFxdhTId/RiNrmkxUUEkZAU31jWOIpQl8hn5XXJGZ8RvnBEtnJqq73Qy6lCasIuMg6GkZIlRTKGsXCkzgn1YexpLvJwaxBEqzQQayGElO5yukzsFNNncmM8J85cV04Q3SBkEAfOnRykYWs9+FClGbZoEoYTUCky8syo8yRhDKPlb3xozMbADX76D74gjn0RSqIADfbRaDi+7CfqazMMgxZIMNEyQXruXgKHeZ5TipIEiKQLo+rYCe2pF5XENWwxYkRHsstc6RPeSVZdz+x4OkaA8v0S1mEzEg34CiEZY2D6GlIIBmsAJnEErmM6lKaORKvb+IANOUno2qszY3LsfVQjpZY/sxjEohRWq1FdlOcwYhJOS2gADkDmiclhtABbPAbKgV6lrK3zCw/pLO8S6Z0N+hV6e0hOeS5LPqxHguHvt2vSNShV4nz7eWKCTSNUPuneKLnQbcGxA3H9mJijLYWKkhGkFSlzRmRjBj6rRM6SNJJYBUWBfRlDt8Zonn6YGojDiLImeMTfL/hrrhNAhljJqgfbbiBC2lVq7ph7tezZvoDrHgddi8Vqu0CBrkQ4hi+NhLwmkSOTKyVGJYpvzQ17wMabUYjBVqtCxGm/LCsnlZWkhQhpaTqDJmeWqQsVhxuV5pHeTlpe66hmZYZgTL2kuOBYwKiJcLZNix0xRF3fFlIkacs6FeuDOCklrZ8cjZcraGc0RQd/HE8IH31oKvIrn0mHeSwmz//HXDONjwXO2iuQAlc8KUqLPAokx0iBDGhf0ggJvc4gBYKAgnEstgEG8OFLW4Id+SwQsXiORsBpralKbTgtFbr6KyA0VY1GJHlIKGlK4eGmKMApnEHQAefo8y1nxqhQfgvrK4asJS1vrYReQpqxswhrV3en1OAszaSxmBgXW6b9bGlP/ZQ2n5XkDIgH5BhAsCT4cNBzzsgMOPkRPgxyS0mTVd1YkuCVrml4sBGS2hCDkJ2Ozkhcvk0O+i2/0rQAMiM0is4gdj7iVDMzmuKSIYxXsotLWU0NcGdlOUsOUa4bY1zEdh8M8w1dRBQ4EmeqK+uNJU/gIgEiOkr86payuK7R81IxDUS0EtszVNzxNP1ZhspVOUjhxpycmKFWrc1ZUE4NpJ/QfH3DIw3SsN1FQQ6CijCZT9PToQpQOgn7K11PATNSoWq1gsmzSGmMuEDX7leXBmObT2gfOUd/dHYwoYGCnc4iF2jIvJ9YYLEQ1yqkUMwtbp7OCIaHijWdgL1aTocVcKjosChHxVa4zKlZeguozC+N+G+hNKoR4uSM8S9+sP/XtMgEiJVRJuLFGp3VMFDnNz/KwSinI6+1KNToJSmhF9IZdWw2xBxW6oUYE7M9eKd3yWdA0YZG1OsMq0TN8sCJzBePVtAMyCtyaQvoyGh0EuYJsHp+TN2knK2YzofUKtQ10mkBfvhUoamWGlWujMRSZlZohCE6XQEVC8QxYjx7RLJ7ZxwOrMYEsjvcUQCy8zoeqITQdBzvvzhPkxIuEGF/zd+7C2pO1Ea3naOqDJAwKnJqjS1CWplgc0UdtGszW2sizRAPblr9xlA+zOLfD0hZKx1BEw5QbQwm6UaftVDWgIIIwnN5U3giwAcgwhaJOxSk3ff1uykssoWPMvIiUmpNunSQvov92m51BboMFzmjRzzLQSRLejREajneRyFKOoEW5at8EOhAvifxdC9b39BywkNlmNMZjK2lFAmzE3c950Xzod8xB6emKQdXxrSewdFiz+zpDix8lTkbj2zj5ehWKAUeokYQJLEeh/MMwGFsB4gdTbNiB3JHa6gy80pYic2gpR58lDGJu/QwrmV1dDTEqn4UF6C4q8ZFKCgrN/Yn89VbmR8ZmQk6HhWau5FfnmeHMa+Nc5u1OSAUwrax7mCurIVczElZozBGTTaBHWaWoFUbLxNUJjnJf6XkjVMNyu5QwzZAbSASRAqLxv7qm4dWw6EKpMwRLnYCETmzKftS6e3S6umZsECzXrVVL3eJnJhprZTwormor3oKoTh0Q5gHBgbGhRLdEAqxHtH8kMFm4UJxq0PpbBYetWbK4iygpB4tKYigRB+35ztEvDUELfgDeNP4QbkwKRkNBr9AftCT04ktpjXas0EKWYGPXtqkmXJF/RYrYkh7rWTms0qSFUVanDwbtVNoehJpvH9uAl+TlTXPqsKGDghLMuE+D7CO8+sXzKdl3l2sAPKvjklo+QToF9OmZVN2bbgLMlfY0TFMVWwFlgJ8wJnTqQyypxSkSzOJpDgdpona5ow2UqQ4UUOEKKNXXkarvJx3NZOAvfRjeHTcMfo88t/FmXWIAhYdcAgf7FN2Gxxuc4gaDGJqixcSCXY04BA70Jo9gbilyhhZYYeMY3fJIUabsQ4kwRa5kMv6mOaXkCqOt2vYDpshcT8wbXVYsklCfmxLOoQMTaa77GsADoGJgEV752QPQXJFV4XDoEpptlRk79F/EUi2oZ8GNGJCpokgIKLaGwRbD4kwH0oaKsxhhxoPzEVmly62Z6TvkWxj6XA0WIKuzEg6PRpD685TsK7ZuOVotlhROQTzK0ynvKKq8km2aVcfkYiXsAc+ome6FxBhbwBlM1bYgSyMoxVVEFGpZvWYpAmGmPfBXO2FsIMnBoe1uAGM3Hgik9wz9XVHBKt0QRumtLtEwAf//Lw38FogIvZStGvQOlUzOUnW5VCEjFmtRLtaZyJHy6iG0ao06MbyKelqeA+a2yFMHFwLdMoJPOEwBmLcLyqfBWnrgMFKROreVRooDdsijfEf/mSktT49c+Q6esPII0E603Eb2vggaIZqCbBNvnrcOaTIzlk5k7ZEQ7NYSI70ihXodSGOhpwHL+THRMa+418sqEM8CCgEIEQN9yrBDh0Q7q0k9q4HxYgLMgJAtWUd1Ah2BHeDHSrIkUVcw4JY4OjFmk4ZkMZEPjpon6mDqfkdTLfOVf5YOBey9HXED4LdywgUwjy1uOMTQOiCICJMiBnxOACSLp0L3FRvzkfYDBkjWGcoTHuSTc3TH7KcIOfy7knyIkXLoHfNNgIVMU0vdngRFAm/sKx/wixfhsv40zSiPzu0aGgrLVTbdUr6NxJVnLhXfkYqFKAsW/ZXSqFyTcilltaAGzKhcfhfnojGkxlIGVEV9m6fhY4UmzFygUPuyw6jEUtDnG5SzKFJ3kYoDUJKNxZiuVXL1gf6x1knjHPzbKo/X/IRQKIfW7BpmzUoBn9pwzgXyPRaVNa4zIVUIzeN03JXuJgIWcqJArTA5mZyiOkdvABit0WAj/GaMtVKmzUhGuzIzgg26ilpoTRpEnpxnNKWzRlMy38YCbNkAudZzhRvMsv1IIia5Wtl7iTgK5WkiqDBNsl6ZJPoorQX+k0tpT6bT2hNa/mwKFDQAaJEUhhCAvjQXn/OmMt9UBYgJCnnhodJXAyxQ6cjT392IMI1fRPKS9QVhOMY6j31NadDaZHeToDVQg2AQ+wQzGM3pA1erQTplkAaJcxlZfTeKMpx85uOw6XWDVGYSAoFnQdFUHD7XPggCCDeWCnwiKcRvyPgkf1T1zMVKJ721GQhUY0hmCpu7J+YYvcZBqvTw641CekUSHXJ4siaZNnFJCKpeqBNAITSNs8nB7drcEfMU2FanjUCZpCUhRYklxybIp2PyqycXMy1FjVmp7OKVg9HQh2jpDthQATBDhqI+LxHTFbDSsu1rIg4jlzaNC1PjhVO3VJlGLRe8ao65Bz7YSSqhdJWjyELpEx/Pw5nusH9TQJTPsrIT/Kmg6mCirqKlQqAmKecsuMnZ1RIXpWGDfJzRegszmW3hSpbnNFkqxkJWcukz7RCVjTs7SOouOAQECmCESag6ykKZIBULHBUsSmWRWGLMmGla5rP3ziHEINGKFZZGgEHRiEaMghRpcBanpoidMLNoNgjikKLvG20dkoVOe9aVtsJSgX3hQuZRAINQkZzK0wkrZ0EGiihi8GzZy5YeFgwhfNkByW5s0dJXY8sWIxVU3RXS0f5wdVTDpYgPV9D7HBMRP92jd3rEKn0jEQ0Za+pDZWs51JqEfddkkyMD4yDFaOjDUGk4ZTgO9MI1JIeI7KAIbABhOB78OdnojpJEZ2PDGC5sk3UhlSMH861Z2QiM4bMJZXb6d/GnPkau0UgDEipC/Q2VULMuEoRh0+hAr9D+CBOlEcuGL1esQFHAnGY6WjWqVmha0SplKkc0x0/prvQ2Ul3zqcSdpVIumxwuSiCgBoTTjfe9eLgX3tSCcyqVlKM9GTaot/DqMSn3Nh2TElIo6iW+US7LOO91wvPoozFc9WWu0BX6oPgdiaH5zNwRHxjMw0y+YPC4VstSqioSEmu8plIzWdYWarxkNZKXVU3lXp1Igr8FB2MV2P11DYxYvyOQZ8P0vLd70MZiOg410Egdk4FNZJghDtkfFhmkAnQR2YoiH0yNmUH/mQxLIUDFcFpAk3G+OAoDKiwIAg64Jt1wa3kSKQrQdGufiOTj2hL4j09qI5ktFw/1DURPZaIrtZZEA54LLUBh0+L8nAVMc9I8/Suj2PF0bCYmDLDAfHhPJwOHyGN64H9lDqgjPzaGSrLxg4C1IG2gx2o3UP3YSZ29Mwt48f+70KE62lPgZtkdBtKkRpIwUMJfhsNP2SAaUqtiRaTg6KKo5uSDkby4nzofwQ0+NAViQsCcJAshPGdfBkDUS1qQx4fXNDko8vSJ7RD3gJeCG/pqAYg8mrXVV6vCync5Jr5IdutfDSAdI0N1BMgya5qrsUNcbi0QWjj1g7d7rOXsXPiv2t7Jh+mZYRQjKJoFeAtWsECMHFS8eaXsI1lBEHQRCZRwTPKa0LQXLVovwgNPK9DbIfQXXUtBVAiY4pW0zjqbiEa14jtSf8JaNuYAFVAxOVsTMoBXTW7uKf/TiibRHMNROQqBpLWUtfrDtOOUp2aa5kUgShdoF1pzuytghG+AaAmTtjD/o2n4UPMDHwgPmjCs3M8Plr7OAUiCAyUyE15JcroNCF7aTmth8uKvMRF/sOEI4uqjm1fDeEAjDLw0nJBUjuTiAbJpaX/6U9Nx8wdXfwDH/Y4uCAKBB3ACxwQvhprnLVJAKV2OvBExBQdECGjww6nixhPoLT5HbU/GrvGEmrBAte6DAUcxtPYYQ85OPg0aY/xkbh9lMyd3GgSqtFslFtVigKeCMPfrT0LQQRvI3Ok8msMDsHyQAom9D4aigRVGrSkWJQuL9gA48JW+aNpgzokoEND6TbXLNVCLMtW69zTluwVqSvTpy3VFMAQZFvA+zOGPFfGp3ahuDEsDSb6iZV5UiTyWa3lulJUQZqsIrnay2s89z4sU/8d/7kEXW834SDwUwk8+oUpNBxpCKJGUA+VI0Q6kpr4hwpfc4kXPaRMSTEwIS0IJw497CrncgHrOYqwaRvwyAsIHegSixU5mKMVRW7DG0KRtghKT+5Si6TXiFuZKmjcdZdFJW+Z2KZi2K+2mIuyYiFBiPY9tUTUYCKYAvP6I7ohQzyN5ivj+bEebjz5/Ai9Wc/VITgQzd3YqMfxX6RoWhYTbKQCKS7LliKZKpdIHyTBpS7WApEUgmxKterkeqiDFvuRpB/+FVoHsjFzVy72MJ0d74PeDyjwBZO4HoUg5YOMDOQLLCng0qbnbriQ8as0Gg92pMfhEdzFhbPXcoQ3uhIhvXNSnkIkDHwglvrv0tUddppdQuTntKaaxPWhxMoWEdsV6ePiu2Dhm5y2LVzgTzhNKn8j2vCDt8YYahtkhtfhIx+GNA/pZtv0qeqLOjv9ce+hOqly5clWekcxpjQGP/4bcSjdgqnpM4pGBUTw0u2nmhZVPLKQiZJQripP30ssstqYCYKp/5Igo2uNz//KWXfRctApGsQ0gx5QB1rlBztVrvMJN8Fc0XDmNFJmR037sLrUzowxwKjUsg+S7Q5tB+U6ZBrDfEBGcMnXO2zfQ0aqRMWRCWIga3wBpm6sCWjRTdIM89cGnkLSrNIYT7c1nTSfwCUj/zxaQoJ2iWpDLNMhGJqVzOVyF1KKusU49AQRsAGLyWDJI/CTw31suMI8UxUOmUQoIlWRxzGVRhVdClD2r4XiLOfVO6g3Avs4ojupjk/9HU0FQgw8mknRSFVkpFvB85bUzhOCGKRi5n6ks9Pp7mhkd4NbKqJDvI/yOHzxV28tExBxOaPr4YKFlYuulwfMuYSLUpwyOErOntMBp7nJEtMJUqidShRw5BS9EVRfIhPVdREyPZSUyovEakCtNs1qkqmU4cW3Ftr7zYETdlCDHpZNA/okbRPEXZNyO7jVUrnuudI6/+kZWnE+tCXHhPiLvAW/xqbJzBF+5Cg8ltmly3ui7CxIZLF4KtJEqxdJKephiHem1xFcmxF1IFJjxuKZXSKpJ3ICFS5AOwJpgpx7xlUueNaChWeGGectWYQsozIgiieC9GgBS5rQoIaGROsEcSRDObBOO65X/SsNSYR/SLaDce+uKlXk2z+bAWRoK7rxfMYl0laVcI7qedJoQ4hlAaU+LAYBMi3OGcVTsVqQQOhWooqQQbGmIaSM6qhGrn/U1JyDJjYfBmw2acl3rTWi8qAMGJAg4nhhYOd2L8sW+QwxSrv1IYO2CQNGZMk3Qe49kVj9S990E8hPOczdF96jFvyIy+O9HrvewrS3U2ikw2DZMTkmRJEAhmmDtu5Nt+rfwIcrl6xNsoThq59ZuXT7IG5/uH4xBjt46g4Q8WsR006Hc4cH2IFsmQRJzHA6VCqn5nTAYU5GRSWIo3v7phLRx05CJgcNqL0WkI6z6pemGdQjMRAAVPeddAw2NOFv2qr7umomIbdg3Onwp1LrSY/crYWC4KGZ2G1oMZ+dDgPBIjuJ5n6o7TLyro+LHdsjNYPlxnnvslzlLxWLxSoTyawvJy3AlgsXmZdFDxKZwSmHgsvfLy0pbkTOR/FAAy1R4lUJBa3sHnszEkWHLrVQVF7lef4C/Ysd3uLKbS600lvLYLsswn0dgPJxpO+p4eRYKiE2kTiJCIsxeTeTGvyFYTQffpiYQykcFcOlnlKQ94YciqoChZmI1TnqWPpl0VX56tmUhCqEpBF1bFi62DKJlEpjLRJW6nqGt0khgL+0y7XYfijMIK8wHMIZL6OyPGsWb6mFGgXDghwAGpThlna4URCgyi1Fpmc5L7aTavSTlnProStpIjAJumOAHzJ0S4l7VPFBbAKahq46FQ0aMUm7zCjG7QxpukFGPoAAIaMOd0ZrCeMmSO2bCiVxQHQ3hBJiscPv8gMirM0cObVjjGDoIMBBrEEUdsTpUAMqFgXYpTGhYl5tZwQ0WRRKgTqZSrQ6U51N1HyqQ3REU9SgU8g0VnshUNrJHEDPYjxqtvRdrdp5LmKM8D6a56H18TfNBrNnqxfVNkXyoqQ4htFq8lC2BWCr17thV2ZhsNiti+TkPHkWgnH/yOya8rNHB34xJ8hEV3IIi9lAjQjhVp5r2Mi7N4em69sEQQ0VTVM5J7fHRFK97NSYjrpS+VTX8uuHcKWKmNkaiDgtYUzjMSkhVkDJs6p8lddhAW+wSO184Sf7jSHUWOG+DNckLoA0ECltxBOJDA0jRxhfFFTkLqiHgIjNaBsWMNBe/PYGLrkYy6nLO8VpI2q3YyC9k8JsqhoNTKh/Ey3uJdKumWlchaUNbNERqtoMDOeYZvqGLP139omU3qwoOa2BOI6q1CWj0wgkipBZ9jr8yr6t8uEZT+K51+AON0R4A0UgWNJcUkeSS2MzsMOZ0S4NaiR2Vgh0VM96PBkz+wAAIABJREFUGnfDWyfiSNtAdVtUj8N1ygj5YIcIkoO3YsKJ7z5w40MEwY13rSZ2TLsewd7aKJU3/gMfxI3f4rrgwwIzDnW6c+jUUzppZWOF7lBVLmoqGuorulMtDK/kp3tLlSmfKzX2AA9BxOWKcMIHtWSvWgUSMj7sF330qDQLt069fnKRYA+kH0x3AbY0gemM6bR5+a8E9W2lcorYTtVKEqVKgEkfKItKyfDpA0PJnrJQkpjmlE+TrUkv9Lgyc6dQF2dmWb+jkfwUCYWkZFd/IZMjRpfbMbohHlgW347GElGhXzGGUrY2UUzBQLmlsX5IYtXMSi3IW4EIDNAUotAzXY6FeIs+US9oaGpD8axsoGIOR2ZuxtPVzsOxQotZ0LP/EpKVcq1AYEL61iWuRC+dU/EAJuGkjc+oyCbM5sTARU6IqUJmKFADgOD2s2+WQZfclHaMUwDGvennxgWyl9YyV0qqo5lelpbCIjEzjPpCTt7XnjE/JAXfKRNZ0aNfBWlaSJ2U1+0QObB1cJ/PQgdPAQYiQUSwCGTsnK61iajBYUk3O/Q4XK3E70hiGjtcwiGPlgPfyEcMRyTCGXo2gSTJTCzD0b+fOx1qowtReqm4sqpsVah8cmjPPtMiIYumjdN/eRIgAKLbarFeq4JEgwsSAkgF9colWdLg9LkJpGt9H32qV/RQOKJ2CZbS+8gah7pKZ9eFkCzyXzIYS7Gi6bPKaV0Yg6iG07rFICkZJZSsnO4UVLaMG1GuYstXw9PNVyqk2rWdubNOwnSVLmf6s0fERDsRaRmTvlQIXHNuIrgVQmzCp0TKDfErZ6jHHum6RX142ERP5tzBLE4LRLhcarFgRpE5elu8ArMe8y81lC5UA9cbTfnj1aq+XZ0uZ0esbIPqVYfCqlbtUbE1m9O6Xvnq2UFoHnGsjpxmXUjk1ylS3/IZCnIgRBQnPX7M8BAbKmHD4bkIChbcbxBKGFS2SyuuQTB25e5Eq2rERVA5tFj4gDSLJNAW2GZn1tmPKT/7T1D0bk9mzZ60mnzsuMFHcCLOBR0YvAh8VBooaQ+ApX8bWAgcDpFsbZjW0fBUjyNpT/FVRQ3XLLgedF+DD1gXQYSMpkU1qq5bTLZ6qCO6ahqboQRrooG6ELVEwKLIuUCQMWTn0Vj1YnDEHnVtjaLVjG9tMuFTm3DQvcSp5uyoDhsyiCaVS7nqGjvVLgreu75X+SikBx+kgh0FHNoBNQ1SIEqXF87RWZGHfBNai8nfiHKtl10XE0svIZQl7dE+uFApPrvrYcGqtpc2W4vJKv4qR1tTm1Wy6qfQ/1ukCLTemkFlbn0ykyQIH/xK3sBYQATEzZabpumXZeKGxFDg2+WWoYuFyjraN9LbJZGawZSuiWSOPWyQUQKNYf7YBnIOYM3fSEahwQ5frDbuTaFJvpzCG1kcPpnqraGdll6jRoXKn+RKxu7UYsEObbpsLwXob89Ln02j4bGkSg7JdH+LY2Nx3rO1wWmtWUoXEAt9eeOd4GX4Ykof7kTP2lK2RZ1hxcLQixMgnpan8MU36+gPYARJRQrcVwA1w6DqW9ALDn7nR3FB4MDu43cEQdgHrS/O1sOj5Y9kkhCe3C6pg67SU9Ll9F4DGAZYaBtiG3gBCxm8NO0ophs9MrijzrpTa07pobSt7lWLtXJUQn2Sn77mqsqxTBXJBU8rB4Agp9fZ3akeqfCRySFIgRPYnNUkfA7MfDUmWrRD3CBDxuTLdmxe/LbL0YBaETvyfC2neGTq1THiBpA6sgbB+mE0tOTbnCKUAkSU9LBCVbN2VW8ZaZeo1eslOgp8SrZ3Gr49M6soNXpdU5x6zMxNjsz2MkOQs2nCvRZmJnrle5kK2KuEccQENU6/ohLNgSLBkuaMBIQxLL5G6/uA6Di/cUbDRQXrbqKHa4vMCHF2FaVXKJNtD0R4gRRjTWe/pw8tWSXHdPN1vz5e0Qx89OVHGyiIQxTJU6miZhN2qAruxdgYGQUipBjbBLOM01fRhzopk+ZypzMybKdgIkmK6bxHGGfiHJWZkpAtaIMG86JjjjIzNETL/P1GUDX0g2QBdH6plYyAND9myhzICwf4gqnvqtIH84iAqiiBXrPjsvTwIxuf4Ii3Zj24KZuVS7eEqYlB/yJ4QRzZXI8gq+sRJAzvMgS3EUlJVBvCULLmEBihvAJ5yJYJ+YucyWzi1iUFT8+VBmA/PbGTPqL9IlCowZeUINfSlq+7dHAlfMT70Dst5STBaR2qy+VKXQ2UyJwhbSpyU6LDIG8qATLieuh9kFC3HDXJVtmIEIHkij+X1lJELdI11URSwtZCJTwxJ7m9QiTISWiflujCDHpkheNcCqnKSSxZj9CvREc2nVSFqipsdy3wKdf/76EqOm5C3pZ4MpXZLd/IZ+GSmQzL43c3eEWLyxlvyqQco8epBb11IKQxNa5hHE60KL8oOdM0CqYiWPHpaMEkmTut790of+GjJzlX/aoO8wGxFu53732NfgUtoakGRWhR3bBKR9qNyU+cTvW0M1Y1B8swTXsUmancaJILpSNH04x0hlXBRw0xpZA3Y0qqUhuCGWtZFXoMt44GDYazTjXVb1XSyV6eENblApsLakXl8+MfTLZiRNuEl0wY1KoBHqdHVyL0lUjRgCP3UESQPEtqIhDjet6JVLVSN7iQbrPrZKwwNmNWUSpTOKSncnuJBQLekfkgPxTSJ6ld0nNlpyNSpxBMp7S66pTFBZVMw/5PV+38C/KCFHJmAnNpqFHYEXSI6wFqcAvX+7LiRW6xuPSlAOn4HYE25WvWQ8PaQZSO9lVjhx2BDzQqfBSGlOeRzoowUIGe91Z9GFnGs0VXmMu57mTsyAYUMU0l0xzlbgWSNie5niXUGbH1/SsiXhPt6LyimCuVNKeVryrEXahU9G8kRYOce/Y/hp0vU8OeDgXTBuxWs9UNwc442jImaQzUTF4g0i1kajTSn9QPA1ChY6DJSJIdtlT5Tkm9AjFmwVIpbmKzfKulVZwPGuasoxRea2Q6NXaDs0SkGCaE96ryygsiK/AR6wp0wFR4CnOBD5RTXNpmTFepZ6isGjVGK7Gu0i853eHFQpCWaMXMDJM9Dm2LqZGqNMUHBVqQMYaDsYenhGpWjtiQYukANZwDAISFHvdOcSiwU2gxlfaeV6NWBSHE7uI/CCJ85PGN8j4KPur2CtOAb9ON6+HKEOUCkOEkzDAKGGsMOCcI+BQGhffseJDIxkyetxVH7GoFUSeQIqlRIQ7/JVmEU8BeAklnpHtJdeHBRRMxK7szkJF+Lezw0vSpyxOQYho7RI0GH96ojQ+SzTPLtb9qM9y6WkkIZvMed1eCenyuAYUStOpyJqEKNmFKUPoP7UEbDbBGDet2eQSJcVgczaR/IdB1malmf16yzAxjtHoXUlASKaGmQ8Y+98+ohQwIIWs6kXpW6ajxCe2cEtlMmqLAjCZnFP6fk3ISWSkmfDhsGJuFuCpSyPA/UIKBisTshoR3amRosFrRACtAIXJysXgGPvLW+1YA+aMAlZCyNqwOuC7S1PVkmu8lY5XiAbNOIMAHeyN+6U6f3m7rWZ0DwPPiyNiWm64aV2k8jKShuk4RmujSYa7YQCd1gVNoMZ5jGErvKX80bk15r5DWuZg5yeJcYiCGFVlShoyRSpDDIS2I6BaBILy8idsu9IS3/dE/z3HRQ8AluyOSIlgyhWPgYgfBvY+sWcQOhkGlfQzMArmlUsuW2uPQl1QAVBbMADu4Z84o5Na5YMXQIAgiAXK22hmxvCPbBQXrGECEo4IKDIg03ZVM01fRgxNHSdolcrnkrziQUdqhaZAiWxgoy3RhhwmBoy5Nw0egpOCjgCMOCO8Mp2qWMNKzef+ja3qWYP8KqQEOY7eZVSNp8x2eZfIxhJr9tDFNgawQlD18sbLDnpwRL5GtWNa4F3LamAmhVh4GJdsLtkvvFw2Y0UL8CGsmu1D5KdEakZK0Qo9I80uOSiBpp7S2vLpzp6XI/1+EsB1BV7b0PtyguTzirhKz/caeKom4x2NRK44I5uJwDleywz/WGHZc8Yc7R4/5OHPl+ZqmAcrF/nsMQ0zrE0Rgx6Ra41ML51slGh9UNBsMYsKnIvzCA9O170acIWQppjIcHNJLaJw1yrZjjux2bZmo8uaEkFfVeUlRHxTKtUw+ilx1qhjnXS849LyohnMxbERnGQuZ6IMmGTV1lQoKpcUq91BuffC9Gn7Xgyf/+IlfeEB1xjKJKvkPrAMQ2LuogfXnOY6sXDz1u7Y+vtH8Dlcu2RyVO4URI5yegXrgY4oXbPMMZ257GRnStfYHCMLXfuCD3zNEupJeKj0ADY6qVtizy0ihLnWQPmximkcgtvkcdK2pIFTwYhojGmQ4SrvMOB2VXysUuO48Djbbi/HIIHoIQOmPJoiCy6NW7BZpBx88/KKR9+DDlUuFFFcqxZDhyIOEXKjBPXM42PWRTiEJFLFcBRqtkAteiv6aplJ+p3SqVyX7uwMOBiSnLSahMfSCYnWNFkUbM5Uon7HKtF2dYaamZa90YUayy/rNz44g+RCjWcYk2yEwB2+BZfdRwQ8cYx4y49GQLGRgmLUMPNKJVHVNHKW5y4rVeKXH7IwkZV0mNtexKdb6lmkgEvigsuZJOnNcd6fGaWmCn4yYwpPXP+UhZdjFDOxKO5OBl3kmYlXU4tZRliZZshpHbs+rRS8ZaD1xqVC+PSfmMxZkV5iX/Mieq8lKBIrCFQ4aPVU0LY0AHYjE9XZazQ3HRpoyiuFkD4KwCeJvNvNFtxF+qoM1jRxnIagYse+yHBcv8bqJvecicBRkNL+DkZ+vroDkahWGlFx2GLPoE4cjncngAz74Deo85O33RByBJTVt4hrxBmqdwG5ZE0IIrP70JJXdED2qAc1Buc1oFx2BTVskOOizJHwPjdxEKe0eil3e8KL8kSqgG1LYQawpUItHS5MWSvQ7Gv418LBNmLAvYij4F5gxaglkqD1dtoIPzZ9BUANRzqueYogdBKPAB/KhD2nTMxSwmTpaKasTVBDHzJBTL4WnlJEsRSFCXp3YtH+Bh/gdDkLhgzjHDByxUGxcWDNIPfRDTKoEqXNeJ/mUa0JyujLdea7sHFmaYn5UMnUEUVQbw2QaxATbbggzWzZTQZTiOfjCZokjVySr5mNn0FPauvEA537ZVvX6DhGMzVRqRDyBslWQAxpXmUIIdfr5gTsZrE7RCsq6/KlR4WMIa+H9zWzn8fCJjjZDAgFUXGpZOaorNUaRsKZ+axDJpy3KCkUpkG6To6hFKhKRgSamzAZEWgvKnmLGXXHrEAIcUI7HoEitTuZR72Vp7RkFgG4AuJpjHMKV931FEN7wPDU8zu8fzWavyBu7GjUcBzg0ozggxroYsXuxIz8659RKb6ogYQfsqPuyylkSZVJ3WYIf59s0+KkgHoXzeyS8McPvxedfgNH7QUOOK7/V1T8ssxzRdmwUpikhLpnoBTuDPM5bjVIZxhK9iqDRnIggjqERV1ANSuxp84MdFZfKerqjCmmPwEf2PsQSXScrum7J2kX2ZQRmow3tvO7UOkXO8D4Yg4GPDMaIRrUwryD8t46WlriI3fAVqRJHK5ghaacFS9k+oeKZCdky8Nmba5x2tEYvZURQQX5kTawjiHjO8cIHMaf51D4sbERoFEJd1iSXDz4hXkk+bNyr06FxlYzfuCQRgjoxKR2S5tGubLvOIITDfMsOBWdvHzdkeGhsjNNBvsgIROOGdM5bZpFQlER0K0l+qoz9iuSHRfIYwY73Ulyk9HJxYFUmBjip9bXgwOEsxXb3YM06zQ1xBmpSWDv9iME4yVsjJGUhetSyy/XxHK4LOGLx2nwKWqYqVquJVbMzdQVJS1yzTzt6+MmpmFLkK1sOu7DSrTqkqOwwyUTrS4w8GtutEfjByHmqFR+kj5/s5E7srNmu8Xwc0puvdk6ODGmQghwRBLXxSDCZKhHggJBPc+h3eLvEo8EH/HvIDi+j99Y83eSNYr+KkyNTOD4IXzhzKCI0euM9sUMiCOrkXKVEQmpGiRo+6iij4lK0VpM2yWiodJpO0uPgNJ1qXFjQ4gKFYAfThU5SB7fU6qC3AU1zPWCzvA+Bg39pV6903aApRDMZiHmRWm/ZovdRgxGIbhM5nYhFaBsyGutoCXuqutkBXkKVgChm55DGbZnAR/GSRC/KlRbZkMq1QmnSdPwhuzw8OgKzMmhTemV2NhEQKQhRgDQMzZhkiZGz38ypco37nYXokdgpu1F2JJAse1AnbvjLMHdkuBEAb20b1d28Yd6/4inPidgH2YqIt+54gFu9ufjtyJxXffgWNPLJxN7qQVXWMPgi3pekMJGtU4o4Co5cmDodLU8+Apng65qxHKyXmHSGIiVSCTITvEwslkYB5ExHdxRbGzZD47aHflvCU/VsWTs/xqBSOBztjoiWWVZJZmFU4pRqjaVd+TfYSihXi031RSpka/hKTYnihkCxVY7TAGYCHwz0oaFZc+cMeDuXb8cIEMaYkwmQQtRQkwUc7Ukwnxz1lolyBjgcz75ISnF8Xk3h8kJJ4jgAeSxdQMnAE0r0CQyASMNQoAL48NEdtlDVGtZaCq1BB3HmZT3QaFOtRitqyEsFGWqugCNYACsBiCw97MU6xBRnCeKucDQl4jQ0SQHLwCNpLidtK4Ud6jPdIK+wGk9NBfIVQSGjW7Y0+ECdeHnYRsZfs4jsVSWdfhYQAyrSVT6hmCQXYzT2Ya8bvdAO6RI49aMGuClDMRlyYTcEIFJNxFpzl1mkEETEkYBIAxRyyccWYDxHww8oQhsyjaGGSGZ2ObbR0hHG8oSZmZXTsmcUppS92tqwTyMIBpG7hrLEdqp88ptzPB7iQiaeyPDQOL8kSMRDGvwKgoPS0YBpqsIeb5BzZqIRmQKbuHlSgVJQx4Jx1ulWWkwllVvckNAy7ah6aBXDGO4bLjeEHosFSgvlY9OMJm4O8IPeZUtIVayUYiQq2SLeAYfndmfsH5GbIvikLvZPE7FBRxpHLLnSXg99uYAZNWdt/ivRmpM4f55VW0m1chatCiRsq91eCOF0KnAMOADIjNSpoVmz5wIf/KIoexxIS7+4VNFo4m6oQxMdXlRCDkANOkDgyLBmcnC/g0YZzTSr+sR9Kua9SDxvo2fu942LU7VtQAsR1PnFK8il+hxsgpdvOhCnDPSaCBOFl04gr2CCJYDoplmnU27U2W11xINwMdLl2C5p0YG6zA/pBgCFHqj8olN3n8Nk2lE0GJBLx2Bih5doK+wKH24V+QM3GrirP4IQrM6QgXpSaGT4KHpQT2r6ompAXkN1tbU62VVBU1T3qYL0vw0diljeyjMIoMTQCyfaEToOfBRwGCOHka6IMnlgDlVU/nciWaRDVGxAmtZYr82IW7ktWR9K08KMIl0ODfGnWiICPGM4WA/qkxlfnsp8H7yrVQy//lV7IsSDvO4pL4xzzRkQgSyWVsQLOLRGmsAsoUlMO3RrIEMQ0XERRKInhVIe/mXVPNTRe2gVyxvml1vawEsB9ArGMZdMjnOMZB9NF7uGOJ9lv5Qt2UNb3aYp4g4+Qi1qaEVJh0xnqDFXZHMcaaj2gWZqC6lnhswnyHkSUEEEkjmNeBbcKdQpZKUoLWlSwyoMNe2IxcsICMItlQF+ab3gQxzJ6AU4EEM9BT7UOLUbcKhd9Q5zoqKdm7Hc8kGQOoQPqtPrUpMgdCoOP6o0zAEBfuUvTKNIO0CbFT6sGDQinyZbn2K0qCiqEoPQXW1zABNRbuEFe0LsuQgceZTDeKbqrSUDTftiit1QgNIAzu1ogx0S/hoDZUZsBmkoIm/Bh285mYYPR168Dwd1mUlDBHsDggUSNfgiPIXsJUuXNnbqVE+KznRsyWTShP6QH4RmjyYsUKFOrJtAWdEB6AM1RDxRI8My8JGxqgR2BYOmakFJ8uGWSHb9N9umKulpLHcm/vWKTZexXGNwOrMq5oIEHeuqClIywQc/1cAaAm4nh4Z5f4LYMTwy7Atos7HqYoYvz/AaOTjHsjKp0Qo9Cr1uLcMUJ8fu1YXxxkY4aiACSzSIARoicpPcGo7AjA9+d0Yuq6K68UHVrP3Hxib5pXCsjhfEdJYmE9pYjXbNqtMZ/KQZuerUqJlbJJaOYWqrWCk0+RpOgKn2+Cvf4SBQhmrjKAM9skEfjlEkIqWpYlkg4VLjfzqVOq1z2sUMAAaLlFAnXIEgc2YPDMzCB/HrsxHbJ/Wc9gEO1WRvJiYhUgQ4ugTYIYIoZLADeT21GB0NEbe+OvhwsHEI8GWPUi7tUFzZESUQYRXKYNr1dTuJaDvsqER+GOspiQZVa9wN8AKfIh0WyIjTkR9qtv+8D1Q4UtsfrTOmEQTgsAMaphQ8mVNBiWgXnlWIQ0rnor7b4oMeeh+BD12PeB81fWNRCdZrbEdhaEnpBRQiLykVRfmkm83m3Au9EArdWTESjlBNmCImJG2cEzg2y1qJjOuCnRCM4LY82MHU7WPF3hzVDSlkSQJpPfy3bmOg+4TDop9EXSyuU6KKmTHjelfX0j0Re5kqItyWhmjRqqgEP5WpKZsUcUN469AA8AF+jIAY42yGDAMjI7ySNhCSnTZEZPKHAr0LVWYI0jSQA9LiiENIw+vl2z7ON/CTiy5ozChO6qI2QFehIGknzyJk5zl3wG0MfPPF2ryRe5IfDs+AZzIDPtyVZ67SbdZxUAUaQhHhI0YBLeFDXcQDKMts02Ec6jGfjnCmBEQcAoxGqUiMOqmrKjtJZa7+sr9W5SjVcU+5sEAhVZHhXwlxB9VPy5lWLM37QYCQgcGRvv6RLF5wQLJmQafqjHoOWdRYSOG3gkGHhiOVCJ20rSbkO3woPlDHRzfYmN38qcFxfmuQX1vJ1qyXfPG0FWVPINFS/YEfYnbL6H+eooWUh4RZDkBXrUZNHXaoR5wLtTk5zrJTpDDhy8HIAT5yyY7T0SjUaLFNF5q0HqWvGvGwZToMOKozklROsEPUMFFbp7X3gQ/C+EPGSCe7jWNYzkrNnlBNiJNmiBwjCojGRRT7K0Iq6M6hhCevrhOnw20D1gIlpncO8j9d3mvK4VEIgg9S3kfdONINqaPzPhDFZlqj8CdTLSI7KS+aCPtenxkiW8uo0q2SrJnfMlOkEarRE+pU15wola1f9ZeZCazjjgx6nxA7xkbGARAdEfZDWNSwHTKEGeQ7NSgdStBhyLJuhY4EJzC/EsxTFKIFJsAPIgs/HYgwVVOai6rBP0ybWzMEf4i0gqbr4QvV/E3NcU0d+Ojn8RC+elcvAcB96B8LlMGAFgAlTQ4WTeVc8sVvTIbrMVGtl+oCh0Y+NTHWEjrRoWVJqKS6FBzFUXESXsl2gfynJVubDmSrYg2Q8hqI5WHB/pMQ/cBHYBVaVhwanD0bB6RPH2TE8cm74UUNB23nbgRBQO+McIa7gJIDCo6GiJ3RkHYcKFGsGJRrzNWsuviGI24lkzPxBPGQ2MwkwnlbAtEACsI4WHr44AoQ4HXS1d825VQRzhn14nd5Hw2JKV9IQQIHUuyAVHxIGmlrGbuq+kMEYRLwzKyCek8TwjtN1WBGezXysj3UQw0flmmuh6IJKHAs8GXQpTckQZeqpxhIl6AVe4XIfy2l9KbWDF7474KlouAkhIN28GmrCe2jTijhn/X8sIyHyxP9fJctcT10Q7J1IwbiYFmAUUThVMT80q5y/CZjXKg8ExDneivTy+6qtP4LqR6dnEU9KSaVylIz1bBmzIiIG5LbIIAIRjLEQxiDwxNDI8MuaLgjM8J6ZkIsmRjisSNu7urODjjDQEGqRs5bBSKlGPWFGSKpKx0SmJpSWLdAhFEhmMT8KJE/zmPkGVJSCOqAIOiV3/6YYGrJ73v4Sm7n5vG+Mb99R8/LCVYXbjKTeWuB4aRNqDoucFeIWJ3kiJVye7WmSZfnIog44oxYq2/9q1CAKykYiYRFsuNZ+XLdfANntuhHWm7SM+7Y/o+2NFMv8xmmKAxxW2Hq4ZlUsIO3IPCUDMsH9lgFHuEjKxQhQ92xdaIG634KYood0aniwUXBVLEQjmSTViTHrZv8/BhjjJteQRA20CdFE15SoDGHUgRoIDIgiGgi7qTQNzRhGX9/GOqWLL2rPh2NuBsiSB3jIojYAY747AngVd4H/ZSKgXyIJEhNMSKK4pRIMVxbkwHFYVS5PVZ3WxhqO2NHezth7ltYnhp8RCg1pPYx/8a8+jKTf8ukoGeVsHaSOa10l5RAu5oypuNSUyB8Gsvx9EfSFjZo5MQEBOrdf+kQhAWMCzKkdP83KCPZaeyAZxtsOqLxkqA4h4VKIGz4LV5luYVO4HZKfYKZCVWnzqYvQStlYMIE/7CO/nBOeap6EoZxNSZAENyPinFA+EkR1jJc0A3h7R1uqdJOuoDa9kOWMAwDPRE20VQOZs9JsANFYeNYJpHlhQ8SUWNkli1NnAqauXcJWDDxYII/ig1e8DMLOB0BDmP8joiHlYEdPFIBJc2OCU3jLCDgVI1CjcPxSMypOfAATNRqnaeqyuPucuoeQpWTHZh1894gJVgk0xBbzgXT051UWXoctEQIRLNPCmSXdK5ipK/6LRwT44N3H+iATOmGgB1umur1KRtKdaFWCNLiCBhwCbXq14iXZiWcBEwjOT2Ot0+Ga8VUGPLOub4AL27hzjkD20f31CCcciuEAJcOcjOFWx0QoEQ18hPr/Mxf1CC1KhPtAx/ixcTYaKHG1Bjrzw5KxJcGH20jyroSsLEovfVa6a7Egf+SxfbkgQ1mdoi4/+3KpdyNHpR46tztqExQ67IcZaT3qy0zza9LMZJekXSLjdp0Nd4l2qVcSV5VoqmU9LPa5TPo4FnjRaCYLlBXieNfuIqHb3hnB4Tg4gVRhA99EKripmtTkEiT8t3Yb5YWRrkYVizEv/BhXOwVr8TRxsw8eyChMrszbb5Li1yVliIGKyXLAAAgAElEQVQH/4zZ7IZgrE54PMuF6yRQ8IB1VjHDwyP+rMY4PgnBlQ7v0ndL1WlP4KbXsXGHMWaWYVS7Ib7UA49DHXKtyUyDGoDN4/6AQxhjFArr5PKPfcqnxVCWplI7fTwYO9g3Dn2bCPNOe+6dsagRlcOJ1s5A6G21whwXoOwhemUwxlAzLjoQ0Yad27mSOOqpfrBuI0A7MlCxCVCwcnqJjr2SxxapDU2erfC5XWKFo7EGItUh5EFbjPEXvfhGivDBhhH1iPU+fP4G3K0ErCoucTYb2xBIXxS9GEKETqqn/RgTlsj39mkBWVm38CyKQ3qYVQwLWNIYgbTVBR6k7bhSFT7gPJ7ImFVFM+/NNcU36In3MaHHAXxk8YLf6KmY4pE9EbCj532ElhGs1r+xQYNQXRwyzlEadwO4bZr24CN3Xhx8jkLjbshCRGUl1Efi8j6UbmbmtMpMpdf9oOkeM11u5XjBkCLT6VbJK0EOXQzMRv5TNtlmJOE3nVyhiBRZwvRiRCFfafiqgzZGDyiJTMO6fxmHOSW/+JSsvDTjg5mCj4KSaKLKdknomEGl6gI/I7AtmOJKirR8m7d0BjLjxYnJWQmjAgx4FWHWMkOsGkbYRw1wjPOIGUsZN0MScEMY11qRZqQNuRVBS1ggcUSlCUGEkaI4yEBHEhjj8KEVp5pokeBH0oqvrKiGHJ0alKdL0pGlfghBCljxKzOaFtXRpqapD1I+ckYBvHHRwShemjBAIZOrlAhkmFmXZACanMGGdZkj8AnobbwJY48uEcvoRM6l1hVQQwwb96slDH5BRHAVRPzWkCBCg1y3/cxNQzy7z2pH1BA4nGyDa2hXB6TS03HYhQbVISEVQ/uoFBLwR4habS1rRUgzXfhCEvwOBp76GmJnxA0R5giesad7nSNiJZkvxAtXeuP2m9fUUc0G9EQht9ulHXCMFnB08DHmM69Zv6SPsnvaNB/55ZGg1qPApvrKtAtQkD2drw7SDW3vAwfEo33nxX0QsEP4qPEp/7Hz0CEq5agqcT2a6y71PqMx2zdEe2FGU4gao0/zk2E1L7Wy+bAiQZvtxTHfyGFWy++ww/VLW8KAI2xGCiK6IYBhyqQiLTle4rpi6xhE2bD9EcFgg4LFrbNzTmGzY1RdmG6hlMFJlwedLmmRXumZ+aouhbSDpLQUFzFwxgcLZF5MoSvCfiqd7i8DjvgfCNErYbfVHRFHtUM2A8Cx7tJcEOERMuydvnaHNTkBD0rbQoprggRlbbx1fJuVfhVAUQalGDuajzHX4FZcwGL5+d/8agVt5UoqOrqiVhcyWDVF0W3VAwXKZvLBBS5WhgVyyLZqE90SaDmyxCwLRzp3I+3WVQQNPDXm5YTAh1S8pCZIG8OsDeOA0QaXtIQUscoQ7lR5TUANoAN/wQ7BFNGK50IQ0tNHWgrL05Fc+E+50irNVx5jn1kDABER8ZVZxQyir2ERJAfby+yg6oqg7DbSVKvzA8SiOXAaEJVpkQ2jEbaFD/ZBWL+4bInrIYKY3zZQ9XfsmHShAqiXBGih+S5WJbF2cuBbj5Q+6L55zNTcHvTwmbGWLsfE2T4GUcxJmjZoKaH7tDtkvmVHjmrQRm3Qy6aIE9VZsotUxSllUhKpmaQcFxUTHUcCiukcJgodetiB/5Q7uD4PUqsYP1PbKdImVLe2QIh5x8i1+UhCidYC+lOD2p7/kadYlEYLRbBOqn5ymlKo1fWOGuiUVZXkQsX46YhxeIsieCE+4T7ldkc9G+JWCHdkhr014w+NcmNmYpynV+OGZjvEIQAZ5IGIZsbjq44JmfYbtIx9TzUaIIdhkTGiCghyIcPFTydR+7Sk1k+gCOUcwuT42gocfbdFwOfqD8u0ghBzXm4qVglpokgoryqNxiEbJot00IP2qNpjQGjQFrLlj98hfJAmx3zp2DAJ6HiiQI14hEMtXlEh5De6KesMjkokQZRxySLHhUmoTGR/hwp5MFNFRKYejqRSSVEEGqEuK12r3PKTVsKizJEgA0kwTWeMAhGwY9hvMQIi4wxUepXDh4mprljMBa5lqhkBo3qFq1F0HD9hAqd1dHIMI8kqJj5sbYv4QCKeDlWDINaTdjEHX2iFA62QVllkkFbRLF/xOOhpwIK0kJFbtp0bgj/iPM1YYx60byQUinDeGlEVTQ+hrBwJttQS9os1U1UqodOiOqvr7cpMQmG2WvVqyPgZbpIIEBSEhE2ZzfJEK2b94nOzHYK4nOHUK7E1CYRRzUB9Cx+o3CMaFSQpkNZcabKriVF6d1M7Q4f2eDFPSlIhF8HVTGeayUBXybOQFJJJZLo7gR2T2ruqjaXgPOsnuqXKMx/6sroh2QQZ4paMP1XsLRm9Eh/IICAdomQyjTkIH2kVu9cBxw1hq0NYiQNBGYvVh1bJiUMjfDaB5Kh4lUWVAnuxIvmnjlwCXCy1MBtu8Wo23u4t1zUjvLTdEWzaUEolbtlRjSQNpWBa8dFSlnSlJslQLGCB9caSAyXJkc2ZDUmqMY9InHFiQhokI5YxWCJIZWJQLfIgYwmMYBeCMoChZI8D5XEa+OjckBKlCTSjdkeFzx5FK1cTNtqCXFgE48yMhUtSUx1my0svWc6UD5LOkZtwTfP0LuSwXleWEUPWMOHaQM06pbfr4e6p/gjOSFm6cQpLQ6HCKGzlQL8G2YqWiDCgIHc2TYUPB1y3b5obt65lhI+MRTvJ0NEJsxK0sTrxUq5bjLwUNsN+yJ85oUKife70UdUbGcvOOKaph/B0vUYJPlV5dN6Dj+x9+ABIVi7tSZD4IMGPDhFtRjNgNEXnjj/cPv4CIiWiqrMNRgQbasVkk46ejnkqZE9yGQ7/Rhbs9YknKUdMxel01OZ5V4+WtSYqNDcJq8ltXb6gwqMXhKFhNkD0PkaGtQnu7+bJVZbLfpWTUOalJUFIdNSnYiZ1mxSnAzNAZeR7EmNUDfJqbNQYCJ/pwHAXeVvkZgDNQAduAQscEIDDbUdhG5d2PIkJnxkxn71VgUYcbm3UPkj6dMYApmnlzdJCL8kZLrNu05C2XPxrzOlMvCA45tSPViwfCJS20j01PJpoCGlRDRaxlZYk2KEKyM44BSecXPAB9DLQE1Vyx1zJ+SduxUMoukqzREW7O2v9bhuG0m+VkePiOsODtBrV5DBWVjW56UWcZ1X7JxiWuo/pJ9k1IWds0Qh9Ejf0ZkPNIz6Ingh+BztovjvA523coMVUxJoIU9yFRRhqLhydEeUmh0yBA6X7BgO2OfLMmPBBujZB8rNY8fEbdtgpYTex+lK/FYd7eU5wUFi2O/UzlevDZFNRJXuMVSI679WWaev7aZSarV77yMjGlhzf5ScRd4sXH/rw8Mat65duM5WyGp3UIwQ2ElNQ4QFrFoidjmMxMg96MADyLmLqoVlVQCq8yWT3b6oF+7YCpWKrnNGkpb2Sokkb5Sz5KrHKyKMFbcWxyaBidPJ8AF7IJKsY2GQrBPsASHxOBBzJnV2XMmJDDYLYGO06e8arCYjogOBoCSKOGndfY3hlfVaN4chMGIJFOIehxmwJBGuYeoqCI2jfb6MxIbHxh1HxIzc88D7CzQTSAHP/5IjbJUAFe4KOWJWhcwGRvHkjqm2aCK4BHLgebRhHF6WNwEc6XgL2pthhIvqKHpUkjcl5adgcW9V/MNdEViMqZ+fDMenUngJ93AspBElt9YrSqO9/SKqknQKaSWuqq3ehytYpuaXKKKKElt1cdcxyXbkyeXnfS6cOR9R7vm5A4ZjBMdQVQ2L0c3iSpYBCMKK2OTQS/Y7a+MgsGfek2zctQ5dhm/Uggmj0SX9Fv1m2FHzwUEzhhe9Scr+jpg5xRNcjoB7mqalACg5VWPNE9QWY08b05RTlsnVMw4XBVC8k0/Od8jxLJmUtXh/Tmudi8qtWVUW4qFdd1iGIMPMx0oh78DGS58c4dRL0anokPKEwdQ90xFx8ehozdzofH2WH2qDZ0CpVecIHsOahjGKQRjNAsRN8tOr3yDrN/sxUpzyJqUTkiU4jlmm6v+WbbNLaoaJV54a4lsGWBgdGhtmkx/nIVkjnhuRxVdwT7ISrYggTlb0FmYja4AOSbUuVqYs0AMCWCCOQZi1ncbnJX7ovDFmK3BYUoDqF7giE0BSWo4vhfrw78bzBZJiv22GlvhPAG0qRy2UULxzFaB0BtIqIgQATdnGGka27aWmlDHjrkrZAZwGpFewoi+JqeFKMVOcj48qMDBKblGBGH+lKACKYAadBk5aAgvnsf0CCezEpI+G4q/KiammS/0TVdERsvSmfkFFXFuLfjzoxMR0ka30+c0CAU4/Im70RFOyBEWgHrqUsJA+RCvYjrHoNgsSZbmBRc6IozhG/A+8jjofF0W+Yqh7lRF4EaVnIgsUtj1qzuDzR9cjiJfDhxkB7d3Tu5tL9clgCKXKTvSdtZDS/U4iclyT2Yxd6KTIN0QVRdX+XCItGHsms+r3anuYkpKlchaUIcBRCBxOwJrfvAh912wXvo4MP1zKAiC42LkjXDsoXQCJLOSCix9jY6OjYqAkQJDYSBOG5rZidWtZy+Q8LGJQjk5PGKMmO59hLCVRCtDQf9jbRjIsxtjqXQIqUJVoWrgmOQjdVuafHM+3w5wuHXMWMzGJbdTgOSS3BJvFDtCNtzIESJMFUYA74cG9VC2EPLm6IKwWkgHrGAzUcHchkJ9svYZV0OsAsx0zHvpqIRlzOFHxAFjdkRODIdOijlroTBGcyf/tO/iBRTQgiMVrbDw+xL3know4rlxppTZ7SB1E3ndEupax91LFHGw4S6aiOnKoBtShGhD0SOc1Cj/KOKbadLeRDMyBIgZhEGjuxDNQUhm2Vf9VAQ7be/bduDkNhsTSaCq1Wgx9JyGUOtBKd2w8kqM4s4uovg9opBT5sUnmUUNnkDjs27Sq28EIjYfHSgEMEsQChismOFauHpalCYxyJ8Q+zYEm/1o9v5mmxkeBI3ayt77zQ8Vm5CB/qIaHEKZpdD5XsxhG5YlkoJXWxXWwIP3US8+syveJfF1Ev6eSm8Rk5XvJ6i4uslMKsPogPnuo+IwNOVLf3oVMFcIxkLZM7uBawYrTmnTHHPwGNomodkODH6I4dgAljEUXTLqjDwmFoasRuky9bNHeSRSlt08vphB6TVcyivVDa8pRce6xLmaigLqJPu1V5jVQ0F3AnbMibfYCIFsB6ZXhiZIK1TPwmcMTFTL59pxvCV2lgnrUM/jckDIIdC5baCiHNRXZLGC1YHY15F1gGKjg2kCt8QsFTeJFWj80SwywBjsLoAivSnpmcUCqYVAhSLEAL2KKTJvzujDJQRoKqI6MkDUkv6pQRkt1hvsH2+cvBWbEYPv+/vs5FwW6T6ZZJfHv/t41nbOdU1QLtcb78h9EgxLXpbpYahLQtFvUWafwPIGzGIZNN0RCzyydSHIEPB18Wv7IS5y2GurQ8xcBcZNmgEfwHIlwbHznGQ964aTARngL39NRGYoVJsAMjRZBjuRvTByLIKimbaaYFkqY07LAdu3AwdHARb8scMzrQEKYwZCteqXtYthYPRRDhnfDCh2ulrXdofbjAwRLgJi8unfqwVtODhy+EHXnenRsWjS+qWXfsVaQWSF7r+fHN9r/uQ6wUnQyGCHvsn8sTMGS41KdA5Yqt4Xq3nOY+LvhwPA8+mIPPDOklOj6Z7ToIMS2FhJE12mg4EoaVcNY5ogYICPL9+/e375yBELRc0lgE+fnl6zRH+GiFi+9zIHtlkfmw3pwuRPpvHsnPdcwbB1+RpQYtZ9yO77KFiN11XLdlaa3VEKyMHspgfLiYCvE8lxFNBBVXgh2izGWwd53NcE5pLoiAvs5curOd1RBGvLc8NT/1EjNGJbQJH3BCop6hIclFSeJAhDQn7DTF5xWZuRCY6WFCOonKvfvEF/Dqocbg14bqdy3SyO+Huo7Ll2WHmxK0yOWXbgsilBDkmBhixwGO4cgGkam/wceAw8HlgLWGs9PMX4i57Uto7Bg9iec3EEnBljg6P2avGmqQxzfsJVTjG0er0KqF5jInW04hXTQZTQMUws9hxzoqwp3Qo9uh8EFY7HhMD3LKndvgaJjqapQKIgiSmQs7xLw1t1C6rxl8mLy40NVm0+arSLSR5ShUIh71xH7Z+bEnXQlXlZqw+3LGHFcBw2aKl1Z3qqX6hZZQRTfTKVPKihuTW+355u6/qvAYWfqu4omB+EOQL5/4nNRZEPGl/sJkkCy6xzhCYZMa/I/hxwD5HoL8zQkEeUcq5Gf6w3MO72AUty1HSXMib7G+lqb0qQ1i+KvzUk7wNz7Vm5v8n4kWrtjhfJVCJ1XTCI2zrggFrobQKR/K/Ngm92+bwYCALY6oQTgepyrERkQ6mky7z52HMq7HbS6jDdJqSLihtxJSpBu9EfihV6NTXtr9JHE+a2az3LfdpF2aPxjpnPrtz3dUjs0pmj8OF+/x3eA526YXzSAIIyUcPgTwPxoKk40rAepeVrbMxIYdZ5LijfkiiGOtQeoIDUGkwBh1It/moEnfBqAaOLSVj27EQNN6Di3XEonQiI3ak/GS35m4+jni7XHsrgO23dIRVsMfvVOIvxcNAYKhibOvHWKHPVmRTAzlPtNjUPK8SsBlmWvavjykKZlMD9e0E9IMEN9weawPA1ofrnoY0KZf6tZNM0CoxvvL7eDpmtdKq0HLSW0uhjjPnRYuYrEV2XVj3nxW0tmA5fQ6FW8aVyfNi1OE4Cot/WYRPjoe+AAmXEzdcdY+hh2uD3OcFlqzVnFTTzjrrTsDBBMECwQT5G99nnqp3yAxGxxcFJFMV2M5AJUf7L7UCSJQ5mMGaOtOPRrtSoT/H565n6RXyGL1WA3r3m+7hgOR12oIO1Tdn8rnwZxxMe26ZgiXGlXashLnbAId3WpHowXTowHj/iMSXRBxHQQdoyeqgABCSAoeB027tlMv2s2yGOVVeQ1CrZ5/vri80fIHmYyFf34Dnj2eP/YNETdoSR2DF+cY1iiRk47wQlxJg/KKYU8gATrUi7fsxYJnYuKo8RYeTOQvbOahTEgBBerDU5wKpQQfnkMLCELfPoqLMAWKOnyZjB5mSPLLKb6K6NUBu7m5iJeRDmwdqfgysusXzD7aTuqlD1NCimyK2Rr5RmZuhB3BR3dF1z6WQRa/4MN+6SAY+jmyPoYdScgbFeiAnPTd62HA2QrwIY44f1GaRO5uCny4+oGWVuM6eATDhY2Z6oN/pss1TsadT+CQs9gPvuWiMn9XJA8KVuvxjS3lnE7Ft/QpanUU6FRAEGEUZ4P0yHNmCDZIxohv9AsfZ5Zm3eBAKKncGF/BhwYIq6cYHtogf/8dgjAzYAgykP7iISk5oU7ACELc4uMP2/KaAm88AR49plSl6oRMOx04/eL0X26ZYvH/JkOn44Y6IZVOm437BWOz1RAeuXxlLvP50x7KYIYIhOKIaML2MjXKLjowXeQQAanPi/Mot12qbtAghn0GpNvh82yFRqOpPl21e5j3IvdQH4XkRRju5ZBEmILDs+WjqCjeD17nhXB+0wCgUckjc8JwEPGElfG7ohkCH8b2UcvGYWGHPU57QeK9fJDif4GD24DAEYxWsHCXcoaqqg16YRgkgCsC92ODvIRa/021jBpVmFhH0RGrUQXNcgqQahs2RoDmR/ToGLwBBwOF4GOb0N3K4XJGW9FNvZ88CGuUtHy0YJMXroAPXcLHp8VxNDoih8Hs3JKwxiEBN3oI9O316CV9UWP7PoQPIOM8hUGKH0wPIKhBaU3yAec9qD7C05hki9yp0F6fRZMomEQGuQuOQ5W+XtwrG6Fz3LY8n6LVY3IVeariDxWeYBluRgjA4W/ygt7e+Qsmg6ixJzKm0l1hRmbpHBnqHE740ABhD0iLqDyFwQB5ewNDsEFAEGRFKz6I4btw0qwt4ytPn9/weaUNY0Sc7413FWM3m393YA3PH4cNv7r1MV3FynWiSSm2XnQPh9gRDmjOKpZbn3/yUIZ+sL1MGPzhdAbnkojK5L9zGYaWSq6zigMiMhz40BCZAYLPXdfMy2/rcou2nzHyoj9qHsW055oteNSGujSBMSC7oZ0M3e18LIgNwuZ3iMNmxzBxqEMsAhI6wkqJPHCA8d5A4FJbiXhqRBcdg+Ux/LIpGIalvqwPi2v4W3ADdsUtTVlo1DfVcD4dIYzGaYT6Ow9qDzhL+uOUyROhmOTniTiyujUaa/Xyx4qjflAnfM4cYtUDRjQl0QDppRUCvIz/7k6woGR70pU1pkc+qBFwPAgiK4UPq9Knk3YmN5HNp3MMnxkgGofbKqafuXH2jGlouBqyvR5NXrQ7nM17wBhcHc94reoYSh9jazw97QJYqomcVSH05lNDweIJzZH18NHczwWJNdrphKvP0qbgVhC/KIuewOpZpvz6AUAwfwEpZm44kaHH2R1NXm5faXrshK+o7hCkD/b4BPf7u/OX1kGcyhB692EMzTA+kQKlNUGAJz45yDdL/ekFpzNFujYx7RjxZxQcBowh/+2X5bekE/NSVzov06FAEKSnxwzxA3fgyJZUtTuyPmaDeIlri6oWFOAgMMBAdNigtj0Vu4zKrw30Ki0xQQldNuk0ewYF15aXDbj1siCknSzF66FY0Alyu1Utc8RYG7datoijtyite8V9nuUdny9cQBYa7dhN9xhlLgU4rPwlSAeXNDP4kcrGIIGDBQW8DGIGNN3gj0lilx22/Ak9Ho1l21rMOlakMcNryDbdXwOVI/bguuXflbU8TkadnHXFuhy+WDUPufXE/UaN8wscIYiIADrM6AA1tqOUSwPb7ShkbI4TdpC5tVL0GRiOTVV7DZz16dyBIFPhQCS6hC8WXOvjrJseBDnbxvqmtGPLOQvq32Bq2FHaKui7rCmwS3kXRxYpN3DIDMbQot4HblHaS2rrfFNurlqxBY+dl7/seCtsaULn2kq8upW9zstjPfwfGHQK4yxmNshHfz3WAFEz6wMesgRAukFrfXDn1gBhFxnPX4YfLoawmEok2aCJFQ9KEYCBrssKH2wuyxbRIGcM0745nWKIxXXAQMHoLxQrX905oZjwP7GXAarnqTFpcdFchifYPi11G+ovPhPyjYcwP44Nwht3fTmkhzIqGJYSTghw4FCfgxDquO1BsD1ztc6zl1qaTETQwEMZzZ9BQhn7cMfI6Y+n+29eMpARvvuNVfK6AtxMLzU2Io0jqwekaPzQaF8dcH1gWMAnRTz2rcOFMyU0HAYZM0nupTd1urekRTpIFfkLNUiFPkdVR5QXU/zpyBheR+yt6yAj1q6tr8QbrpRRZJAFc0Qs1zE6gA/BolVrQI5x7nMW/ewFAoBlYSM1QPK1NTJGtEdEkIDj5d8aFO6FD1ohjO9hJy8htzfehxLPBfLH+ticxRWQs/bR0ulrvcNx1ksumR5U4p0mhtR18SIm2ORHblxmSAkkxZxRIx2mcpLBxzcmN26vhSLMt+Nj7sVV+kZbnUdlH//UsUitL3HhzFAEydY7DoK4XsGqnYeLF1S2TqJKKhgGCMLpcPnj/fv7O4jREYy0IsKTDTLTHG/VT72oFdgAQJjF+MVjMCYcAUMYATQjziA1+yFXjvAWKLL4OvK7dxN/j+0K2qnRsW8vdDYklmuDsNGNT4cAYVDCcxnvVHzEjEAfDhFU+gaiCHfMkCwJSWOgQiNjjDHbR8yAD1ZDNEOwBrb9jG0j3KKSpPjzQg4rGDWPf67td0wgO4zfuor2iNxJf6R+B5pGDC3Sil8wodINbIZAq4c/3/758cZoauJfpDDRzTtzQ7x4ACWYeMCieKoTSm61q7xxhYfT/3c/ng49OsgsBkobeGWeHAzSjfwTYnTEpNMTkm0L4ICqwAw/sPBHN33mTsfO4YeOH+zwpnDx4oCI021fxse3iGUBDawPjWlDFKeZBztU2evqUX1ILR07H+BjCOJa6V0x9VGL79r6m+FIDkwJO5AmTl99PB2fzIhTP+XmmHO4Ust545byhif8T6vVlavWsVKe/9stxpxlpw9RYLaKczlXSsGlmb5aX1UuhnvwDjGiKUwLH/6ihx/jP1BywMUaq2A8ld3Ih+PHTx63uP2UZVQ3gMwxl2EC43rIsUEYZLwXwbrgTBDw47vo8famGZJj+5YwBZu97cogWpyqrenp2X/05dWxJzRan0sCK22Vpx5u7TCRUcdKCINfC8MNZvQLg+ozD3idwggedM3PqKp3ODecJznokzrGHpesoVJbgIw9MhBRP45slHa58Fbs0Z2HxktySmJ2UojjZCVV3oNi2aNpkxYKHMxeJu8aI3eFA4Lze5SuGLIIAIhs6fA1nWldAxCEQDHiBRzDC6VwgcPwapYy2ah//g3/y6UxkBQT6MQHG0TlZRBUw7r4KluNR/Dk2EE73bNcwslkAEpEjbCAXvnAZdBggMuDIwJEEBOUpK1hh/OUJQEWKHLAEYLIBZzwL6za59EJhVcBN3NB2OB5votSIsgLPvaw1qUQcIRpi5MXRYXkFCXyTKaqg/xJZAi0WGLiK9FmOkpQHqMISAhkBTVmXTQ8tXJLrWCZP3onR5kML+M5P1eklKiUbnW3lnhhE7nasTcaGh5b9QgwMUZaAbHPDupVOXnGYtmt9eHHEmaAuI0d0PC/5Q8CTGm4l7seCSnc4pWBwJQFIn58+RyOkAkQIZqfZMAKyRDfA0x4Sidi0npzKV8XHl92/P/dMiQvqKBGZhgYDnTclW2WQlDKX5++Zoa4yZ25DOZRb+7603Y8NepDzd6qXGlg1GJ14FAJ1ZtphOqtiaIlos2gtmzTapJgieKqIJQyNv5vek/ickB4/YcPjkZ8kV+5QYNS1hnp31wcoxDDAZI4WEblBx/CkQdEFEeWyAEOyBtYOId5Ru4NR7LeiJp/mvNk0/1DyOh4ERWxaFdJUQsjvLC69e30OKaYoNVq8iwfKXNU2xkGfJaVcDDs0LGW0ioAACAASURBVJpgwsJs+bE4hiaBhSjD0Y0hiwO9DT6qSmmeOg2JGvJhCGJw/T2Cs2PIAMVBtO3tY9/O4IOF0mf19PNX1zvwW0B1J6YBhtLENT4JEx2JV4aojt7TY0wihEljj6oaQ8oWX8wVdWU5+cwTg5VB9azUyzfSHDjr8nSvizxRxZnyWz0JRQ/KS1OyKaNTFeFDGyQcGXxkE4icOsvJYFgsZofnDDMG/4CCzWObv7j04WpIgPL+Br4wNGmPQiNWBPk+6ABFvgI4xwoBQ2zSFjlcNHM9IXq9ZUuC/7kIuhcf4m/yKymt3OVVhIkFPZBDsoAX7ZhA+VsQn/sOM9gIfHz98Y2efP3MS7vaI5ohfvwbe8XPXEAX7arbQBBn1NunuamWOLLvqrLEaR9UFjJr9xx6TgfO0HmiL91rQBXp/9/devhAwpFyXTm1GmnR9HDL+QJcCyKOO+/frLAa46i51oeNJeY6hzdaN4oOCca++A0dNRkNEXWU5VCj4vCPOLknmWmlLRMriLKnhiO4ho0wUM8jDoQefDjaUSQ7cO2O+4RlqAGIZCzmFwYYMlXUWY8MMO0O3AyQ8IIwLQog6biNn37XY8iExuBDu4NjT178bqPPWVj1OI9se+M2+GjbmPChUvOqi4wYCxLMbA0aoYGDAN0VyiiPY1Ls5QoQGXNkVU7yEnAVEBWra+CwfQx/ChQwyaw6wpXRO0etnjwlL+vUqTIIK15AEKUgllE0G+Q8iGEfjN3V6lpgAEIV3Zu4F8B4/vpUU09w2TUmiOgCDiAhDAE7nAKcdRBuz8wWXH3gGe6bD2IwQTaVMXysEA2fAyLSr1Ad5nU5NYPq9f5ywV7hxqyF/+WbPy1YfHwnbiOakgT40Lg/B/EPe0PcAcIci93t3/hh3a++aceSKuQxlXnnoYy/H9Dbs5LXKFAH0HPgA+MEHOEHtNW0rUp4x8ICUw5rcyL6QFGkpUaXbmMWmxZb/wJFqzhml+5ykXt6kBbIoOsMT/MqAoniv4aJ8MFQoseEByK1Us1rRmpu/YZxsp5jgXsikmYiIW0qzyJVLgEau5MB1zpI5FXUipytYqfhHLpcEJaOS5Nj27AIAvJpMr2wg9nKe5s7BIh9+4eAx7E7wouhRj71kGol6HCTF/tvWEcT+oXxpAKXJ6vp28v6EAk2c2n542WA3EWQuw9V+Oi2iOKj+khsSl29p78MrQQp42jIm2UcPT4UyKqXLLryUviQTguUqYIGFYcx80396E48ucya8IgqdhfVY7B0k+ZiinzxIBLdwtAGGxFtYHEMEB++IHN7nApUtSxFljmYzh3ZFRDsjp6/ACKYHgMRpi2bvDDsABHXDpq/cOuGDvI4j8Hq+N4EBhvki6EthZymmcwwUOVsEwUISISy5PD69Onpm3093ey0iynBx/gnHwywKq0wKxU06T67Pvj4wKdv+13uL1++MYvB/tAe8XnTV3fA+8JdbEDUqptNeUb3WCTxyW7Wh8901TqGqMLpoEG5HvvriGGc8f7PMyCz8XTHv6ptolhuMsFVYyfsh3d7FZWmWYuhc4iQjoFoRnIfl2G1ZDV3wDJIlW0xT6LdOjw9XKYL+1trNOfdslbxAwvTC5iUJVmGFuQx8q1RxivYeqA47Yj/IoV0gMEEoImhToRmQsaS2OGw13fC0k5T8eJ+7jj4AE1eFgfh8EKLY+YGPrK7ICKC+g8BOtHKv1y0jmIIBuvs0hY+CHw23NoH66YeTWHuGqqrHmKH85fGkR7skF11lnpryfptUN9WbKggkQ1mYohTyk5ZTXq51ZD+nTLLa0aKebr+q1ChUs21PJLVwfWSCtx0i9Swg/B1YHerVLyPq9btEUz7QcSOln2KX53UYD/lsRiOAJ2/uAiSsXGxAxvE5dNmMTNANEI0/7nRqdKQQoXMVZi4ABrf830qgxNCSHH/q+jF/hH+1X0ah/XxyL6s0+PbvfRcmh7uMrrIRf0rWj1WAoNSnsjICOwd5jL8fAwEb4uqL/63GvKVjhL29+368TsUGZ2iU44EGdM8leGRuY2uACYpjWPlOSBTBQlEJAj6ImLEHapvzGF5jA8+XG1RyctnqsWOS/AHO7gn8GNJnz/xTfI/frn5nd+j4UMBbI9kbtWXR37IUroM0FCzajOqCq5aWTf2UTVB/xVegXzHg4EGRmiiwODIwlROoBj0SWTTBqmyVUUDMI4YGoyDDBJRQ7tg86sNe8NOPTIfLnzM0PDR7CDjWQF5wYfz7AscqW3AEYLQaYBEdeZfIvi/bhK5g2V8Qa4XO0CNu+tU1LhHU5itpNLXnrzcpVMhHF4Qvc7DBXqMHLmk0bqfHhAbx5VN7cetwzGVRkZ1HKFT1uExNhoibzXIaAN6hg1+OE5xhUeyeeeX1+BKGFhJfW+VMormCCzPAx8ughwQETN9ClOnVYayhtLeGjgYO3z0A/hopePnrA+3kHloduQNQM5eVXBnMqJ1ePn+TisuheDEji9f/hY/WF4VPgLtMMQ7KIzbXUsQiS8y6tU1E1/uJCxC3v7ubtbkc2U01PfJLo3yqh1PZPgO86dv/AxV3w1hFvONTjnP6vcxP2N8YapsIi1NqGAVq4LeR130we4ARNwb4l6ztokCiYeiRDYpGaNQUoIbNqa4AnsKgcqp6jUxOdo1RAmLuDvRCJx1WRf4wKZ0DenzH7xRA5IxYeG+7mfEes0dWVaXSvwopC3SpK1eR5/id/7RMKWRToQOcu7gBRQ4xCKEPFpABzuMZEBpCmmDNHpspwBnx7D2j6aHZsKBj1kNrJUGH009Znoc3y+kn4UPkOXBEVGmY3Cj6eGlkDQQ4RQfRZPD0PE01sYE2XA0RbB/Ji/2kGOTl2FHz1+0PvYKjElnYVX784NLldFOD5ns7ZvAVd5xH5bQsqKIOfMooEQOQRNRYroxkr+Si7GRjQMb28WurSd3M1Lt4yLtFij2yWp1pzUaWggtIzqBa3f4tNobP1L2EukvyYpGHX2D480dw3wRBDPkLnzwHHfhY4Aw2LI9msIoRBFEa/GPP0hyFvOJIt/BjbOICooIJ1khocjo8Zbpj7f80TfMxkdIohf7s5P26PTvORv/20U8J66zZoGOi1PQfqLkDkKtELe6+6bMZ5/FMKNhMfVbH3TP8mqLKr8KgWKSWTNE7XMAMiaZxfBjjfiMIldc3RkCosBPZzNrj0F/nBSsZMVTJDUI2p5w11ofQMkrEiZwp9rDGJUxBPzlWxj2DoZR8QIgBwGNwHMcXaEshrkjlE7wbJjUWpa0w1/odCB0qBEfA2hJ3WJMkTLIYECVjXFk5vRJY99bMGeAbZ2DNg6JrJ8EGOFAw6/t8sjccC3DwN3uAUw4hcnE8BEMZqLPYgYfe9ROEVRNu+NaH8IG1dJJA4MMMSTYwlOtdfbcE/RsgBOxzj+Tl+YsD3zYK0GEcWPAWYwZYorscOTIOJgj95EOl8h9UUm/CQAR4bhNyw4alRQPnLk96RdajnKacN2K3KtTpvYvESt+c3Cu6ig8VRv2WEKNcrEYy52EJ5lHpY4ZF03pbtjRs5hsj6wAlZ5SNh2BcB0xIDBQwYGUrdECqjOXGSC+VrclkDN3QczCB+JTJP/8icgh4V0IyQwZargeMhsEX/zACDLPsGzbHQSNa/xL1qAwCg8LYk/cM5QEiuqiXhD6V/ou9fn3NumPQvCJdLaf8isjX38ybXEW42pIn3NvIuMvU2GG+PEhnbva5VAtpo0MhJZUfS4DcAQf6ZaGgE0JVTSYllrMsmrwNOE/fJMa52Y9Jo8EI6NhB+zwroblATCowq7ncphDBso8E5wbGuVQZ9GnQeoQczhLRVRZMyVWJp8iu1QkxFjpAjM9qu1U24zFPI6p2iJskJE26sctmhQU8d1ICli00aNF0OyLs9fjzErO6sawY1MYtBFlPJbI5tbHACGSCucLH978Yl+3MU0Pe3uc6u2f3pz4FnYCH1pWosNZ+Jjpke8k5QEO+9chi9M+Rao9oaYCEsobFsZX+auR2J2ESJsTRxwiZq8CCiNTotR669zJCqNUYos1ptSnAzW1RPxRZKBc817hZTDT7+7U/ntd1gLVSpXu6jtKN3/RDPGycauC6GwtPnuTCskzHP2KMtMV5y+8BdPCh15OU98BlvUhdihIzA/qqT6Xxf78cSYyb2+fPv8taoggB0bcExKM/PUjy2g3MFQxaaC+cuIQJ5Nxhzkj1whcF2Pt+GvMCX1MH1VWYQt13IdQv8BTX5ZhSwh9ATi+ff389v6Fn8rMDKGD3v3Yu8Lo4z5O/6xeEmETlQki4oUaA4g4kmycTB4pTEmVk7CpM6WtZIsdakpHyVn6r66sZkRoFqqK+nT2PEj2+TSHm2hd+nBu7jhnMNO5T3++MxHjG0U91t3gGvkSGZWSN9QRMnbIngsZQ4dV6933Q9IrTyoWcwUREIRxo6ckBh+NfJc5CLg4OpsCHNnEpKlKSidSdGh3kE3NGqyIFIQHGWLHcGRGR8o37VVMwdbhdR0uTIenG/Y8kdjh4EPL4iBIRse1OHxhf0n0XF7IX4UdCthJsYC66Gm+gLH01I9CgYjyq80j2qMLaLaCjSypo+JOBrk45O4qn8zlXjWOD5ylKvecLdq/p5Gz6os1ZnXepEqfrFbVgVTRN5FC+GjV8kxhBJGjZiKIBekHbvc/IH8rID/YhHoewbTv4xggPcp1IYQjBFGySq35i7uw6iUz8z9/N0OayYAcZyKTISKItFyizjM8JhBlgXDr5XornQ/z1/sPPjlTiP/iuNlWE+UTtqhqW//AllY6eHaLJfID+PBx7nwe67Ka+v6FryP68SFNZJYfZNI0kgady/RzbG5UpX0odrqRPKOeX3+s8foi9cpfNllN41lO3UPaoKkWLEZNAhIaXpOdsEAsKwLBKdZN+ak2FnR2/MWUy81N37k/fPrzOx9k8fMU/PTan4zZFiiHXFKiu+rTIsDBDkfHjPSDRLtMmQ58GC5PaELYQzMfWpGi3wdhoRQqtZQIujYRcDgZuQ9WAA6f0bY3TBA5a6XDiAMiBzICji2yLgZlE4kEkQBGhg5H1MC4S/Mgl9zu3xAdxlM88yH6PnYZRvDYZUbH8TU9Nnmhe1pX6KBDKm1KCm6/d0qr0Ly5wIKq1140b65ZDLsPfb5gFBQi6JeDwoHQhi0JVKLjxN0Jd3PbF6PXF6JvxgRJis6ThSLTKy9yxJfDTK9AOSu1OEgkQF/tc4YGqOFGl4HIcIQrAmIIrjagSR44EWlXnyJ98+kZD263f+z9716EuQaI2DH4aAKjIJVd4lNC0S+EOA9yIvP9u09fZob8rSkijnxhSRXHD1D63q63UF7NgyzGkXy7nLM6KHzx4vJk5yfbf11CDG51WUH/jktZBBvYpApdTGV8A/Dr+yfekeE7zKyn9utUWiJ887UptyDijz1I3GQIyxAxLbB0KiOBD6olKp9wBHkzV8nKSREKW9CyKbm+sZIpiOQOmeu4RCsgc5iKZx2U8l1Bf1aLCRm/wIdQz4PFn28+LmCjE/Dx1+fecXdUOq4ruFpUJMc/9Ts0ZEmjgHMLHMSkJtf0KE9JJ97uUsR6UCkICkFY2mU2C7dc1uWXutEN7A5Nj6yJgxdc+nQWsvZC7VDjzGUOdlxzg34OL+hDa3TnUrWjLZVPXnTIlzrpSaZxjGcJQDEgIG9zDvgOb7XBh8scZ6PHsIN+Zph4w03E8+S/YnCAixyy76e/+s5xcASwoI34q/QwGFE5DRFzcCFNEyoRVWaa1PFvfVAP9hwQIYPRuLKaaGEjagMKzFBRQl2YeIp9SCqmNhYq84pELk3TV+XI/0EQAoAI2hWUqGYnXflTDcUhhj5NAiCCPy98VkC2hWwbQNxABqBwgCzZH85Pcc5glOLQX+7AKsaEE5m/uP+x2AFAfGYR5bOTGVCj9RBNkRAECIlCll4de8iTkUR54T7yYKajFmpj2njz+P8VZ6L5PzrzFZX6vMwQUQSY+EqvWQoBN79khjipcabGxxt96psZQhehy1dVELdyFAuslYcy1q4NYhdYEwlQSDAV9dOldvD6MAp6YLq8P1BSJju8btt3Sn/sRl1dt2p7Awf+8zISX3aiF+fDFEKJr4z+2ecytgu8G4QUP8qn8NVSGtSOkE7JDykMMHzQpPkG0CrVjKRynsxFUQiWCJpsO2q28uc/GD7wyyWMjv30LL4zFw+07AUfhF/wEWSrVFvmoJbmLMcPRGCiiEjSPQzLFZy8jlf5CCtG2lXcTA+6OnTAz+jQ4thjWnadEtlvU97OxynKJi18Axx4wYa3Fg0PE8ZS4SMxJk1Wq+AY5HHl4UdlrCP3Cu3akuTSl6UKLKfSUdjspwjnsibBSJwsXrErqW9GvSpf6ESaYHSJydYbgniBG3A0Ph2lGrkiCOZJFNpHSssI6FRgHCxw/5wBInxs5nK2sQMgLKAKIP4LHoMPTXzFRw31ricVDgwW9PiWxg+a/NTHQbYlhI8BACGsh/TGLnGuRPDoBtr8LeyWJOMfs39v6ZAZ7+pq5F7mn5iHFZdNi6eQZX/PvEhBihSHhQAio6CBX5Z5//GJWQyd5NHMm/vcOTJDeJcGLfZbI5RSAaxAnXhuE8xlXBA5IIIUXE2WEj00AZ//DvWbP+FjIGIiaVOeiVNZKqBKr6ZqMyP86G9y6w7NdAz91xhRxmx1eWMgfP3ry/nxeVcVzlijyUnJ2qVOPwQZjlwECT5UJqCEk5fRZFhNnT/KoDW6IIxZzD+CBU+XGeQgCNDQQ5MHNfox2gsfZ0HkA3wEN6miCtVUpR6iX+pnqma8UE6X0rtYefEjZtpLuV0PZdgCv8OHQHhnLrwaJ4i4ad3X5J7HLnBnRa3uVk17DmxrBUT8/TtICz2Ysar+AgbpckzmDruKkuNkMHydYjz3RxJwRw9OOkRal/HGrGCqc8JEJ0XPUqt0VtEps4uy3cpvjlNgNRwRe4fQ0BAsuMlrpRvetjmBhX961u2EgpCCJiOKDMSzAgJGCB97EMPUxXXU8EOf8TUXglBMocpTtZrDLhIlK8lBg1k0QsgbVkgO+AhE9vUQ1hsk8kfoFm3QxRICVcUMGZAcJ0Gu/suRIy4vNznGtzH8cjSZL4WqYQKY4GoIZsYvVkP4/QeWQn5+Y2PZD6czrIPQWebrroagtjy41SAFJqCtmmVeIJIoWBBBfoIIxBDjhluyGmmjoyU+xS01Z1154Vw9hjAPCiUmqZ/I17nudhBwnI+bsZHEDuDwDgFmMW9/aQEynLnlOxoTlG3WbOySrJGHvGxPUlUOAlJwA5cOk+qMpzpVDdwgqVXjmw0qv36+/fHebnpXRTMu9O/nf1yCzwwB1WaJANKw14mM8BFSRO65NcH5bk/6Q5D1xMj0Ll91sW+440dZ2OEIPqseA8tNT57JC6ix+Usv6fu+HBlg5dgh06lcWyDmgRXtakme2R7OU+08/+5Xphzi96n2NFjhEYPtEZHii2pzZE+11S/9V2vlrM3iOH3IqCpYSUkGDSkK8h9nIFmuslPNLVDRalnyGnqKK/kLHwIH0OEN9oCImEIyDfB/yst0hn/DQwEizB7BtIbKS/s+hQFKwpBgRPC4BgjyRrjix3XRtw4SCzBhhbgeAh0YLoMQwIOKv7x9bqO7O921QchxiIMDMRPzYDyRRzHAih/ejXPGH0WWcfFRFhM2J/9GF142C1Qf0QxRFECjTBb96me32hUCjnxpNcSJDNvdma7x4v8vftAZpcYGRR1CDuDBXlojur2KoxkC0ti++ygB90jiZhxNC+nXQz27AGWDkA3YRnL9MLUy3vwexwjyh6lCEC0RhoCLIP6G5vtfXxynSmnj0ULp74uAMM56axpfFeHS0wk/FNi+2UyPtXZILgMdxAubn3+9sfTie30tyosivVx1Zy7CxzE9xBd4u4e1cDAEkdaDFHRs8NFdqkiS6Do5vOshBZVPVYMKe+afpOWvY0LjXTSdDdL8xb2zbfEQPvrAx7U+wmBsE2E8ZtdFG6pi106dQLlQbKPo0F++f0QzYm57/nhEB1zc72aPmzHWVzGhHBybEXPrl/DRrfj9k716MpfUumTEXF0t+sYolRWxpGV33HQrwBm5wmtjyZbU1Wf8kCPsED4GHCAq6GGOsq4t6oQFIvkvFrtmgIAgwIf7PdqH2h4QV0A8Nn+5FgjST9pKEK4qPMncmTFlDFl8y5UigAR/vZoHhPjRoe9f3SLinncXRA6CaPaNKCeP3An7s59U929nXrpzum/Xul4Pb9FTjCT12xJSqU9+ouAJi808E3UxoYcy7A3hgW4vy/i27tsPfrkbY0SU2ZNdZGCrj06hPsIItbEkobq6M7WtGtq4qhXJ08YXAYY+Ommrt0qIIjtcfzjO+PLYk/EZChpAQDXMYkGH3JkhTmc+f2Go8nuaZy3ikZVl5MAY6ljz0qrnF7RNA51s9zR+SDC37rG+QVT+HGaff71/d18YsNWSmnelY4P4LIaJbTHDEW4wqNGDHeEFODKVBDLUztTzQ4w99vK0Z2/szM5QgZNed5oScAKpQYVZK45odxwEOY9smbA0hbnGmwB8uD8WrGNxxWa6HIjIwmG5txAxB1V3L463GKHEwRoH0Rcah0w8VQUQGS5ILc5a7USkRzblSplfr7iuMrlO9EipUDlHoTSbfIovZT6NxCWKU9+qbP5UfitPVx132hozQFQnQ4up/Vu9laR+3Jy23uXCYU9p3TPmmscmL/i6UEUQaf104JEgVRt7E2+hlYplK2dFzcLiQOQna32YLxxUxTeH3K0KgGCDsGs1/JA8iqsfPiRhxHAQI7dMWJ8J5eyvGXQ75Ss+Uyypd8MrbGyJpy4Ayye7miGi7Xkow8/ZfXVGw1b3L4R9sssUJzOk36b0mZEoIgPnaYkw+ReSsHCZ6ripSxWSgrDDOYltH+I9eX857BrTzPw67JXC1KeeUm4loRfF5byrbbCZnbPc25iSc69oQYSHSJPrRmhsbUBWSoHhbL9gLD5MPsy59NKyI6U/k6LbQmufrtNriEB0PH/5/PP7d5/bvvFkT+DVyvDBLQcTKtyw45ge2h1qSIfq9MCHverFFiINh0+F05CoXydk4pQjCIQ8KIfpz6oHgefJS/Bxlj/apf6Cj+y3brXC8JguW8YnzokvwXshWfigQn13CV1x/eOvRrsy0jZlKPGAhZI0TfDuOi5yynVJZTL6NkNCxRZD2slsTbrFe9Jd/fCsM6oEvbImruhGaX8DESPJvIIOJruB76TAf4JXBU+eESpj1Co3oXJog4Qg3/0WWZOXNpL1Mm5YwuB3DaRFdDXBcjL3uAg9HRozUChsPb4YcnQk4wUMYtcWTzzevr7z0ZB33tn1oYyYJ3nqCsQEeSN3fJBRNLSL01nGy9zpNPm9C7hJk8B14uodeBQnSC2LiGukwiPaB8f4yiEvyxDgvTsWVjuY0fh9Nr7yzk+K+6vishW2OfmV7y+q1H9JY8RqzDqF6+bH/QbVmBlyxSpJFk92vxF0iDOD3bi3BbsT2foWqN0NIe5woJWTRvuu7MURn/IyMOO+SXBmEufUHIAaHAQvdwcF1Ts0JtFumo0U+msKpW22o0HkDdWliWJg1DsvP7D40qJ8U8CDHbNEBhbuLtP6UNrGsFUsQvdmhFDSccBiYdpe4FAsKalEHkQljrAD3mV6ABzBB+saosZjgxAWPs7hvnWXVAOO7rmOmqM28ZqmFJfmgy42FJACeJvYu1OikX4+C3fNkAlUsb1ApDuOloj8NMO8cfXoyCNve0Y6/LVJ3MlAyBgLFYP3HBKkxpSF0tUstzimOxLu0s2t1bwrJIL4Hw88EyDFf52tUI/lvGtggCRS4QNwONZHcxZxxKWQGSBOQIAAgGO+AleeULE1AamDiLnDErsnnWXkXnQPH+aISjNA+JAqJoe0kfOXP76AOTDK44mVUO1Te/3QI4/5joVVCbyGUTtLyqNd4Kja/MgK+aMuEqudU3Uwwvj40CfAy6WZTA8CgMj37V7puyFiDE+LqM77vfcSqpJuiQtSYAgzGRaSsUTQXucXxLvORtbDFhqOAD24puxyBawpGS3KPiTZxzPZJpfb+RTaTUPEaqfTVxuFLX52Xrdxqhhw3jEnj8c/N37jqUtZSa3TUIhbmEsbOTEkm4eD0LE+WPXAdGf1+POPv/92fYNZzO5KriA1cxEyOCDobAnzzsJdSPqEutEVlUOK+UarSKraA31yyUt9GaUUZKamR6jRzIVP3x/smOkRjmyfWAjiCghwS1ifImlKfgNmldKAZiqCVbnoYyqVDGo6NokXPpLhLSn3JbAjGChxiYQyiCoZWn+jZHcTfLrwSJ9q0g87Y8OWmVdT9dX2cKcMUVVnUoWoP3eKLx9ZyI8/eXm2rymMQmaaZ0WnJgn9eFBfl7UafWQcLRCPTFAvBOhUdfDxMkDCDge6z3RBkwAEO8Rl/SSfxKml6nayJ7nFETR9OmFjtgYAOZepIR56sNAifMBnIB595MM/TWoOL4itd8ezcvskIgw4mv8QPgspq6vKkCNn4UPdQLk8WX51RLFmpXmUMwemkHOZHjALH++fZ4zwWPc7X2d2y4UfH2LHuLqCRjGqlM71lEqGV50VO4jhEERoRhChQZ2lPHlru3EjjVh5VocnLMMnjWJ2n/YMFX9K0ztydzfMHvGhEU2r8WwPkfeOQOku7Jyn1G4g1opsJgLn+OZtNynqBv0q3xG36uPljA7r0vIilkncHz9CENZBtEEYSkobXwTpPhWCiBcXNayFpKkILZlk2wQuWHCV+ktA7rDHk5yE9gsfcEWhBCJOW5y8hBGtfWzXaVDi6ukCgw9sE8dJTr7CWTBfrhDy2qGDfmDi6buUnuRNlSGBK4xwyi7LucuIiego7JvUybranMtAItH6nGxozo5WnwTUrBQRUzsp8e3zLWAJiuHKUzHJtbXypF2Wui50NQAAASBJREFUUpKPEZU1VB+geqpiPWbe8ZTlcmF8qtmBKKidMN11t+DmL4iaaYrWx/MyriACfGQwOH/JBBFyZhwrZsW4em1hjekf+ouqh2QluyqiygBYAgl185CXUYtcKFQS2zF8MjObiYpWqe1ULSwlifGCc/2VW20LsSgYRoTvwZWEZlCE5QhsG8uCHtSVT0VxWBE5FEksW2sXgUjGiDjivhV9nje7ifbTD9GONrNTvSmlbNZGE6NUEPGpHjaI3+8QO+w69yLzSISep4oZMNo06EQyj6+YbCLswTsFb2HLSb7X1FI30W0YaS2gF4MpAVGJMUKe++C5UQofzNOFDMit8eh3DAgNDPBeuO/HZwUI63EHBvJT9W84lHmgBARh1vbz/wEz6um8hfCEiAAAAABJRU5ErkJggg==";


