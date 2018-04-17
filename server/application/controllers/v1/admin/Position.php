<?php

class Position extends CI_Controller {

    // 获取权限信息
    public function right()
    {
        // 判断用户是不是系统最高管理员
        if(!is_system_admin()) return $this->json([
            "errNum" => 1,
            "errMsg" => "你没有权限进行此操作"
        ]);
        // 获取权限信息
        $this->load->model('admin/Role');
        $res = $this->Role->get_right();
        if($res) return $this->json([
            "errNum"  => 0,
            "retMsg"  => "请求成功",
            "retData" => [
                "list" => $res
            ]
        ]);
        else return $this->json([
            "errNum" => 2,
            "errMsg" => "权限还未注册"
        ]);
    }

    // 添加角色权限
    public function create()
    {
        // 判断用户是不是系统最高管理员
        if(!is_system_admin()) return $this->json([
            "errNum" => 1,
            "errMsg" => "你没有权限进行此操作"
        ]);
        // 获取角色名称
        $roleName = $this->input->post('roleName');
        // 获取添加权限数组
        $right = $this->input->post('right');
        // 写入数据库
        $this->load->model('admin/Role');
        $res = $this->Role->set_role_exist($roleName,$right);
        // 返回结果
        if($res === 2) return $this->json([
            "errNum" => 2,
            "errMsg" => "职位已存在"
        ]);
        if($res === 0) return $this->json([
            "errNum"  => 0,
            "retMsg"  => "添加成功",
            "retData" => []
        ]);
    }

    // 获取职位列表内容信息
    public function show()
    {
        // 判断用户是不是系统最高管理员
        if(!is_system_admin()) return $this->json([
            "errNum" => 1,
            "errMsg" => "你没有权限进行此操作"
        ]);
        // 获取职位信息数据
        $this->load->model('admin/Role');
        $res = $this->Role->get_role_list();
        // 返回结果
        if($res) return $this->json([
            "errNum"  => 0,
            "retMsg"  => "请求成功",
            "retData" => [
                "list" => $res
            ]
        ]);
        else return $this->json([
            "errNum" => 2,
            "errMsg" => "当前没有添加职位"
        ]);
    }

    // 删除职位
    public function delete()
    {
        // 判断用户是不是系统最高管理员
        if(!is_system_admin()) return $this->json([
            "errNum" => 1,
            "errMsg" => "你没有权限进行此操作"
        ]);
        // 获取要删除职位的id
        $id = $this->input->post('id');
        // 删除职位数据
        $this->load->model('admin/Role');
        $res = $this->Role->get_role_delete($id);
        // 返回结果
        if($res === 2) return $this->json([
            "errNum" => 2,
            "errMsg" => "当前职位已被管理员使用,不可删除"
        ]);
        if($res === 3) return $this->json([
            "errNum" => 3,
            "errMsg" => "删除失败"
        ]);
        if($res === 0) return $this->json([
            "errNum"  => 0,
            "retMsg"  => "删除成功",
            "retData" => []
        ]);
    }

    // 修改角色权限
    public function update()
    {
        // 判断用户是不是系统最高管理员
        if(!is_system_admin()) return $this->json([
            "errNum" => 1,
            "errMsg" => "你没有权限进行此操作"
        ]);
        // 获取要修改职位的id
        $id = $this->input->post('id');
        // 获取职位名称
        $roleName = $this->input->post('roleName');
        // 获取修改权限数组
        $right = $this->input->post('right');
        // 修改职位数据
        $this->load->model('admin/Role');
        $res = $this->Role->get_role_update($id,$roleName,$right);
        // 返回结果
        if($res === 2) return $this->json([
            "errNum" => 2,
            "errMsg" => "要修改角色不存在"
        ]);
        if($res === 3) return $this->json([
            "errNum" => 3,
            "errMsg" => "职位已存在"
        ]);
        if($res === 4) return $this->json([
            "errNum" => 4,
            "errMsg" => "修改失败"
        ]);
        if($res === 0) return $this->json([
            "errNum"  => 0,
            "retMsg"  => "修改成功",
            "retData" => []
        ]);
    }
}