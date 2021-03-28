function $CZeroDBMac() {
}

$CZeroDBMac.prototype.mac = {
    tb: {
        activity: 'activity', // 活动
        seccode: 'seccode', // 手机验证码
        customer: 'customer', // 客户
        prize: 'prize', // 奖品
        lucky: 'lucky', // 中奖
    },

    fd: { // 公共字段(隐藏) 及 各表字段
        related_prefix: '$_', // 关联粒子实例字段前缀
        id: 'id',
        pt_id: '$pt_id',
        pg_id: '$pg_id',
        pg_db: '$pg_db',
        del: '$del',
        pg_ver: '$pg_ver',
        up_flag: '$upflag',

        activity: { // 活动
            invite_template: 'inviteTemplate',
            status: 'status'
        },
        seccode: { // 手机验证码
            mobile: 'mobile',
            seccode: 'seccode',
            start_time: 'startTime'
        },
        customer: {
            name: 'name',
            mobile: 'mobile',
            number: 'number',
            nick_name: 'nickname',
            head_shot: 'headshot',
            open_id: 'openId',
            company: 'company',
            companion: 'companion',
            type: 'type',
            status: 'status',
            sms_num: 'smsNum',
            time: 'time',
            arrival: 'arrival',
            leave: 'leave',
            hotel: 'hotel',
            dining: 'dining',
            remark: 'remark',
        },
        prize: {
            name: 'name',
            price: 'price',
            picture: 'picture',
            selected_graphic: 'selectedGraphic',
            no_selected_graphic: 'noSelectedGraphic',
            amount: 'amount',
            class: 'class'
        },
        lucky: {
            nick_name: 'nickname',
            head_shot: 'headshot',
            open_id: 'openId',
            customer: 'customer',
            prize: 'prize',
            prize_name: 'prizeName',
            class: 'class',
            status: 'status'
        },
    },

    enum: { // 枚举的定义
        activity: {
            status: {
                not_start: null, // 未开始
                processing: 1, // 进行中
                end: 2, // 已结束
            }
        },
        customer: {
            type: {
                development_company: 0, // 开发公司
                investment_agency: 1, // 投资机构
                friend: 2, // 朋友
                shareholder: 3, // 股东
                other: 4, // 其他
            },
            status: {
                pending: 0, // 待审核
                approved: 1, // 已通过
                cancelled: 2, // 已取消
            },
            hotel: {
                no: 0, // 否
                yes: 1, // 是
            },
            dining: {
                no: 0, // 否
                yes: 1, // 是
            }
        },
        prize: {
            class: {
                level_1: 0, // 一等奖
                level_2: 1, // 二等奖
                level_3: 2, // 三等奖
                encourage: 3, // 鼓励奖
            }
        },
        lucky: {
            status: {
                unclaimed: 0, // 未领
                claimed: 1, // 已领
            }
        },
        Null: { // 空定义
            strNull: null, //字符串为空的定义
            objectNull: null, //对象为空的定义
            tcNull: null,//事务为空的定义
            numberNull: null,//数值为空的定义
            idNewNull: "",//id为空表示新增的定义
            conditionNull: null,//条件表达式为空的定义
            fieldNull: [],//字段为空的定义
            callBackNull: null,//条件表达式为空的定义
            valueNull: null
        },
    }
};


