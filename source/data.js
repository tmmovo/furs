// 帖子数据
const posts = [
    { title: "测试贴-你好世界", date: "2025-08-07", tags: ["日常", "网站"], content: "这是一篇测试帖子，发布日期接近于建站日期" },
    { title: "和朋友去北京ICOS漫展", date: "2025-07-13", tags: ["日常", "漫展"], content: "主要就去漫展找兽兽去了，一天走的好累TAT" },
	{ title: "更新线下捕捉页", date: "2025-08-08", tags: ["网站"], content: "更新了漫展或兽聚捕捉，<span><a href='https://扩列.我爱你'>点此进入</a></span>，在关于页也有入口" },
	{ title: "修复bug", date: "2025-08-08", tags: ["网站"], content: "修复一个无法查看帖子详情的问题，原因是关于页的section没加闭合标签，有其他bug可以来<span><a href='https://github.com/tmmovo/furs'>https://github.com/tmmovo/furs</a></span>提交哦" },
	{ title: "爪子到了哦", date: "2025-08-15", tags: ["日常", "兽装"], content: "下午兽装的爪子到了，具体<a href='https://b23.tvBV1NhbpzaEz2/'>拆箱视频在这里</a>，可以点击查看哦" },
	{ title: "评价一下非人哉IP的第一部电影《非人哉：限时玩家》", date: "2025-08-15", tags: ["日常"], content: "包含少量剧透！⚠️⚠️⚠️</br>仅代表个人观点，请勿过分解读⚠️⚠️⚠️</br>总体评分可以是<strong>3/5</strong>分</br>到最后能感觉到目的性特别强，感觉影片被纪念小白带偏，如果能去参加首映礼应该还不错，中间真就“详略得当”，跳过了很多内容</br>画面表现力不错，但建模和场景素材的融合度欠佳，中间人物与3d场景模型背景有明显割裂感，影响整体观感，剧情过于老套</br>后面的彩蛋只是在那放<a href='https://music.163.com/#/album?id=281267432'>歌</a>，咱就是说<a href='https://music.163.com/#/album?id=281267432'>歌</a>必须要播那么多遍吗</br>可能是团队真的没有精力去制作更好的电影，但是也是<a href='https://baike.baidu.com/item/%E9%9D%9E%E4%BA%BA%E5%93%89/19626160'>这个IP</a>的第一个电影，五月份<a href='http://www.fen-z.com/'>分子互动</a>成立了分子影业，希望后面能有更好的电影哦</br>最后为什么没有<a href='https://baike.baidu.com/item/%E8%B0%9B%E5%90%AC/63117335'>谛听</a>啊啊啊</br>问下有没有人知道<a href='https://weibo.com/n/%E9%9D%B4%E4%B8%8B%E7%8C%AB%E8%85%B0%E5%AD%90'>靴猫老师</a>也在后面的鸣谢里，<a onclick='noticed('暂无该角色信息')'>小黑</a>说他永远15岁让我想到了<a href='https://baike.baidu.com/item/%E6%B4%9B%E5%A4%A9%E4%BE%9D/6753346'>洛天依</a>老师...</br>仅代表个人观点，请勿过分解读⚠️⚠️⚠️" }
];

// === 网站配置对象 ===
const siteConfig = {
	// 网站基本信息
	siteName: "凨狐的小窝",
	siteSubtitle: "一只兽兽的小窝",
	currentYear: new Date().getFullYear(),
	
	// 用户信息
	userName: "凨狐皦冰",
	userAvatar: {
		type: "image", // 选项: "icon" 或 "image"
		iconClass: "fas fa-wolf", // 当 type 为 "icon" 时使用
		imageUrl: "https://cdn.fis.ink/cdn/2025/08/10/6898552d1089d.webp" // 当 type 为 "image" 时使用
	},
	userBio: "这个名字...一看就很不想让人搜到 | 热爱动物虚拟形象的人(furrys) | 网站开发",
	email: "s@mcdr.top",
	
	// 社交链接
	socialLinks: [
		{ icon: "fas fa-envelope", url: "#" },
		{ icon: "fab fa-qq", url: "#" },
		{ icon: "fab fa-internet-explorer", url: "#" },
		{ icon: "fab fa-weixin", url: "#" }
	],
	
	// 页脚信息
	footer: {
		line1: "© {{year}} {{siteName}} | {{subtitle}}",
		line2: "部署于 Cloudflare Workers & Pages"
	},
	
	// 关于页面内容
	aboutContent: [
		"这是兽兽的小窝",
		"欢迎加入我们的Q群",
		"欢迎来北京线下兽聚及漫展捕捉，<span><a href='https://扩列.我爱你'>点此打开</a></span>",
		"如果你有任何建议或想法，欢迎通过我的联系页面与站长沟通，我会仔细查看每个建议"
	],
	
	// 其他元数据
	metaDescription: "凨狐的小窝"
};

const friends = [
    {
        Title: "线下捕捉(本站)",
        Describe: "漫展兽聚线下捕捉看这里哦",
        Url: "https://扩列.我爱你/",
        Image: "https://ui-avatars.com/api/?name=扩&background=ff3333&color=ffffff&rounded=true"
    },
	{
        Title: "Fishcpy的小破站",
        Describe: "非淡泊无以明志，非宁静无以致远",
        Url: "https://blog.fis.ink/",
        Image: "https://www.fis.ink/img/logo_c.png"
    }
];

const infoText = `请按以下步骤添加友情链接：
	1. 通过QQ或邮件通知我们
	2. 将本站添加到您的网站
	3. 发送您的网站名称、URL和描述`;


// 在data.js底部添加DOMContentLoaded事件
document.addEventListener('DOMContentLoaded', function() {
    // ===== 主要配置更新 =====
    
    // 1. 导航栏网站名称
    document.querySelector('#siteNameNav').textContent = siteConfig.siteName;
    
    // 2. 用户头像处理
    const userAvatar = document.getElementById('userAvatar');
    if (siteConfig.userAvatar.type === 'icon') {
        userAvatar.innerHTML = `<i class="${siteConfig.userAvatar.iconClass}"></i>`;
    } else if (siteConfig.userAvatar.imageUrl) {
        userAvatar.innerHTML = `<img src="${siteConfig.userAvatar.imageUrl}" alt="头像">`;
    }
    
    // 3. 用户名和描述
    document.getElementById('userName').textContent = siteConfig.userName;
    document.getElementById('userBio').textContent = siteConfig.userBio;
    
    // 4. 页脚内容
    const footer = siteConfig.footer;
    document.getElementById('footerContent').innerHTML = `
        <p>${footer.line1
            .replace('{{year}}', siteConfig.currentYear)
            .replace('{{siteName}}', siteConfig.siteName)
            .replace('{{subtitle}}', siteConfig.siteSubtitle)}
        </p>
        <p>${footer.line2}</p>
    `;
    
    // 5. 关于页面内容
    document.getElementById('aboutContent').innerHTML = 
        siteConfig.aboutContent.map(p => `<p>${p}</p>`).join('');
    
    // 6. 网站标题
    document.title = `${siteConfig.siteName} - ${siteConfig.siteSubtitle}`;
});










