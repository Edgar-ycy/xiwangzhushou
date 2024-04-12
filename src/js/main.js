/**
 * 常用JS变量:
 * agentEvent = 代理模式下自动点击模块
 * acEvent= 无障碍模式下自动点击模块
 * device = 设备信息模块
 * file = 文件处理模块
 * http = HTTP网络请求模块
 * shell = shell命令模块
 * thread= 多线程模块
 * image = 图色查找模块
 * utils= 工具类模块
 * global = 全局快捷方式模块
 * 常用java变量：
 *  context : Android的Context对象
 *  javaLoader : java的类加载器对象
 * 导入Java类或者包：
 *  importClass(类名) = 导入java类
 *      例如: importClass(java.io.File) 导入java的 File 类
 *  importPackage(包名) =导入java包名下的所有类
 *      例如: importPackage(java.util) 导入java.util下的类
 *
 */

function main() {
    //开始再这里编写代码了！！
    toast("Hello World");
    var my_name = readConfigString("my_name");
    logd("姓名: " + my_name);
    logd("******" + readConfigString("t0"));
    logd("******" + readConfigString("t1"));
    logd("******" + readConfigString("t2"));
    logd("******" + readConfigString("t3"));

    logd("年龄: " + readConfigString("age"));
    logd("听音乐: " + readConfigString("music"));
    logd("是不是一年级: " + readConfigString("one"));
    logd("备注: " + readConfigString("mark"));
    logd("jobTaskTag..." + readConfigString("jobTaskTag"));
    //如果自动化服务正常
    if (!autoServiceStart(3)) {
        logd("自动化服务启动失败，无法执行脚本")
        exit();
        return;
    }
    logd("开始执行脚本...")


    // if (!netcardProcessor()) {
    //     return;
    // }
    // home();
}

function netcardProcessor() {
    logd("开始进行卡密验证")
    // 官方自带的卡密系统
    // appId 和 appSecret的值 请到 http://uc.ieasyclick.com/ 进行注册后提卡
    let appId = "";
    let appSecret = "";
    let cardNo = readConfigString("cardNo")
    if (cardNo == null || cardNo == undefined || cardNo.length <= 0) {
        toast("请输入卡密")
        loge("请输入卡密")
        exit()
        return false;
    }
    let inited = ecNetCard.netCardInit(appId, appSecret)
    logd("inited card => " + JSON.stringify(inited));
    let bind = ecNetCard.netCardBind(cardNo)
    let bindResult = false;
    if (bind != null && bind != undefined && bind["code"] == 0) {
        logd("卡密绑定成功")
        let leftDays = bind['data']['leftDays'] + "天";
        logd("剩余时间：" + leftDays);
        logd("激活时间：" + bind['data']['startTime'])
        logd("过期时间：" + bind['data']['expireTime'])
        bindResult = true;
        toast("卡密剩余时间:" + leftDays)
    } else {
        if (bind == null || bind == undefined) {
            loge("卡密绑定失败,无返回值 ")
            let msg = "卡密绑定失败,无返回值"
            loge(msg)
            toast(msg)
        } else {
            let msg = "卡密绑定失败: " + bind["msg"]
            loge(msg)
            toast(msg)
        }
    }
    return bindResult;
}
function autoServiceStart(time) {
    for (var i = 0; i < time; i++) {
        if (isServiceOk()) {
            return true;
        }
        var started = startEnv();
        logd("第" + (i + 1) + "次启动服务结果: " + started);
        if (isServiceOk()) {
            return true;
        }
    }
    return isServiceOk();
}

main();











var height = device.getScreenHeight();
setFetchNodeMode(1,true,true,"nsf");
var array = []
uiset()
console.log(array)
inrograms()
a = 0
// exit()
while (true) {
    sleep(1000);
    var 填写信息 = text("填写信息").getOneNodeInfo(0);
    if (填写信息) {
        填写信息.clickCenter()
        sleep(1000);
        Input()
        console.log("end")
        sleep(1000);
        var 提交 = text("提交").getOneNodeInfo(0);
        if (提交) {
            提交.clickEx()
            sleep(5000);
            a++
            if (a===array.length) {
                for (let i = 0; i < 8; i++) {
                    back()
                    sleep(500);
                }
                exit()
            }
        }
    } else {
        var 点此提交 = text("点此提交").getOneNodeInfo(0);
        if (点此提交) {
            点此提交.clickCenter()
            sleep(1000);
        }
        var 再添一条 = text("再添一条").getOneNodeInfo(0);
        if (再添一条) {
            再添一条.clickCenter()
            sleep(1000);
        }
        setFetchNodeMode(1,false,true,"nsf");
        var 已提交= text("已提交").getOneNodeInfo(0);
        if (已提交) {
            var more= desc("更多").getOneNodeInfo(0);
            if (more) {
                more.clickCenter()
                sleep(2000);
                var Refresh= textMatch("重新进入").getOneNodeInfo(5000);
                if (Refresh) {
                    Refresh.clickCenter()
                    sleep(2000);
                }
            }
        }
        setFetchNodeMode(1,true,true,"nsf");
    }
}

function Input() {
    var 点此输入= text("点此输入").getOneNodeInfo(0);
    if (点此输入) {
        inputText(clz("android.widget.EditText"), readConfigString("my_name"))
        sleep(500);
        点此输入.clickCenter()
        sleep(1000);
        back()
        sleep(1000);
    }
    var region = text(array[a]).getOneNodeInfo(0);
    if (region) {
        toast(array[a])
        region.clickEx()
        sleep(1000);
    }
    // swipeToPoint(500,height*0.8,500,height*0.1,1000)
    // sleep(1000);
    var personnel = text("仪表专业").getOneNodeInfo(0);
    if (personnel) {
        toast("仪表专业");
        personnel.clickEx()
        sleep(500);
    }
    // swipeToPoint(500,height*0.8,500,height*0.1,1000)
    // sleep(1000);
    var Notfound = text("未发现").getOneNodeInfo(0);
    if (Notfound) {
        toast("未发现");
        Notfound.clickEx()
        sleep(500);
    }
    // swipeToPoint(500,height*0.8,500,height*0.1,1000)
    // sleep(1000);
    var normal= text("正常").getNodeInfo(0);
    if (normal) {
        for (let i = 0; i < normal.length; i++) {
            if (i===7) {
                break
            }
            toast("正常"+i);
            normal[i].clickEx()
            sleep(500);
        }
    }
    // swipeToPoint(500,height*0.8,500,height*0.1,1000)
    // sleep(500);
}

function uiset() {
    if (readConfigString("公用工程工区") === "true") {
        array.push("公用工程工区")
    }
    if (readConfigString("硅烷回收工区") === "true") {
        array.push("硅烷回收工区")
    }
    if (readConfigString("硅烷回收工区") === "true") {
        array.push("硅烷回收工区")
    }
    if (readConfigString("还原2工区") === "true") {
        array.push("还原2工区")
    }
    if (readConfigString("还原3工区") === "true") {
        array.push("还原3工区")
    }
    if (readConfigString("尾气1工区") === "true") {
        array.push("尾气1工区")
    }
    if (readConfigString("尾气2工区") === "true") {
        array.push("尾气2工区")
    }
    if (readConfigString("尾气3工区") === "true") {
        array.push("尾气3工区")
    }
    if (readConfigString("精馏1工区") === "true") {
        array.push("精馏1工区")
    }
    if (readConfigString("精馏2工区") === "true") {
        array.push("精馏2工区")
    }
    if (readConfigString("精馏3工区") === "true") {
        array.push("精馏3工区")
    }
    if (readConfigString("冷氢化1工区") === "true") {
        array.push("冷氢化1工区")
    }
    if (readConfigString("冷氢化2工区") === "true") {
        array.push("冷氢化2工区")
    }
    if (readConfigString("冷氢化3工区") === "true") {
        array.push("冷氢化3工区")
    }
    if (readConfigString("整理1工区") === "true") {
        array.push("整理1工区")
    }
    if (readConfigString("整理2工区") === "true") {
        array.push("整理2工区")
    }
    if (readConfigString("整理3工区") === "true") {
        array.push("整理3工区")
    }
}

function inrograms(){
    while(true){
        var result = getRunningPkg();
        if (result!=="com.tencent.mm") {
            utils.openApp("com.tencent.mm");
            sleep(3000);
        }
        var 文件传输助手= text("文件传输助手").getOneNodeInfo(0);
        if (文件传输助手) {
            文件传输助手.clickCenter()
            sleep(2000);
        }
        var 表情= desc("表情").getOneNodeInfo(0);
        if (表情) {
            sleep(1000);
            inputText(clz("android.widget.EditText"),"https://www.qun100.com/detail/0a/1549972362647216129?type=1")
            sleep(1000);
            var 发送= text("发送").getOneNodeInfo(0);
            if (发送) {
                发送.clickCenter()
                sleep(1000);
            }
        }
        var URL= text("https://www.qun100.com/detail/0a/1549972362647216129?type=1").getNodeInfo(0)
        if (URL) {
            URL[URL.length-1].click()
            sleep(3000);
        }
        var 打开群报数=textMatch("打开 群报数").getOneNodeInfo(0)
        if (打开群报数) {
            打开群报数.clickCenter()
            sleep(3000);
        }
        var 允许=text("允许").getOneNodeInfo(0)
        if (允许) {
            允许.clickCenter()
            sleep(3000);
        }
        var 点此提交 = text("点此提交").getOneNodeInfo(0);
        if (点此提交) {
            sleep(1000);
            return
        }
        sleep(1000);
    }
}