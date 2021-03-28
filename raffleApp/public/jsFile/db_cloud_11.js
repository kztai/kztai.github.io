export default {
    "c_db": {
        "$r_table": {
            "arrField": {
                "id": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                "$pt_id": [null, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 160, 160, 162, 162],
                "parent_table_name": [null, "gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "event", "event", "subGene", "subGene"],
                "table_name": ["gene", "geneLog", "dataPort", "vesselClass", "geneTable", "event", "eventPort", "subGene", "geneVariable", "geneLibrary", "dataType", "variable", "action", "subDataPort", "subEventPort"],
                "comment": ["粒子主表", "粒子引用记录", "数据接口", "容器", "粒子表格", "事件", "事件接口", "子粒子", null, null, null, "变量", "动作", "子数据接口", "子事件接口"],
                "show_name": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "status": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "$ver": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "$del": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "access": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "type": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "full": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "check_code": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "nest": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            },
            "arrIndex": {
                "id": {
                    "indexType": 2,
                    "arrField": ["id"],
                    "arrRecordNo": {
                        "1": {"0": 1},
                        "2": {"1": 1},
                        "3": {"2": 1},
                        "4": {"3": 1},
                        "5": {"4": 1},
                        "6": {"5": 1},
                        "7": {"6": 1},
                        "8": {"7": 1},
                        "9": {"8": 1},
                        "10": {"9": 1},
                        "11": {"10": 1},
                        "12": {"11": 1},
                        "13": {"12": 1},
                        "14": {"13": 1},
                        "15": {"14": 1}
                    }
                },
                "table_name": {
                    "indexType": 0,
                    "arrField": ["table_name"],
                    "arrRecordNo": {
                        "gene": {"0": 1},
                        "geneLog": {"1": 1},
                        "dataPort": {"2": 1},
                        "vesselClass": {"3": 1},
                        "geneTable": {"4": 1},
                        "event": {"5": 1},
                        "eventPort": {"6": 1},
                        "subGene": {"7": 1},
                        "geneVariable": {"8": 1},
                        "geneLibrary": {"9": 1},
                        "dataType": {"10": 1},
                        "variable": {"11": 1},
                        "action": {"12": 1},
                        "subDataPort": {"13": 1},
                        "subEventPort": {"14": 1}
                    }
                },
                "parent_table_name": {
                    "indexType": 0,
                    "arrField": ["parent_table_name"],
                    "arrRecordNo": {
                        "null": {"0": 1},
                        "gene": {"1": 1, "2": 1, "3": 1, "4": 1, "5": 1, "6": 1, "7": 1, "8": 1, "9": 1, "10": 1},
                        "event": {"11": 1, "12": 1},
                        "subGene": {"13": 1, "14": 1}
                    }
                }
            },
            "indexCount": 3,
            "arrFieldType": {},
            "lastInsertID": 16,
            "dbType": "c",
            "isMapTable": false
        },
        "$r_field": {
            "arrField": {
                "id": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116],
                "$pt_id": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 10, 10, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
                "table_name": ["gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "gene", "geneLog", "geneLog", "dataPort", "dataPort", "dataPort", "vesselClass", "vesselClass", "vesselClass", "vesselClass", "vesselClass", "vesselClass", "vesselClass", "vesselClass", "vesselClass", "geneTable", "geneTable", "geneTable", "geneTable", "geneTable", "geneTable", "event", "event", "event", "event", "event", "event", "event", "event", "event", "eventPort", "eventPort", "eventPort", "eventPort", "eventPort", "eventPort", "subGene", "subGene", "subGene", "subGene", "subGene", "subGene", "subGene", "subGene", "subGene", "subGene", "geneVariable", "geneVariable", "geneVariable", "geneVariable", "geneVariable", "geneVariable", "geneVariable", "geneLibrary", "geneLibrary", "dataType", "dataType", "dataType", "variable", "variable", "variable", "variable", "variable", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "subDataPort", "subDataPort", "subDataPort", "subDataPort", "subDataPort", "subDataPort", "subDataPort", "subEventPort", "subEventPort", "subEventPort", "subEventPort", "subEventPort", "subEventPort", "subEventPort", "subEventPort", "subEventPort", "subEventPort"],
                "field_name": ["gene_name", "type", "terminal_type", "layout_data", "gene_version", "url", "html_name", "check_code", "group_id", "cloud_id", "right", "create_time", "create_date", "icon", "comment", "start_time", "deadline", "quote_sum", "para", "status", "quote_gene", "cloud_id", "dataport_type", "dataport_name", "event_id", "vessel_name", "type", "attribute", "number", "win_type", "row_id", "parentwin_id", "event_set", "style", "parent_table_name", "table_name", "medium", "source", "field", "initial", "event_name", "type", "option", "comment", "code", "run_type", "output_way", "para", "watchter", "eventport_name", "event_id", "type", "run_type", "para", "event_type", "subgene_name", "cloud_id", "gene_base_id", "vessel_id", "type", "gene_html", "terminal_type", "mem_consume", "attrib", "para_set", "name", "comment", "default", "style_type", "type", "data_type", "data_define", "library_name", "library_id", "type_name", "type_type", "define", "variable_name", "comment", "data_type", "data_define", "initial_value", "action_name", "event_id", "subeventport_id", "eventport_id", "action_expression", "type", "stage_flag", "pre_cross", "run_type", "place", "comment", "para", "post_action", "code", "level", "variable", "pre_expression", "dataport_name", "dataport_sub_id", "connect_parentdata", "type", "event_id", "connect_subdata", "subgene_name", "eventport_sub_id", "eventport_name", "eventport_parent_id", "event_id", "port_type", "run_type", "subevent_type", "subgene_name", "para", "connect_subevent"],
                "show_name": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "comment": ["粒子名", "粒子类型", "终端类型", "布局数据", "粒子版本", "粒子目录", "HTML文档名", "校验码", "组织粒子", "云粒子", "权利", "建立时间", "建立日期", "图标", "粒子描述", "起始时间", "期限", "粒子引用次数", "参数", "粒子状态", "引用粒子", null, "接口类型", "关联表格", "连接事件", "容器名称", "容器类型", "容器属性 ", "序号", "视窗类型", "行id", "父视窗id", "事件配置", null, "父表名称", "表格名称", "媒介", "数据来源", "表格字段", "字段初始值", "事件名", "事件类型", "事件选项", "描述", "代码", "运行模式", "输出方式", "参数对象", "事务监听", "事件接口名称", "事件", "接口类型", "运行模式", "参数对象", "事件类型", "子粒子名", "云", "基类粒子", "容器", "粒子类型", "HTML", "终端类型", "内存消耗", "模块属性", "参数配置", "变量名", "描述", "初始值", "风格类别", "变量类型", "数据类型", "数据定义", "函数库名称", "函数库", "类型名称", "类型种类", "类型定义", "变量名", "描述", "数据类型", "数据定义", "初始值", "动作名称", "事件", "子事件接口", "事件接口", "动作表达式", "动作类型", "阶段标识", "前置表达式", "运行模式", "摆放位置", "描述", "参数对象", "后置动作", "代码", "层级", "变量", "前置表达式", "数据接口名", "子粒子数据接口", "连接父数据接口", "类型", "连接事件", "连接子数据接口", "子粒子名称", "子粒子事件接口", "事件接口名称", "父粒子事件接口", "事件", "接口类型", "运行模式", "子事件类型", "子粒子名", "参数对象", "连接子事务接口"],
                "enum_type": [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                "value_type": [1, 0, 0, 6, 1, 1, 1, 1, 0, 0, 0, 5, 5, 1, 1, 5, 5, 0, 6, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 6, 6, 1, 1, 0, 0, 6, 6, 1, 0, 0, 1, 1, 0, 0, 6, 6, 1, 0, 0, 0, 6, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 6, 1, 1, 1, 0, 0, 1, 6, 1, 0, 1, 0, 6, 1, 1, 1, 6, 1, 1, 0, 0, 0, 1, 0, 0, 6, 0, 1, 1, 6, 6, 1, 0, 6, 6, 1, 0, 0, 0, 0, 6, 1, 0, 1, 0, 0, 0, 0, 0, 1, 6, 6],
                "max_length": [32, 2, 2, 1048576, 128, 255, 32, 20, 20, 20, 2, 8, 10, 255, 128, 8, 8, 3, 1024, 2, 32, 20, 2, 32, 20, 32, 4, 2, 3, 3, 32, 20, 1024, 10240, 32, 32, 2, 2, 1024, 1024, 32, 2, 2, 128, 1048576, 2, 2, 1024, 1024, 32, 20, 2, 2, 1024, 2, 32, 20, 20, 20, 2, 128, 2, 128, 2, 10240, 256, 128, 65536, 2, 2, 64, 1024, 32, 20, 32, 2, 1024, 32, 128, 64, 255, 255, 32, 20, 20, 20, 1048576, 2, 2, 1048576, 2, 128, 128, 1024, 1024, 1048576, 4, 1024, 1024, 32, 20, 2, 2, 20, 1024, 32, 20, 32, 20, 20, 2, 2, 2, 32, 1024, 1024],
                "accuracy": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "this_unique": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1, 1, null, 1, null, null, null, null, null, null, null, null, null, null, 1, 1, null, null, null, null, 1, 1, null, null, null, null, null, null, 1, 1, 1, null, null, null, null, 1, 1, null, null, null, null, null, null, null, null, 1, 1, null, null, null, null, 1, 1, 1, null, null, 1, 1, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1, 1, 1, 1, 1, 1, null, null, null, null, null, null, 1, null, null, null, null, null, null, null, 1, 1, 1],
                "edit_flag": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                "link_name": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "gene", "cloud", null, null, "event", null, null, null, null, null, null, "vesselClass", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "event", null, null, null, null, null, "cloud", "gene", "vesselClass", null, null, null, null, null, null, null, null, null, null, null, null, null, null, "library", null, null, null, null, null, null, null, null, null, "event", "subEventPort", "eventPort", null, null, null, null, null, null, null, null, null, null, null, null, null, null, "dataPort", null, null, "event", null, null, "eventPort", null, "eventPort", "event", null, null, null, null, null, null],
                "link_field_name": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "link_db": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "enum": [null, {
                    "display": ["视窗", "页面", "终端", "用户", "组织"],
                    "value": [0, 1, 2, 3, 4]
                }, {
                    "display": ["移动web", "PC web", "小程序", "IOS", "安卓"],
                    "value": [0, 1, 2, 3, 4]
                }, null, null, null, null, null, null, null, {
                    "display": ["正式", "试用", "失效"],
                    "value": [0, 1, 2]
                }, null, null, null, null, null, null, null, null, {
                    "display": ["草稿", "发布", "销毁"],
                    "value": [0, 1, 2]
                }, null, null, {
                    "display": ["输入", "输出", "双向"],
                    "value": [0, 1, 2]
                }, null, null, null, {
                    "display": ["视窗", "浏览窗", "终端", "服务器"],
                    "value": [0, 1, 2, 3]
                }, {"display": ["静态", "动态"], "value": [0, 1]}, null, {
                    "display": ["普通", "对话框"],
                    "value": [0, 1]
                }, null, null, null, null, null, null, {
                    "display": ["持久", "内存", "全部"],
                    "value": [0, 1, 2]
                }, {
                    "display": ["自生成", "自父模块", "根表自父模块"],
                    "value": [0, 1, 2]
                }, null, null, null, {"display": ["事件", "方法"], "value": [0, 1]}, {
                    "display": ["普通", "启动", "关闭", "出错"],
                    "value": [0, 1, 2, 3]
                }, null, null, {"display": ["同步", "异步"], "value": [0, 1]}, {
                    "display": ["同步", "异步"],
                    "value": [0, 1]
                }, null, null, null, null, {"display": ["输入", "输出"], "value": [0, 1]}, {
                    "display": ["同步", "异步"],
                    "value": [0, 1]
                }, null, {
                    "value": [0, 1, 2],
                    "display": ["普通", "启动", "关闭"]
                }, null, null, null, null, {
                    "display": ["视窗", "终端", "用户", "组织"],
                    "value": [0, 1, 2, 3]
                }, null, {"display": ["PC", "移动"], "value": [0, 1]}, null, {
                    "display": ["普通", "可循环"],
                    "value": [0, 1]
                }, null, null, null, null, {
                    "display": ["颜色", "像素尺寸", "边框类型", "动画效果", "阴影", "内边距", "外边距", "线条样式", "边框圆角", "字体类型", "字体粗细", "层级"],
                    "value": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                }, {"display": ["数据", "风格"], "value": [0, 1]}, null, null, null, null, null, {
                    "display": ["对象", "表格"],
                    "value": [0, 1]
                }, null, null, null, null, null, {
                    "display": ["事件接口", "数据接口", "事务"],
                    "value": [0, 1, 2]
                }, null, null, null, null, null, {
                    "display": ["普通", "定时"],
                    "value": [0, 1]
                }, {"display": ["普通", "起始", "结束"], "value": [0, 1, 2]}, null, {
                    "display": ["同步", "异步"],
                    "value": [0, 1]
                }, null, null, null, null, null, null, null, null, null, null, {
                    "value": [0, 1, 2, 3],
                    "display": ["null", "输入", "输出", "双向"]
                }, {
                    "display": ["输入", "输出", "双向"],
                    "value": [0, 1, 2]
                }, null, null, null, null, null, null, null, {
                    "display": ["输入", "输出"],
                    "value": [0, 1]
                }, {"display": ["同步", "异步"], "value": [0, 1]}, {
                    "display": ["普通", "启动", "关闭"],
                    "value": [0, 1, 2]
                }, null, null, null],
                "status": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "$ver": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "$del": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }, "arrIndex": {
                "id": {
                    "indexType": 2, "arrField": ["id"], "arrRecordNo": {
                        "1": {"0": 1},
                        "2": {"1": 1},
                        "3": {"2": 1},
                        "4": {"3": 1},
                        "5": {"4": 1},
                        "6": {"5": 1},
                        "7": {"6": 1},
                        "8": {"7": 1},
                        "9": {"8": 1},
                        "10": {"9": 1},
                        "11": {"10": 1},
                        "12": {"11": 1},
                        "13": {"12": 1},
                        "14": {"13": 1},
                        "15": {"14": 1},
                        "16": {"15": 1},
                        "17": {"16": 1},
                        "18": {"17": 1},
                        "19": {"18": 1},
                        "20": {"19": 1},
                        "21": {"20": 1},
                        "22": {"21": 1},
                        "23": {"22": 1},
                        "24": {"23": 1},
                        "25": {"24": 1},
                        "26": {"25": 1},
                        "27": {"26": 1},
                        "28": {"27": 1},
                        "29": {"28": 1},
                        "30": {"29": 1},
                        "31": {"30": 1},
                        "32": {"31": 1},
                        "33": {"32": 1},
                        "34": {"33": 1},
                        "35": {"34": 1},
                        "36": {"35": 1},
                        "37": {"36": 1},
                        "38": {"37": 1},
                        "39": {"38": 1},
                        "40": {"39": 1},
                        "41": {"40": 1},
                        "42": {"41": 1},
                        "43": {"42": 1},
                        "44": {"43": 1},
                        "45": {"44": 1},
                        "46": {"45": 1},
                        "47": {"46": 1},
                        "48": {"47": 1},
                        "49": {"48": 1},
                        "50": {"49": 1},
                        "51": {"50": 1},
                        "52": {"51": 1},
                        "53": {"52": 1},
                        "54": {"53": 1},
                        "55": {"54": 1},
                        "56": {"55": 1},
                        "57": {"56": 1},
                        "58": {"57": 1},
                        "59": {"58": 1},
                        "60": {"59": 1},
                        "61": {"60": 1},
                        "62": {"61": 1},
                        "63": {"62": 1},
                        "64": {"63": 1},
                        "65": {"64": 1},
                        "66": {"65": 1},
                        "67": {"66": 1},
                        "68": {"67": 1},
                        "69": {"68": 1},
                        "70": {"69": 1},
                        "71": {"70": 1},
                        "72": {"71": 1},
                        "73": {"72": 1},
                        "74": {"73": 1},
                        "75": {"74": 1},
                        "76": {"75": 1},
                        "77": {"76": 1},
                        "78": {"77": 1},
                        "79": {"78": 1},
                        "80": {"79": 1},
                        "81": {"80": 1},
                        "82": {"81": 1},
                        "83": {"82": 1},
                        "84": {"83": 1},
                        "85": {"84": 1},
                        "86": {"85": 1},
                        "87": {"86": 1},
                        "88": {"87": 1},
                        "89": {"88": 1},
                        "90": {"89": 1},
                        "91": {"90": 1},
                        "92": {"91": 1},
                        "93": {"92": 1},
                        "94": {"93": 1},
                        "95": {"94": 1},
                        "96": {"95": 1},
                        "97": {"96": 1},
                        "98": {"97": 1},
                        "99": {"98": 1},
                        "100": {"99": 1},
                        "101": {"100": 1},
                        "102": {"101": 1},
                        "103": {"102": 1},
                        "104": {"103": 1},
                        "105": {"104": 1},
                        "106": {"105": 1},
                        "107": {"106": 1},
                        "108": {"107": 1},
                        "109": {"108": 1},
                        "110": {"109": 1},
                        "111": {"110": 1},
                        "112": {"111": 1},
                        "113": {"112": 1},
                        "114": {"113": 1},
                        "115": {"114": 1},
                        "116": {"115": 1}
                    }
                }, "table_name": {
                    "indexType": 0, "arrField": ["table_name"], "arrRecordNo": {
                        "gene": {
                            "0": 1,
                            "1": 1,
                            "2": 1,
                            "3": 1,
                            "4": 1,
                            "5": 1,
                            "6": 1,
                            "7": 1,
                            "8": 1,
                            "9": 1,
                            "10": 1,
                            "11": 1,
                            "12": 1,
                            "13": 1,
                            "14": 1,
                            "15": 1,
                            "16": 1,
                            "17": 1,
                            "18": 1,
                            "19": 1
                        },
                        "geneLog": {"20": 1, "21": 1},
                        "dataPort": {"22": 1, "23": 1, "24": 1},
                        "vesselClass": {
                            "25": 1,
                            "26": 1,
                            "27": 1,
                            "28": 1,
                            "29": 1,
                            "30": 1,
                            "31": 1,
                            "32": 1,
                            "33": 1
                        },
                        "geneTable": {"34": 1, "35": 1, "36": 1, "37": 1, "38": 1, "39": 1},
                        "event": {"40": 1, "41": 1, "42": 1, "43": 1, "44": 1, "45": 1, "46": 1, "47": 1, "48": 1},
                        "eventPort": {"49": 1, "50": 1, "51": 1, "52": 1, "53": 1, "54": 1},
                        "subGene": {
                            "55": 1,
                            "56": 1,
                            "57": 1,
                            "58": 1,
                            "59": 1,
                            "60": 1,
                            "61": 1,
                            "62": 1,
                            "63": 1,
                            "64": 1
                        },
                        "geneVariable": {"65": 1, "66": 1, "67": 1, "68": 1, "69": 1, "70": 1, "71": 1},
                        "geneLibrary": {"72": 1, "73": 1},
                        "dataType": {"74": 1, "75": 1, "76": 1},
                        "variable": {"77": 1, "78": 1, "79": 1, "80": 1, "81": 1},
                        "action": {
                            "82": 1,
                            "83": 1,
                            "84": 1,
                            "85": 1,
                            "86": 1,
                            "87": 1,
                            "88": 1,
                            "89": 1,
                            "90": 1,
                            "91": 1,
                            "92": 1,
                            "93": 1,
                            "94": 1,
                            "95": 1,
                            "96": 1,
                            "97": 1,
                            "98": 1
                        },
                        "subDataPort": {"99": 1, "100": 1, "101": 1, "102": 1, "103": 1, "104": 1, "105": 1},
                        "subEventPort": {
                            "106": 1,
                            "107": 1,
                            "108": 1,
                            "109": 1,
                            "110": 1,
                            "111": 1,
                            "112": 1,
                            "113": 1,
                            "114": 1,
                            "115": 1
                        }
                    }
                }
            }, "indexCount": 2, "arrFieldType": {}, "lastInsertID": 117, "dbType": "c", "isMapTable": false
        },
        "$r_index": {
            "arrField": {
                "id": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                "$pt_id": [3, 5, 6, 6, 7, 7, 8, 8, 13, 13, 13, 15, 15, 15, 15, 15],
                "table_name": ["dataPort", "geneTable", "event", "event", "eventPort", "eventPort", "subGene", "subGene", "action", "action", "action", "subEventPort", "subEventPort", "subEventPort", "subEventPort", "subEventPort"],
                "type": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "field_num": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                "index_field": [{"field_name": ["$pt_id", "dataport_name"]}, {"field_name": ["$pt_id", "table_name"]}, {"field_name": ["$pt_id", "event_name"]}, {"field_name": ["$pt_id", "option"]}, {"field_name": ["$pt_id", "event_id"]}, {"field_name": ["$pt_id", "eventport_name"]}, {"field_name": ["$pt_id", "gene_base_id", "vessel_id"]}, {"field_name": ["$pt_id", "subgene_name"]}, {"field_name": ["$pt_id", "subeventport_id"]}, {"field_name": ["subeventport_id"]}, {"field_name": ["$pt_id", "action_name"]}, {"field_name": ["$pt_id", "eventport_sub_id"]}, {"field_name": ["subevent_type", "id"]}, {"field_name": ["$pt_id", "eventport_name", "subgene_name"]}, {"field_name": ["$pt_id", "eventport_name"]}, {"field_name": ["id", "eventport_sub_id"]}],
                "$ver": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "$del": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            "arrIndex": {
                "id": {
                    "indexType": 2,
                    "arrField": ["id"],
                    "arrRecordNo": {
                        "1": {"0": 1},
                        "2": {"1": 1},
                        "3": {"2": 1},
                        "4": {"3": 1},
                        "5": {"4": 1},
                        "6": {"5": 1},
                        "7": {"6": 1},
                        "8": {"7": 1},
                        "9": {"8": 1},
                        "10": {"9": 1},
                        "11": {"10": 1},
                        "12": {"11": 1},
                        "13": {"12": 1},
                        "14": {"13": 1},
                        "15": {"14": 1},
                        "16": {"15": 1}
                    }
                },
                "table_name": {
                    "indexType": 0,
                    "arrField": ["table_name"],
                    "arrRecordNo": {
                        "dataPort": {"0": 1},
                        "geneTable": {"1": 1},
                        "event": {"2": 1, "3": 1},
                        "eventPort": {"4": 1, "5": 1},
                        "subGene": {"6": 1, "7": 1},
                        "action": {"8": 1, "9": 1, "10": 1},
                        "subEventPort": {"11": 1, "12": 1, "13": 1, "14": 1, "15": 1}
                    }
                }
            },
            "indexCount": 2,
            "arrFieldType": {},
            "lastInsertID": 17,
            "dbType": "c",
            "isMapTable": false
        },
        "$r_file": {
            "arrField": {
                "id": [],
                "$pt_id": [],
                "database_id": [],
                "table_name": [],
                "field_name": [],
                "record_id": [],
                "path": [],
                "file": [],
                "$ver": [],
                "$del": []
            },
            "arrIndex": {"id": {"indexType": 2, "arrField": ["id"], "arrRecordNo": {}}},
            "indexCount": 1,
            "arrFieldType": {},
            "lastInsertID": 1,
            "dbType": "c",
            "isMapTable": false
        },
        "gene": {
            "arrField": {
                "id": [11],
                "$pt_id": [null],
                "gene_name": ["customerRegistration_terminal"],
                "type": [2],
                "terminal_type": [0],
                "layout_data": [null],
                "gene_version": [null],
                "url": [null],
                "html_name": [null],
                "check_code": [null],
                "group_id": [null],
                "cloud_id": [null],
                "right": [0],
                "create_time": [null],
                "create_date": [null],
                "icon": [null],
                "comment": ["6"],
                "start_time": [null],
                "deadline": [null],
                "quote_sum": [null],
                "para": [null],
                "status": [1],
                "$del": [0],
                "$ver": [38]
            },
            "arrIndex": {
                "id": {"indexType": 2, "arrField": ["id"], "arrRecordNo": {"11": {"0": 1}}},
                "$pt_id": {"indexType": 0, "arrField": ["$pt_id"], "arrRecordNo": {"null": {"0": 1}}}
            },
            "indexCount": 2,
            "arrFieldType": {
                "type": 0,
                "terminal_type": 0,
                "layout_data": 6,
                "group_id": 0,
                "cloud_id": 0,
                "right": 0,
                "quote_sum": 0,
                "para": 6,
                "status": 0
            },
            "lastInsertID": 12,
            "dbType": "c",
            "isMapTable": false
        },
        "geneLog": {
            "arrField": {"id": [], "$pt_id": [], "quote_gene": [], "cloud_id": [], "$del": [], "$ver": []},
            "arrIndex": {
                "id": {"indexType": 2, "arrField": ["id"], "arrRecordNo": {}},
                "$pt_id": {"indexType": 0, "arrField": ["$pt_id"], "arrRecordNo": {}}
            },
            "indexCount": 2,
            "arrFieldType": {"quote_gene": 0, "cloud_id": 0},
            "lastInsertID": 1,
            "dbType": "c",
            "isMapTable": false
        },
        "dataPort": {
            "arrField": {
                "id": [26],
                "$pt_id": [11],
                "dataport_type": [0],
                "dataport_name": ["customer"],
                "event_id": [null],
                "$del": [0],
                "$ver": [10]
            },
            "arrIndex": {
                "$pt_iddataport_name": {
                    "indexType": 0,
                    "arrField": ["$pt_id", "dataport_name"],
                    "arrRecordNo": {"11_customer": {"0": 1}}
                },
                "id": {"indexType": 2, "arrField": ["id"], "arrRecordNo": {"26": {"0": 1}}},
                "$pt_id": {"indexType": 0, "arrField": ["$pt_id"], "arrRecordNo": {"11": {"0": 1}}}
            },
            "indexCount": 3,
            "arrFieldType": {"dataport_type": 0, "event_id": 0},
            "lastInsertID": 27,
            "dbType": "c",
            "isMapTable": false
        },
        "vesselClass": {
            "arrField": {
                "id": [11],
                "$pt_id": [11],
                "vessel_name": ["vessel"],
                "type": ["w"],
                "attribute": [0],
                "number": [0],
                "win_type": [null],
                "row_id": [null],
                "parentwin_id": [null],
                "event_set": [null],
                "style": [null],
                "$del": [0],
                "$ver": [10]
            },
            "arrIndex": {
                "id": {"indexType": 2, "arrField": ["id"], "arrRecordNo": {"11": {"0": 1}}},
                "$pt_id": {"indexType": 0, "arrField": ["$pt_id"], "arrRecordNo": {"11": {"0": 1}}}
            },
            "indexCount": 2,
            "arrFieldType": {"attribute": 0, "number": 0, "win_type": 0, "parentwin_id": 0, "event_set": 6, "style": 6},
            "lastInsertID": 12,
            "dbType": "c",
            "isMapTable": false
        },
        "geneTable": {
            "arrField": {
                "id": [],
                "$pt_id": [],
                "parent_table_name": [],
                "table_name": [],
                "medium": [],
                "source": [],
                "field": [],
                "initial": [],
                "$del": [],
                "$ver": []
            },
            "arrIndex": {
                "$pt_idtable_name": {"indexType": 0, "arrField": ["$pt_id", "table_name"], "arrRecordNo": {}},
                "id": {"indexType": 2, "arrField": ["id"], "arrRecordNo": {}},
                "$pt_id": {"indexType": 0, "arrField": ["$pt_id"], "arrRecordNo": {}}
            },
            "indexCount": 3,
            "arrFieldType": {"medium": 0, "source": 0, "field": 6, "initial": 6},
            "lastInsertID": 1,
            "dbType": "c",
            "isMapTable": false
        },
        "event": {
            "arrField": {
                "id": [23, 24, 25, 26, 27, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132],
                "$pt_id": [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
                "event_name": ["startGene", "$event1", "$event2", "$event3", "$event4", "$linkParent", "$recordInputPost_terminal", "$conditionInputPost_terminal", "$dataUploadReceive", "$zeroUploadRelateReceive_terminal", "$dataPushReceive_terminal", "$dataPullReceive_terminal", "$eventRestart", "$eventCancel", "$eventBreak", "$eventReturnRespond", "$eventBackRespond"],
                "type": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                "option": [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "comment": ["启动事务", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "code": ["function $CE_23(){\nvar $this=this;\n$this.$variable={\n};\n$this.$variable.result = null;\n};\n$CE_23.prototype.event=function(successCallBack,errorCallBack,asynCallBack){\nvar $this=this;\n$this.$actionRun(40,function(result){\nsuccessCallBack(result);\n},function(error){\nerrorCallBack(error);\n},function(){\nasynCallBack();\n});\n};\n$CE_23.prototype.action40=function(successCallBack,errorCallBack,asynCallBack){\nvar $this=this;\n$this.$eventSynchEnd(function(result){\nsuccessCallBack(result);\n},function(error){\nerrorCallBack(error);\n});\n};\n", "function $CE_24(){\nvar $this=this;\n$this.$variable={\n};\n},$CE_24.prototype.event=function(successCallBack,errorCallBack,asynCallBack){\nvar $this=this;\n$this.$actionRun(44,function(result){\nsuccessCallBack(result);\n},function(error){\nerrorCallBack(error);\n},function(){\nasynCallBack();\n});\n};\n", "function $CE_25(){\nvar $this=this;\n$this.$variable={\n};\n},$CE_25.prototype.event=function(successCallBack,errorCallBack,asynCallBack){\nvar $this=this;\n$this.$actionRun(47,function(result){\nsuccessCallBack(result);\n},function(error){\nerrorCallBack(error);\n},function(){\nasynCallBack();\n});\n};\n", "function $CE_26(){\nvar $this=this;\n$this.$variable={\n};\n},$CE_26.prototype.event=function(successCallBack,errorCallBack,asynCallBack){\nvar $this=this;\n$this.$actionRun(50,function(result){\nsuccessCallBack(result);\n},function(error){\nerrorCallBack(error);\n},function(){\nasynCallBack();\n});\n};\n", "function $CE_27(){\nvar $this=this;\n$this.$variable={\n};\n},$CE_27.prototype.event=function(successCallBack,errorCallBack,asynCallBack){\nvar $this=this;\n$this.$actionRun(53,function(result){\nsuccessCallBack(result);\n},function(error){\nerrorCallBack(error);\n},function(){\nasynCallBack();\n});\n};\n", null, null, null, null, null, null, null, null, null, null, null, null],
                "run_type": [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "output_way": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "para": [{
                    "name": ["result"],
                    "data_type": ["number"],
                    "port_type": [1],
                    "text": [""]
                }, {"name": ["mobile"], "data_type": ["number"], "port_type": [0]}, {
                    "name": ["mobile", "seccode"],
                    "data_type": ["number", "number"],
                    "port_type": [0, 0]
                }, {"name": ["mobile"], "data_type": ["number"], "port_type": [0]}, {
                    "name": ["customer"],
                    "data_type": ["object"],
                    "port_type": [0]
                }, null, null, null, null, null, null, null, null, null, null, null, null],
                "watchter": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "$del": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "$ver": [18, 14, 14, 14, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            },
            "arrIndex": {
                "$pt_idevent_name": {
                    "indexType": 0,
                    "arrField": ["$pt_id", "event_name"],
                    "arrRecordNo": {
                        "11_startGene": {"0": 1},
                        "11_$event1": {"1": 1},
                        "11_$event2": {"2": 1},
                        "11_$event3": {"3": 1},
                        "11_$event4": {"4": 1},
                        "11_$linkParent": {"5": 1},
                        "11_$recordInputPost_terminal": {"6": 1},
                        "11_$conditionInputPost_terminal": {"7": 1},
                        "11_$dataUploadReceive": {"8": 1},
                        "11_$zeroUploadRelateReceive_terminal": {"9": 1},
                        "11_$dataPushReceive_terminal": {"10": 1},
                        "11_$dataPullReceive_terminal": {"11": 1},
                        "11_$eventRestart": {"12": 1},
                        "11_$eventCancel": {"13": 1},
                        "11_$eventBreak": {"14": 1},
                        "11_$eventReturnRespond": {"15": 1},
                        "11_$eventBackRespond": {"16": 1}
                    }
                },
                "$pt_idoption": {
                    "indexType": 0,
                    "arrField": ["$pt_id", "option"],
                    "arrRecordNo": {
                        "11_1": {"0": 1},
                        "11_0": {
                            "1": 1,
                            "2": 1,
                            "3": 1,
                            "4": 1,
                            "5": 1,
                            "6": 1,
                            "7": 1,
                            "8": 1,
                            "9": 1,
                            "10": 1,
                            "11": 1,
                            "12": 1,
                            "13": 1,
                            "14": 1,
                            "15": 1,
                            "16": 1
                        }
                    }
                },
                "id": {
                    "indexType": 2,
                    "arrField": ["id"],
                    "arrRecordNo": {
                        "23": {"0": 1},
                        "24": {"1": 1},
                        "25": {"2": 1},
                        "26": {"3": 1},
                        "27": {"4": 1},
                        "121": {"5": 1},
                        "122": {"6": 1},
                        "123": {"7": 1},
                        "124": {"8": 1},
                        "125": {"9": 1},
                        "126": {"10": 1},
                        "127": {"11": 1},
                        "128": {"12": 1},
                        "129": {"13": 1},
                        "130": {"14": 1},
                        "131": {"15": 1},
                        "132": {"16": 1}
                    }
                },
                "$pt_id": {
                    "indexType": 0,
                    "arrField": ["$pt_id"],
                    "arrRecordNo": {
                        "11": {
                            "0": 1,
                            "1": 1,
                            "2": 1,
                            "3": 1,
                            "4": 1,
                            "5": 1,
                            "6": 1,
                            "7": 1,
                            "8": 1,
                            "9": 1,
                            "10": 1,
                            "11": 1,
                            "12": 1,
                            "13": 1,
                            "14": 1,
                            "15": 1,
                            "16": 1
                        }
                    }
                }
            },
            "indexCount": 4,
            "arrFieldType": {"type": 0, "option": 0, "run_type": 0, "output_way": 0, "para": 6, "watchter": 6},
            "lastInsertID": 133,
            "dbType": "c",
            "isMapTable": false
        },
        "eventPort": {
            "arrField": {
                "id": [23, 24, 25, 26, 27],
                "$pt_id": [11, 11, 11, 11, 11],
                "eventport_name": ["getSeccodeIn", "verifySeccode", "cancel", "register", "startGene"],
                "event_id": [null, null, null, null, 23],
                "type": [0, 0, 0, 0, 1],
                "run_type": [null, null, null, null, 1],
                "para": [{
                    "name": ["mobile", "result"],
                    "data_type": ["number", "number"],
                    "port_type": [0, 1]
                }, {
                    "name": ["mobile", "code", "result"],
                    "data_type": ["number", "number", "number"],
                    "port_type": [0, 0, 1]
                }, {
                    "name": ["mobile", "result"],
                    "data_type": ["number", "number"],
                    "port_type": [0, 1]
                }, {
                    "name": ["customerData", "result"],
                    "data_type": ["object", "number"],
                    "port_type": [0, 1]
                }, {"name": ["result"], "data_type": ["number"], "port_type": [1]}],
                "event_type": [null, null, null, null, 1],
                "$del": [0, 0, 0, 0, 0],
                "$ver": [10, 10, 10, 10, 12]
            },
            "arrIndex": {
                "$pt_idevent_id": {
                    "indexType": 0,
                    "arrField": ["$pt_id", "event_id"],
                    "arrRecordNo": {"11_null": {"0": 1, "1": 1, "2": 1, "3": 1}, "11_23": {"4": 1}}
                },
                "$pt_ideventport_name": {
                    "indexType": 0,
                    "arrField": ["$pt_id", "eventport_name"],
                    "arrRecordNo": {
                        "11_getSeccodeIn": {"0": 1},
                        "11_verifySeccode": {"1": 1},
                        "11_cancel": {"2": 1},
                        "11_register": {"3": 1},
                        "11_startGene": {"4": 1}
                    }
                },
                "id": {
                    "indexType": 2,
                    "arrField": ["id"],
                    "arrRecordNo": {"23": {"0": 1}, "24": {"1": 1}, "25": {"2": 1}, "26": {"3": 1}, "27": {"4": 1}}
                },
                "$pt_id": {
                    "indexType": 0,
                    "arrField": ["$pt_id"],
                    "arrRecordNo": {"11": {"0": 1, "1": 1, "2": 1, "3": 1, "4": 1}}
                }
            },
            "indexCount": 4,
            "arrFieldType": {"event_id": 0, "type": 0, "run_type": 0, "para": 6, "event_type": 0},
            "lastInsertID": 28,
            "dbType": "c",
            "isMapTable": false
        },
        "subGene": {
            "arrField": {
                "id": [7],
                "$pt_id": [11],
                "subgene_name": ["customerRegistration_page"],
                "cloud_id": [null],
                "gene_base_id": [10],
                "vessel_id": [11],
                "type": [1],
                "gene_html": [null],
                "terminal_type": [0],
                "mem_consume": [null],
                "attrib": [0],
                "para_set": [null],
                "$del": [0],
                "$ver": [12]
            },
            "arrIndex": {
                "$pt_idgene_base_idvessel_id": {
                    "indexType": 0,
                    "arrField": ["$pt_id", "gene_base_id", "vessel_id"],
                    "arrRecordNo": {"11_10_11": {"0": 1}}
                },
                "$pt_idsubgene_name": {
                    "indexType": 0,
                    "arrField": ["$pt_id", "subgene_name"],
                    "arrRecordNo": {"11_customerRegistration_page": {"0": 1}}
                },
                "id": {"indexType": 2, "arrField": ["id"], "arrRecordNo": {"7": {"0": 1}}},
                "$pt_id": {"indexType": 0, "arrField": ["$pt_id"], "arrRecordNo": {"11": {"0": 1}}}
            },
            "indexCount": 4,
            "arrFieldType": {
                "cloud_id": 0,
                "gene_base_id": 0,
                "vessel_id": 0,
                "type": 0,
                "terminal_type": 0,
                "attrib": 0,
                "para_set": 6
            },
            "lastInsertID": 8,
            "dbType": "c",
            "isMapTable": false
        },
        "geneVariable": {
            "arrField": {
                "id": [],
                "$pt_id": [],
                "name": [],
                "comment": [],
                "default": [],
                "style_type": [],
                "type": [],
                "data_type": [],
                "data_define": [],
                "$del": [],
                "$ver": []
            },
            "arrIndex": {
                "id": {"indexType": 2, "arrField": ["id"], "arrRecordNo": {}},
                "$pt_id": {"indexType": 0, "arrField": ["$pt_id"], "arrRecordNo": {}}
            },
            "indexCount": 2,
            "arrFieldType": {"style_type": 0, "type": 0, "data_define": 6},
            "lastInsertID": 1,
            "dbType": "c",
            "isMapTable": false
        },
        "geneLibrary": {
            "arrField": {
                "id": [],
                "$pt_id": [],
                "library_name": [],
                "library_id": [],
                "$del": [],
                "$ver": []
            },
            "arrIndex": {
                "id": {"indexType": 2, "arrField": ["id"], "arrRecordNo": {}},
                "$pt_id": {"indexType": 0, "arrField": ["$pt_id"], "arrRecordNo": {}}
            },
            "indexCount": 2,
            "arrFieldType": {"library_id": 0},
            "lastInsertID": 1,
            "dbType": "c",
            "isMapTable": false
        },
        "dataType": {
            "arrField": {
                "id": [],
                "$pt_id": [],
                "type_name": [],
                "type_type": [],
                "define": [],
                "$del": [],
                "$ver": []
            },
            "arrIndex": {
                "id": {"indexType": 2, "arrField": ["id"], "arrRecordNo": {}},
                "$pt_id": {"indexType": 0, "arrField": ["$pt_id"], "arrRecordNo": {}}
            },
            "indexCount": 2,
            "arrFieldType": {"type_type": 0, "define": 6},
            "lastInsertID": 1,
            "dbType": "c",
            "isMapTable": false
        },
        "variable": {
            "arrField": {
                "id": [16],
                "$pt_id": [23],
                "variable_name": ["result"],
                "comment": [""],
                "data_type": ["number"],
                "data_define": [null],
                "initial_value": [null],
                "$del": [0],
                "$ver": [10]
            },
            "arrIndex": {
                "id": {"indexType": 2, "arrField": ["id"], "arrRecordNo": {"16": {"0": 1}}},
                "$pt_id": {"indexType": 0, "arrField": ["$pt_id"], "arrRecordNo": {"23": {"0": 1}}}
            },
            "indexCount": 2,
            "arrFieldType": {"data_define": 6},
            "lastInsertID": 17,
            "dbType": "c",
            "isMapTable": false
        },
        "action": {
            "arrField": {
                "id": [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
                "$pt_id": [23, 23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27],
                "action_name": ["startSmPage", "start", "normalEnd", "start", "a1", "normalEnd", "start", "a1", "normalEnd", "start", "a1", "normalEnd", "start", "a1", "normalEnd"],
                "event_id": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "subeventport_id": [19, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "eventport_id": [null, null, null, null, 23, null, null, 24, null, null, 25, null, null, 26, null],
                "action_expression": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "type": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "stage_flag": [1, 0, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
                "pre_cross": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "run_type": [1, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "place": ["3", "1", "6", "1", "2", "6", "1", "2", "6", "1", "2", "6", "1", "2", "6"],
                "comment": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "para": [{
                    "name": [null],
                    "data_type": ["number"],
                    "port_type": [1]
                }, null, null, null, {
                    "name": ["mobile"],
                    "data_type": ["number"],
                    "port_type": [0]
                }, null, null, {
                    "name": ["mobile", "seccode"],
                    "data_type": ["number", "number"],
                    "port_type": [0, 0]
                }, null, null, {
                    "name": ["mobile"],
                    "data_type": ["number"],
                    "port_type": [0]
                }, null, null, {"name": ["customer"], "data_type": ["object"], "port_type": [0]}, null],
                "post_action": [{
                    "actionName": ["normalEnd"],
                    "expression": [null],
                    "pre_number": [null]
                }, {
                    "actionName": ["startSmPage"],
                    "expression": [null],
                    "pre_number": [null]
                }, null, {
                    "actionName": ["a1"],
                    "expression": [null],
                    "pre_number": [null]
                }, {
                    "actionName": ["normalEnd"],
                    "expression": [null],
                    "pre_number": [null]
                }, null, {
                    "actionName": ["a1"],
                    "expression": [null],
                    "pre_number": [null]
                }, {
                    "actionName": ["normalEnd"],
                    "expression": [null],
                    "pre_number": [null]
                }, null, {
                    "actionName": ["a1"],
                    "expression": [null],
                    "pre_number": [null]
                }, {
                    "actionName": ["normalEnd"],
                    "expression": [null],
                    "pre_number": [null]
                }, null, {
                    "actionName": ["a1"],
                    "expression": [null],
                    "pre_number": [null]
                }, {"actionName": ["normalEnd"], "expression": [null], "pre_number": [null]}, null],
                "code": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "level": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "variable": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "pre_expression": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                "$del": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "$ver": [14, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
            },
            "arrIndex": {
                "$pt_idsubeventport_id": {
                    "indexType": 0,
                    "arrField": ["$pt_id", "subeventport_id"],
                    "arrRecordNo": {
                        "23_19": {"0": 1},
                        "23_null": {"1": 1, "2": 1},
                        "24_null": {"3": 1, "4": 1, "5": 1},
                        "25_null": {"6": 1, "7": 1, "8": 1},
                        "26_null": {"9": 1, "10": 1, "11": 1},
                        "27_null": {"12": 1, "13": 1, "14": 1}
                    }
                },
                "subeventport_id": {
                    "indexType": 0,
                    "arrField": ["subeventport_id"],
                    "arrRecordNo": {
                        "19": {"0": 1},
                        "null": {
                            "1": 1,
                            "2": 1,
                            "3": 1,
                            "4": 1,
                            "5": 1,
                            "6": 1,
                            "7": 1,
                            "8": 1,
                            "9": 1,
                            "10": 1,
                            "11": 1,
                            "12": 1,
                            "13": 1,
                            "14": 1
                        }
                    }
                },
                "$pt_idaction_name": {
                    "indexType": 0,
                    "arrField": ["$pt_id", "action_name"],
                    "arrRecordNo": {
                        "23_startSmPage": {"0": 1},
                        "23_start": {"1": 1},
                        "23_normalEnd": {"2": 1},
                        "24_start": {"3": 1},
                        "24_a1": {"4": 1},
                        "24_normalEnd": {"5": 1},
                        "25_start": {"6": 1},
                        "25_a1": {"7": 1},
                        "25_normalEnd": {"8": 1},
                        "26_start": {"9": 1},
                        "26_a1": {"10": 1},
                        "26_normalEnd": {"11": 1},
                        "27_start": {"12": 1},
                        "27_a1": {"13": 1},
                        "27_normalEnd": {"14": 1}
                    }
                },
                "id": {
                    "indexType": 2,
                    "arrField": ["id"],
                    "arrRecordNo": {
                        "40": {"0": 1},
                        "41": {"1": 1},
                        "42": {"2": 1},
                        "43": {"3": 1},
                        "44": {"4": 1},
                        "45": {"5": 1},
                        "46": {"6": 1},
                        "47": {"7": 1},
                        "48": {"8": 1},
                        "49": {"9": 1},
                        "50": {"10": 1},
                        "51": {"11": 1},
                        "52": {"12": 1},
                        "53": {"13": 1},
                        "54": {"14": 1}
                    }
                },
                "$pt_id": {
                    "indexType": 0,
                    "arrField": ["$pt_id"],
                    "arrRecordNo": {
                        "23": {"0": 1, "1": 1, "2": 1},
                        "24": {"3": 1, "4": 1, "5": 1},
                        "25": {"6": 1, "7": 1, "8": 1},
                        "26": {"9": 1, "10": 1, "11": 1},
                        "27": {"12": 1, "13": 1, "14": 1}
                    }
                }
            },
            "indexCount": 5,
            "arrFieldType": {
                "event_id": 0,
                "subeventport_id": 0,
                "eventport_id": 0,
                "type": 0,
                "stage_flag": 0,
                "pre_cross": 6,
                "run_type": 0,
                "para": 6,
                "post_action": 6,
                "level": 0,
                "variable": 6,
                "pre_expression": 6
            },
            "lastInsertID": 55,
            "dbType": "c",
            "isMapTable": false
        },
        "subDataPort": {
            "arrField": {
                "id": [17],
                "$pt_id": [7],
                "dataport_name": ["customer"],
                "dataport_sub_id": [25],
                "connect_parentdata": [0],
                "type": [0],
                "event_id": [null],
                "connect_subdata": [null],
                "subgene_name": ["customerRegistration_page"],
                "$del": [0],
                "$ver": [10]
            },
            "arrIndex": {
                "id": {"indexType": 2, "arrField": ["id"], "arrRecordNo": {"17": {"0": 1}}},
                "$pt_id": {"indexType": 0, "arrField": ["$pt_id"], "arrRecordNo": {"7": {"0": 1}}}
            },
            "indexCount": 2,
            "arrFieldType": {
                "dataport_sub_id": 0,
                "connect_parentdata": 0,
                "type": 0,
                "event_id": 0,
                "connect_subdata": 6
            },
            "lastInsertID": 18,
            "dbType": "c",
            "isMapTable": false
        },
        "subEventPort": {
            "arrField": {
                "id": [15, 16, 17, 18, 19],
                "$pt_id": [7, 7, 7, 7, 7],
                "eventport_sub_id": [18, 19, 20, 21, 22],
                "eventport_name": ["getSeccodeIn", "verifySeccode", "cancel", "register", "startGene"],
                "eventport_parent_id": [null, null, null, null, null],
                "event_id": [24, 25, 26, 27, null],
                "port_type": [0, 0, 0, 0, 1],
                "run_type": [null, null, null, null, 1],
                "subevent_type": [null, null, null, null, 1],
                "subgene_name": ["customerRegistration_page", "customerRegistration_page", "customerRegistration_page", "customerRegistration_page", "customerRegistration_page"],
                "para": [{
                    "name": ["mobile", "result"],
                    "data_type": ["number", "number"],
                    "port_type": [0, 1]
                }, {
                    "name": ["mobile", "code", "result"],
                    "data_type": ["number", "number", "number"],
                    "port_type": [0, 0, 1]
                }, {
                    "name": ["mobile", "result"],
                    "data_type": ["number", "number"],
                    "port_type": [0, 1]
                }, {
                    "name": ["customerData", "result"],
                    "data_type": ["object", "number"],
                    "port_type": [0, 1]
                }, {"name": ["result"], "data_type": ["number"], "port_type": [1]}],
                "connect_subevent": [null, null, null, null, null],
                "$del": [0, 0, 0, 0, 0],
                "$ver": [10, 10, 10, 10, 12]
            },
            "arrIndex": {
                "$pt_ideventport_sub_id": {
                    "indexType": 0,
                    "arrField": ["$pt_id", "eventport_sub_id"],
                    "arrRecordNo": {
                        "7_18": {"0": 1},
                        "7_19": {"1": 1},
                        "7_20": {"2": 1},
                        "7_21": {"3": 1},
                        "7_22": {"4": 1}
                    }
                },
                "subevent_typeid": {
                    "indexType": 0,
                    "arrField": ["subevent_type", "id"],
                    "arrRecordNo": {
                        "null_15": {"0": 1},
                        "null_16": {"1": 1},
                        "null_17": {"2": 1},
                        "null_18": {"3": 1},
                        "1_19": {"4": 1}
                    }
                },
                "$pt_ideventport_namesubgene_name": {
                    "indexType": 0,
                    "arrField": ["$pt_id", "eventport_name", "subgene_name"],
                    "arrRecordNo": {
                        "7_getSeccodeIn_customerRegistration_page": {"0": 1},
                        "7_verifySeccode_customerRegistration_page": {"1": 1},
                        "7_cancel_customerRegistration_page": {"2": 1},
                        "7_register_customerRegistration_page": {"3": 1},
                        "7_startGene_customerRegistration_page": {"4": 1}
                    }
                },
                "$pt_ideventport_name": {
                    "indexType": 0,
                    "arrField": ["$pt_id", "eventport_name"],
                    "arrRecordNo": {
                        "7_getSeccodeIn": {"0": 1},
                        "7_verifySeccode": {"1": 1},
                        "7_cancel": {"2": 1},
                        "7_register": {"3": 1},
                        "7_startGene": {"4": 1}
                    }
                },
                "ideventport_sub_id": {
                    "indexType": 0,
                    "arrField": ["id", "eventport_sub_id"],
                    "arrRecordNo": {
                        "15_18": {"0": 1},
                        "16_19": {"1": 1},
                        "17_20": {"2": 1},
                        "18_21": {"3": 1},
                        "19_22": {"4": 1}
                    }
                },
                "id": {
                    "indexType": 2,
                    "arrField": ["id"],
                    "arrRecordNo": {"15": {"0": 1}, "16": {"1": 1}, "17": {"2": 1}, "18": {"3": 1}, "19": {"4": 1}}
                },
                "$pt_id": {
                    "indexType": 0,
                    "arrField": ["$pt_id"],
                    "arrRecordNo": {"7": {"0": 1, "1": 1, "2": 1, "3": 1, "4": 1}}
                }
            },
            "indexCount": 7,
            "arrFieldType": {
                "eventport_sub_id": 0,
                "eventport_parent_id": 0,
                "event_id": 0,
                "port_type": 0,
                "run_type": 0,
                "subevent_type": 0,
                "para": 6,
                "connect_subevent": 6
            },
            "lastInsertID": 20,
            "dbType": "c",
            "isMapTable": false
        }
    }
};