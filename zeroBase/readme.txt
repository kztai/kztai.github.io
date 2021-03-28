在200724的基础上修改：
<1> hardMoveRecordNew，hardMoveRecordModify函数，将参数arrIds改为arrRecordNos(下标)。
<2> saveBackFillDataToMemDatabase 此函数重写
<3> 建库建表，在建成功后，再建一个标志表，用于判断数据库表是否成功建立

