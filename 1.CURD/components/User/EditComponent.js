const UserEditComponent = {
    props: ["users", "uid"],
    data() {
        //由uid查找对应的用户记录
        let pos = this.users.findIndex(item => {
            return item.uid == this.uid
        });
        const userRec = this.users[pos];
        return {
            // "userRec" : userRec
            userRec,
        }
    },
    computed: {

    },

    methods: {
        update() {

            //查找该uid在数据集合中的位置
            let pos = this.users.findIndex(item => {
                return item.uid == this.uid;
            });

            //修改该位置的用户记录为一个新的数据值
            //这个是双向绑定之后用户输入的新值
            // console.log(this.userRec);
            this.users[pos] = this.userRec;

            //切换视图，修改根实例act为list
            this.$emit('show', 'list');
        }
    },
    template: `<form>
                    <div class="form-group">
                        <label for="userid">编号：</label>
                        <input type="number" class="form-control" id="userid"
                        v-model="userRec.uid" disabled>
                    </div>
                    <div class="form-group">
                        <label for="uname">姓名：</label>
                        <input type="text" class="form-control" id="uname" placeholder="请输入姓名" v-model="userRec.name">
                    </div>
                    <button type="submit" class="btn btn-success" 
                        @click.prevent="update">立即修改</button>
                    <button class="btn btn-default" 
                        @click="$emit('show', 'list')">返回列表</button>
                </form>`,
};

export default UserEditComponent;