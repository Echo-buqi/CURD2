const UserAddComponent = {
    props: ["users"],
    data() {
        //添加页面表单初始化没有值
        //此处定义data是为了接收表单值
        return {
            uid: '',
            name: ''
        }
    },
    methods: {
        add() {
            //组装一条用户记录
            const userRec = {
                uid: this.uid,
                name: this.name
            }
            //放入数据集合中
            this.users.unshift(userRec);
            //切换到列表页
            this.$emit('show', 'list');
        }
    },
    template: `<form>
                    <div class="form-group">
                        <label for="userid">编号：</label>
                        
                        <input type="number" class="form-control" id="userid"
                        v-model="uid">
                    </div>
                    <div class="form-group">
                        <label for="uname">姓名：</label>
                        <input type="text" class="form-control" id="uname" placeholder="请输入姓名" v-model="name">
                    </div>
                    <button type="submit" class="btn btn-success" 
                        @click.prevent="add">立即添加</button>
                    <button class="btn btn-default" 
                        @click="$emit('show', 'list')">返回列表</button>
                </form>`
};

export default UserAddComponent;