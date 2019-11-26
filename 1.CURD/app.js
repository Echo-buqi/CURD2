//加载当前模块文件依赖的组件
import UserListComponent from './components/User/ListComponent.js';
import UserEditComponent from './components/User/EditComponent.js';
import UserAddComponent from './components/User/AddComponent.js';

// console.log(UserListComponent, UserEditComponent, UserAddComponent);
//创建Vue实例 - 根实例，也叫根组件实例
const vm = new Vue({
    el: '#app',
    data: {
        //act控制显示视图的参数
        //修改act值来切换不同的视图
        act: 'list',
        uid: null,
        //初始化的用户数据
        users: [{
                uid: 18,
                name: "刘邦"
            },
            {
                uid: 12,
                name: "萧何"
            },
            {
                uid: 3,
                name: "张良"
            },
            {
                uid: 24,
                name: "韩信"
            }
        ]
    },
    computed: {
        currentComponent() {
            return 'user-' + this.act;
        }
    },
    methods: {
        //第一个参数控制视图的act，
        //剩余参数是跳转链接
        show(act, uid = null) {
            console.log(act);
            //修改act为传入的值
            this.act = act;
            //将参数写入data中 便于跨组件使用
            if (uid) this.uid = uid;
        },

    },
    template: `<div class="container">
                        <p>
                            <button class="btn btn-primary"
                                v-on:click="act='add'">+ 新用户</button>
                        </p>
                        <!-- 动态渲染的组件 -->
                        <component 
                            v-bind:is="currentComponent" 
                            v-bind:users="users" 
                            v-on:show="show" 
                            v-bind:uid="uid">
                        </component>
                    </div>`,
    components: {
        //显示用户列表的组件（template视图、data数据、methods事件等）
        'user-list': UserListComponent,
        'user-edit': UserEditComponent,
        'user-add': UserAddComponent,
    },

});

export default vm;