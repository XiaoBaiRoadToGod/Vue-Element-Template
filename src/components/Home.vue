<template>
  
    <el-container>
        <el-header>Header
            <ChangeTheme/>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu
                    background-color='#D3DCE6'
                    :default-active='$router.path'
                    text-color='#333'
                    router>
                    <el-submenu index='1'>
                        <template slot='title'>
                            <span>导航一</span>
                        </template>
                        <el-menu-item index='/router1' >
                            路由一
                        </el-menu-item>
                        <el-menu-item index='/router2' >
                            路由二
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item index='/router3'>
                        路由三
                    </el-menu-item>
                </el-menu>
            </el-aside>
            
            <el-main>
                <router-view></router-view>
            </el-main>
            
        </el-container>
        <el-footer>Footer</el-footer>
    </el-container>

</template>
<script>
import ChangeTheme from '@/components/changeTheme/changeTheme'
export default {
    data () {
        return {

        }
    },
    components: { ChangeTheme }
}
</script>
<style lang="scss" scoped>
.el-container {
    height: 100%;
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-aside {
        height: 100%;
        .el-menu {
            height: 100%;
        }
    }
}
</style>


