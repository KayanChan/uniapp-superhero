<template>
	<view class="wrapper">
		<view class="date-weekday">
			<text>5月29日</text>
			<text>星期三</text>
		</view>
		<view class="title">Today</view>
		<swiper class="swiper-banner" indicator-dots="true" autoplay="true" interval="3000" circular="true">
			<swiper-item v-for="(item, index) in bannerData" v-if="item.isShow" v-bind:key="item.id">
				<view class="swiper-item">
					<img :src="item.image" mode="aspectFit" alt="">
				</view>
			</swiper-item>
		</swiper>
		<view class="title">近期热门</view>
		<scroll-view class="recent-hot" scroll-x="true">
			<view class="scroll-view-item" v-for="item in hotData" v-bind:key="item.id">
				<view class="cover">
					<img :src="item.cover" mode="aspectFit" alt="">
				</view>
				<view class="name">{{ item.name }}</view>
				<view class="score">{{ item.score }}分</view>
			</view>
		</scroll-view>
		<view class="title">最新预告</view>
		<view class="new-trailer">
			<video class="video-item" v-for="(item, index) in trailerData" v-bind:key="item.id" :src="item.trailer" v-if="index < 2"></video>
		</view>
		<view class="title">猜你喜欢</view>
		<view class="uLike-film">
			<view class="uLike-film-item" v-for="item in uLikeData" v-bind:key="item.id">
				<view class="film-cover">
					<img :src="item.cover" alt="" mode="aspectFit">
				</view>
				<view class="film-info">
					<view class="name">{{ item.name }}</view>
					<view class="original-name">{{ item.originalName }}</view>
					<view class="tags">{{ item.basicInfo }}</view>
					<view class="time">{{ item.releaseDate }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import bannerData from '@/common/banner.js'
	import hotData from '@/common/hot.js'
	import trailerData from '@/common/trailer.js'
	import uLikeData from '@/common/uLike.js'
	export default {
		data() {
			return {
				bannerData: bannerData.data,
				hotData: hotData.data,
				trailerData: trailerData.data,
				uLikeData: uLikeData.data
			}
		},
		onLoad() {
			console.log(this.uLikeData);
		},
		methods: {

		}
	}
</script>

<style lang="less">
	@import "../../common/base.less";
	.wrapper {
		padding-bottom: 20upx;
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.date-weekday {
		margin: 20upx;
		color: #999;
		font-size: 28upx;
	}
	.swiper-banner {
		width: 100%;
		height: 440upx;
		background-color: aliceblue;
		.swiper-item {
			position: relative;
			width: 100%;
			height: 100%;
		}
	}
	.recent-hot {
		width: 100%;
		white-space: nowrap;
		.scroll-view-item {
			display: inline-block;
			margin-left: 20upx;
			width: 200upx;
			text-align: center;
			
			&:last-child {
				margin-right: 20upx;
			}
		}
		.cover{
			position: relative;
			width: 200upx;
			height: 270upx;
			background-color: aliceblue;
		}
		.name {
			width: 200upx;
			line-height: 40upx;
			margin-top: 10upx;
			font-size: 28upx;
			font-weight: bold;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			text-align: left;
		}
		.score {
			line-height: 32upx;
			font-size: 24upx;
			color: #999;
			text-align: left;
		}
	}
	.new-trailer {
		padding: 0 10upx;
		.video-item {
			position: relative;
			display: inline-block;
			margin: 0 10upx;
			width: 345upx;
			height: 220upx;
			background-color: #F0F8FF;
		}
	}
	.uLike-film {
		padding: 0 20upx;
		.uLike-film-item{
			position: relative;
			margin-bottom: 20upx;
			display: flex;
		}
		.film-cover {
			position: relative;
			width: 200upx;
			height: 270upx;
			background-color: #F0F8FF;
			border-radius: 10upx;
		}
		.film-info {
			margin: 20upx 0;
			padding-left: 20upx;
			width: 492upx;
			height: 224upx;
			border: 2upx solid #f5f5f5;
			border-left: none;
			border-top-right-radius: 10upx;
			border-bottom-right-radius: 10upx;
		}
		.name {
			margin: 20upx 0 10upx 0;
			font-size: 36upx;
			color: #000;
		}
		.original-name {
			margin-bottom: 6upx;
			font-size: 28upx;
		}
		.tags {
			margin-bottom: 6upx;
			font-size: 28upx;
			color: #999;
		}
		.time {
			font-size: 28upx;
			color: #999;
		}
	}
</style>
