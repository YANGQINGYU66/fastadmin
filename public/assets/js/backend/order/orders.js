define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'order/orders/index' + location.search,
                    add_url: 'order/orders/add',
                    edit_url: 'order/orders/edit',
                    del_url: 'order/orders/del',
                    multi_url: 'order/orders/multi',
                    table: 'orders',
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
                        {field: 'id', title: __('ID')},
                        {field: 'good_id', title: __('Good_id')},
                        {field: 'usedNum', title: __('Usednum')},

                        {field: 'userId', title: __('Userid')},
                        {field: 'serviceNum', title: __('Servicenum')},
                        {field: 'serviceState', title: __('Servicestate'), searchList: {"已兑换":__('已兑换'),"未兑换":__('未兑换')}, formatter: Table.api.formatter.normal},
                        {field: 'type', title: __('Type'), searchList: {"为自己购买":__('为自己购买'),"为他人购买":__('为他人购买')}, formatter: Table.api.formatter.normal},
                        {field: 'transaction_no', title: __('Transaction_no')},
                        {field: 'orderPrice', title: __('Orderprice'), operate:'BETWEEN'},
                        {field: 'orderTime', title: __('Ordertime')},
                        {field: 'payState', title: __('Paystate'), searchList: {"未支付":__('未支付'),"已支付":__('已支付')}, formatter: Table.api.formatter.normal},
                        {field: 'serviceName', title: __('Servicename')},
                        {field: 'orderId', title: __('Orderid'), sortable: true},
                        {field: 'operate', title: __('Operate'),table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
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