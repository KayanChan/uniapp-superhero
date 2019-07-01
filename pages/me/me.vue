<template>
	<view>
		<view class="header"></view>
		<view class="user">
			<image class="avatar" src="../../static/default_avatar.jpg" mode="scaleToFill"></image>
			<view class="info">
				<text @click="gotoLogin()">登录账号</text>
			</view>
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
			gotoLogin () {
                uni.redirectTo({
                    url: '/pages/login/login'
                });
            }
		}
	}
</script>

<style lang="less">
	.header {
		width: 100%;
		height: 300upx;
		background-image: url("../../static/bg_me.png");
		background-size: cover;
	}
	.user {
		display: flex;
		margin-top: -100upx;
		padding: 0 20upx;
		height: 100upx;
		
		.avatar {
			width: 200upx;
			height: 200upx;
			border-radius: 50%;
			box-shadow: 2px 2px 1px rgba(0,0,0,0.3);
			overflow: hidden;
		}
		
		.info {
			padding-left: 60upx;
			width: 450upx;
			height: 200upx;
			line-height: 100upx;
			font-size: 36upx;
		}
	}
</style>
