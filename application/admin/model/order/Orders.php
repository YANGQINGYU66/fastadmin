<?php

namespace app\admin\model\order;

use think\Console;
use think\Model;


class Orders extends Model
{


    // 表名
    protected $table = 'orders';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'serviceState_text',
        'type_text',
        'orderTime_text',
        'payState_text'
    ];
    

    
    public function getServicestateList()
    {
        return ['已兑换' => __('已兑换'), '未兑换' => __('未兑换')];
    }

    public function getTypeList()
    {
        return ['为自己购买' => __('为自己购买'), '为他人购买' => __('为他人购买')];
    }

    public function getPaystateList()
    {
        return ['未支付' => __('未支付')];
    }


    public function getServicestateTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['serviceState']) ? $data['serviceState'] : '');
        $list = $this->getServicestateList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getTypeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['type']) ? $data['type'] : '');
        $list = $this->getTypeList();
        return isset($list[$value]) ? $list[$value] : '';
    }


//    protected $orderTime = [
//        'ordertime_text'
//    ];

    public function getorderTimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['orderTime']) ? $data['orderTime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;

//        $value = 1568952541;
//        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    protected function setOrdertimeTextAttr($value)
    {
        return $value && !is_numeric($value) ? strtotime($value) : $value;
    }


    public function getPaystateTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['payState']) ? $data['payState'] : '');
        $list = $this->getPaystateList();
        return isset($list[$value]) ? $list[$value] : '';
    }

    protected function setOrdertimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


}
