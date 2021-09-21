---
title: android
abbrlink: 92bcb62d
date: 2021-05-24 13:18:32
---

## java
implements 可以继承多个类

## 插件
Alibaba Java Coding Guidelines
Log.i("RxJava",s+","+Thread.currentThread().getName()); // 查看当前线程
runOnUiThread(new Runnable() { // 切换到主线程
    @Override
    public void run() {
        changeViewStateByNetState(NET_STATE_ERROR);
    }
});

## java 对比字符串
http://c.biancheng.net/view/5808.html
String token;
String url = chain.request().url().toString();
if (url.endsWith("/operate/gasStation")) {
    token = CommonUtils.getToken(context, SERVICE_ID_GAS_STATION);
} else {
    token = CommonUtils.getToken(context, SERVICE_ID);
}

## Manifest
```java
<uses-permission android:name="android.permission.INTERNET" /> // 权限
<application
    android:allowBackup="true" // 允许备份
    android:supportsRtl="true" // 从右到左的布局
    android:hardwareAccelerated="true" // 硬件加速
    tools:ignore="GoogleAppIndexingWarning" // 提示警告
>
    <activity
        android:launchMode="singleTask" // 启动模式, standard 默认标准启动模式
        android:screenOrientation="fullSensor" // 屏幕中的显示的方向，由方向传感器决定
        // android:screenOrientation="portrait" 竖屏锁定
        // android:screenOrientation="landscape" 横屏锁定
    />
</ application>
```

## MainActivity
```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    if (savedInstanceState != null) { // 相当于 sessionStorage
        String val = savedInstanceState.getString("KEY", "");
    }
}
```

## Layout
1368 * 700
```java
// 约束布局
<androidx.constraintlayout.widget.ConstraintLayout
    android:id="@+id/item"
    android:layout_width="0dp"
    android:layout_height="0dp"
    android:background="@drawable/shape_detail_bg"
    android:gravity="bottom"
    android:orientation="vertical" // 相对布局不需要这个属性
    app:layout_constraintBottom_toBottomOf="@id/guideline4"
    app:layout_constraintEnd_toEndOf="@id/guideline5"
    app:layout_constraintStart_toStartOf="@id/left"
    app:layout_constraintTop_toTopOf="@id/top">
```

// RelativeLayout
```java
// 相对于给定ID
android:layout_above 控件的底部置于给定ID的控件之上
android:layout_below 控件的底部置于给定ID的控件之下
android:layout_toLeftOf 控件的右边缘与给定ID的控件左边缘对齐
android:layout_toRightOf 控件的左边缘与给定ID的控件右边缘对齐
android:layout_alignBaseline 控件的baseline与给定ID的baseline对齐
android:layout_alignTop 控件的顶部边缘与给定ID的顶部边缘对齐
android:layout_alignBottom 控件的底部边缘与给定ID的底部边缘对齐
android:layout_alignLeft 控件的左边缘与给定ID的左边缘对齐
android:layout_alignRight 控件的右边缘与给定ID的右边缘对齐

// 相对于父类 （如果为 true）
android:layout_alignParentTop 将该控件的顶部与其父控件的顶部对齐
android:layout_alignParentBottom 将该控件的底部与其父控件的底部对齐
android:layout_alignParentLeft 将该控件的左部与其父控件的左部对齐
android:layout_alignParentRight 将该控件的右部与其父控件的右部对齐

// 居中
android:layout_centerHorizontal 将该控件的置于水平居中
android:layout_centerVertical 将该控件的置于垂直居中
android:layout_centerInParent 将该控件的置于父控件的中央

// 水平移动
android:layout_marginTop 上偏移的值
android:layout_marginBottom 下偏移的值
android:layout_marginLeft 左偏移的值
android:layout_marginRight 右偏移的值
```

// LinearLayout
```java

// FrameLayout 帧布局


// Style 样式
<stroke android:width="2dp" android:color="#f0f" /> // 描边
<size android:width="50dp" android:height="50dp" /> // 大小
<solid android:color="@android:color/white"/> // 填充色
<gradient android:centerColor="#00ff00" android:endColor="#0000ff" android:startColor="#ff0000" android:type="linear" /> // 渐变色
<corners android:radius="10dp"/> // 圆角
<padding android:bottom="2dp" android:left="2dp" android:right="2dp" android:top="2dp"/>

<item android:state_pressed="true"> // 按压的时候
    <shape>
        <solid android:color="#FF9900" />
        <corners android:radius="5dp" />
    </shape>
</item>
<item android:state_pressed="false"> // 默认状态
    <shape>
        <solid android:color="#FF9900" />
        <corners android:radius="5dp" />
    </shape>
</item>

// textStyle 加粗斜体
// textAlignment 文本对齐方式
rb200.setTextColor(Color.parseColor("#FFF"));

android:visibility="invisible" // 不可见
android:visibility="visible" // 可见
android:visibility="gone" // 隐藏

btn.setVisibility(View.GONE);
btn.setVisibility(View.VISIBLE);
btn.setVisibility(View.INVISIBLE);

// 文字在控件中的对齐方式
android:gravity = "center_vertical|center_horizontal"
// 控件在布局中的对齐方式
android:layout_gravity = "center"
// 禁用滑动到底部的特效
android:overScrollMode="never"

// include
<include
    android:id="@+id/navi_title"
    layout="@layout/nav"
    app:layout_constraintEnd_toEndOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintTop_toTopOf="parent" />

// guiline
<androidx.constraintlayout.widget.Guideline
    android:id="@+id/guideline"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    app:layout_constraintGuide_percent="0.5" />
<androidx.constraintlayout.widget.Guideline
    android:id="@+id/v1"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:orientation="horizontal"
    app:layout_constraintGuide_percent="0.25" />
@android:color/transparent
<TextView
    android:id="@+id/textView"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="@string/title"
    android:textColor="#fff"
    android:textSize="24sp"
    android:maxLines="1" // 一行
    android:ellipsize="end" // 多余的显示点点点 （需要配合maxLines）
    android:layout_gravity="center_horizontal" // 内部元素的排列方式
    app:layout_constraintBottom_toBottomOf="@+id/top"
    app:layout_constraintStart_toEndOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintTop_toTopOf="parent" />

// 直接指定 png (设置内外边距)
    // android:drawableRight="@drawable/btn_speller_delete_pressed"
    // android:drawablePadding="5dp"

// 文字删除线
    // text.getPaint().setFlags(Paint.STRIKE_THRU_TEXT_FLAG); // UNDERLINE_TEXT_FLAG text.setText(Html.fromHtml("<u>呵呵</u>"));
    // text.getPaint().setAntiAlias(true);

// 跑马灯
    // android:singleLine="true"
    // android:focusable="true"
    // android:ellipsize="marquee"
    // android:focusableInTouchMode="true"


<EditText
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        android:textColor="#333333"
        android:background="#ddd"
        android:id="@+id/edit"
        android:hint="请输入密码"
        android:maxLines="2"
        android:inputType="textPassword"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content" />

editText.addTextChangedListener(new TextWatcher() { // 绑定事件
    @Override
    public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

    @Override
    public void onTextChanged(CharSequence s, int start, int before, int count) {}

    @Override
    public void afterTextChanged(Editable s) {}
});
String inputText = editText.getText().toString(); // 获取文本
Toast.makeText(FirstActivity.this, inputText, Toast.LENGTH_SHORT).show(); // 弹出


// button
<Button
    android:id="@+id/button2"
    android:layout_width="wrap_content" // match_parent
    android:layout_height="wrap_content"
    android:layout_marginLeft="12dp"
    android:layout_marginBottom="12dp"
    android:text="@string/btn1"
    app:backgroundTint="#333"
    app:layout_constraintBottom_toBottomOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    android:layout_gravity="bottom" />


// Toast
public class TestActivity extends AppCompatActivity {
    Button submit;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        submit = findViewById(R.id.submit);
        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Context context = getApplicationContext();
                CharSequence text = "Hello world!";
                int duration = Toast.LENGTH_SHORT;
                Toast toast = Toast.makeText(context, text, duration);
                toast.show();
            }
        });
    }
}
// https://blog.csdn.net/duwangthefirst/article/details/80264155


// checkbox 类似的组件ToggleButto，Switch
<CheckBox
    android:id="@+id/c_1"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:button="@drawable/bg_checkbox"
    app:layout_constraintTop_toBottomOf="@+id/text"
    app:layout_constraintLeft_toLeftOf="parent"
    android:text="android"
    android:textSize="20sp" />
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:state_checked="false" android:drawable="@drawable/ic_img_01"></item> // 图片资源
    <item android:state_checked="true" android:drawable="@drawable/ic_img_02"></item>
</selector>
c1 = findViewById(R.id.c_1);
c1.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
    @Override
    public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
        Toast.makeText(Test2.this, isChecked?"是":"否", Toast.LENGTH_LONG).show(); // 当前页面上下文 test2.java
    }
});

// WebView to do
WebView web;
WebSettings webSettings = web.getSettings();
webSettings.setJavaScriptEnabled(true);
web.setWebViewClient(new Callback());
web.loadUrl("http://www.baidu.com");

// ImageView
private ImageView img; // img 变量
img = findViewById(R.id.img);
img.getBackground().setTint(initColor);

// scaleType
// fitXY 撑满控件，宽高可能发生改变
// fitCenter 保持宽高比缩放，直至能够完全显示
// centerCrop 保持宽高比缩放，直至完全覆盖控件，裁剪显示
<ImageView
    android:layout_width="200dp"
    android:layout_height="400dp"
    android:background="#FF9900"
    app:layout_constraintRight_toRightOf="parent"
    app:layout_constraintBottom_toBottomOf="parent"
    android:src="@drawable/ic_img_01"
    android:scaleType="centerCrop"
    />
imageView.setImageResource(R.drawable.img); // 本地图片
// 加载一张网络加载第三方库 https://github.com/bumptech/glide
Glide.with(this)
.load("http://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png")
.into(imageView);

// view
<View
    android:id="@+id/popupMain"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/black_60"
    android:elevation="2dp"/> // 类似于 z-index

// Intent
Intent intent = new Intent(A.this, B.class); // current A, next B
startActivity(intent);

/*
    1 传递数据 方式
*/
B.actionStart(A.this, 9527, 'wenhao') // A 调用
public static void actionStart(Context context, int uid, String name, Boolean state) { // B 提供
    Intent intent = new Intent(context, B.class);
    intent.putExtra("uid", uid);
    intent.putExtra("name", name);
    intent.putExtra("state", name);
    context.startActivity(intent);
}
// onCreate B 获取
Intent intent = getIntent();
String name = intent.getStringExtra("name");
int uid = intent.getIntExtra("uid", 0);
Boolean state = intent.getBooleanExtra("state", false);

/*
    2 setComponent 方式
*/
Intent intent = new Intent();
intent.setClass(A.this, B.class);
startActivity(intent);
// category 可以是多个
<action android:name="com.example.appandroidtest.ACTION_START"/>
<category android:name="android.intent.category.DEFAULT"/>
<category android:name="android.intent.category.MY_DEFAULT"/>
Intent intent = new Intent("com.example.appandroidtest.ACTION_START");
intent.addCategory("android.intent.category.MY_DEFAULT");
startActivity(intent);

/*
    3 返回数据给上一个活动
    用 forResult 来启动，在设置回调方法 onActivityResult
*/
Intent intent = new Intent(A.this, B.class);
startActivityForResult(intent, 1);
// 监听返回来的函数
protected void onActivityResult(int requestCode, int resultCode, Intent data) { // requestCode, resultCode, data
    super.onActivityResult(requestCode, resultCode, data);
    switch (requestCode) {
        case 1:
            if (resultCode == RESULT_OK) {
                String returnedData = data.getStringExtra("data_return");
                Log.d(Tag,"no");
            }
            break;
        default:
    }
    Log.d(Tag, "result");
}
// 活动页面 跳转回来的方法
setResult(RESULT_OK, intent);
public void onBackPressed() { // 用户点击物理按钮返回 监听事件
    Intent intent = new Intent();
    intent.putExtra("data return", "Hello FirstActive");
    setResult(RESULT_OK, intent);
    finish();
}

/*
   4 webview 方式
*/
Intent intent = new Intent(Intent.ACTION_VIEW);
intent.setData(Uri.parse("http://www.baidu.com"));
startActivity(intent);

/*
    iphone 方式
    电话需要加上权限 <uses-permission id="android.permission.CALL_PHONE" />
*/
Uri uri = Uri.parse("tel:10010");
Intent intent = new Intent(Intent.ACTION_DIAL, uri); // Intent.ACTION_CALL
startActivity(intent);

/*
    5 发彩信 方式
    给10010发送内容为“Hello”的短信
*/
Uri uri = Uri.parse("smsto:10010");
Intent intent = new Intent(Intent.ACTION_SENDTO, uri);
intent.putExtra("sms_body", "Hello");
startActivity(intent);
// 发送彩信（相当于发送带附件的短信）
Intent intent = new Intent(Intent.ACTION_SEND);
intent.putExtra("sms_body", "Hello");
Uri uri = Uri.parse("content://media/external/images/media/23");
intent.putExtra(Intent.EXTRA_STREAM, uri);
intent.setType("image/png");

/*
    6 打开浏览器
*/
Uri uri = Uri.parse("https://www.baidu.com");
Intent intent = new Intent(Intent.ACTION_VIEW, uri);
startActivity(intent);

// 图片
Intent intent = new Intent(Intent.ACTION_GET_CONTENT);
intent.setType("image/*");
startActivityForResult(intent, 2);

// 打开拍照程序
Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
startActivityForResult(intent, 1);

// 取出照片数据
Bundle extras = intent.getExtras();
Bitmap bitmap = (Bitmap) extras.get("data");

// 进入设置页面
Intent intent = new Intent(android.provider.Settings.ACTION_SETTINGS);
startActivity(intent);

// 调用拍照
Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
startActivityForResult(intent, 1);
// 获取照片
Bundle extras = intent.getExtras();
Bitmap bitmap = (Bitmap) extras.get("data");

// 卸载程序
Uri uri = Uri.parse("package:" + packageName);
Intent intent = new Intent(Intent.ACTION_DELETE, uri);
startActivity(intent);

// 隐式方法

// https://www.jianshu.com/p/67d99a82509b
```
### 启动模式
android:launchMode="singleTask" // singleInstance 允许第三方调用共享活动

### MainActivity.java
生命周期
onCreate 完成初始化操作
onStart 活动从不可见转变为可见调用 onRestart 活动重新被启动调用
onResume 活动准备和用户交互调用
onPause 活动准备启动或者恢复一个活动
onStop 活动不可见调用
onDestroy 活动在销毁前调用，释放内存操作

```java
package com.example.myapplication;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    String TAG="MyTag";
    TextView textView;
    ImageView img;
    Button btn;
  @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Log.d(TAG, "onCreate");
        // finish(); // 关闭这个 view
      textView = findViewById(R.id.textView7); // 查找节点
      btn = findViewById(R.id.btn);
      img = findViewById(R.id.img);

      btn.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              textView.setText("click");
          }
      });

      img.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
                Intent intent = new Intent()
          }
      });
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.d(TAG, "onStart");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.d(TAG, "onPause");
        textView.setText("pause");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.d(TAG, "onStop");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.d(TAG, "onRestart");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.d(TAG, "onDestroy");
    }
}
```


### progressBar
```java
if (progressBar.getVisibility() == View.GONE) {
    progressBar.setVisibility(View.VISIBLE);
} else {
    progressBar.setVisibility(View.GONE);
}
```


### ProgressDialog 103


### okhttp
```java
implementation "com.squareup.retrofit2:retrofit:2.8.0"
implementation "com.squareup.retrofit2:converter-gson:2.8.0"
implementation "com.squareup.okhttp3:logging-interceptor:4.4.1"
implementation "com.squareup.retrofit2:adapter-rxjava2:2.6.0"
implementation 'com.squareup.okhttp3:logging-interceptor:4.4.1'
implementation "io.reactivex.rxjava2:rxjava:2.1.10"
implementation "io.reactivex.rxjava2:rxandroid:2.0.2"
```

### 快捷键
插入下一行 shift + enter
选种单词 opt + ↑
移动到错误 fn + f2
类的层结构 control + h


### 测试绘制时间
long startTime = System.currentTimeMillis();
long startTime = System.currentTimeMillis();
long totalTime = endTime-startTime;
Log.d("TTTT","totalTime:"+totalTime);


### adb
https://www.yeshen.com/faqs/H15tDZ6YW


### android第一行代码 第二版源码
https://www.jianshu.com/p/fe8515dc8e34?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation


### 自定义右上角菜单
```java
// res 下创建 menu 文件夹 main.xml
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:id="@+id/add_item" android:title="Add"/>
    <item android:id="@+id/remove_item" android:title="Remove"/>
</menu>

@Override
public boolean onCreateOptionsMenu(Menu menu) {
    getMenuInflater().inflate(R.menu.main, menu);
    return true;
}

@Override
public boolean onOptionsItemSelected(MenuItem item) {
  switch (item.getItemId()) {
    case R.id.add_item:
      Toast.makeText(this, "You clicked Add", Toast.LENGTH_SHORT).show();
      break;
    case R.id.remove_item:
      Toast.makeText(this, "You clicked Remove", Toast.LENGTH_SHORT).show();
      break;
    default:
  }
  return true;
}
```

### 结束进程
```java
ActivityCollector.finishAll();
android.os.Process.killProcess(android.os.Process.myPid());
```

### 标题栏 隐藏
```java
ActionBar actionbar = getSupportActionBar();
if (actionbar != null) {
    actionbar.hide();
}
```

### learned
https://www.cnblogs.com/xgjblog/p/13042321.html


### okhttp
implementation "com.squareup.retrofit2:retrofit:2.8.0"
implementation "com.squareup.retrofit2:converter-gson:2.8.0"
implementation "com.squareup.okhttp3:logging-interceptor:4.4.1"
implementation "com.squareup.retrofit2:adapter-rxjava2:2.6.0"
implementation "io.reactivex.rxjava2:rxjava:2.1.10"
implementation "io.reactivex.rxjava2:rxandroid:2.0.2"

### 监听网络状态
```java
private IntentFilter intentFilter;
private NetworkChangeReceiver networkChangeReceiver;

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    intentFilter = new IntentFilter();
    intentFilter.addAction("android.net.conn.CONNECTIVITY_CHANGE");
    networkChangeReceiver = new NetworkChangeReceiver();
    registerReceiver(networkChangeReceiver, intentFilter);
}

class NetworkChangeReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        Toast.makeText(context, "network changes", Toast.LENGTH_SHORT).show();
    }
}

@Override
protected void onDestroy() {
    super.onDestroy();
    unregisterReceiver(networkChangeReceiver); // 动态注册的广播记得取消注册
}
// <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
// 监听系统开机广播
// <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />


// TabLayout
<com.google.android.material.tabs.TabLayout
    android:id="@+id/menu"
    android:layout_width="200dp"
    app:tabMode="scrollable" // 滚动条
    app:tabContentStart="100dp" // mrl
    android:layout_height="match_parent"
    tools:ignore="MissingConstraints">
    <com.google.android.material.tabs.TabItem
        android:text="凯"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/item" />
</com.google.android.material.tabs.TabLayout>

// ScrollView

// ScrollView add border style
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android"
    android:shape="rectangle">
    <solid
        android:color="@android:color/transparent"/>
    <stroke
        android:width="2dp"
        android:color="#000000"/>
</shape>

// HorizontalScrollView
// https://codechina.csdn.net/mirrors/soulrelay/VerticalViewPagerWithTabLayout
```




```


```java
// 0 layout
android:overScrollMode="never"

// 1 build.gradle 加入类包
implementation 'androidx.recyclerview:recyclerview:1.1.0'




// LinearLayoutManager layoutManager = new LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false);
// recyclerView.setLayoutManager(layoutManager);


```

### ImageView


### 动态设置shape
TextView textView = new TextView(this);
GradientDrawable drawable = new GradientDrawable();
drawable.setCornerRadius(5);
drawable.setStroke(1, Color.parseColor("#cccccc"));
drawable.setColor(Color.parseColor("#eeeeee"));
textView.setBackgroundDrawable(drawable);

https://www.jianshu.com/p/2467444d2664

### study
public int randomColor()
{
 Random random= new Random();
 return Color.argb(255, random.nextInt(256), random.nextInt(256),
 random.nextInt(256));
}

### 不透明度设置
https://www.jianshu.com/p/4c2b121accb6

### 层级不能被覆盖，背景色不准确
android:elevation="15dp"