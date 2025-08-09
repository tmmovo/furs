// 中国省份名称到英文简写的映射
const greetingsMap = {
    "北京": "AUV，京爷您来了", "天津": "来到了天津卫...", "河北": "这么近那么美，周末到河北", 
	"山西": "煤炭属于可再生资源，再生方式是可以通过击杀凋零骷髅获得1~3个", 
	"内蒙古": "日常出行方式:🐎", "辽宁": "带π不老铁 这扯不扯", 
	"吉林": "你是黑龙江的吗？", "黑龙江": "你瞅啥", "上海": "上海规则怪谈:1不能喝蜜雪冰城2不能说中...", 
	"江苏": "江苏人挺一辈子腰听到这歌断了-<span><a href='https://b23.tv/BV1DJSHYVE6k'>点击打开</a></span>",
    "浙江": "你在...小姨子跟姐夫跑了的那个省？", "安徽": "蚌埠住了", "福建": "听不懂闽南话欸", 
	"江西": "人均富哥，38.8W财礼", "山东": "台风利奇马已致全省人死亡",
    "河南": "你咋没去外省打工", "湖北": "经常听人说到湖南", "湖南": "nia↘", "广东": "广东人不是人么都能吃吗？", 
	"广西": "出生就会跳科目三的省份", "海南": "你们不是都会爬树吗", "重庆": "重庆不是四川的吗？", 
	"四川": "你们那有直的东西吗", "贵州": "贵州属于四川还是云南", "云南": "我是云南的↘云南...",
    "西藏": "ཁྱེད་རང་གི་ལག་ཤེས་ཀྱི་ཚོད་ལྟ་ལ་རྟ་ཕྱིར་འཁོར་བ་བཞུགས་ས་ནང་དུ་འཇུག་དགོས་སམ།", "陕西": "人均兵马俑", 
	"甘肃": "沙漠取水挺困难的吧", "青海": "没听过，好像是青岛？", "宁夏": "宁夏是省啊？",
    "新疆": "Apple U!", "台湾": "傑哥不要啦", "香港": "你能好好學學普通話嗎？", "澳门": "走，帶我去贏一把", 
	"美国": "Free America, Shooting Every Day", "伊朗": "موشک ایران به موقعیت دقیق و مستقیم پرتاب کرد...", 
	"以色列": "ברגידה המשוריינת הישראלית 401 הרסה את המכנסיים...הטיל האיראני", "德国": "\\o\\o\\o\\o\\o\\o\\o", 
	"朝鲜": "按理来说...朝鲜人应该看不到的吧？", "印度": "I just bought a plane, it got hit"
};
// 获取元素
const welcomeText = document.getElementById('welcome-text');
const locationInfo = document.getElementById('location');
        
// 获取IP信息并更新页面
async function getIPInfo() {
    try {
        const response = await fetch('https://api.vore.top/api/IPdata');
        const data = await response.json();
        
        if (data.code === 200) {
            locationInfo.textContent = data.adcode.p;
            
            // 生成欢迎语
            let greeting;
            if (data.ipinfo.cnip) {
                // 国内IP
                const province = data.adcode.p;
                greeting = greetingsMap[province] || `${province} `;
            } else {
                // 国外IP
                const country = data.adcode.p;
                greeting = `${country} `;
            }
            
            // 显示欢迎语
            welcomeText.textContent = greeting;
        } else {
            console.Error('[IP-SYSTEM-CONSOLE] 获取IP信息失败: ' + data.msg);
        }
    } catch (error) {
        console.Error('[IP-SYSTEM-CONSOLE] 网络请求失败: ' + error.message);
    }
}
        
// 页面加载时获取IP信息
window.addEventListener('DOMContentLoaded', getIPInfo);