define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'good/goods/index' + location.search,
                    add_url: 'good/goods/add',
                    edit_url: 'good/goods/edit',
                    del_url: 'good/goods/del',
                    multi_url: 'good/goods/multi',
                    table: 'goods',
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
                        {field: 'serviceName', title: __('Servicename')},
                        {field: 'servicePrice', title: __('Serviceprice'), operate:'BETWEEN'},
                        {field: 'serviceImg', title: __('Serviceimg')},
                        {field: 'favourablePrice', title: __('Favourableprice'), operate:'BETWEEN'},
                        {field: 'serviceParticularsImg', title: __('Serviceparticularsimg')},
                        {field: 'serviceParticulars', title: __('Serviceparticulars')},
                        {field: 'ableNum', title: __('Ablenum')},
                        {field: 'saleNum', title: __('Salenum')},
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