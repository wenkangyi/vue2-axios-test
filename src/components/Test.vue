<template>
    <div>
        <p>{DateTime}</p>
        <input name="userName" type="text"/>
        <button @click="getAreaList">获取数据</button>
        <button @click="getAreaById">获取第一行数据</button>
        <button @click="addArea">添加一行数据</button>
        <button @click="modifyArea">更改数据</button>
        <button @click="deleteArea">删除数据</button>
    </div>    

</template>

<script>
import axios from 'axios'
export default{
    data() {
        return {
            /*这里的数据定不定义，对请求中的数据都没影响 */
            /*areaName: '666',
            priority: '',
            areaId:'2'*/
        }
    },
    methods:{
        getAreaList(){
            axios
                .get(
                    /*'http://localhost:8888/superadmin/listarea'*/
                    '/superadmin/listarea'
                )
                .then(function (response) {
                    console.log("请求正常");
                    console.log(response);
                })
                .catch(function (error) {
                    console.log("请求错误");
                    console.log(error);
                });
        },
        getAreaById(){
            axios
                .get(
                    /*'http://localhost:8888/superadmin/getareabyid',{*/
                    '/superadmin/getareabyid',{
                        params: {
                            areaId: 1
                        }
                    }
                )
                .then(function (response) {
                    console.log("请求正常");
                    console.log(response);
                })
                .catch(function (error) {
                    console.log("请求错误");
                    console.log(error);
                });
        },
        addArea(){
            axios.post(
                /*'http://localhost:8888/superadmin/addarea', {*/
                '/superadmin/addarea', {
                    areaName: 'ABC',
                    priority: '12'
                }
                )
                .then(function (response){
                    console.log("addArea正常");
                    console.log(response);
                })
                .catch(function (error){
                    console.log("addArea异常");
                    console.log(error);
                });
        },
        modifyArea(){
            axios.post(
                /*'http://localhost:8888/superadmin/modifyarea', {*/
                '/superadmin/modifyarea', {
                    areaId:10,
                    areaName: 'haha',
                    priority: '22'
                }
            ).then(function (response){
                console.log("modifyArea正常");
                console.log(response);
            }).catch(function (error){
                console.log("modifyArea异常");
                console.log(error);
            });
        },
        deleteArea(){
            /*axios.get('http://localhost:8888/superadmin/deletearea',{*/
            axios.get('/superadmin/deletearea',{
                        params: {
                            areaId: 10
                        }
                    }
            ).then(function (response){
                console.log("modifyArea正常");
                console.log(response);
            }).catch(function (error){
                console.log("modifyArea异常");
                console.log(error);
            });
        }
    }
}
</script>