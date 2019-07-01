<template>
	<view class="register-wrapper">
		<view class="return-btn" @click="gotoLogin()">&lt;&lt; 去登录</view>
        <h4>邮箱注册</h4>
        <view class="row input-bar">
            <input type="text" placeholder="邮箱" class="input-ctrl" v-model="form.email"/>
        </view>
        <view class="row input-bar">
            <input type="text" placeholder="用户名" class="input-ctrl" v-model="form.username"/>
        </view>
        <view class="row input-bar">
            <input type="password" placeholder="密码" class="input-ctrl" v-model="form.password">
        </view>
        <view class="row input-bar">
            <input type="password" placeholder="确认密码" class="input-ctrl" v-model="form.confirm_password">
        </view>
         <view class="action">
            <button type="button" class="register" @click="register()">立即注册</button>
        </view>
	</view>
</template>

<script>
    import config from '../../config/base_config'
	export default {
		data() {
			return {
				form: {
                    email: '',
                    username: '',
                    password: '',
                    confirm_password: ''
                }
			}
		},
		methods: {
            gotoLogin() {
                uni.navigateBack({
                    url: '/pages/login/login'
                })
            },
			register() {
                // uni.request({
                //     method: 'POST',
                //     url: config.domain + '/api/register',
                //     data: this.form,
                //     success(ret) {
                //         console.log(ret);
                //     },
                //     fail(reason) {
                //         console.log(reason);
                //     }
                // })
            }
		}
	}
</script>

<style lang="less">
    .register-wrapper {
        padding: 80upx 48upx 48upx;
        color: #515151;
        h4 {
            margin-bottom: 48upx;
            padding: 4upx 0;
            height: 60upx;
            line-height: 60upx;
            font-size: 50upx;
        }
    }
    .return-btn {
        margin-bottom: 48upx;
        height: 40upx;
        line-height: 40upx;
        font-weight: bold;
        font-size: 40upx;
    }
    .input-bar {
    	padding: 20upx;
    	background-color: aliceblue;
    	border-radius: 10upx;
    	font-size: 32upx;
    	.input-ctrl {
    		height: 60upx;
    	}
    }
    .row {
        margin-bottom: 32upx;
    }
    .action {
        margin-top: 80upx;
    }
    .register {
        margin-bottom: 20upx;
        padding: 10upx 0;
        background-color: #515151;
        border-color: #515151;
        color: #FFF;
        font-size: 32upx;
    }
</style>
