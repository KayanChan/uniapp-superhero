<template>
	<view class="wrapper">
		<view class="title">搜索</view>
		<view class="search-bar">
			<input class="search-input" confirm-type="search" focus placeholder="请输入关键词" />
		</view>
		<view class="sub-title">热门搜索</view>
		<ul class="hot-search">
			<li v-for="(item, index) in searchData" v-bind:key="item.id"> {{ item.name }}</li>
		</ul>
	</view>
</template>

<script>
	import searchData from '@/common/search.js'
	export default {
		data() {
			return {
				searchData: searchData.data.rows
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	@import "../../common/base.less";
	.search-bar {
		margin: 20upx 20upx 100upx 20upx;
		padding: 10upx 20upx;
		background-color: aliceblue;
		border-radius: 10upx;
		font-size: 32upx;
		.search-input {
			height: 60upx;
		}
	}
	.hot-search {
		margin-top: 0upx;
		padding: 0 20upx;

		li {
			height: 80upx;
			line-height: 80upx;
			border-bottom: 2upx solid #f5f5f5;
			color: #515151;
			font-size: 32upx;
		}
	}
</style>
