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
            name: 'field_str'
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
            groupName: 'department_name'
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

