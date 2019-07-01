<template>
	<view class="login-wrapper">
        <view class="close-btn" @click="gotoMe()">X</view>
		<h4>密码登录</h4>
        <view class="row input-bar">
            <input type="text" placeholder="用户名" class="input-ctrl"/>
        </view>
        <view class="row input-bar">
            <input type="password" placeholder="密码" class="input-ctrl">
        </view>
        <view class="row forget-pwd">
            <text>忘记密码？</text>
        </view>
        <view class="action">
            <button type="button" class="login" @click="gotoMe()">立即登录</button>
            <button type="button" class="register" plain="true" @click="gotoRegister()">没有账号？立即注册</button>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
            gotoMe() {
                uni.switchTab({
                    url: '/pages/me/me'
                });
            },
            gotoRegister () {
                uni.navigateTo({
                    url: '/pages/register/register'
                });
            }
		}
	}
</script>

<style lang="less">
    .login-wrapper {
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
    .close-btn {
        margin-bottom: 48upx;
        height: 40upx;
        line-height: 40upx;
        font-weight: bold;
        font-size: 50upx;
    }
    .row {
        margin-bottom: 32upx;
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
    .forget-pwd {
        height: 36upx;
        line-height: 36upx;
        text-align: right;
        font-size: 30upx;
        color: #515151;
    }
    .action {
        margin-top: 80upx;
    }
    .login {
        margin-bottom: 20upx;
        padding: 10upx 0;
        background-color: #515151;
        border-color: #515151;
        color: #FFF;
        font-size: 32upx;
    }
    .register {
        color: #515151;
        background-color: #FFF;
        border-color: #515151;
        padding: 10upx 0;
        font-size: 32upx;
    }
</style>
