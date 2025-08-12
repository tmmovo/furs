// 帖子数据
const posts = [
    { title: "测试贴-你好世界", date: "2025-08-07", tags: ["日常", "网站"], content: "这是一篇测试帖子，发布日期接近于建站日期" },
    { title: "和朋友去北京ICOS漫展", date: "2025-07-13", tags: ["日常", "漫展"], content: "主要就去漫展找兽兽去了，一天走的好累TAT" },
	{ title: "更新线下捕捉页", date: "2025-08-08", tags: ["网站"], content: "更新了漫展或兽聚捕捉，<span><a href='https://扩列.我爱你'>点此进入</a></span>，在关于页也有入口" },
	{ title: "修复bug", date: "2025-08-08", tags: ["网站"], content: "修复一个无法查看帖子详情的问题，原因是关于页的section没加闭合标签，有其他bug可以来<span><a href='https://github.com/tmmovo/furs'>https://github.com/tmmovo/furs</a></span>提交哦" }
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
        Image: "https://ui-avatars.com/api/?name=扩&background=0081ff&color=ff3333&rounded=true"
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







