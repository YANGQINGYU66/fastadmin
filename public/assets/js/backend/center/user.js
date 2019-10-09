define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'center/user/index' + location.search,
                    add_url: 'center/user/add',
                    edit_url: 'center/user/edit',
                    del_url: 'center/user/del',
                    multi_url: 'center/user/multi',
                    table: 'center',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'openId', title: __('OpenId')},
                        {field: 'userId', title: __('用户编号')},
                        {field: 'nickname', title: __('Nickname')},
                        //数据库存放的图片路径
                        {field: 'touxiang', title: __('Touxiang'), formatter: Table.api.formatter.image, events: Table.api.events.img},
                        // {field: 'touxiang', title: __('Touxiang')},
                        {field: 'loginTime', title: __('Logintime'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});