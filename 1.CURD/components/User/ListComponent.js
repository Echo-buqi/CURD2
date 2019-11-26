const UserListComponent = {
    props: ["users"],
    methods: {
        del(uid) {
            //根据用户编号找到该记录在数组中的位置
            //使用findIndex方法，它需要传入一个回调函数作为查找条件
            //返回满足条件的第一个元素对应的编号
            let pos = this.users.findIndex((item, index) => {
                return item.uid == uid;
            });
            //删除数组中对应编号的记录
            this.users.splice(pos, 1); //变异方法
        }
    },
    template: `<table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>姓名</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in users">
                        <th scope="row">{{ item.uid }}</th>
                        <td> {{ item.name }}</td>
                        <td>
                            <a href="" @click.prevent="$emit('show', 'edit', item.uid)">编辑</a>
                            <a href="" @click.prevent="del(item.uid)">删除</a>
                        </td>
                    </tr>
                </tbody>
            </table>`,
}

export default UserListComponent;