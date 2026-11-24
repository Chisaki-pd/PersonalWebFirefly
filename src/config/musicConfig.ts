import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.5,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "random",

	// 是否显启用歌词
	showLyrics: true,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "10046455237",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "アカリノアリカ",
				artist: "kicco",
				url: "/assets/music/kicco - アカリノアリカ.mp3",
				cover: "/assets/music/cover/kicco - アカリノアリカ.jpg",
				lrc: "/assets/music/lyric/kicco - アカリノアリカ.lrc",
			},
			{
				name: "Amazing Sky",
				artist: "kicco",
				url: "/assets/music/kicco - Amazing Sky.mp3",
				cover: "/assets/music/cover/kicco - Amazing Sky.jpg",
				lrc: "/assets/music/lyric/kicco - Amazing Sky.lrc",
			},
			{
				name: "春色の奇跡",
				artist: "kicco",
				url: "/assets/music/kicco - 春色の奇跡.mp3",
				cover: "/assets/music/cover/kicco - 春色の奇跡.jpg",
				lrc: "/assets/music/lyric/kicco - 春色の奇跡.lrc",
			},
			{
				name: "終わらない煌めきを",
				artist: "kicco",
				url: "/assets/music/kicco - 終わらない煌めきを.mp3",
				cover: "/assets/music/cover/kicco - 終わらない煌めきを.jpg",
				lrc: "/assets/music/lyric/kicco - 終わらない煌めきを.lrc",
			},
			{
				name: "恋ひ恋う縁",
				artist: "KOTOKO",
				url: "/assets/music/KOTOKO - 恋ひ恋う縁.mp3",
				cover: "/assets/music/cover/KOTOKO - 恋ひ恋う縁.jpg",
				lrc: "/assets/music/lyric/KOTOKO - 恋ひ恋う縁.lrc",
			},
			{
				name: "BEYOND",
				artist: "安月名莉子",
				url: "/assets/music/安月名莉子 - BEYOND.mp3",
				cover: "/assets/music/cover/安月名莉子 - BEYOND.jpg",
				lrc: "/assets/music/lyric/安月名莉子 - BEYOND.lrc",
			},
			{
				name: "メチャ恋らんまん☆",
				artist: "榊原ゆい",
				url: "/assets/music/榊原ゆい - メチャ恋らんまん☆.mp3",
				cover: "/assets/music/cover/榊原ゆい - メチャ恋らんまん☆.jpg",
				lrc: "/assets/music/lyric/榊原ゆい - メチャ恋らんまん☆.lrc",
			},
			{
				name: "永遠に咲く花",
				artist: "AiRI (あいり)",
				url: "/assets/music/AiRI (あいり) - 永遠に咲く花.mp3",
				cover: "/assets/music/cover/AiRI (あいり) - 永遠に咲く花.jpg",
				lrc: "/assets/music/lyric/AiRI (あいり) - 永遠に咲く花.lrc",
			},
		],
	},
};
